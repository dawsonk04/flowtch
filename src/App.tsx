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
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-gradient-to-br from-[var(--mint-300)]/40 to-transparent blur-3xl pointer-events-none"></div>
      
      {/* Bottom right mint blend */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-tl from-[var(--mint-200)]/50 to-transparent blur-3xl pointer-events-none"></div>
      
      {/* Center mint blend */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-t from-[var(--mint-100)]/20 to-[var(--mint-50)]/30 blur-3xl pointer-events-none"></div>
      
      {/* Additional mint accents */}
      <div className="absolute top-20 left-40 w-48 h-48 rounded-full bg-gradient-to-r from-[var(--mint-200)]/20 to-[var(--mint-100)]/10 blur-2xl pointer-events-none"></div>
      <div className="absolute bottom-40 right-20 w-64 h-64 rounded-full bg-gradient-to-l from-[var(--mint-200)]/30 to-[var(--mint-100)]/20 blur-2xl pointer-events-none"></div>
      
      <div className="relative z-10 space-y-0">
        <HeroSection />
        <div className="-mt-20 space-y-2.5">
          <HowItWorksSection />
          <FeaturesSection />
          <TestimonialsSection />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
