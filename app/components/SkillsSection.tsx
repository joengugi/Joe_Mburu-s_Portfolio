import { FaCode, FaDatabase, FaTools, FaMobile } from 'react-icons/fa';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <FaCode className="w-8 h-8" />,
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind CSS"]
    },
    {
      title: "Backend Development",
      icon: <FaDatabase className="w-8 h-8" />,
      skills: ["Node.js", "Firebase", "SQL", "MongoDB", "REST APIs"]
    },
    {
      title: "Tools & Platforms",
      icon: <FaTools className="w-8 h-8" />,
      skills: ["Git", "AWS", "VS Code", "Figma", "Azure", "AI Tools"]
    },
    {
      title: "Data Analysis",
      icon: <FaMobile className="w-8 h-8" />,
      skills: ["Python", "R", "Power BI", "Tableau", "Excel"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-blue-600 dark:text-blue-400 mb-4">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li 
                    key={skillIndex}
                    className="text-gray-600 dark:text-gray-300 flex items-center"
                  >
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection; 