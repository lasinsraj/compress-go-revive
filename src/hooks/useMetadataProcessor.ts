
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { MetadataType } from "@/types/metadata";
import { removeImageMetadata } from "@/utils/metadataUtils";

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
  const [cleanedBlobs, setCleanedBlobs] = useState<Blob[]>([]);
  
  const handleRemoveMetadata = async () => {
    if (files.length === 0) {
      toast({
        title: "No images selected",
        description: "Please upload at least one image to remove metadata.",
        variant: "destructive",
      });
      return;
    }
    
    setProcessing(true);
    
    try {
      // Process all files to remove metadata
      const processedBlobs = await Promise.all(
        files.map(file => removeImageMetadata(file))
      );
      
      setCleanedBlobs(processedBlobs);
      setProcessing(false);
      setProcessed(true);
      
      // Update metadata display to show only basic information
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
    } catch (error) {
      console.error("Error removing metadata:", error);
      setProcessing(false);
      
      toast({
        title: "Processing failed",
        description: "There was an error removing metadata from your images.",
        variant: "destructive",
      });
    }
  };
  
  const handleDownload = () => {
    if (files.length === 0 || !processed || cleanedBlobs.length === 0) {
      toast({
        title: "Cannot download",
        description: "Please process an image before downloading.",
        variant: "destructive",
      });
      return;
    }
    
    // Use the cleaned blob to download
    const link = document.createElement('a');
    const fileIndex = 0; // Default to first file for now
    link.href = URL.createObjectURL(cleanedBlobs[fileIndex]);
    
    // Add "-clean" suffix to filename
    const fileName = files[fileIndex].name;
    const fileExt = fileName.substring(fileName.lastIndexOf('.'));
    const baseFileName = fileName.substring(0, fileName.lastIndexOf('.'));
    link.download = `${baseFileName}-clean${fileExt}`;
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Clean up
    URL.revokeObjectURL(link.href);
    
    toast({
      title: "Download started",
      description: "Your clean image without metadata is downloading.",
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
