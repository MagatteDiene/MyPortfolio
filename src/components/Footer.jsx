import { Github, Linkedin, Mail } from 'lucide-react';

const socials = [
  { icon: Github, href: "https://github.com/MagatteDiene", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/pape-magatte-ndiaye-diene-2990862b3/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:papemagattendiayediene@gmail.com", label: "Email" }
];

const Footer = () => (
  <footer className="border-t border-zinc-200 py-10 bg-white">
    <div className="max-container flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex flex-col items-center md:items-start gap-1">
        <span className="font-display text-lg font-bold text-zinc-900 tracking-tight">
          Magatte<span className="text-accent">.dev</span>
        </span>
        <p className="text-zinc-500 text-sm">
          © {new Date().getFullYear()} Pape Magatte Ndiaye Diene · Dakar, Senegal
        </p>
      </div>

      <div className="flex gap-3">
        {socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="w-11 h-11 rounded-full border border-zinc-300 flex items-center justify-center text-zinc-500 hover:text-zinc-900 hover:border-zinc-900 transition-colors duration-200"
          >
            <social.icon size={18} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
