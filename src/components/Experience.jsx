import { motion } from 'framer-motion';
import { fadeUp, stagger, viewport } from '../motion';

const experiences = [
  {
    company: "HTSOFT Sénégal",
    role: "Fullstack Developer — Backend Focus",
    period: "November 2024 — Present",
    location: "Dakar, Senegal",
    description: [
      "Full-stack development, testing, and deployment of Laravel business applications with AngularJS and React frontends.",
      "Design and implementation of functional modules, integration of AI-based features, database modeling and optimization.",
      "REST and GraphQL API development, server configuration (Nginx).",
    ],
  },
  {
    company: "HTSOFT Sénégal",
    role: "Web Development Intern",
    period: "May 2024 — November 2024",
    location: "Dakar, Senegal",
    description: [
      "Built an online seminar management platform as the final-year project for the Higher National Diploma in Computer Science.",
    ],
  },
];

const Experience = () => (
  <section id="experience" className="py-24 md:py-32">
    <div className="max-container">
      <div className="bg-zinc-950 rounded-[2rem] p-8 md:p-14 grid lg:grid-cols-[0.32fr,0.68fr] gap-10 lg:gap-16 items-start">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="lg:sticky lg:top-28"
        >
          <motion.p variants={fadeUp} className="kicker !text-accent-light mb-4">
            03 · Experience
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight"
          >
            Where I've worked
          </motion.h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="relative border-l border-white/10 ml-1.5 space-y-14"
        >
          {experiences.map((exp) => (
            <motion.article key={exp.role} variants={fadeUp} className="relative pl-10">
              <span className="absolute -left-[5px] top-2 w-[9px] h-[9px] rounded-full bg-accent-light ring-4 ring-accent/25" />

              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-1">
                <h3 className="font-display text-xl md:text-2xl font-semibold text-white">
                  {exp.role}
                </h3>
                <span className="text-accent-light font-medium">{exp.company}</span>
              </div>
              <p className="text-sm text-zinc-500 mb-5">
                {exp.period} · {exp.location}
              </p>

              <ul className="space-y-2.5">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-zinc-400 leading-relaxed">
                    <span className="mt-2.5 w-1 h-1 rounded-full bg-zinc-600 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default Experience;
