import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  const education = [
    {
      school: "École Supérieure Polytechnique (ESP), Dakar",
      degree: "Engineering Technology Degree in Computer Science",
      year: "2024 - 2026",
      description: "Final-year Engineering Technology Student in Computer Science (Bac+4)."
    },
    {
      school: "École Supérieure Polytechnique (ESP), Dakar",
      degree: "Higher National Diploma (HND) in Computer Science",
      year: "2022 - 2024",
      description: "Actively participated in various projects and academic activities."
    },
    {
      school: "Lycée Sergent Malamine Camara",
      degree: "Scientific Baccalaureate (S2)",
      year: "2021 - 2022",
      description: "Strong foundation in mathematics and physical sciences."
    }
  ];

  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Education</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-900 p-8 rounded-xl border border-slate-800 hover:border-blue-500 transition-colors relative group"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <GraduationCap size={100} />
              </div>
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-4">
                  {edu.year}
                </span>
                <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                <p className="text-gray-400 font-medium mb-4">{edu.school}</p>
                <p className="text-gray-500 text-sm">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
