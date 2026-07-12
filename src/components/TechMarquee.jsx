const stack = [
  'PHP', 'Laravel', 'JavaScript', 'React', 'AngularJS', 'Python', 'FastAPI',
  'LangChain', 'ChromaDB', 'MySQL', 'PostgreSQL', 'GraphQL', 'Git', 'scikit-learn',
];

const Row = ({ ariaHidden = false }) => (
  <div className="flex items-center shrink-0" aria-hidden={ariaHidden}>
    {stack.map((tech) => (
      <span key={tech} className="flex items-center">
        <span className="px-6 text-zinc-400 font-medium whitespace-nowrap">{tech}</span>
        <span className="text-accent/60 text-xs">●</span>
      </span>
    ))}
  </div>
);

const TechMarquee = () => (
  <div className="border-y border-zinc-200 bg-white py-5 overflow-hidden">
    <div className="flex w-max marquee-track hover:[animation-play-state:paused]">
      <Row />
      <Row ariaHidden />
    </div>
  </div>
);

export default TechMarquee;
