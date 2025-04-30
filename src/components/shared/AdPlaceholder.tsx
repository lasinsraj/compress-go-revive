
import React from "react";

export const AdPlaceholder: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-3 text-center text-sm text-gray-500 rounded-lg shadow-sm">
      Advertisement
      <div className="h-60 bg-gray-200 flex items-center justify-center rounded-md overflow-hidden hover:shadow-md transition-all duration-300">
        <p className="text-gray-400">Google AdSense (Add your AdSense code here)</p>
      </div>
    </div>
  );
};

export default AdPlaceholder;
