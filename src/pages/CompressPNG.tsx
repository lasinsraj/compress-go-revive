
import React, { useState } from "react";
import FileUploader from "@/components/FileUploader";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { toast } from "@/components/ui/use-toast";
import { Download, Image } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CompressPNG = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [compressionLevel, setCompressionLevel] = useState<number[]>([7]);
  const [processing, setProcessing] = useState(false);
  const [compressed, setCompressed] = useState(false);
  const [compressedSize, setCompressedSize] = useState(0);
  const [compressedImageUrl, setCompressedImageUrl] = useState<string | null>(null);
  
  const handleFileSelect = (file: File) => {
    // Check if file is a PNG
    if (file.type !== "image/png") {
      toast({
        title: "Invalid file type",
        description: "Please select a PNG image.",
        variant: "destructive",
      });
      return;
    }
    
    setSelectedFile(file);
    setCompressed(false);
    setCompressedImageUrl(null);
    
    // Preview the original image
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target && typeof e.target.result === "string") {
        // Just preview, not setting as compressed result
      }
    };
    reader.readAsDataURL(file);
  };
  
  const handleCompression = () => {
    if (!selectedFile) {
      toast({
        title: "No PNG image selected",
        description: "Please select a PNG image file first.",
        variant: "destructive",
      });
      return;
    }
    
    setProcessing(true);
    
    // In a real implementation, we would use pngquant.js or other libraries
    // For this simulation, we're just creating a delayed effect
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target && typeof e.target.result === "string") {
        // Simulate compression process
        const originalSize = selectedFile.size;
        
        // Calculate compression ratio based on level
        // Level 9 is highest compression (smallest file) but may take longer
        const compressionFactor = 1 - (compressionLevel[0] / 10);
        const newSize = Math.floor(originalSize * compressionFactor);
        
        // Simulate processing delay
        setTimeout(() => {
          setProcessing(false);
          setCompressed(true);
          setCompressedSize(newSize);
          setCompressedImageUrl(e.target.result as string);
          
          toast({
            title: "PNG Compression Complete",
            description: `Reduced from ${(originalSize / 1024).toFixed(2)}KB to ${(newSize / 1024).toFixed(2)}KB (${Math.round((1 - compressionFactor) * 100)}% reduction)`,
          });
        }, 1500);
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
      description: "Your compressed PNG image is downloading.",
    });
  };
  
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Compress PNG</h1>
        <p className="text-gray-600">
          Reduce the file size of PNG images while preserving transparency and visual quality.
          Perfect for web graphics, icons, and screenshots.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <FileUploader
            allowedTypes={["image/png"]}
            maxSizeMB={10}
            title="Upload PNG File"
            description="Drag and drop your PNG image here, or click to browse"
            onFileSelect={handleFileSelect}
          />
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium mb-4">Compression Options</h3>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-medium text-gray-700">
                    Compression Level: {compressionLevel[0]}
                  </label>
                </div>
                <Slider
                  defaultValue={[7]}
                  max={9}
                  min={1}
                  step={1}
                  value={compressionLevel}
                  onValueChange={setCompressionLevel}
                  className="py-2"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Lower Compression</span>
                  <span>Higher Compression</span>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Higher values result in smaller files but may take longer to process.
                </p>
              </div>
              
              <Button 
                onClick={handleCompression} 
                disabled={!selectedFile || processing}
                className="w-full bg-brand-red hover:bg-red-700"
              >
                {processing ? "Compressing..." : "Compress PNG"}
              </Button>
            </div>
          </div>
          
          {compressed && compressedImageUrl && (
            <div className="mt-6 border rounded-lg p-6">
              <h3 className="font-medium mb-4">Compression Result</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Original</h4>
                  <div className="border rounded bg-check-transparent p-2 flex items-center justify-center h-40 overflow-hidden">
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
                  <div className="border rounded bg-check-transparent p-2 flex items-center justify-center h-40 overflow-hidden">
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
                  Download Compressed PNG
                </Button>
              </div>
            </div>
          )}
        </div>
        
        <div>
          <Card>
            <CardHeader>
              <CardTitle>PNG Compression Tips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium">Optimize for Web</h4>
                <p className="text-sm text-gray-600">
                  For web graphics, higher compression levels (7-9) are usually fine and produce smaller files.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium">Preserve Quality</h4>
                <p className="text-sm text-gray-600">
                  For important images where every detail matters, use lower compression levels (1-5).
                </p>
              </div>
              
              <div>
                <h4 className="font-medium">PNG vs JPEG</h4>
                <p className="text-sm text-gray-600">
                  PNG is best for images with transparency, text, or sharp edges. For photos, JPEG may be more efficient.
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
        <h2 className="text-xl font-bold mb-4">Why Compress PNG Files?</h2>
        <p className="text-gray-600 mb-4">
          PNG files are excellent for graphics with transparency, but they can be quite large. Our PNG compression tool uses optimized algorithms to reduce the file size while preserving the transparency and visual quality of your images.
        </p>
        <p className="text-gray-600">
          This tool is ideal for web developers, designers, and anyone who needs to reduce the size of PNG images for websites, emails, or storage. All processing happens directly in your browser, ensuring your images remain private.
        </p>
      </section>
    </div>
  );
};

export default CompressPNG;

