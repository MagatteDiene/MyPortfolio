import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left z-10"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-blue-500 font-semibold text-lg mb-2"
          >
            Hello, I'm
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Pape Magatte <br className="hidden md:block" />
            <span className="text-slate-400">Ndiaye DIENE</span>
          </motion.h1>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-xl md:text-2xl text-blue-400 mb-6"
          >
            Software Developer
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed"
          >
            Final-year Engineering Technology Student in Computer Science (Bac+4).
            Passionate about software development and innovative technologies, with a particular interest in Artificial Intelligence.
            Combining academic rigor with practical experience in project management and application development.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <motion.a 
              href="#projects" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-colors flex items-center justify-center gap-2 group shadow-lg shadow-blue-500/25"
            >
              View My Work
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a 
              href="/CV_DIENE_ENGLISH.pdf" 
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-slate-600 hover:border-blue-500 hover:text-blue-400 text-gray-300 rounded-full font-medium transition-colors flex items-center justify-center gap-2"
            >
              Download CV
              <Download size={20} />
            </motion.a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 relative"
        >
          <div className="w-64 h-64 md:w-96 md:h-96 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 blur-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-30 animate-pulse"></div>
          <div className="w-64 h-64 md:w-96 md:h-96 rounded-full border-4 border-slate-800 bg-slate-900 flex items-center justify-center relative z-10 overflow-hidden mx-auto shadow-2xl">
             <img 
               src="/profile.png" 
               alt="Pape Magatte Ndiaye DIENE" 
               className="w-full h-full object-cover"
               onError={(e) => {
                 e.target.onerror = null;
                 e.target.style.display = 'none';
                 e.target.nextSibling.style.display = 'flex';
               }}
             />
             
             <div className="hidden absolute inset-0 flex items-center justify-center bg-slate-800 text-slate-600 font-bold text-4xl">
               PM
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
