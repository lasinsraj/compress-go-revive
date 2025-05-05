
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-brand-lightblue/30 to-brand-blue/20 rounded-xl p-10 text-center mb-12">
      <h1 className="text-5xl font-bold mb-4 text-brand-dark">
        Free Online <span className="text-brand-red">File Compressor</span>
      </h1>
      <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
        Compress your files online without compromising quality. 
        Fast, secure, and completely free.
      </p>
      <div className="flex justify-center gap-4 flex-wrap">
        <Button size="lg" className="bg-brand-red hover:bg-brand-red/90">
          Start Compressing <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
        <Button variant="outline" size="lg">
          Learn More
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
