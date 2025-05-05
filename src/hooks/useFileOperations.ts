
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { extractMetadata } from "@/utils/metadataUtils";
import { MetadataType } from "@/types/metadata";

interface UseFileOperationsResult {
  files: File[];
  metadata: MetadataType | null;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  handleDragLeave: (e: React.DragEvent<HTMLDivElement>) => void;
  handleDrop: (e: React.DragEvent<HTMLDivElement>) => void;
  removeFile: (index: number) => void;
  setFiles: React.Dispatch<React.SetStateAction<File[]>>;
  setMetadata: React.Dispatch<React.SetStateAction<MetadataType | null>>;
}

export const useFileOperations = (): UseFileOperationsResult => {
  const [files, setFiles] = useState<File[]>([]);
  const [metadata, setMetadata] = useState<MetadataType | null>(null);
  
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
      
      // Extract metadata when file is selected
      const newMetadata = extractMetadata(imageFiles[0]);
      setMetadata(newMetadata);
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
      
      // Extract metadata when file is dropped
      const newMetadata = extractMetadata(imageFiles[0]);
      setMetadata(newMetadata);
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
    }
  };
  
  return {
    files,
    metadata,
    handleFileChange,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    removeFile,
    setFiles,
    setMetadata
  };
};
