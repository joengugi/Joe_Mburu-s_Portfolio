'use client';

import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight, FaCode, FaMobile, FaNetworkWired, FaPenFancy, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useState, useRef, useEffect } from 'react';

type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveLink: string;
  githubLink: string;
};

const projects: Project[] = [
  // Fullstack Development projects (existing)
  {
    title: "Pichcom Graphics",
    description: "A full stack website for a graphics design company in Kenya dealing with both Graphic Design and Printing services.",
    image: "/Pichcom Graphics QR.png",
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    liveLink: "https://pichcom-g.vercel.app/",
    githubLink: "https://github.com/joengugi/Pichcom-graphics/"
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
    title: "RESTful API Backend",
    description: "Scalable REST API built with Node.js and Express, featuring authentication, database integration, and comprehensive documentation.",
    image: "/placeholder.png",
    technologies: ["Node.js", "Express", "PostgreSQL", "REST APIs"],
    liveLink: "https://api-backend-demo.com",
    githubLink: "https://github.com/joengugi/restful-api-backend"
  },

  // Data Analysis projects (5 total, including existing dashboard)
  {
    title: "Data Analysis Dashboard",
    description: "Interactive dashboard for visualizing and analyzing complex datasets. Includes real-time filtering and dynamic charts.",
    image: "/placeholder.png",
    technologies: ["Python", "Power BI", "SQL", "Data Analysis"],
    liveLink: "https://dashboard-demo.com",
    githubLink: "https://github.com/joengugi/dashboard"
  },
  {
    title: "Sales Performance Analyzer",
    description: "A BI solution for tracking sales KPIs across regions, products, and teams with drill-down Power BI reports.",
    image: "/placeholder.png",
    technologies: ["Power BI", "SQL", "Excel", "Data Analysis"],
    liveLink: "https://sales-analyzer-demo.com",
    githubLink: "https://github.com/joengugi/sales-analyzer"
  },
  {
    title: "Customer Churn Insights",
    description: "Analytical project identifying customer churn patterns with data cleaning, feature engineering, and visual reports.",
    image: "/placeholder.png",
    technologies: ["Python", "R", "Tableau", "Report Writing"],
    liveLink: "https://churn-insights-demo.com",
    githubLink: "https://github.com/joengugi/churn-insights"
  },
  {
    title: "Financial Forecasting Notebook",
    description: "Time series analysis of financial data with forecasting models and Jupyter-based visualizations.",
    image: "/placeholder.png",
    technologies: ["Python", "Excel", "SQL", "Data Analysis"],
    liveLink: "https://financial-forecast-demo.com",
    githubLink: "https://github.com/joengugi/financial-forecasting"
  },
  {
    title: "Survey Data Storytelling",
    description: "End-to-end analysis of survey data with dashboards and a written report summarizing key insights.",
    image: "/placeholder.png",
    technologies: ["Tableau", "Excel", "Report Writing", "Data Analysis"],
    liveLink: "https://survey-storytelling-demo.com",
    githubLink: "https://github.com/joengugi/survey-storytelling"
  },

  // Networking projects (5 total)
  {
    title: "Simple Subnetting Project",
    description: "Designed and simulated an office network with two departments and applied subnetting concepts with static addressing.",
    image: "/project1.png",
    technologies: ["VLANs", "Routing Protocols", "Subnetting"],
    liveLink: "https://github.com/joengugi/Simple-Subnetting-Project",
    githubLink: "https://github.com/joengugi/Simple-Subnetting-Project"
  },
  {
    title: "SoHo Network design with three departments",
    description: "Created a scalable Small Office Home Office (SoHo) network design with three departments and separate VLANs.",
    image: "/project2.png",
    technologies: ["Network Configuration", "Routing Protocols", "Subnetting", "VLANs", "DHCP", "Wireless Networking"],
    liveLink: "https://github.com/joengugi/Subnetting-three-departments-with-separate-vlans",
    githubLink: "https://github.com/joengugi/Subnetting-three-departments-with-separate-vlans"
  },
  {
    title: "DHCP & IP Management Lab",
    description: "Configured DHCP services and IP addressing schemes for multiple subnets in a lab environment.",
    image: "/placeholder.png",
    technologies: ["DHCP Configuration", "Subnetting", "Network Configuration"],
    liveLink: "https://dhcp-lab-demo.com",
    githubLink: "https://github.com/joengugi/dhcp-ip-lab"
  },
  {
    title: "Secure Edge Firewall Rules",
    description: "Implemented firewall and ACL rules to control inbound and outbound traffic at the network edge.",
    image: "/placeholder.png",
    technologies: ["Access Control Lists", "Network Configuration"],
    liveLink: "https://edge-firewall-demo.com",
    githubLink: "https://github.com/joengugi/edge-firewall-rules"
  },
  {
    title: "Routing Protocols Comparison",
    description: "Simulated and compared different routing protocols to evaluate convergence and performance.",
    image: "/placeholder.png",
    technologies: ["Routing Protocols", "Network Configuration"],
    liveLink: "https://routing-protocols-demo.com",
    githubLink: "https://github.com/joengugi/routing-protocols-comparison"
  },

  // Writing projects (5 total) - PDFs in public folder
  {
    title: "Academic Research Paper - Value Chains",
    description: "A research paper on how suppliers and distributors add value to products in value chains.",
    image: "/Value Chains.png",
    technologies: ["Academic Writing", "Harvard writing Style", "Critical Analysis"],
    liveLink: "/Value chains.pdf",
    githubLink: ""
  },
  {
    title: "Dissertation - Brexit Impact on EU manufacturing Industries",
    description: "A dissertation on the strategic responses of EU firms to supply chain disruptions post-Brexit.",
    image: "/brexit.jpg",
    technologies: ["Academic writing", "Deep Research", "APA Style"],
    liveLink: "/Brexit Impact on EU manufacturing Industries.pdf",
    githubLink: ""
  },
  {
    title: "Academic Research Paper - Knowledge management and innovation",
    description: "Structured academic paper on the role of knowledge management and innovation in the digital age.",
    image: "/Knowledge-Management.webp",
    technologies: ["Academic Writing", "Harvard writing Style", "Critical Analysis"],
    liveLink: "/Knowledge management and innovation.pdf",
    githubLink: ""
  },
  {
    title: "Dissertation - Corporate Social Responsibility and Competitive Advantage at Unilever",
    description: "A dissertation on the role of corporate social responsibility in competitive advantage using a case study of Unilever.",
    image: "/CSR-Unilever.jpg",
    technologies: ["Academic writing", "Harvard writing Style", "Critical Analysis", "Research"],
    liveLink: "/Corporate Social Responsibility and Competitive Advantage.pdf",
    githubLink: ""
  },
  {
    title: "Academic Research Paper - Emerging Markets",
    description: "A research paper on the opportunities, challenges, and global implications of emerging markets.",
    image: "/Emerging markets.webp",
    technologies: ["Academic writing", "Harvard writing style", "Critical Analysis", "Research"],
    liveLink: "/Implications of Emerging Markets.pdf",
    githubLink: ""
  }
];

