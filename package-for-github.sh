#!/bin/bash

# Script to package the project for GitHub upload

echo "📦 Packaging GeneralII Improved for GitHub..."

# Create a temporary directory
TEMP_DIR="/tmp/generalii-improved-package"
rm -rf "$TEMP_DIR"
mkdir -p "$TEMP_DIR"

# Copy project files
echo "📋 Copying project files..."
cp -r /home/ubuntu/generalii-improved/* "$TEMP_DIR/" 2>/dev/null || true
cp -r /home/ubuntu/generalii-improved/.* "$TEMP_DIR/" 2>/dev/null || true

# Remove unnecessary files
echo "🧹 Cleaning up..."
cd "$TEMP_DIR"
rm -rf node_modules
rm -rf dist
rm -rf .git
rm -rf screenshots
rm -f get-docker.sh

# Create archive
echo "📦 Creating archive..."
cd /tmp
tar -czf generalii-improved.tar.gz generalii-improved-package/

# Move to home directory
mv generalii-improved.tar.gz /home/ubuntu/

echo "✅ Package created: /home/ubuntu/generalii-improved.tar.gz"
echo ""
echo "📤 To upload to GitHub:"
echo "1. Extract the archive on your local machine"
echo "2. Initialize git: git init"
echo "3. Add remote: git remote add origin https://github.com/your-username/generalii-improved.git"
echo "4. Commit and push: git add . && git commit -m 'Initial commit' && git push -u origin main"
echo ""
echo "🐳 To build Docker image:"
echo "docker build -t generalii-improved ."
echo "docker run -d -p 8080:80 generalii-improved"

