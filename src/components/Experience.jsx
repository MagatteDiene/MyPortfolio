import { motion } from 'framer-motion';
import { Briefcase, Building2, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "HTSOFT SENEGAL",
      role: "Fullstack Developer – Backend Focus",
      period: "November 2024 - Present",
      location: "Dakar, Senegal",
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
      location: "Dakar, Senegal",
      description: [
        "Developed an online seminar management platform as part of the final-year project for the Higher National Diploma in Computer Science."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Professional <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A timeline of my professional experience and the impact I've made in various roles.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 md:p-12 rounded-[3rem] group hover:border-blue-500/30 transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform duration-500">
                    <Briefcase size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-blue-500/80 font-semibold">
                      <Building2 size={16} />
                      {exp.company}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:items-end gap-2">
                  <span className="px-4 py-1.5 rounded-full bg-slate-950/50 border border-white/5 text-slate-400 text-sm font-medium flex items-center gap-2">
                    <Calendar size={14} />
                    {exp.period}
                  </span>
                  <span className="text-slate-500 text-sm font-medium flex items-center gap-2">
                    <MapPin size={14} />
                    {exp.location}
                  </span>
                </div>
              </div>
              <ul className="grid md:grid-cols-2 gap-4">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-400 group-hover:text-slate-300 transition-colors">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
