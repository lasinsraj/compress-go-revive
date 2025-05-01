
import React from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

interface CompressionResultProps {
  selectedFile: File | null;
  compressedSize: number;
  handleDownload: () => void;
}

const CompressionResult: React.FC<CompressionResultProps> = ({
  selectedFile,
  compressedSize,
  handleDownload
}) => {
  if (!selectedFile) return null;
  
  const originalSize = selectedFile.size;
  const savedSize = originalSize - compressedSize;
  const savedPercentage = Math.round(savedSize / originalSize * 100);
  
  return (
    <div className="mt-6 border rounded-lg p-6">
      <h3 className="font-medium mb-2">Compression Results</h3>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm">
            Original Size: {(originalSize / (1024 * 1024)).toFixed(2)}MB
          </p>
          <p className="text-sm">
            Compressed Size: {(compressedSize / (1024 * 1024)).toFixed(2)}MB
          </p>
          <p className="text-sm font-medium text-green-600">
            Saved: {(savedSize / (1024 * 1024)).toFixed(2)}MB ({savedPercentage}%)
          </p>
        </div>
        
        <Button onClick={handleDownload} className="bg-brand-red hover:bg-red-700">
          <Download className="mr-2 h-4 w-4" />
          Download
        </Button>
      </div>
    </div>
  );
};

export default CompressionResult;
