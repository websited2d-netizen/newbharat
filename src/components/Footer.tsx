import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Trophy, Calendar, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white py-16">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-to-r from-orange-500 to-green-600 p-3 rounded-full">
                <Trophy className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-green-600 bg-clip-text text-transparent">
                  PitchKaroIndia
                </h1>
                <p className="text-gray-400">2025</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-lg">
              India's premier startup pitching platform where innovation meets opportunity. 
              Join thousands of entrepreneurs competing for ₹50+ Lakh and connect with 
              20+ active investors across the nation.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-5 w-5 text-orange-500" />
                <span>pitchkaroindia@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="h-5 w-5 text-green-500" />
                <span>Pan India Platform</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <div className="space-y-3">
              <button onClick={() => scrollToSection('about')} className="block text-gray-300 hover:text-orange-400 transition-colors">
                About PitchKaroIndia
              </button>
              <button onClick={() => scrollToSection('eligibility')} className="block text-gray-300 hover:text-orange-400 transition-colors">
                Eligibility Criteria
              </button>
              <button onClick={() => scrollToSection('prizes')} className="block text-gray-300 hover:text-orange-400 transition-colors">
                Prize Pool - ₹50+ Lakh
              </button>
              <button onClick={() => scrollToSection('process')} className="block text-gray-300 hover:text-orange-400 transition-colors">
                7-Step Process
              </button>
              <button onClick={() => scrollToSection('timeline')} className="block text-gray-300 hover:text-orange-400 transition-colors">
                Competition Timeline
              </button>
              <button onClick={() => scrollToSection('faq')} className="block text-gray-300 hover:text-orange-400 transition-colors">
                FAQ
              </button>
              <Link to="/terms" className="block text-gray-300 hover:text-orange-400 transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>

          {/* Important Information */}
          <div>
            <h3 className="text-xl font-bold mb-6">Important Info</h3>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-red-600 to-red-700 p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Calendar className="h-5 w-5" />
                  <p className="font-bold">Registration Deadline</p>
                </div>
                <p className="text-sm">October 15, 2025</p>
              </div>
              
              <div className="bg-gradient-to-r from-green-600 to-green-700 p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Trophy className="h-5 w-5" />
                  <p className="font-bold">Registration Fee</p>
                </div>
                <p className="text-sm">Only ₹249</p>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 rounded-lg">
                <p className="font-bold mb-1">Open for All</p>
                <p className="text-sm">Students • Startups • Solo Founders</p>
              </div>
            </div>
          </div>
        </div>

        {/* Registration CTA */}
        <div className="border-t border-gray-700 pt-12 mb-8">
          <div className="text-center bg-gradient-to-r from-orange-600 to-green-600 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">🚀 Don't Miss Out on India's Biggest Opportunity! 🚀</h3>
            <p className="text-lg mb-6">
              Registration is open NOW. Secure your spot in India's most rewarding startup competition.
            </p>
            <a
              href="https://pitchkaroindia.fillout.com/apply"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-orange-600 px-8 py-4 rounded-full text-xl font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <span>Register Now - ₹249</span>
            </a>
            <p className="mt-4 text-sm opacity-90">
              ⏰ Deadline: October 15, 2025 | 🏆 Prize Pool: ₹50+ Lakh | 🤝 20+ Investors
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 PitchKaroIndia. All rights reserved. | India ka apna pitching platform. | 
              <Link to="/terms" className="hover:text-orange-400 transition-colors ml-2">Terms & Conditions</Link>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>🇮🇳 Proudly Indian</span>
              <span>•</span>
              <span>Merit-Based Selection</span>
              <span>•</span>
              <span>100% Transparent</span>
            </div>
          </div>
        </div>

        {/* Final Message */}
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm italic">
            "Empowering India's next generation of entrepreneurs - one brilliant idea at a time."
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;