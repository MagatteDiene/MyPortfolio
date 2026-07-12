import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { EASE } from '../motion';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#fafafa]/85 backdrop-blur-md border-b border-zinc-200'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-container flex items-center justify-between h-16">
        <a href="#home" className="font-display text-lg font-bold text-zinc-900 tracking-tight">
          Magatte<span className="text-accent">.dev</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors duration-200 group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 h-px w-full bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm font-semibold text-white bg-accent hover:bg-accent-dark px-5 py-2 rounded-full transition-colors duration-200"
          >
            Contact
          </a>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-zinc-500 hover:text-zinc-900 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="md:hidden overflow-hidden bg-[#fafafa]/95 backdrop-blur-md border-b border-zinc-200"
          >
            <div className="max-container py-4 flex flex-col gap-1">
              {[...navLinks, { name: 'Contact', href: '#contact' }].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-2 py-3 text-zinc-500 hover:text-zinc-900 font-medium transition-colors border-b border-zinc-200/60 last:border-none"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
