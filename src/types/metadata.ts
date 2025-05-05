
export interface MetadataType {
  [key: string]: string | number | Date;
}

export interface ImageMetadataRemoverState {
  files: File[];
  metadata: MetadataType | null;
  processing: boolean;
  processed: boolean;
}

export interface ImageMetadataRemoverActions {
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  handleDragLeave: (e: React.DragEvent<HTMLDivElement>) => void;
  handleDrop: (e: React.DragEvent<HTMLDivElement>) => void;
  removeFile: (index: number) => void;
  handleRemoveMetadata: () => void;
  handleDownload: () => void;
}

export interface ImageMetadataRemoverResult extends ImageMetadataRemoverState, ImageMetadataRemoverActions {
  formattedTotalSize: string;
}
