
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

export const useVideoCompression = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [qualityLevel, setQualityLevel] = useState<number[]>([70]);
  const [resolution, setResolution] = useState("original");
  const [processing, setProcessing] = useState(false);
  const [compressed, setCompressed] = useState(false);
  const [compressedSize, setCompressedSize] = useState(0);
  const [originalVideoUrl, setOriginalVideoUrl] = useState<string | null>(null);
  const [videoDuration, setVideoDuration] = useState(0);
  
  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
    setCompressed(false);
    
    // Preview the original video
    if (file && file.type.startsWith("video/")) {
      const videoURL = URL.createObjectURL(file);
      setOriginalVideoUrl(videoURL);
      
      // Get video metadata
      const video = document.createElement('video');
      video.onloadedmetadata = () => {
        setVideoDuration(video.duration);
      };
      video.src = videoURL;
    }
  };
  
  const getResolutionMultiplier = () => {
    switch(resolution) {
      case "360p": return 0.3;
      case "480p": return 0.5;
      case "720p": return 0.7;
      case "1080p": return 1;
      default: return 1;
    }
  };
  
  const handleCompression = () => {
    if (!selectedFile) {
      toast({
        title: "No video selected",
        description: "Please select a video file first.",
        variant: "destructive",
      });
      return;
    }
    
    setProcessing(true);
    
    // In a real implementation, we would use FFmpeg.wasm or other libraries
    // For this simulation, we're just creating a delayed effect and calculating a simulated size
    
    // Simulate compression process
    const originalSize = selectedFile.size;
    
    // Calculate compression factors
    const qualityFactor = qualityLevel[0] / 100;
    const resolutionFactor = getResolutionMultiplier();
    
    // Combined compression ratio (quality has more impact than resolution)
    const compressionRatio = qualityFactor * 0.7 + resolutionFactor * 0.3;
    
    // Calculate simulated compressed size
    const newSize = Math.floor(originalSize * compressionRatio);
    
    // Simulate processing delay - longer for videos
    setTimeout(() => {
      setProcessing(false);
      setCompressed(true);
      setCompressedSize(newSize);
      
      toast({
        title: "Video Compression Complete",
        description: `Reduced from ${(originalSize / (1024 * 1024)).toFixed(2)}MB to ${(newSize / (1024 * 1024)).toFixed(2)}MB (${Math.round((1 - compressionRatio) * 100)}% reduction)`,
      });
    }, 3000);
  };
  
  const handleDownload = () => {
    if (!selectedFile || !originalVideoUrl) return;
    
    // In a real implementation, we would download the actual compressed video
    // Here we're just downloading the original video as a simulation
    const a = document.createElement("a");
    a.href = originalVideoUrl;
    a.download = `compressed_${selectedFile.name}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(originalVideoUrl);
    
    toast({
      title: "Download Started",
      description: "Your compressed video is downloading.",
    });
  };
  
  // Format seconds to mm:ss
  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };
  
  return {
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
  };
};
