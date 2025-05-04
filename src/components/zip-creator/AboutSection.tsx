
import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section className="mt-12 bg-gray-50 p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-4">About Our ZIP Archive Tool</h2>
      <p className="text-gray-600 mb-4">
        Our ZIP archive tool allows you to compress multiple files into a single ZIP archive. This makes it easier to share, email, or store groups of files without having to handle them individually.
      </p>
      <p className="text-gray-600">
        ZIP archives can contain any type of file and maintain the original folder structure. The compression happens entirely in your browser, meaning your files are never uploaded to our servers, ensuring privacy and security.
      </p>
    </section>
  );
};

export default AboutSection;
