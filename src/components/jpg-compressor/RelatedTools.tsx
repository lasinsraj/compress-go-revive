
import React from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { ImageIcon } from "lucide-react";

const RelatedTools: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Other Image Tools</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          <li>
            <a href="/compress-image" className="text-brand-red hover:underline flex items-center">
              <ImageIcon className="w-4 h-4 mr-2" />
              Compress Image (All Formats)
            </a>
          </li>
          <li>
            <a href="/compress-png" className="text-brand-red hover:underline flex items-center">
              <ImageIcon className="w-4 h-4 mr-2" />
              Compress PNG
            </a>
          </li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default RelatedTools;
