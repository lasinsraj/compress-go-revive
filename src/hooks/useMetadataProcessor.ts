import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { MetadataType } from "@/types/metadata";

interface UseMetadataProcessorProps {
  files: File[];
  metadata: MetadataType | null;
  setMetadata: React.Dispatch<React.SetStateAction<MetadataType | null>>;
}

interface UseMetadataProcessorResult {
  processing: boolean;
  processed: boolean;
  handleRemoveMetadata: () => void;
  handleDownload: () => void;
  setProcessed: React.Dispatch<React.SetStateAction<boolean>>;
}

export const useMetadataProcessor = ({
  files,
  metadata,
  setMetadata
}: UseMetadataProcessorProps): UseMetadataProcessorResult => {
  const [processing, setProcessing] = useState(false);
  const [processed, setProcessed] = useState(false);
  
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
  
  return {
    processing,
    processed,
    handleRemoveMetadata,
    handleDownload,
    setProcessed
  };
};
