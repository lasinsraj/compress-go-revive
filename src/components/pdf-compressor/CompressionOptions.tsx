
import React from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface CompressionOptionsProps {
  compressionLevel: string;
  setCompressionLevel: (value: string) => void;
  handleCompression: () => void;
  processing: boolean;
  selectedFile: File | null;
}

const CompressionOptions: React.FC<CompressionOptionsProps> = ({
  compressionLevel,
  setCompressionLevel,
  handleCompression,
  processing,
  selectedFile
}) => {
  return (
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
  );
};

export default CompressionOptions;
