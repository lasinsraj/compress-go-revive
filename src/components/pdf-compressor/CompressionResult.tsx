
import React from "react";
import { Download } from "lucide-react";
import DownloadButton from "@/components/shared/DownloadButton";

interface CompressionResultProps {
  selectedFile: File | null;
  compressedSize: number;
  handleDownload: () => void;
}

const CompressionResult: React.FC<CompressionResultProps> = ({
  selectedFile,
  compressedSize,
  handleDownload,
}) => {
  if (!selectedFile) return null;
  
  const originalSize = selectedFile.size;
  const reduction = Math.round((1 - compressedSize / originalSize) * 100);
  
  return (
    <div className="mt-6 border rounded-lg p-6">
      <h3 className="font-medium mb-4">Compression Result</h3>
      
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm font-medium">Original File</p>
            <p className="text-gray-600">{selectedFile.name}</p>
            <p className="text-gray-600">
              {originalSize / (1024 * 1024) > 1 
                ? (originalSize / (1024 * 1024)).toFixed(2) + " MB" 
                : (originalSize / 1024).toFixed(2) + " KB"}
            </p>
          </div>
          
          <div>
            <p className="text-sm font-medium">Compressed File</p>
            <p className="text-gray-600">compressed_{selectedFile.name}</p>
            <p className="text-gray-600">
              {compressedSize / (1024 * 1024) > 1 
                ? (compressedSize / (1024 * 1024)).toFixed(2) + " MB" 
                : (compressedSize / 1024).toFixed(2) + " KB"}
            </p>
          </div>
        </div>
        
        <div className="flex items-center">
          <div className="flex-1 mr-2 h-4 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-brand-red rounded-full" 
              style={{ width: `${Math.round((compressedSize / originalSize) * 100)}%` }}
            ></div>
          </div>
          <span className="text-sm font-medium text-green-600 whitespace-nowrap">
            {reduction}% smaller
          </span>
        </div>
        
        <DownloadButton 
          onDownload={handleDownload} 
          className="w-full bg-brand-red hover:bg-red-700"
        >
          Download Compressed PDF
        </DownloadButton>
      </div>
    </div>
  );
};

export default CompressionResult;
