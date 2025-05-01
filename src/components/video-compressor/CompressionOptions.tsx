
import React from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface CompressionOptionsProps {
  qualityLevel: number[];
  setQualityLevel: (value: number[]) => void;
  resolution: string;
  setResolution: (value: string) => void;
  handleCompression: () => void;
  processing: boolean;
  selectedFile: File | null;
}

const CompressionOptions: React.FC<CompressionOptionsProps> = ({
  qualityLevel,
  setQualityLevel,
  resolution,
  setResolution,
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
              Quality Level: {qualityLevel[0]}%
            </label>
          </div>
          <Slider
            defaultValue={[70]}
            max={100}
            min={30}
            step={5}
            value={qualityLevel}
            onValueChange={setQualityLevel}
            className="py-2"
          />
          <div className="flex justify-between text-xs text-gray-500">
            <span>Max Compression</span>
            <span>Best Quality</span>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Output Resolution
          </label>
          <Select value={resolution} onValueChange={setResolution}>
            <SelectTrigger>
              <SelectValue placeholder="Select resolution" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="original">Original (No change)</SelectItem>
              <SelectItem value="1080p">1080p</SelectItem>
              <SelectItem value="720p">720p</SelectItem>
              <SelectItem value="480p">480p</SelectItem>
              <SelectItem value="360p">360p</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <Button 
          onClick={handleCompression} 
          disabled={!selectedFile || processing}
          className="w-full bg-brand-red hover:bg-red-700"
        >
          {processing ? "Compressing... This may take a while" : "Compress Video"}
        </Button>
      </div>
    </div>
  );
};

export default CompressionOptions;
