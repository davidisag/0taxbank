import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Star, ShoppingCart, Check, Zap, Award, TrendingUp } from 'lucide-react';
import { mockProducts } from '../mock';

const ProductShowcase = () => {
  const [selectedProduct, setSelectedProduct] = useState(mockProducts[0]);

  const handleAddToCart = (product) => {
    // Mock add to cart functionality
    console.log('Added to cart:', product.name);
    // In real app, this would update cart state
  };

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-100 text-green-800 px-4 py-2">
            🎯 PERFORMANCE CHAMPIONS
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Elite Gaming Components
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hand-picked hardware that delivers uncompromising performance for serious gamers
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {mockProducts.map((product) => (
            <Card 
              key={product.id} 
              className={`relative overflow-hidden border-2 transition-all duration-300 hover:shadow-2xl ${
                selectedProduct.id === product.id 
                  ? 'border-green-500 shadow-lg' 
                  : 'border-gray-200 hover:border-green-300'
              }`}
            >
              {/* Sale Badge */}
              {product.originalPrice > product.price && (
                <Badge className="absolute top-4 left-4 z-10 bg-red-500 hover:bg-red-600 text-white">
                  SAVE ${product.originalPrice - product.price}
                </Badge>
              )}

              <CardHeader className="pb-4">
                <div className="aspect-square rounded-lg overflow-hidden bg-gray-100 mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    {product.category}
                  </Badge>
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>{product.rating}</span>
                    <span>({product.reviews.toLocaleString()})</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h3>

                <div className="flex items-center gap-2 mb-4">
                  <Zap className="h-5 w-5 text-green-600" />
                  <span className="text-lg font-semibold text-green-600">
                    {product.performance}
                  </span>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="space-y-4">
                  {/* Specs */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {product.specs.map((spec, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                          <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="flex items-center justify-between py-4 border-t border-gray-200">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-3xl font-bold text-gray-900">
                          ${product.price}
                        </span>
                        {product.originalPrice > product.price && (
                          <span className="text-lg text-gray-500 line-through">
                            ${product.originalPrice}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-green-600">
                        <Check className="h-4 w-4" />
                        <span>In Stock - Ready to Ship</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <Button 
                      onClick={() => handleAddToCart(product)}
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                    >
                      <ShoppingCart className="h-5 w-5 mr-2" />
                      Add to Cart
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => setSelectedProduct(product)}
                      className="border-2 border-green-600 text-green-600 hover:bg-green-50 py-3 px-6 font-semibold rounded-lg transition-all duration-200"
                    >
                      Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Performance Guarantee */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 md:p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <Award className="h-16 w-16 text-green-600 mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Performance Guarantee
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Not satisfied with your gaming performance? Get a full refund within 30 days. 
              We're confident these components will revolutionize your gaming experience.
            </p>
            <div className="flex items-center justify-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-600" />
                <span>240+ FPS Guaranteed</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-600" />
                <span>30-Day Money Back</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;