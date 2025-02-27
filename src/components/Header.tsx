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
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
        <img 
  src="https://i.ibb.co/YBX0PzTd/466794013-122095479950624948-5743911692005365691-n.jpg" 
  alt="Neo Ventures Logo" 
  className="h-10 w-32 sm:h-10 sm:w-32 md:h-18 md:w-48 lg:h-18 lg:w-40 object-cover rounded-lg" // Added fixed widths and border radius
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className={`${isScrolled ? 'text-blue-600' : 'text-yellow-500'} hover:text-secondary font-medium transition-colors`}>Home</a>
          <a href="#about" className={`${isScrolled ? 'text-blue-600' : 'text-yellow-500'} hover:text-secondary font-medium transition-colors`}>About</a>
          <a href="#benefits" className={`${isScrolled ? 'text-blue-600' : 'text-yellow-500'} hover:text-secondary font-medium transition-colors`}>Benefits</a>
          <a href="#mentors" className={`${isScrolled ? 'text-blue-600' : 'text-yellow-500'} hover:text-secondary font-medium transition-colors`}>Mentors</a>
          <a href="#register" className={`btn-primary ${isScrolled ? 'bg-blue-600' : 'bg-yellow-500'} text-white px-4 py-2 rounded-lg`}>Register Now</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-primary text-2xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#home" 
              className={`${isScrolled ? 'text-blue-600' : 'text-yellow-500'} hover:text-secondary font-medium transition-colors py-2`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#about" 
              className={`${isScrolled ? 'text-blue-600' : 'text-yellow-500'} hover:text-secondary font-medium transition-colors py-2`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#benefits" 
              className={`${isScrolled ? 'text-blue-600' : 'text-yellow-500'} hover:text-secondary font-medium transition-colors py-2`}
              onClick={() => setIsMenuOpen(false)}
            >
              Benefits
            </a>
            <a 
              href="#mentors" 
              className={`${isScrolled ? 'text-blue-600' : 'text-yellow-500'} hover:text-secondary font-medium transition-colors py-2`}
              onClick={() => setIsMenuOpen(false)}
            >
              Mentors
            </a>
            <a 
              href="#register" 
              className="btn-primary text-center"
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