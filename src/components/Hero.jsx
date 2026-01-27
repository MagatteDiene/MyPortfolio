import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-32 md:pt-16 relative">
      <div className="max-container px-4 flex flex-col md:flex-row items-center gap-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex-1 text-center md:text-left order-2 md:order-1"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Available for New Opportunities
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Pape Magatte <br />
            <span className="text-gradient">Ndiaye DIENE</span>
          </motion.h1>

          <motion.h3 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-2xl md:text-3xl text-slate-300 font-medium mb-8"
          >
            Software Developer
          </motion.h3>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto md:mx-0 leading-relaxed"
          >
            Final-year Engineering Technology Student in Computer Science.
            Passionate about software development and innovative technologies, with a particular interest in Artificial Intelligence.
            Combining academic rigor with practical experience in project management and application development.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <motion.a 
              href="#projects" 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-semibold transition-all flex items-center justify-center gap-2 shadow-[0_20px_50px_rgba(59,130,246,0.3)] group"
            >
              View My Work
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a 
              href="/CV_DIENE_ENGLISH.pdf" 
              download
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 glass-card hover:bg-white/5 text-white rounded-2xl font-semibold transition-all flex items-center justify-center gap-2"
            >
              Download CV
              <Download size={20} />
            </motion.a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2, type: "spring" }}
          className="flex-1 relative order-1 md:order-2"
        >
          {/* Animated rings */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-[120%] h-[120%] border border-dashed border-blue-500/20 rounded-full"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="w-[110%] h-[110%] border border-dashed border-purple-500/20 rounded-full absolute"
            />
          </div>

          <div className="relative z-10 p-4 flex justify-center">
            <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-[400px] md:h-[400px] rounded-[3rem] glass-card p-4 relative overflow-hidden group">
              <div className="w-full h-full rounded-[2.5rem] overflow-hidden bg-slate-900 relative">
                <img 
                  src="/profile.png" 
                  alt="Pape Magatte Ndiaye DIENE" 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden absolute inset-0 flex items-center justify-center bg-slate-800 text-slate-600 font-bold text-6xl">
                  PM
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              </div>
            </div>
            
            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-4 -right-4 glass-card p-4 rounded-2xl flex items-center gap-3 shadow-2xl border-white/10"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold">
                CS
              </div>
              <div className="text-sm font-bold text-white pr-2">Final-year</div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 glass-card p-4 rounded-2xl flex items-center gap-3 shadow-2xl border-white/10"
            >
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold">
                AI
              </div>
              <div className="text-sm font-bold text-white pr-2">AI Enthusiast</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
