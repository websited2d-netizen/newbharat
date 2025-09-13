import React from 'react';
import { GraduationCap, TrendingUp, Building, Users } from 'lucide-react';

const Judges: React.FC = () => {
  return (
    <section id="judges" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Expert <span className="bg-gradient-to-r from-orange-500 to-green-600 bg-clip-text text-transparent">Judges & Investors</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your ideas will be evaluated by India's most respected academics, successful entrepreneurs, and active investors
          </p>
        </div>

        {/* Judge Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg border border-blue-200 text-center">
            <div className="bg-blue-100 p-4 rounded-full w-fit mx-auto mb-6">
              <GraduationCap className="h-10 w-10 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-blue-800 mb-4">IIT Professors</h3>
            <p className="text-blue-700 mb-4">
              Distinguished faculty from premier IIT institutions bringing academic excellence and research expertise
            </p>
            <div className="text-3xl font-bold text-blue-600">10+</div>
            <p className="text-sm text-blue-600">Academic Experts</p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg border border-green-200 text-center">
            <div className="bg-green-100 p-4 rounded-full w-fit mx-auto mb-6">
              <TrendingUp className="h-10 w-10 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-green-800 mb-4">Active Investors</h3>
            <p className="text-green-700 mb-4">
              Venture capitalists and angel investors who are actively funding Indian startups
            </p>
            <div className="text-3xl font-bold text-green-600">20+</div>
            <p className="text-sm text-green-600">Funding Partners</p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl shadow-lg border border-purple-200 text-center">
            <div className="bg-purple-100 p-4 rounded-full w-fit mx-auto mb-6">
              <Building className="h-10 w-10 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-purple-800 mb-4">Industry Leaders</h3>
            <p className="text-purple-700 mb-4">
              Successful entrepreneurs and corporate executives with proven track records
            </p>
            <div className="text-3xl font-bold text-purple-600">15+</div>
            <p className="text-sm text-purple-600">Industry Veterans</p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl shadow-lg border border-orange-200 text-center">
            <div className="bg-orange-100 p-4 rounded-full w-fit mx-auto mb-6">
              <Users className="h-10 w-10 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-orange-800 mb-4">Sector Experts</h3>
            <p className="text-orange-700 mb-4">
              Specialists from diverse sectors ensuring comprehensive evaluation across industries
            </p>
            <div className="text-3xl font-bold text-orange-600">25+</div>
            <p className="text-sm text-orange-600">Domain Specialists</p>
          </div>
        </div>

        {/* Evaluation Criteria */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl shadow-lg mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
            How Your Idea Will Be Evaluated
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">💡</div>
                <h4 className="text-lg font-bold text-gray-800">Innovation</h4>
              </div>
              <p className="text-gray-600 text-sm">
                Uniqueness of the solution, technological advancement, and creative approach to problem-solving
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">🎯</div>
                <h4 className="text-lg font-bold text-gray-800">Market Potential</h4>
              </div>
              <p className="text-gray-600 text-sm">
                Size of target market, demand validation, and potential for significant impact and growth
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">🏗️</div>
                <h4 className="text-lg font-bold text-gray-800">Feasibility</h4>
              </div>
              <p className="text-gray-600 text-sm">
                Technical viability, resource requirements, and realistic execution roadmap
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">💼</div>
                <h4 className="text-lg font-bold text-gray-800">Business Model</h4>
              </div>
              <p className="text-gray-600 text-sm">
                Revenue model clarity, scalability potential, and sustainable competitive advantage
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">👥</div>
                <h4 className="text-lg font-bold text-gray-800">Team Strength</h4>
              </div>
              <p className="text-gray-600 text-sm">
                Founder/team capabilities, domain expertise, and execution track record
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">🌍</div>
                <h4 className="text-lg font-bold text-gray-800">Social Impact</h4>
              </div>
              <p className="text-gray-600 text-sm">
                Positive impact on society, environmental benefits, and contribution to India's growth
              </p>
            </div>
          </div>
        </div>

        {/* Investor Network Benefits */}
        <div className="bg-gradient-to-r from-orange-500 to-green-600 text-white p-8 rounded-2xl mb-12">
          <h3 className="text-3xl font-bold text-center mb-6">Beyond Evaluation - Real Investment Opportunities</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">🤝 Direct Investor Access</h4>
              <ul className="space-y-2 text-sm">
                <li>• One-on-one meetings with interested investors</li>
                <li>• Detailed feedback on your business model</li>
                <li>• Guidance on investment readiness</li>
                <li>• Introduction to relevant funding networks</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">🎓 Ongoing Mentorship</h4>
              <ul className="space-y-2 text-sm">
                <li>• Regular sessions with IIT professors</li>
                <li>• Technical guidance and validation</li>
                <li>• Business strategy development</li>
                <li>• Industry connections and partnerships</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Credibility Markers */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Why Trust PitchKaroIndia?</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-4">
              <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
              <p className="text-gray-600">Expert Judges</p>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-green-600 mb-2">₹50L+</div>
              <p className="text-gray-600">Prize Pool</p>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-blue-600 mb-2">20+</div>
              <p className="text-gray-600">Active Investors</p>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
              <p className="text-gray-600">Transparent Process</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Judges;