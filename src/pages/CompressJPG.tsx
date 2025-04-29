
import React from "react";
import FileUploader from "@/components/FileUploader";
import { useImageCompression } from "@/components/jpg-compressor/useImageCompression";
import CompressionOptions from "@/components/jpg-compressor/CompressionOptions";
import CompressionResult from "@/components/jpg-compressor/CompressionResult";
import TipsCard from "@/components/jpg-compressor/TipsCard";
import AdPlaceholder from "@/components/jpg-compressor/AdPlaceholder";
import RelatedTools from "@/components/jpg-compressor/RelatedTools";
import InfoSection from "@/components/jpg-compressor/InfoSection";

const CompressJPG = () => {
  const validateJpgFileType = (file: File) => {
    return file.type === "image/jpeg" || file.type === "image/jpg";
  };

  const {
    selectedFile,
    qualityLevel,
    processing,
    compressed,
    compressedSize,
    compressedImageUrl,
    setQualityLevel,
    handleFileSelect,
    handleCompression,
    handleDownload
  } = useImageCompression({ validateFileType: validateJpgFileType });
  
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Compress JPG</h1>
        <p className="text-gray-600">
          Reduce the file size of your JPG/JPEG images while maintaining good visual quality.
          Perfect for photos, web images, and email attachments.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <FileUploader
            allowedTypes={["image/jpeg", "image/jpg"]}
            maxSizeMB={10}
            title="Upload JPG File"
            description="Drag and drop your JPG image here, or click to browse"
            onFileSelect={handleFileSelect}
          />
          
          <CompressionOptions
            qualityLevel={qualityLevel}
            setQualityLevel={setQualityLevel}
            handleCompression={handleCompression}
            processing={processing}
            selectedFile={selectedFile}
          />
          
          {compressed && compressedImageUrl && selectedFile && (
            <CompressionResult
              selectedFile={selectedFile}
              compressedImageUrl={compressedImageUrl}
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
          
          <div className="mt-6">
            <RelatedTools />
          </div>
        </div>
      </div>
      
      <InfoSection />
    </div>
  );
};

export default CompressJPG;
