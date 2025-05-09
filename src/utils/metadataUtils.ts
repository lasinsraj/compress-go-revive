
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
      // Create a canvas element
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      if (!ctx) {
        URL.revokeObjectURL(url);
        reject(new Error('Could not get canvas context'));
        return;
      }
      
      // Set canvas dimensions to match the image
      canvas.width = img.width;
      canvas.height = img.height;
      
      // Clear the canvas first
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw the image onto the canvas (this strips the metadata)
      ctx.drawImage(img, 0, 0, img.width, img.height);
      
      // Convert the canvas to a blob with specified quality to ensure metadata is stripped
      canvas.toBlob(
        (blob) => {
          if (blob) {
            console.log("Created clean blob with size:", blob.size);
            
            // Clean up
            URL.revokeObjectURL(url);
            resolve(blob);
          } else {
            URL.revokeObjectURL(url);
            reject(new Error('Failed to create blob from canvas'));
          }
        },
        file.type,
        1.0  // Use maximum quality to preserve image quality
      );
    };
    
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error('Failed to load image'));
    };
    
    img.src = url;
  });
};
