import React from 'react';
import HeroSection from '../components/heroSection/HeroSection';
import MiddleSection from '../components/middleSection/MiddleSection';

const LandingPage = () => {
  return (
    <div className="container">
      <HeroSection />
      <MiddleSection />
    </div>
  );
};

export default LandingPage;
