import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Building2 } from 'lucide-react';
import { EASE, fadeUp, stagger } from '../motion';
import TechTag from './TechTag';

// Splits a description into leading prose ("intro") and labeled sections
// ("Key highlights:", "My role:", ...), each with its own prose and/or
// bullet ("- ...") lines, so they can get distinct heading treatment.
const parseDescription = (text) => {
  const intro = [];
  const sections = [];
  let current = null;

  for (const raw of text.split('\n')) {
    const line = raw.trim();
    if (!line) continue;

    const isBullet = line.startsWith('- ');
    const isHeading = !isBullet && line.endsWith(':') && line.length < 60;

    if (isHeading) {
      current = { heading: line.slice(0, -1), prose: [], items: [] };
      sections.push(current);
    } else if (isBullet) {
      (current ?? { items: intro }).items.push(line.slice(2));
    } else if (current) {
      current.prose.push(line);
    } else {
      intro.push(line);
    }
  }

  return { intro, sections };
};

const ProjectModal = ({ isOpen, onClose, project }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    if (isOpen) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  if (!project) return null;

  const { intro, sections } = parseDescription(project.fullDescription || project.description);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-zinc-950/50"
          />

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="relative w-full max-w-6xl max-h-[88vh] bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-white/90 hover:bg-white rounded-full text-zinc-600 hover:text-zinc-900 transition-colors border border-zinc-200 shadow-sm"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <div className="overflow-y-auto flex-1">
              {project.video ? (
                <div className="w-full bg-zinc-950 border-b border-zinc-200 p-4 md:p-8 md:pb-6">
                  <video
                    key={project.video}
                    src={project.video}
                    controls
                    autoPlay
                    playsInline
                    preload="metadata"
                    className="w-full max-h-[62vh] rounded-xl ring-1 ring-white/10 bg-black shadow-2xl"
                  />
                  <p className="mt-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                    {project.title} — live demo
                  </p>
                </div>
              ) : project.image && (
                <div className="aspect-[21/9] w-full bg-zinc-100 border-b border-zinc-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              )}

              <div className="p-6 md:p-10">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-zinc-900">
                    {project.title}
                  </h3>
                  {project.badge && (
                    <span className="px-2.5 py-1 rounded-md border border-accent/40 text-accent text-[11px] font-semibold uppercase tracking-wider">
                      {project.badge}
                    </span>
                  )}
                </div>

                {project.clients && (
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="text-xs uppercase tracking-wider text-zinc-400 font-semibold">
                      Used by
                    </span>
                    {project.clients.map((c) => (
                      <span
                        key={c.name}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent text-white text-xs font-semibold whitespace-nowrap"
                      >
                        <Building2 size={12} />
                        {c.name}
                      </span>
                    ))}
                  </div>
                )}

                {project.clients?.some((c) => c.note) && (
                  <div className="mb-6 space-y-1">
                    {project.clients
                      .filter((c) => c.note)
                      .map((c) => (
                        <p key={c.name} className="text-sm text-zinc-500 leading-relaxed">
                          <span className="font-semibold text-zinc-700">{c.name}</span> — {c.note}
                        </p>
                      ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <TechTag key={tag} tag={tag} />
                  ))}
                </div>

                {intro.length > 0 && (
                  <div className="space-y-3 mb-8 max-w-3xl">
                    {intro.map((paragraph, i) => (
                      <p key={i} className="text-zinc-600 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}

                {sections.length > 0 && (
                  <motion.div
                    key={project.title}
                    initial="hidden"
                    animate="show"
                    variants={stagger}
                    className="grid md:grid-cols-2 gap-x-10 gap-y-8"
                  >
                    {sections.map((section, i) => (
                      <motion.div key={section.heading} variants={fadeUp} className="break-inside-avoid">
                        <div className="flex items-center gap-2.5 mb-3">
                          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-accent/10 text-accent text-[11px] font-bold shrink-0">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <h4 className="font-display text-base md:text-lg font-bold text-accent">
                            {section.heading}
                          </h4>
                        </div>

                        {section.prose.length > 0 && (
                          <div className="space-y-2 mb-2 pl-8">
                            {section.prose.map((paragraph, j) => (
                              <p key={j} className="text-sm text-zinc-600 leading-relaxed">
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        )}

                        {section.items.length > 0 && (
                          <ul className="space-y-2 pl-8">
                            {section.items.map((item, j) => (
                              <li key={j} className="flex items-start gap-2.5 text-sm text-zinc-600 leading-relaxed">
                                <span className="mt-[7px] w-1 h-1 rounded-full bg-accent/50 shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        )}
                      </motion.div>
                    ))}
                  </motion.div>
                )}

                {project.link && project.link !== '#' && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-6 py-3 rounded-full transition-colors duration-200"
                  >
                    Visit live site
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
