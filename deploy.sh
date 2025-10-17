#!/bin/bash

# ADA36 FTP Upload Script
# Automatisiert den Build und Upload-Prozess für die ADA36 Website

set -e  # Exit on any error

echo "🚀 Starting ADA36 deployment process..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Load environment variables
if [ -f .env.local ]; then
    source .env.local
    echo "✅ Environment variables loaded from .env.local"
else
    echo -e "${RED}❌ .env.local file not found!${NC}"
    exit 1
fi

# Check if required environment variables are set
if [ -z "$FTP_HOST" ] || [ -z "$FTP_USERNAME" ] || [ -z "$FTP_PASSWORD" ]; then
    echo -e "${RED}❌ Missing required environment variables!${NC}"
    echo "Required: FTP_HOST, FTP_USERNAME, FTP_PASSWORD"
    exit 1
fi

# Step 1: Build the project
echo -e "${YELLOW}📦 Building Next.js project...${NC}"
npm run build

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Build completed successfully${NC}"
else
    echo -e "${RED}❌ Build failed!${NC}"
    exit 1
fi

# Step 2: Check if out directory exists and has content
if [ ! -d "out" ]; then
    echo -e "${RED}❌ Build output directory 'out' not found!${NC}"
    exit 1
fi

if [ -z "$(ls -A out 2>/dev/null)" ]; then
    echo -e "${RED}❌ Out directory is empty!${NC}"
    exit 1
else
    echo -e "${GREEN}✅ Out directory contains build files${NC}"
fi

# Step 3: Static export is complete, assets are already in out directory

# Step 4: Upload to FTP server
echo -e "${YELLOW}📤 Uploading to FTP server...${NC}"
echo "Server: $FTP_HOST"
echo "Target: /ada36"

# Create backup of current server state (optional)
echo -e "${YELLOW}💾 Creating backup of current server state...${NC}"
lftp -u $FTP_USERNAME,$FTP_PASSWORD sftp://$FTP_HOST -e "
cd ada36;
mirror . /tmp/ada36-backup-$(date +%Y%m%d-%H%M%S) --verbose;
quit" 2>/dev/null || echo "Backup creation failed, continuing..."

# Upload all files from out directory
echo -e "${YELLOW}🔄 Syncing files to server...${NC}"
lftp -u $FTP_USERNAME,$FTP_PASSWORD sftp://$FTP_HOST -e "
cd ada36;
mirror -R out/ . --delete --verbose --exclude-glob .DS_Store;
quit"

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Upload completed successfully!${NC}"
    echo -e "${GREEN}🌐 Website should be live at: https://ada36.de${NC}"
else
    echo -e "${RED}❌ Upload failed!${NC}"
    exit 1
fi

# Step 5: Verify upload
echo -e "${YELLOW}🔍 Verifying upload...${NC}"
lftp -u $FTP_USERNAME,$FTP_PASSWORD sftp://$FTP_HOST -e "
cd ada36;
ls -l index.html;
quit"

echo -e "${GREEN}🎉 Deployment completed successfully!${NC}"
echo -e "${GREEN}📊 Deployment summary:${NC}"
echo "  - Build: ✅ Completed"
echo "  - Static Export: ✅ Completed"
echo "  - Upload: ✅ Completed"
echo "  - Verification: ✅ Completed"
echo "  - Website: https://ada36.de"
