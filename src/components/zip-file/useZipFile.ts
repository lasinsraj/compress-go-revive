
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

export const useZipFile = () => {
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
    // Create a simple text file to represent the ZIP (for simulation)
    const fileContent = files.map(file => `${file.name} (${file.size} bytes)`).join('\n');
    const blob = new Blob([fileContent], { type: 'application/zip' });
    const url = URL.createObjectURL(blob);
    
    // Ensure the zip name has the .zip extension
    let downloadName = zipName;
    if (!downloadName.toLowerCase().endsWith('.zip')) {
      downloadName += '.zip';
    }
    
    const a = document.createElement("a");
    a.href = url;
    a.download = downloadName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Download Started",
      description: `Your ZIP file "${downloadName}" is downloading.`,
    });
  };
  
  // Calculate total size of files
  const totalSize = files.reduce((sum, file) => sum + file.size, 0);
  const formattedTotalSize = totalSize < 1024 * 1024
    ? `${(totalSize / 1024).toFixed(2)} KB`
    : `${(totalSize / (1024 * 1024)).toFixed(2)} MB`;
  
  return {
    files,
    zipName,
    compressing,
    compressed,
    formattedTotalSize,
    setZipName,
    handleFileChange,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    removeFile,
    handleCreateZip,
    handleDownload
  };
};
