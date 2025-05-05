
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
