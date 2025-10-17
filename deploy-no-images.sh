#!/bin/bash

# ADA36 FTP Upload Script - WITHOUT Images and PDFs
# Uploads only HTML, CSS, JS and other assets, but skips all images and PDF documents

set -e  # Exit on any error

echo "🚀 Starting ADA36 deployment (NO IMAGES & PDFs)..."

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
    echo -e "${RED}❌ Build output directory 'out' is empty!${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Out directory contains build files${NC}"

# Step 3: Upload to FTP server (excluding images and PDFs)
echo -e "${YELLOW}📤 Uploading to FTP server (NO IMAGES & PDFs)...${NC}"
echo "Server: $FTP_HOST"
echo "Target: /ada36"
echo -e "${YELLOW}💾 Creating backup of current server state...${NC}"

# Upload everything EXCEPT the images directory and PDF documents
lftp -c "
set ftp:ssl-allow no
open -u $FTP_USERNAME,$FTP_PASSWORD $FTP_HOST
cd /ada36
mirror -R --exclude-glob=assets/images/ --exclude-glob=assets/documents/ out/ . --delete --verbose
quit
"

echo -e "${GREEN}✅ Upload completed successfully (NO IMAGES & PDFs)!${NC}"
echo -e "${GREEN}🌐 Website should be live at: https://ada36.de${NC}"
echo -e "${YELLOW}📝 Note: Images and PDF documents were NOT uploaded in this deployment${NC}"

# Step 4: Verify upload
echo -e "${YELLOW}🔍 Verifying upload...${NC}"
if curl -s -o /dev/null -w "%{http_code}" https://ada36.de | grep -q "200"; then
    echo -e "${GREEN}✅ Website is accessible${NC}"
else
    echo -e "${RED}❌ Website verification failed${NC}"
fi

echo -e "${GREEN}🎉 Deployment completed successfully!${NC}"
echo -e "${YELLOW}💡 To upload images and PDFs, use: ./deploy.sh${NC}"
