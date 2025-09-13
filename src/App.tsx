import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Eligibility from './components/Eligibility';
import Prizes from './components/Prizes';
import Process from './components/Process';
import Timeline from './components/Timeline';
import Judges from './components/Judges';
import FAQ from './components/FAQ';
import FeeExplanation from './components/FeeExplanation';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Eligibility />
      <Prizes />
      <Process />
      <Timeline />
      <Judges />
      <FeeExplanation />
      <FAQ />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;