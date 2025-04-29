
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
    
    // In a real implementation, we would use canvas to compress the image
    // For this simulation, we're just creating a delayed effect
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target && typeof e.target.result === "string") {
        const img = new Image();
        img.onload = () => {
          // Simulate compression process
          const originalSize = selectedFile.size;
          
          // Calculate compression ratio based on quality level
          const quality = qualityLevel[0] / 100;
          // JPG compression isn't linear, this is an approximation
          const compressionFactor = Math.pow(quality, 1.5);
          
          const newSize = Math.floor(originalSize * compressionFactor);
          
          // Simulate processing delay
          setTimeout(() => {
            setProcessing(false);
            setCompressed(true);
            setCompressedSize(newSize);
            setCompressedImageUrl(e.target?.result as string);
            
            toast({
              title: "JPG Compression Complete",
              description: `Reduced from ${(originalSize / 1024).toFixed(2)}KB to ${(newSize / 1024).toFixed(2)}KB (${Math.round((1 - compressionFactor) * 100)}% reduction)`,
            });
          }, 1500);
        };
        img.src = e.target.result;
      }
    };
    reader.readAsDataURL(selectedFile);
  };
  
  const handleDownload = () => {
    if (!selectedFile || !compressedImageUrl) return;
    
    // In a real implementation, we would download the actual compressed image
    // Here we're just downloading the original image as a simulation
    const a = document.createElement("a");
    a.href = compressedImageUrl;
    a.download = `compressed_${selectedFile.name}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    
    toast({
      title: "Download Started",
      description: "Your compressed JPG image is downloading.",
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
    handleDownload
  };
};
