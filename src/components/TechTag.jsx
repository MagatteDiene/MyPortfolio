import { getTechIcon } from '../techIcons';

const TechTag = ({ tag, dark = false }) => {
  const icon = getTechIcon(tag);
  const Icon = icon && !icon.img ? icon : null;

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium whitespace-nowrap ${
        dark
          ? 'bg-white/[0.06] border border-white/10 text-zinc-300'
          : 'bg-zinc-100 border border-zinc-200 text-zinc-600'
      }`}
    >
      {icon?.img && <img src={icon.img} alt="" className="w-3 h-3" />}
      {Icon && <Icon size={12} className={dark ? 'text-accent-light' : 'text-accent'} />}
      {tag}
    </span>
  );
};

export default TechTag;
