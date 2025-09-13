import React from 'react';
import { FileText, Search, Users, Trophy, Star, Video, Award } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      step: 1,
      title: "Register Online",
      description: "Fill out the application form with your business idea details and pay the registration fee of ₹249",
      icon: FileText,
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100",
      borderColor: "border-blue-200"
    },
    {
      step: 2,
      title: "Initial Screening",
      description: "Our expert panel reviews all submissions based on innovation, market potential, and feasibility",
      icon: Search,
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-purple-100",
      borderColor: "border-purple-200"
    },
    {
      step: 3,
      title: "Shortlisting",
      description: "Top 100 most promising ideas are selected for the next round of evaluation",
      icon: Users,
      color: "from-green-500 to-green-600",
      bgColor: "from-green-50 to-green-100",
      borderColor: "border-green-200"
    },
    {
      step: 4,
      title: "Detailed Evaluation",
      description: "Comprehensive assessment by IIT professors and industry experts on business model and scalability",
      icon: Star,
      color: "from-orange-500 to-orange-600",
      bgColor: "from-orange-50 to-orange-100",
      borderColor: "border-orange-200"
    },
    {
      step: 5,
      title: "Final Pitching",
      description: "Top 50 startups present their ideas to a panel of investors and judges in a live pitching session",
      icon: Video,
      color: "from-red-500 to-red-600",
      bgColor: "from-red-50 to-red-100",
      borderColor: "border-red-200"
    },
    {
      step: 6,
      title: "Investor Connect",
      description: "Selected startups get direct access to our network of 20+ active investors for funding opportunities",
      icon: Trophy,
      color: "from-indigo-500 to-indigo-600",
      bgColor: "from-indigo-50 to-indigo-100",
      borderColor: "border-indigo-200"
    },
    {
      step: 7,
      title: "Winners Announced",
      description: "Final winners are announced and cash prizes are distributed along with ongoing mentorship support",
      icon: Award,
      color: "from-yellow-500 to-yellow-600",
      bgColor: "from-yellow-50 to-yellow-100",
      borderColor: "border-yellow-200"
    }
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            7-Step <span className="bg-gradient-to-r from-orange-500 to-green-600 bg-clip-text text-transparent">Participation Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From registration to winning - here's your complete journey to potentially winning ₹50+ Lakh and connecting with investors
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 to-green-600 transform -translate-x-1/2"></div>

          <div className="space-y-12">
            {steps.map((stepData, index) => (
              <div key={stepData.step} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                {/* Content */}
                <div className="w-full lg:w-5/12">
                  <div className={`bg-gradient-to-br ${stepData.bgColor} p-8 rounded-2xl shadow-lg border-2 ${stepData.borderColor} hover:shadow-xl transition-all duration-300`}>
                    <div className="flex items-start space-x-4">
                      <div className={`bg-gradient-to-br ${stepData.color} p-3 rounded-full flex-shrink-0`}>
                        <stepData.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <span className={`bg-gradient-to-r ${stepData.color} text-white px-3 py-1 rounded-full text-sm font-bold`}>
                            Step {stepData.step}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-3">{stepData.title}</h3>
                        <p className="text-gray-700 leading-relaxed">{stepData.description}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step Number Circle */}
                <div className="hidden lg:flex w-2/12 justify-center">
                  <div className={`bg-gradient-to-br ${stepData.color} w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-4 border-white`}>
                    <span className="text-white font-bold text-lg">{stepData.step}</span>
                  </div>
                </div>

                {/* Spacer */}
                <div className="hidden lg:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Points */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl border border-orange-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">🎯 What Makes Us Different</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start space-x-2">
                <span className="text-orange-500 font-bold">•</span>
                <span><strong>Transparent Process:</strong> Clear evaluation criteria and timeline</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-orange-500 font-bold">•</span>
                <span><strong>Expert Panel:</strong> IIT professors and industry veterans</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-orange-500 font-bold">•</span>
                <span><strong>Real Impact:</strong> Winners get actual funding opportunities</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-orange-500 font-bold">•</span>
                <span><strong>Ongoing Support:</strong> Mentorship continues beyond the competition</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl border border-green-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">⏱️ Important Timelines</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start space-x-2">
                <span className="text-green-500 font-bold">•</span>
                <span><strong>Registration Deadline:</strong> October 15, 2025</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-500 font-bold">•</span>
                <span><strong>Initial Screening:</strong> October 16-30, 2025</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-500 font-bold">•</span>
                <span><strong>Final Pitching:</strong> November 15-20, 2025</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-500 font-bold">•</span>
                <span><strong>Results Announced:</strong> December 1, 2025</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-orange-500 to-green-600 text-white p-8 rounded-2xl">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h3>
            <p className="text-xl mb-6">
              Join thousands of innovative minds competing for India's biggest startup prize pool!
            </p>
            <a
              href="https://pitchkaroindia.fillout.com/apply"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-orange-600 px-8 py-4 rounded-full text-xl font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300 space-x-3"
            >
              <FileText className="h-6 w-6" />
              <span>Start Step 1 - Register Now</span>
            </a>
            <p className="mt-4 text-sm opacity-90">
              Registration fee: Only ₹249 | Deadline: October 15, 2025
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;