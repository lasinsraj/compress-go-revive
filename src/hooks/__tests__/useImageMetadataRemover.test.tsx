
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react-hooks';
import { useImageMetadataRemover } from '../useImageMetadataRemover';

// Mock the sub-hooks
vi.mock('../useFileOperations', () => ({
  useFileOperations: vi.fn().mockReturnValue({
    files: [new File(['test'], 'test.jpg', { type: 'image/jpeg' })],
    metadata: { 'File Name': 'test.jpg' },
    handleFileChange: vi.fn(),
    handleDragOver: vi.fn(),
    handleDragLeave: vi.fn(),
    handleDrop: vi.fn(),
    removeFile: vi.fn(),
    setMetadata: vi.fn(),
  }),
}));

vi.mock('../useMetadataProcessor', () => ({
  useMetadataProcessor: vi.fn().mockReturnValue({
    processing: false,
    processed: true,
    handleRemoveMetadata: vi.fn(),
    handleDownload: vi.fn(),
    setProcessed: vi.fn(),
  }),
}));

vi.mock('@/utils/metadataUtils', () => ({
  formatFileSize: vi.fn().mockReturnValue('10.00 KB'),
}));

describe('useImageMetadataRemover', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should combine file operations and metadata processor hooks', () => {
    const { result } = renderHook(() => useImageMetadataRemover());
    
    // Check if the hook returns all the expected values
    expect(result.current.files).toBeDefined();
    expect(result.current.metadata).toBeDefined();
    expect(result.current.processing).toBeDefined();
    expect(result.current.processed).toBeDefined();
    expect(result.current.formattedTotalSize).toBe('10.00 KB');
    expect(typeof result.current.handleFileChange).toBe('function');
    expect(typeof result.current.handleDragOver).toBe('function');
    expect(typeof result.current.handleDragLeave).toBe('function');
    expect(typeof result.current.handleDrop).toBe('function');
    expect(typeof result.current.removeFile).toBe('function');
    expect(typeof result.current.handleRemoveMetadata).toBe('function');
    expect(typeof result.current.handleDownload).toBe('function');
  });
});
