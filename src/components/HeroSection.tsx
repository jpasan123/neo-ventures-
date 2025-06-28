import Slider from 'react-slick';
import { FaRocket, FaLightbulb, FaChartLine } from 'react-icons/fa';

const HeroSection = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    fade: true,
  };

  const registrationLink = "https://shorturl.at/vKYKQ";

  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Turn Your Idea into a Million-Dollar Startup",
      subtitle: "Neo Ventures - The Startup Incubator for Future Entrepreneurs",
      icon: <FaRocket className="text-4xl text-secondary mb-8 mt-16" /> // Added mt-16 and increased mb-4 to mb-8
    },
    // {
    //   id: 2,
    //   image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    //   title: "Win from a Prize Pool of LKR 350,000+",
    //   subtitle: "Gain Expert Mentorship & Exclusive Access to Industry Leaders",
    //   icon: <FaLightbulb className="text-4xl text-secondary mb-8 mt-16" /> // Added mt-16 and increased mb-4 to mb-8
    // },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Kickstart Your Entrepreneurial Journey",
      subtitle: "Connect with Investors & Like-minded Innovators",
      icon: <FaChartLine className="text-4xl text-secondary mb-8 mt-16" /> // Added mt-16 and increased mb-4 to mb-8
    }
];

  return (
    <section id="home" className="relative min-h-screen">
      <div className="hero-slider h-full">
        <Slider {...sliderSettings}>
          {slides.map((slide) => (
            <div key={slide.id} className="relative min-h-screen">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-dark opacity-60"></div>
              </div>
              <div className="relative h-full flex items-center justify-center py-20">
                <div className="container mx-auto px-4 text-center text-white">
                  {slide.icon}
                  <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
                  <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto">{slide.subtitle}</p>
                  
                  <div className="flex justify-center mb-8">
                    <div className="bg-white p-4 sm:p-5 rounded-lg shadow-lg inline-block">
                      <img 
                        src="https://i.ibb.co/prKdFcjw/Whats-App-Image-2025-02-27-at-10-55-59-951ade66.jpg" 
                        alt="Registration QR Code" 
                        className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 object-contain" // Increased sizes
                      />
                      <p className="text-primary text-sm sm:text-base font-medium mt-2">Scan to Register</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                    <a 
                      href={registrationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary px-6 py-2 text-sm sm:text-base"
                    >
                      Register Now
                    </a>
                    <a href="#about" className="btn-primary px-6 py-2 text-sm sm:text-base">Learn More</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default HeroSection;