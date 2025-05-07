
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react-hooks';
import { useMetadataProcessor } from '../useMetadataProcessor';

// Mock the toast function
vi.mock('@/components/ui/use-toast', () => ({
  toast: vi.fn(),
}));

// Mock URL.createObjectURL
global.URL.createObjectURL = vi.fn(() => 'mock-url');

describe('useMetadataProcessor', () => {
  const mockSetMetadata = vi.fn();
  let mockFile: File;
  let mockMetadata: any;
  
  beforeEach(() => {
    // Reset mocks before each test
    vi.clearAllMocks();
    
    // Mock the timer
    vi.useFakeTimers();
    
    // Create a mock file and metadata
    mockFile = new File(['test content'], 'test-image.jpg', { type: 'image/jpeg' });
    mockMetadata = {
      "File Name": 'test-image.jpg',
      "File Size": "1.00 KB",
      "File Type": "image/jpeg",
      "GPS Latitude": "40.7128° N",
      "GPS Longitude": "74.0060° W",
    };
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should initialize with default states', () => {
    const { result } = renderHook(() => useMetadataProcessor({
      files: [],
      metadata: null,
      setMetadata: mockSetMetadata,
    }));
    
    expect(result.current.processing).toBe(false);
    expect(result.current.processed).toBe(false);
  });

  it('should process metadata removal correctly', () => {
    const { result } = renderHook(() => useMetadataProcessor({
      files: [mockFile],
      metadata: mockMetadata,
      setMetadata: mockSetMetadata,
    }));
    
    act(() => {
      result.current.handleRemoveMetadata();
    });
    
    // Should be processing
    expect(result.current.processing).toBe(true);
    
    // Fast-forward timer
    act(() => {
      vi.advanceTimersByTime(1500);
    });
    
    // Should be done processing
    expect(result.current.processing).toBe(false);
    expect(result.current.processed).toBe(true);
    
    // Should have called setMetadata with sanitized metadata
    expect(mockSetMetadata).toHaveBeenCalled();
  });

  it('should handle download correctly when processed', () => {
    // Mock document methods
    document.createElement = vi.fn().mockImplementation((tag) => {
      if (tag === 'a') {
        return {
          href: '',
          download: '',
          click: vi.fn(),
        };
      }
      return {};
    });
    document.body.appendChild = vi.fn();
    document.body.removeChild = vi.fn();
    
    const { result } = renderHook(() => useMetadataProcessor({
      files: [mockFile],
      metadata: mockMetadata,
      setMetadata: mockSetMetadata,
    }));
    
    // Set processed to true
    act(() => {
      result.current.setProcessed(true);
    });
    
    // Call download
    act(() => {
      result.current.handleDownload();
    });
    
    // Check if URL.createObjectURL was called with the file
    expect(global.URL.createObjectURL).toHaveBeenCalledWith(mockFile);
  });

  it('should not download when not processed', () => {
    const { result } = renderHook(() => useMetadataProcessor({
      files: [mockFile],
      metadata: mockMetadata,
      setMetadata: mockSetMetadata,
    }));
    
    // Call download without processing
    act(() => {
      result.current.handleDownload();
    });
    
    // URL.createObjectURL should not have been called
    expect(global.URL.createObjectURL).not.toHaveBeenCalled();
  });
});
