import { FaQrcode, FaArrowRight, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';


const RegisterSection = () => {
  const registrationLink = "https://shorturl.at/vKYKQ";

  return (
    <section id="register" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Register for Neo Ventures</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Limited slots available! Don't miss this opportunity to transform your idea into reality.
            Apply now and be a part of Sri Lanka's next wave of successful startups!
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-md">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">Scan QR Code to Register</h3>
              <div className="mb-6 p-2 bg-white inline-block rounded-lg">
                <img 
                  src="https://i.ibb.co/prKdFcjw/Whats-App-Image-2025-02-27-at-10-55-59-951ade66.jpg" 
                  alt="Registration QR Code" 
                  className="w-64 h-64 object-contain"
                />
              </div>
              <p className="text-gray-600 mb-6">
                Scan the QR code with your smartphone camera to access the registration form
              </p>
              <a 
                href={registrationLink}
                target="_blank"
                rel="noopener noreferrer" 
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                <span>Register Now</span>
                <FaArrowRight />
              </a>
            </div>
          </div>

          <div className="max-w-md">
            <h3 className="text-2xl font-bold mb-6">How to Apply</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-secondary text-primary rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  1
                </div>
                <div>
                  <h4 className="text-xl font-semibold">Click the Register Now button</h4>
                  <p className="text-white/80">Access our online application form</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-secondary text-primary rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  2
                </div>
                <div>
                  <h4 className="text-xl font-semibold">Fill in your details and business idea</h4>
                  <p className="text-white/80">Tell us about yourself and your innovative concept</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-secondary text-primary rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  3
                </div>
                <div>
                  <h4 className="text-xl font-semibold">Submit your application</h4>
                  <p className="text-white/80">Before 31st March 2025</p>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <FaCalendarAlt className="text-secondary text-xl" />
                <p>Application Deadline: <strong>31st March 2025</strong></p>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-secondary text-xl" />
                <p>Venue: <strong>TRACE Expert City, Colombo</strong></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterSection;