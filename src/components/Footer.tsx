import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo and Description Section */}
          <div className="col-span-1 sm:col-span-2">
            <img 
              src="https://i.ibb.co/5Hfxbxs/466794013-122095479950624948-5743911692005365691-n.jpg" 
              alt="Neo Ventures Logo" 
              className="h-12 sm:h-16 mb-4"
            />
            <p className="text-gray-400 mb-4 max-w-md text-sm sm:text-base">
              Neo Ventures is a startup incubation program designed to help aspiring entrepreneurs 
              bring their business ideas to life through mentorship, funding, and resources.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                <FaFacebook className="text-lg sm:text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                <FaTwitter className="text-lg sm:text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                <FaInstagram className="text-lg sm:text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                <FaLinkedin className="text-lg sm:text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-secondary transition-colors text-sm sm:text-base">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-secondary transition-colors text-sm sm:text-base">About</a></li>
              <li><a href="#benefits" className="text-gray-400 hover:text-secondary transition-colors text-sm sm:text-base">Benefits</a></li>
              <li><a href="#mentors" className="text-gray-400 hover:text-secondary transition-colors text-sm sm:text-base">Mentors</a></li>
              <li><a href="#register" className="text-gray-400 hover:text-secondary transition-colors text-sm sm:text-base">Register</a></li>
            </ul>
          </div>

          {/* Register Section */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold mb-4">Register Now</h3>
            <div className="bg-white p-2 sm:p-3 rounded-lg inline-block">
              <img 
                src="https://i.ibb.co/prKdFcjw/Whats-App-Image-2025-02-27-at-10-55-59-951ade66.jpg" 
                alt="Registration QR Code" 
                className="w-24 h-24 sm:w-32 sm:h-32 object-contain"
              />
              <p className="text-gray-800 text-xs sm:text-sm mt-2 text-center">Scan to Register</p>
            </div>
            <div className="mt-4">
              <h4 className="text-base sm:text-lg font-semibold mb-2">Organizers</h4>
              <ul className="space-y-1 text-gray-400 text-sm sm:text-base">
                <li>NIBM The City University</li>
                <li>TRACE Expert City</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
          <p className="text-gray-400 text-sm sm:text-base">
            &copy; {currentYear} Neo Ventures. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs sm:text-sm mt-2 flex items-center justify-center">
            Made with <FaHeart className="text-secondary mx-1" /> for future entrepreneurs
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;