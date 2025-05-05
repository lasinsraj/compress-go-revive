
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const HowToSection = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">How to Remove Image Metadata</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center mb-4">
              <div className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <span className="text-xl font-bold text-gray-700">1</span>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-center mb-2">Upload Image</h3>
            <p className="text-gray-600 text-center">
              Upload your image by dragging and dropping it onto the upload area or clicking the browse button.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="text-center mb-4">
              <div className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <span className="text-xl font-bold text-gray-700">2</span>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-center mb-2">Remove Metadata</h3>
            <p className="text-gray-600 text-center">
              Click the "Remove Metadata" button to strip all EXIF data and other sensitive information from your image.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="text-center mb-4">
              <div className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <span className="text-xl font-bold text-gray-700">3</span>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-center mb-2">Download Clean Image</h3>
            <p className="text-gray-600 text-center">
              Download your clean image that has all personal data and metadata removed but maintains the same quality.
            </p>
          </CardContent>
        </Card>
      </div>
      
      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold mb-2">What is Metadata?</h3>
        <p className="text-gray-700">
          Metadata in images (often called EXIF data) includes information such as the location where the photo was taken, 
          camera model, date and time, camera settings, and sometimes even the name of the device owner. 
          This data is embedded in most digital photos and can pose privacy risks when sharing images online.
        </p>
      </div>
    </div>
  );
};

export default HowToSection;
