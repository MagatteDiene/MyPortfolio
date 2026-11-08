import { motion } from 'framer-motion';
import { fadeUp, stagger, viewport } from '../motion';
import SectionHeading from './SectionHeading';

const education = [
  {
    degree: "Technology Engineering Degree in Computer Science",
    school: "Polytechnic School of Dakar (ESP)",
    year: "2024 — 2026",
    description: "Graduated. Thesis (SamaVoie): \"Design and implementation of an intelligent web platform for academic guidance in Senegal based on a RAG architecture and LLMs.\"",
    milestones: [
      { year: "Year 1", rank: "Ranked 1st in class", average: "Annual average: 14.88/20" },
      { year: "Year 2", rank: "Ranked 4th in class", average: "Annual average: 15.05/20" },
    ],
  },
  {
    degree: "Higher Technology Diploma in Computer Science",
    school: "Polytechnic School of Dakar (ESP)",
    year: "2022 — 2024",
    description: "Final-year project: online seminar management platform, built during my internship at HTSOFT."
  },
  {
    degree: "Baccalaureate – Science Series (S2)",
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

              {edu.milestones && (
                <div className="mt-6 max-w-md">
                  <div className="relative h-2 mb-3">
                    <div className="absolute left-1 right-1 top-1/2 -translate-y-1/2 h-px bg-zinc-200" />
                    <div className="absolute inset-0 flex justify-between items-center">
                      {edu.milestones.map((m) => (
                        <span key={m.year} className="w-2 h-2 rounded-full bg-accent" />
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between gap-6">
                    {edu.milestones.map((m) => (
                      <div key={m.year}>
                        <p className="text-xs text-zinc-500 mb-0.5">{m.year}</p>
                        <p className="text-sm font-semibold text-zinc-900">{m.rank}</p>
                        <p className="text-xs text-zinc-500 mt-0.5">{m.average}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Education;
