
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
    
    // Use canvas to actually compress the image
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
            
            // Determine output format
            let format = outputFormat;
            if (format === "same") {
              // Extract format from file type
              if (selectedFile.type.includes("jpeg") || selectedFile.type.includes("jpg")) {
                format = "jpeg";
              } else if (selectedFile.type.includes("png")) {
                format = "png";
              } else if (selectedFile.type.includes("webp")) {
                format = "webp";
              } else {
                format = "jpeg"; // Default to JPEG
              }
            }
            
            // Convert format string to proper MIME type
            let mimeType: string;
            switch (format) {
              case "jpg":
              case "jpeg":
                mimeType = "image/jpeg";
                break;
              case "png":
                mimeType = "image/png";
                break;
              case "webp":
                mimeType = "image/webp";
                break;
              default:
                mimeType = "image/jpeg";
            }
            
            // Convert to blob with compression
            canvas.toBlob(
              (blob) => {
                if (blob) {
                  const compressedUrl = URL.createObjectURL(blob);
                  setCompressedImageUrl(compressedUrl);
                  setCompressedSize(blob.size);
                  setCompressed(true);
                  
                  const originalSize = selectedFile.size;
                  const newSize = blob.size;
                  const reduction = Math.round((1 - newSize / originalSize) * 100);
                  
                  toast({
                    title: "Image Compression Complete",
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
              mimeType,
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
    if (!selectedFile || !compressedImageUrl) return;
    
    // Here we're downloading the actual compressed image
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
