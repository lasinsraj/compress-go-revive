
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { useZipBase } from "./useZipBase";

export const useZipFile = () => {
  const baseZip = useZipBase();
  const [zipName, setZipName] = useState("archive.zip");
  
  const handleCreateZip = () => {
    if (baseZip.files.length === 0) {
      toast({
        title: "No files selected",
        description: "Please add at least one file to create a ZIP file.",
        variant: "destructive",
      });
      return;
    }
    
    if (!zipName.trim()) {
      toast({
        title: "Invalid ZIP name",
        description: "Please enter a valid name for your ZIP file.",
        variant: "destructive",
      });
      return;
    }
    
    baseZip.simulateZipCreation(
      zipName,
      `Successfully created "${zipName}" with ${baseZip.files.length} files.`
    );
  };
  
  const handleDownload = () => {
    // Ensure the zip name has the .zip extension
    let downloadName = zipName;
    if (!downloadName.toLowerCase().endsWith('.zip')) {
      downloadName += '.zip';
    }
    
    baseZip.simulateDownload(downloadName);
  };
  
  return {
    ...baseZip,
    zipName,
    setZipName,
    handleCreateZip,
    handleDownload
  };
};
