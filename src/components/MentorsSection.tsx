import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';

// Simple event logging utility function
const logEvent = (category: string, action: string) => {
  console.log(`Analytics event: ${category} - ${action}`);
  // Implement actual analytics when you add a library
};

const MentorsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  const mentors = [
    {
      name: "Dr. D. M. A. Kulasooriya",
      position: "Director General at NIBM",
      expertise: "Leadership & Management",
      image: "https://i.ibb.co/JwgmPytQ/Whats-App-Image-2025-06-13-at-16-53-36-0b7bef57.jpg",
      linkedin: "https://www.linkedin.com/in/dr-d-m-a-kulasooriya-57983518/",
      email: "#"
    },
    {
      name: "Keerthi Kodithuwakku",
      position: "CEO, EffectiveSolutions & Jendo Innovations",
      expertise: "Startup & Innovation Expert",
      image: "https://i.ibb.co/YF1gGnVS/464475539-8493908874024053-2062765657774756386-n-1.jpg",
      linkedin: "https://www.bing.com/search?pglt=299&q=keerthii+kodithuwakku+linklindn&cvid=009732158c774783bff03f82cecfc02c&gs_lcrp=EgRlZGdlKgYIABBFGDkyBggAEEUYOdIBCDk2MzlqMGoxqAIIsAIB&FORM=ANNTA1&PC=ASTS",
      email: "mailto:keerthi@effectivesolution.lk"
    },
    {
      name: "Heminda Jayaweera",
      position: "Director at TRACE Expert City",
      expertise: "Business Strategy & Funding",
      image: "https://i.ibb.co/DDRJXbyp/OIP-18.jpg",
      linkedin: "https://www.linkedin.com/in/heminda/?originalSubdomain=lk",
      email: "mailto:heminda@trace.lk"
    },
    {
      name: "Dr. Sankalpa Gamwarige",
      position: "Director at HNB ASSURANCE PLC",
      expertise: "Financial Planning & Investment",
      image: "https://i.ibb.co/237Gxpw4/1704184942-6430.jpg",
      linkedin: "https://www.linkedin.com/in/sankalpa-gamwarige-35a58b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      email: "#"
    },
    {
      name: "Dr. Thisara Weerasinghe",
      position: "Course Director at NIBM",
      expertise: "Entrepreneurship & Innovation",
      image: "https://i.ibb.co/1YFr4zDT/462134831-10161559395863381-8439831300265791996-n.jpg",
      linkedin: "https://www.linkedin.com/in/thisara-weerasinghe-687b55a3/?originalSubdomain=lk",
      email: "#"
    },
    {
      name: "Heshan Karunaratne",
      position: "President of CSSL & CEO at SPIL Labs",
      expertise: "ICT & Leadership",
      image: "https://i.ibb.co/fd14bLYH/Mr-Heshan-1b4e9a0ed2.jpg",
      linkedin: "https://lk.linkedin.com/in/heshankarunaratne",
      email: "#"
    }
  ];

  return (
    <section ref={sectionRef} id="mentors" className="py-12 sm:py-16 md:py-20 bg-light">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="section-title text-2xl sm:text-3xl md:text-4xl">Meet Your Mentors & Experts</h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto mt-4">
            Learn from industry leaders who have successfully built and scaled startups.
            Our mentors will guide you through every step of your entrepreneurial journey.
          </p>
        </div>

        {/* Mobile scroll container */}
        <div className="flex overflow-x-auto pb-6 -mx-4 px-4 md:overflow-visible md:pb-0 md:mx-0 scrollbar-hide">
          <div className="flex flex-nowrap gap-4 md:gap-6 lg:gap-8 md:justify-center w-full">
            {mentors.map((mentor, index) => (
              <div 
                key={index} 
                className={`card overflow-hidden group w-[280px] sm:w-[300px] md:w-48 lg:w-52 flex-shrink-0 flex flex-col transition-all duration-700 ${
                  isVisible 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-[-50px]'
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`
                }}
              >
                <div className="relative overflow-hidden rounded-lg mb-3">
                  <img 
                    src={mentor.image} 
                    alt={mentor.name} 
                    className="w-full h-[280px] sm:h-[300px] md:h-48 lg:h-52 object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <a 
                        href={mentor.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-white text-xl hover:text-secondary transition-colors"
                        onClick={() => logEvent('Mentor', 'LinkedIn profile viewed')}
                      >
                        <FaLinkedin />
                      </a>
                      <a 
                        href={mentor.email} 
                        className="text-white text-xl hover:text-secondary transition-colors"
                        onClick={() => logEvent('Mentor', 'Email contact')}
                      >
                        <FaEnvelope />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex-grow flex flex-col p-2">
                  <h3 className="text-base sm:text-lg md:text-base lg:text-lg font-bold text-primary">{mentor.name}</h3>
                  <p className="text-sm sm:text-base md:text-sm text-secondary font-medium">{mentor.position}</p>
                  <p className="text-sm sm:text-base md:text-sm text-gray-600 mt-1">{mentor.expertise}</p>
                  {/* Mobile social links */}
                  <div className="flex space-x-4 mt-3 md:hidden">
                    <a 
                      href={mentor.linkedin}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="text-primary text-lg sm:text-xl hover:text-secondary transition-colors"
                    >
                      <FaLinkedin />
                    </a>
                    <a 
                      href={mentor.email}
                      className="text-primary text-lg sm:text-xl hover:text-secondary transition-colors"
                    >
                      <FaEnvelope />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorsSection;