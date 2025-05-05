
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react-hooks';
import { useFileOperations } from '../useFileOperations';

// Mock the toast function
vi.mock('@/components/ui/use-toast', () => ({
  toast: vi.fn(),
}));

// Mock the extractMetadata function
vi.mock('@/utils/metadataUtils', () => ({
  extractMetadata: vi.fn().mockImplementation((file) => ({
    'File Name': file.name,
    'File Size': '1.00 KB',
    'File Type': file.type,
  })),
}));

describe('useFileOperations', () => {
  let mockFile: File;
  
  beforeEach(() => {
    // Reset mocks before each test
    vi.clearAllMocks();
    
    // Create a mock file
    mockFile = new File(['test content'], 'test-image.jpg', { type: 'image/jpeg' });
  });

  it('should initialize with empty files and null metadata', () => {
    const { result } = renderHook(() => useFileOperations());
    
    expect(result.current.files).toEqual([]);
    expect(result.current.metadata).toBeNull();
  });

  it('should add a file through handleFileChange', () => {
    const { result } = renderHook(() => useFileOperations());
    
    act(() => {
      // Create a mock event with files
      const mockEvent = {
        target: {
          files: [mockFile],
        },
      } as unknown as React.ChangeEvent<HTMLInputElement>;
      
      result.current.handleFileChange(mockEvent);
    });
    
    expect(result.current.files.length).toBe(1);
    expect(result.current.files[0].name).toBe('test-image.jpg');
    expect(result.current.metadata).toBeDefined();
  });

  it('should handle file drop correctly', () => {
    const { result } = renderHook(() => useFileOperations());
    
    act(() => {
      // Create a mock drop event
      const mockEvent = {
        preventDefault: vi.fn(),
        dataTransfer: {
          files: [mockFile],
        },
      } as unknown as React.DragEvent<HTMLDivElement>;
      
      result.current.handleDrop(mockEvent);
    });
    
    expect(result.current.files.length).toBe(1);
    expect(result.current.metadata).toBeDefined();
  });

  it('should remove a file correctly', () => {
    const { result } = renderHook(() => useFileOperations());
    
    // Add two files
    act(() => {
      const anotherMockFile = new File(['another content'], 'another-image.png', { type: 'image/png' });
      const files = [mockFile, anotherMockFile];
      result.current.setFiles(files);
    });
    
    // Remove the first file
    act(() => {
      result.current.removeFile(0);
    });
    
    expect(result.current.files.length).toBe(1);
    expect(result.current.files[0].name).toBe('another-image.png');
  });
});
