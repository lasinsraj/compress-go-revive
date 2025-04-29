
import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { toast } from "@/components/ui/use-toast";
import { Upload, X } from "lucide-react";

interface FileUploaderProps {
  allowedTypes: string[];
  maxSizeMB: number;
  title: string;
  description: string;
  onFileSelect: (file: File) => void;
}

const FileUploader: React.FC<FileUploaderProps> = ({
  allowedTypes,
  maxSizeMB,
  title,
  description,
  onFileSelect,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const maxSizeBytes = maxSizeMB * 1024 * 1024;

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      validateAndProcessFile(droppedFile);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      validateAndProcessFile(e.target.files[0]);
    }
  };

  const validateAndProcessFile = (selectedFile: File) => {
    // Check file type
    const fileType = selectedFile.type;
    if (!allowedTypes.includes(fileType) && 
        !allowedTypes.includes("*") && 
        !allowedTypes.some(type => fileType.startsWith(type.replace('/*', '')))) {
      toast({
        title: "Invalid file type",
        description: `Please upload one of these formats: ${allowedTypes.join(", ")}`,
        variant: "destructive",
      });
      return;
    }

    // Check file size
    if (selectedFile.size > maxSizeBytes) {
      toast({
        title: "File too large",
        description: `Maximum file size is ${maxSizeMB}MB. Your file is ${(selectedFile.size / (1024 * 1024)).toFixed(2)}MB.`,
        variant: "destructive",
      });
      return;
    }

    setFile(selectedFile);
    onFileSelect(selectedFile);
    
    // Simulate progress for better UX
    simulateProgress();
  };

  const simulateProgress = () => {
    setProgress(0);
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 10;
        if (newProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return newProgress;
      });
    }, 200);
  };

  const handleRemoveFile = () => {
    setFile(null);
    setProgress(0);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {!file ? (
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center ${
            isDragging ? "border-brand-red bg-red-50" : "border-gray-300"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <Upload className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-xl font-semibold">{title}</h3>
          <p className="mt-1 text-sm text-gray-500">{description}</p>
          <p className="mt-2 text-xs text-gray-500">
            Max file size: {maxSizeMB}MB
          </p>
          <div className="mt-4">
            <Button onClick={triggerFileInput} className="bg-brand-red hover:bg-red-700">
              Select File
            </Button>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileInputChange}
              accept={allowedTypes.join(",")}
              className="hidden"
            />
          </div>
        </div>
      ) : (
        <div className="border rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="font-medium">{file.name}</h3>
              <p className="text-sm text-gray-500">
                {(file.size / (1024 * 1024)).toFixed(2)}MB
              </p>
            </div>
            <button
              onClick={handleRemoveFile}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <Progress value={progress} className="h-2" />
          {progress === 100 && (
            <p className="text-green-600 text-sm mt-2">File ready for processing</p>
          )}
        </div>
      )}
    </div>
  );
};

export default FileUploader;
