#!/bin/bash

# ADA36 FTP Upload Script
# Vollständiger Deploy ohne Delta-Upload

set -e  # Exit on any error

echo "🚀 Starting ADA36 full deployment process..."

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

# Step 3: Count files to be uploaded
TOTAL_FILES=$(find out -type f | wc -l)
echo -e "${YELLOW}📊 Total files to upload: $TOTAL_FILES${NC}"

# Step 4: Full upload to FTP server (no delta detection)
echo -e "${YELLOW}📤 Uploading ALL files to FTP server...${NC}"
echo "Server: $FTP_HOST"
echo "Target: /ada36"
echo -e "${YELLOW}⚠️  This will upload ALL files (full deploy)${NC}"

# Create backup of current server state (optional)
echo -e "${YELLOW}💾 Creating backup of current server state...${NC}"
lftp -u $FTP_USERNAME,$FTP_PASSWORD sftp://$FTP_HOST -e "
cd ada36;
mirror . /tmp/ada36-backup-$(date +%Y%m%d-%H%M%S) --verbose;
quit" 2>/dev/null || echo "Backup creation failed, continuing..."

# Full upload - upload everything
echo -e "${YELLOW}🔄 Uploading all files to server (Full Deploy)...${NC}"
echo -e "${YELLOW}📊 Uploading $TOTAL_FILES files${NC}"

# Create a temporary file to capture the upload output
UPLOAD_LOG="/tmp/ada36-upload-$(date +%Y%m%d-%H%M%S).log"

# Use lftp to upload everything
lftp -u $FTP_USERNAME,$FTP_PASSWORD sftp://$FTP_HOST -e "
cd ada36;
set ftp:list-options -a;
set cmd:default-protocol sftp;
set net:reconnect-interval-base 5;
set net:max-retries 2;
mirror -R out/ . --verbose --exclude-glob .DS_Store --log=$UPLOAD_LOG;
quit"

# Analyze upload results
if [ -f "$UPLOAD_LOG" ]; then
    echo -e "${GREEN}📋 Upload Summary:${NC}"
    
    # Count different types of operations
    UPLOADED=$(grep -c "Sende Datei" "$UPLOAD_LOG" 2>/dev/null || echo "0")
    DIRS_CREATED=$(grep -c "Lege Verzeichnis" "$UPLOAD_LOG" 2>/dev/null || echo "0")
    
    echo "  - Files uploaded: $UPLOADED"
    echo "  - Directories created: $DIRS_CREATED"
    
    if [ "$UPLOADED" -gt 0 ]; then
        echo -e "${GREEN}✅ Files successfully uploaded${NC}"
    else
        echo -e "${YELLOW}⚠️  No files were uploaded${NC}"
    fi
    
    # Show first few uploaded files
    if [ "$UPLOADED" -gt 0 ]; then
        echo -e "${YELLOW}📝 Sample uploaded files:${NC}"
        grep "Sende Datei" "$UPLOAD_LOG" | head -5
        if [ "$UPLOADED" -gt 5 ]; then
            echo "  ... and $((UPLOADED - 5)) more files"
        fi
    fi
    
    # Clean up log file
    rm "$UPLOAD_LOG"
else
    echo -e "${YELLOW}⚠️  Could not generate upload summary${NC}"
fi

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Upload completed successfully!${NC}"
    echo -e "${GREEN}🌐 Website should be live at: https://ada36.de${NC}"
    
    # Save current hash for next deployment comparison
    CURRENT_HASH=$(find out -type f -exec md5sum {} \; | sort | md5sum | cut -d' ' -f1)
    echo "$CURRENT_HASH" > .last-deploy-hash
    echo -e "${GREEN}💾 Deployment hash saved for future comparisons${NC}"
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

echo -e "${GREEN}🎉 Full deployment completed successfully!${NC}"
echo -e "${GREEN}📊 Deployment summary:${NC}"
echo "  - Build: ✅ Completed"
echo "  - Static Export: ✅ Completed"
echo "  - Full Upload: ✅ Completed"
echo "  - Verification: ✅ Completed"
echo "  - Website: https://ada36.de"