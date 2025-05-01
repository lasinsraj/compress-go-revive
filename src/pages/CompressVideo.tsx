
import React from "react";
import FileUploader from "@/components/FileUploader";
import { Video } from "lucide-react";
import { useVideoCompression } from "@/components/video-compressor/useVideoCompression";
import VideoPreview from "@/components/video-compressor/VideoPreview";
import CompressionOptions from "@/components/video-compressor/CompressionOptions";
import CompressionResult from "@/components/video-compressor/CompressionResult";
import TipsCard from "@/components/video-compressor/TipsCard";
import InfoSection from "@/components/video-compressor/InfoSection";

const CompressVideo = () => {
  const {
    selectedFile,
    qualityLevel,
    setQualityLevel,
    resolution,
    setResolution,
    processing,
    compressed,
    compressedSize,
    originalVideoUrl,
    videoDuration,
    handleFileSelect,
    handleCompression,
    handleDownload,
    formatDuration,
  } = useVideoCompression();
  
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Compress Video</h1>
        <p className="text-gray-600">
          Reduce the size of your video files while maintaining good quality.
          Supports MP4, WebM, MOV, and other popular video formats.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <FileUploader
            allowedTypes={["video/*"]}
            maxSizeMB={100}
            title="Upload Video"
            description="Drag and drop your video here, or click to browse"
            onFileSelect={handleFileSelect}
          />
          
          {originalVideoUrl && (
            <VideoPreview 
              videoUrl={originalVideoUrl} 
              duration={videoDuration} 
              formatDuration={formatDuration} 
            />
          )}
          
          <CompressionOptions
            qualityLevel={qualityLevel}
            setQualityLevel={setQualityLevel}
            resolution={resolution}
            setResolution={setResolution}
            handleCompression={handleCompression}
            processing={processing}
            selectedFile={selectedFile}
          />
          
          <CompressionResult
            compressed={compressed}
            originalVideoUrl={originalVideoUrl}
            selectedFile={selectedFile}
            compressedSize={compressedSize}
            resolution={resolution}
            qualityLevel={qualityLevel}
            handleDownload={handleDownload}
          />
        </div>
        
        <div>
          <TipsCard />
          
          <div className="mt-6">
            <div className="bg-gray-100 p-3 text-center text-sm text-gray-500">
              Advertisement
              <div className="h-60 bg-gray-200 flex items-center justify-center">
                Google AdSense (Add your AdSense code here)
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <InfoSection />
    </div>
  );
};

export default CompressVideo;
