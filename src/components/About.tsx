import React from 'react';
import { Target, Users, Award, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            About <span className="bg-gradient-to-r from-orange-500 to-green-600 bg-clip-text text-transparent">PitchKaroIndia 2025</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            India's first national startup pitching platform where dreams meet opportunity. 
            From students with breakthrough ideas to seasoned entrepreneurs, everyone has a chance to win big.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 lg:mb-16">
          <div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <Heart className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Born from Passion</h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Created to bridge the gap between brilliant ideas and the resources they need to flourish. 
                    We believe every innovative mind deserves a platform to shine.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Truly Inclusive</h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Whether you're a college student, a solo founder, or an established startup - 
                    if you have an idea that can make a difference, you belong here.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Beyond Just Money</h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Win substantial cash prizes, gain investor attention, get mentorship from IIT professors, 
                    and join a network of India's most promising entrepreneurs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-green-50 p-6 sm:p-8 rounded-2xl">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">Why PitchKaroIndia?</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <p className="text-gray-700 text-sm sm:text-base">₹50+ Lakh total prize pool - India's most rewarding competition</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <p className="text-gray-700 text-sm sm:text-base">Expert evaluation by IIT professors and industry veterans</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <p className="text-gray-700 text-sm sm:text-base">Direct access to 20+ active investors and VCs</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <p className="text-gray-700 text-sm sm:text-base">National platform with pan-India participation</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <p className="text-gray-700 text-sm sm:text-base">Comprehensive mentorship and networking opportunities</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center bg-gradient-to-r from-orange-500 to-green-600 text-white p-8 sm:p-12 rounded-2xl">
          <Target className="h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-6" />
          <div className="mb-6">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">₹50+ Lakh Prize Pool</h3>
            <p className="text-lg sm:text-xl opacity-90">India's Most Rewarding Startup Competition</p>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Our Mission</h3>
          <p className="text-lg sm:text-xl leading-relaxed max-w-4xl mx-auto px-4">
            "To create India's most comprehensive startup ecosystem where innovation meets opportunity. 
            We're not just hosting a competition - we're building the foundation for India's next generation 
            of successful entrepreneurs."
          </p>
          <div className="mt-8">
            <p className="text-base sm:text-lg font-semibold">
              Proudly Indian • Globally Competitive • Locally Impactful
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;