
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Image, Video, Archive, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="space-y-8">
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-brand-red flex items-center gap-2 mb-4">
            <FileText className="h-6 w-6" />
            COMPRESS DOCUMENTS
          </h2>
          <Link to="/compress-pdf" className="block transform transition-transform hover:translate-y-[-5px]">
            <Card className="service-card hover:shadow-xl bg-gradient-to-br from-white to-brand-light/50">
              <CardHeader className="pb-2">
                <div className="flex items-center">
                  <div className="rounded-full bg-brand-red/10 p-3 mr-3">
                    <FileText className="service-icon w-10 h-10" />
                  </div>
                  <CardTitle>Compress PDF</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  A powerful PDF compressor that reduces the file size of your PDF file. Select the compression level you need for your PDF document compression.
                </p>
                <div className="mt-4 flex justify-end">
                  <Button variant="ghost" className="text-brand-red">
                    Compress Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-brand-red flex items-center gap-2 mb-4">
            <Image className="h-6 w-6" />
            COMPRESS IMAGES
          </h2>
          <Link to="/compress-image" className="block mb-6 transform transition-transform hover:translate-y-[-5px]">
            <Card className="service-card hover:shadow-xl bg-gradient-to-br from-white to-brand-light/50">
              <CardHeader className="pb-2">
                <div className="flex items-center">
                  <div className="rounded-full bg-brand-red/10 p-3 mr-3">
                    <Image className="service-icon w-10 h-10" />
                  </div>
                  <CardTitle>Compress image</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our powerful image compression tool that makes it easy to reduce the file size of different image files such as PNG, JPG, GIF, SVG and more.
                </p>
                <div className="mt-4 flex justify-end">
                  <Button variant="ghost" className="text-brand-red">
                    Compress Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link to="/compress-png" className="block mb-6 transform transition-transform hover:translate-y-[-5px]">
            <Card className="service-card hover:shadow-xl bg-gradient-to-br from-white to-brand-light/50">
              <CardHeader className="pb-2">
                <div className="flex items-center">
                  <div className="rounded-full bg-brand-red/10 p-3 mr-3">
                    <Image className="service-icon w-10 h-10" />
                  </div>
                  <CardTitle>Compress PNG</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Reduce image file size by using this PNG compression tool. Make your image files smaller and convert them to the versatile format PNG.
                </p>
                <div className="mt-4 flex justify-end">
                  <Button variant="ghost" className="text-brand-red">
                    Compress Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link to="/compress-jpg" className="block transform transition-transform hover:translate-y-[-5px]">
            <Card className="service-card hover:shadow-xl bg-gradient-to-br from-white to-brand-light/50">
              <CardHeader className="pb-2">
                <div className="flex items-center">
                  <div className="rounded-full bg-brand-red/10 p-3 mr-3">
                    <Image className="service-icon w-10 h-10" />
                  </div>
                  <CardTitle>Compress JPG</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  This online JPG compression reduces the file size of several image files and creates a versatile and universally usable JPG image.
                </p>
                <div className="mt-4 flex justify-end">
                  <Button variant="ghost" className="text-brand-red">
                    Compress Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-brand-red flex items-center gap-2 mb-4">
            <Video className="h-6 w-6" />
            COMPRESS VIDEOS
          </h2>
          <Link to="/compress-video" className="block transform transition-transform hover:translate-y-[-5px]">
            <Card className="service-card hover:shadow-xl bg-gradient-to-br from-white to-brand-light/50">
              <CardHeader className="pb-2">
                <div className="flex items-center">
                  <div className="rounded-full bg-brand-red/10 p-3 mr-3">
                    <Video className="service-icon w-10 h-10" />
                  </div>
                  <CardTitle>Compress video</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Compress a video file online with this free video compression suite. Make video files smaller.
                </p>
                <div className="mt-4 flex justify-end">
                  <Button variant="ghost" className="text-brand-red">
                    Compress Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-brand-red flex items-center gap-2 mb-4">
            <Archive className="h-6 w-6" />
            ZIP FILES
          </h2>
          <Link to="/create-zip" className="block mb-6 transform transition-transform hover:translate-y-[-5px]">
            <Card className="service-card hover:shadow-xl bg-gradient-to-br from-white to-brand-light/50">
              <CardHeader className="pb-2">
                <div className="flex items-center">
                  <div className="rounded-full bg-brand-red/10 p-3 mr-3">
                    <Archive className="service-icon w-10 h-10" />
                  </div>
                  <CardTitle>Create archive files</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Compress your files in an archive. With this tool, you can create an archive that holds all kinds of files.
                </p>
                <div className="mt-4 flex justify-end">
                  <Button variant="ghost" className="text-brand-red">
                    Compress Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link to="/create-zip-file" className="block transform transition-transform hover:translate-y-[-5px]">
            <Card className="service-card hover:shadow-xl bg-gradient-to-br from-white to-brand-light/50">
              <CardHeader className="pb-2">
                <div className="flex items-center">
                  <div className="rounded-full bg-brand-red/10 p-3 mr-3">
                    <Archive className="service-icon w-10 h-10" />
                  </div>
                  <CardTitle>Create ZIP file</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  How to create a ZIP file? With this ZIP converter it's easy. Zip files and create compressed archives online.
                </p>
                <div className="mt-4 flex justify-end">
                  <Button variant="ghost" className="text-brand-red">
                    Compress Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
      
      <section className="bg-gradient-to-br from-brand-dark to-brand-blue text-white p-10 rounded-xl mt-12">
        <h2 className="text-2xl font-bold mb-4">About CompressGo</h2>
        <p className="text-gray-100 mb-4">
          CompressGo is a free online platform that offers various file compression tools to help you reduce file sizes without compromising quality. Our services include compressing PDFs, images, videos, and creating ZIP archives.
        </p>
        <p className="text-gray-100">
          All processing happens directly in your browser, so your files are never uploaded to our servers. This ensures the privacy and security of your data. Use our tools to optimize your files for web use, email attachments, or simply to save storage space.
        </p>
        <div className="mt-6 flex justify-center">
          <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-brand-dark">
            Learn More About Us
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
