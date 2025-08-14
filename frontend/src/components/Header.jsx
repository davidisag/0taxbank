import React, { useState } from 'react';
import { Button } from './ui/button';
import { ShoppingCart, Menu, X, Gamepad2 } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Gamepad2 className="h-8 w-8 text-green-600" />
            <span className="text-xl font-bold text-gray-900">GameHardware</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#products" className="text-gray-700 hover:text-green-600 transition-colors">
              Products
            </a>
            <a href="#benchmarks" className="text-gray-700 hover:text-green-600 transition-colors">
              Performance
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-green-600 transition-colors">
              Reviews
            </a>
            <a href="#support" className="text-gray-700 hover:text-green-600 transition-colors">
              Support
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Cart (0)
            </Button>
            <Button className="bg-green-600 hover:bg-green-700">
              Shop Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="#products" className="text-gray-700 hover:text-green-600 transition-colors">
                Products
              </a>
              <a href="#benchmarks" className="text-gray-700 hover:text-green-600 transition-colors">
                Performance  
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-green-600 transition-colors">
                Reviews
              </a>
              <a href="#support" className="text-gray-700 hover:text-green-600 transition-colors">
                Support
              </a>
              <div className="flex items-center space-x-4 pt-4">
                <Button variant="outline" size="sm" className="flex-1">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Cart
                </Button>
                <Button className="flex-1 bg-green-600 hover:bg-green-700">
                  Shop Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;