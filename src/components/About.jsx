import { motion } from 'framer-motion';
import { Award, Code, GraduationCap, Briefcase } from 'lucide-react';

const About = () => {
  const stats = [
    { label: "Skills", value: "Software Engineering", icon: Code },
    { label: "Years of Experience", value: "02", icon: GraduationCap },
    { label: "Class Rank (During the first year of the engineering cycle)", value: "01st", icon: Award },
    { label: "Projects", value: "5+", icon: Briefcase }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-container px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              type: "spring",
              stiffness: 50,
              damping: 15,
              mass: 1
            }}
            className="relative will-change-transform"
          >
            <div className="aspect-square glass-card rounded-[3rem] p-4 relative z-10 group">
              <div className="w-full h-full rounded-[2.5rem] overflow-hidden bg-slate-900 relative">
                <img 
                  src="/study_hard.jpg" 
                  alt="Work Space" 
                  className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-700" />
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                type: "spring",
                stiffness: 50,
                damping: 15,
                mass: 1
              }}
              className="will-change-transform"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Passionate about <br />
                <span className="text-gradient">Problem Solving</span>
              </h2>
              <div className="space-y-6 text-slate-400 leading-relaxed text-lg">
                <p>
                  I am a final-year Engineering Technology Student in Computer Science at ESP Dakar. 
                  My journey is defined by a passion for software development and Artificial Intelligence.
                </p>
                <p>
                  My first engineering cycle year was marked by consistent academic performance, resulting in a first-place ranking.
                </p>
                <p>
                  I blend academic rigor with practical experience in full-stack development, 
                  always aiming for elegant and efficient solutions to complex problems.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="grid grid-cols-2 gap-6"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: { 
                    staggerChildren: 0.1,
                    delayChildren: 0.2
                  }
                }
              }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8, y: 20 },
                    show: { 
                      opacity: 1, 
                      scale: 1,
                      y: 0,
                      transition: { 
                        type: "spring",
                        stiffness: 100,
                        damping: 15
                      }
                    }
                  }}
                  whileHover={{ 
                    y: -8,
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 400, damping: 10 }
                  }}
                  className="glass-card p-6 rounded-[2rem] group hover:border-blue-500/50 transition-all duration-300 will-change-transform"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 text-blue-500 group-hover:scale-110 transition-transform">
                    <stat.icon size={24} />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
