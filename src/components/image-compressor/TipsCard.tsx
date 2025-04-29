
import React from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

const TipsCard: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Image Compression Tips</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-medium">Choose the Right Format</h4>
          <p className="text-sm text-gray-600">
            JPG is best for photos. PNG is best for images with transparency or text. WebP offers good compression for both.
          </p>
        </div>
        
        <div>
          <h4 className="font-medium">Quality vs. Size</h4>
          <p className="text-sm text-gray-600">
            Lower quality settings yield smaller files but may introduce artifacts. Find the sweet spot for your needs.
          </p>
        </div>
        
        <div>
          <h4 className="font-medium">Benefits</h4>
          <ul className="list-disc pl-5 text-sm text-gray-600">
            <li>Faster website loading</li>
            <li>Lower bandwidth usage</li>
            <li>Reduced storage requirements</li>
            <li>Improved user experience</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default TipsCard;
