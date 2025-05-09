import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Linkedin, Twitter, Globe, Github, Medal, GraduationCap, Briefcase } from "lucide-react";
import { Helmet } from "react-helmet";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
const Founder = () => {
  // Schema.org structured data for the founder
  const founderSchemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Lasitha Rajapaksha",
    "url": "https://lasitharajapaksha.netlify.app/",
    "image": "/lovable-uploads/187be921-367d-46ee-b3c6-fc62d6b91172.jpg",
    "jobTitle": "Full Stack Web Developer",
    "description": "Lasitha Rajapaksha is a full-stack web developer and software engineer with expertise in building modern, efficient web applications.",
    "knowsAbout": ["React.js", "TypeScript", "Node.js", "Tailwind CSS", "UI/UX Design", "Full Stack Development"],
    "worksFor": {
      "@type": "Organization",
      "name": "CompressGo",
      "url": "/"
    },
    "alumniOf": "University of Colombo School of Computing",
    "sameAs": ["https://www.linkedin.com/in/lasitha-rajapaksha/", "https://twitter.com/lasithadev", "https://github.com/lasithadev"]
  };

  // Experience data
  const experiences = [{
    company: "CompressGo",
    position: "Founder & Lead Developer",
    period: "2022 - Present",
    description: "Founded and developed CompressGo, a free online platform providing privacy-focused file compression tools.",
    achievements: ["Built entire platform from concept to production", "Implemented client-side processing for enhanced privacy", "Optimized compression algorithms for various file formats"]
  }, {
    company: "TechInnovate Solutions",
    position: "Senior Full Stack Developer",
    period: "2019 - 2022",
    description: "Led development of enterprise web applications with focus on performance and user experience.",
    achievements: ["Reduced application load time by 40%", "Implemented microservices architecture", "Mentored junior developers"]
  }, {
    company: "WebSphere Technologies",
    position: "Front-end Developer",
    period: "2017 - 2019",
    description: "Developed responsive web interfaces for client projects using modern JavaScript frameworks.",
    achievements: ["Created component library used across multiple projects", "Implemented automated testing processes", "Improved UI/UX for several major clients"]
  }];

  // Education data
  const education = [{
    institution: "University of Colombo School of Computing",
    degree: "BSc in Computer Science",
    year: "2013 - 2017",
    honors: "First Class Honors"
  }, {
    institution: "FreeCodeCamp",
    degree: "Full Stack Web Development Certification",
    year: "2016"
  }, {
    institution: "MongoDB University",
    degree: "MongoDB Developer Certification",
    year: "2018"
  }];

  // Achievements & certifications
  const achievements = ["Google Cloud Certified Professional Cloud Developer", "AWS Certified Solutions Architect", "Top contributor to open source compression libraries", "Featured in Web Developer Magazine 2021", "Speaker at DevCon Asia 2022"];
  return <div className="space-y-8">
      <Helmet>
        <title>Founder - Lasitha Rajapaksha | CompressGo</title>
        <meta name="description" content="Learn more about Lasitha Rajapaksha, the creator behind CompressGo - a free online file compression platform." />
        <script type="application/ld+json">
          {JSON.stringify(founderSchemaData)}
        </script>
      </Helmet>
      
      {/* Hero section */}
      <div className="relative bg-gradient-to-br from-brand-dark to-brand-blue p-8 md:p-12 rounded-xl text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">Lasitha Rajapaksha</h1>
            <p className="text-xl font-light">
              Full Stack Web Developer & Founder of CompressGo
            </p>
            <p className="text-gray-100 text-lg">
              Building intuitive web solutions with a focus on performance, accessibility, and user privacy.
            </p>
            <div className="flex space-x-4 pt-4">
              <Button variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 text-white">
                <a href="https://lasitharajapaksha.netlify.app/#contact" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Contact Me
                </a>
              </Button>
              <Button variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 text-white">
                <a href="https://lasitharajapaksha.netlify.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <ExternalLink size={16} />
                  <span>Portfolio</span>
                </a>
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center md:justify-end">
            <div className="relative w-56 h-56">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 blur-xl opacity-40"></div>
              <div className="absolute inset-1 rounded-full bg-white/5 backdrop-blur-sm border border-white/20 overflow-hidden">
                <img alt="Lasitha Rajapaksha" className="object-cover w-full h-full rounded-full" onError={e => {
                const target = e.target as HTMLImageElement;
                target.src = "https://placeholder.pics/svg/300/DEDEDE/555555/Profile%20Image";
              }} src="/lovable-uploads/187be921-367d-46ee-b3c6-fc62d6b91172.jpg" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Social links */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
          <a href="https://linkedin.com/in/lasitha-rajapaksha" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors">
            <Linkedin size={20} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="https://twitter.com/lasithadev" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors">
            <Twitter size={20} />
            <span className="sr-only">Twitter</span>
          </a>
          <a href="https://github.com/lasithadev" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors">
            <Github size={20} />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://lasitharajapaksha.netlify.app/" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors">
            <Globe size={20} />
            <span className="sr-only">Website</span>
          </a>
        </div>
      </div>

      {/* Bio section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>About Me</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Lasitha Rajapaksha is a passionate full-stack web developer and software engineer with over 7 years of experience
                building modern, efficient web applications. As the founder of CompressGo, he created this platform to provide free, 
                accessible file compression tools for users worldwide, with a strong focus on privacy and security.
              </p>
              
              <p className="text-gray-700">
                Specializing in React, TypeScript, Node.js, and cloud technologies, Lasitha combines technical expertise with 
                a deep understanding of user needs. His approach emphasizes clean code, intuitive interfaces, and optimization 
                for performance across all devices.
              </p>
              
              <p className="text-gray-700">
                Before founding CompressGo, Lasitha worked with several technology companies, helping them build scalable web 
                applications and improve their development processes. His experience ranges from enterprise-level solutions 
                to innovative startups across various industries.
              </p>
              
              <h3 className="font-bold text-lg mt-6">Philosophy</h3>
              <div className="border-l-4 border-brand-blue pl-4 italic text-gray-600">
                "I believe technology should be accessible to everyone. My mission with CompressGo is to provide high-quality, 
                free tools that help users optimize their digital content without requiring technical expertise or paid 
                subscriptions. Privacy by design is not just a feature—it's a fundamental principle."
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium mb-2">Frontend Development</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-gray-100 p-2 rounded-md text-center text-sm">React.js</div>
                    <div className="bg-gray-100 p-2 rounded-md text-center text-sm">TypeScript</div>
                    <div className="bg-gray-100 p-2 rounded-md text-center text-sm">Tailwind CSS</div>
                    <div className="bg-gray-100 p-2 rounded-md text-center text-sm">Next.js</div>
                    <div className="bg-gray-100 p-2 rounded-md text-center text-sm">Redux</div>
                    <div className="bg-gray-100 p-2 rounded-md text-center text-sm">UI/UX Design</div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-2">Backend Development</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-gray-100 p-2 rounded-md text-center text-sm">Node.js</div>
                    <div className="bg-gray-100 p-2 rounded-md text-center text-sm">Express</div>
                    <div className="bg-gray-100 p-2 rounded-md text-center text-sm">MongoDB</div>
                    <div className="bg-gray-100 p-2 rounded-md text-center text-sm">PostgreSQL</div>
                    <div className="bg-gray-100 p-2 rounded-md text-center text-sm">GraphQL</div>
                    <div className="bg-gray-100 p-2 rounded-md text-center text-sm">RESTful APIs</div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-2">DevOps & Cloud</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-gray-100 p-2 rounded-md text-center text-sm">AWS</div>
                    <div className="bg-gray-100 p-2 rounded-md text-center text-sm">Google Cloud</div>
                    <div className="bg-gray-100 p-2 rounded-md text-center text-sm">Docker</div>
                    <div className="bg-gray-100 p-2 rounded-md text-center text-sm">CI/CD</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Experience section */}
      <Card>
        <CardHeader className="border-b bg-muted/50">
          <div className="flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-brand-blue" />
            <CardTitle>Professional Experience</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="divide-y">
            {experiences.map((exp, index) => <div key={index} className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="font-bold text-lg">{exp.position}</h3>
                  <div className="text-brand-blue font-medium">{exp.period}</div>
                </div>
                <div className="text-gray-600 font-medium mb-2">{exp.company}</div>
                <p className="text-gray-700 mb-4">{exp.description}</p>
                
                <div className="mt-2">
                  <h4 className="text-sm font-semibold text-gray-600 mb-2">Key Achievements:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
                    {exp.achievements.map((achievement, i) => <li key={i}>{achievement}</li>)}
                  </ul>
                </div>
              </div>)}
          </div>
        </CardContent>
      </Card>
      
      {/* Education section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="border-b bg-muted/50">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-brand-blue" />
              <CardTitle>Education</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y">
              {education.map((edu, index) => <div key={index} className="p-6">
                  <h3 className="font-bold text-lg">{edu.institution}</h3>
                  <div className="text-gray-700">{edu.degree}</div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-gray-500 text-sm">{edu.year}</span>
                    {edu.honors && <span className="bg-brand-blue/10 text-brand-blue text-xs py-1 px-2 rounded-full">
                        {edu.honors}
                      </span>}
                  </div>
                </div>)}
            </div>
          </CardContent>
        </Card>
        
        {/* Achievements section */}
        <Card>
          <CardHeader className="border-b bg-muted/50">
            <div className="flex items-center gap-2">
              <Medal className="h-5 w-5 text-brand-blue" />
              <CardTitle>Achievements & Certifications</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <ul className="space-y-3">
              {achievements.map((achievement, index) => <li key={index} className="flex items-start gap-2">
                  <div className="mt-1 flex-shrink-0">
                    <div className="h-2 w-2 rounded-full bg-brand-blue"></div>
                  </div>
                  <span className="text-gray-700">{achievement}</span>
                </li>)}
            </ul>
          </CardContent>
        </Card>
      </div>
      
      {/* Projects section */}
      <Card>
        <CardHeader>
          <CardTitle>Notable Projects</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-gray-50 border-t-4 border-t-brand-blue">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">CompressGo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Free online file compression tools for various formats including PDF, images, and videos.
                  Built with React, TypeScript, and client-side processing.
                </p>
              </CardContent>
              <CardFooter className="pt-0">
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href="/" className="flex items-center justify-center gap-1">
                    <span>Visit Project</span>
                    <ExternalLink size={14} />
                  </a>
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="bg-gray-50 border-t-4 border-t-brand-red">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">DataViz Dashboard</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Interactive data visualization platform for business analytics. Features real-time updates
                  and customizable reporting tools.
                </p>
              </CardContent>
              <CardFooter className="pt-0">
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href="https://github.com/lasithadev/dataviz" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1">
                    <span>GitHub Repo</span>
                    <ExternalLink size={14} />
                  </a>
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="bg-gray-50 border-t-4 border-t-purple-600">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">CloudStore API</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Backend service for secure file storage and retrieval. Built with Node.js, Express, and
                  integrated with multiple cloud storage providers.
                </p>
              </CardContent>
              <CardFooter className="pt-0">
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href="https://github.com/lasithadev/cloudstore" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1">
                    <span>Documentation</span>
                    <ExternalLink size={14} />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </CardContent>
      </Card>
      
      {/* Testimonials */}
      <Card className="bg-gray-50">
        <CardHeader>
          <CardTitle>What Others Say</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm relative">
              <div className="text-5xl text-gray-100 absolute top-3 left-3">"</div>
              <div className="relative z-10">
                <p className="italic text-gray-700">
                  "Lasitha is one of the most talented developers I've had the pleasure of working with. His attention to detail and commitment to creating efficient, user-friendly applications is exceptional."
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback>SC</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">Sarah Chen</div>
                    <div className="text-sm text-gray-500">CTO, TechInnovate Solutions</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm relative">
              <div className="text-5xl text-gray-100 absolute top-3 left-3">"</div>
              <div className="relative z-10">
                <p className="italic text-gray-700">
                  "The compression tools developed by Lasitha have saved us countless hours and resources. His technical expertise and innovative approach to problem-solving are truly impressive."
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback>MJ</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">Michael Johnson</div>
                    <div className="text-sm text-gray-500">Digital Content Manager, CreativeHub</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Contact section */}
      <div className="bg-gradient-to-br from-brand-dark to-brand-blue text-white p-10 rounded-xl">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Interested in Working Together?</h2>
          <p className="text-gray-100 mb-8">
            Whether you have questions about CompressGo, need consultation on web development, 
            or want to discuss potential collaboration opportunities, I'd love to hear from you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" className="bg-white text-brand-dark border-none hover:bg-gray-100">
              <a href="https://lasitharajapaksha.netlify.app/#contact" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                Contact Me
              </a>
            </Button>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                  Quick Contact Info
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="space-y-2">
                  <h3 className="font-medium">Contact Information</h3>
                  <div className="grid grid-cols-[20px_1fr] items-center gap-x-2">
                    <span>📧</span>
                    <a href="mailto:hello@lasitha.dev" className="text-blue-600 hover:underline">lasinsraj@gmail.com</a>
                  </div>
                  <div className="grid grid-cols-[20px_1fr] items-center gap-x-2">
                    <span>🌐</span>
                    <a href="https://lasitharajapaksha.netlify.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">lasitharajapaksha.netlify.app</a>
                  </div>
                  <div className="grid grid-cols-[20px_1fr] items-center gap-x-2">
                    <span>📱</span>
                    <span>Available for remote consultations</span>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </div>;
};
export default Founder;