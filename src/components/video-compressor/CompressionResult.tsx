
import React from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import DownloadButton from "@/components/shared/DownloadButton";

interface CompressionResultProps {
  compressed: boolean;
  originalVideoUrl: string | null;
  selectedFile: File | null;
  compressedSize: number;
  resolution: string;
  qualityLevel: number[];
  handleDownload: () => void;
}

const CompressionResult: React.FC<CompressionResultProps> = ({
  compressed,
  originalVideoUrl,
  selectedFile,
  compressedSize,
  resolution,
  qualityLevel,
  handleDownload,
}) => {
  if (!compressed || !originalVideoUrl || !selectedFile) return null;
  
  return (
    <div className="mt-6 border rounded-lg p-6">
      <h3 className="font-medium mb-4">Compression Result</h3>
      
      <div className="space-y-4">
        <div className="flex justify-between text-sm">
          <div>
            <div><strong>Original Size:</strong> {selectedFile.size / (1024 * 1024) > 1 ? 
              (selectedFile.size / (1024 * 1024)).toFixed(2) + " MB" : 
              (selectedFile.size / 1024).toFixed(2) + " KB"}
            </div>
            <div><strong>Compressed Size:</strong> {compressedSize / (1024 * 1024) > 1 ? 
              (compressedSize / (1024 * 1024)).toFixed(2) + " MB" : 
              (compressedSize / 1024).toFixed(2) + " KB"}
            </div>
          </div>
          
          <div>
            <div><strong>Resolution:</strong> {resolution === "original" ? "Original" : resolution}</div>
            <div><strong>Quality:</strong> {qualityLevel[0]}%</div>
          </div>
        </div>
        
        <div className="flex items-center">
          <div className="flex-1 mr-2 h-4 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-brand-red rounded-full" 
              style={{width: `${Math.round((compressedSize / (selectedFile.size)) * 100)}%`}}
            ></div>
          </div>
          <span className="text-sm font-medium text-green-600 whitespace-nowrap">
            {Math.round((1 - (compressedSize / (selectedFile.size))) * 100)}% smaller
          </span>
        </div>
        
        <DownloadButton 
          onDownload={handleDownload} 
          className="w-full bg-brand-red hover:bg-red-700"
        >
          Download Compressed Video
        </DownloadButton>
      </div>
    </div>
  );
};

export default CompressionResult;
