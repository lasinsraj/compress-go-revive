
import React from "react";
import FileUploader from "@/components/FileUploader";
import { useImageCompression } from "@/components/image-compressor/useImageCompression";
import CompressionOptions from "@/components/image-compressor/CompressionOptions";
import CompressionResult from "@/components/image-compressor/CompressionResult";
import TipsCard from "@/components/image-compressor/TipsCard";
import RelatedTools from "@/components/image-compressor/RelatedTools";
import InfoSection from "@/components/image-compressor/InfoSection";
import AdPlaceholder from "@/components/shared/AdPlaceholder";

const CompressImage = () => {
  const {
    selectedFile,
    qualityLevel,
    processing,
    compressed,
    compressedSize,
    compressedImageUrl,
    outputFormat,
    setQualityLevel,
    setOutputFormat,
    handleFileSelect,
    handleCompression,
    handleDownload,
    handleOriginalDownload
  } = useImageCompression();
  
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Compress Image</h1>
        <p className="text-gray-600">
          Reduce the size of your image files while maintaining good quality.
          Supports JPEG, PNG, GIF, WebP and other popular image formats.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <FileUploader
            allowedTypes={["image/*"]}
            maxSizeMB={100}
            title="Upload Image"
            description="Drag and drop your image here, or click to browse"
            onFileSelect={handleFileSelect}
          />
          
          <CompressionOptions
            qualityLevel={qualityLevel}
            setQualityLevel={setQualityLevel}
            outputFormat={outputFormat}
            setOutputFormat={setOutputFormat}
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
              handleOriginalDownload={handleOriginalDownload}
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

export default CompressImage;
