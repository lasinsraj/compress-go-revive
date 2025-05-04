
import React from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import DownloadButton from "@/components/shared/DownloadButton";

interface ZipOptionsProps {
  files: File[];
  compressionLevel: number[];
  setCompressionLevel: (value: number[]) => void;
  compressed: boolean;
  compressing: boolean;
  handleCreateZip: () => void;
  handleDownload: () => void;
}

const ZipOptions: React.FC<ZipOptionsProps> = ({
  files,
  compressionLevel,
  setCompressionLevel,
  compressed,
  compressing,
  handleCreateZip,
  handleDownload
}) => {
  return (
    <div className="mt-6 p-4 bg-gray-50 rounded-lg">
      <h3 className="font-medium mb-4">ZIP Options</h3>
      
      <div className="space-y-6">
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-medium text-gray-700">
              Compression Level: {compressionLevel[0]}
            </label>
          </div>
          <Slider
            defaultValue={[5]}
            max={9}
            min={1}
            step={1}
            value={compressionLevel}
            onValueChange={setCompressionLevel}
            className="py-2"
          />
          <div className="flex justify-between text-xs text-gray-500">
            <span>Faster (Less Compression)</span>
            <span>Smaller (More Compression)</span>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Higher compression levels result in smaller files but take longer to process.
          </p>
        </div>
        
        {!compressed ? (
          <Button 
            onClick={handleCreateZip} 
            disabled={files.length === 0 || compressing}
            className="w-full bg-brand-red hover:bg-red-700"
          >
            {compressing ? "Creating ZIP Archive..." : "Create ZIP Archive"}
          </Button>
        ) : (
          <DownloadButton 
            onDownload={handleDownload}
            className="w-full bg-brand-red hover:bg-red-700"
          >
            Download ZIP Archive
          </DownloadButton>
        )}
      </div>
    </div>
  );
};

export default ZipOptions;
