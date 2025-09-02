import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaExpandAlt } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const EventGallerySection = () => {
  const galleryRef = useRef<HTMLDivElement>(null);

  const galleryImages = [
   
    {
      id: 2,
      src: "https://i.ibb.co/Fbzyyn4W/PXL-20250619-134846431-MP.jpg",
      alt: "Startup Event Opening Session",
      size: "large"
    },
    {
      id: 3,
      src: "https://i.ibb.co/pvQmzcm7/PXL-20250619-135948666.jpg",
      alt: "Panel Discussion",
      size: "medium"
    },
    {
      id: 4,
      src: "https://i.ibb.co/XZZxFBrC/PXL-20250619-141135574.jpg",
      alt: "Mentorship Session",
      size: "large"
    },
    {
      id: 5,
      src: "https://i.ibb.co/yc4qyLmV/PXL-20250619-142844922.jpg",
      alt: "Innovation Workshop",
      size: "medium"
    },
    {
      id: 6,
      src: "https://i.ibb.co/RGKdZp7V/PXL-20250619-143435701.jpg",
      alt: "Startup Presentations",
      size: "large"
    },
    {
      id: 7,
      src: "https://i.ibb.co/nsxxNJVH/PXL-20250619-143643837-MP.jpg",
      alt: "Networking Session",
      size: "medium"
    },
    {
      id: 8,
      src: "https://i.ibb.co/3yWz9QTy/PXL-20250619-133528263.jpg",
      alt: "Entrepreneurship Talk",
      size: "medium"
    },
    {
      id: 9,
      src: "https://i.ibb.co/Myh78Gp5/PXL-20250619-134417059-MP.jpg",
      alt: "Team Building Activity",
      size: "large"
    },
    {
      id: 10,
      src: "https://i.ibb.co/KTJGPnx/PXL-20250619-134846908.jpg",
      alt: "Interactive Session",
      size: "medium"
    },
    {
      id: 11,
      src: "https://i.ibb.co/39L5Wf17/PXL-20250619-134906492.jpg",
      alt: "Startup Showcase",
      size: "large"
    },
    {
      id: 12,
      src: "https://i.ibb.co/8nsLQ80V/PXL-20250619-135942311.jpg",
      alt: "Mentor Meeting",
      size: "medium"
    },
    {
      id: 13,
      src: "https://i.ibb.co/TBZpGzx6/PXL-20250619-141749877.jpg",
      alt: "Group Discussion",
      size: "medium"
    },
    {
      id: 14,
      src: "https://i.ibb.co/7xVB203Z/PXL-20250619-151209061-MP.jpg",
      alt: "Feedback Session",
      size: "large"
    },
    {
      id: 15,
      src: "https://i.ibb.co/Xf9jDnz2/PXL-20250619-133528263.jpg",
      alt: "Collaborative Planning",
      size: "medium"
    },
    {
      id: 16,
      src: "https://i.ibb.co/zHsmjxTm/PXL-20250619-141135343.jpg",
      alt: "Innovation Workshop",
      size: "large"
    },
    // New images added
    {
      id: 17,
      src: "https://i.ibb.co/v4TFRhMp/540162943-1081330527484009-8357277455442181365-n.jpg",
      alt: "Event Presentation",
      size: "large"
    },
    {
      id: 18,
      src: "https://i.ibb.co/HLgBkPY5/538923688-1081330437484018-7873947007329935529-n.jpg",
      alt: "Startup Demo Session",
      size: "medium"
    },
    {
      id: 19,
      src: "https://i.ibb.co/xKRQZPdR/540195006-1081330490817346-9141176000612385710-n.jpg",
      alt: "Networking and Collaboration",
      size: "medium"
    },
    {
      id: 20,
      src: "https://i.ibb.co/nHchnn0/540007368-1081330244150704-6901415683120575851-n.jpg",
      alt: "Innovation Workshop",
      size: "large"
    },
    {
      id: 21,
      src: "https://i.ibb.co/84tg5F5H/540450864-1081330394150689-2919333570632295368-n.jpg",
      alt: "Team Collaboration",
      size: "medium"
    },
    {
      id: 22,
      src: "https://i.ibb.co/5WynNLdD/539498086-1081330324150696-9035991762131647291-n.jpg",
      alt: "Mentorship Session",
      size: "large"
    },
    {
      id: 23,
      src: "https://i.ibb.co/bjrdV8NH/540715533-1081330280817367-7003410195379755226-n.jpg",
      alt: "Event Activities",
      size: "medium"
    },
    {
      id: 24,
      src: "https://i.ibb.co/SXfy5SC5/539196882-1081330454150683-6560476563386399936-n.jpg",
      alt: "Group Learning Session",
      size: "medium"
    },
    {
      id: 25,
      src: "https://i.ibb.co/7dyZwDQw/540269688-1081330320817363-7886258933683587952-n.jpg",
      alt: "Startup Pitch Session",
      size: "large"
    },
    {
      id: 26,
      src: "https://i.ibb.co/99nyQ4mr/540446423-1081330340817361-2447148282599039586-n.jpg",
      alt: "Interactive Discussion",
      size: "medium"
    },
    {
      id: 27,
      src: "https://i.ibb.co/WWYxX8qN/540429698-1081330224150706-5589531965144684044-n.jpg",
      alt: "Knowledge Sharing",
      size: "medium"
    },
    {
      id: 28,
      src: "https://i.ibb.co/xt7cqjT0/540766874-1081330207484041-503317448735530415-n.jpg",
      alt: "Event Coordination",
      size: "large"
    },
    {
      id: 29,
      src: "https://i.ibb.co/Lh9Q2b07/539586767-1081330147484047-7189822994197807318-n.jpg",
      alt: "Startup Showcase",
      size: "medium"
    },
    {
      id: 30,
      src: "https://i.ibb.co/qZZ1M3H/539597711-1081330590817336-5476229149332770859-n.jpg",
      alt: "Event Networking",
      size: "large"
    }
  ];

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    const galleryItems = gallery.querySelectorAll('.gallery-item');
    
    // Initial state - all items hidden
    gsap.set(galleryItems, { opacity: 0, y: 50 });

    // Create the animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: gallery,
        start: 'top center+=100',
        toggleActions: 'play none none reverse'
      }
    });

    // Add items to timeline with stagger effect
    tl.to(galleryItems, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: {
        amount: 1.8,
        grid: [3, 10],
        from: "center"
      },
      ease: "power3.out"
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="py-12 sm:py-20 bg-light">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 sm:mb-4">
            Event Gallery
          </h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto px-4">
            Capturing moments of innovation, learning, and growth at Neo Ventures
          </p>
        </div>

        <div 
          ref={galleryRef} 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3"
        >
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className={`gallery-item relative overflow-hidden rounded-lg group ${
                image.size === 'large' 
                  ? 'sm:col-span-2 md:col-span-1 lg:col-span-2 h-[280px] sm:h-[400px] md:h-[450px]' 
                  : 'h-[260px] sm:h-[320px] md:h-[380px]'
              }`}
            >
              <div className="relative w-full h-full">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className={`w-full h-full transform-gpu transition-all duration-500 group-hover:scale-105 ${
                    // Special handling for images that need full visibility
                    image.id === 13 
                      ? 'object-contain' 
                      : 'object-cover'
                  }`}
                />
                <div 
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-xs sm:text-sm md:text-base font-medium line-clamp-2">
                      {image.alt}
                    </p>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <button 
                    className="bg-white/90 p-2 sm:p-3 rounded-full opacity-0 transform scale-75 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 hover:bg-white shadow-lg"
                    aria-label="View full image"
                  >
                    <FaExpandAlt className="text-primary w-4 h-4 sm:w-5 sm:h-5" />
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