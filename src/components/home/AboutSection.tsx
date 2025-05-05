
import React from "react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section className="bg-gradient-to-br from-brand-dark to-brand-blue text-white p-10 rounded-xl mt-12">
      <h2 className="text-2xl font-bold mb-4">About CompressGo</h2>
      <p className="text-gray-100 mb-4">
        CompressGo is a free online platform that offers various file compression tools to help you reduce file sizes without compromising quality. Our services include compressing PDFs, images, videos, and creating ZIP archives.
      </p>
      <p className="text-gray-100">
        All processing happens directly in your browser, so your files are never uploaded to our servers. This ensures the privacy and security of your data. Use our tools to optimize your files for web use, email attachments, or simply to save storage space.
      </p>
      <div className="mt-6 flex justify-center">
        <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-brand-dark">
          Learn More About Us
        </Button>
      </div>
    </section>
  );
};

export default AboutSection;
