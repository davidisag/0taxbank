import React from 'react';
import { Gamepad2, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Gamepad2 className="h-8 w-8 text-green-500" />
              <span className="text-xl font-bold">GameHardware</span>
            </div>
            <p className="text-gray-400 mb-6">
              Your trusted partner for elite gaming components. We deliver the performance you need to dominate every game.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-green-500 cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-green-500 cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-green-500 cursor-pointer transition-colors" />
              <Youtube className="h-6 w-6 text-gray-400 hover:text-green-500 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Products</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-green-500 transition-colors">CPUs</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">GPUs</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Motherboards</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Memory</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Storage</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Pre-built PCs</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-green-500 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Installation Guide</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Warranty</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Track Order</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span>1-800-GAMING-1</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span>support@gamehardware.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span>123 Gaming Street<br />Tech City, TC 12345</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 GameHardware. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-green-500 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-green-500 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-green-500 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;