// Skill categories matching SkillsSection (excluding Tools & Platforms)
const skillCategories = [
  {
    title: "Fullstack Development",
    icon: FaCode,
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind CSS", "Node.js", "SQL", "MongoDB", "PostgreSQL", "AWS", "REST APIs"]
  },
  {
    title: "Data Analysis",
    icon: FaMobile,
    skills: ["Python", "R", "Power BI", "Tableau", "Excel", "SQL", "Report Writing"]
  },
  {
    title: "Networking",
    icon: FaNetworkWired,
    skills: ["Network Configuration", "DHCP Configuration", "Access Control Lists", "Subnetting", "VLANs", "Routing Protocols"]
  },
  {
    title: "Writing",
    icon: FaPenFancy,
    skills: ["Copywriting", "Article Writing", "Academic Writing", "Content Creation", "SEO", "Social Media Marketing"]
  }
];

// Explicit project-to-category mapping to ensure accurate categorization
const projectCategoryMap: { [key: string]: string } = {
  // Fullstack Development projects
  "Pichcom Graphics": "Fullstack Development",
  "E-commerce Platform": "Fullstack Development",
  "Task Management App": "Fullstack Development",
  "Weather Dashboard": "Fullstack Development",
  "RESTful API Backend": "Fullstack Development",
  
  // Data Analysis projects
  "Data Analysis Dashboard": "Data Analysis",
  "Sales Performance Analyzer": "Data Analysis",
  "Customer Churn Insights": "Data Analysis",
  "Financial Forecasting Notebook": "Data Analysis",
  "Survey Data Storytelling": "Data Analysis",
  
  // Networking projects
  "Simple Subnetting Project": "Networking",
  "SoHo Network design with three departments": "Networking",
  "DHCP & IP Management Lab": "Networking",
  "Secure Edge Firewall Rules": "Networking",
  "Routing Protocols Comparison": "Networking",
  
  // Writing projects
  "Academic Research Paper - Value Chains": "Writing",
  "Dissertation - Brexit Impact on EU manufacturing Industries": "Writing",
  "Academic Research Paper - Knowledge management and innovation": "Writing",
  "Dissertation - Corporate Social Responsibility and Competitive Advantage at Unilever": "Writing",
  "Academic Research Paper - Emerging Markets": "Writing"
};

