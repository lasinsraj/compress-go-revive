
import React from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

const TipsCard: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>JPG Compression Tips</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-medium">Finding the Sweet Spot</h4>
          <p className="text-sm text-gray-600">
            Quality settings between 70-80% usually offer the best balance between file size and visual quality.
          </p>
        </div>
        
        <div>
          <h4 className="font-medium">Web Optimization</h4>
          <p className="text-sm text-gray-600">
            For web images, 60-70% quality is often sufficient and loads faster.
          </p>
        </div>
        
        <div>
          <h4 className="font-medium">Print Quality</h4>
          <p className="text-sm text-gray-600">
            If you're planning to print the image, maintain higher quality (85%+).
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TipsCard;
