
import React from "react";

const HowToSection: React.FC = () => {
  return (
    <section className="mt-12 bg-gray-50 p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-4">How to Create a ZIP File</h2>
      <ol className="list-decimal pl-5 space-y-2">
        <li>Upload your files using the uploader above.</li>
        <li>Enter a name for your ZIP file.</li>
        <li>Click the "Create ZIP File" button.</li>
        <li>Wait for the compression process to complete.</li>
        <li>Download your ZIP file.</li>
      </ol>
      <p className="mt-4 text-gray-600">
        Our ZIP file creator processes your files directly in your browser, meaning they are never uploaded to our servers. This ensures your data remains private and secure.
      </p>
    </section>
  );
};

export default HowToSection;
