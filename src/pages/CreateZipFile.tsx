
import React from "react";
import FileUploader from "@/components/shared/FileUploader";
import ZipOptions from "@/components/zip-file/ZipOptions";
import InfoCards from "@/components/zip-file/InfoCards";
import HowToSection from "@/components/zip-file/HowToSection";
import { useZipFile } from "@/hooks/useZipFile";

const CreateZipFile = () => {
  const {
    files,
    zipName,
    compressing,
    compressed,
    formattedTotalSize,
    setZipName,
    handleFileChange,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    removeFile,
    handleCreateZip,
    handleDownload
  } = useZipFile();
  
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Create ZIP File</h1>
        <p className="text-gray-600">
          Easily create a ZIP file from multiple files. Perfect for sharing, organizing, or backing up your files.
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
            title="Add Files to ZIP"
            description="Drag and drop files here, or click to browse"
          />
          
          <ZipOptions 
            files={files}
            zipName={zipName}
            setZipName={setZipName}
            compressed={compressed}
            compressing={compressing}
            handleCreateZip={handleCreateZip}
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

export default CreateZipFile;
