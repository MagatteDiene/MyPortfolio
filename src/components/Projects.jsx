import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Code, Maximize2 } from 'lucide-react';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "SALAMA – Public Procurement & Supply Chain",
      description: "Large-scale application for digitized procurement and logistics tracking. Features include e-Procurement (AO, submission, evaluation), logistics (fleet management, shipment tracking), and automated reporting.",
      fullDescription: "SALAMA is a comprehensive system designed for digitized public procurement management and supply chain tracking. \n\n Key highlights: \n - Architecture: Robust Laravel 8 backend with a hybrid API (REST & GraphQL) handling 100+ database tables. \n - e-Procurement: Full digitization of purchasing processes from needs expression to contract award. \n - Logistics: Real-time shipment tracking, fleet management (vehicles, drivers), and geographical delivery planning. \n - UI/UX: Dynamic interfaces built with Blade and AngularJS, featuring decision-making dashboards and automated PDF/Excel generation. \n - Communication: Automated workflow notifications and granular permission management via Spatie.",
      tags: ["Laravel", "AngularJS", "GraphQL", "PostgreSQL"],
      link: "#",
      image: "/backsalama-project.png"
    },
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
      tags: ["Laravel", "React", "PostgreSQL", "AI Integration"],
      link: "#",
      image: "/sirhCapture.png" // Placeholder
    },
    {
      title: "GESTIMMO (Real Estate ERP)",
      description: "Complete rental and financial management software for real estate groups (SCI/SERTEM). Automates contract lifecycles, billing tracking, and payment collection processes.",
      fullDescription: "GESTIMMO is a comprehensive software solution designed for rental and financial management in the real estate sector (SCI/SERTEM). \n\n Key Achievements: \n - Hybrid API Architecture: Robust Laravel 8 backend with a flexible GraphQL API for optimized data retrieval. \n - Advanced Rental Management: Contract (lease) engine with management of amendments, payment frequencies, and automated due notices. \n - Financial Engineering: Multi-flow collection system (rent, charges, deposits, water) with automatic payment allocation and unique global billing numbering. \n - Automation & Reporting: Integrated PDF engine (Rent receipts, Contracts, Inventories) and Excel export tools for accounting. \n - Security & Roles: JWT authentication and granular access rights management via Spatie Laravel Permission. \n - Reactive Interface: Dynamic frontend combining Blade and AngularJS for smooth management dashboards. \n\n Technical Environment: \n - Backend: Laravel 8, PHP 7.4/8.0, GraphQL, Eloquent ORM. \n - Frontend: AngularJS, Blade, Tailwind CSS / Bootstrap. \n - Database: MySQL / PostgreSQL (Complex transactions). \n - Tools: DomPDF, Maatwebsite Excel, Git, Postman.",
      tags: ["AngularJS", "Laravel", "GraphQL", "PostgreSQL"],
      link: "#",
      image: "/gestimmoCapture.png"
    },
    {
      title: "N-BaIoT – Network Intrusion Classification",
      description: "Academic project detecting botnet-related IoT network intrusions. Optimized Random Forest model achieving near-perfect accuracy. Developed web UI using Flask.",
      tags: ["Python", "Machine Learning", "Random Forest"],
      link: "#",
      image: "/nbaiotCapture.png" // Placeholder
    }
  ];

  
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A selection of my recent work, showcasing my skills in full-stack development and problem-solving.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedProject(project)}
              className="glass-card rounded-[2.5rem] overflow-hidden group flex flex-col h-full cursor-pointer"
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                
                {/* View Project Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-blue-600/10 backdrop-blur-[2px]">
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-full border border-white/20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Maximize2 className="text-white" size={24} />
                  </div>
                </div>

                <div className="absolute bottom-4 left-6 right-6 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-3">
                    {project.title === "TamTam FinConnect" && project.link !== "#" && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        onClick={(e) => e.stopPropagation()}
                        className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-slate-900 transition-all"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <ProjectModal 
          isOpen={!!selectedProject} 
          onClose={() => setSelectedProject(null)} 
          project={selectedProject} 
        />
      </div>
    </section>
  );
};

export default Projects;
