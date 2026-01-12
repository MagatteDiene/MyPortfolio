import { motion } from 'framer-motion';

const Skills = () => {
  const techSkills = [
    { category: "Languages & Frameworks", items: ["PHP (Laravel)", "JavaScript (AngularJS, React)", "Java","Python", "C", "HTML", "CSS"] },
    { category: "Databases", items: ["MySQL", "PostgreSQL"] },
    { category: "Tools & Platforms", items: ["Git/GitHub/Gitlab", "Docker", "Postman", "UML Modeling", "System Administration"] },
    { category: "Other", items: ["Machine Learning", "AI Integration", "Web Application Design", "Network administration"] },
  ];

  const softSkills = ["Problem Solving", "Teamwork & Collaboration", "Adaptability & Curiosity", "Time Management", "Communication"];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
              <span className="w-2 h-8 bg-blue-500 rounded-full"></span>
              Technical Skills
            </h3>
            <div className="space-y-6">
              {techSkills.map((group, index) => (
                <div key={index} className="bg-slate-900 p-6 rounded-xl border border-slate-800">
                  <h4 className="text-lg font-semibold text-blue-400 mb-4">{group.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill, idx) => (
                      <span key={idx} className="px-3 py-1 bg-slate-800 text-gray-300 rounded-full text-sm border border-slate-700 hover:border-blue-500 transition-colors cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills & Languages */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
               <span className="w-2 h-8 bg-purple-500 rounded-full"></span>
               Soft Skills & Languages
            </h3>
            
            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
            >
              {softSkills.map((skill, index) => (
                <motion.div key={index} variants={item} className="bg-slate-900 p-4 rounded-xl border border-slate-800 flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-300 font-medium">{skill}</span>
                </motion.div>
              ))}
            </motion.div>

            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
              <h4 className="text-lg font-semibold text-purple-400 mb-4">Languages</h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">French</span>
                    <span className="text-gray-400 text-sm">Native</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">English</span>
                    <span className="text-gray-400 text-sm">Professional Working Proficiency</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
