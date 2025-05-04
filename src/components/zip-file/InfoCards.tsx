
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Archive } from "lucide-react";

const InfoCards: React.FC = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>ZIP File Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-medium">What is a ZIP file?</h4>
            <p className="text-sm text-gray-600">
              A ZIP file is a compressed archive that contains one or more files bundled together. It takes up less space and is easier to share than sending individual files.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium">Compatibility</h4>
            <p className="text-sm text-gray-600">
              ZIP files can be opened on Windows, Mac, Linux, and mobile devices without additional software in most cases.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium">Uses for ZIP Files</h4>
            <ul className="list-disc pl-5 text-sm text-gray-600">
              <li>Email multiple documents as a single attachment</li>
              <li>Archive old projects</li>
              <li>Share collections of photos</li>
              <li>Reduce storage space requirements</li>
              <li>Create backups of important files</li>
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
              <a href="/create-zip" className="text-brand-red hover:underline flex items-center">
                <Archive className="w-4 h-4 mr-2" />
                Create ZIP Archive
              </a>
            </li>
          </ul>
        </CardContent>
      </Card>
    </>
  );
};

export default InfoCards;
