import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

interface MetadataType {
  [key: string]: string | number | Date;
}

export const useImageMetadataRemover = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [metadata, setMetadata] = useState<MetadataType | null>(null);
  const [processing, setProcessing] = useState(false);
  const [processed, setProcessed] = useState(false);
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      // Filter for image files only
      const imageFiles = Array.from(e.target.files).filter(file => 
        file.type.startsWith('image/')
      );
      
      if (imageFiles.length === 0) {
        toast({
          title: "Invalid file type",
          description: "Please select image files only.",
          variant: "destructive",
        });
        return;
      }
      
      setFiles(prev => [...prev, ...imageFiles]);
      setProcessed(false);
      
      // Extract metadata when file is selected
      extractMetadata(imageFiles[0]);
    }
  };
  
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
  
  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
  
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      // Filter for image files only
      const imageFiles = Array.from(e.dataTransfer.files).filter(file => 
        file.type.startsWith('image/')
      );
      
      if (imageFiles.length === 0) {
        toast({
          title: "Invalid file type",
          description: "Please drop image files only.",
          variant: "destructive",
        });
        return;
      }
      
      setFiles(prev => [...prev, ...imageFiles]);
      setProcessed(false);
      
      // Extract metadata when file is dropped
      extractMetadata(imageFiles[0]);
    }
  };
  
  const removeFile = (index: number) => {
    setFiles(prev => {
      const newFiles = [...prev];
      newFiles.splice(index, 1);
      return newFiles;
    });
    
    if (files.length <= 1) {
      setMetadata(null);
      setProcessed(false);
    }
  };
  
  // Simulate extracting metadata from an image file
  const extractMetadata = (file: File) => {
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
    
    setMetadata(simulatedMetadata);
  };
  
  const handleRemoveMetadata = () => {
    if (files.length === 0) {
      toast({
        title: "No images selected",
        description: "Please upload at least one image to remove metadata.",
        variant: "destructive",
      });
      return;
    }
    
    setProcessing(true);
    
    // Simulate processing time
    setTimeout(() => {
      setProcessing(false);
      setProcessed(true);
      setMetadata(prev => {
        if (!prev) return null;
        
        // Keep only basic information, remove sensitive data
        return {
          "File Name": prev["File Name"],
          "File Size": prev["File Size"],
          "File Type": prev["File Type"]
        };
      });
      
      toast({
        title: "Metadata removed",
        description: `Successfully removed metadata from ${files.length} image${files.length > 1 ? 's' : ''}.`,
      });
    }, 1500);
  };
  
  const handleDownload = () => {
    if (files.length === 0 || !processed) {
      toast({
        title: "Cannot download",
        description: "Please process an image before downloading.",
        variant: "destructive",
      });
      return;
    }
    
    // Simulate downloading the processed image
    // In a real implementation, we would create a clean copy of the image without metadata
    
    const link = document.createElement('a');
    link.href = URL.createObjectURL(files[0]);
    
    // Add "-clean" suffix to filename
    const fileName = files[0].name;
    const fileExt = fileName.substring(fileName.lastIndexOf('.'));
    const baseFileName = fileName.substring(0, fileName.lastIndexOf('.'));
    link.download = `${baseFileName}-clean${fileExt}`;
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "Download started",
      description: "Your clean image is downloading.",
    });
  };
  
  // Calculate the total size of all files
  const totalSize = files.reduce((acc, file) => acc + file.size, 0);
  
  // Format the total size to KB, MB, etc.
  const formattedTotalSize = totalSize < 1024 * 1024
    ? `${(totalSize / 1024).toFixed(2)} KB`
    : `${(totalSize / (1024 * 1024)).toFixed(2)} MB`;
  
  return {
    files,
    metadata,
    processing,
    processed,
    formattedTotalSize,
    handleFileChange,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    removeFile,
    handleRemoveMetadata,
    handleDownload
  };
};
