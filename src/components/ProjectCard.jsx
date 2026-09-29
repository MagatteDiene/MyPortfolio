import { useRef } from 'react';
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useSpring,
  useTransform,
  useReducedMotion,
} from 'framer-motion';
import { ArrowUpRight, Building2 } from 'lucide-react';
import { fadeUp } from '../motion';
import TechTag from './TechTag';

const ProjectCard = ({ project, onSelect }) => {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [6, -6]), { stiffness: 260, damping: 22 });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-6, 6]), { stiffness: 260, damping: 22 });
  const glowX = useTransform(mouseX, (v) => `${v * 100}%`);
  const glowY = useTransform(mouseY, (v) => `${v * 100}%`);
  const glow = useMotionTemplate`radial-gradient(480px circle at ${glowX} ${glowY}, rgba(61,83,240,0.12), transparent 70%)`;

  const handleMouseMove = (e) => {
    if (reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.article
      ref={ref}
      variants={fadeUp}
      whileHover={reduceMotion ? undefined : { y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => onSelect(project)}
      style={{ rotateX, rotateY, transformPerspective: 1200 }}
      className="card relative overflow-hidden group cursor-pointer flex flex-col hover:border-accent/40 hover:shadow-xl hover:shadow-zinc-200/70 transition-[border-color,box-shadow] duration-300 will-change-transform"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: glow }}
      />

      <div className="relative aspect-video overflow-hidden bg-zinc-100 border-b border-zinc-100">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.07]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <span className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-white flex items-center justify-center text-zinc-900 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-md">
          <ArrowUpRight size={16} />
        </span>
      </div>

      <div className="relative p-6 flex flex-col flex-1">
        <h3 className="font-display text-lg font-semibold text-zinc-900 mb-2 group-hover:text-accent transition-colors duration-200">
          {project.title}
        </h3>

        {project.clients ? (
          <div className="flex items-center gap-1.5 mb-3 flex-wrap">
            <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-semibold">
              Used by
            </span>
            {project.clients.map((c) => (
              <span
                key={c.name}
                className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-accent text-white text-[11px] font-semibold whitespace-nowrap"
              >
                <Building2 size={10} />
                {c.name}
              </span>
            ))}
          </div>
        ) : project.badge && (
          <span className="self-start px-2.5 py-0.5 rounded-full border border-accent/40 text-accent text-[11px] font-semibold mb-3">
            {project.badge}
          </span>
        )}

        <p className="text-sm text-zinc-600 leading-relaxed mb-5 line-clamp-3">
          {project.description}
        </p>
        <div className="mt-auto flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <TechTag key={tag} tag={tag} />
          ))}
        </div>
      </div>

      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
    </motion.article>
  );
};

export default ProjectCard;
