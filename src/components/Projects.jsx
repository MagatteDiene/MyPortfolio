import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Play } from 'lucide-react';
import { fadeUp, stagger, viewport } from '../motion';
import SectionHeading from './SectionHeading';
import ProjectModal from './ProjectModal';
import ProjectCard from './ProjectCard';

const featured = {
  title: "SamaVoie",
  badge: "Research · Thesis project",
  description: "Thesis project: a hybrid RAG system for academic guidance in Senegal, combining dense retrieval and BM25 with RRF fusion and cross-encoder reranking.",
  fullDescription: "Thesis title: \"Design and implementation of an intelligent web platform for academic guidance in Senegal based on a RAG architecture and LLMs.\" \n\n SamaVoie is a hybrid Retrieval-Augmented Generation (RAG) system designed as my thesis project to help students in Senegal navigate academic orientation. \n\n Key highlights: \n - Hybrid Retrieval: combines dense vector search (ChromaDB) with sparse lexical search (BM25) to maximize recall on both semantic and keyword queries. \n - Fusion: candidate results from both retrievers are merged using Reciprocal Rank Fusion (RRF). \n - Reranking: a cross-encoder reranks fused candidates for higher precision before generation. \n - Generation: answers are produced by Llama-3.3-70B served via the Groq API. \n - Orchestration: the full retrieval-fusion-rerank-generation pipeline is orchestrated with LangChain. \n\n Status: this is a research/thesis project and is not deployed as a public product.",
  tags: ["Python", "LangChain", "ChromaDB", "FastAPI", "Groq API"],
  link: "#",
  image: "/Adobe%20Express%20-%20LandingPage.gif",
  video: "/samavoie-demo.mp4"
};

const projects = [
  {
    title: "GMAO — Fleet Maintenance Management",
    description: "Complete CMMS for a Senegalese civil engineering & earthworks group: a large equipment fleet, field usage tracking, work orders, preventive maintenance, subcontracting, billing, and reliability KPIs (MTBF, MTTR, availability).",
    fullDescription: "GMAO is a full Computerized Maintenance Management System built for two entities of a Senegalese civil engineering & earthworks group, SOSETER and CSE, which together operate a large fleet of heavy equipment broken down into equipment, sub-assemblies and parts. The app centralizes the entire equipment lifecycle — inventory, daily counter tracking, work requests and orders, preventive maintenance, subcontracting, internal billing, and reliability KPIs — and integrates with the group's subcontractor platform (STT). It started as a full functional prototype seeded from real operational client documents to validate the specifications, then evolved module by module into a production app on a Laravel/PostgreSQL API. \n\n Key highlights: \n - Equipment registry: a large fleet in a recursive engine → sub-assembly → part hierarchy, with idempotent Excel import from the client's real files — re-importable without duplicating or overwriting manual entries. \n - Daily usage tracking: field-sheet-accurate entry (running hours, breakdown/availability time, fuel, cost-code split) with a monthly validation workflow — entry, then manager sign-off with password re-signature, then lock. \n - Work orders: DI → OT pipeline with automatic prioritization, an 11-status OT workflow (prep, parts, labor, parent/child OTs, failure-analysis closing report with e-signature), Gantt with critical path, and a PERT view. \n - Preventive maintenance: threshold-based plans (250h/500h/1000h…), per-equipment schedules, printable weekly planning, automatic OT generation. \n - Subcontracting: bidirectional sync with the group's STT platform (all-or-nothing, nothing ever deleted — missing records are flagged absent) and a REST API exposing billing rates in 3 modes (hourly/daily/monthly). \n - Finance: budget vs. actual by cost center, Pareto and lifecycle-cost analysis, internal equipment billing between sites, multi-currency display (FCFA/EUR/USD). \n - Reliability dashboards: MTBF, MTTR, availability, Pareto failure analysis, FMECA (AMDEC), ABC parts analysis. \n - Security: token auth, a fine-grained role matrix (admin/manager/technician/storekeeper/timekeeper) enforced server- and client-side, per-user scope by entity/zone/site, audit log. \n\n Toughest engineering problems: \n - Messy real-world import: a large source file with real-world data quality issues (inconsistent labels, out-of-order hierarchy, reference cycles) — solved with a two-pass import (majority-vote labeling, key normalization, longest-prefix matching) inside a single transaction, importing the whole file in under a minute. \n - Faithful Excel generation: server-side regeneration of the client's official equipment usage sheet (FUM) — layout, formulas, colors and signature block reproduced exactly, so it can replace manual entry outright. \n - Recursive equipment moves: relocating a unit cascades to every sub-assembly via a cycle-safe recursive query. \n - Prototype-to-production migration: business rules were proven and client-validated in the functional prototype, then ported to the Laravel/PostgreSQL API module by module without ever interrupting the live demo. \n\n Technical environment: \n - Front-end: React 19, TypeScript, Vite, React Router 7, Tailwind CSS 4, Radix UI (shadcn/ui), Recharts, custom-built Gantt/PERT/calendar/tree views, SheetJS, GraphQL reads + REST writes. \n - Back-end: PHP 8 / Laravel, PostgreSQL (recursive CTEs, pg_trgm trigram search), REST API (Swagger/OpenAPI) + read-only GraphQL, Laravel Sanctum, PhpSpreadsheet, Guzzle, Artisan commands for import/sync/bulk moves. \n - Deployment: Ubuntu, Nginx, PHP-FPM, HTTPS via Let's Encrypt. \n\n My role: full-stack developer — analyzed the client's specifications, built the functional prototype and then the production app end to end (front and back), and worked directly with the client throughout to validate business rules and refine the demo into the real system.",
    tags: ["React 19", "TypeScript", "Laravel", "PostgreSQL", "GraphQL"],
    clients: [
      { name: "SOSETER", note: "Société Sahélienne d'Équipement et de Terrassement — earthworks & public works company, part of the CSE group" },
      { name: "CSE", note: "Compagnie Sahélienne d'Entreprises — major BTP/construction group, Senegal" },
    ],
    link: "#",
    image: "/gmaoCapture.png"
  },
  {
    title: "SignUp",
    description: "Large-scale application for digitized procurement and logistics tracking: e-Procurement (tenders, submission, evaluation), fleet management, shipment tracking, and automated reporting.",
    fullDescription: "SignUp is a comprehensive system designed for digitized public procurement management and supply chain tracking. \n\n Key highlights: \n - Architecture: Robust Laravel 8 backend with a hybrid API (REST & GraphQL) handling 100+ database tables. \n - e-Procurement: Full digitization of purchasing processes from needs expression to contract award. \n - Logistics: Real-time shipment tracking, fleet management (vehicles, drivers), and geographical delivery planning. \n - UI: Dynamic interfaces built with Blade and AngularJS, featuring decision-making dashboards and automated PDF/Excel generation. \n - Communication: Automated workflow notifications and granular permission management via Spatie.",
    tags: ["Laravel", "AngularJS", "GraphQL", "PostgreSQL"],
    clients: [
      { name: "SALAMA", note: "Madagascar's national central purchasing agency for essential medicines" },
    ],
    link: "#",
    image: "/backsalama-project.png"
  },
  {
    title: "GESTIMMO",
    description: "Rental and financial management software for real estate groups. Automates contract lifecycles, billing tracking, and payment collection processes.",
    fullDescription: "GESTIMMO is a comprehensive software solution designed for rental and financial management in the real estate sector. \n\n Key Achievements: \n - Hybrid API Architecture: Robust Laravel 8 backend with a flexible GraphQL API for optimized data retrieval. \n - Advanced Rental Management: Contract (lease) engine with management of amendments, payment frequencies, and automated due notices. \n - Financial Engineering: Multi-flow collection system (rent, charges, deposits, water) with automatic payment allocation and unique global billing numbering. \n - Automation & Reporting: Integrated PDF engine (Rent receipts, Contracts, Inventories) and Excel export tools for accounting. \n - Security & Roles: JWT authentication and granular access rights management via Spatie Laravel Permission. \n - Reactive Interface: Dynamic frontend combining Blade and AngularJS for smooth management dashboards. \n\n Technical Environment: \n - Backend: Laravel 8, PHP 7.4/8.0, GraphQL, Eloquent ORM. \n - Frontend: AngularJS, Blade, Tailwind CSS / Bootstrap. \n - Database: MySQL / PostgreSQL (Complex transactions). \n - Tools: DomPDF, Maatwebsite Excel, Git, Postman.",
    tags: ["AngularJS", "Laravel", "GraphQL", "PostgreSQL"],
    clients: [
      { name: "SERTEM", note: "Real estate development & promotion group, Dakar (active since 1998)" },
      { name: "CMH Sarl", note: "Real estate management company, Senegal" },
      { name: "BB Immobilier", note: "Real estate agency, Dakar, Senegal" },
    ],
    link: "#",
    image: "/gestimmoCapture.png"
  },
  {
    title: "SIRH — HR Information System",
    description: "Back-end and front-end modules for an HR platform, including an AI module for CV pre-selection, Laravel APIs, and Nginx server configuration.",
    tags: ["Laravel", "React", "PostgreSQL", "AI Integration"],
    clients: [
      { name: "CSE", note: "Compagnie Sahélienne d'Entreprises — major BTP/construction group, Senegal" },
      { name: "Fabrimetal", note: "Steel manufacturer (MMD Steel Group), Sébikotane industrial zone, Senegal" },
    ],
    link: "#",
    image: "/sirhCapture.png"
  },
  {
    title: "N-BaIoT — Network Intrusion Classification",
    badge: "Personal project",
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
          whileHover={{ y: -6 }}
          transition={{ type: 'spring', stiffness: 300, damping: 24 }}
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
            <ProjectCard key={project.title} project={project} onSelect={setSelectedProject} />
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
