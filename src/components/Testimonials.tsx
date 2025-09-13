import React from 'react';
import { Quote, Star, Users, Heart } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Finally, a competition that focuses on merit over connections. The ₹50+ Lakh prize pool and investor access make this India's most valuable startup platform.",
      author: "Priya Sharma",
      title: "Venture Capital Partner",
      type: "investor",
      avatar: "👩‍💼"
    },
    {
      quote: "As a student, I've been looking for a platform where my ideas matter more than my background. PitchKaroIndia gives everyone - students, solo founders, teams - an equal shot at success.",
      author: "Arjun Patel",
      title: "Engineering Student, Mumbai",
      type: "student",
      avatar: "👨‍🎓"
    },
    {
      quote: "The comprehensive evaluation process by IIT professors and industry experts, combined with real investment opportunities, makes this a game-changer for Indian startups.",
      author: "Sneha Gupta",
      title: "Former Startup Founder, Now Angel Investor",
      type: "entrepreneur",
      avatar: "👩‍💻"
    }
  ];

  const visionStatements = [
    {
      title: "Democratizing Innovation",
      description: "We believe every brilliant idea deserves a chance to flourish, regardless of the founder's background, location, or connections.",
      icon: Users
    },
    {
      title: "Building India's Future",
      description: "Supporting startups that will drive India's economic growth and solve problems that matter to our nation and the world.",
      icon: Heart
    },
    {
      title: "Merit-Based Success",
      description: "Pure focus on innovation, feasibility, and impact - creating a level playing field where the best ideas win.",
      icon: Star
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Testimonials */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            What Experts Are <span className="bg-gradient-to-r from-orange-500 to-green-600 bg-clip-text text-transparent">Saying</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from the judges, investors, and supporters who believe in PitchKaroIndia's mission
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-orange-500 to-green-600 p-3 rounded-full flex-shrink-0">
                  <Quote className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-700 leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl">{testimonial.avatar}</div>
                    <div>
                      <p className="font-bold text-gray-800">{testimonial.author}</p>
                      <p className="text-sm text-gray-600">{testimonial.title}</p>
                      <div className="flex items-center space-x-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Vision Statements */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our <span className="bg-gradient-to-r from-orange-500 to-green-600 bg-clip-text text-transparent">Vision for India</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {visionStatements.map((vision, index) => (
              <div key={index} className="text-center p-8 bg-gradient-to-br from-orange-50 to-green-50 rounded-2xl shadow-lg border border-orange-200">
                <div className="bg-gradient-to-r from-orange-500 to-green-600 p-4 rounded-full w-fit mx-auto mb-6">
                  <vision.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-4">{vision.title}</h4>
                <p className="text-gray-700 leading-relaxed">{vision.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Success Promise */}
        <div className="bg-gradient-to-r from-orange-500 to-green-600 text-white p-12 rounded-2xl text-center">
          <h3 className="text-3xl font-bold mb-6">🇮🇳 Our Promise to India 🇮🇳</h3>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto mb-8">
            "We commit to creating India's most transparent, merit-based, and rewarding startup platform. 
            Every rupee of prize money will reach deserving winners. Every innovative idea will receive fair evaluation. 
            Every participant will gain valuable insights and connections. This is our pledge to India's entrepreneurial future."
          </p>
          <div className="flex items-center justify-center space-x-8 text-lg font-semibold">
            <div>✅ 100% Transparent</div>
            <div>✅ Merit-Based</div>
            <div>✅ Guaranteed Prizes</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">
            Ready to Be Part of This Revolutionary Platform?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join thousands of innovative minds who are already preparing to compete for ₹50+ Lakh and transform their ideas into reality.
          </p>
          <a
            href="https://pitchkaroindia.fillout.com/apply"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-orange-500 to-green-600 text-white px-8 py-4 rounded-full text-xl font-bold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <span>Join the Revolution - Register Now</span>
          </a>
          <p className="mt-4 text-gray-600">Only ₹249 | Deadline: October 15, 2025</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;