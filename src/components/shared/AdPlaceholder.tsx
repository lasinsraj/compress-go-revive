
import React from "react";

export const AdPlaceholder: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-3 text-center text-sm text-gray-500 rounded-lg shadow-sm">
      Advertisement
      <div className="h-60 bg-gray-200 flex items-center justify-center rounded-md overflow-hidden hover:shadow-md transition-all duration-300">
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8390293036422522"
          crossOrigin="anonymous"
        ></script>
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-8390293036422522"
          data-ad-slot="1509681301"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
        <script
          dangerouslySetInnerHTML={{
            __html: `(adsbygoogle = window.adsbygoogle || []).push({});`,
          }}
        ></script>
      </div>
    </div>
  );
};

export const AdPlaceholderWide: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-3 text-center text-sm text-gray-500 rounded-lg shadow-sm">
      Advertisement
      <div className="bg-gray-200 flex items-center justify-center rounded-md overflow-hidden hover:shadow-md transition-all duration-300">
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8390293036422522"
          crossOrigin="anonymous"
        ></script>
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-8390293036422522"
          data-ad-slot="1509681301"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
        <script
          dangerouslySetInnerHTML={{
            __html: `(adsbygoogle = window.adsbygoogle || []).push({});`,
          }}
        ></script>
      </div>
    </div>
  );
};

export default AdPlaceholder;
