import React from 'react';
import { Calendar, Clock, CheckCircle } from 'lucide-react';

const Timeline: React.FC = () => {
  const timelineEvents = [
    {
      date: "October 15, 2025",
      title: "Registration Deadline",
      description: "Final day to submit your application and secure your spot",
      status: "upcoming",
      color: "red",
      important: true
    },
    {
      date: "October 16-30, 2025",
      title: "Initial Screening",
      description: "Expert panel reviews all submissions for innovation and feasibility",
      status: "upcoming",
      color: "blue"
    },
    {
      date: "November 1, 2025",
      title: "Top 100 Announced",
      description: "Shortlisted participants notified via email and phone",
      status: "upcoming",
      color: "purple"
    },
    {
      date: "November 2-10, 2025",
      title: "Detailed Evaluation",
      description: "In-depth assessment by IIT professors and industry experts",
      status: "upcoming",
      color: "orange"
    },
    {
      date: "November 12, 2025",
      title: "Top 50 Finalists",
      description: "Final pitching round participants announced",
      status: "upcoming",
      color: "green"
    },
    {
      date: "November 15-20, 2025",
      title: "Final Pitching Sessions",
      description: "Live presentations to investors and judges panel",
      status: "upcoming",
      color: "indigo"
    },
    {
      date: "December 1, 2025",
      title: "Winners Announcement",
      description: "Grand finale with prize distribution and media coverage",
      status: "upcoming",
      color: "yellow",
      important: true
    },
    {
      date: "December 2025 Onwards",
      title: "Investor Connect & Mentorship",
      description: "Ongoing support and funding opportunities for winners",
      status: "upcoming",
      color: "pink"
    }
  ];

  const getColorClasses = (color: string, important?: boolean) => {
    const baseClasses = {
      red: { bg: "from-red-50 to-red-100", border: "border-red-200", accent: "bg-red-500", text: "text-red-700" },
      blue: { bg: "from-blue-50 to-blue-100", border: "border-blue-200", accent: "bg-blue-500", text: "text-blue-700" },
      purple: { bg: "from-purple-50 to-purple-100", border: "border-purple-200", accent: "bg-purple-500", text: "text-purple-700" },
      orange: { bg: "from-orange-50 to-orange-100", border: "border-orange-200", accent: "bg-orange-500", text: "text-orange-700" },
      green: { bg: "from-green-50 to-green-100", border: "border-green-200", accent: "bg-green-500", text: "text-green-700" },
      indigo: { bg: "from-indigo-50 to-indigo-100", border: "border-indigo-200", accent: "bg-indigo-500", text: "text-indigo-700" },
      yellow: { bg: "from-yellow-50 to-yellow-100", border: "border-yellow-200", accent: "bg-yellow-500", text: "text-yellow-700" },
      pink: { bg: "from-pink-50 to-pink-100", border: "border-pink-200", accent: "bg-pink-500", text: "text-pink-700" }
    };

    return baseClasses[color as keyof typeof baseClasses] || baseClasses.blue;
  };

  return (
    <section id="timeline" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Competition <span className="bg-gradient-to-r from-orange-500 to-green-600 bg-clip-text text-transparent">Timeline</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your complete roadmap from registration to winning ₹50+ Lakh. Mark these important dates in your calendar!
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="mb-12">
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-800">Current Phase</h3>
              <div className="flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full">
                <Clock className="h-4 w-4 text-green-600" />
                <span className="text-green-700 font-semibold">Registration Open</span>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-gradient-to-r from-orange-500 to-green-600 h-3 rounded-full" style={{width: "15%"}}></div>
            </div>
            <p className="text-sm text-gray-600 mt-2">Registration Phase (15% Complete)</p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 to-green-600 hidden md:block"></div>

          <div className="space-y-8">
            {timelineEvents.map((event, index) => {
              const colorClasses = getColorClasses(event.color, event.important);
              
              return (
                <div key={index} className="flex items-start space-x-6">
                  {/* Timeline Dot */}
                  <div className="hidden md:flex flex-col items-center">
                    <div className={`w-8 h-8 ${colorClasses.accent} rounded-full flex items-center justify-center shadow-lg border-4 border-white`}>
                      <Calendar className="h-4 w-4 text-white" />
                    </div>
                  </div>

                  {/* Event Card */}
                  <div className={`flex-1 bg-gradient-to-br ${colorClasses.bg} p-6 rounded-2xl border-2 ${colorClasses.border} shadow-lg hover:shadow-xl transition-all duration-300 ${event.important ? 'border-l-8 border-l-red-500' : ''}`}>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <div className="flex items-center space-x-3 mb-2 md:mb-0">
                        <div className={`w-3 h-3 ${colorClasses.accent} rounded-full`}></div>
                        <h3 className="text-xl font-bold text-gray-800">{event.title}</h3>
                        {event.important && (
                          <div className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                            IMPORTANT
                          </div>
                        )}
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className={`h-4 w-4 ${colorClasses.text}`} />
                        <span className={`font-semibold ${colorClasses.text}`}>{event.date}</span>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{event.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Important Reminders */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-red-50 border-2 border-red-200 p-6 rounded-2xl">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-red-500 p-2 rounded-full">
                <Clock className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-red-700">⚠️ Critical Deadline</h3>
            </div>
            <p className="text-red-700 mb-3">
              <strong>October 15, 2025</strong> is the absolute final date for registration. 
              No extensions will be provided under any circumstances.
            </p>
            <a
              href="https://pitchkaroindia.fillout.com/apply"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-red-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-red-600 transition-colors"
            >
              Register Now
            </a>
          </div>

          <div className="bg-green-50 border-2 border-green-200 p-6 rounded-2xl">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-green-500 p-2 rounded-full">
                <CheckCircle className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-green-700">📋 Stay Updated</h3>
            </div>
            <p className="text-green-700 mb-3">
              All registered participants will receive email and SMS updates for each phase. 
              Ensure your contact details are accurate during registration.
            </p>
            <p className="text-sm text-green-600">
              Contact: pitchkaroindia@gmail.com for any queries
            </p>
          </div>
        </div>

        {/* Next Steps */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-orange-500 to-green-600 text-white p-8 rounded-2xl">
            <h3 className="text-3xl font-bold mb-4">Don't Wait - Start Your Journey Today!</h3>
            <p className="text-xl mb-6">
              Every day you delay is a day closer to missing out on ₹50+ Lakh and incredible opportunities.
            </p>
            <a
              href="https://pitchkaroindia.fillout.com/apply"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-orange-600 px-8 py-4 rounded-full text-xl font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300 space-x-3"
            >
              <Calendar className="h-6 w-6" />
              <span>Secure Your Spot Now</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;