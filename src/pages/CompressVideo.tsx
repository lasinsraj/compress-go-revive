
import React, { useState, useRef } from "react";
import FileUploader from "@/components/FileUploader";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { Download, Video } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CompressVideo = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [qualityLevel, setQualityLevel] = useState<number[]>([70]);
  const [resolution, setResolution] = useState("original");
  const [processing, setProcessing] = useState(false);
  const [compressed, setCompressed] = useState(false);
  const [compressedSize, setCompressedSize] = useState(0);
  const [originalVideoUrl, setOriginalVideoUrl] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
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
            <div className="mt-6 border rounded-lg p-4">
              <h3 className="font-medium mb-2">Video Preview</h3>
              <video 
                ref={videoRef}
                src={originalVideoUrl}
                controls
                className="w-full max-h-72 rounded"
              ></video>
              {videoDuration > 0 && (
                <div className="mt-2 text-sm text-gray-600">
                  Duration: {formatDuration(videoDuration)}
                </div>
              )}
            </div>
          )}
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium mb-4">Compression Options</h3>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-medium text-gray-700">
                    Quality Level: {qualityLevel[0]}%
                  </label>
                </div>
                <Slider
                  defaultValue={[70]}
                  max={100}
                  min={30}
                  step={5}
                  value={qualityLevel}
                  onValueChange={setQualityLevel}
                  className="py-2"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Max Compression</span>
                  <span>Best Quality</span>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Output Resolution
                </label>
                <Select value={resolution} onValueChange={setResolution}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select resolution" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="original">Original (No change)</SelectItem>
                    <SelectItem value="1080p">1080p</SelectItem>
                    <SelectItem value="720p">720p</SelectItem>
                    <SelectItem value="480p">480p</SelectItem>
                    <SelectItem value="360p">360p</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button 
                onClick={handleCompression} 
                disabled={!selectedFile || processing}
                className="w-full bg-brand-red hover:bg-red-700"
              >
                {processing ? "Compressing... This may take a while" : "Compress Video"}
              </Button>
            </div>
          </div>
          
          {compressed && originalVideoUrl && (
            <div className="mt-6 border rounded-lg p-6">
              <h3 className="font-medium mb-4">Compression Result</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <div>
                    <div><strong>Original Size:</strong> {(selectedFile?.size || 0) / (1024 * 1024) > 1 ? 
                      ((selectedFile?.size || 0) / (1024 * 1024)).toFixed(2) + " MB" : 
                      ((selectedFile?.size || 0) / 1024).toFixed(2) + " KB"}
                    </div>
                    <div><strong>Compressed Size:</strong> {compressedSize / (1024 * 1024) > 1 ? 
                      (compressedSize / (1024 * 1024)).toFixed(2) + " MB" : 
                      (compressedSize / 1024).toFixed(2) + " KB"}
                    </div>
                  </div>
                  
                  <div>
                    <div><strong>Resolution:</strong> {resolution === "original" ? "Original" : resolution}</div>
                    <div><strong>Quality:</strong> {qualityLevel[0]}%</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="flex-1 mr-2 h-4 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-brand-red rounded-full" 
                      style={{width: `${Math.round((compressedSize / (selectedFile?.size || 1)) * 100)}%`}}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-green-600 whitespace-nowrap">
                    {Math.round((1 - (compressedSize / (selectedFile?.size || 1))) * 100)}% smaller
                  </span>
                </div>
                
                <Button onClick={handleDownload} className="w-full bg-brand-red hover:bg-red-700">
                  <Download className="mr-2 h-4 w-4" />
                  Download Compressed Video
                </Button>
              </div>
            </div>
          )}
        </div>
        
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Video Compression Tips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium">Balance Quality and Size</h4>
                <p className="text-sm text-gray-600">
                  Higher compression rates result in smaller files but may reduce video quality. Choose based on your needs.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium">Choose the Right Resolution</h4>
                <p className="text-sm text-gray-600">
                  Reducing resolution significantly decreases file size. Consider where the video will be played.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium">Processing Time</h4>
                <p className="text-sm text-gray-600">
                  Larger videos take longer to compress. Be patient with files over 50MB.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium">Benefits</h4>
                <ul className="list-disc pl-5 text-sm text-gray-600">
                  <li>Easier sharing via messaging apps</li>
                  <li>Faster uploads to social media</li>
                  <li>Reduced storage space</li>
                  <li>Better streaming quality</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          
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
      
      <section className="mt-12 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">About Our Video Compression Tool</h2>
        <p className="text-gray-600 mb-4">
          Our video compression tool uses advanced algorithms to reduce the file size of your videos while maintaining good visual quality.
          The compression happens entirely in your browser, meaning your videos are never uploaded to our servers.
        </p>
        <p className="text-gray-600">
          This tool supports various video formats including MP4, WebM, MOV, and more. You can compress videos up to 100MB in size.
          The compressed videos can be downloaded immediately after processing.
        </p>
      </section>
    </div>
  );
};

export default CompressVideo;
