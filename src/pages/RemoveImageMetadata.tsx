
import React from "react";
import FileUploader from "@/components/shared/FileUploader";
import MetadataRemovalOptions from "@/components/metadata-remover/MetadataRemovalOptions";
import InfoCards from "@/components/metadata-remover/InfoCards";
import HowToSection from "@/components/metadata-remover/HowToSection";
import { useImageMetadataRemover } from "@/hooks/useImageMetadataRemover";

const RemoveImageMetadata = () => {
  const {
    files,
    processed,
    processing,
    formattedTotalSize,
    metadata,
    handleFileChange,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    removeFile,
    handleRemoveMetadata,
    handleDownload
  } = useImageMetadataRemover();
  
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Remove Image Metadata</h1>
        <p className="text-gray-600">
          Remove sensitive EXIF data from your images before sharing them online. Protect your privacy by stripping location, camera information, and other metadata.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <FileUploader 
            files={files}
            onFileChange={handleFileChange}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onRemoveFile={removeFile}
            formattedTotalSize={formattedTotalSize}
            title="Upload Images"
            description="Drag and drop image files here, or click to browse"
          />
          
          <MetadataRemovalOptions
            files={files}
            processed={processed}
            processing={processing}
            metadata={metadata}
            handleRemoveMetadata={handleRemoveMetadata}
            handleDownload={handleDownload}
          />
        </div>
        
        {/* Info Cards Section */}
        <div>
          <InfoCards />
        </div>
      </div>
      
      {/* How-To Section */}
      <HowToSection />
    </div>
  );
};

export default RemoveImageMetadata;
