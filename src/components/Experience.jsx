import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "HTSOFT SENEGAL",
      role: "Fullstack Developer – Backend Focus",
      period: "November 2024 - Present",
      description: [
        "Participated in full-stack development, testing, and deployment of web applications.",
        "Contributed to the modeling, development, and maintenance of web applications using Laravel and JavaScript (AngularJS / React).",
        "Designed and implemented functional modules, integrated AI-based solutions, and managed and optimized databases.",
        "Collaborated with cross-functional teams to deliver high-quality software solutions."
      ]
    },
    {
      company: "HTSOFT SENEGAL",
      role: "Web Development Intern",
      period: "May 2024 - November 2024",
      description: [
        "Developed an online seminar management platform as part of the final-year project for the Higher National Diploma in Computer Science."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative border-l-2 border-slate-700 ml-4 md:ml-0 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-0"
            >
              <div className="hidden md:block absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-900"></div>
              <div className="md:grid md:grid-cols-12 md:gap-8">
                 {/* Period for Desktop */}
                <div className="hidden md:block md:col-span-3 text-right pt-1">
                  <span className="text-blue-400 font-medium">{exp.period}</span>
                </div>

                {/* Content */}
                <div className="md:col-span-9 bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-colors relative">
                  {/* Mobile Dot */}
                  <div className="md:hidden absolute -left-[41px] top-6 w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-900"></div>
                  
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <div className="text-blue-500 font-medium flex items-center gap-2 mt-1">
                        <Briefcase size={16} />
                        {exp.company}
                      </div>
                    </div>
                    {/* Period for Mobile */}
                    <span className="md:hidden text-blue-400 text-sm mt-2">{exp.period}</span>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.description.map((desc, idx) => (
                      <li key={idx} className="text-gray-300 flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 bg-gray-500 rounded-full flex-shrink-0"></span>
                        <span className="text-sm leading-relaxed">{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
