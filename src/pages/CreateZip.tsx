
import React from "react";
import FileUploader from "@/components/zip-creator/FileUploader";
import ZipOptions from "@/components/zip-creator/ZipOptions";
import InfoCards from "@/components/zip-creator/InfoCards";
import AboutSection from "@/components/zip-creator/AboutSection";
import { useZipCreator } from "@/components/zip-creator/useZipCreator";

const CreateZip = () => {
  const {
    files,
    compressing,
    compressed,
    compressionLevel,
    formattedTotalSize,
    setCompressionLevel,
    handleFileChange,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    removeFile,
    handleCreateZip,
    handleDownload
  } = useZipCreator();
  
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Create ZIP Archive</h1>
        <p className="text-gray-600">
          Compress multiple files into a single ZIP archive. Add files by dragging and dropping or browsing your device.
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
          />
          
          <ZipOptions 
            files={files}
            compressionLevel={compressionLevel}
            setCompressionLevel={setCompressionLevel}
            compressed={compressed}
            compressing={compressing}
            handleCreateZip={handleCreateZip}
            handleDownload={handleDownload}
          />
        </div>
        
        {/* Tips and Info Section */}
        <div>
          <InfoCards />
        </div>
      </div>
      
      {/* About Section */}
      <AboutSection />
    </div>
  );
};

export default CreateZip;
