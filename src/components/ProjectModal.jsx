import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Code, CheckCircle2 } from 'lucide-react';

const ProjectModal = ({ isOpen, onClose, project }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/90 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-6xl max-h-[90vh] md:max-h-[85vh] bg-slate-900 border border-white/10 rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 md:top-6 md:right-6 z-50 p-2 bg-slate-950/80 backdrop-blur-md hover:bg-white/10 rounded-full text-white/70 hover:text-white transition-all border border-white/5"
            >
              <X size={20} className="md:w-6 md:h-6" />
            </button>

            {/* Scrollable Content */}
            <div className="overflow-y-auto custom-scrollbar flex-1">
              {/* Image Section */}
              <div className="relative aspect-video w-full min-h-[200px]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                
                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 p-6 md:p-12 w-full">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="text-2xl md:text-5xl font-bold mb-4 line-clamp-2 md:line-clamp-none bg-gradient-to-r from-blue-400 via-indigo-300 to-white bg-clip-text text-transparent">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-[10px] md:text-xs font-bold uppercase tracking-widest"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Details Section */}
              <div className="p-6 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                <div className="md:col-span-2 space-y-6 md:space-y-8">
                  <div className="relative">
                    <div className="hidden md:block absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500/50 to-transparent rounded-full" />
                    <h4 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6 flex items-center gap-3">
                      <div className="p-2 bg-blue-500/10 rounded-lg">
                        <Code className="text-blue-400" size={18} />
                      </div>
                      Project Overview
                    </h4>
                    <div className="space-y-4">
                      {project.fullDescription ? (
                        project.fullDescription.split('\n').map((paragraph, i) => (
                          <p key={i} className="text-slate-400 leading-relaxed text-base md:text-lg whitespace-pre-line">
                            {paragraph}
                          </p>
                        ))
                      ) : (
                        <p className="text-slate-400 leading-relaxed text-lg">
                          {project.description}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-4 hover:bg-white/10 transition-colors group/feat">
                      <div className="p-2 bg-blue-500/10 rounded-xl group-hover/feat:bg-blue-500/20 transition-colors">
                        <CheckCircle2 className="text-blue-400" size={20} />
                      </div>
                      <div>
                        <p className="text-white font-bold mb-1">Modern UI/UX</p>
                        <p className="text-slate-500 text-sm leading-relaxed">Focus on premium user experience and smooth interactions</p>
                      </div>
                    </div>
                    <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-4 hover:bg-white/10 transition-colors group/feat">
                      <div className="p-2 bg-indigo-500/10 rounded-xl group-hover/feat:bg-indigo-500/20 transition-colors">
                        <CheckCircle2 className="text-indigo-400" size={20} />
                      </div>
                      <div>
                        <p className="text-white font-bold mb-1">Robust Architecture</p>
                        <p className="text-slate-500 text-sm leading-relaxed">Scalable and secure backend systems for complex data</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  {/* Action Buttons */}
                  <div className="space-y-4">
                    {project.title === "TamTam FinConnect" && project.link !== "#" && (
                      <motion.a
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-2xl font-bold transition-all shadow-lg shadow-blue-600/20"
                      >
                        <ExternalLink size={20} />
                        Visit Live Site
                      </motion.a>
                    )}
                  </div>

                  {/* Tech Stack Details */}
                  <div className="p-8 rounded-[2rem] bg-slate-950/50 border border-white/5 backdrop-blur-sm relative overflow-hidden group/tech">
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover/tech:opacity-10 transition-opacity">
                      <Code size={80} />
                    </div>
                    <h5 className="text-white font-bold mb-6 uppercase tracking-widest text-[10px] opacity-50 flex items-center gap-2">
                      <div className="w-4 h-[1px] bg-blue-500" />
                      Technologies Used
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <div key={idx} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 text-sm font-medium hover:text-blue-400 hover:border-blue-400/50 transition-all cursor-default">
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
