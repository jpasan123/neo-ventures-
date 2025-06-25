import React, { useEffect } from 'react';
import { initGA, logPageView } from './analytics';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import BenefitsSection from './components/BenefitsSection';
import EventGallerySection from './components/EventGallerySection';
import MentorsSection from './components/MentorsSection';
import RegisterSection from './components/RegisterSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Replace GA_MEASUREMENT_ID with your actual Google Analytics measurement ID
    initGA('G-0PKP7E8KPW');
    logPageView();
  }, []);

  return (
    <div className="font-sans">
      <Header />
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <EventGallerySection />
      <MentorsSection />
      <RegisterSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;