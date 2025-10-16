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

# Step 2: Check if out directory exists
if [ ! -d "out" ]; then
    echo -e "${RED}❌ Build output directory 'out' not found!${NC}"
    exit 1
fi

# Step 3: Check if images have changed
echo -e "${YELLOW}🔍 Checking for image changes...${NC}"

# Create checksum file for images if it doesn't exist
IMAGES_CHECKSUM_FILE=".images-checksum"
IMAGES_DIR="public/assets/images/fullsize"

# Calculate current checksum of all images
if [ -d "$IMAGES_DIR" ]; then
    CURRENT_CHECKSUM=$(find "$IMAGES_DIR" -name "*.webp" -o -name "*.jpg" -o -name "*.png" | sort | xargs md5sum 2>/dev/null | md5sum | cut -d' ' -f1)
else
    CURRENT_CHECKSUM=""
fi

# Read previous checksum
if [ -f "$IMAGES_CHECKSUM_FILE" ]; then
    PREVIOUS_CHECKSUM=$(cat "$IMAGES_CHECKSUM_FILE")
else
    PREVIOUS_CHECKSUM=""
fi

# Compare checksums
if [ "$CURRENT_CHECKSUM" = "$PREVIOUS_CHECKSUM" ] && [ -n "$CURRENT_CHECKSUM" ]; then
    echo -e "${GREEN}✅ No image changes detected, skipping image upload${NC}"
    SKIP_IMAGES=true
else
    echo -e "${YELLOW}📁 Images changed, copying to output directory...${NC}"
    mkdir -p out/assets/images/fullsize
    cp public/assets/images/fullsize/*.webp out/assets/images/fullsize/ 2>/dev/null || echo "No WebP files to copy"
    
    # Save new checksum
    echo "$CURRENT_CHECKSUM" > "$IMAGES_CHECKSUM_FILE"
    echo -e "${GREEN}✅ Image checksum updated${NC}"
    SKIP_IMAGES=false
fi

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

# Upload new files
echo -e "${YELLOW}🔄 Syncing files to server...${NC}"

if [ "$SKIP_IMAGES" = true ]; then
    echo -e "${YELLOW}📤 Uploading files (excluding images)...${NC}"
    lftp -u $FTP_USERNAME,$FTP_PASSWORD sftp://$FTP_HOST -e "
cd ada36;
mirror -R out/ . --delete --verbose --exclude-glob .DS_Store --exclude-glob '*.jpg' --exclude-glob 'assets/images/fullsize/*';
quit"
else
    echo -e "${YELLOW}📤 Uploading all files (including images)...${NC}"
    lftp -u $FTP_USERNAME,$FTP_PASSWORD sftp://$FTP_HOST -e "
cd ada36;
mirror -R out/ . --delete --verbose --exclude-glob .DS_Store --exclude-glob '*.jpg';
quit"
fi

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
ls -la index.html;
quit"

echo -e "${GREEN}🎉 Deployment completed successfully!${NC}"
echo -e "${GREEN}📊 Deployment summary:${NC}"
echo "  - Build: ✅ Completed"
echo "  - Upload: ✅ Completed"
if [ "$SKIP_IMAGES" = true ]; then
    echo "  - Images: ⏭️ Skipped (no changes)"
else
    echo "  - Images: ✅ Uploaded (changes detected)"
fi
echo "  - Verification: ✅ Completed"
echo "  - Website: https://ada36.de"
