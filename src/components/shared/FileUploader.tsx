
import React from "react";
import { Button } from "@/components/ui/button";
import { Upload, X, File } from "lucide-react";

interface FileUploaderProps {
  files: File[];
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragLeave: (e: React.DragEvent<HTMLDivElement>) => void;
  onDrop: (e: React.DragEvent<HTMLDivElement>) => void;
  onRemoveFile: (index: number) => void;
  formattedTotalSize: string;
  title?: string;
  description?: string;
}

const FileUploader: React.FC<FileUploaderProps> = ({
  files,
  onFileChange,
  onDragOver,
  onDragLeave,
  onDrop,
  onRemoveFile,
  formattedTotalSize,
  title = "Add Files to ZIP",
  description = "Drag and drop files here, or click to browse"
}) => {
  return (
    <>
      <div
        className="border-2 border-dashed rounded-lg p-8 text-center"
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        <Upload className="mx-auto h-12 w-12 text-gray-400" />
        <h3 className="mt-2 text-xl font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-gray-500">
          {description}
        </p>
        <div className="mt-4">
          <Button onClick={() => document.getElementById("file-upload")?.click()} className="bg-brand-red hover:bg-red-700">
            Browse Files
          </Button>
          <input
            id="file-upload"
            type="file"
            multiple
            onChange={onFileChange}
            className="hidden"
          />
        </div>
      </div>
      
      {/* Files List Section */}
      {files.length > 0 && (
        <div className="mt-6 border rounded-lg p-4">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-medium">Files to Compress</h3>
            <div className="text-sm text-gray-600">
              {files.length} files ({formattedTotalSize})
            </div>
          </div>
          
          <div className="max-h-60 overflow-y-auto">
            <ul className="space-y-2">
              {files.map((file, index) => (
                <li key={index} className="flex justify-between items-center p-2 hover:bg-gray-50 rounded">
                  <div className="flex items-center">
                    <File className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-sm truncate" style={{ maxWidth: "200px" }}>
                      {file.name}
                    </span>
                    <span className="text-xs text-gray-500 ml-2">
                      {file.size < 1024 * 1024
                        ? `${(file.size / 1024).toFixed(2)} KB`
                        : `${(file.size / (1024 * 1024)).toFixed(2)} MB`}
                    </span>
                  </div>
                  <button
                    onClick={() => onRemoveFile(index)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default FileUploader;
