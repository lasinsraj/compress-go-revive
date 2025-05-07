
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-brand-dark mb-4">CompressGo</h3>
            <p className="text-gray-600 mb-4">
              Free online file compression tools to help you reduce file sizes easily.
              No installation or registration required.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-brand-dark mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-brand-red">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-brand-red">About</Link>
              </li>
              <li>
                <Link to="/founder" className="text-gray-600 hover:text-brand-red">Founder</Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-600 hover:text-brand-red">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-gray-600 hover:text-brand-red">Terms of Service</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-brand-dark mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/compress-pdf" className="text-gray-600 hover:text-brand-red">Compress PDF</Link>
              </li>
              <li>
                <Link to="/compress-image" className="text-gray-600 hover:text-brand-red">Compress Image</Link>
              </li>
              <li>
                <Link to="/compress-video" className="text-gray-600 hover:text-brand-red">Compress Video</Link>
              </li>
              <li>
                <Link to="/create-zip" className="text-gray-600 hover:text-brand-red">Create ZIP Archive</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-6">
          <p className="text-gray-500 text-center">
            &copy; {new Date().getFullYear()} CompressGo. All rights reserved. Created by <a href="https://lasitharajapaksha.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline">Lasitha Rajapaksha</a>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
