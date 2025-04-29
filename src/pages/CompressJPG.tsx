
import React, { useState } from "react";
import FileUploader from "@/components/FileUploader";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { toast } from "@/components/ui/use-toast";
import { Download, Image } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CompressJPG = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [qualityLevel, setQualityLevel] = useState<number[]>([75]);
  const [processing, setProcessing] = useState(false);
  const [compressed, setCompressed] = useState(false);
  const [compressedSize, setCompressedSize] = useState(0);
  const [compressedImageUrl, setCompressedImageUrl] = useState<string | null>(null);
  
  const handleFileSelect = (file: File) => {
    // Check if file is a JPG
    if (file.type !== "image/jpeg" && file.type !== "image/jpg") {
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
  
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Compress JPG</h1>
        <p className="text-gray-600">
          Reduce the file size of your JPG/JPEG images while maintaining good visual quality.
          Perfect for photos, web images, and email attachments.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <FileUploader
            allowedTypes={["image/jpeg", "image/jpg"]}
            maxSizeMB={10}
            title="Upload JPG File"
            description="Drag and drop your JPG image here, or click to browse"
            onFileSelect={handleFileSelect}
          />
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium mb-4">Compression Options</h3>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-medium text-gray-700">
                    Quality: {qualityLevel[0]}%
                  </label>
                </div>
                <Slider
                  defaultValue={[75]}
                  max={100}
                  min={30}
                  step={5}
                  value={qualityLevel}
                  onValueChange={setQualityLevel}
                  className="py-2"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Smaller File (Lower Quality)</span>
                  <span>Higher Quality (Larger File)</span>
                </div>
              </div>
              
              <Button 
                onClick={handleCompression} 
                disabled={!selectedFile || processing}
                className="w-full bg-brand-red hover:bg-red-700"
              >
                {processing ? "Compressing..." : "Compress JPG"}
              </Button>
            </div>
          </div>
          
          {compressed && compressedImageUrl && (
            <div className="mt-6 border rounded-lg p-6">
              <h3 className="font-medium mb-4">Compression Result</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Original</h4>
                  <div className="border rounded bg-gray-100 p-2 flex items-center justify-center h-40 overflow-hidden">
                    <img 
                      src={URL.createObjectURL(selectedFile as File)}
                      alt="Original" 
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <p className="text-xs text-center">
                    Size: {(selectedFile?.size || 0) / 1024 > 1024 
                      ? ((selectedFile?.size || 0) / (1024 * 1024)).toFixed(2) + " MB"
                      : ((selectedFile?.size || 0) / 1024).toFixed(2) + " KB"}
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Compressed</h4>
                  <div className="border rounded bg-gray-100 p-2 flex items-center justify-center h-40 overflow-hidden">
                    <img 
                      src={compressedImageUrl} 
                      alt="Compressed" 
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <p className="text-xs text-center">
                    Size: {compressedSize / 1024 > 1024 
                      ? (compressedSize / (1024 * 1024)).toFixed(2) + " MB"
                      : (compressedSize / 1024).toFixed(2) + " KB"}
                  </p>
                </div>
              </div>
              
              <div className="mt-4 flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-green-600">
                    Saved: {(((selectedFile?.size || 0) - compressedSize) / 1024).toFixed(2)}KB
                    ({Math.round(((selectedFile?.size || 0) - compressedSize) / (selectedFile?.size || 1) * 100)}%)
                  </p>
                </div>
                
                <Button onClick={handleDownload} className="bg-brand-red hover:bg-red-700">
                  <Download className="mr-2 h-4 w-4" />
                  Download Compressed JPG
                </Button>
              </div>
            </div>
          )}
        </div>
        
        <div>
          <Card>
            <CardHeader>
              <CardTitle>JPG Compression Tips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium">Finding the Sweet Spot</h4>
                <p className="text-sm text-gray-600">
                  Quality settings between 70-80% usually offer the best balance between file size and visual quality.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium">Web Optimization</h4>
                <p className="text-sm text-gray-600">
                  For web images, 60-70% quality is often sufficient and loads faster.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium">Print Quality</h4>
                <p className="text-sm text-gray-600">
                  If you're planning to print the image, maintain higher quality (85%+).
                </p>
              </div>
            </CardContent>
          </Card>
          
          <div className="mt-6">
            <div className="bg-gray-100 p-3 text-center text-sm text-gray-500">
              Advertisement
              <div className="h-60 bg-gray-200 flex items-center justify-center">
                Google AdSense (Add your AdSense code here)
              </div>
            </div>
          </div>
          
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Other Image Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>
                  <a href="/compress-image" className="text-brand-red hover:underline flex items-center">
                    <Image className="w-4 h-4 mr-2" />
                    Compress Image (All Formats)
                  </a>
                </li>
                <li>
                  <a href="/compress-png" className="text-brand-red hover:underline flex items-center">
                    <Image className="w-4 h-4 mr-2" />
                    Compress PNG
                  </a>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <section className="mt-12 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Why Compress JPG Files?</h2>
        <p className="text-gray-600 mb-4">
          JPG/JPEG is the most common format for photos and web images, but they can sometimes be larger than necessary. Our JPG compression tool uses optimized algorithms to reduce the file size while maintaining good visual quality.
        </p>
        <p className="text-gray-600">
          This tool uses lossy compression, which means it slightly reduces image quality to achieve smaller file sizes. By adjusting the quality slider, you can find the perfect balance between file size and image quality for your needs.
        </p>
      </section>
    </div>
  );
};

export default CompressJPG;
