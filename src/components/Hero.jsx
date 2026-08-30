import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ExternalLink, Github, Linkedin } from 'lucide-react';
import { fadeUp, stagger, EASE } from '../motion';

const nameLines = [
  ['Pape', 'Magatte'],
  ['Ndiaye', 'Diene'],
];

const stats = [
  { value: '02+', label: 'Years of experience' },
  { value: '10+', label: 'Projects built' },
  { value: '1st', label: 'Class rank — 1st year, engineering cycle' },
  { value: '07', label: 'Certifications' },
];

const wordReveal = {
  hidden: { y: '110%' },
  show: { y: 0, transition: { duration: 0.8, ease: EASE } },
};

const Hero = () => {
  const { scrollY } = useScroll();
  const photoY = useTransform(scrollY, [0, 600], [0, 48]);
  const cvMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (cvMenuRef.current && !cvMenuRef.current.contains(e.target)) {
        cvMenuRef.current.open = false;
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-28 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none [background:radial-gradient(700px_circle_at_15%_20%,rgba(61,83,240,0.06),transparent_60%)]" />

      <div className="max-container w-full relative">
        <div className="grid lg:grid-cols-[1.1fr,0.9fr] items-center gap-14">
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.p variants={fadeUp} className="kicker mb-6">
              Software Engineer · AI &amp; Full-Stack Development
            </motion.p>

            <h1 className="font-display text-5xl md:text-7xl font-bold text-zinc-900 tracking-tight leading-[1.04] mb-7">
              {nameLines.map((line, i) => (
                <span key={i} className="block overflow-hidden pb-1 -mb-1">
                  {line.map((word) => (
                    <motion.span key={word} variants={wordReveal} className="inline-block mr-[0.28em] last:mr-0">
                      {word}
                    </motion.span>
                  ))}
                </span>
              ))}
            </h1>

            <motion.p
              variants={fadeUp}
              className="text-zinc-600 text-lg leading-relaxed max-w-xl mb-10"
            >
              Graduate of Polytechnic School of Dakar (ESP) in Computer Science.
              Fullstack Developer (Backend Focus) at HTSOFT since November 2024,
              building Laravel applications with AngularJS and React — and hybrid RAG
              systems on the AI side.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-7 py-3.5 rounded-full transition-colors duration-200"
              >
                View my work
                <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              <details ref={cvMenuRef} className="group relative">
                <summary
                  className="list-none cursor-pointer inline-flex items-center gap-2 border border-zinc-300 group-open:border-zinc-900 group-hover:border-zinc-900 text-zinc-900 font-semibold px-7 py-3.5 rounded-full transition-colors duration-200 [&::-webkit-details-marker]:hidden"
                >
                  View CV
                  <ExternalLink size={18} />
                </summary>
                <div className="absolute left-0 top-full mt-2 w-44 bg-white border border-zinc-200 rounded-2xl shadow-lg overflow-hidden z-20">
                  <a
                    href="/CVFinal-PapeMagatteNdiayeDiene-ENGLISH.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-5 py-3 text-sm font-medium text-zinc-700 hover:bg-zinc-50 hover:text-accent transition-colors duration-150"
                  >
                    English
                  </a>
                  <a
                    href="/CVFinal-PapeMagatteNdiayeDiene-FRENCH.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-5 py-3 text-sm font-medium text-zinc-700 hover:bg-zinc-50 hover:text-accent transition-colors duration-150 border-t border-zinc-100"
                  >
                    Français
                  </a>
                </div>
              </details>
              <div className="flex items-center gap-3 sm:ml-1">
                <a
                  href="https://github.com/MagatteDiene"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-11 h-11 rounded-full border border-zinc-300 flex items-center justify-center text-zinc-500 hover:text-zinc-900 hover:border-zinc-900 transition-colors duration-200"
                >
                  <Github size={19} />
                </a>
                <a
                  href="https://www.linkedin.com/in/pape-magatte-ndiaye-diene-2990862b3/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-11 h-11 rounded-full border border-zinc-300 flex items-center justify-center text-zinc-500 hover:text-zinc-900 hover:border-zinc-900 transition-colors duration-200"
                >
                  <Linkedin size={19} />
                </a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.3 }}
            className="max-w-sm w-full mx-auto lg:max-w-md"
          >
            <div className="relative">
              <div className="absolute -bottom-4 -right-4 w-3/4 h-3/4 bg-accent rounded-[2rem]" />
              <motion.div
                style={{ y: photoY }}
                className="relative rounded-[2rem] overflow-hidden ring-1 ring-zinc-200 bg-white"
              >
                <img
                  src="/pfp_ai.png"
                  alt="Pape Magatte Ndiaye Diene"
                  className="w-full aspect-[4/5] object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </motion.div>
            </div>
            <div className="mt-8 flex items-center justify-between gap-4 text-sm">
              <span className="text-zinc-400 shrink-0">Currently</span>
              <span className="text-zinc-700 font-medium text-right">Fullstack Developer · HTSOFT Sénégal</span>
            </div>
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.7 }}
          className="mt-16 lg:mt-20 pt-8 border-t border-zinc-200 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-3xl md:text-4xl font-bold text-zinc-900 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-zinc-500 leading-snug">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
