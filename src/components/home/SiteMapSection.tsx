
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SiteMapSection = () => {
  const services = [
    {
      title: "Document Tools",
      items: [
        { name: "Compress PDF", url: "/compress-pdf" }
      ]
    },
    {
      title: "Image Tools",
      items: [
        { name: "Compress Image", url: "/compress-image" },
        { name: "Compress PNG", url: "/compress-png" },
        { name: "Compress JPG", url: "/compress-jpg" },
        { name: "Remove Image Metadata", url: "/remove-image-metadata" }
      ]
    },
    {
      title: "Video Tools",
      items: [
        { name: "Compress Video", url: "/compress-video" }
      ]
    },
    {
      title: "Archive Tools",
      items: [
        { name: "Create ZIP Archive", url: "/create-zip" },
        { name: "Create ZIP File", url: "/create-zip-file" }
      ]
    },
    {
      title: "About CompressGo",
      items: [
        { name: "About Us", url: "/about" },
        { name: "Meet the Founder", url: "/founder" },
        { name: "Privacy Policy", url: "/privacy-policy" },
        { name: "Terms of Service", url: "/terms-of-service" }
      ]
    }
  ];

  return (
    <section className="py-8">
      <div className="container">
        <h2 className="text-2xl font-bold mb-6">All Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((category, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle>{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {category.items.map((item, idx) => (
                    <li key={idx}>
                      <Link to={item.url} className="text-brand-red hover:underline">
                        {item.name}
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
