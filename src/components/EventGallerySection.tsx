import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaExpandAlt } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const EventGallerySection = () => {
  const galleryRef = useRef<HTMLDivElement>(null);

  const galleryImages = [
    {
      id: 1,
      src: "https://i.ibb.co/99mh2MnG/Untitled-design-2.jpg",
      alt: "Neo Ventures Startup Weekend",
    },
    {
      id: 2,
      src: "https://i.ibb.co/HTTbjSmC/Untitled-design-4.jpg",
      alt: "Pitch Perfect Workshop",
    },
    {
      id: 3,
      src: "https://i.ibb.co/hbfDF18/Untitled-design-3.jpg",
      alt: "Innovation Summit",
    },
    {
      id: 4,
      src: "https://i.ibb.co/6jdWKqB/Untitled-design-5.jpg",
      alt: "Mentor Meetup",
    },
    {
      id: 5,
      src: "https://i.ibb.co/ymHHY9n1/Untitled-design-1.jpg",
      alt: "Neo Ventures Workshop",
    },
    {
      id: 6,
      src: "https://i.ibb.co/Z1Ns1DXL/Untitled-design-6.jpg",
      alt: "Entrepreneurship Session",
    },
    {
      id: 7,
      src: "https://i.ibb.co/xKmCCNRb/Untitled-design-7.jpg",
      alt: "Startup Mentoring",
    },
    {
      id: 8,
      src: "https://i.ibb.co/WWJB6Mbf/Untitled-design.jpg",
      alt: "Innovation Hub",
    },
    {
      id: 9,
      src: "https://i.ibb.co/CpTLZBj2/Neo-V.jpg",
      alt: "Neo Ventures Team",
    },
    {
      id: 10,
      src: "https://i.ibb.co/JwSyvQr9/Untitled-1152-x-770-px.jpg",
      alt: "Startup Conference",
    }
  ];

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    const galleryItems = gallery.querySelectorAll('.gallery-item');
    
    gsap.fromTo(galleryItems, 
      {
        opacity: 0,
        y: 20
      },
      {
        scrollTrigger: {
          trigger: gallery,
          start: 'top bottom-=100',
          toggleActions: 'play none none none'
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: {
          amount: 1,
          from: "random"
        },
        ease: "power2.out"
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Event Gallery</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Capturing moments of innovation, learning, and growth at Neo Ventures
          </p>
        </div>

        <div 
          ref={galleryRef} 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="gallery-item relative overflow-hidden rounded-lg group"
            >
              <div className="relative w-full h-full min-h-[250px]">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 bg-gray-100"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white text-sm font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {image.alt}
                    </p>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white/90 p-2 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300 hover:bg-white">
                    <FaExpandAlt className="text-primary w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventGallerySection;