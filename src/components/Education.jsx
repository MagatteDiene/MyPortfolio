import { motion } from 'framer-motion';
import { fadeUp, stagger, viewport } from '../motion';
import SectionHeading from './SectionHeading';

const education = [
  {
    degree: "Engineering Technology Degree in Computer Science",
    school: "Polytechnic School of Dakar (ESP)",
    year: "2024 — 2026",
    description: "Graduated. Thesis (SamaVoie): \"Design and implementation of an intelligent web platform for academic guidance in Senegal based on a RAG architecture and LLMs.\""
  },
  {
    degree: "Higher National Diploma (HND) in Computer Science",
    school: "Polytechnic School of Dakar (ESP)",
    year: "2022 — 2024",
    description: "Final-year project: online seminar management platform, built during my internship at HTSOFT."
  },
  {
    degree: "Scientific Baccalaureate (S2)",
    school: "Lycée Sergent Malamine Camara, Dakar",
    year: "2021 — 2022",
    description: "Mathematics and physical sciences track."
  }
];

const Education = () => (
  <section id="education" className="py-24 md:py-32">
    <div className="max-container">
      <SectionHeading kicker="06 · Education" title="Academic background" />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
      >
        {education.map((edu, index) => (
          <motion.div
            key={edu.degree}
            variants={fadeUp}
            className={`group grid md:grid-cols-[11rem,1fr] gap-3 md:gap-8 py-8 border-t border-zinc-200 ${
              index === education.length - 1 ? 'border-b' : ''
            }`}
          >
            <p className="font-display font-semibold text-accent pt-0.5">{edu.year}</p>
            <div>
              <h3 className="font-display text-xl font-semibold text-zinc-900 mb-1 group-hover:text-accent transition-colors duration-200">
                {edu.degree}
              </h3>
              <p className="text-sm text-zinc-500 mb-3">{edu.school}</p>
              <p className="text-zinc-600 leading-relaxed max-w-2xl">{edu.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Education;
