
import React from "react";
import { FileText, Image, Video, Archive, Shield } from "lucide-react";
import ServiceCard from "./ServiceCard";

interface ServiceSectionProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const ServiceSection = ({ title, icon, children }: ServiceSectionProps) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-brand-red flex items-center gap-2 mb-4">
        {icon}
        {title}
      </h2>
      {children}
    </div>
  );
};

const ServicesSection = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ServiceSection title="COMPRESS DOCUMENTS" icon={<FileText className="h-6 w-6" />}>
          <ServiceCard 
            title="Compress PDF" 
            description="A powerful PDF compressor that reduces the file size of your PDF file. Select the compression level you need for your PDF document compression."
            icon={FileText}
            link="/compress-pdf"
          />
        </ServiceSection>

        <ServiceSection title="COMPRESS IMAGES" icon={<Image className="h-6 w-6" />}>
          <ServiceCard 
            title="Compress image" 
            description="Our powerful image compression tool that makes it easy to reduce the file size of different image files such as PNG, JPG, GIF, SVG and more."
            icon={Image}
            link="/compress-image"
          />
          
          <div className="mt-6">
            <ServiceCard 
              title="Compress PNG" 
              description="Reduce image file size by using this PNG compression tool. Make your image files smaller and convert them to the versatile format PNG."
              icon={Image}
              link="/compress-png"
            />
          </div>
          
          <div className="mt-6">
            <ServiceCard 
              title="Compress JPG" 
              description="This online JPG compression reduces the file size of several image files and creates a versatile and universally usable JPG image."
              icon={Image}
              link="/compress-jpg"
            />
          </div>
        </ServiceSection>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <ServiceSection title="COMPRESS VIDEOS" icon={<Video className="h-6 w-6" />}>
          <ServiceCard 
            title="Compress video" 
            description="Compress a video file online with this free video compression suite. Make video files smaller."
            icon={Video}
            link="/compress-video"
          />
        </ServiceSection>

        <ServiceSection title="ZIP FILES" icon={<Archive className="h-6 w-6" />}>
          <ServiceCard 
            title="Create archive files" 
            description="Compress your files in an archive. With this tool, you can create an archive that holds all kinds of files."
            icon={Archive}
            link="/create-zip"
          />
          
          <div className="mt-6">
            <ServiceCard 
              title="Create ZIP file" 
              description="How to create a ZIP file? With this ZIP converter it's easy. Zip files and create compressed archives online."
              icon={Archive}
              link="/create-zip-file"
            />
          </div>
        </ServiceSection>
      </div>
      
      <div className="mt-8">
        <ServiceSection title="PRIVACY TOOLS" icon={<Shield className="h-6 w-6" />}>
          <ServiceCard 
            title="Remove Image Metadata" 
            description="Protect your privacy by removing EXIF data from images. Eliminate location data, camera information, and other sensitive metadata before sharing photos."
            icon={Shield}
            link="/remove-image-metadata"
            buttonText="Remove Metadata"
          />
        </ServiceSection>
      </div>
    </>
  );
};

export default ServicesSection;
