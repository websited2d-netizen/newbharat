import React, { useEffect, useRef, useState } from 'react';
import { Trophy, Medal, Award, Star, Crown } from 'lucide-react';

const Prizes: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const AnimatedNumber: React.FC<{ value: number; suffix?: string }> = ({ value, suffix = '' }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      const duration = 2000;
      const increment = value / (duration / 50);
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, 50);

      return () => clearInterval(timer);
    }, [isVisible, value]);

    return <span>{count.toLocaleString('en-IN')}{suffix}</span>;
  };

  return (
    <section id="prizes" ref={sectionRef} className="py-20 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Prize Pool: <span className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent">₹50+ Lakh</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            India's most rewarding startup competition with substantial cash prizes and invaluable opportunities for growth.
          </p>
        </div>

        {/* Total Prize Pool Counter */}
        <div className="text-center mb-16">
          <div className="bg-white p-8 rounded-3xl shadow-2xl border-4 border-gradient-to-r from-yellow-400 to-orange-500 max-w-md mx-auto">
            <Trophy className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Total Prize Pool</h3>
            <div className="text-5xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
              ₹<AnimatedNumber value={50} />+ Lakh
            </div>
            <p className="text-gray-600 mt-2">Cash + Opportunities</p>
          </div>
        </div>

        {/* Prize Breakdown */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* 1st Prize */}
          <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 p-8 rounded-2xl shadow-lg border-2 border-yellow-300 transform hover:scale-105 transition-all duration-300">
            <div className="text-center">
              <Crown className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-yellow-800 mb-2">1st Prize</h3>
              <div className="text-4xl font-bold text-yellow-600 mb-2">
                ₹10 Lakh
              </div>
              <p className="text-yellow-700 font-semibold">Winner</p>
              <div className="mt-4 space-y-2 text-sm text-yellow-700">
                <p>• Cash Prize: ₹10,00,000</p>
                <p>• Investor Meetings</p>
                <p>• Media Coverage</p>
                <p>• Mentorship Program</p>
              </div>
            </div>
          </div>

          {/* 2nd Prize */}
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-8 rounded-2xl shadow-lg border-2 border-gray-300 transform hover:scale-105 transition-all duration-300">
            <div className="text-center">
              <Medal className="h-12 w-12 text-gray-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">2nd Prize</h3>
              <div className="text-4xl font-bold text-gray-600 mb-2">
                ₹5 Lakh
              </div>
              <p className="text-gray-700 font-semibold">Runner-up</p>
              <div className="mt-4 space-y-2 text-sm text-gray-700">
                <p>• Cash Prize: ₹5,00,000</p>
                <p>• Investor Connect</p>
                <p>• Recognition</p>
                <p>• Networking Access</p>
              </div>
            </div>
          </div>

          {/* 3rd Prize */}
          <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-8 rounded-2xl shadow-lg border-2 border-orange-300 transform hover:scale-105 transition-all duration-300">
            <div className="text-center">
              <Award className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-orange-800 mb-2">3rd Prize</h3>
              <div className="text-4xl font-bold text-orange-600 mb-2">
                ₹3 Lakh
              </div>
              <p className="text-orange-700 font-semibold">Second Runner-up</p>
              <div className="mt-4 space-y-2 text-sm text-orange-700">
                <p>• Cash Prize: ₹3,00,000</p>
                <p>• Mentorship</p>
                <p>• Certificate</p>
                <p>• Platform Access</p>
              </div>
            </div>
          </div>

          {/* 4th Prize */}
          <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-8 rounded-2xl shadow-lg border-2 border-blue-300 transform hover:scale-105 transition-all duration-300">
            <div className="text-center">
              <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-blue-800 mb-2">4th Prize</h3>
              <div className="text-4xl font-bold text-blue-600 mb-2">
                ₹2 Lakh
              </div>
              <p className="text-blue-700 font-semibold">Excellence Award</p>
              <div className="mt-4 space-y-2 text-sm text-blue-700">
                <p>• Cash Prize: ₹2,00,000</p>
                <p>• Recognition</p>
                <p>• Certificate</p>
                <p>• Network Access</p>
              </div>
            </div>
          </div>
        </div>

        {/* Top 30 Special Prize */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-8 rounded-2xl shadow-lg mb-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">Special Recognition Prize</h3>
            <div className="flex items-center justify-center space-x-4 mb-4">
              <Trophy className="h-10 w-10" />
              <div>
                <p className="text-2xl font-bold">Top 30 Finalists</p>
                <p className="text-xl">Each receive ₹1 Lakh</p>
              </div>
              <Trophy className="h-10 w-10" />
            </div>
            <p className="text-lg">
              Beyond the top 4, we recognize the next 30 most promising startups with ₹1 Lakh each plus mentorship and spotlight opportunities.
            </p>
            <p className="text-sm mt-2 opacity-90">
              Total for Top 30: ₹30,00,000 (₹1,00,000 × 30)
            </p>
            <div className="mt-4 bg-white/20 backdrop-blur-sm p-4 rounded-lg">
              <p className="text-lg font-bold">Chhota risk lo, bada jeeto – ₹50+ Lakh ka mauka!</p>
            </div>
          </div>
        </div>

        {/* Additional Benefits */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">Beyond ₹50+ Lakh Cash Prizes</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="text-3xl mb-2">🤝</div>
              <h4 className="font-semibold text-gray-800 mb-2">Investor Connect</h4>
              <p className="text-sm text-gray-600">Direct access to 20+ active investors and VCs</p>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="text-3xl mb-2">🎓</div>
              <h4 className="font-semibold text-gray-800 mb-2">Mentorship</h4>
              <p className="text-sm text-gray-600">Guidance from IIT professors and industry experts</p>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="text-3xl mb-2">📺</div>
              <h4 className="font-semibold text-gray-800 mb-2">Media Coverage</h4>
              <p className="text-sm text-gray-600">National exposure and recognition</p>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="text-3xl mb-2">🌐</div>
              <h4 className="font-semibold text-gray-800 mb-2">Network</h4>
              <p className="text-sm text-gray-600">Join India's most promising entrepreneur community</p>
            </div>
          </div>
          
          {/* Student Certification */}
          <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-200">
            <div className="text-center">
              <div className="text-4xl mb-4">🎓</div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Special for Students</h4>
              <p className="text-gray-700">
                <strong>All student participants receive official participation certificates</strong> from PitchKaroIndia 2025, 
                adding value to your academic and professional portfolio.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://pitchkaroindia.fillout.com/apply"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-full text-xl font-bold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 space-x-3"
          >
            <Trophy className="h-6 w-6" />
            <span>Compete for ₹50+ Lakh</span>
            <Trophy className="h-6 w-6" />
          </a>
          <p className="mt-4 text-gray-600">Registration closes October 15, 2025</p>
        </div>
      </div>
    </section>
  );
};

export default Prizes;