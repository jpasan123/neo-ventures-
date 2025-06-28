import { FaTrophy, FaUsers, FaHandshake } from 'react-icons/fa';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">About Neo Ventures</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Neo Ventures is a startup incubation program designed to help aspiring entrepreneurs 
            bring their business ideas to life! This is your chance to gain expert mentorship, 
            funding opportunities, and exclusive access to industry leaders to kickstart your venture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card text-center">
            <div className="flex justify-center">
              <FaTrophy className="text-5xl text-secondary mb-4" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">Win Big Prizes</h3>
            <p className="text-gray-700">
              Compete for a prestigious prize pool worth over half a million rupees, including seed funding, mentorship opportunities, and exclusive resources to transform your vision into reality.
            </p>
          </div>

          <div className="card text-center">
            <div className="flex justify-center">
              <FaUsers className="text-5xl text-secondary mb-4" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">Expert Mentorship</h3>
            <p className="text-gray-700">
              Learn from leading entrepreneurs and business experts who will guide you through every step of your startup journey.
            </p>
          </div>

          <div className="card text-center">
            <div className="flex justify-center">
              <FaHandshake className="text-5xl text-secondary mb-4" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">Investor Access</h3>
            <p className="text-gray-700">
              Connect with potential investors and business leaders who can help take your startup to the next level.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-4 bg-primary text-white rounded-lg">
            <p className="text-xl font-bold">Application Deadline: 30th June 2025</p>
            <p className="text-lg">Organized by: NIBM The City University | TRACE Expert City</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;