// Function to match projects to skill categories
const categorizeProjects = (): { [key: string]: Project[] } => {
  const categorized: { [key: string]: Project[] } = {};
  
  // Initialize all categories
  skillCategories.forEach(category => {
    categorized[category.title] = [];
  });

  // Assign projects based on explicit mapping
  projects.forEach(project => {
    const category = projectCategoryMap[project.title];
    if (category && categorized[category]) {
      categorized[category].push(project);
    } else {
      console.warn(`Project "${project.title}" not found in category map.`);
    }
  });

  return categorized;
};

const ProjectCard = ({ project, isHovered, hasAnyHovered, onMouseEnter, onMouseLeave }: { 
  project: Project;
  isHovered: boolean;
  hasAnyHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div 
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg transition-all duration-300 flex-shrink-0 w-[calc(33.333%-1rem)] min-w-[300px] mx-2 snap-center ${
        isHovered 
          ? 'scale-110 z-50 shadow-2xl shadow-blue-500/50 dark:shadow-blue-400/50 transform-gpu' 
          : hasAnyHovered
            ? 'opacity-60 scale-95'
            : 'hover:shadow-xl'
      }`}
      style={{
        transform: isHovered ? 'scale(1.1) translateY(-10px)' : hasAnyHovered ? 'scale(0.95)' : 'scale(1)',
        zIndex: isHovered ? 50 : hasAnyHovered ? 10 : 1,
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
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
        <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${
          isHovered ? 'text-blue-600 dark:text-blue-400' : 'text-gray-900 dark:text-white'
        }`}>
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
        
        <div className={`flex ${project.githubLink ? 'justify-between' : 'justify-end'} items-center`}>
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <FaGithub className="w-6 h-6" />
            </a>
          )}
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            <span>{project.liveLink.endsWith('.pdf') ? 'View PDF' : 'View Project'}</span>
            <FaExternalLinkAlt className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

const ProjectScrollContainer = ({ projects }: { projects: Project[] }) => {
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
        const gap = 16; // gap-4 = 1rem = 16px
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

  if (projects.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500 dark:text-gray-400">
        No projects available for this category.
      </div>
    );
  }

  return (
    <div className="relative mt-4">
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
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {projects.map((project: Project, index: number) => (
          <div key={index} className="snap-center">
            <ProjectCard 
              project={project}
              isHovered={hoveredIndex === index}
              hasAnyHovered={hoveredIndex !== null}
              onMouseEnter={() => {
                setHoveredIndex(index);
                setIsPaused(true);
              }}
              onMouseLeave={() => {
                setHoveredIndex(null);
                setIsPaused(false);
              }}
            />
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
  );
};

const ProjectsSection = () => {
  const categorizedProjects = categorizeProjects();
  const [openCategories, setOpenCategories] = useState<{ [key: string]: boolean }>({});

  const toggleCategory = (categoryTitle: string) => {
    setOpenCategories(prev => ({
      ...prev,
      [categoryTitle]: !prev[categoryTitle]
    }));
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="space-y-4">
          {skillCategories.map((category) => {
            const IconComponent = category.icon;
            const categoryProjects = categorizedProjects[category.title] || [];
            const isOpen = openCategories[category.title] || false;

            return (
              <div 
                key={category.title}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden"
              >
                {/* Dropdown Header */}
                <button
                  onClick={() => toggleCategory(category.title)}
                  className="w-full flex items-center justify-between p-6 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-blue-600 dark:text-blue-400">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {category.title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {categoryProjects.length} {categoryProjects.length === 1 ? 'project' : 'projects'}
                      </p>
                    </div>
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">
                    {isOpen ? (
                      <FaChevronUp className="w-5 h-5" />
                    ) : (
                      <FaChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </button>

                {/* Dropdown Content */}
                {isOpen && (
                  <div className="px-6 pb-6">
                    <ProjectScrollContainer projects={categoryProjects} />
                  </div>
                )}
              </div>
            );
          })}
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
