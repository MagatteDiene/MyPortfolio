import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Play } from 'lucide-react';
import { fadeUp, stagger, viewport } from '../motion';
import SectionHeading from './SectionHeading';
import ProjectModal from './ProjectModal';

const featured = {
  title: "SamaVoie",
  badge: "Research · Not deployed",
  description: "Thesis project: a hybrid RAG system for academic guidance in Senegal, combining dense retrieval and BM25 with RRF fusion and cross-encoder reranking.",
  fullDescription: "Thesis title: \"Design and implementation of an intelligent web platform for academic guidance in Senegal based on a RAG architecture and LLMs.\" \n\n SamaVoie is a hybrid Retrieval-Augmented Generation (RAG) system designed as my thesis project to help students in Senegal navigate academic orientation. \n\n Key highlights: \n - Hybrid Retrieval: combines dense vector search (ChromaDB) with sparse lexical search (BM25) to maximize recall on both semantic and keyword queries. \n - Fusion: candidate results from both retrievers are merged using Reciprocal Rank Fusion (RRF). \n - Reranking: a cross-encoder reranks fused candidates for higher precision before generation. \n - Generation: answers are produced by Llama-3.3-70B served via the Groq API. \n - Orchestration: the full retrieval-fusion-rerank-generation pipeline is orchestrated with LangChain. \n\n Status: this is a research/thesis project and is not deployed as a public product.",
  tags: ["Python", "LangChain", "ChromaDB", "FastAPI", "Groq API"],
  link: "#",
  image: "/Adobe%20Express%20-%20LandingPage.gif",
  video: "/samavoie-demo.mp4"
};

const projects = [
  {
    title: "SALAMA",
    description: "Large-scale application for digitized procurement and logistics tracking: e-Procurement (tenders, submission, evaluation), fleet management, shipment tracking, and automated reporting.",
    fullDescription: "SALAMA is a comprehensive system designed for digitized public procurement management and supply chain tracking. \n\n Key highlights: \n - Architecture: Robust Laravel 8 backend with a hybrid API (REST & GraphQL) handling 100+ database tables. \n - e-Procurement: Full digitization of purchasing processes from needs expression to contract award. \n - Logistics: Real-time shipment tracking, fleet management (vehicles, drivers), and geographical delivery planning. \n - UI: Dynamic interfaces built with Blade and AngularJS, featuring decision-making dashboards and automated PDF/Excel generation. \n - Communication: Automated workflow notifications and granular permission management via Spatie.",
    tags: ["Laravel", "AngularJS", "GraphQL", "PostgreSQL"],
    link: "#",
    image: "/backsalama-project.png"
  },
  {
    title: "GESTIMMO",
    description: "Rental and financial management software for real estate groups (SCI/SERTEM). Automates contract lifecycles, billing tracking, and payment collection processes.",
    fullDescription: "GESTIMMO is a comprehensive software solution designed for rental and financial management in the real estate sector (SCI/SERTEM). \n\n Key Achievements: \n - Hybrid API Architecture: Robust Laravel 8 backend with a flexible GraphQL API for optimized data retrieval. \n - Advanced Rental Management: Contract (lease) engine with management of amendments, payment frequencies, and automated due notices. \n - Financial Engineering: Multi-flow collection system (rent, charges, deposits, water) with automatic payment allocation and unique global billing numbering. \n - Automation & Reporting: Integrated PDF engine (Rent receipts, Contracts, Inventories) and Excel export tools for accounting. \n - Security & Roles: JWT authentication and granular access rights management via Spatie Laravel Permission. \n - Reactive Interface: Dynamic frontend combining Blade and AngularJS for smooth management dashboards. \n\n Technical Environment: \n - Backend: Laravel 8, PHP 7.4/8.0, GraphQL, Eloquent ORM. \n - Frontend: AngularJS, Blade, Tailwind CSS / Bootstrap. \n - Database: MySQL / PostgreSQL (Complex transactions). \n - Tools: DomPDF, Maatwebsite Excel, Git, Postman.",
    tags: ["AngularJS", "Laravel", "GraphQL", "PostgreSQL"],
    link: "#",
    image: "/gestimmoCapture.png"
  },
  {
    title: "SIRH — HR Information System",
    description: "Back-end and front-end modules for an HR platform, including an AI module for CV pre-selection, Laravel APIs, and Nginx server configuration.",
    tags: ["Laravel", "React", "PostgreSQL", "AI Integration"],
    link: "#",
    image: "/sirhCapture.png"
  },
  {
    title: "TamTam FinConnect",
    description: "Responsive landing page and user dashboards for project holders and investors — front-end development and UI improvements.",
    tags: ["HTML", "Tailwind CSS", "PHP (Laravel)"],
    link: "#",
    image: "/tamtamCapture.png"
  },
  {
    title: "N-BaIoT — Network Intrusion Classification",
    description: "Botnet-related IoT network intrusion detection with an optimized Random Forest model, served through a Flask web UI.",
    tags: ["Python", "Machine Learning", "Random Forest"],
    link: "#",
    image: "/nbaiotCapture.png"
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="max-container">
        <SectionHeading
          kicker="05 · Projects"
          title="Selected work"
          lead="Production systems built at HTSOFT, and research work from my time at ESP Dakar."
        />

        {/* Featured project — SamaVoie */}
        <motion.article
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          onClick={() => setSelectedProject(featured)}
          className="group cursor-pointer bg-zinc-950 rounded-[2rem] overflow-hidden grid lg:grid-cols-2 mb-4 hover:shadow-xl hover:shadow-zinc-300/50 transition-shadow duration-300"
        >
          <div className="p-8 md:p-12 flex flex-col justify-center order-2 lg:order-1">
            <span className="self-start px-2.5 py-1 rounded-md border border-accent-light/50 text-accent-light text-[11px] font-semibold uppercase tracking-wider mb-5">
              {featured.badge}
            </span>
            <h3 className="font-display text-2xl md:text-4xl font-bold text-white mb-4">
              {featured.title}
            </h3>
            <p className="text-zinc-400 leading-relaxed mb-6 max-w-lg">
              {featured.description}
            </p>
            <p className="text-xs text-zinc-500 font-medium mb-8">
              {featured.tags.join(' · ')}
            </p>
            <span className="inline-flex items-center gap-1.5 text-accent-light font-semibold">
              View case study
              <ArrowUpRight size={17} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
          <div className="relative min-h-[240px] lg:min-h-0 overflow-hidden order-1 lg:order-2 bg-zinc-900">
            <img
              src={featured.image}
              alt={featured.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/40 to-transparent hidden lg:block" />
            {featured.video && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/90 shadow-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <Play size={22} className="text-zinc-900 ml-1" fill="currentColor" />
                </div>
              </div>
            )}
          </div>
        </motion.article>

        {/* Remaining projects */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={fadeUp}
              onClick={() => setSelectedProject(project)}
              className="card overflow-hidden group cursor-pointer flex flex-col hover:border-accent/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-zinc-200/60 transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden bg-zinc-100 border-b border-zinc-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display text-lg font-semibold text-zinc-900 mb-2 group-hover:text-accent transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed mb-5 line-clamp-3">
                  {project.description}
                </p>
                <p className="mt-auto text-xs text-zinc-500 font-medium">
                  {project.tags.join(' · ')}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>

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
