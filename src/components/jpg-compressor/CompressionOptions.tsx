
import React from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

interface CompressionOptionsProps {
  qualityLevel: number[];
  setQualityLevel: (value: number[]) => void;
  handleCompression: () => void;
  processing: boolean;
  selectedFile: File | null;
}

const CompressionOptions: React.FC<CompressionOptionsProps> = ({
  qualityLevel,
  setQualityLevel,
  handleCompression,
  processing,
  selectedFile,
}) => {
  return (
    <div className="mt-6 p-4 bg-gray-50 rounded-lg">
      <h3 className="font-medium mb-4">Compression Options</h3>
      
      <div className="space-y-6">
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-medium text-gray-700">
              Quality: {qualityLevel[0]}%
            </label>
          </div>
          <Slider
            defaultValue={[75]}
            max={100}
            min={30}
            step={5}
            value={qualityLevel}
            onValueChange={setQualityLevel}
            className="py-2"
          />
          <div className="flex justify-between text-xs text-gray-500">
            <span>Smaller File (Lower Quality)</span>
            <span>Higher Quality (Larger File)</span>
          </div>
        </div>
        
        <Button 
          onClick={handleCompression} 
          disabled={!selectedFile || processing}
          className="w-full bg-brand-red hover:bg-red-700"
        >
          {processing ? "Compressing..." : "Compress JPG"}
        </Button>
      </div>
    </div>
  );
};

export default CompressionOptions;
