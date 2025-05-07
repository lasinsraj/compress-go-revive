
import React from "react";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import AboutSection from "@/components/home/AboutSection";
import SiteMapSection from "@/components/home/SiteMapSection";

const Home = () => {
  return (
    <div className="space-y-8">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <SiteMapSection />
    </div>
  );
};

export default Home;
