
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">About CompressGo</h1>
        <p className="text-gray-600">
          Learn more about our online file compression service and how it works.
        </p>
      </div>
      
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Our Mission</h2>
        <p className="text-gray-700">
          CompressGo was created with a simple mission: to provide free, easy-to-use, and privacy-focused file compression tools for everyone. We believe that reducing file sizes should be straightforward and accessible without requiring technical knowledge or software installation.
        </p>
        <p className="text-gray-700">
          Our goal is to help users optimize their files for web use, email sharing, storage efficiency, and faster transfers - all while maintaining the highest levels of privacy and security.
        </p>
      </section>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>How It Works</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">
              CompressGo uses client-side processing to compress your files directly in your web browser. This means your files are never uploaded to our servers, ensuring complete privacy and security.
            </p>
            <p className="text-gray-700">
              We use advanced compression algorithms optimized for different file types:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>For PDF files: We optimize text, images, and metadata.</li>
              <li>For images: We use quality reduction and dimension optimization techniques.</li>
              <li>For video files: We employ efficient codecs and resolution adjustments.</li>
              <li>For ZIP archives: We bundle files together with standard ZIP compression.</li>
              <li>For privacy: We strip metadata from images to protect your personal information.</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Privacy & Security</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">
              At CompressGo, we take your privacy seriously. Here's how we protect your data:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>
                <strong>Client-side processing:</strong> All compression happens in your browser. Your files never leave your device.
              </li>
              <li>
                <strong>No file storage:</strong> We don't store any of your files or compressed results on our servers.
              </li>
              <li>
                <strong>No registration required:</strong> Use our services without creating an account or providing personal information.
              </li>
              <li>
                <strong>Transparent operation:</strong> Our tools are open about what they do and how they work.
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
      
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Our Services</h2>
        <p className="text-gray-700">
          CompressGo offers a variety of file compression tools to meet different needs:
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="p-4 border rounded-lg">
            <h3 className="font-bold mb-2 text-brand-red">PDF Compression</h3>
            <p className="text-sm text-gray-600">
              Reduce PDF file sizes while maintaining document quality and compatibility.
            </p>
          </div>
          
          <div className="p-4 border rounded-lg">
            <h3 className="font-bold mb-2 text-brand-red">Image Compression</h3>
            <p className="text-sm text-gray-600">
              Compress JPEG, PNG, and other image formats with adjustable quality settings.
            </p>
          </div>
          
          <div className="p-4 border rounded-lg">
            <h3 className="font-bold mb-2 text-brand-red">Video Compression</h3>
            <p className="text-sm text-gray-600">
              Reduce video file sizes for easier sharing, streaming, and storage.
            </p>
          </div>
          
          <div className="p-4 border rounded-lg">
            <h3 className="font-bold mb-2 text-brand-red">ZIP Creation</h3>
            <p className="text-sm text-gray-600">
              Bundle multiple files into compressed ZIP archives for convenient sharing.
            </p>
          </div>

          <div className="p-4 border rounded-lg">
            <h3 className="font-bold mb-2 text-brand-red">Metadata Removal</h3>
            <p className="text-sm text-gray-600">
              Strip EXIF data from images to protect your privacy before sharing online.
            </p>
          </div>
        </div>
      </section>
      
      <section className="bg-gray-50 p-6 rounded-lg space-y-4">
        <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-lg">Is CompressGo completely free?</h3>
            <p className="text-gray-700">
              Yes, all our compression tools are free to use without any hidden costs. We support our service through non-intrusive advertisements.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg">Are there file size limits?</h3>
            <p className="text-gray-700">
              Yes, there are some reasonable limits based on browser capabilities. PDF and image compression typically works with files up to 50MB, while video compression supports files up to 100MB.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg">Do you keep copies of my files?</h3>
            <p className="text-gray-700">
              No, we never store your files. All processing happens directly in your browser, and your files never leave your device.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg">What file formats are supported?</h3>
            <p className="text-gray-700">
              We support most common file formats including PDF, JPEG, PNG, GIF, WebP, MP4, MOV, and many others. The specific formats vary by tool.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg">Why is browser-based compression important?</h3>
            <p className="text-gray-700">
              Browser-based compression offers several advantages: no software installation required, works on any device with a modern browser, ensures privacy since files aren't uploaded, and provides immediate results.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg">What is metadata and why should I remove it?</h3>
            <p className="text-gray-700">
              Metadata in images contains information like location coordinates, camera details, and sometimes even personal identifiers. Removing it helps protect your privacy when sharing images online.
            </p>
          </div>
        </div>
      </section>
      
      <section className="text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to compress your files?</h2>
        <p className="text-gray-700 mb-6">
          Try our free compression tools now - no registration required!
        </p>
        <div className="flex justify-center space-x-4 flex-wrap">
          <a href="/compress-pdf" className="bg-brand-red text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors">
            Compress PDF
          </a>
          <a href="/compress-image" className="bg-brand-dark text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
            Compress Images
          </a>
          <a href="/remove-image-metadata" className="bg-brand-blue text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Remove Metadata
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
