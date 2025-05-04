
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import DownloadButton from "@/components/shared/DownloadButton";

interface ZipOptionsProps {
  files: File[];
  zipName: string;
  setZipName: (value: string) => void;
  compressed: boolean;
  compressing: boolean;
  handleCreateZip: () => void;
  handleDownload: () => void;
}

const ZipOptions: React.FC<ZipOptionsProps> = ({
  files,
  zipName,
  setZipName,
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
          <Label htmlFor="zip-name">ZIP File Name</Label>
          <Input 
            id="zip-name"
            type="text"
            value={zipName}
            onChange={(e) => setZipName(e.target.value)}
            placeholder="Enter ZIP file name"
            className="mt-1"
          />
          {!zipName.toLowerCase().endsWith('.zip') && (
            <p className="text-xs text-amber-600 mt-1">
              Note: .zip extension will be added automatically if not included
            </p>
          )}
        </div>
        
        {!compressed ? (
          <Button 
            onClick={handleCreateZip} 
            disabled={files.length === 0 || compressing}
            className="w-full bg-brand-red hover:bg-red-700"
          >
            {compressing ? "Creating ZIP File..." : "Create ZIP File"}
          </Button>
        ) : (
          <DownloadButton 
            onDownload={handleDownload}
            className="w-full bg-brand-red hover:bg-red-700"
          >
            Download ZIP File
          </DownloadButton>
        )}
      </div>
    </div>
  );
};

export default ZipOptions;
