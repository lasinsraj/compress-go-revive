
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TipsCard: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Video Compression Tips</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-medium">Balance Quality and Size</h4>
          <p className="text-sm text-gray-600">
            Higher compression rates result in smaller files but may reduce video quality. Choose based on your needs.
          </p>
        </div>
        
        <div>
          <h4 className="font-medium">Choose the Right Resolution</h4>
          <p className="text-sm text-gray-600">
            Reducing resolution significantly decreases file size. Consider where the video will be played.
          </p>
        </div>
        
        <div>
          <h4 className="font-medium">Processing Time</h4>
          <p className="text-sm text-gray-600">
            Larger videos take longer to compress. Be patient with files over 50MB.
          </p>
        </div>
        
        <div>
          <h4 className="font-medium">Benefits</h4>
          <ul className="list-disc pl-5 text-sm text-gray-600">
            <li>Easier sharing via messaging apps</li>
            <li>Faster uploads to social media</li>
            <li>Reduced storage space</li>
            <li>Better streaming quality</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default TipsCard;
