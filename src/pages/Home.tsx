
import React from "react";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import AboutSection from "@/components/home/AboutSection";

const Home = () => {
  return (
    <div className="space-y-8">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
    </div>
  );
};

export default Home;
