
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Archive } from "lucide-react";

const InfoCards: React.FC = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>ZIP Archive Tips</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-medium">File Selection</h4>
            <p className="text-sm text-gray-600">
              Add files of any type to your ZIP archive. You can mix documents, images, videos, and more.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium">Compression Levels</h4>
            <p className="text-sm text-gray-600">
              Level 5 offers a good balance of speed and compression. Use higher levels for better compression, lower for faster processing.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium">Benefits</h4>
            <ul className="list-disc pl-5 text-sm text-gray-600">
              <li>Send multiple files as a single attachment</li>
              <li>Reduce total file size</li>
              <li>Organize related files together</li>
              <li>Improve upload and download speeds</li>
            </ul>
          </div>
        </CardContent>
      </Card>
      
      <div className="mt-6">
        <div className="bg-gray-100 p-3 text-center text-sm text-gray-500">
          Advertisement
          <div className="h-60 bg-gray-200 flex items-center justify-center">
            Google AdSense (Add your AdSense code here)
          </div>
        </div>
      </div>
      
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Related Tools</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li>
              <a href="/create-zip-file" className="text-brand-red hover:underline flex items-center">
                <Archive className="w-4 h-4 mr-2" />
                Create ZIP File
              </a>
            </li>
          </ul>
        </CardContent>
      </Card>
    </>
  );
};

export default InfoCards;
