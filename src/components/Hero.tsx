import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Trophy, Star } from 'lucide-react';

const Hero: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-10-15T23:59:59').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-white to-green-50 pt-20 md:pt-0">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-4 md:left-10 w-48 h-48 md:w-72 md:h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse will-change-transform"></div>
        <div className="absolute top-40 right-4 md:right-10 w-48 h-48 md:w-72 md:h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000 will-change-transform"></div>
        <div className="absolute -bottom-32 left-8 md:left-20 w-48 h-48 md:w-72 md:h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000 will-change-transform"></div>
      </div>

      {/* Indian Cultural Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FF9933' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Headline */}
          <div className="mb-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-orange-500 via-red-500 to-green-600 bg-clip-text text-transparent leading-tight">
              India's Biggest
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mt-2">
              Startup Pitching Event
            </h2>
            <div className="flex items-center justify-center mt-4 space-x-1 sm:space-x-2">
              <Trophy className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-500" />
              <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-orange-600">
                Win From ₹50+ Lakh
              </p>
              <Trophy className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-500" />
            </div>
          </div>

          {/* Hindi Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-6 sm:mb-8 font-medium px-4">
            India ka apna pitching platform – <span className="text-green-600 font-bold">PitchKaroIndia 2025</span>
          </p>

          {/* Key Points */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8 px-4">
            <div className="bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full border border-orange-200">
              <span className="text-orange-600 font-semibold text-sm sm:text-base">Open for All Sectors</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full border border-green-200">
              <span className="text-green-600 font-semibold text-sm sm:text-base">Students Welcome</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full border border-blue-200">
              <span className="text-blue-600 font-semibold text-sm sm:text-base">20+ Investors</span>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="mb-6 sm:mb-8">
            <p className="text-base sm:text-lg font-semibold text-gray-700 mb-4 flex items-center justify-center px-4">
              <Clock className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-red-500" />
              Registration Deadline: October 15, 2025
            </p>
            <div className="flex justify-center space-x-2 sm:space-x-4 px-4">
              <div className="bg-white/90 backdrop-blur-sm p-3 sm:p-4 rounded-lg shadow-lg border border-orange-200 min-w-0 flex-1 max-w-20 sm:max-w-24">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-600">{timeLeft.days}</div>
                <div className="text-xs sm:text-sm text-gray-600">Days</div>
              </div>
              <div className="bg-white/90 backdrop-blur-sm p-3 sm:p-4 rounded-lg shadow-lg border border-red-200 min-w-0 flex-1 max-w-20 sm:max-w-24">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-red-600">{timeLeft.hours}</div>
                <div className="text-xs sm:text-sm text-gray-600">Hours</div>
              </div>
              <div className="bg-white/90 backdrop-blur-sm p-3 sm:p-4 rounded-lg shadow-lg border border-green-200 min-w-0 flex-1 max-w-20 sm:max-w-24">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-green-600">{timeLeft.minutes}</div>
                <div className="text-xs sm:text-sm text-gray-600">Minutes</div>
              </div>
              <div className="bg-white/90 backdrop-blur-sm p-3 sm:p-4 rounded-lg shadow-lg border border-blue-200 min-w-0 flex-1 max-w-20 sm:max-w-24">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600">{timeLeft.seconds}</div>
                <div className="text-xs sm:text-sm text-gray-600">Seconds</div>
              </div>
            </div>
          </div>

          {/* Main CTA */}
          <div className="space-y-4">
            <a
              href="https://pitchkaroindia.fillout.com/apply"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-orange-500 to-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-lg sm:text-xl font-bold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 touch-target focus-visible tap-highlight-none will-change-transform"
            >
              <span>Register Now</span>
            </a>
            <p className="text-gray-600 text-sm sm:text-base">Registration Fee: Only ₹249</p>
          </div>

          {/* Urgency Message */}
          <div className="mt-6 sm:mt-8 bg-red-50 border border-red-200 rounded-lg p-4 mx-4 sm:mx-auto sm:inline-block">
            <p className="text-red-700 font-semibold text-sm sm:text-base">
              ⚡ Limited Time: Don't miss India's most rewarding startup competition!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;