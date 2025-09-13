import React from 'react';
import { Shield, Users, Award, TrendingUp, CheckCircle, Coffee } from 'lucide-react';

const FeeExplanation: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Why <span className="bg-gradient-to-r from-orange-500 to-green-600 bg-clip-text text-transparent">₹249 Registration Fee?</span>
          </h2>
          <p className="text-2xl text-gray-700 font-semibold mb-4">Small Step, Big Opportunity</p>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We often get asked – why charge ₹249? The answer is simple and transparent.
          </p>
        </div>

        {/* Main Explanation */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="bg-blue-100 p-4 rounded-full w-fit mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Serious Applicants Only</h3>
                <p className="text-gray-600">To ensure only committed entrepreneurs apply, maintaining quality standards</p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 p-4 rounded-full w-fit mx-auto mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Operational Excellence</h3>
                <p className="text-gray-600">Cover screening, platform costs, and professional jury review processes</p>
              </div>

              <div className="bg-orange-100 p-4 rounded-full w-fit mx-auto mb-4">
                <Award className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Quality Mentorship</h3>
              <p className="text-gray-600">Provide expert evaluation, feedback, and professional guidance</p>
            </div>

            <div className="text-center bg-gradient-to-r from-orange-50 to-green-50 p-6 rounded-xl border border-orange-200">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Coffee className="h-6 w-6 text-orange-600" />
                <p className="text-lg font-semibold text-gray-800">Think of it this way:</p>
              </div>
              <p className="text-xl text-gray-700 italic">
                "Ek chhoti si chai ki keemat par, aap jeet sakte ho ₹50+ Lakh aur investor ka trust."
              </p>
              <p className="text-gray-600 mt-4">
                This small contribution keeps the process fair, efficient, and impactful – giving you access to India's premier national pitching platform.
              </p>
            </div>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Your <span className="bg-gradient-to-r from-orange-500 to-green-600 bg-clip-text text-transparent">₹249 goes back to you in value</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <CheckCircle className="h-8 w-8 text-green-500 mb-4" />
              <h4 className="font-bold text-gray-800 mb-2">Expert Evaluation</h4>
              <p className="text-gray-600 text-sm">Verified assessment by IIT professors and top founders</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <CheckCircle className="h-8 w-8 text-blue-500 mb-4" />
              <h4 className="font-bold text-gray-800 mb-2">National Platform</h4>
              <p className="text-gray-600 text-sm">Access to structured, professional pitching environment</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <CheckCircle className="h-8 w-8 text-purple-500 mb-4" />
              <h4 className="font-bold text-gray-800 mb-2">Investor Feedback</h4>
              <p className="text-gray-600 text-sm">Investment-ready feedback and direct exposure to VCs</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <CheckCircle className="h-8 w-8 text-orange-500 mb-4" />
              <h4 className="font-bold text-gray-800 mb-2">Prize Opportunity</h4>
              <p className="text-gray-600 text-sm">Real shot at the ₹50+ Lakh prize pool and funding</p>
            </div>
          </div>
        </div>

        {/* Banner Message */}
        <div className="text-center bg-gradient-to-r from-orange-500 to-green-600 text-white p-8 rounded-2xl mb-12">
          <TrendingUp className="h-12 w-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">₹249 is not a cost – it's your ticket to India's future of innovation</h3>
          <p className="text-lg">
            Join thousands of entrepreneurs who understand that small investments lead to life-changing opportunities.
          </p>
        </div>

        {/* Final Reminder */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-red-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Opportunities like this don't come every day</h3>
            <p className="text-lg text-gray-700 mb-6">
              One idea, one pitch, one small step can change your life.
            </p>
            <div className="bg-red-50 p-4 rounded-lg mb-6">
              <p className="text-red-700 font-semibold">
                Apply before <strong>October 15, 2025</strong>. Limited entries accepted.
              </p>
            </div>
            <p className="text-xl text-gray-700 italic mb-6">
              "Bharat ke har innovator ke liye ek manch – PitchKaroIndia 2025."
            </p>
            <a
              href="https://pitchkaroindia.fillout.com/apply"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-orange-500 to-green-600 text-white px-8 py-4 rounded-full text-xl font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Register Now →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeeExplanation;