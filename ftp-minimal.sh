#!/bin/bash

# Minimal FTP Upload - Simple and reliable
# Usage: ./ftp-minimal.sh [file1] [file2] ...

set -e

echo "🚀 Minimal FTP Upload..."

# Load environment
if [ -f .env.local ]; then
    source .env.local
    echo "✅ Environment loaded"
else
    echo "❌ .env.local not found"
    exit 1
fi

# Check credentials
if [ -z "$FTP_HOST" ] || [ -z "$FTP_USERNAME" ] || [ -z "$FTP_PASSWORD" ]; then
    echo "❌ FTP credentials missing"
    exit 1
fi

# If no files specified, upload index.html
if [ $# -eq 0 ]; then
    FILES="out/index.html"
    echo "📄 Uploading index.html (default)"
else
    FILES="$@"
    echo "📄 Uploading: $FILES"
fi

# Upload files one by one
for file in $FILES; do
    if [ -f "$file" ]; then
        echo "⬆️  Uploading $file..."
        
        # Extract directory and filename
        dir=$(dirname "$file")
        filename=$(basename "$file")
        
        # Create lftp script
        cat > /tmp/lftp_script.txt << EOF
set ftp:ssl-allow no
open -u $FTP_USERNAME,$FTP_PASSWORD $FTP_HOST
cd /ada36
mkdir -p $dir
put -O $dir $file
quit
EOF
        
        # Execute lftp
        lftp -f /tmp/lftp_script.txt
        
        # Cleanup
        rm /tmp/lftp_script.txt
        
        echo "✅ $file uploaded"
    else
        echo "❌ File not found: $file"
    fi
done

echo "🎉 Upload complete!"
echo "🌐 Check: https://ada36.de"




