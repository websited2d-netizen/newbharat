import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import TermsConditions from './components/TermsConditions';

const HomePage = () => (
  <>
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
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/terms" element={<TermsConditions />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;