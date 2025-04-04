import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WelcomePage from '../components/WelcomePage';
import WhatIDo from '../components/WhatIDo';
import AboutContent from '../components/AboutContent';
import ProjectInfo from '../components/ProjectContent';
import Contact from '../components/Contact';

const Home = () => {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileOrTablet(window.innerWidth <= 768); 
    };

    handleResize(); 
    window.addEventListener('resize', handleResize); 

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <Navbar />
      <WelcomePage />
      <WhatIDo />

      {isMobileOrTablet && (
        <>
          <ProjectInfo />
          <AboutContent />
          <Contact />
        </>
      )}

      <Footer />
    </div>
  );
};

export default Home;
