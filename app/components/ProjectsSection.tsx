'use client';

import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useState, useRef } from 'react';

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with Next.js and Tailwind CSS. Features smooth scrolling, dark mode, and interactive components.",
    image: "/placeholder.png",
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    liveLink: "https://your-portfolio.com",
    githubLink: "https://github.com/joengugi/portfolio"
  },
  {
    title: "Data Analysis Dashboard",
    description: "Interactive dashboard for visualizing and analyzing complex datasets. Includes real-time filtering and dynamic charts.",
    image: "/placeholder.png",
    technologies: ["Python", "Power BI", "SQL", "Data Analysis"],
    liveLink: "https://dashboard-demo.com",
    githubLink: "https://github.com/joengugi/dashboard"
  },
  {
    title: "E-commerce Platform",
    description: "Full-featured e-commerce platform with product management, cart functionality, and secure payment integration.",
    image: "/placeholder.png",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    liveLink: "https://ecommerce-demo.com",
    githubLink: "https://github.com/joengugi/ecommerce"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, task assignment, and progress tracking.",
    image: "/placeholder.png",
    technologies: ["React", "Firebase", "Material UI", "Redux"],
    liveLink: "https://task-app-demo.com",
    githubLink: "https://github.com/joengugi/task-app"
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather dashboard with location-based forecasts, interactive maps, and historical weather data.",
    image: "/placeholder.png",
    technologies: ["React", "Weather API", "Charts.js", "Mapbox"],
    liveLink: "https://weather-demo.com",
    githubLink: "https://github.com/joengugi/weather"
  },
  {
    title: "AI Content Generator",
    description: "An AI-powered content generation tool that creates unique articles and social media posts using machine learning.",
    image: "/placeholder.png",
    technologies: ["Python", "TensorFlow", "Flask", "React"],
    liveLink: "https://ai-content-demo.com",
    githubLink: "https://github.com/joengugi/ai-content"
  }
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex-shrink-0 w-[calc(33.333%-1rem)] min-w-[300px] mx-2">
      <div className="relative h-48 w-full bg-gray-200 dark:bg-gray-700">
        {!imageError ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-gray-400">
            <span>Image not available</span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, techIndex) => (
            <span 
              key={techIndex}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            <span>View Project</span>
            <FaExternalLinkAlt className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth;
      const newScrollPosition = scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Left Arrow */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all transform hover:scale-110 focus:outline-none"
            aria-label="Previous projects"
          >
            <FaChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>

          {/* Projects Container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scrollbar-hide scroll-smooth"
          >
            {projects.map((project, index) => (
              <div key={index} className="snap-center">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all transform hover:scale-110 focus:outline-none"
            aria-label="Next projects"
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
        @keyframes slideIn {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slideIn {
          animation: slideIn 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection; 