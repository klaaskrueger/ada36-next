#!/bin/bash

# WebP Conversion Script for ADA36 Images
# Converts all JPG images to WebP format for better performance

set -e

echo "🖼️  Starting WebP conversion for ADA36 images..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Check if cwebp is installed
if ! command -v cwebp &> /dev/null; then
    echo -e "${RED}❌ cwebp is not installed!${NC}"
    echo "Install with: brew install webp"
    exit 1
fi

# Directories to process
DIRS=(
    "public/assets/images/fullsize"
    "public/assets/images/resized"
)

# WebP quality (0-100, 85 is good balance)
QUALITY=85

# Counters
TOTAL_FILES=0
CONVERTED_FILES=0
SKIPPED_FILES=0
TOTAL_SAVED=0

echo -e "${BLUE}📊 Analyzing images...${NC}"

# Count total JPG files
for dir in "${DIRS[@]}"; do
    if [ -d "$dir" ]; then
        count=$(find "$dir" -name "*.jpg" -o -name "*.jpeg" | wc -l)
        TOTAL_FILES=$((TOTAL_FILES + count))
        echo "  $dir: $count JPG files"
    fi
done

echo -e "${YELLOW}🔄 Converting $TOTAL_FILES images to WebP (Quality: $QUALITY)...${NC}"

# Convert images
for dir in "${DIRS[@]}"; do
    if [ -d "$dir" ]; then
        echo -e "${BLUE}📁 Processing: $dir${NC}"
        
        # Find all JPG files
        find "$dir" -name "*.jpg" -o -name "*.jpeg" | while read -r jpg_file; do
            # Get file info
            jpg_size=$(stat -f%z "$jpg_file" 2>/dev/null || stat -c%s "$jpg_file" 2>/dev/null)
            
            # Create WebP filename
            webp_file="${jpg_file%.*}.webp"
            
            # Skip if WebP already exists and is newer
            if [ -f "$webp_file" ] && [ "$webp_file" -nt "$jpg_file" ]; then
                echo -e "  ⏭️  Skipped: $(basename "$jpg_file") (WebP already exists)"
                SKIPPED_FILES=$((SKIPPED_FILES + 1))
                continue
            fi
            
            # Convert to WebP
            echo -e "  🔄 Converting: $(basename "$jpg_file")"
            
            if cwebp -q "$QUALITY" "$jpg_file" -o "$webp_file" -quiet; then
                webp_size=$(stat -f%z "$webp_file" 2>/dev/null || stat -c%s "$webp_file" 2>/dev/null)
                saved=$((jpg_size - webp_size))
                saved_percent=$((saved * 100 / jpg_size))
                
                echo -e "    ✅ $(basename "$jpg_file"): ${jpg_size} → ${webp_size} bytes (${saved_percent}% saved)"
                CONVERTED_FILES=$((CONVERTED_FILES + 1))
                TOTAL_SAVED=$((TOTAL_SAVED + saved))
            else
                echo -e "    ${RED}❌ Failed: $(basename "$jpg_file")${NC}"
            fi
        done
    fi
done

# Summary
echo -e "\n${GREEN}🎉 WebP conversion completed!${NC}"
echo -e "${GREEN}📊 Summary:${NC}"
echo "  - Total files processed: $TOTAL_FILES"
echo "  - Converted: $CONVERTED_FILES"
echo "  - Skipped: $SKIPPED_FILES"
echo "  - Total space saved: $(numfmt --to=iec $TOTAL_SAVED)"

# Show directory sizes
echo -e "\n${BLUE}📁 Directory sizes:${NC}"
for dir in "${DIRS[@]}"; do
    if [ -d "$dir" ]; then
        jpg_size=$(du -sh "$dir"/*.jpg 2>/dev/null | awk '{sum+=$1} END {print sum}' || echo "0")
        webp_size=$(du -sh "$dir"/*.webp 2>/dev/null | awk '{sum+=$1} END {print sum}' || echo "0")
        echo "  $dir:"
        echo "    JPG: $(du -sh "$dir"/*.jpg 2>/dev/null | awk '{sum+=$1} END {print sum "K"}' || echo "0K")"
        echo "    WebP: $(du -sh "$dir"/*.webp 2>/dev/null | awk '{sum+=$1} END {print sum "K"}' || echo "0K")"
    fi
done

echo -e "\n${YELLOW}💡 Next steps:${NC}"
echo "  1. Update image paths in your code to use .webp files"
echo "  2. Test the website to ensure WebP images load correctly"
echo "  3. Consider keeping JPG as fallback for older browsers"
echo "  4. Run 'npm run build' to test the changes"

echo -e "\n${GREEN}✅ WebP conversion script completed!${NC}"
