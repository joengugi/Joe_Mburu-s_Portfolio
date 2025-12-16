import Image from 'next/image';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="relative aspect-square max-w-md mx-auto">
              <Image
                src="/Me_core.JPG"
                alt="Joseph Mburu"
                fill
                className="rounded-2xl object-cover shadow-xl"
                priority
              />
            </div>
          </div>
          
          <div className="order-1 md:order-2 space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-300">
              I am a passionate developer with a strong foundation in Full stack Development and Data Analysis. 
              With 3 years of experience in the field, I have had the opportunity to work 
              on diverse projects that have shaped my expertise in React, Next.js, Tailwind CSS, and Python for Data Analysis.
              I also have been freelancing for the past 3 years, and have picked up skills in areas such as Copywriting, article, and academic writing. 
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300">
              My journey in technology began with an interest in designing and building websites, and since then, 
              I have been dedicated to creating impactful solutions that make a difference.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Education</h3>
                <p className="text-gray-600 dark:text-gray-300">Dedan Kimathi University of Technology - Bsc Computer Science</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Experience</h3>
                <p className="text-gray-600 dark:text-gray-300">3 Years of Coding Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;