
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, Loader } from "lucide-react";

interface DownloadButtonProps {
  onDownload: () => void;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({
  onDownload,
  disabled = false,
  className = "",
  children = "Download"
}) => {
  const [countdown, setCountdown] = useState<number | null>(null);
  
  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (countdown !== null && countdown > 0) {
      timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
    } else if (countdown === 0) {
      // Countdown finished, ready to download
    }
    
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [countdown]);
  
  const handleClick = () => {
    if (countdown === null && !disabled) {
      setCountdown(5);
      
      // Start the download after 5 seconds
      setTimeout(() => {
        onDownload();
        setCountdown(null);
      }, 5000);
    }
  };
  
  return (
    <Button 
      onClick={handleClick} 
      disabled={disabled || countdown !== null}
      className={`${className} relative`}
    >
      {countdown !== null ? (
        <>
          <Loader className="mr-2 h-4 w-4 animate-spin" />
          <span>Wait {countdown}s...</span>
        </>
      ) : (
        <>
          <Download className="mr-2 h-4 w-4" />
          {children}
        </>
      )}
    </Button>
  );
};

export default DownloadButton;
