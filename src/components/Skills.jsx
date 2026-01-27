import { motion } from 'framer-motion';

const Skills = () => {
  const techSkills = [
    { category: "Languages & Frameworks", items: ["PHP (Laravel)", "JavaScript (React, AngularJS)", "Java", "Python", "C", "HTML/CSS","Tailwind CSS"] },
    { category: "Tools & Methodologies", items: ["Git/GitHub/Gitlab", "Docker", "Postman", "UML Modeling", "GraphQL (Rebing)", "Responsive UI/UX", "Notions"] },
    { category: "Databases", items: ["MySQL", "PostgreSQL"] },
    { category: "Other", items: ["Network administration", "System Administration","Machine Learning", "AI Integration"] },
  ];

  const coreValues = [
    { title: "Problem Solving", desc: "Designing robust solutions for complex business workflows and high-volume data." },
    { title: "Adaptability", desc: "Swiftly mastering new technologies like GraphQL, Machine Learning, and AI." },
    { title: "Communication", desc: "Effective communication with team members and clients." },
    { title: "Collaboration", desc: "Effective communication and teamwork in agile environments." },
  ];

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
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Technical <span className="text-gradient">Mastery</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the tools I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {techSkills.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 rounded-[2.5rem] group hover:border-blue-500/30 transition-all duration-500"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-blue-500 rounded-full" />
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-xl bg-slate-950/50 border border-white/5 text-slate-400 text-sm font-medium group-hover:text-blue-400 group-hover:border-blue-500/20 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Languages & Core Values */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 rounded-[2.5rem]"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Languages</h3>
            <div className="space-y-6">
              {[
                { name: "French", level: "Native", progress: 100 },
                { name: "English", level: "Professional working proficiency", progress: 65 },
              ].map((lang) => (                <div key={lang.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-white font-semibold">{lang.name}</span>
                    <span className="text-slate-500">{lang.level}</span>
                  </div>
                  <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 rounded-[2.5rem]"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Soft Skills</h3>
            <div className="space-y-4">
              {coreValues.map((value) => (
                <div key={value.title} className="p-4 rounded-2xl bg-slate-950/50 border border-white/5 group hover:border-blue-500/30 transition-all">
                  <h4 className="text-white font-bold mb-1 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    {value.title}
                  </h4>
                  <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">{value.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
