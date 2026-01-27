import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Download, FileText, Award } from 'lucide-react';

const CertificationModal = ({ isOpen, onClose, certification }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!certification) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          {/* Backdrop with Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-xl"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-5xl h-[80vh] bg-slate-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-slate-900/50 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <Award className="text-blue-400" size={20} />
                </div>
                <h3 className="text-lg font-semibold text-white truncate max-w-[200px] md:max-w-md">
                  {certification.title}
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={certification.pdf}
                  download
                  className="p-2 hover:bg-white/10 rounded-full text-slate-400 hover:text-white transition-colors"
                  title="Download PDF"
                >
                  <Download size={20} />
                </a>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-white/10 rounded-full text-slate-400 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* PDF Viewer / Content */}
            <div className="flex-1 bg-slate-800/50 relative">
              <iframe
                src={`${certification.pdf}#toolbar=0`}
                className="w-full h-full border-none"
                title={certification.title}
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const certifications = [
  
    {
      title: "Networking Basics",
      issuer: "Cisco Networking Academy",
      date: "2026",
      image: "/networking-basics.png",
      pdf: "/NetworkingBasicsCertification.pdf",
      description: "Foundational knowledge of networking concepts, protocols, and architecture."
    },
    {
      title: "Networking Devices and Initial Configuration",
      issuer: "Cisco Networking Academy",
      date: "2026",
      image: "/networking-devices-and-initial-configuration.png",
      pdf: "/NetworkingDevicesandBasic.pdf",
      description: "Hands-on skills for configuring networking devices and establishing basic connectivity."
    },
      {
      title: "Introduction to Generative AI for Software Development",
      issuer: "DeepLearning.AI (Coursera)",
      date: "2025",
      image: "/certification_deeplearning_ai.png",
      pdf: "/Certification_Introduction_to_generativeAI_for_software_Development.pdf",
      description: "Focused on integrating Generative AI into the software development lifecycle. Gained hands-on experience using LLMs to improve code quality, accelerate prototyping, and enhance productivity from design to deployment."
    }
  ];

  return (
    <section id="certifications" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
            Certifications
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
             Technical skills and certifications achieved through my studies and projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedCert(cert)}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl bg-slate-900/50 border border-white/10 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-500 h-full flex flex-col">
                {/* Image/Badge Container */}
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-800">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-blue-600/10 backdrop-blur-[2px]">
                    <div className="bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/20">
                      <FileText className="text-white" size={24} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 mb-1">
                        {cert.title}
                      </h3>
                      <p className="text-blue-400 text-sm font-medium">{cert.issuer}</p>
                    </div>
                    <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-semibold rounded-full border border-blue-500/20">
                      {cert.date}
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                    {cert.description}
                  </p>
                  <div className="flex items-center text-blue-400 text-sm font-semibold group-hover:gap-2 transition-all">
                    <span>View Certificate</span>
                    <ExternalLink size={14} className="ml-1" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <CertificationModal
        isOpen={!!selectedCert}
        onClose={() => setSelectedCert(null)}
        certification={selectedCert}
      />
    </section>
  );
};

export default Certifications;
