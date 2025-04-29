
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Image, Video, Archive } from "lucide-react";

const Home = () => {
  return (
    <div className="space-y-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Free Online File Compressor</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Compress your files online. Please select one of the compression tools below:
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-brand-red mb-4">COMPRESS DOCUMENTS</h2>
          <Link to="/compress-pdf" className="block">
            <Card className="service-card">
              <CardHeader className="pb-2">
                <div className="flex items-center">
                  <FileText className="service-icon w-10 h-10 mr-3" />
                  <CardTitle>Compress PDF</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  A powerful PDF compressor that reduces the file size of your PDF file. Select the compression level you need for your PDF document compression.
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-brand-red mb-4">COMPRESS IMAGES</h2>
          <Link to="/compress-image" className="block mb-6">
            <Card className="service-card">
              <CardHeader className="pb-2">
                <div className="flex items-center">
                  <Image className="service-icon w-10 h-10 mr-3" />
                  <CardTitle>Compress image</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our powerful image compression tool that makes it easy to reduce the file size of different image files such as PNG, JPG, GIF, SVG and more.
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/compress-png" className="block mb-6">
            <Card className="service-card">
              <CardHeader className="pb-2">
                <div className="flex items-center">
                  <Image className="service-icon w-10 h-10 mr-3" />
                  <CardTitle>Compress PNG</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Reduce image file size by using this PNG compression tool. Make your image files smaller and convert them to the versatile format PNG.
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/compress-jpg" className="block">
            <Card className="service-card">
              <CardHeader className="pb-2">
                <div className="flex items-center">
                  <Image className="service-icon w-10 h-10 mr-3" />
                  <CardTitle>Compress JPG</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  This online JPG compression reduces the file size of several image files and creates a versatile and universally usable JPG image.
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div>
          <h2 className="text-2xl font-bold text-brand-red mb-4">COMPRESS VIDEOS</h2>
          <Link to="/compress-video" className="block">
            <Card className="service-card">
              <CardHeader className="pb-2">
                <div className="flex items-center">
                  <Video className="service-icon w-10 h-10 mr-3" />
                  <CardTitle>Compress video</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Compress a video file online with this free video compression suite. Make video files smaller.
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-brand-red mb-4">ZIP FILES</h2>
          <Link to="/create-zip" className="block mb-6">
            <Card className="service-card">
              <CardHeader className="pb-2">
                <div className="flex items-center">
                  <Archive className="service-icon w-10 h-10 mr-3" />
                  <CardTitle>Create archive files</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Compress your files in an archive. With this tool, you can create an archive that holds all kinds of files.
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/create-zip-file" className="block">
            <Card className="service-card">
              <CardHeader className="pb-2">
                <div className="flex items-center">
                  <Archive className="service-icon w-10 h-10 mr-3" />
                  <CardTitle>Create ZIP file</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  How to create a ZIP file? With this ZIP converter it's easy. Zip files and create compressed archives online.
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
      
      <section className="bg-gray-50 p-8 rounded-lg mt-12">
        <h2 className="text-2xl font-bold mb-4">About CompressGo</h2>
        <p className="text-gray-600 mb-4">
          CompressGo is a free online platform that offers various file compression tools to help you reduce file sizes without compromising quality. Our services include compressing PDFs, images, videos, and creating ZIP archives.
        </p>
        <p className="text-gray-600">
          All processing happens directly in your browser, so your files are never uploaded to our servers. This ensures the privacy and security of your data. Use our tools to optimize your files for web use, email attachments, or simply to save storage space.
        </p>
      </section>
    </div>
  );
};

export default Home;
