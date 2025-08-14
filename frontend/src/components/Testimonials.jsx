import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Star, Quote } from 'lucide-react';
import { mockTestimonials } from '../mock';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-100 text-green-800 px-4 py-2">
            GAMER REVIEWS
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            What Gamers Are Saying
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real feedback from competitive gamers, streamers, and content creators who trust our hardware
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {mockTestimonials.map((testimonial) => (
            <Card key={testimonial.id} className="relative bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10">
                <Quote className="h-12 w-12 text-green-600" />
              </div>
              
              <CardContent className="p-8">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-green-100"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-green-600 text-sm font-medium">{testimonial.title}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Trusted by 50,000+ Gamers Worldwide
            </h3>
            <p className="text-lg text-gray-600">
              Join the community of elite gamers who choose our hardware for competitive advantage
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">4.9/5</div>
              <div className="text-gray-600 font-medium">Average Rating</div>
              <div className="text-sm text-gray-500">From 4,770+ reviews</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-gray-600 font-medium">Would Recommend</div>
              <div className="text-sm text-gray-500">To other gamers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">24hrs</div>
              <div className="text-gray-600 font-medium">Avg Response</div>
              <div className="text-sm text-gray-500">Customer support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">99.9%</div>
              <div className="text-gray-600 font-medium">Success Rate</div>
              <div className="text-sm text-gray-500">Hardware reliability</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;