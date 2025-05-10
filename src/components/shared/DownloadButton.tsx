
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, Loader, Timer } from "lucide-react";

interface DownloadButtonProps {
  onDownload: () => void;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

const DownloadButton: React.FC<DownloadButtonProps> = ({
  onDownload,
  disabled = false,
  className = "",
  children = "Download",
  variant = "default",
  size = "default"
}) => {
  const [countdown, setCountdown] = useState<number | null>(null);
  
  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (countdown !== null && countdown > 0) {
      timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
    } else if (countdown === 0) {
      // Countdown finished, start download immediately
      onDownload();
      setCountdown(null);
    }
    
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [countdown, onDownload]);
  
  const handleClick = () => {
    if (countdown === null && !disabled) {
      // Start the countdown when button is clicked
      setCountdown(5);
    }
  };
  
  return (
    <Button 
      onClick={handleClick} 
      disabled={disabled || countdown !== null}
      className={`${className} relative`}
      variant={variant}
      size={size}
    >
      {countdown !== null ? (
        <>
          <Timer className="mr-2 h-4 w-4 animate-pulse" />
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
