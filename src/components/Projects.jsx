import { motion } from 'framer-motion';
import { ExternalLink, Github, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "TamTam FinConnect",
      description: "Major front-end project: fully developed responsive landing page and user dashboards for project holders and investors. Enhanced UI/UX design and improved user interaction modules.",
      tags: ["HTML", "Tailwind CSS", "PHP (Laravel)"],
      link: "https://tamtamfinconnect.com",
      image: "/tamtamCapture.png" // Placeholder
    },
    {
      title: "SIRH (HR Information System)",
      description: "Developed multiple back-end and front-end modules. Integrated an AI module for CV pre-selection. Developed backend APIs using Laravel and configured Nginx server.",
      tags: ["Laravel", "AngularJS", "PostgreSQL", "AI Integration"],
      link: "#",
      image: "/sirhCapture.png" // Placeholder
    },
    {
      title: "GESTIMMO (Real Estate ERP)",
      description: "Developed modules for rent management and financial reporting. Implemented PDF generation for receipts. Developed data import jobs and planned system improvements.",
      tags: ["React", "Laravel", "OpenAI API", "PostgreSQL"],
      link: "#",
      image: "/gestimmoCapture.png" // Placeholder
    },
    {
      title: "N-BaIoT – Network Intrusion Classification",
      description: "Academic project detecting botnet-related IoT network intrusions. Optimized Random Forest model achieving near-perfect accuracy. Developed web UI using Flask.",
      tags: ["Python (Flask)", "Machine Learning", "Random Forest"],
      link: "#",
      image: "/nbaiotCapture.png" // Placeholder
    }
  ];

  
  return (
    <section id="projects" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-blue-500 transition-colors group shadow-lg hover:shadow-blue-500/20"
            >
              <div className="h-48 overflow-hidden relative">
                 <div className="absolute inset-0 bg-slate-900/50 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
                 {/* In a real scenario, use actual images. Using gradients/placeholders here if image fails */}
                 <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                 />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{project.title}</h3>
                  <div className="flex gap-2">
                    {project.link !== "#" && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors p-1 hover:bg-slate-800 rounded-full">
                        <ExternalLink size={20} />
                        </a>
                    )}
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-slate-800 text-blue-400 text-xs rounded-full border border-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
