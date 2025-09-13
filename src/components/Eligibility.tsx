import React from 'react';
import { CheckCircle, Users, Lightbulb, Building } from 'lucide-react';

const Eligibility: React.FC = () => {
  const sectors = [
    "Technology & AI", "FinTech", "HealthTech", "EdTech", "E-commerce",
    "SaaS", "CleanTech", "AgriTech", "FoodTech", "Social Impact",
    "Gaming", "AR/VR", "Blockchain", "IoT", "Robotics", "Construction"
  ];

  return (
    <section id="eligibility" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Eligibility - <span className="bg-gradient-to-r from-orange-500 to-green-600 bg-clip-text text-transparent">Open for All!</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            PitchKaroIndia believes in democratizing entrepreneurship. No matter where you are in your journey, 
            if you have an innovative idea, you're welcome to participate.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Who Can Apply */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-orange-100">
            <div className="bg-orange-100 p-4 rounded-full w-fit mx-auto mb-6">
              <Users className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Who Can Apply?</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <p className="text-gray-700">College students with innovative ideas</p>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <p className="text-gray-700">Solo founders and entrepreneurs</p>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <p className="text-gray-700">Early-stage startups (up to 3 years)</p>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <p className="text-gray-700">Teams with co-founders</p>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <p className="text-gray-700">Anyone with a scalable business idea</p>
              </div>
            </div>
          </div>

          {/* Requirements */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-green-100">
            <div className="bg-green-100 p-4 rounded-full w-fit mx-auto mb-6">
              <Lightbulb className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Basic Requirements</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <p className="text-gray-700">Original and innovative business idea</p>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <p className="text-gray-700">Clear problem-solution fit</p>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <p className="text-gray-700">Scalable business model</p>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <p className="text-gray-700">Indian residence/citizenship</p>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <p className="text-gray-700">Ability to present in English/Hindi</p>
              </div>
            </div>
          </div>

          {/* What You Need */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100">
            <div className="bg-blue-100 p-4 rounded-full w-fit mx-auto mb-6">
              <Building className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">What You Need</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <p className="text-gray-700">Registration fee: ₹249</p>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <p className="text-gray-700">Business idea description</p>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <p className="text-gray-700">Optional: Pitch deck (under 1MB)</p>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <p className="text-gray-700">Valid contact information</p>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <p className="text-gray-700">Passion to win!</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sectors */}
        <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
            <span className="bg-gradient-to-r from-orange-500 to-green-600 bg-clip-text text-transparent">All Sectors Welcome</span>
          </h3>
          <p className="text-center text-gray-600 mb-8">
            We believe innovation can come from any sector. Here are some examples, but don't limit yourself:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {sectors.map((sector, index) => (
              <div key={index} className="bg-gradient-to-r from-orange-50 to-green-50 p-3 rounded-lg text-center border border-orange-200 hover:shadow-md transition-shadow">
                <p className="text-gray-700 font-medium text-sm">{sector}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-orange-500 to-green-600 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Join India's Biggest Startup Competition?</h3>
            <p className="text-lg mb-6">
              Don't let this opportunity slip away. Register now and take the first step towards winning ₹50+ Lakh!
            </p>
            <a
              href="https://pitchkaroindia.fillout.com/apply"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-orange-600 px-8 py-3 rounded-full font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Register Now - Only ₹249
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Eligibility;