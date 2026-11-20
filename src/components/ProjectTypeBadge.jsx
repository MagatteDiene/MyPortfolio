import { Briefcase, GraduationCap, BookOpen, User } from 'lucide-react';

// Project origin: where/why the project was built.
// Each type gets its own icon + tone so the grid can be scanned at a glance.
export const PROJECT_TYPES = {
  company: {
    label: 'Company project',
    icon: Briefcase,
    light: 'bg-zinc-900 text-white border-zinc-900',
    dark: 'bg-white text-zinc-900 border-white',
  },
  thesis: {
    label: 'Final-year project',
    icon: GraduationCap,
    light: 'bg-accent/5 text-accent border-accent/40',
    dark: 'bg-transparent text-accent-light border-accent-light/50',
  },
  academic: {
    label: 'Academic project',
    icon: BookOpen,
    light: 'bg-zinc-100 text-zinc-700 border-zinc-200',
    dark: 'bg-white/10 text-zinc-200 border-white/20',
  },
  personal: {
    label: 'Personal project',
    icon: User,
    light: 'bg-white text-zinc-600 border-zinc-300 border-dashed',
    dark: 'bg-transparent text-zinc-300 border-zinc-500 border-dashed',
  },
};

const ProjectTypeBadge = ({ type, context, dark = false, className = '' }) => {
  const config = PROJECT_TYPES[type];
  if (!config) return null;
  const Icon = config.icon;

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-[11px] font-semibold uppercase tracking-wider whitespace-nowrap ${
        dark ? config.dark : config.light
      } ${className}`}
    >
      <Icon size={12} strokeWidth={2.25} />
      {config.label}
      {context && <span className="opacity-60 normal-case tracking-normal font-medium">· {context}</span>}
    </span>
  );
};

export default ProjectTypeBadge;
