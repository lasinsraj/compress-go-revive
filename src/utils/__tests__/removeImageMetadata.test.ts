
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { removeImageMetadata } from '../metadataUtils';

// Mock canvas and context
const mockCtx = {
  drawImage: vi.fn(),
  clearRect: vi.fn()
};

const mockCanvas = {
  getContext: vi.fn().mockReturnValue(mockCtx),
  width: 0,
  height: 0,
  toBlob: vi.fn().mockImplementation((callback, type, quality) => {
    // Verify that we're using maximum quality to preserve image content
    expect(quality).toBe(1.0);
    callback(new Blob(['test']));
  })
};

// Mock document methods
document.createElement = vi.fn().mockImplementation((tagName) => {
  if (tagName === 'canvas') return mockCanvas;
  return {};
});

// Mock URL methods
global.URL.createObjectURL = vi.fn().mockReturnValue('blob-url');
global.URL.revokeObjectURL = vi.fn();

describe('removeImageMetadata', () => {
  let mockFile: File;
  let mockImage: any;
  
  beforeEach(() => {
    vi.clearAllMocks();
    
    // Create a mock file
    mockFile = new File(['test'], 'test.jpg', { type: 'image/jpeg' });
    
    // Mock Image constructor
    mockImage = {
      onload: null,
      onerror: null,
      width: 100,
      height: 100,
      src: ''
    };
    
    // @ts-ignore - Mock the Image constructor
    global.Image = vi.fn().mockImplementation(() => mockImage);
  });
  
  it('should process an image file and return a blob with no metadata', async () => {
    const processPromise = removeImageMetadata(mockFile);
    
    // Simulate the image load event
    mockImage.onload();
    
    const result = await processPromise;
    
    // Verify the image was processed correctly
    expect(URL.createObjectURL).toHaveBeenCalledWith(mockFile);
    expect(mockCtx.clearRect).toHaveBeenCalled(); // Verify canvas was cleared
    expect(mockCtx.drawImage).toHaveBeenCalledWith(mockImage, 0, 0, 100, 100);
    expect(mockCanvas.toBlob).toHaveBeenCalled();
    expect(URL.revokeObjectURL).toHaveBeenCalledWith('blob-url');
    expect(result).toBeInstanceOf(Blob);
  });
  
  it('should reject if there is an error loading the image', async () => {
    const processPromise = removeImageMetadata(mockFile);
    
    // Simulate an error
    mockImage.onerror();
    
    await expect(processPromise).rejects.toThrow('Failed to load image');
    expect(URL.createObjectURL).toHaveBeenCalledWith(mockFile);
    expect(URL.revokeObjectURL).toHaveBeenCalledWith('blob-url');
  });
});
