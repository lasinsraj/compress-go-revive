
import React from "react";
import FileUploader from "@/components/FileUploader";
import AdPlaceholder from "@/components/shared/AdPlaceholder";
import { usePDFCompression } from "@/components/pdf-compressor/usePDFCompression";
import CompressionOptions from "@/components/pdf-compressor/CompressionOptions";
import CompressionResult from "@/components/pdf-compressor/CompressionResult";
import TipsCard from "@/components/pdf-compressor/TipsCard";
import InfoSection from "@/components/pdf-compressor/InfoSection";

const CompressPDF = () => {
  const {
    selectedFile,
    compressionLevel,
    processing,
    compressed,
    compressedSize,
    setCompressionLevel,
    handleFileSelect,
    handleCompression,
    handleDownload
  } = usePDFCompression();
  
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Compress PDF</h1>
        <p className="text-gray-600">
          Reduce the size of your PDF files with our powerful compression tool. 
          Choose different compression levels to balance between file size and quality.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <FileUploader
            allowedTypes={["application/pdf"]}
            maxSizeMB={150}
            title="Upload PDF File"
            description="Drag and drop your PDF here, or click to browse"
            onFileSelect={handleFileSelect}
          />
          
          <CompressionOptions
            compressionLevel={compressionLevel}
            setCompressionLevel={setCompressionLevel}
            handleCompression={handleCompression}
            processing={processing}
            selectedFile={selectedFile}
          />
          
          {compressed && (
            <CompressionResult
              selectedFile={selectedFile}
              compressedSize={compressedSize}
              handleDownload={handleDownload}
            />
          )}
        </div>
        
        <div>
          <TipsCard />
          
          <div className="mt-6">
            <AdPlaceholder />
          </div>
        </div>
      </div>
      
      <InfoSection />
    </div>
  );
};

export default CompressPDF;
