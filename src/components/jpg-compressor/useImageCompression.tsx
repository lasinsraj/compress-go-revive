
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

interface UseImageCompressionProps {
  validateFileType?: (file: File) => boolean;
}

export const useImageCompression = ({ validateFileType }: UseImageCompressionProps = {}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [qualityLevel, setQualityLevel] = useState<number[]>([75]);
  const [processing, setProcessing] = useState(false);
  const [compressed, setCompressed] = useState(false);
  const [compressedSize, setCompressedSize] = useState(0);
  const [compressedImageUrl, setCompressedImageUrl] = useState<string | null>(null);
  const [compressedBlob, setCompressedBlob] = useState<Blob | null>(null);

  const handleFileSelect = (file: File) => {
    // Check if file is a JPG if validateFileType is provided
    if (validateFileType && !validateFileType(file)) {
      toast({
        title: "Invalid file type",
        description: "Please select a JPG/JPEG image.",
        variant: "destructive",
      });
      return;
    }
    
    setSelectedFile(file);
    setCompressed(false);
    setCompressedImageUrl(null);
    setCompressedBlob(null);
  };
  
  const handleCompression = () => {
    if (!selectedFile) {
      toast({
        title: "No JPG image selected",
        description: "Please select a JPG image file first.",
        variant: "destructive",
      });
      return;
    }
    
    setProcessing(true);
    
    // Use canvas to actually compress the JPEG image
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target && typeof e.target.result === "string") {
        const img = new Image();
        img.onload = () => {
          // Create canvas
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
          
          // Set dimensions (maintaining aspect ratio)
          canvas.width = img.width;
          canvas.height = img.height;
          
          // Draw image on canvas
          if (ctx) {
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            
            // Convert to blob with compression
            const quality = qualityLevel[0] / 100;
            
            canvas.toBlob(
              (blob) => {
                if (blob) {
                  const compressedUrl = URL.createObjectURL(blob);
                  setCompressedImageUrl(compressedUrl);
                  setCompressedBlob(blob);
                  setCompressedSize(blob.size);
                  setCompressed(true);
                  
                  const originalSize = selectedFile.size;
                  const newSize = blob.size;
                  const reduction = Math.round((1 - newSize / originalSize) * 100);
                  
                  toast({
                    title: "JPG Compression Complete",
                    description: `Reduced from ${(originalSize / 1024).toFixed(2)}KB to ${(newSize / 1024).toFixed(2)}KB (${reduction}% reduction)`,
                  });
                } else {
                  toast({
                    title: "Compression Failed",
                    description: "There was a problem compressing your image.",
                    variant: "destructive",
                  });
                }
                setProcessing(false);
              },
              "image/jpeg",
              quality
            );
          }
        };
        img.src = e.target.result;
      }
    };
    reader.readAsDataURL(selectedFile);
  };
  
  const handleDownload = () => {
    if (!selectedFile || !compressedBlob) {
      toast({
        title: "No compressed image",
        description: "Please compress the image first.",
        variant: "destructive",
      });
      return;
    }
    
    // Here we're downloading the actual compressed image
    const a = document.createElement("a");
    a.href = URL.createObjectURL(compressedBlob);
    a.download = `compressed_${selectedFile.name}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    
    toast({
      title: "Download Started",
      description: `Your compressed JPG image (${(compressedSize / 1024).toFixed(2)}KB) is downloading.`,
    });
  };

  const handleOriginalDownload = () => {
    if (!selectedFile) return;
    
    const url = URL.createObjectURL(selectedFile);
    const a = document.createElement("a");
    a.href = url;
    a.download = selectedFile.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Download Started",
      description: `Your original image (${(selectedFile.size / 1024).toFixed(2)}KB) is downloading.`,
    });
  };

  return {
    selectedFile,
    qualityLevel,
    processing,
    compressed,
    compressedSize,
    compressedImageUrl,
    setQualityLevel,
    handleFileSelect,
    handleCompression,
    handleDownload,
    handleOriginalDownload
  };
};
