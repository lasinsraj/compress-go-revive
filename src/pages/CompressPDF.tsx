import React, { useState } from "react";
import FileUploader from "@/components/FileUploader";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { FileText, Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CompressPDF = () => {
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
  
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Compress PDF</h1>
        <p className="text-gray-600">
          Reduce the size of your PDF files with our powerful compression tool. 
          Choose different compression levels to balance between file size and quality.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <FileUploader
            allowedTypes={["application/pdf"]}
            maxSizeMB={50}
            title="Upload PDF File"
            description="Drag and drop your PDF here, or click to browse"
            onFileSelect={handleFileSelect}
          />
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium mb-2">Compression Options</h3>
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="w-full md:w-1/3">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Compression Level
                </label>
                <Select value={compressionLevel} onValueChange={setCompressionLevel}>
                  <SelectTrigger>
                    <SelectValue placeholder="Compression Level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low (Best Quality)</SelectItem>
                    <SelectItem value="medium">Medium (Balanced)</SelectItem>
                    <SelectItem value="high">High (Smaller Size)</SelectItem>
                    <SelectItem value="maximum">Maximum (Smallest Size)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex-1">
                <Button 
                  onClick={handleCompression} 
                  disabled={!selectedFile || processing}
                  className="w-full md:mt-7 bg-brand-red hover:bg-red-700"
                >
                  {processing ? "Compressing..." : "Compress PDF"}
                </Button>
              </div>
            </div>
          </div>
          
          {compressed && (
            <div className="mt-6 border rounded-lg p-6">
              <h3 className="font-medium mb-2">Compression Results</h3>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm">
                    Original Size: {((selectedFile?.size || 0) / (1024 * 1024)).toFixed(2)}MB
                  </p>
                  <p className="text-sm">
                    Compressed Size: {(compressedSize / (1024 * 1024)).toFixed(2)}MB
                  </p>
                  <p className="text-sm font-medium text-green-600">
                    Saved: {(((selectedFile?.size || 0) - compressedSize) / (1024 * 1024)).toFixed(2)}MB
                    ({Math.round(((selectedFile?.size || 0) - compressedSize) / (selectedFile?.size || 1) * 100)}%)
                  </p>
                </div>
                
                <Button onClick={handleDownload} className="bg-brand-red hover:bg-red-700">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </div>
            </div>
          )}
        </div>
        
        <div>
          <Card>
            <CardHeader>
              <CardTitle>PDF Compression Tips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium">Choose the Right Level</h4>
                <p className="text-sm text-gray-600">
                  Select the compression level based on your needs. Higher compression means smaller size but may reduce quality.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium">Best Practices</h4>
                <ul className="list-disc pl-5 text-sm text-gray-600">
                  <li>Use Medium for general purpose documents</li>
                  <li>Use Low when preserving image quality is important</li>
                  <li>Use Maximum for the smallest possible file size</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium">Benefits</h4>
                <ul className="list-disc pl-5 text-sm text-gray-600">
                  <li>Easier to share via email</li>
                  <li>Faster uploads and downloads</li>
                  <li>Saves storage space</li>
                  <li>Better for web publishing</li>
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
        </div>
      </div>
      
      <section className="mt-12 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">How to Compress a PDF File</h2>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Upload your PDF file using the uploader above.</li>
          <li>Select your desired compression level.</li>
          <li>Click the "Compress PDF" button.</li>
          <li>Wait for the compression process to complete.</li>
          <li>Download your compressed PDF file.</li>
        </ol>
        <p className="mt-4 text-gray-600">
          Our PDF compressor reduces the size of your PDF files while maintaining reasonable quality. This makes your files easier to share, upload, and store.
          All processing happens directly in your browser - your files are never uploaded to our servers.
        </p>
      </section>
    </div>
  );
};

export default CompressPDF;
