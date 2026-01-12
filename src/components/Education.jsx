import { motion } from 'framer-motion';
import { GraduationCap, Calendar, School, BookOpen } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Engineering Technology Degree in Computer Science",
      school: "École Supérieure Polytechnique (ESP), Dakar",
      year: "2024 - 2026",
      description: "Final-year Engineering Technology Student in Computer Science"
    },
    {
      degree: "Higher National Diploma (HND) in Computer Science",
      school: "École Supérieure Polytechnique (ESP), Dakar",
      year: "2022 - 2024",
      description: "Actively participated in various projects and academic activities."
    },
    {
      degree: "Scientific Baccalaureate (S2)",
      school: "Lycée Sergent Malamine Camara, Dakar",
      year: "2021 - 2022",
      description: "Strong foundation in mathematics and physical sciences."
    }
  ];

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-indigo-600/5 rounded-full blur-[120px] -z-10" />

      <div className="max-container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
            <BookOpen size={16} />
            <span>Academic Journey</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Educational <span className="text-gradient">Background</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            My academic foundation in computer science and engineering, shaped by prestigious Senegalese institutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card p-10 rounded-[3rem] group hover:border-blue-500/30 transition-all duration-500 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Card Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-8 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500 shadow-lg shadow-blue-500/10">
                  <GraduationCap size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors h-14 line-clamp-2">{edu.degree}</h3>
                <div className="text-blue-500/80 font-semibold mb-6 flex items-center gap-2">
                  <School size={16} />
                  <span className="text-sm">{edu.school}</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-8 group-hover:text-slate-300 transition-colors">
                  {edu.description}
                </p>
              </div>
              
              <div className="pt-6 border-t border-white/5 relative z-10">
                <span className="text-slate-500 text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:text-blue-400 transition-colors">
                  <Calendar size={14} className="text-blue-500 group-hover:scale-110 transition-transform" />
                  {edu.year}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
