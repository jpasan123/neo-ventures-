import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const MentorsSection = () => {
  const mentors = [
    {
      name: "Keerthi Kodithuwakku",
      position: "Chief executive officer at EffectiveSolution & jendo innovations",
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
      name: "Dr.Sankalpa Gamwarige",
      position: "Director/Board Member at HNB ASSURANCE PLC",
      expertise: "Financial Planning & Investment",
      image: "https://i.ibb.co/237Gxpw4/1704184942-6430.jpg",
      linkedin: "https://www.linkedin.com/in/sankalpa-gamwarige-35a58b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      email: "#"
    },
    {
      name: "Dr.Thisara Weerasinghe",
      position: "Course Director at university of NIBM",
      expertise: "Entrepreneurship & Innovation",
      image: "https://i.ibb.co/1YFr4zDT/462134831-10161559395863381-8439831300265791996-n.jpg",
      linkedin: "https://www.linkedin.com/in/thisara-weerasinghe-687b55a3/?originalSubdomain=lk",
      email: "#"
    }
  ];

  return (
    <section id="mentors" className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Meet Your Mentors & Experts</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Learn from industry leaders who have successfully built and scaled startups.
            Our mentors will guide you through every step of your entrepreneurial journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mentors.map((mentor, index) => (
            <div key={index} className="card overflow-hidden group">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img 
                  src={mentor.image} 
                  alt={mentor.name} 
                  className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-center justify-center md:flex">
                  <div className="flex space-x-4">
                    <a href={mentor.linkedin} target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-secondary transition-colors">
                      <FaLinkedin />
                    </a>
                    <a href={mentor.email} className="text-white text-2xl hover:text-secondary transition-colors">
                      <FaEnvelope />
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-primary">{mentor.name}</h3>
              <p className="text-secondary font-medium">{mentor.position}</p>
              <p className="text-gray-600 mt-2">{mentor.expertise}</p>
              {/* Add visible social links for mobile */}
              <div className="flex space-x-4 mt-3 md:hidden">
                <a 
                  href={mentor.linkedin}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-primary text-xl hover:text-secondary transition-colors"
                >
                  <FaLinkedin />
                </a>
                <a 
                  href={mentor.email}
                  className="text-primary text-xl hover:text-secondary transition-colors"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MentorsSection;