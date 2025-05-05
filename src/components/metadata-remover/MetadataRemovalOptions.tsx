
import React from "react";
import { Button } from "@/components/ui/button";
import { Loader, Trash2 } from "lucide-react";
import DownloadButton from "@/components/shared/DownloadButton";

interface MetadataRemovalOptionsProps {
  files: File[];
  processed: boolean;
  processing: boolean;
  metadata: any;
  handleRemoveMetadata: () => void;
  handleDownload: () => void;
}

const MetadataRemovalOptions: React.FC<MetadataRemovalOptionsProps> = ({
  files,
  processed,
  processing,
  metadata,
  handleRemoveMetadata,
  handleDownload
}) => {
  if (files.length === 0) {
    return null;
  }
  
  return (
    <div className="mt-6 border rounded-lg p-6">
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-3">Image Metadata</h3>
          
          {metadata ? (
            <div className="bg-gray-50 rounded-lg p-4 max-h-80 overflow-y-auto">
              <table className="w-full">
                <tbody>
                  {Object.entries(metadata).map(([key, value]) => (
                    <tr key={key} className="border-b border-gray-200">
                      <td className="py-2 font-medium text-gray-700">{key}</td>
                      <td className="py-2 text-gray-900">
                        {value instanceof Date
                          ? value.toLocaleString()
                          : String(value)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-gray-500 italic">No metadata available</p>
          )}
        </div>
        
        <div className="flex flex-wrap gap-4">
          <Button
            onClick={handleRemoveMetadata}
            disabled={processing || files.length === 0 || processed}
            className="bg-brand-red hover:bg-red-700"
          >
            {processing ? (
              <>
                <Loader className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <Trash2 className="mr-2 h-4 w-4" />
                Remove Metadata
              </>
            )}
          </Button>
          
          <DownloadButton
            onDownload={handleDownload}
            disabled={!processed || files.length === 0}
            variant="outline"
          >
            Download Clean Image
          </DownloadButton>
        </div>
        
        {processed && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <p className="text-green-700">
              Metadata has been successfully removed from your image. You can now safely download it.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MetadataRemovalOptions;
