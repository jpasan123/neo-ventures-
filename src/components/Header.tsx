import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-0.5' : 'bg-transparent py-1'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <div className="flex items-center">
          <img 
            src="https://i.ibb.co/WpHfdYpr/Logo-Line.png" 
            alt="Neo Ventures Logo" 
            className="w-28 h-auto md:w-36 lg:w-48 object-contain"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-yellow-500 font-medium transition-colors`}>Home</a>
          <a href="#about" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-yellow-500 font-medium transition-colors`}>About</a>
          <a href="#benefits" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-yellow-500 font-medium transition-colors`}>Benefits</a>
          <a href="#mentors" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-yellow-500 font-medium transition-colors`}>Mentors</a>
          <a href="#register" className={`btn-primary ${isScrolled ? 'bg-blue-600' : 'bg-yellow-500'} text-white px-4 py-2 rounded-lg`}>Register Now</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-primary text-2xl p-2 -mr-2 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full">
          <div className="container mx-auto px-4 py-2 flex flex-col">
            <a 
              href="#home" 
              className="text-gray-800 hover:text-yellow-500 font-medium transition-colors py-3 text-base border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#about" 
              className="text-gray-800 hover:text-yellow-500 font-medium transition-colors py-3 text-base border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#benefits" 
              className="text-gray-800 hover:text-yellow-500 font-medium transition-colors py-3 text-base border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Benefits
            </a>
            <a 
              href="#mentors" 
              className="text-gray-800 hover:text-yellow-500 font-medium transition-colors py-3 text-base border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Mentors
            </a>
            <a 
              href="#register" 
              className="btn-primary text-center my-3 py-2.5 rounded-lg text-base"
              onClick={() => setIsMenuOpen(false)}
            >
              Register Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;