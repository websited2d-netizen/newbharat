import React from 'react';
import { FileText, Shield, Award, Users, AlertTriangle, Scale } from 'lucide-react';

const TermsConditions: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Terms & <span className="bg-gradient-to-r from-orange-500 to-green-600 bg-clip-text text-transparent">Conditions</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            PitchKaroIndia 2025
          </p>
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-4xl mx-auto">
            <p className="text-gray-700 leading-relaxed">
              Welcome to <strong>PitchKaroIndia 2025</strong>. By registering and participating in this event, 
              you agree to comply with the following Terms & Conditions. Please read them carefully before applying.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Section 1: Eligibility */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-blue-500 p-3 rounded-full">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">1. Eligibility</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>Open to <strong>all participants</strong> including:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>School students (innovators)</li>
                <li>College/university students</li>
                <li>Individual entrepreneurs</li>
                <li>Startups at any stage</li>
              </ul>
              <ul className="space-y-2">
                <li>• Participants can apply as an individual or as a team.</li>
                <li>• Applicants must be Indian citizens or startups registered in India.</li>
                <li>• Organizers reserve the right to request identity or institutional proof at any stage.</li>
              </ul>
            </div>
          </div>

          {/* Section 2: Registration & Fees */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border border-green-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-green-500 p-3 rounded-full">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">2. Registration & Fees</h2>
            </div>
            <div className="space-y-3 text-gray-700">
              <p>• Registration fee is <strong>₹249 (non-refundable)</strong>.</p>
              <p>• Registration is only valid upon successful payment and submission of proof.</p>
              <p>• Participants are responsible for ensuring correct details during registration.</p>
              <p>• Any false or misleading information may result in immediate rejection.</p>
            </div>
          </div>

          {/* Section 3: Submission Guidelines */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl border border-purple-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-purple-500 p-3 rounded-full">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">3. Submission Guidelines</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>Participants must provide:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Idea details</li>
                <li>Problem statement being solved</li>
                <li>USP (Unique Selling Proposition)</li>
                <li>Optional pitch deck (PDF, under 1MB)</li>
              </ul>
              <ul className="space-y-2">
                <li>• Submissions must be original. Plagiarized or copied ideas will be disqualified.</li>
                <li>• All materials should be in English or Hindi.</li>
              </ul>
            </div>
          </div>

          {/* Section 4: Shortlisting & Evaluation */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl border border-orange-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-orange-500 p-3 rounded-full">
                <Scale className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">4. Shortlisting & Evaluation</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>• Shortlisting will be carried out by <strong>experts, top founders, investors, and professors from IITs and other reputed institutions</strong>.</p>
              <p>Evaluation criteria include:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Innovation & creativity</li>
                <li>Feasibility & scalability</li>
                <li>Problem-solving potential</li>
                <li>Team capability</li>
              </ul>
              <ul className="space-y-2">
                <li>• The <strong>jury/organizers' decision will be final and binding</strong>.</li>
                <li>• Organizers reserve full authority to reject any submission without explanation.</li>
              </ul>
            </div>
          </div>

          {/* Section 5: Prize Pool & Rewards */}
          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-2xl border border-yellow-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-yellow-500 p-3 rounded-full">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">5. Prize Pool & Rewards</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>• Total prize pool: <strong>₹50 Lakh+</strong></p>
              <p>Prize distribution:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>1st Prize:</strong> ₹10 Lakh</li>
                <li><strong>2nd Prize:</strong> ₹5 Lakh</li>
                <li><strong>3rd Prize:</strong> ₹3 Lakh</li>
                <li><strong>4th Prize:</strong> ₹2 Lakh</li>
                <li><strong>Top 30 Finalists:</strong> Consolation prize of ₹1 Lakh each</li>
              </ul>
              <ul className="space-y-2">
                <li>• Prizes may include cash, incubation, mentorship, or services.</li>
                <li>• Taxes and compliance (if applicable) are the responsibility of winners.</li>
                <li>• Organizers reserve the right to modify, postpone, or withdraw prizes under special circumstances.</li>
              </ul>
            </div>
          </div>

          {/* Section 6: Event Rights & Changes */}
          <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl border border-red-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-red-500 p-3 rounded-full">
                <AlertTriangle className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">6. Event Rights & Changes</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>Organizers reserve the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Change event dates, format, or structure.</li>
                <li>Cancel or withdraw the event in unforeseen situations.</li>
                <li>Modify prize distribution or participant rules if necessary.</li>
              </ul>
              <p>• In case of cancellation, registration fees will not be refunded.</p>
            </div>
          </div>

          {/* Section 7: Code of Conduct */}
          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-2xl border border-indigo-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-indigo-500 p-3 rounded-full">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">7. Code of Conduct</h2>
            </div>
            <div className="space-y-3 text-gray-700">
              <p>• Participants must act professionally and respectfully throughout the event.</p>
              <p>• Harassment, misconduct, or misrepresentation will lead to disqualification.</p>
              <p>• Any fraudulent activity will invite legal action.</p>
            </div>
          </div>

          {/* Section 8: Intellectual Property & Confidentiality */}
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-2xl border border-teal-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-teal-500 p-3 rounded-full">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">8. Intellectual Property & Confidentiality</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>• Intellectual property of submitted ideas remains with participants.</p>
              <p>By participating, you grant PitchKaroIndia the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Use submitted ideas, pitches, or content for event promotion, marketing, or media.</li>
                <li>Showcase selected pitches to investors, jury, or public audiences.</li>
              </ul>
              <p>• Organizers are not liable for maintaining confidentiality of submissions, as pitches will be shared in open forums.</p>
            </div>
          </div>

          {/* Section 9: Liability Disclaimer */}
          <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-8 rounded-2xl border border-pink-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-pink-500 p-3 rounded-full">
                <AlertTriangle className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">9. Liability Disclaimer</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>PitchKaroIndia organizers will not be responsible for:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Technical errors, delays, or unforeseen disruptions.</li>
                <li>Any commitments made by investors, mentors, or partners.</li>
                <li>Any financial, legal, or operational challenges faced by participants post-event.</li>
              </ul>
              <p>• Participation is entirely at the risk of the applicant.</p>
            </div>
          </div>

          {/* Section 10: Organizer's Authority */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl border border-gray-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gray-500 p-3 rounded-full">
                <Scale className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">10. Organizer's Authority</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>• The organizers' decision is <strong>final and non-contestable</strong>.</p>
              <p>Organizers have the absolute right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Reject applications without reason.</li>
                <li>Disqualify participants violating rules.</li>
                <li>Withdraw prizes if fraudulent activity is detected.</li>
              </ul>
            </div>
          </div>

          {/* Final Disclaimer */}
          <div className="bg-gradient-to-r from-orange-500 to-green-600 text-white p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-4">Final Disclaimer</h3>
            <p className="text-lg leading-relaxed">
              By registering for PitchKaroIndia 2025, you acknowledge that you have read, understood, 
              and agreed to all Terms & Conditions listed above.
            </p>
            <div className="mt-6 bg-white/20 backdrop-blur-sm p-4 rounded-lg">
              <p className="font-semibold">
                📧 For support or queries, contact: <a href="mailto:pitchkaroindia@gmail.com" className="underline">pitchkaroindia@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsConditions;