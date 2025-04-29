
import React from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface CompressionOptionsProps {
  qualityLevel: number[];
  setQualityLevel: (value: number[]) => void;
  outputFormat: string;
  setOutputFormat: (value: string) => void;
  handleCompression: () => void;
  processing: boolean;
  selectedFile: File | null;
}

const CompressionOptions: React.FC<CompressionOptionsProps> = ({
  qualityLevel,
  setQualityLevel,
  outputFormat,
  setOutputFormat,
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
            defaultValue={[80]}
            max={100}
            min={30}
            step={1}
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
            Output Format
          </label>
          <Tabs defaultValue={outputFormat} value={outputFormat} onValueChange={setOutputFormat}>
            <TabsList className="grid grid-cols-4">
              <TabsTrigger value="same">Same as input</TabsTrigger>
              <TabsTrigger value="jpg">JPG</TabsTrigger>
              <TabsTrigger value="png">PNG</TabsTrigger>
              <TabsTrigger value="webp">WebP</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
        <Button 
          onClick={handleCompression} 
          disabled={!selectedFile || processing}
          className="w-full bg-brand-red hover:bg-red-700"
        >
          {processing ? "Compressing..." : "Compress Image"}
        </Button>
      </div>
    </div>
  );
};

export default CompressionOptions;
