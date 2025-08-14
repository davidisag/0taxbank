// Mock data for gaming hardware store
export const mockProducts = [
  {
    id: 1,
    name: "AMD Ryzen 9900X",
    category: "CPU",
    price: 549,
    originalPrice: 599,
    image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=500&h=500&fit=crop",
    performance: "240 FPS Average",
    specs: ["16 Cores, 32 Threads", "5.6 GHz Max Boost", "AM5 Socket", "105W TDP"],
    inStock: true,
    rating: 4.9,
    reviews: 2847
  },
  {
    id: 2,
    name: "AMD Radeon RX 9070 XT",
    category: "GPU",
    price: 629,
    originalPrice: 699,
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=500&h=500&fit=crop",
    performance: "180 FPS @ 1440p",
    specs: ["16GB GDDR6", "2800 MHz Boost", "3x DisplayPort", "Ray Tracing"],
    inStock: true,
    rating: 4.8,
    reviews: 1923
  }
];

export const mockTestimonials = [
  {
    id: 1,
    name: "Alex Chen",
    title: "Pro Gamer",
    content: "This Ryzen 9900X absolutely crushes every game I throw at it. My streaming setup has never been smoother!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Sarah Rodriguez",
    title: "Content Creator", 
    content: "The RX 9070 XT handles 4K editing like a beast. Ray tracing performance is incredible for the price!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b742?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Mike Johnson",
    title: "Competitive Player",
    content: "240Hz gaming finally feels smooth with this setup. No more bottlenecks, just pure performance!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  }
];

export const mockBenchmarks = [
  { game: "Cyberpunk 2077", fps: "142 FPS", settings: "Ultra RTX" },
  { game: "Call of Duty MW3", fps: "235 FPS", settings: "Max Settings" },
  { game: "Fortnite", fps: "280 FPS", settings: "Epic Settings" },
  { game: "Valorant", fps: "420 FPS", settings: "High Settings" }
];

export const mockFeatures = [
  {
    icon: "Zap",
    title: "Lightning Fast Performance",
    description: "Experience gaming like never before with cutting-edge processing power"
  },
  {
    icon: "Shield",
    title: "3-Year Warranty",
    description: "Full manufacturer warranty plus our extended protection plan"
  },
  {
    icon: "Truck",
    title: "Free Express Shipping",
    description: "Get your gear delivered fast with free 2-day shipping on all orders"
  },
  {
    icon: "Headphones",
    title: "Expert Support",
    description: "24/7 technical support from gaming hardware specialists"
  }
];

export const mockStats = [
  { number: "50,000+", label: "Happy Gamers" },
  { number: "99.9%", label: "Uptime Guarantee" },
  { number: "24/7", label: "Expert Support" },
  { number: "2-Day", label: "Free Shipping" }
];