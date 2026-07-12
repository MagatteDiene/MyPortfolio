import { motion } from 'framer-motion';
import { fadeUp, stagger, viewport } from '../motion';

const SectionHeading = ({ kicker, title, lead, dark = false }) => (
  <motion.div
    variants={stagger}
    initial="hidden"
    whileInView="show"
    viewport={viewport}
    className="mb-14 max-w-3xl"
  >
    <motion.p variants={fadeUp} className={`kicker mb-4 ${dark ? '!text-accent-light' : ''}`}>
      {kicker}
    </motion.p>
    <motion.h2
      variants={fadeUp}
      className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight ${
        dark ? 'text-white' : 'text-zinc-900'
      }`}
    >
      {title}
    </motion.h2>
    {lead && (
      <motion.p
        variants={fadeUp}
        className={`mt-5 text-lg leading-relaxed ${dark ? 'text-zinc-400' : 'text-zinc-600'}`}
      >
        {lead}
      </motion.p>
    )}
  </motion.div>
);

export default SectionHeading;
