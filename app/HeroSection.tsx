'use client';

import About from './components/about';
import Blog from './components/blog';
import Contact from './components/contact';
import Homepage from './components/homepage';

const HeroSection = () => {
  return (
    <div className=' overflow-y-auto h-screen'>
      <Homepage />
      <About />
      <Blog />
      <Contact />
    </div> 
  );
};

export default HeroSection;
