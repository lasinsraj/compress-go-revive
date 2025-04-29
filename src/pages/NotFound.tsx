
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col items-center justify-center py-16">
      <h1 className="text-6xl font-bold text-brand-red mb-4">404</h1>
      <div className="mb-8">
        <p className="text-2xl font-medium text-gray-700 mb-2">Page Not Found</p>
        <p className="text-gray-500">
          The page you are looking for doesn't exist or has been moved.
        </p>
      </div>
      
      <div className="space-y-4 text-center">
        <p className="text-gray-600">You might want to try one of these instead:</p>
        <div className="flex flex-wrap justify-center gap-2">
          <a href="/">
            <Button variant="outline">Home</Button>
          </a>
          <a href="/compress-pdf">
            <Button variant="outline">Compress PDF</Button>
          </a>
          <a href="/compress-image">
            <Button variant="outline">Compress Image</Button>
          </a>
          <a href="/compress-video">
            <Button variant="outline">Compress Video</Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
