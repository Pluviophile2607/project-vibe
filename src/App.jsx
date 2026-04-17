import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import IntentSection from './components/IntentSection';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import { SmoothCursor } from './components/SmoothCursor';

function App() {
  return (
    <div className="min-h-screen bg-surface-container-lowest text-on-surface cursor-none">
      <SmoothCursor />
      <Navbar />
      <Hero />
      <SocialProof />
      <IntentSection />
      <Features />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
