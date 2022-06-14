import React from 'react';
import Navbar from './components/Navbar/Navbar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero/Hero';
import ExpertsIn from './components/ExpertsIn/ExpertsIn';
import OurServices from './components/OurServices/OurServices';
import WhySection from './components/WhySection/WhySection';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Hero />
      <ExpertsIn />
      <OurServices />
      <WhySection />
      <Contact />
      <Footer />
    </Router>
  );
};

export default App;
