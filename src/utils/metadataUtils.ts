
import { MetadataType } from "@/types/metadata";

// Simulate extracting metadata from an image file
export const extractMetadata = (file: File): MetadataType => {
  // In a real implementation, we would use a library like exif-js to extract actual metadata
  // This is a simulation for demonstration purposes
  
  const creationDate = new Date();
  
  // Simulate some common EXIF metadata
  const simulatedMetadata: MetadataType = {
    "File Name": file.name,
    "File Size": `${(file.size / 1024).toFixed(2)} KB`,
    "File Type": file.type,
    "Date Created": creationDate,
    "Last Modified": new Date(file.lastModified),
    "GPS Latitude": "40.7128° N",
    "GPS Longitude": "74.0060° W",
    "Camera Make": "Canon",
    "Camera Model": "EOS 5D Mark IV",
    "Exposure Time": "1/125 sec",
    "F-Number": "f/2.8",
    "ISO Speed": 400,
    "Focal Length": "50mm"
  };
  
  return simulatedMetadata;
};

// Format file size
export const formatFileSize = (sizeInBytes: number): string => {
  if (sizeInBytes < 1024 * 1024) {
    return `${(sizeInBytes / 1024).toFixed(2)} KB`;
  }
  return `${(sizeInBytes / (1024 * 1024)).toFixed(2)} MB`;
};

// Completely remove metadata from image by creating a clean version
export const removeImageMetadata = async (file: File): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    // Create a new image element
    const img = new Image();
    const url = URL.createObjectURL(file);
    
    img.onload = () => {
      try {
        // Create a canvas element with specific settings to ensure metadata removal
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        
        const ctx = canvas.getContext('2d', { alpha: true, willReadFrequently: false });
        
        if (!ctx) {
          URL.revokeObjectURL(url);
          reject(new Error('Could not get canvas context'));
          return;
        }
        
        // Fill with white background to ensure transparency is handled
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Draw the image onto the canvas (this strips the metadata)
        ctx.drawImage(img, 0, 0, img.width, img.height);
        
        // Force a new image with no metadata
        // Use the toBlob method with image/jpeg format and maximum quality
        canvas.toBlob(
          (blob) => {
            if (blob) {
              console.log("Created clean blob with size:", blob.size);
              
              // Double check by creating a second canvas pass (ensures complete stripping)
              const secondImg = new Image();
              const secondUrl = URL.createObjectURL(blob);
              
              secondImg.onload = () => {
                const secondCanvas = document.createElement('canvas');
                secondCanvas.width = secondImg.width;
                secondCanvas.height = secondImg.height;
                
                const secondCtx = secondCanvas.getContext('2d');
                
                if (!secondCtx) {
                  URL.revokeObjectURL(url);
                  URL.revokeObjectURL(secondUrl);
                  reject(new Error('Could not get second canvas context'));
                  return;
                }
                
                // Clear and redraw on second canvas
                secondCtx.clearRect(0, 0, secondCanvas.width, secondCanvas.height);
                secondCtx.drawImage(secondImg, 0, 0);
                
                // Create final blob with maximum quality
                secondCanvas.toBlob(
                  (finalBlob) => {
                    if (finalBlob) {
                      console.log("Final clean blob created with size:", finalBlob.size);
                      
                      // Clean up resources
                      URL.revokeObjectURL(url);
                      URL.revokeObjectURL(secondUrl);
                      resolve(finalBlob);
                    } else {
                      URL.revokeObjectURL(url);
                      URL.revokeObjectURL(secondUrl);
                      reject(new Error('Failed to create final blob'));
                    }
                  },
                  'image/jpeg',
                  1.0  // Maximum quality to preserve image quality
                );
              };
              
              secondImg.onerror = () => {
                URL.revokeObjectURL(url);
                URL.revokeObjectURL(secondUrl);
                reject(new Error('Failed to load second image'));
              };
              
              secondImg.src = secondUrl;
            } else {
              URL.revokeObjectURL(url);
              reject(new Error('Failed to create blob from canvas'));
            }
          },
          'image/jpeg',
          1.0  // Use maximum quality for first pass
        );
      } catch (error) {
        URL.revokeObjectURL(url);
        reject(error);
      }
    };
    
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error('Failed to load image'));
    };
    
    img.src = url;
  });
};
