'use client';

import { FaCode, FaTools, FaMobile, FaNetworkWired, FaPenFancy, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useRef, useState, useEffect } from 'react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Fullstack Development",
      icon: <FaCode className="w-8 h-8" />,
      Frontend_Development_skills: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind CSS"],
      Backend_Development_skills: ["Node.js", "SQL", "MongoDB", "PostgreSQL", "AWS", "REST APIs"]
    },
      
    {
      title: "Data Analysis",
      icon: <FaMobile className="w-8 h-8" />,
      skills: ["Python", "R", "Power BI", "Tableau", "Excel", "SQL", "Report Writing"]
    },
    {
      title: "Networking",
      icon: <FaNetworkWired className="w-8 h-8" />,
      skills: ["Network Configuration", "DHCP Configuration", "Access Control Lists", "Subnetting", "VLANs", "Routing Protocols"]
    },
    {
      title: "Writing",
      icon: <FaPenFancy className="w-8 h-8" />,
      skills: ["Copywriting", "Article Writing", "Academic Writing", "Content Creation", "SEO", "Social Media Marketing"]
    },
    {
      title: "Tools & Platforms",
      icon: <FaTools className="w-8 h-8" />,
      skills: ["Git", "AWS", "VS Code", "Figma", "AI Tools", "Jupyter Notebook"]
    }
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const scroll = (direction: 'left' | 'right', pauseAutoScroll = true) => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth;
      const newScrollPosition = scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
      
      if (pauseAutoScroll) {
        setIsPaused(true);
        // Resume auto-scroll after 5 seconds of inactivity
        setTimeout(() => setIsPaused(false), 5000);
      }
    }
  };

  // Auto-scroll carousel effect
  useEffect(() => {
    if (isPaused) {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
        autoScrollIntervalRef.current = null;
      }
      return;
    }

    autoScrollIntervalRef.current = setInterval(() => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const cardWidth = container.querySelector('div[class*="min-w-"]')?.clientWidth || 300;
        const gap = 32; // gap-8 = 2rem = 32px
        const scrollAmount = cardWidth + gap;
        const maxScroll = container.scrollWidth - container.clientWidth;
        
        if (container.scrollLeft >= maxScroll - 10) {
          // Reset to beginning
          container.scrollTo({
            left: 0,
            behavior: 'smooth'
          });
        } else {
          // Scroll to next card
          container.scrollTo({
            left: container.scrollLeft + scrollAmount,
            behavior: 'smooth'
          });
        }
      }
    }, 3000); // Scroll every 3 seconds

    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    };
  }, [isPaused]);

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Left Arrow */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all transform hover:scale-110 focus:outline-none"
            aria-label="Previous skills"
          >
            <FaChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>

          {/* Skills Container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-8 pb-4 snap-x snap-mandatory scrollbar-hide scroll-smooth"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                onMouseEnter={() => {
                  setHoveredIndex(index);
                  setIsPaused(true);
                }}
                onMouseLeave={() => {
                  setHoveredIndex(null);
                  setIsPaused(false);
                }}
                className={`bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg transition-all duration-300 flex-shrink-0 w-[calc(100%-2rem)] min-w-[300px] max-w-[400px] snap-center overflow-hidden ${
                  hoveredIndex === index 
                    ? 'scale-110 z-50 shadow-2xl shadow-blue-500/50 dark:shadow-blue-400/50 transform-gpu' 
                    : hoveredIndex !== null 
                      ? 'opacity-60 scale-95' 
                      : 'hover:shadow-xl'
                }`}
                style={{
                  transform: hoveredIndex === index ? 'scale(1.1) translateY(-10px)' : hoveredIndex !== null ? 'scale(0.95)' : 'scale(1)',
                  zIndex: hoveredIndex === index ? 50 : hoveredIndex !== null ? 10 : 1,
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                <div className="text-center">
                  <div className={`text-blue-600 dark:text-blue-400 mb-4 flex justify-center transition-transform duration-300 ${
                    hoveredIndex === index ? 'scale-110' : ''
                  }`}>
                    {category.icon}
                  </div>
                  <h3 className={`text-xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300 ${
                    hoveredIndex === index ? 'text-blue-600 dark:text-blue-400' : ''
                  }`}>
                    {category.title}
                  </h3>
                  <ul className="space-y-2">
                    {category.skills ? (
                      category.skills.map((skill, skillIndex) => (
                        <li 
                          key={skillIndex}
                          className="text-gray-600 dark:text-gray-300 flex items-center justify-center"
                        >
                          <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                          {skill}
                        </li>
                      ))
                    ) : (
                      <>
                        {category.Frontend_Development_skills?.map((skill, skillIndex) => (
                          <li 
                            key={`frontend-${skillIndex}`}
                            className="text-gray-600 dark:text-gray-300 flex items-center justify-center"
                          >
                            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                            {skill}
                          </li>
                        ))}
                        {category.Backend_Development_skills?.map((skill, skillIndex) => (
                          <li 
                            key={`backend-${skillIndex}`}
                            className="text-gray-600 dark:text-gray-300 flex items-center justify-center"
                          >
                            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                            {skill}
                          </li>
                        ))}
                      </>
                    )}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all transform hover:scale-110 focus:outline-none"
            aria-label="Next skills"
          >
            <FaChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(59, 130, 246, 0.5);
          }
        }
      `}</style>
    </section>
  );
};

export default SkillsSection; 
