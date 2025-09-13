import React, { useState, useEffect } from 'react';
import { Menu, X, Trophy } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-orange-500 to-green-600 p-2 rounded-full">
                <Trophy className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-orange-500 to-green-600 bg-clip-text text-transparent">
                  PitchKaroIndia
                </h1>
                <p className="text-xs text-gray-600">2025</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-orange-600 transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('eligibility')} className="text-gray-700 hover:text-orange-600 transition-colors">
                Eligibility
              </button>
              <button onClick={() => scrollToSection('prizes')} className="text-gray-700 hover:text-orange-600 transition-colors">
                Prizes
              </button>
              <button onClick={() => scrollToSection('process')} className="text-gray-700 hover:text-orange-600 transition-colors">
                Process
              </button>
              <button onClick={() => scrollToSection('timeline')} className="text-gray-700 hover:text-orange-600 transition-colors">
                Timeline
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-orange-600 transition-colors">
                FAQ
              </button>
            </nav>

            {/* Desktop CTA */}
            <a
              href="https://pitchkaroindia.fillout.com/apply"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-orange-500 to-green-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Register Now
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <nav className="container mx-auto px-4 py-4 space-y-4">
              <button onClick={() => scrollToSection('about')} className="block text-gray-700 hover:text-orange-600 transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('eligibility')} className="block text-gray-700 hover:text-orange-600 transition-colors">
                Eligibility
              </button>
              <button onClick={() => scrollToSection('prizes')} className="block text-gray-700 hover:text-orange-600 transition-colors">
                Prizes
              </button>
              <button onClick={() => scrollToSection('process')} className="block text-gray-700 hover:text-orange-600 transition-colors">
                Process
              </button>
              <button onClick={() => scrollToSection('timeline')} className="block text-gray-700 hover:text-orange-600 transition-colors">
                Timeline
              </button>
              <button onClick={() => scrollToSection('faq')} className="block text-gray-700 hover:text-orange-600 transition-colors">
                FAQ
              </button>
              <a
                href="https://pitchkaroindia.fillout.com/apply"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gradient-to-r from-orange-500 to-green-600 text-white px-6 py-3 rounded-full font-semibold text-center"
              >
                Register Now
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Sticky CTA Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://pitchkaroindia.fillout.com/apply"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-orange-500 to-green-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
        >
          <Trophy className="h-5 w-5" />
          <span>Register Now</span>
        </a>
      </div>
    </>
  );
};

export default Header;