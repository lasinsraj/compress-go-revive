
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { useZipBase } from "./useZipBase";

export const useZipCreator = () => {
  const baseZip = useZipBase();
  const [compressionLevel, setCompressionLevel] = useState<number[]>([5]);
  
  const handleCreateZip = () => {
    if (baseZip.files.length === 0) {
      toast({
        title: "No files selected",
        description: "Please add at least one file to create a ZIP archive.",
        variant: "destructive",
      });
      return;
    }
    
    baseZip.simulateZipCreation(
      "archive.zip",
      `Successfully created ZIP archive with ${baseZip.files.length} files.`
    );
  };
  
  const handleDownload = () => {
    baseZip.simulateDownload("archive.zip");
  };
  
  return {
    ...baseZip,
    compressionLevel,
    setCompressionLevel,
    handleCreateZip,
    handleDownload
  };
};
