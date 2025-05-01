
import React from "react";

const InfoSection: React.FC = () => {
  return (
    <section className="mt-12 bg-gray-50 p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-4">About Our Video Compression Tool</h2>
      <p className="text-gray-600 mb-4">
        Our video compression tool uses advanced algorithms to reduce the file size of your videos while maintaining good visual quality.
        The compression happens entirely in your browser, meaning your videos are never uploaded to our servers.
      </p>
      <p className="text-gray-600">
        This tool supports various video formats including MP4, WebM, MOV, and more. You can compress videos up to 100MB in size.
        The compressed videos can be downloaded immediately after processing.
      </p>
    </section>
  );
};

export default InfoSection;
