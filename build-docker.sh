#!/bin/bash

# Script to build Docker image and export it as tar archive

set -e

echo "🐳 Building Docker image for GeneralII Improved..."

# Build Docker image
echo "📦 Building image..."
sudo docker build -t generalii-improved:latest .

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Docker image built successfully!"
    
    # Show image info
    echo ""
    echo "📊 Image information:"
    sudo docker images generalii-improved:latest
    
    # Export image to tar file
    echo ""
    echo "💾 Exporting image to tar archive..."
    sudo docker save -o /home/ubuntu/generalii-improved-docker.tar generalii-improved:latest
    
    # Change ownership
    sudo chown ubuntu:ubuntu /home/ubuntu/generalii-improved-docker.tar
    
    # Compress the tar file
    echo "🗜️  Compressing archive..."
    gzip -f /home/ubuntu/generalii-improved-docker.tar
    
    echo ""
    echo "✅ Docker image exported successfully!"
    echo "📦 Archive location: /home/ubuntu/generalii-improved-docker.tar.gz"
    ls -lh /home/ubuntu/generalii-improved-docker.tar.gz
    
    echo ""
    echo "🚀 To use this Docker image on another machine:"
    echo "1. Transfer the file: generalii-improved-docker.tar.gz"
    echo "2. Load the image: gunzip -c generalii-improved-docker.tar.gz | docker load"
    echo "3. Run the container: docker run -d -p 8080:80 generalii-improved:latest"
    echo ""
    echo "Or use docker-compose:"
    echo "docker-compose up -d"
else
    echo "❌ Docker build failed!"
    exit 1
fi

