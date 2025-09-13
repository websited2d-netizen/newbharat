import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "Who can participate in PitchKaroIndia 2025?",
      answer: "Anyone with an innovative business idea can participate! This includes college students, solo founders, early-stage startups (up to 3 years), teams with co-founders, and anyone with a scalable business concept. The competition is open to all sectors - from technology and fintech to social impact and traditional businesses with innovative approaches."
    },
    {
      question: "What is the registration fee and what does it cover?",
      answer: "The registration fee is only ₹249, which covers your application processing, evaluation by expert judges, access to feedback from IIT professors and industry experts, participation in networking events, and eligibility for all prizes and investor meetings. This is an incredibly small investment for access to ₹50+ Lakh prize pool and potential funding opportunities."
    },
    {
      question: "How are winners selected and by whom?",
      answer: "Winners are selected through a comprehensive 7-step process by a panel of 50+ expert judges including IIT professors, active investors, industry leaders, and sector specialists. Evaluation criteria include innovation, market potential, feasibility, business model strength, team capability, and social impact. The process is completely transparent and merit-based."
    },
    {
      question: "What exactly do I need to submit during registration?",
      answer: "During registration, you need to provide your business idea description, basic details about your team/background, contact information, and pay the ₹249 registration fee. You can optionally upload a pitch deck (under 1MB). No complex business plans or detailed financial projections are required at the registration stage."
    },
    {
      question: "When will the prize money be distributed?",
      answer: "Prize money will be distributed immediately after the winners' announcement ceremony on December 1, 2025. Winners will receive their cash prizes through secure bank transfers within 7 working days. All prizes are in Indian Rupees and will be transferred to Indian bank accounts."
    },
    {
      question: "Do I need a fully developed product to participate?",
      answer: "No! You can participate with just an innovative idea, even if you haven't built the product yet. We welcome participants at all stages - from concept to prototype to early revenue. Many of our expected winners will be idea-stage entrepreneurs who demonstrate strong potential and clear execution plans."
    },
    {
      question: "What happens to my intellectual property and idea confidentiality?",
      answer: "Your intellectual property remains 100% yours. PitchKaroIndia signs strict confidentiality agreements and has robust data protection measures. Judges and investors are bound by non-disclosure agreements. Your ideas are completely safe and secure throughout the competition process."
    },
    {
      question: "Can teams participate, and how are prizes distributed among team members?",
      answer: "Yes, teams are welcome! There's no limit on team size. One team member should register as the primary contact, and the prize money will be transferred to the account specified during registration. Teams can decide internally how to distribute the prize money among members."
    },
    {
      question: "What are the investor connection opportunities?",
      answer: "All top 100 participants get access to our network of 20+ active investors and VCs. Winners get guaranteed one-on-one investor meetings, detailed feedback on investment readiness, and introductions to relevant funding networks. Many participants receive funding offers beyond the competition prizes."
    },
    {
      question: "Is there any ongoing support after the competition?",
      answer: "Yes! All winners receive 6 months of free mentorship from IIT professors and industry experts, access to our entrepreneur network, guidance on scaling and fundraising, invitations to exclusive startup events, and continued support for business development and investor connections."
    },
    {
      question: "What if I miss the registration deadline?",
      answer: "Unfortunately, the registration deadline of October 15, 2025, is firm with no extensions possible. We encourage early registration to avoid last-minute technical issues. Registration closes at 11:59 PM IST on October 15, 2025."
    },
    {
      question: "Are there any hidden costs or additional fees?",
      answer: "Absolutely not! The ₹249 registration fee is the only cost. There are no hidden charges, additional fees, or mandatory purchases. Everything including evaluation, feedback, networking events, and investor meetings is included in the registration fee."
    },
    {
      question: "How will I be updated about my application status?",
      answer: "You'll receive regular updates via email and SMS at every stage of the competition. Make sure to provide accurate contact information during registration. You can also contact us at pitchkaroindia@gmail.com for any specific queries about your application status."
    },
    {
      question: "Can international students or NRIs participate?",
      answer: "Yes, as long as you have Indian citizenship or are studying/working in India, you can participate. The business idea should have relevance to the Indian market. Prize money will be distributed in Indian Rupees to Indian bank accounts."
    },
    {
      question: "What makes PitchKaroIndia different from other competitions?",
      answer: "PitchKaroIndia offers India's largest startup prize pool (₹50+ Lakh), evaluation by 50+ expert judges including IIT professors, guaranteed investor access for winners, transparent merit-based selection, ongoing mentorship support, and a truly national platform. Plus, our ₹249 registration fee is incredibly affordable for the value provided."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Frequently <span className="bg-gradient-to-r from-orange-500 to-green-600 bg-clip-text text-transparent">Asked Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Got questions? We've got answers! Find everything you need to know about PitchKaroIndia 2025.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-orange-500 to-green-600 p-2 rounded-full">
                      <HelpCircle className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 pr-4">{faq.question}</h3>
                  </div>
                  {openFAQ === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                
                {openFAQ === index && (
                  <div className="px-8 pb-6 border-t border-gray-100">
                    <div className="pt-4">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-500 to-green-600 text-white p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-lg mb-6">
              We're here to help! Reach out to us for any additional queries or clarifications.
            </p>
            <div className="space-y-4">
              <p className="font-semibold">📧 Email: pitchkaroindia@gmail.com</p>
              <p className="text-sm opacity-90">We respond to all queries within 24 hours</p>
            </div>
            <div className="mt-6">
              <a
                href="https://pitchkaroindia.fillout.com/apply"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-orange-600 px-6 py-3 rounded-full font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Register Now - All Questions Answered!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;