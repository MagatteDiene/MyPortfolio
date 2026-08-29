import { motion } from 'framer-motion';
import { fadeUp, stagger, viewport } from '../motion';

const experiences = [
  {
    company: "HTSOFT Sénégal",
    role: "Fullstack Developer — Backend Focus",
    period: "November 2024 — Present",
    location: "Dakar, Senegal",
    description: [
      "Designed and built functional modules for several production business applications: a procurement, logistics & distribution ERP, an HR information system, and a real estate management platform.",
      "Integrated AI-based features into existing applications, notably an automated CV pre-screening module.",
      "Contributed to UML modeling and technical architecture across several applications, from functional design through deployment.",
    ],
  },
  {
    company: "HTSOFT Sénégal",
    role: "Web Development Intern",
    period: "May 2024 — November 2024",
    location: "Dakar, Senegal",
    description: [
      "Designed and built an online seminar management platform end-to-end in Laravel, from data modeling to delivery.",
      "Led the project independently as a final-year internship, validated for the Higher Technology Diploma in Computer Science.",
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
