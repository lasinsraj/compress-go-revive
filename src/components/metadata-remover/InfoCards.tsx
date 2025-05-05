
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Image, UserX } from "lucide-react";

const InfoCards = () => {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Shield className="h-5 w-5 text-brand-red" />
            Privacy Protection
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Protect your privacy by removing location data, device info, and other sensitive metadata before sharing your images online.
          </CardDescription>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Image className="h-5 w-5 text-brand-red" />
            Image Quality
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Our tool removes only the metadata while preserving full image quality. Your images will look exactly the same.
          </CardDescription>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-lg">
            <UserX className="h-5 w-5 text-brand-red" />
            Identity Protection
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Many people don't realize their photos contain personal information. Protect yourself from identity theft and online tracking.
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
};

export default InfoCards;
