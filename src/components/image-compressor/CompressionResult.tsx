
import React from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

interface CompressionResultProps {
  selectedFile: File;
  compressedImageUrl: string;
  compressedSize: number;
  handleDownload: () => void;
}

const CompressionResult: React.FC<CompressionResultProps> = ({
  selectedFile,
  compressedImageUrl,
  compressedSize,
  handleDownload,
}) => {
  const handleOriginalDownload = () => {
    const url = URL.createObjectURL(selectedFile);
    const a = document.createElement("a");
    a.href = url;
    a.download = selectedFile.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  
  return (
    <div className="mt-6 border rounded-lg p-6">
      <h3 className="font-medium mb-4">Compression Result</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Original</h4>
          <div className="border rounded bg-gray-100 p-2 flex items-center justify-center h-40 overflow-hidden">
            <img 
              src={URL.createObjectURL(selectedFile)}
              alt="Original" 
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div className="flex justify-between items-center">
            <p className="text-xs">
              Size: {selectedFile.size / 1024 > 1024 
                ? (selectedFile.size / (1024 * 1024)).toFixed(2) + " MB"
                : (selectedFile.size / 1024).toFixed(2) + " KB"}
            </p>
            <Button onClick={handleOriginalDownload} variant="outline" size="sm" className="text-xs">
              <Download className="mr-1 h-3 w-3" />
              Download Original
            </Button>
          </div>
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
          <div className="flex justify-between items-center">
            <p className="text-xs">
              Size: {compressedSize / 1024 > 1024 
                ? (compressedSize / (1024 * 1024)).toFixed(2) + " MB"
                : (compressedSize / 1024).toFixed(2) + " KB"}
            </p>
            <Button onClick={handleDownload} variant="outline" size="sm" className="text-xs">
              <Download className="mr-1 h-3 w-3" />
              Download Compressed
            </Button>
          </div>
        </div>
      </div>
      
      <div className="mt-4 flex justify-between items-center">
        <div>
          <p className="text-sm font-medium text-green-600">
            Saved: {((selectedFile.size - compressedSize) / 1024).toFixed(2)}KB
            ({Math.round((selectedFile.size - compressedSize) / selectedFile.size * 100)}%)
          </p>
        </div>
        
        <Button onClick={handleDownload} className="bg-brand-red hover:bg-red-700">
          <Download className="mr-2 h-4 w-4" />
          Download Compressed Image
        </Button>
      </div>
    </div>
  );
};

export default CompressionResult;
