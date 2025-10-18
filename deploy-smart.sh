#!/bin/bash

# Smart ADA36 Deploy Script
# Only uploads files that have actually changed

set -e

echo "🚀 Smart ADA36 deployment process..."

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

# Load environment
if [ -f .env.local ]; then
    source .env.local
    echo "✅ Environment loaded"
else
    echo -e "${RED}❌ .env.local not found!${NC}"
    exit 1
fi

# Build
echo -e "${YELLOW}📦 Building...${NC}"
npm run build

# Check if we have a previous deployment hash
if [ -f ".last-deploy-hash" ]; then
    OLD_HASH=$(cat .last-deploy-hash)
    NEW_HASH=$(find out -type f -exec md5sum {} \; | sort | md5sum | cut -d' ' -f1)
    
    if [ "$OLD_HASH" = "$NEW_HASH" ]; then
        echo -e "${GREEN}✅ No changes detected - skipping deployment${NC}"
        exit 0
    fi
    
    echo -e "${YELLOW}🔄 Changes detected${NC}"
    echo "  Old hash: $OLD_HASH"
    echo "  New hash: $NEW_HASH"
    echo ""
    
    # Show what files changed
    echo -e "${YELLOW}📋 Changed files:${NC}"
    find out -type f -newer .last-deploy-hash 2>/dev/null | head -10 || echo "  (Could not determine changed files)"
    echo ""
    
    read -p "Continue with deployment? (y/N): " -n 1 -r
    echo ""
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo -e "${YELLOW}❌ Deployment cancelled${NC}"
        exit 0
    fi
else
    echo -e "${YELLOW}🆕 First deployment${NC}"
    read -p "Upload all files? (y/N): " -n 1 -r
    echo ""
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo -e "${YELLOW}❌ Deployment cancelled${NC}"
        exit 0
    fi
fi

# Upload with rsync-like behavior
echo -e "${YELLOW}📤 Uploading...${NC}"
lftp -u $FTP_USERNAME,$FTP_PASSWORD sftp://$FTP_HOST -e "
cd ada36;
mirror -R out/ . --only-newer --only-missing --verbose --exclude-glob .DS_Store;
quit"

# Save new hash
NEW_HASH=$(find out -type f -exec md5sum {} \; | sort | md5sum | cut -d' ' -f1)
echo "$NEW_HASH" > .last-deploy-hash

echo -e "${GREEN}✅ Deployment completed!${NC}"
echo -e "${GREEN}🌐 Website: https://ada36.de${NC}"
