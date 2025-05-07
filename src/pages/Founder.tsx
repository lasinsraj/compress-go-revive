
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Founder = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">About the Founder</h1>
        <p className="text-gray-600">
          Learn more about the creator behind CompressGo.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Lasitha Rajapaksha</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="aspect-square bg-gray-100 rounded-md overflow-hidden">
                <img 
                  src="https://lasitharajapaksha.netlify.app/assets/img/profile-img.jpg" 
                  alt="Lasitha Rajapaksha" 
                  className="object-cover w-full h-full"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://placeholder.pics/svg/300/DEDEDE/555555/Profile%20Image";
                  }}
                />
              </div>
              <div className="flex justify-center mt-4">
                <Button variant="outline" className="flex items-center gap-2" onClick={() => window.open("https://lasitharajapaksha.netlify.app/", "_blank")}>
                  <ExternalLink size={16} />
                  <span>Visit Website</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="col-span-1 md:col-span-2">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Biography</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Lasitha Rajapaksha is a full-stack web developer and software engineer with expertise in building modern, efficient web applications. As the founder of CompressGo, he created this platform to provide free, accessible file compression tools for users worldwide.
              </p>
              
              <h3 className="font-bold text-lg mt-4">Skills</h3>
              <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
                <div className="bg-gray-100 p-2 rounded-md text-center">React.js</div>
                <div className="bg-gray-100 p-2 rounded-md text-center">TypeScript</div>
                <div className="bg-gray-100 p-2 rounded-md text-center">Node.js</div>
                <div className="bg-gray-100 p-2 rounded-md text-center">Tailwind CSS</div>
                <div className="bg-gray-100 p-2 rounded-md text-center">UI/UX Design</div>
                <div className="bg-gray-100 p-2 rounded-md text-center">Full Stack</div>
              </div>
              
              <h3 className="font-bold text-lg mt-4">Background</h3>
              <p className="text-gray-700">
                With a strong background in software development and web technologies, Lasitha has developed multiple projects focusing on user experience and performance optimization. CompressGo represents his commitment to creating practical tools that solve everyday problems for users.
              </p>
              
              <h3 className="font-bold text-lg mt-4">Mission</h3>
              <p className="text-gray-700">
                Lasitha believes in making technology accessible to everyone. His mission with CompressGo is to provide high-quality, free tools that help users optimize their digital content without requiring technical expertise or paid subscriptions.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Projects and Contributions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">
              Besides CompressGo, Lasitha has worked on several other web applications and tools:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <Card className="bg-gray-50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">CompressGo</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Free online file compression tools for various formats including PDF, images, and videos.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Portfolio Website</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Personal portfolio showcasing skills, experience, and projects.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Web Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Contributing to open source projects and building custom web applications.
                  </p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="bg-gradient-to-br from-brand-dark to-brand-blue text-white p-10 rounded-xl mt-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-100 mb-6">
            Have questions or want to collaborate? Connect with Lasitha.
          </p>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-brand-dark">
              <a href="https://lasitharajapaksha.netlify.app/#contact" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                Contact
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founder;
