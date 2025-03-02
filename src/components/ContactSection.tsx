import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';


const ContactSection = () => {
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
          <div className="card text-center hover:bg-primary hover:text-white group transition-all duration-300">
            <div className="flex justify-center mb-4">
              <FaEnvelope className="text-4xl text-secondary group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-primary group-hover:text-white transition-colors mb-2">Email Us</h3>
            <a href="mailto:info@neoventures.lk" className="text-gray-700 group-hover:text-white transition-colors hover:underline">
            keerthi@effectivesolutions.lk
            </a>
          </div>

          <div className="card text-center hover:bg-primary hover:text-white group transition-all duration-300">
            <div className="flex justify-center mb-4">
              <FaPhone className="text-4xl text-secondary group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-primary group-hover:text-white transition-colors mb-2">Call Us</h3>
            <a href="tel:076 621 0120" className="text-gray-700 group-hover:text-white transition-colors hover:underline">
              076 621 0120
            </a>
          </div>

          <div className="card text-center hover:bg-primary hover:text-white group transition-all duration-300">
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