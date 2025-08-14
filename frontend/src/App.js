import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductShowcase from "./components/ProductShowcase";
import Performance from "./components/Performance";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ProductShowcase />
      <Performance />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;