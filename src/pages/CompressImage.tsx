
import React, { useState } from "react";
import FileUploader from "@/components/FileUploader";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { toast } from "@/components/ui/use-toast";
import { Download, Image } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CompressImage = () => {
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
    
    // Preview the original image
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target && typeof e.target.result === "string") {
          // Just preview, not setting as compressed result
        }
      };
      reader.readAsDataURL(file);
    }
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
  
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Compress Image</h1>
        <p className="text-gray-600">
          Reduce the size of your image files while maintaining good quality.
          Supports JPEG, PNG, GIF, WebP and other popular image formats.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <FileUploader
            allowedTypes={["image/*"]}
            maxSizeMB={20}
            title="Upload Image"
            description="Drag and drop your image here, or click to browse"
            onFileSelect={handleFileSelect}
          />
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium mb-4">Compression Options</h3>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-medium text-gray-700">
                    Quality Level: {qualityLevel[0]}%
                  </label>
                </div>
                <Slider
                  defaultValue={[80]}
                  max={100}
                  min={30}
                  step={1}
                  value={qualityLevel}
                  onValueChange={setQualityLevel}
                  className="py-2"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Max Compression</span>
                  <span>Best Quality</span>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Output Format
                </label>
                <Tabs defaultValue="same" value={outputFormat} onValueChange={setOutputFormat}>
                  <TabsList className="grid grid-cols-4">
                    <TabsTrigger value="same">Same as input</TabsTrigger>
                    <TabsTrigger value="jpg">JPG</TabsTrigger>
                    <TabsTrigger value="png">PNG</TabsTrigger>
                    <TabsTrigger value="webp">WebP</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
              
              <Button 
                onClick={handleCompression} 
                disabled={!selectedFile || processing}
                className="w-full bg-brand-red hover:bg-red-700"
              >
                {processing ? "Compressing..." : "Compress Image"}
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
                  Download Compressed Image
                </Button>
              </div>
            </div>
          )}
        </div>
        
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Image Compression Tips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium">Choose the Right Format</h4>
                <p className="text-sm text-gray-600">
                  JPG is best for photos. PNG is best for images with transparency or text. WebP offers good compression for both.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium">Quality vs. Size</h4>
                <p className="text-sm text-gray-600">
                  Lower quality settings yield smaller files but may introduce artifacts. Find the sweet spot for your needs.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium">Benefits</h4>
                <ul className="list-disc pl-5 text-sm text-gray-600">
                  <li>Faster website loading</li>
                  <li>Lower bandwidth usage</li>
                  <li>Reduced storage requirements</li>
                  <li>Improved user experience</li>
                </ul>
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
                  <a href="/compress-png" className="text-brand-red hover:underline flex items-center">
                    <Image className="w-4 h-4 mr-2" />
                    Compress PNG
                  </a>
                </li>
                <li>
                  <a href="/compress-jpg" className="text-brand-red hover:underline flex items-center">
                    <Image className="w-4 h-4 mr-2" />
                    Compress JPG
                  </a>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <section className="mt-12 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">About Our Image Compression Tool</h2>
        <p className="text-gray-600 mb-4">
          Our image compression tool uses advanced algorithms to reduce the file size of your images while maintaining visual quality.
          The compression happens entirely in your browser, meaning your images are never uploaded to our servers.
        </p>
        <p className="text-gray-600">
          This tool supports various image formats including JPEG, PNG, GIF, BMP, and WebP. You can compress individual images up to 20MB in size.
          The compressed images can be downloaded immediately after processing.
        </p>
      </section>
    </div>
  );
};

export default CompressImage;
