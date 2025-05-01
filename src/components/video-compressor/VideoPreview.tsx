
import React, { useRef } from "react";

interface VideoPreviewProps {
  videoUrl: string;
  duration: number;
  formatDuration: (seconds: number) => string;
}

const VideoPreview: React.FC<VideoPreviewProps> = ({ 
  videoUrl, 
  duration, 
  formatDuration 
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  return (
    <div className="mt-6 border rounded-lg p-4">
      <h3 className="font-medium mb-2">Video Preview</h3>
      <video 
        ref={videoRef}
        src={videoUrl}
        controls
        className="w-full max-h-72 rounded"
      ></video>
      {duration > 0 && (
        <div className="mt-2 text-sm text-gray-600">
          Duration: {formatDuration(duration)}
        </div>
      )}
    </div>
  );
};

export default VideoPreview;
