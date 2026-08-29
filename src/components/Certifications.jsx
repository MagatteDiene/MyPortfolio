import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ArrowUpRight } from 'lucide-react';
import { fadeUp, stagger, viewport, EASE } from '../motion';
import SectionHeading from './SectionHeading';

const certifications = [
  {
    title: "Google AI Professional Certificate",
    issuer: "Google",
    date: "2026",
    image: "/Google_AI_Professional_Certificate.png",
    pdf: "/Google_AI_Professional_Certificate.png",
  },
  {
    title: "Google AI Essentials",
    issuer: "Google",
    date: "2026",
    image: "/Google_AI_Essentials_specialisation-png.png",
    pdf: "/Google_AI_Essentials_specialisation-png.png",
  },
  {
    title: "Elements of AI",
    issuer: "University of Helsinki & MinnaLearn",
    date: "2026",
    image: "/certificate-elements-of-ai-fr.png",
    pdf: "/certificate-elements-of-ai-fr.png",
  },
  {
    title: "Introduction to Generative AI for Software Development",
    issuer: "DeepLearning.AI (Coursera)",
    date: "2025",
    image: "/certification_deeplearning_ai.png",
    pdf: "/Certification_Introduction_to_generativeAI_for_software_Development.pdf",
  },
  {
    title: "Foundational C# with Microsoft",
    issuer: "Microsoft (freeCodeCamp)",
    date: "2026",
    image: "/Foundational-CSharp-with-Microsoft-Certification.png",
    pdf: "/Foundational-CSharp-with-Microsoft-Certification.png",
  },
  {
    title: "Networking Basics",
    issuer: "Cisco Networking Academy",
    date: "2026",
    image: "/networking-basics.png",
    pdf: "/NetworkingBasicsCertification.pdf",
  },
  {
    title: "Networking Devices and Initial Configuration",
    issuer: "Cisco Networking Academy",
    date: "2026",
    image: "/networking-devices-and-initial-configuration.png",
    pdf: "/NetworkingDevicesandBasic.pdf",
  }
];

const CertificationModal = ({ isOpen, onClose, certification }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    if (isOpen) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  if (!certification) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-zinc-950/50"
          />

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="relative w-full max-w-6xl h-[88vh] bg-white border border-zinc-200 rounded-2xl overflow-hidden flex flex-col shadow-2xl"
          >
            <div className="flex items-center justify-between px-5 h-14 border-b border-zinc-200 shrink-0">
              <h3 className="text-sm font-semibold text-zinc-900 truncate pr-4">
                {certification.title}
              </h3>
              <div className="flex items-center gap-1 shrink-0">
                <a
                  href={certification.pdf}
                  download
                  className="p-2 text-zinc-500 hover:text-zinc-900 transition-colors"
                  title="Download"
                >
                  <Download size={18} />
                </a>
                <button
                  onClick={onClose}
                  className="p-2 text-zinc-500 hover:text-zinc-900 transition-colors"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            <div className="flex-1 min-h-0 bg-zinc-100">
              {certification.pdf?.toLowerCase().endsWith('.pdf') ? (
                <iframe
                  src={`${certification.pdf}#toolbar=0`}
                  className="w-full h-full border-none"
                  title={certification.title}
                />
              ) : (
                <div className="w-full h-full overflow-y-auto">
                  <img
                    src={certification.pdf}
                    alt={certification.title}
                    className="w-full h-auto"
                  />
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" className="py-24 md:py-32">
      <div className="max-container">
        <SectionHeading kicker="04 · Certifications" title="Continuous learning" />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="grid md:grid-cols-2 gap-4"
        >
          {certifications.map((cert) => (
            <motion.button
              key={cert.title}
              variants={fadeUp}
              onClick={() => setSelectedCert(cert)}
              className="card p-5 flex items-center gap-5 text-left group hover:border-accent/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-zinc-200/60 transition-all duration-300"
            >
              <div className="w-28 h-20 rounded-lg overflow-hidden bg-zinc-100 border border-zinc-100 shrink-0">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs text-zinc-500 mb-1">
                  {cert.issuer} · {cert.date}
                </p>
                <h3 className="font-display font-semibold text-zinc-900 leading-snug mb-2">
                  {cert.title}
                </h3>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-accent">
                  View certificate
                  <ArrowUpRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </motion.button>
          ))}
        </motion.div>

        <CertificationModal
          isOpen={!!selectedCert}
          onClose={() => setSelectedCert(null)}
          certification={selectedCert}
        />
      </div>
    </section>
  );
};

export default Certifications;
