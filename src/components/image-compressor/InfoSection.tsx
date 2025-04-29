
import React from "react";

const InfoSection: React.FC = () => {
  return (
    <section className="mt-12 bg-gray-50 p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-4">About Our Image Compression Tool</h2>
      <p className="text-gray-600 mb-4">
        Our image compression tool uses advanced algorithms to reduce the file size of your images while maintaining visual quality.
        The compression happens entirely in your browser, meaning your images are never uploaded to our servers.
      </p>
      <p className="text-gray-600">
        This tool supports various image formats including JPEG, PNG, GIF, BMP, and WebP. You can compress individual images up to 20MB in size.
        The compressed images can be downloaded immediately after processing.
      </p>
    </section>
  );
};

export default InfoSection;
