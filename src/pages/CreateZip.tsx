import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { Download, Upload, X, File, Archive } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import DownloadButton from "@/components/shared/DownloadButton";

const CreateZip = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [compressing, setCompressing] = useState(false);
  const [compressed, setCompressed] = useState(false);
  const [compressionLevel, setCompressionLevel] = useState<number[]>([5]);
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles(prev => [...prev, ...newFiles]);
    }
  };
  
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.currentTarget.classList.add("border-brand-red", "bg-red-50");
  };
  
  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.currentTarget.classList.remove("border-brand-red", "bg-red-50");
  };
  
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.currentTarget.classList.remove("border-brand-red", "bg-red-50");
    
    if (e.dataTransfer.files) {
      const newFiles = Array.from(e.dataTransfer.files);
      setFiles(prev => [...prev, ...newFiles]);
    }
  };
  
  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };
  
  const handleCreateZip = () => {
    if (files.length === 0) {
      toast({
        title: "No files selected",
        description: "Please add at least one file to create a ZIP archive.",
        variant: "destructive",
      });
      return;
    }
    
    setCompressing(true);
    
    // Simulate creating a ZIP file
    setTimeout(() => {
      setCompressing(false);
      setCompressed(true);
      
      toast({
        title: "ZIP Archive Created",
        description: `Successfully created ZIP archive with ${files.length} files.`,
      });
    }, 2000);
  };
  
  const handleDownload = () => {
    // Create a simple text file to represent the ZIP (for simulation)
    const fileContent = files.map(file => `${file.name} (${file.size} bytes)`).join('\n');
    const blob = new Blob([fileContent], { type: 'application/zip' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement("a");
    a.href = url;
    a.download = "archive.zip";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Download Started",
      description: "Your ZIP archive is downloading.",
    });
  };
  
  // Calculate total size of files
  const totalSize = files.reduce((sum, file) => sum + file.size, 0);
  const formattedTotalSize = totalSize < 1024 * 1024
    ? `${(totalSize / 1024).toFixed(2)} KB`
    : `${(totalSize / (1024 * 1024)).toFixed(2)} MB`;
  
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Create ZIP Archive</h1>
        <p className="text-gray-600">
          Compress multiple files into a single ZIP archive. Add files by dragging and dropping or browsing your device.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div
            className="border-2 border-dashed rounded-lg p-8 text-center"
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-xl font-semibold">Add Files to ZIP</h3>
            <p className="mt-1 text-sm text-gray-500">
              Drag and drop files here, or click to browse
            </p>
            <div className="mt-4">
              <Button onClick={() => document.getElementById("file-upload")?.click()} className="bg-brand-red hover:bg-red-700">
                Browse Files
              </Button>
              <input
                id="file-upload"
                type="file"
                multiple
                onChange={handleFileChange}
                className="hidden"
              />
            </div>
          </div>
          
          {/* Files List Section */}
          {files.length > 0 && (
            <div className="mt-6 border rounded-lg p-4">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-medium">Files to Compress</h3>
                <div className="text-sm text-gray-600">
                  {files.length} files ({formattedTotalSize})
                </div>
              </div>
              
              <div className="max-h-60 overflow-y-auto">
                <ul className="space-y-2">
                  {files.map((file, index) => (
                    <li key={index} className="flex justify-between items-center p-2 hover:bg-gray-50 rounded">
                      <div className="flex items-center">
                        <File className="h-5 w-5 text-gray-400 mr-2" />
                        <span className="text-sm truncate" style={{ maxWidth: "200px" }}>
                          {file.name}
                        </span>
                        <span className="text-xs text-gray-500 ml-2">
                          {file.size < 1024 * 1024
                            ? `${(file.size / 1024).toFixed(2)} KB`
                            : `${(file.size / (1024 * 1024)).toFixed(2)} MB`}
                        </span>
                      </div>
                      <button
                        onClick={() => removeFile(index)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium mb-4">ZIP Options</h3>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-medium text-gray-700">
                    Compression Level: {compressionLevel[0]}
                  </label>
                </div>
                <Slider
                  defaultValue={[5]}
                  max={9}
                  min={1}
                  step={1}
                  value={compressionLevel}
                  onValueChange={setCompressionLevel}
                  className="py-2"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Faster (Less Compression)</span>
                  <span>Smaller (More Compression)</span>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Higher compression levels result in smaller files but take longer to process.
                </p>
              </div>
              
              {!compressed ? (
                <Button 
                  onClick={handleCreateZip} 
                  disabled={files.length === 0 || compressing}
                  className="w-full bg-brand-red hover:bg-red-700"
                >
                  {compressing ? "Creating ZIP Archive..." : "Create ZIP Archive"}
                </Button>
              ) : (
                <DownloadButton 
                  onDownload={handleDownload}
                  className="w-full bg-brand-red hover:bg-red-700"
                >
                  Download ZIP Archive
                </DownloadButton>
              )}
            </div>
          </div>
        </div>
        
        {/* Tips and Info Section */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>ZIP Archive Tips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium">File Selection</h4>
                <p className="text-sm text-gray-600">
                  Add files of any type to your ZIP archive. You can mix documents, images, videos, and more.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium">Compression Levels</h4>
                <p className="text-sm text-gray-600">
                  Level 5 offers a good balance of speed and compression. Use higher levels for better compression, lower for faster processing.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium">Benefits</h4>
                <ul className="list-disc pl-5 text-sm text-gray-600">
                  <li>Send multiple files as a single attachment</li>
                  <li>Reduce total file size</li>
                  <li>Organize related files together</li>
                  <li>Improve upload and download speeds</li>
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
              <CardTitle>Related Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>
                  <a href="/create-zip-file" className="text-brand-red hover:underline flex items-center">
                    <Archive className="w-4 h-4 mr-2" />
                    Create ZIP File
                  </a>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* About Section */}
      <section className="mt-12 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">About Our ZIP Archive Tool</h2>
        <p className="text-gray-600 mb-4">
          Our ZIP archive tool allows you to compress multiple files into a single ZIP archive. This makes it easier to share, email, or store groups of files without having to handle them individually.
        </p>
        <p className="text-gray-600">
          ZIP archives can contain any type of file and maintain the original folder structure. The compression happens entirely in your browser, meaning your files are never uploaded to our servers, ensuring privacy and security.
        </p>
      </section>
    </div>
  );
};

export default CreateZip;
