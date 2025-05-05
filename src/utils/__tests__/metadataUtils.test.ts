
import { describe, it, expect } from 'vitest';
import { extractMetadata, formatFileSize } from '../metadataUtils';

describe('metadataUtils', () => {
  describe('formatFileSize', () => {
    it('should format size in KB correctly', () => {
      const size = 1536; // 1.5 KB
      const formatted = formatFileSize(size);
      expect(formatted).toBe('1.50 KB');
    });

    it('should format size in MB correctly', () => {
      const size = 1536 * 1024; // 1.5 MB
      const formatted = formatFileSize(size);
      expect(formatted).toBe('1.50 MB');
    });

    it('should handle zero bytes', () => {
      const size = 0;
      const formatted = formatFileSize(size);
      expect(formatted).toBe('0.00 KB');
    });
  });

  describe('extractMetadata', () => {
    it('should extract metadata from a file object', () => {
      // Create a mock file
      const mockFile = new File([''], 'test-image.jpg', { type: 'image/jpeg' });
      
      // Get the metadata
      const metadata = extractMetadata(mockFile);
      
      // Check that the metadata contains the expected keys
      expect(metadata).toHaveProperty('File Name', 'test-image.jpg');
      expect(metadata).toHaveProperty('File Type', 'image/jpeg');
      expect(metadata).toHaveProperty('File Size');
      expect(metadata).toHaveProperty('Date Created');
      expect(metadata).toHaveProperty('Last Modified');
      expect(metadata).toHaveProperty('Camera Make');
    });
  });
});
