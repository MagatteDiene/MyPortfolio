import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { fadeUp, stagger, viewport } from '../motion';

const contactInfo = [
  { icon: Mail, label: "Email", value: "papemagattendiayediene@gmail.com", href: "mailto:papemagattendiayediene@gmail.com" },
  { icon: MapPin, label: "Location", value: "Dakar, Senegal", href: null },
];

const socials = [
  { icon: Github, href: "https://github.com/MagatteDiene", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/pape-magatte-ndiaye-diene-2990862b3/", label: "LinkedIn" },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    window.location.href = `mailto:papemagattendiayediene@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-container">
        <div className="bg-zinc-950 rounded-[2rem] p-8 md:p-14 grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <motion.p variants={fadeUp} className="kicker !text-accent-light mb-4">
              07 · Contact
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display text-3xl md:text-5xl font-bold text-white tracking-tight mb-5"
            >
              Let's work together
            </motion.h2>
            <motion.p variants={fadeUp} className="text-zinc-400 text-lg leading-relaxed mb-10 max-w-md">
              Open to software engineering roles and collaborations — backend, full-stack, or applied AI.
            </motion.p>

            <motion.div variants={stagger} className="space-y-6 mb-10">
              {contactInfo.map((item) => (
                <motion.div key={item.label} variants={fadeUp} className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-accent-light shrink-0">
                    <item.icon size={19} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-zinc-500 uppercase tracking-widest font-semibold mb-0.5">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-white font-medium hover:text-accent-light transition-colors break-all"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white font-medium">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/40 transition-colors duration-200"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          <motion.form
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-7 md:p-9 space-y-5"
          >
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-zinc-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="field !bg-zinc-50"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-zinc-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className="field !bg-zinc-50"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-zinc-600">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="What would you like to build?"
                className="field !bg-zinc-50 resize-none"
              />
            </div>
            <button
              type="submit"
              className="group inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-7 py-3.5 rounded-full transition-colors duration-200 w-full sm:w-auto justify-center"
            >
              Send message
              <Send size={17} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
