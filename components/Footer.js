import React from 'react';
import { useTranslation } from 'next-i18next';

const Footer = () => {
  const { t } = useTranslation('common');
  return (
    <footer className="bg-black py-12 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:justify-between">
        
        {/* Logo and Description */}
        <div className="lg:w-1/3 mb-8 lg:mb-0">
          <h1 className="text-white">KARDAK</h1>
          <p className="text-gray-300 mt-4">
            Making the world a better place through constructing elegant hierarchies.
          </p>
        </div>

        {/* Links Section */}
        <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* Solutions */}
          <div>
            <h3 className="text-white font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-gray-500">Marketing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-500">Analytics</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-500">Automation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-500">Commerce</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-500">Insights</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-gray-500">Submit ticket</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-500">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-500">Guides</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-gray-500">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-500">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-500">Jobs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-500">Press</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-gray-500">Terms of service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-500">Privacy policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-500">License</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Social Icons and Copyright */}
      <div className="max-w-7xl mx-auto mt-8 border-t border-gray-200 pt-8 flex flex-col md:flex-row md:justify-between">
        <div className="text-gray-300 flex space-x-4 mb-4 md:mb-0">
          {/* Placeholder for social icons */}
          <span>Social Icons</span>
        </div>
        <p className="text-gray-300 text-sm">
          © 2024 Kardak, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;