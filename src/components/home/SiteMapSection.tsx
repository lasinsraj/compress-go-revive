
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Image, Video, Archive, Shield, Info, FileKey, Lock } from "lucide-react";

const SiteMapSection = () => {
  const services = [
    {
      title: "Document Tools",
      icon: <FileText className="h-5 w-5" />,
      items: [
        { name: "Compress PDF", description: "Reduce PDF file size while maintaining quality", url: "/compress-pdf" }
      ]
    },
    {
      title: "Image Tools",
      icon: <Image className="h-5 w-5" />,
      items: [
        { name: "Compress Image", description: "Reduce size of various image formats", url: "/compress-image" },
        { name: "Compress PNG", description: "Optimize PNG files for web and storage", url: "/compress-png" },
        { name: "Compress JPG", description: "Make JPEG images smaller with minimal quality loss", url: "/compress-jpg" },
        { name: "Remove Image Metadata", description: "Strip EXIF data for privacy protection", url: "/remove-image-metadata" }
      ]
    },
    {
      title: "Video Tools",
      icon: <Video className="h-5 w-5" />,
      items: [
        { name: "Compress Video", description: "Reduce video file size for easier sharing", url: "/compress-video" }
      ]
    },
    {
      title: "Archive Tools",
      icon: <Archive className="h-5 w-5" />,
      items: [
        { name: "Create ZIP Archive", description: "Compress multiple files into one archive", url: "/create-zip" },
        { name: "Create ZIP File", description: "Package files together for easy sharing", url: "/create-zip-file" }
      ]
    },
    {
      title: "About CompressGo",
      icon: <Info className="h-5 w-5" />,
      items: [
        { name: "About Us", description: "Learn about our mission and services", url: "/about" },
        { name: "Meet the Founder", description: "The story behind CompressGo", url: "/founder" },
        { name: "Privacy Policy", description: "How we protect your data and privacy", url: "/privacy-policy" },
        { name: "Terms of Service", description: "Rules and guidelines for using our services", url: "/terms-of-service" }
      ]
    }
  ];

  return (
    <section className="py-8" id="services-directory">
      <div className="container">
        <h2 className="text-2xl font-bold mb-6">Complete Services Directory</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((category, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {category.icon}
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {category.items.map((item, idx) => (
                    <li key={idx}>
                      <Link 
                        to={item.url} 
                        className="text-brand-red hover:underline block"
                        aria-label={`${item.name} - ${item.description}`}
                      >
                        {item.name}
                        <p className="text-xs text-gray-600 mt-1">{item.description}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SiteMapSection;
