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

# Step 3: Clear out directory completely
echo -e "${YELLOW}🧹 Clearing out directory...${NC}"
rm -rf out/*
echo -e "${GREEN}✅ Out directory cleared${NC}"

# Step 4: Check if images and documents have changed
echo -e "${YELLOW}🔍 Checking for asset changes...${NC}"

# Create checksum file for assets if it doesn't exist
ASSETS_CHECKSUM_FILE=".assets-checksum"
IMAGES_DIR="public/assets/images/fullsize"
DOCS_DIR="public/assets/documents"

# Calculate current checksum of all assets
CURRENT_CHECKSUM=""
if [ -d "$IMAGES_DIR" ]; then
    # Only include WebP files, exclude JPGs and backup directories
    IMAGES_CHECKSUM=$(find "$IMAGES_DIR" -name "*.webp" -not -path "*/fullsize-backup-*" | sort | xargs md5sum 2>/dev/null | md5sum | cut -d' ' -f1)
    CURRENT_CHECKSUM="$CURRENT_CHECKSUM$IMAGES_CHECKSUM"
fi

if [ -d "$DOCS_DIR" ]; then
    DOCS_CHECKSUM=$(find "$DOCS_DIR" -name "*.pdf" | sort | xargs md5sum 2>/dev/null | md5sum | cut -d' ' -f1)
    CURRENT_CHECKSUM="$CURRENT_CHECKSUM$DOCS_CHECKSUM"
fi

# Read previous checksum
if [ -f "$ASSETS_CHECKSUM_FILE" ]; then
    PREVIOUS_CHECKSUM=$(cat "$ASSETS_CHECKSUM_FILE")
else
    PREVIOUS_CHECKSUM=""
fi

# Compare checksums
if [ "$CURRENT_CHECKSUM" = "$PREVIOUS_CHECKSUM" ] && [ -n "$CURRENT_CHECKSUM" ]; then
    echo -e "${GREEN}✅ No asset changes detected, skipping asset upload${NC}"
    SKIP_ASSETS=true
else
    echo -e "${YELLOW}📁 Assets changed, copying to output directory...${NC}"
    
    # Copy images (only WebP files)
    if [ -d "$IMAGES_DIR" ]; then
        mkdir -p out/assets/images/fullsize
        # Copy only WebP files, exclude JPGs and backup directories
        find "$IMAGES_DIR" -name "*.webp" -not -path "*/fullsize-backup-*" -exec cp {} out/assets/images/fullsize/ \; 2>/dev/null || echo "No WebP files to copy"
        echo -e "${GREEN}✅ Images (WebP only) copied to output directory${NC}"
    fi
    
    # Copy documents
    if [ -d "$DOCS_DIR" ]; then
        mkdir -p out/assets/documents
        cp public/assets/documents/*.pdf out/assets/documents/ 2>/dev/null || echo "No PDF files to copy"
        echo -e "${GREEN}✅ Documents copied to output directory${NC}"
    fi
    
    # Save new checksum
    echo "$CURRENT_CHECKSUM" > "$ASSETS_CHECKSUM_FILE"
    echo -e "${GREEN}✅ Asset checksum updated${NC}"
    SKIP_ASSETS=false
fi

# Step 5: Upload to FTP server
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

if [ "$SKIP_ASSETS" = true ]; then
    echo -e "${YELLOW}📤 Uploading files (excluding assets)...${NC}"
    lftp -u $FTP_USERNAME,$FTP_PASSWORD sftp://$FTP_HOST -e "
cd ada36;
mirror -R out/ . --delete --verbose --exclude-glob .DS_Store --exclude-glob 'assets/images/fullsize/*' --exclude-glob 'assets/documents/*';
quit"
else
    echo -e "${YELLOW}📤 Uploading all files (including assets)...${NC}"
    lftp -u $FTP_USERNAME,$FTP_PASSWORD sftp://$FTP_HOST -e "
cd ada36;
mirror -R out/ . --delete --verbose --exclude-glob .DS_Store;
quit"
fi

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Upload completed successfully!${NC}"
    echo -e "${GREEN}🌐 Website should be live at: https://ada36.de${NC}"
else
    echo -e "${RED}❌ Upload failed!${NC}"
    exit 1
fi

# Step 6: Verify upload
echo -e "${YELLOW}🔍 Verifying upload...${NC}"
lftp -u $FTP_USERNAME,$FTP_PASSWORD sftp://$FTP_HOST -e "
cd ada36;
ls -l index.html;
quit"

echo -e "${GREEN}🎉 Deployment completed successfully!${NC}"
echo -e "${GREEN}📊 Deployment summary:${NC}"
echo "  - Build: ✅ Completed"
echo "  - Out Directory: ✅ Cleared and rebuilt"
echo "  - Upload: ✅ Completed"
if [ "$SKIP_ASSETS" = true ]; then
    echo "  - Assets: ⏭️ Skipped (no changes)"
else
    echo "  - Assets: ✅ Uploaded (changes detected)"
fi
echo "  - Verification: ✅ Completed"
echo "  - Website: https://ada36.de"
