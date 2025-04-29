
import React from "react";

const InfoSection: React.FC = () => {
  return (
    <section className="mt-12 bg-gray-50 p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Why Compress JPG Files?</h2>
      <p className="text-gray-600 mb-4">
        JPG/JPEG is the most common format for photos and web images, but they can sometimes be larger than necessary. Our JPG compression tool uses optimized algorithms to reduce the file size while maintaining good visual quality.
      </p>
      <p className="text-gray-600">
        This tool uses lossy compression, which means it slightly reduces image quality to achieve smaller file sizes. By adjusting the quality slider, you can find the perfect balance between file size and image quality for your needs.
      </p>
    </section>
  );
};

export default InfoSection;
