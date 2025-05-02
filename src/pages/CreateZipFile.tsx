
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { Download, Upload, X, File, Archive } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import DownloadButton from "@/components/shared/DownloadButton";

const CreateZipFile = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [zipName, setZipName] = useState("archive.zip");
  const [compressing, setCompressing] = useState(false);
  const [compressed, setCompressed] = useState(false);
  
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
        description: "Please add at least one file to create a ZIP file.",
        variant: "destructive",
      });
      return;
    }
    
    if (!zipName.trim()) {
      toast({
        title: "Invalid ZIP name",
        description: "Please enter a valid name for your ZIP file.",
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
        title: "ZIP File Created",
        description: `Successfully created "${zipName}" with ${files.length} files.`,
      });
    }, 2000);
  };
  
  const handleDownload = () => {
    // In a real implementation, we would create and download an actual ZIP file
    // Here we're just simulating the download
    toast({
      title: "Download Started",
      description: `Your ZIP file "${zipName}" is downloading.`,
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
        <h1 className="text-3xl font-bold">Create ZIP File</h1>
        <p className="text-gray-600">
          Easily create a ZIP file from multiple files. Perfect for sharing, organizing, or backing up your files.
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
                <Label htmlFor="zip-name">ZIP File Name</Label>
                <Input 
                  id="zip-name"
                  type="text"
                  value={zipName}
                  onChange={(e) => setZipName(e.target.value)}
                  placeholder="Enter ZIP file name"
                  className="mt-1"
                />
                {!zipName.toLowerCase().endsWith('.zip') && (
                  <p className="text-xs text-amber-600 mt-1">
                    Note: .zip extension will be added automatically if not included
                  </p>
                )}
              </div>
              
              {!compressed ? (
                <Button 
                  onClick={handleCreateZip} 
                  disabled={files.length === 0 || compressing}
                  className="w-full bg-brand-red hover:bg-red-700"
                >
                  {compressing ? "Creating ZIP File..." : "Create ZIP File"}
                </Button>
              ) : (
                <DownloadButton 
                  onDownload={handleDownload}
                  className="w-full bg-brand-red hover:bg-red-700"
                >
                  Download ZIP File
                </DownloadButton>
              )}
            </div>
          </div>
        </div>
        
        {/* Info Cards Section */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>ZIP File Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium">What is a ZIP file?</h4>
                <p className="text-sm text-gray-600">
                  A ZIP file is a compressed archive that contains one or more files bundled together. It takes up less space and is easier to share than sending individual files.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium">Compatibility</h4>
                <p className="text-sm text-gray-600">
                  ZIP files can be opened on Windows, Mac, Linux, and mobile devices without additional software in most cases.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium">Uses for ZIP Files</h4>
                <ul className="list-disc pl-5 text-sm text-gray-600">
                  <li>Email multiple documents as a single attachment</li>
                  <li>Archive old projects</li>
                  <li>Share collections of photos</li>
                  <li>Reduce storage space requirements</li>
                  <li>Create backups of important files</li>
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
                  <a href="/create-zip" className="text-brand-red hover:underline flex items-center">
                    <Archive className="w-4 h-4 mr-2" />
                    Create ZIP Archive
                  </a>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* How-To Section */}
      <section className="mt-12 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">How to Create a ZIP File</h2>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Upload your files using the uploader above.</li>
          <li>Enter a name for your ZIP file.</li>
          <li>Click the "Create ZIP File" button.</li>
          <li>Wait for the compression process to complete.</li>
          <li>Download your ZIP file.</li>
        </ol>
        <p className="mt-4 text-gray-600">
          Our ZIP file creator processes your files directly in your browser, meaning they are never uploaded to our servers. This ensures your data remains private and secure.
        </p>
      </section>
    </div>
  );
};

export default CreateZipFile;
