
import React from "react";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import AboutSection from "@/components/home/AboutSection";
import SiteMapSection from "@/components/home/SiteMapSection";
import SEOHead from "@/components/shared/SEOHead";

const Home = () => {
  return (
    <div className="space-y-8">
      <SEOHead
        title="CompressGo - Free Online File Compressor | Compress PDF, Images & Videos"
        description="Compress documents, images, videos and create ZIP files online for free. No registration required, easy to use compression tools."
        keywords="compress pdf, compress image, compress video, compress jpg, compress png, create zip, online compression, file compressor"
        canonicalUrl="https://compress-go.netlify.app/"
      />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <SiteMapSection />
    </div>
  );
};

export default Home;
