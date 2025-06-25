import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
// Analytics function implementation
const logEvent = (category: string, action: string) => {
  // Replace with actual analytics implementation when available
  console.log(`Analytics: ${category} - ${action}`);
};


const ContactSection = () => {
  const handleLocationClick = () => {
    logEvent('Contact', 'Location clicked');
    window.open('https://maps.google.com/?q=NIBM+City+University+Colombo', '_blank');
  };

  const handleEmailClick = () => {
    logEvent('Contact', 'Email clicked');
  };

  const handlePhoneClick = () => {
    logEvent('Contact', 'Phone clicked');
  };

  return (
    <section className="py-16 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Have Questions?</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Get in touch with our team for more information about Neo Ventures.
            We're here to help you on your entrepreneurial journey.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Email Card */}
          <a 
            href="mailto:neoventures@nibm.lk"
            onClick={handleEmailClick}
            className="card text-center hover:bg-primary hover:text-white group transition-all duration-300 cursor-pointer"
          >
            <div className="flex justify-center mb-4">
              <FaEnvelope className="text-4xl text-secondary group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-primary group-hover:text-white transition-colors mb-2">Email Us</h3>
            <p className="text-gray-700 group-hover:text-white transition-colors">
              neoventures@nibm.lk
            </p>
          </a>

          {/* Phone Card */}
          <a 
            href="tel:0766210120"
            onClick={handlePhoneClick}
            className="card text-center hover:bg-primary hover:text-white group transition-all duration-300 cursor-pointer"
          >
            <div className="flex justify-center mb-4">
              <FaPhone className="text-4xl text-secondary group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-primary group-hover:text-white transition-colors mb-2">Call Us</h3>
            <p className="text-gray-700 group-hover:text-white transition-colors">
              076 621 0120
            </p>
          </a>

          {/* Location Card */}
          <div 
            onClick={handleLocationClick}
            className="card text-center hover:bg-primary hover:text-white group transition-all duration-300 cursor-pointer"
          >
            <div className="flex justify-center mb-4">
              <FaMapMarkerAlt className="text-4xl text-secondary group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-primary group-hover:text-white transition-colors mb-2">Visit Us</h3>
            <p className="text-gray-700 group-hover:text-white transition-colors">
              NIBM City University
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;