import { motion } from 'framer-motion';
import { fadeUp, stagger, viewport } from '../motion';
import SectionHeading from './SectionHeading';

const techSkills = [
  {
    category: "Languages & Frameworks",
    span: "md:col-span-2",
    items: ["PHP (Laravel)", "JavaScript (React, AngularJS)", "Python (FastAPI, Flask)", "Java", "C#", "HTML/CSS", "Tailwind CSS"],
  },
  {
    category: "AI & Machine Learning",
    span: "",
    items: ["RAG Systems", "RAGAS", "Chatbots & Conversational AI", "LLM Orchestration (LangChain)", "Vector Search (ChromaDB)", "LLM APIs (OpenAI, Groq)", "scikit-learn"],
  },
  {
    category: "Databases",
    span: "",
    items: ["MySQL", "PostgreSQL", "ChromaDB"],
  },
  {
    category: "Tools & Methodologies",
    span: "md:col-span-2",
    items: ["Git", "Docker", "Postman", "UML Modeling", "GraphQL (Rebing)", "Responsive UI/UX"],
  },
];

const Skills = () => (
  <section id="skills" className="py-24 md:py-32">
    <div className="max-container">
      <SectionHeading kicker="02 · Skills" title="Tools I work with" />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="grid md:grid-cols-3 gap-4"
      >
        {techSkills.map((group) => (
          <motion.div
            key={group.category}
            variants={fadeUp}
            className={`card p-7 hover:border-accent/40 transition-colors duration-300 ${group.span}`}
          >
            <h3 className="font-display text-lg font-semibold text-zinc-900 mb-5">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span key={skill} className="chip">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}

        <motion.div
          variants={fadeUp}
          className="card p-7 md:col-span-3 grid md:grid-cols-2 gap-8"
        >
          <div>
            <h3 className="font-display text-lg font-semibold text-zinc-900 mb-3">Languages</h3>
            <p className="text-zinc-600 leading-relaxed">
              French — native · English — professional working proficiency
            </p>
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold text-zinc-900 mb-3">Beyond code</h3>
            <p className="text-zinc-600 leading-relaxed">
              Problem solving, adaptability, clear communication, and teamwork in agile environments.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default Skills;
