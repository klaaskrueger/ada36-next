#!/bin/bash

# Convert new 2025 images to WebP format
# This script converts the new images and places them in the correct location

echo "Starting image conversion for ADA36 2025 update..."

# Create backup of existing images
echo "Creating backup of existing images..."
cp -r /Users/klaas/DevProjects/ada36-next-js/public/assets/images/fullsize /Users/klaas/DevProjects/ada36-next-js/public/assets/images/fullsize-backup-$(date +%Y%m%d)

# Image mapping: New Image -> Existing Image Name
declare -A image_mapping=(
    # Kitchen
    ["amerikanische-Kueche-IMG_4737.jpg"]="kitchen-01.webp"
    
    # Living Room
    ["wohnzimmer_IMG_4728.jpg"]="living-01.webp"
    ["wohnzimmer-ausblick-IMG_4730.jpg"]="living-02.webp"
    ["wohnzimmer-esstisch-IMG_4733.jpg"]="living-03.webp"
    ["wohnzimmer-IMG_4754.jpg"]="living-04.webp"
    ["Wohnzimmer-IMG_4759.jpg"]="living-05.webp"
    ["Wohnzimmer-sofa-IMG_4731.jpg"]="living-night.webp"
    
    # Bedroom
    ["Schlafzimmer_IMG_4722.jpg"]="sleeping-01.webp"
    ["Schlafzimmer_kleiderschrank_IMG_4724.jpg"]="sleeping-02.webp"
    ["schlafzimmer-ausblick-IMG_4771.jpg"]="sleeping-03.webp"
    ["schlafzimmer-fluegeltueren-IMG_4775.jpg"]="sleeping-04.webp"
    
    # Bathroom
    ["Bad_IMG_4713.jpg"]="bathroom-01.webp"
    
    # Balcony
    ["balkon-IMG_4743.jpg"]="balcony-01.webp"
    ["ausblick-balkon-IMG_4750.jpg"]="balcony-02.webp"
    
    # Storage/Architecture
    ["begehbarer-kleiderschrank-IMG_4726.jpg"]="sleeping-cupboard.webp"
    ["fluegeltueren-IMG_4756.jpg"]="connector-doors-sleeping.webp"
    
    # Floor Plan
    ["grundriss-adalberstr-2025.png"]="floorplan.webp"
)

# Convert and replace existing images
echo "Converting and replacing existing images..."
for new_image in "${!image_mapping[@]}"; do
    existing_name="${image_mapping[$new_image]}"
    new_path="/Users/klaas/DevProjects/ada36-next-js/new-content/images-2025/flat/$new_image"
    output_path="/Users/klaas/DevProjects/ada36-next-js/public/assets/images/fullsize/$existing_name"
    
    if [ -f "$new_path" ]; then
        echo "Converting $new_image -> $existing_name"
        # Convert to WebP with quality 85
        cwebp -q 85 "$new_path" -o "$output_path"
        echo "✓ Converted $existing_name"
    else
        echo "⚠ File not found: $new_path"
    fi
done

# Add new house images (don't replace existing, just add)
echo "Adding new house images..."
house_images=(
    "aussenansicht-IMG_4513.jpg:house-exterior.webp"
    "fahrstuhl-IMG_4531.jpg:elevator.webp"
    "hausflur-IMG_4516.jpg:hallway.webp"
    "hausflur-vertikal-IMG_4530.jpg:hallway-vertical.webp"
    "garten-IMG_4524.jpg:garden-new.webp"
    "garten-detail-IMG_4523.jpg:garden-detail.webp"
    "garten-von-oben_IMG_4721.jpg:garden-from-above.webp"
    "gartenausblick-IMG_4528.jpg:garden-view.webp"
    "im-garten-IMG_4520.jpg:in-garden.webp"
)

for image_info in "${house_images[@]}"; do
    IFS=':' read -r source_file target_name <<< "$image_info"
    source_path="/Users/klaas/DevProjects/ada36-next-js/new-content/images-2025/house/$source_file"
    output_path="/Users/klaas/DevProjects/ada36-next-js/public/assets/images/fullsize/$target_name"
    
    if [ -f "$source_path" ]; then
        echo "Adding new house image: $source_file -> $target_name"
        cwebp -q 85 "$source_path" -o "$output_path"
        echo "✓ Added $target_name"
    else
        echo "⚠ File not found: $source_path"
    fi
done

echo "Image conversion completed!"
echo "Backup created at: /Users/klaas/DevProjects/ada36-next-js/public/assets/images/fullsize-backup-$(date +%Y%m%d)"
