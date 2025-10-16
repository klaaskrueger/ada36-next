#!/bin/bash

# HEIC to JPEG Conversion Script for ADA36 Neighborhood Images
# Converts all HEIC images to JPEG format

set -e

echo "🖼️  Starting HEIC to JPEG conversion for ADA36 neighborhood images..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Check if ImageMagick is installed
if ! command -v magick &> /dev/null; then
    echo -e "${RED}❌ ImageMagick is not installed!${NC}"
    echo "Install with: brew install imagemagick"
    exit 1
fi

# Directory to process
SOURCE_DIR="/Users/klaas/DevProjects/ada36-next-js/new-content/images-2025/neighborhood"

# JPEG quality (0-100, 90 is high quality)
QUALITY=90

# Counters
TOTAL_FILES=0
CONVERTED_FILES=0
SKIPPED_FILES=0

echo -e "${BLUE}📊 Analyzing HEIC images in neighborhood folder...${NC}"

# Count total HEIC files
if [ -d "$SOURCE_DIR" ]; then
    count=$(find "$SOURCE_DIR" -name "*.heic" | wc -l)
    TOTAL_FILES=$count
    echo "  Found: $count HEIC files"
else
    echo -e "${RED}❌ Source directory not found: $SOURCE_DIR${NC}"
    exit 1
fi

echo -e "${YELLOW}🔄 Converting $TOTAL_FILES HEIC images to JPEG (Quality: $QUALITY)...${NC}"

# Convert images
cd "$SOURCE_DIR"
find . -name "*.heic" | while read -r heic_file; do
    # Remove leading ./ from filename
    heic_file="${heic_file#./}"
    
    # Get file info
    heic_size=$(stat -f%z "$heic_file" 2>/dev/null || stat -c%s "$heic_file" 2>/dev/null)
    
    # Create JPEG filename
    jpeg_file="${heic_file%.*}.jpg"
    
    # Skip if JPEG already exists and is newer
    if [ -f "$jpeg_file" ] && [ "$jpeg_file" -nt "$heic_file" ]; then
        echo -e "  ⏭️  Skipped: $(basename "$heic_file") (JPEG already exists)"
        SKIPPED_FILES=$((SKIPPED_FILES + 1))
        continue
    fi
    
    # Convert to JPEG
    echo -e "  🔄 Converting: $(basename "$heic_file")"
    
    if magick "$heic_file" -quality "$QUALITY" "$jpeg_file"; then
        jpeg_size=$(stat -f%z "$jpeg_file" 2>/dev/null || stat -c%s "$jpeg_file" 2>/dev/null)
        
        echo -e "    ✅ $(basename "$heic_file"): ${heic_size} → ${jpeg_size} bytes"
        CONVERTED_FILES=$((CONVERTED_FILES + 1))
    else
        echo -e "    ${RED}❌ Failed: $(basename "$heic_file")${NC}"
    fi
done

# Summary
echo -e "\n${GREEN}🎉 HEIC to JPEG conversion completed!${NC}"
echo -e "${GREEN}📊 Summary:${NC}"
echo "  - Total files processed: $TOTAL_FILES"
echo "  - Converted: $CONVERTED_FILES"
echo "  - Skipped: $SKIPPED_FILES"

# Show directory contents
echo -e "\n${BLUE}📁 Directory contents after conversion:${NC}"
ls -la "$SOURCE_DIR"/*.{jpg,heic} 2>/dev/null || echo "No files found"

echo -e "\n${GREEN}✅ HEIC to JPEG conversion script completed!${NC}"
