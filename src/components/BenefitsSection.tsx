import { FaMedal, FaGraduationCap, FaMoneyBillWave, FaNetworkWired, FaTools, FaRegLightbulb } from 'react-icons/fa';

const BenefitsSection = () => {
  const benefits = [
  
    {
      icon: <FaGraduationCap className="text-4xl text-secondary" />,
      title: "Startup Training & Mentorship",
      description: "Learn from leading entrepreneurs and business experts"
    },
    {
      icon: <FaMoneyBillWave className="text-4xl text-secondary" />,
      title: "Funding & Investor Access",
      description: "Connect with potential investors and business leaders"
    },
    {
      icon: <FaNetworkWired className="text-4xl text-secondary" />,
      title: "Networking & Collaboration",
      description: "Work alongside like-minded innovators"
    },
    {
      icon: <FaTools className="text-4xl text-secondary" />,
      title: "Incubation & Resources",
      description: "Get access to coworking spaces, workshops, and exclusive startup tools"
    },
    {
      icon: <FaRegLightbulb className="text-4xl text-secondary" />,
      title: "Idea Validation",
      description: "Test your concept with industry experts and potential customers"
    }
    ,
    {
      icon: <FaMedal className="text-4xl text-secondary" />,
      title: "Recognition & Awards",
      description: "Showcase your startup and gain recognition in the entrepreneurial community"
    }
  ];

  return (
    <section id="benefits" className="py-20 gradient-bg text-white">
      <div className="container mx-auto px-4">
        {/* Why Join Neo Ventures section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Join Neo Ventures?</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Our program offers comprehensive support to transform your idea into a successful business.
            Here's what you'll gain by joining Neo Ventures:
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:transform hover:scale-105 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-white/80">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* White separator line */}
        <div className="w-full border-t border-white/20 max-w-3xl mx-auto my-16"></div>

        {/* Who Can Apply section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Who Can Apply?</h3>
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4">
              <p className="font-medium">Students, entrepreneurs, or anyone with an innovative business idea</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4">
              <p className="font-medium">Individuals ready to take action and scale their startup</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4">
              <p className="font-medium">Those who are passionate about solving real-world problems</p>
            </div>
          </div>
          <a href="#register" className="btn-secondary inline-block">Apply Now</a>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;