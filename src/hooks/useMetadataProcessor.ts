
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
      console.log("Starting metadata removal for", files.length, "files");
      
      // Process all files to remove metadata using our enhanced method
      const processedBlobs = await Promise.all(
        files.map(file => removeImageMetadata(file))
      );
      
      setCleanedBlobs(processedBlobs);
      setProcessing(false);
      setProcessed(true);
      
      console.log("Metadata removal complete. Created", processedBlobs.length, "clean blobs");
      
      // Update metadata display to show metadata has been completely removed
      setMetadata({
        "File Name": files[0].name,
        "File Size": `${(processedBlobs[0]?.size / 1024).toFixed(2)} KB`,
        "File Type": files[0].type,
        "Status": "All metadata completely removed - 100% clean"
      });
      
      toast({
        title: "Metadata completely removed",
        description: `Successfully removed all metadata from ${files.length} image${files.length > 1 ? 's' : ''}. The image is now 100% clean.`,
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
    
    console.log("Starting download of cleaned image");
    
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
      description: "Your clean image without any metadata is downloading.",
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
