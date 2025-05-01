
import React from "react";

const InfoSection: React.FC = () => {
  return (
    <section className="mt-12 bg-gray-50 p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-4">How to Compress a PDF File</h2>
      <ol className="list-decimal pl-5 space-y-2">
        <li>Upload your PDF file using the uploader above.</li>
        <li>Select your desired compression level.</li>
        <li>Click the "Compress PDF" button.</li>
        <li>Wait for the compression process to complete.</li>
        <li>Download your compressed PDF file.</li>
      </ol>
      <p className="mt-4 text-gray-600">
        Our PDF compressor reduces the size of your PDF files while maintaining reasonable quality. This makes your files easier to share, upload, and store.
        All processing happens directly in your browser - your files are never uploaded to our servers.
      </p>
    </section>
  );
};

export default InfoSection;
