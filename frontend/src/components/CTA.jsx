import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ShoppingCart, Clock, Shield, Truck, Star, ArrowRight, Check } from 'lucide-react';

const CTA = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      console.log('Email subscribed:', email);
      // In real app, this would call an API
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-green-900 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2316a34a%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA */}
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-green-500/20 text-green-400 border border-green-500/30 px-4 py-2">
            🚀 LIMITED TIME OFFER
          </Badge>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Ready to <span className="text-green-400">Dominate</span>
            <br />Your Competition?
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join 50,000+ gamers who've already upgraded to elite performance. 
            Get your Ryzen 9900X + RTX 4070 combo with exclusive bonuses.
          </p>

          {/* Urgency Counter */}
          <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4 max-w-md mx-auto mb-8">
            <div className="flex items-center justify-center gap-2 text-red-400 font-semibold">
              <Clock className="h-5 w-5" />
              <span>Sale ends in 48 hours!</span>
            </div>
          </div>

          {/* Main CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white px-10 py-6 text-xl font-bold rounded-lg shadow-2xl hover:shadow-green-500/25 transform hover:scale-105 transition-all duration-200"
            >
              <ShoppingCart className="mr-3 h-6 w-6" />
              Shop Now - Save $150
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900 px-10 py-6 text-xl font-bold rounded-lg transition-all duration-200"
            >
              View All Deals
            </Button>
          </div>
        </div>

        {/* Value Props Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-white/10 backdrop-blur-md border border-white/20 text-white">
            <CardContent className="p-8 text-center">
              <Truck className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Free 2-Day Shipping</h3>
              <p className="text-gray-300">Get your hardware delivered fast with free express shipping on all orders over $500</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border border-white/20 text-white">
            <CardContent className="p-8 text-center">
              <Shield className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">3-Year Warranty</h3>
              <p className="text-gray-300">Full manufacturer warranty plus extended protection for complete peace of mind</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border border-white/20 text-white">
            <CardContent className="p-8 text-center">
              <Star className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Expert Support</h3>
              <p className="text-gray-300">24/7 technical support from gaming hardware specialists who know their stuff</p>
            </CardContent>
          </Card>
        </div>

        {/* Bonus Offer */}
        <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl p-8 md:p-12 border border-green-500/30 mb-16">
          <div className="text-center mb-8">
            <Badge className="mb-4 bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 px-4 py-2">
              🎁 EXCLUSIVE BONUS
            </Badge>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Order Today & Get These FREE Bonuses
            </h3>
            <p className="text-gray-300 text-lg">
              Worth over $200 in additional value - included at no extra cost
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-center gap-4 bg-white/10 rounded-lg p-6">
              <Check className="h-6 w-6 text-green-400 flex-shrink-0" />
              <div>
                <div className="font-semibold">Premium Thermal Paste</div>
                <div className="text-gray-300 text-sm">$25 value</div>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white/10 rounded-lg p-6">
              <Check className="h-6 w-6 text-green-400 flex-shrink-0" />
              <div>
                <div className="font-semibold">Installation Guide Kit</div>
                <div className="text-gray-300 text-sm">$50 value</div>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white/10 rounded-lg p-6">
              <Check className="h-6 w-6 text-green-400 flex-shrink-0" />
              <div>
                <div className="font-semibold">1-Year Extended Warranty</div>
                <div className="text-gray-300 text-sm">$125 value</div>
              </div>
            </div>
          </div>
        </div>

        {/* Email Signup */}
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Updated on Gaming Hardware</h3>
          <p className="text-gray-300 mb-6">
            Get exclusive deals, performance tips, and early access to new hardware releases
          </p>
          
          {!isSubscribed ? (
            <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              />
              <Button 
                type="submit"
                className="bg-green-600 hover:bg-green-700 px-8 py-4 font-semibold rounded-lg whitespace-nowrap"
              >
                Get Exclusive Deals
              </Button>
            </form>
          ) : (
            <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-6 text-green-400">
              <Check className="h-8 w-8 mx-auto mb-2" />
              <p className="font-semibold">Thanks for subscribing! Check your email for exclusive deals.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTA;