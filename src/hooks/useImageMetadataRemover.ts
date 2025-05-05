
import { useEffect } from "react";
import { useFileOperations } from "./useFileOperations";
import { useMetadataProcessor } from "./useMetadataProcessor";
import { formatFileSize } from "@/utils/metadataUtils";
import { ImageMetadataRemoverResult } from "@/types/metadata";

export const useImageMetadataRemover = (): ImageMetadataRemoverResult => {
  const {
    files,
    metadata,
    handleFileChange,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    removeFile,
    setMetadata
  } = useFileOperations();
  
  const {
    processing,
    processed,
    handleRemoveMetadata,
    handleDownload,
    setProcessed
  } = useMetadataProcessor({
    files,
    metadata,
    setMetadata
  });
  
  useEffect(() => {
    // Reset processed state when files change
    setProcessed(false);
  }, [files, setProcessed]);
  
  // Calculate the total size of all files
  const totalSize = files.reduce((acc, file) => acc + file.size, 0);
  
  // Format the total size
  const formattedTotalSize = formatFileSize(totalSize);
  
  return {
    files,
    metadata,
    processing,
    processed,
    formattedTotalSize,
    handleFileChange,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    removeFile,
    handleRemoveMetadata,
    handleDownload
  };
};
