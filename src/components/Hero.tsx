import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Trophy, Star } from 'lucide-react';

const Hero: React.FC = () => {
  const [showCelebration, setShowCelebration] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Trigger celebration animation on component mount
  useEffect(() => {
    setShowCelebration(true);
    const timer = setTimeout(() => {
      setShowCelebration(false);
    }, 3000); // Animation lasts 3 seconds

    return () => clearTimeout(timer);
  }, []);

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-white to-green-50">
      {/* Celebration Animation */}
      {showCelebration && (
        <>
          {/* Left side party poppers */}
          <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <div
                key={`left-${i}`}
                className="absolute text-4xl animate-bounce"
                style={{
                  top: `${i * 80 - 200}px`,
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: '2s',
                  left: `${Math.random() * 100}px`
                }}
              >
                🎉
              </div>
            ))}
          </div>

          {/* Right side party poppers */}
          <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <div
                key={`right-${i}`}
                className="absolute text-4xl animate-bounce"
                style={{
                  top: `${i * 80 - 200}px`,
                  animationDelay: `${i * 0.2 + 0.1}s`,
                  animationDuration: '2s',
                  right: `${Math.random() * 100}px`
                }}
              >
                🎉
              </div>
            ))}
          </div>

          {/* Center celebration burst */}
          <div className="fixed inset-0 flex items-center justify-center z-40 pointer-events-none">
            <div className="relative">
              {[...Array(12)].map((_, i) => (
                <div
                  key={`center-${i}`}
                  className="absolute text-3xl animate-ping"
                  style={{
                    transform: `rotate(${i * 30}deg) translateY(-100px)`,
                    animationDelay: `${i * 0.1}s`,
                    animationDuration: '1.5s'
                  }}
                >
                  🎉
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Indian Cultural Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FF9933' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Headline */}
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-500 via-red-500 to-green-600 bg-clip-text text-transparent leading-tight">
              India's Biggest
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mt-2">
              Startup Pitching Event
            </h2>
            <div className="flex items-center justify-center mt-4 space-x-2">
              <Trophy className="h-8 w-8 text-yellow-500" />
              <p className="text-2xl md:text-3xl font-semibold text-orange-600">
                Win From ₹50+ Lakh
              </p>
              <Trophy className="h-8 w-8 text-yellow-500" />
            </div>
          </div>

          {/* Hindi Subheadline */}
          <p className="text-xl md:text-2xl text-gray-700 mb-8 font-medium">
            India ka apna pitching platform – <span className="text-green-600 font-bold">PitchKaroIndia 2025</span>
          </p>

          {/* Key Points */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-orange-200">
              <span className="text-orange-600 font-semibold">Open for All Sectors</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-green-200">
              <span className="text-green-600 font-semibold">Students Welcome</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-200">
              <span className="text-blue-600 font-semibold">20+ Investors</span>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="mb-8">
            <p className="text-lg font-semibold text-gray-700 mb-4 flex items-center justify-center">
              <Clock className="h-5 w-5 mr-2 text-red-500" />
              Registration Deadline: October 15, 2025
            </p>
            <div className="flex justify-center space-x-4">
              <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-orange-200">
                <div className="text-3xl font-bold text-orange-600">{timeLeft.days}</div>
                <div className="text-sm text-gray-600">Days</div>
              </div>
              <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-red-200">
                <div className="text-3xl font-bold text-red-600">{timeLeft.hours}</div>
                <div className="text-sm text-gray-600">Hours</div>
              </div>
              <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-green-200">
                <div className="text-3xl font-bold text-green-600">{timeLeft.minutes}</div>
                <div className="text-sm text-gray-600">Minutes</div>
              </div>
              <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-blue-200">
                <div className="text-3xl font-bold text-blue-600">{timeLeft.seconds}</div>
                <div className="text-sm text-gray-600">Seconds</div>
              </div>
            </div>
          </div>

          {/* Main CTA */}
          <div className="space-y-4">
            <a
              href="https://pitchkaroindia.fillout.com/apply"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-orange-500 to-green-600 text-white px-8 py-4 rounded-full text-xl font-bold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <span>Register Now</span>
            </a>
            <p className="text-gray-600">Registration Fee: Only ₹249</p>
          </div>

          {/* Urgency Message */}
          <div className="mt-8 bg-red-50 border border-red-200 rounded-lg p-4 inline-block">
            <p className="text-red-700 font-semibold">
              ⚡ Limited Time: Don't miss India's most rewarding startup competition!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;