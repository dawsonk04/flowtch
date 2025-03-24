import React from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import HowItWorksSection from './components/HowItWorksSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-pattern opacity-5 pointer-events-none"></div>
      
      {/* Top left mint blend */}
      <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-gradient-to-br from-[var(--mint-300)]/30 to-transparent blur-3xl pointer-events-none"></div>
      
      {/* Additional mint accent */}
      <div className="absolute top-20 left-40 w-32 h-32 rounded-full bg-gradient-to-r from-[var(--mint-200)]/20 to-[var(--mint-100)]/10 blur-2xl pointer-events-none"></div>
      
      <div className="relative z-10">
        <HeroSection />
        <HowItWorksSection />
        <FeaturesSection />
        <TestimonialsSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
