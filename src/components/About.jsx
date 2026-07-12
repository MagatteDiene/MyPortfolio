import { motion } from 'framer-motion';
import { fadeUp, stagger, viewport } from '../motion';

const focusAreas = [
  {
    n: '01',
    title: 'Backend systems',
    desc: 'Laravel APIs (REST & GraphQL), data modeling, and complex business workflows — procurement, real estate, HR.',
  },
  {
    n: '02',
    title: 'Frontend development',
    desc: 'React and AngularJS interfaces, Tailwind CSS, responsive dashboards on top of those backends.',
  },
  {
    n: '03',
    title: 'Applied AI',
    desc: 'RAG pipelines with LangChain and ChromaDB, LLM APIs (OpenAI, Groq), classic ML with scikit-learn.',
  },
];

const About = () => (
  <section id="about" className="py-24 md:py-32">
    <div className="max-container grid lg:grid-cols-[0.38fr,0.62fr] gap-12 lg:gap-20 items-start">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="lg:sticky lg:top-28"
      >
        <motion.p variants={fadeUp} className="kicker mb-4">
          01 · About
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 tracking-tight"
        >
          Full-stack development, backend at the core
        </motion.h2>
      </motion.div>

      <div>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="space-y-6 text-zinc-600 text-lg leading-relaxed mb-14"
        >
          <motion.p variants={fadeUp}>
            I'm a Computer Science graduate of Polytechnic School of Dakar (ESP),
            working as a Fullstack Developer (Backend Focus) at HTSOFT Sénégal since November 2024.
            On the research side, I built SamaVoie, a hybrid RAG system for academic guidance in
            Senegal, as my thesis project.
          </motion.p>
          <motion.p variants={fadeUp}>
            My first year of the engineering cycle ended with a first-place class ranking,
            and I keep the same standard in the code I ship.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          {focusAreas.map((area) => (
            <motion.div
              key={area.n}
              variants={fadeUp}
              className="group grid grid-cols-[3rem,1fr] gap-5 py-7 border-t border-zinc-200 last:border-b"
            >
              <span className="font-display font-semibold text-accent pt-0.5">{area.n}</span>
              <div>
                <h3 className="font-display text-xl font-semibold text-zinc-900 mb-2 group-hover:text-accent transition-colors duration-200">
                  {area.title}
                </h3>
                <p className="text-zinc-600 leading-relaxed">{area.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
