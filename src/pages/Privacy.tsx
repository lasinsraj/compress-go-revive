
import React from "react";

const Privacy = () => {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Privacy Policy</h1>
        <p className="text-gray-600">
          Last updated: April 29, 2023
        </p>
      </div>
      
      <section className="prose prose-slate max-w-none">
        <p>
          Welcome to CompressGo's Privacy Policy. This document explains how we collect, use, and protect your information when you use our website and services.
        </p>
        
        <h2>Summary</h2>
        <p>
          <strong>At CompressGo:</strong>
        </p>
        <ul>
          <li>Your files are processed entirely within your browser and are never uploaded to our servers.</li>
          <li>We do not collect or store your files or the compressed results.</li>
          <li>We collect minimal usage data to improve our service.</li>
          <li>We use cookies to enhance your user experience.</li>
          <li>We display advertisements to support our free services.</li>
        </ul>
        
        <h2>1. Information We Collect</h2>
        <p>
          <strong>1.1. File Data</strong>
        </p>
        <p>
          We do NOT collect, store, or process your uploaded files on our servers. All file compression happens directly in your web browser using client-side technologies. Your files never leave your device and are not transmitted to our servers.
        </p>
        
        <p>
          <strong>1.2. Usage Data</strong>
        </p>
        <p>
          We collect non-personally identifiable information about how you use our website, including:
        </p>
        <ul>
          <li>Pages visited</li>
          <li>Time spent on the website</li>
          <li>Browser type and version</li>
          <li>Device type and operating system</li>
          <li>Referring website</li>
          <li>Anonymous IP address data (for geolocation)</li>
        </ul>
        
        <p>
          <strong>1.3. Cookies</strong>
        </p>
        <p>
          We use cookies and similar tracking technologies to enhance your experience on our website. These include:
        </p>
        <ul>
          <li>Essential cookies necessary for the website to function</li>
          <li>Analytics cookies to understand user behavior</li>
          <li>Advertising cookies to deliver relevant advertisements</li>
        </ul>
        
        <h2>2. How We Use Your Information</h2>
        <p>
          We use the information we collect to:
        </p>
        <ul>
          <li>Provide, maintain, and improve our services</li>
          <li>Analyze usage patterns to optimize website performance</li>
          <li>Develop new features and services</li>
          <li>Prevent fraudulent activities and security breaches</li>
          <li>Comply with legal obligations</li>
          <li>Personalize advertising content</li>
        </ul>
        
        <h2>3. Data Security</h2>
        <p>
          We take appropriate measures to protect your information against unauthorized access, alteration, disclosure, or destruction. However, no internet-based service can guarantee absolute security, and you use our services at your own risk.
        </p>
        
        <h2>4. Advertising</h2>
        <p>
          We display advertisements on our website to support our free services. These advertisements may use cookies to collect information about your browsing habits and interests to display relevant content. Our advertising partners may include Google AdSense and other third-party advertising networks.
        </p>
        <p>
          These third-party vendors may use cookies, web beacons, and similar technologies to serve ads based on your prior visits to our website or other websites. You can opt out of personalized advertising by visiting <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline">www.aboutads.info</a>.
        </p>
        
        <h2>5. Children's Privacy</h2>
        <p>
          Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us, and we will take steps to delete such information.
        </p>
        
        <h2>6. Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
        </p>
        
        <h2>7. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at:
        </p>
        <p>
          Email: privacy@compressgo.com
        </p>
        <p>
          By using our website and services, you agree to the collection and use of information in accordance with this Privacy Policy.
        </p>
      </section>
    </div>
  );
};

export default Privacy;
