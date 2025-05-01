
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

export const usePDFCompression = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [compressionLevel, setCompressionLevel] = useState("medium");
  const [processing, setProcessing] = useState(false);
  const [compressed, setCompressed] = useState(false);
  const [compressedSize, setCompressedSize] = useState(0);
  
  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
    setCompressed(false);
  };
  
  const handleCompression = () => {
    if (!selectedFile) {
      toast({
        title: "No file selected",
        description: "Please select a PDF file first.",
        variant: "destructive",
      });
      return;
    }
    
    setProcessing(true);
    
    // Simulate compression process
    const originalSize = selectedFile.size;
    let compressionRatio: number;
    
    // Different ratios based on compression level
    switch(compressionLevel) {
      case "low":
        compressionRatio = 0.9;
        break;
      case "medium":
        compressionRatio = 0.7;
        break;
      case "high":
        compressionRatio = 0.5;
        break;
      case "maximum":
        compressionRatio = 0.3;
        break;
      default:
        compressionRatio = 0.7;
    }
    
    // Calculate simulated compressed size
    const newSize = Math.floor(originalSize * compressionRatio);
    
    // Simulate processing delay
    setTimeout(() => {
      setProcessing(false);
      setCompressed(true);
      setCompressedSize(newSize);
      
      toast({
        title: "PDF Compression Complete",
        description: `Reduced from ${(originalSize / (1024 * 1024)).toFixed(2)}MB to ${(newSize / (1024 * 1024)).toFixed(2)}MB (${Math.round((1 - compressionRatio) * 100)}% reduction)`,
      });
    }, 2000);
  };
  
  const handleDownload = () => {
    if (!selectedFile) return;
    
    // In a real implementation, you would download the actual compressed file
    // Here we're just simulating by downloading the original file
    const url = URL.createObjectURL(selectedFile);
    const a = document.createElement("a");
    a.href = url;
    a.download = `compressed_${selectedFile.name}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Download Started",
      description: "Your compressed PDF file is downloading.",
    });
  };

  return {
    selectedFile,
    compressionLevel,
    processing,
    compressed,
    compressedSize,
    setCompressionLevel,
    handleFileSelect,
    handleCompression,
    handleDownload
  };
};
