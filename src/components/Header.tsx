
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-brand-red font-bold text-xl mr-1">Compress</span>
              <span className="text-brand-dark font-bold text-xl">Go</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-gray-700 hover:text-brand-red px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            
            {/* Replace the Services dropdown with DropdownMenu from shadcn/ui */}
            <DropdownMenu>
              <DropdownMenuTrigger className="text-gray-700 hover:text-brand-red px-3 py-2 rounded-md text-sm font-medium flex items-center">
                Services
                <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white p-2 rounded-md shadow-lg w-48 z-50">
                <DropdownMenuItem asChild>
                  <Link to="/compress-pdf" className="w-full">Compress PDF</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/compress-image" className="w-full">Compress Image</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/compress-video" className="w-full">Compress Video</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/compress-png" className="w-full">Compress PNG</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/compress-jpg" className="w-full">Compress JPG</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/create-zip" className="w-full">Create ZIP Archive</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/create-zip-file" className="w-full">Create ZIP File</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/remove-image-metadata" className="w-full">Remove Image Metadata</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link to="/about" className="text-gray-700 hover:text-brand-red px-3 py-2 rounded-md text-sm font-medium">
              About
            </Link>
            <Link to="/founder" className="text-gray-700 hover:text-brand-red px-3 py-2 rounded-md text-sm font-medium">
              Founder
            </Link>
          </nav>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <div>
              <div className="px-3 py-2 font-medium text-gray-700">Services</div>
              <div className="ml-4 space-y-1">
                <Link
                  to="/compress-pdf"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Compress PDF
                </Link>
                <Link
                  to="/compress-image"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Compress Image
                </Link>
                <Link
                  to="/compress-video"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Compress Video
                </Link>
                <Link
                  to="/compress-png"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Compress PNG
                </Link>
                <Link
                  to="/compress-jpg"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Compress JPG
                </Link>
                <Link
                  to="/create-zip"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Create ZIP Archive
                </Link>
                <Link
                  to="/create-zip-file"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Create ZIP File
                </Link>
                <Link
                  to="/remove-image-metadata"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Remove Image Metadata
                </Link>
              </div>
            </div>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/founder"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Founder
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
