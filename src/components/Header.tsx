import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen && !(event.target as Element).closest('.mobile-menu-container')) {
        setIsMenuOpen(false);
      }
    };
    
    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 flex-shrink-0">
              <div className="bg-gradient-to-r from-orange-500 to-green-600 p-2 rounded-full">
                <Trophy className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-orange-500 to-green-600 bg-clip-text text-transparent">
                  PitchKaroIndia
                </h1>
                <p className="text-xs text-gray-600 hidden sm:block">2025</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-orange-600 transition-colors touch-target focus-visible">
                About
              </button>
              <button onClick={() => scrollToSection('eligibility')} className="text-gray-700 hover:text-orange-600 transition-colors touch-target focus-visible">
                Eligibility
              </button>
              <button onClick={() => scrollToSection('prizes')} className="text-gray-700 hover:text-orange-600 transition-colors touch-target focus-visible">
                Prizes
              </button>
              <button onClick={() => scrollToSection('process')} className="text-gray-700 hover:text-orange-600 transition-colors touch-target focus-visible">
                Process
              </button>
              <button onClick={() => scrollToSection('timeline')} className="text-gray-700 hover:text-orange-600 transition-colors touch-target focus-visible">
                Timeline
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-orange-600 transition-colors touch-target focus-visible">
                FAQ
              </button>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <a
                href="https://pitchkaroindia.fillout.com/apply"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-orange-500 to-green-600 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-sm lg:text-base touch-target focus-visible tap-highlight-none"
              >
                Register Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-700 touch-target focus-visible tap-highlight-none"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden mobile-menu-container transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="bg-white border-t shadow-lg">
            <nav className="container mx-auto px-4 py-6 space-y-1">
              <button onClick={() => scrollToSection('about')} className="block w-full text-left py-3 px-4 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors touch-target focus-visible">
                About
              </button>
              <button onClick={() => scrollToSection('eligibility')} className="block w-full text-left py-3 px-4 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors touch-target focus-visible">
                Eligibility
              </button>
              <button onClick={() => scrollToSection('prizes')} className="block w-full text-left py-3 px-4 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors touch-target focus-visible">
                Prizes
              </button>
              <button onClick={() => scrollToSection('process')} className="block w-full text-left py-3 px-4 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors touch-target focus-visible">
                Process
              </button>
              <button onClick={() => scrollToSection('timeline')} className="block w-full text-left py-3 px-4 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors touch-target focus-visible">
                Timeline
              </button>
              <button onClick={() => scrollToSection('faq')} className="block w-full text-left py-3 px-4 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors touch-target focus-visible">
                FAQ
              </button>
              <div className="pt-4 border-t border-gray-200 mt-4">
                <a
                  href="https://pitchkaroindia.fillout.com/apply"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-gradient-to-r from-orange-500 to-green-600 text-white px-6 py-4 rounded-full font-semibold text-center touch-target focus-visible tap-highlight-none"
                >
                  Register Now - ₹249
                </a>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Sticky CTA Button */}
      <div className="fixed bottom-4 right-4 z-50 md:bottom-6 md:right-6">
        <a
          href="https://pitchkaroindia.fillout.com/apply"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-orange-500 to-green-600 text-white px-4 py-3 md:px-6 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 text-sm md:text-base touch-target focus-visible tap-highlight-none will-change-transform"
        >
          <Trophy className="h-4 w-4 md:h-5 md:w-5" />
          <span className="hidden sm:inline">Register Now</span>
          <span className="sm:hidden">Register</span>
        </a>
      </div>
    </>
  );
};

export default Header;