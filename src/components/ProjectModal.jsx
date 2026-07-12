import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import { EASE } from '../motion';

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

  const paragraphs = (project.fullDescription || project.description).split('\n');

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
              {project.image && (
                <div className="aspect-[21/9] w-full bg-zinc-100 border-b border-zinc-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div className="p-6 md:p-10">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-zinc-900">
                    {project.title}
                  </h3>
                  {project.badge && (
                    <span className="px-2.5 py-1 rounded-md border border-accent/40 text-accent text-[11px] font-semibold uppercase tracking-wider">
                      {project.badge}
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span key={tag} className="chip text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="columns-1 lg:columns-2 gap-x-10 space-y-3">
                  {paragraphs.map((paragraph, i) => (
                    <p key={i} className="text-zinc-600 leading-relaxed whitespace-pre-line break-inside-avoid">
                      {paragraph}
                    </p>
                  ))}
                </div>

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
