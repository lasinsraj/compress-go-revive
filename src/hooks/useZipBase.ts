
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

export interface ZipBaseState {
  files: File[];
  compressing: boolean;
  compressed: boolean;
  formattedTotalSize: string;
}

export interface ZipBaseActions {
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  handleDragLeave: (e: React.DragEvent<HTMLDivElement>) => void;
  handleDrop: (e: React.DragEvent<HTMLDivElement>) => void;
  removeFile: (index: number) => void;
  handleCreateZip: () => void;
  handleDownload: () => void;
}

export const useZipBase = () => {
  const [files, setFiles] = useState<File[]>([]);
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
  
  const simulateZipCreation = (fileName: string, successMessage: string) => {
    setCompressing(true);
    
    // Simulate creating a ZIP file
    setTimeout(() => {
      setCompressing(false);
      setCompressed(true);
      
      toast({
        title: "ZIP File Created",
        description: successMessage,
      });
    }, 2000);
  };
  
  const simulateDownload = (fileName: string) => {
    // Create a simple text file to represent the ZIP (for simulation)
    const fileContent = files.map(file => `${file.name} (${file.size} bytes)`).join('\n');
    const blob = new Blob([fileContent], { type: 'application/zip' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Download Started",
      description: `Your ZIP file "${fileName}" is downloading.`,
    });
  };
  
  // Calculate total size of files
  const totalSize = files.reduce((sum, file) => sum + file.size, 0);
  const formattedTotalSize = totalSize < 1024 * 1024
    ? `${(totalSize / 1024).toFixed(2)} KB`
    : `${(totalSize / (1024 * 1024)).toFixed(2)} MB`;
  
  return {
    // State
    files,
    setFiles,
    compressing,
    setCompressing,
    compressed,
    setCompressed,
    formattedTotalSize,
    
    // Actions
    handleFileChange,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    removeFile,
    simulateZipCreation,
    simulateDownload,
  };
};
