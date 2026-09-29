import {
  SiLaravel,
  SiTypescript,
  SiPostgresql,
  SiGraphql,
  SiReact,
  SiAngular,
  SiPython,
  SiLangchain,
  SiFastapi,
  SiPhp,
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
  SiMysql,
  SiGit,
  SiDocker,
  SiPostman,
  SiScikitlearn,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa6';
import { TbBrandCSharp } from 'react-icons/tb';
import { BrainCircuit, Bot, Gauge, Sparkles, Workflow, MonitorSmartphone, TreePine, Cpu } from 'lucide-react';

// ChromaDB has no entry in react-icons yet — self-hosted from its official
// brand mark (Apache-2.0, github.com/homarr-labs/dashboard-icons).
const chromaImg = { img: '/icons/chroma.svg' };

// Exact-string matches for compound labels used across the site.
const exactMap = {
  'php (laravel)': SiLaravel,
  'javascript (react, angularjs)': SiJavascript,
  'python (fastapi, flask)': SiPython,
  'html/css': SiHtml5,
  'graphql (rebing)': SiGraphql,
  'llm orchestration (langchain)': SiLangchain,
  'vector search (chromadb)': chromaImg,
  'llm apis (openai, groq)': Sparkles,
  'chatbots & conversational ai': Bot,
  'rag systems': BrainCircuit,
  ragas: Gauge,
  'uml modeling': Workflow,
  'responsive ui/ux': MonitorSmartphone,
  'ai integration': Sparkles,
  'machine learning': Cpu,
  'random forest': TreePine,
};

// Fallback matches once parenthetical suffixes / trailing version numbers are stripped.
const baseMap = {
  laravel: SiLaravel,
  typescript: SiTypescript,
  postgresql: SiPostgresql,
  graphql: SiGraphql,
  react: SiReact,
  angularjs: SiAngular,
  python: SiPython,
  langchain: SiLangchain,
  fastapi: SiFastapi,
  php: SiPhp,
  javascript: SiJavascript,
  java: FaJava,
  'c#': TbBrandCSharp,
  'tailwind css': SiTailwindcss,
  mysql: SiMysql,
  git: SiGit,
  docker: SiDocker,
  postman: SiPostman,
  'scikit-learn': SiScikitlearn,
  chromadb: chromaImg,
};

const strip = (tag) =>
  tag
    .toLowerCase()
    .replace(/\s+\d+$/, '') // "React 19" -> "react"
    .replace(/\s*\(.*\)$/, '') // "Python (FastAPI, Flask)" -> "python"
    .trim();

// Returns a react-icons component, an { img } descriptor for a self-hosted
// logo, or null when no fitting icon exists.
export const getTechIcon = (tag) => {
  const key = tag.toLowerCase().trim();
  return exactMap[key] || baseMap[strip(tag)] || null;
};
