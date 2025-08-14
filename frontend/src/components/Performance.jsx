import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { TrendingUp, Zap, Monitor, Cpu } from 'lucide-react';
import { mockBenchmarks } from '../mock';

const Performance = () => {
  const [selectedBenchmark, setSelectedBenchmark] = useState('gaming');

  const benchmarkCategories = {
    gaming: {
      title: 'Gaming Performance',
      icon: Monitor,
      data: mockBenchmarks
    },
    productivity: {
      title: 'Productivity',
      icon: Cpu,
      data: [
        { game: 'Blender Render', fps: '3.2x Faster', settings: 'Cycles Render' },
        { game: '4K Video Export', fps: '2.8x Faster', settings: 'H.264 Export' },
        { game: 'Code Compilation', fps: '4.1x Faster', settings: 'Large Project' },
        { game: 'AI Training', fps: '5.2x Faster', settings: 'Neural Network' }
      ]
    }
  };

  return (
    <section id="benchmarks" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-100 text-green-800 px-4 py-2">
            PERFORMANCE DATA
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Benchmark Results That Matter
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-world performance testing across the games and applications you use most
          </p>
        </div>

        {/* Performance Tabs */}
        <Tabs defaultValue="gaming" className="mb-16">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="gaming" className="flex items-center gap-2">
              <Monitor className="h-4 w-4" />
              Gaming
            </TabsTrigger>
            <TabsTrigger value="productivity" className="flex items-center gap-2">
              <Cpu className="h-4 w-4" />
              Productivity
            </TabsTrigger>
          </TabsList>

          <TabsContent value="gaming">
            <div className="grid md:grid-cols-2 gap-8">
              {mockBenchmarks.map((benchmark, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl font-bold text-gray-900">
                        {benchmark.game}
                      </CardTitle>
                      <Badge className="bg-green-100 text-green-800 px-3 py-1">
                        {benchmark.settings}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-6 w-6 text-green-600" />
                        <span className="text-3xl font-bold text-green-600">
                          {benchmark.fps}
                        </span>
                      </div>
                      <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full transition-all duration-1000"
                          style={{ width: `${Math.min(parseInt(benchmark.fps) / 4, 100)}%` }}
                        ></div>
                      </div>
                    </div>
                    <p className="text-gray-600 mt-3 text-sm">
                      Consistent performance at {benchmark.settings} settings with ray tracing enabled
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="productivity">
            <div className="grid md:grid-cols-2 gap-8">
              {benchmarkCategories.productivity.data.map((benchmark, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl font-bold text-gray-900">
                        {benchmark.game}
                      </CardTitle>
                      <Badge className="bg-blue-100 text-blue-800 px-3 py-1">
                        {benchmark.settings}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Zap className="h-6 w-6 text-blue-600" />
                        <span className="text-3xl font-bold text-blue-600">
                          {benchmark.fps}
                        </span>
                      </div>
                      <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-1000"
                          style={{ width: `${Math.min(parseFloat(benchmark.fps) * 15, 100)}%` }}
                        ></div>
                      </div>
                    </div>
                    <p className="text-gray-600 mt-3 text-sm">
                      Significantly faster than previous generation hardware
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Performance Guarantee */}
        <div className="bg-gradient-to-r from-green-50 via-white to-blue-50 rounded-2xl p-8 md:p-12 text-center border border-green-100">
          <div className="max-w-4xl mx-auto">
            <TrendingUp className="h-16 w-16 text-green-600 mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Performance Promise
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              We guarantee these benchmark results or you get your money back. Our rigorous testing ensures 
              you'll achieve the performance levels shown above in your gaming setup.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="text-2xl font-bold text-green-600 mb-2">240+ FPS</div>
                <div className="text-gray-600">Competitive Gaming</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="text-2xl font-bold text-green-600 mb-2">4K 60FPS</div>
                <div className="text-gray-600">Ultra Settings</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="text-2xl font-bold text-green-600 mb-2">Ray Tracing</div>
                <div className="text-gray-600">Max Quality</div>
              </div>
            </div>
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 font-semibold">
              Shop Performance Hardware
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Performance;