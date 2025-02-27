import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import BenefitsSection from './components/BenefitsSection';
// import MentorsSection from './components/MentorsSection';
import RegisterSection from './components/RegisterSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans">
      <Header />
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      {/* <MentorsSection /> */}
      <RegisterSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;