
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TipsCard: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>PDF Compression Tips</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-medium">Choose the Right Level</h4>
          <p className="text-sm text-gray-600">
            Select the compression level based on your needs. Higher compression means smaller size but may reduce quality.
          </p>
        </div>
        
        <div>
          <h4 className="font-medium">Best Practices</h4>
          <ul className="list-disc pl-5 text-sm text-gray-600">
            <li>Use Medium for general purpose documents</li>
            <li>Use Low when preserving image quality is important</li>
            <li>Use Maximum for the smallest possible file size</li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-medium">Benefits</h4>
          <ul className="list-disc pl-5 text-sm text-gray-600">
            <li>Easier to share via email</li>
            <li>Faster uploads and downloads</li>
            <li>Saves storage space</li>
            <li>Better for web publishing</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default TipsCard;
