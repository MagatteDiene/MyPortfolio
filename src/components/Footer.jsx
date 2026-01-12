import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-xl border-t border-white/5" />
      
      <div className="max-container px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-xl font-bold text-white tracking-tight">
              Magatte<span className="text-blue-500">.dev</span>
            </span>
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} All rights reserved. Built with Passion in Senegal.
            </p>
          </div>
          
          <div className="flex gap-4">
            {[
              { icon: Github, href: "https://github.com/MagatteDiene", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/pape-magatte-ndiaye-diene-2990862b3/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:papemagattendiayediene@gmail.com", label: "Email" }
            ].map((social) => (
              <a 
                key={social.label}
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 rounded-2xl bg-slate-900 border border-white/5 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/30 hover:bg-blue-500/5 transition-all group"
                aria-label={social.label}
              >
                <social.icon size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
