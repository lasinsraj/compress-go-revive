
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

export const useImageCompression = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [qualityLevel, setQualityLevel] = useState<number[]>([80]);
  const [processing, setProcessing] = useState(false);
  const [compressed, setCompressed] = useState(false);
  const [compressedSize, setCompressedSize] = useState(0);
  const [compressedImageUrl, setCompressedImageUrl] = useState<string | null>(null);
  const [outputFormat, setOutputFormat] = useState("same");
  
  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
    setCompressed(false);
    setCompressedImageUrl(null);
  };
  
  const handleCompression = () => {
    if (!selectedFile) {
      toast({
        title: "No image selected",
        description: "Please select an image file first.",
        variant: "destructive",
      });
      return;
    }
    
    setProcessing(true);
    
    // In a real implementation, we would use the browser's canvas API to compress the image
    // For this simulation, we're just creating a delayed effect and calculating a simulated size
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target && typeof e.target.result === "string") {
        const img = new Image();
        img.onload = () => {
          // Simulate compression process
          const originalSize = selectedFile.size;
          
          // Calculate compression ratio based on quality slider
          const quality = qualityLevel[0] / 100;
          let compressionRatio = 1 - (1 - quality) * 0.8; // This gives a reasonable estimation
          
          // Calculate simulated compressed size
          const newSize = Math.floor(originalSize * compressionRatio);
          
          // Simulate processing delay
          setTimeout(() => {
            setProcessing(false);
            setCompressed(true);
            setCompressedSize(newSize);
            setCompressedImageUrl(e.target?.result as string);
            
            toast({
              title: "Image Compression Complete",
              description: `Reduced from ${(originalSize / 1024).toFixed(2)}KB to ${(newSize / 1024).toFixed(2)}KB (${Math.round((1 - compressionRatio) * 100)}% reduction)`,
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
    
    // Set file extension based on output format
    let fileName = selectedFile.name;
    if (outputFormat !== "same") {
      const nameParts = fileName.split(".");
      if (nameParts.length > 1) {
        nameParts.pop(); // Remove original extension
      }
      fileName = `${nameParts.join(".")}.${outputFormat}`;
    }
    
    a.download = `compressed_${fileName}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    
    toast({
      title: "Download Started",
      description: "Your compressed image is downloading.",
    });
  };

  return {
    selectedFile,
    qualityLevel,
    processing,
    compressed,
    compressedSize,
    compressedImageUrl,
    outputFormat,
    setQualityLevel,
    setOutputFormat,
    handleFileSelect,
    handleCompression,
    handleDownload
  };
};
