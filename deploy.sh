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

# Step 4: Upload to FTP server with intelligent delta detection
echo -e "${YELLOW}📤 Uploading to FTP server...${NC}"
echo "Server: $FTP_HOST"
echo "Target: /ada36"

# Optional: Check if there are any changes since last deployment
if [ -f ".last-deploy-hash" ]; then
    CURRENT_HASH=$(find out -type f -exec md5sum {} \; | sort | md5sum | cut -d' ' -f1)
    LAST_HASH=$(cat .last-deploy-hash)
    
    if [ "$CURRENT_HASH" = "$LAST_HASH" ]; then
        echo -e "${YELLOW}ℹ️  No file changes detected since last deployment${NC}"
        echo -e "${YELLOW}   Hash: $CURRENT_HASH${NC}"
        echo -e "${YELLOW}   Skipping upload...${NC}"
        echo -e "${GREEN}🎉 Deployment skipped - no changes detected!${NC}"
        exit 0
    else
        echo -e "${GREEN}🔄 File changes detected - proceeding with deployment${NC}"
        echo -e "${YELLOW}   Last hash: $LAST_HASH${NC}"
        echo -e "${YELLOW}   Current hash: $CURRENT_HASH${NC}"
    fi
else
    echo -e "${YELLOW}🆕 First deployment or hash file missing - proceeding with full sync${NC}"
fi

# Create backup of current server state (optional)
echo -e "${YELLOW}💾 Creating backup of current server state...${NC}"
lftp -u $FTP_USERNAME,$FTP_PASSWORD sftp://$FTP_HOST -e "
cd ada36;
mirror . /tmp/ada36-backup-$(date +%Y%m%d-%H%M%S) --verbose;
quit" 2>/dev/null || echo "Backup creation failed, continuing..."

# Upload all files from out directory with enhanced delta tracking
echo -e "${YELLOW}🔄 Syncing files to server (Delta-Upload)...${NC}"
echo -e "${YELLOW}📊 Files will be compared by timestamp and size for efficient upload${NC}"

# Create a temporary file to capture the sync output
SYNC_LOG="/tmp/ada36-sync-$(date +%Y%m%d-%H%M%S).log"

lftp -u $FTP_USERNAME,$FTP_PASSWORD sftp://$FTP_HOST -e "
cd ada36;
mirror -R out/ . --delete --verbose --exclude-glob .DS_Store --log=$SYNC_LOG;
quit"

# Analyze sync results
if [ -f "$SYNC_LOG" ]; then
    echo -e "${GREEN}📋 Sync Summary:${NC}"
    
    # Count different types of operations
    UPLOADED=$(grep -c "Transferring" "$SYNC_LOG" 2>/dev/null || echo "0")
    DELETED=$(grep -c "Removing" "$SYNC_LOG" 2>/dev/null || echo "0")
    SKIPPED=$(grep -c "Skipping" "$SYNC_LOG" 2>/dev/null || echo "0")
    
    echo "  - Files uploaded: $UPLOADED"
    echo "  - Files deleted: $DELETED"
    echo "  - Files skipped (unchanged): $SKIPPED"
    
    if [ "$UPLOADED" -gt 0 ] || [ "$DELETED" -gt 0 ]; then
        echo -e "${GREEN}✅ Changes detected and synchronized${NC}"
    else
        echo -e "${YELLOW}ℹ️  No changes detected - website is up to date${NC}"
    fi
    
    # Show detailed log if there were changes
    if [ "$UPLOADED" -gt 0 ] || [ "$DELETED" -gt 0 ]; then
        echo -e "${YELLOW}📝 Detailed changes:${NC}"
        grep -E "(Transferring|Removing)" "$SYNC_LOG" | head -10
        if [ "$(grep -c -E "(Transferring|Removing)" "$SYNC_LOG")" -gt 10 ]; then
            echo "  ... and $(($(grep -c -E "(Transferring|Removing)" "$SYNC_LOG") - 10)) more changes"
        fi
    fi
    
    # Clean up log file
    rm "$SYNC_LOG"
else
    echo -e "${YELLOW}⚠️  Could not generate sync summary${NC}"
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

echo -e "${GREEN}🎉 Deployment completed successfully!${NC}"
echo -e "${GREEN}📊 Deployment summary:${NC}"
echo "  - Build: ✅ Completed"
echo "  - Static Export: ✅ Completed"
echo "  - Upload: ✅ Completed"
echo "  - Verification: ✅ Completed"
echo "  - Website: https://ada36.de"
