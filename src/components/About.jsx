import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 text-gray-300 leading-relaxed"
          >
            <p>
              I am a final-year Engineering Technology Student in Computer Science at École Supérieure Polytechnique (ESP), Dakar. 
              My journey has been defined by a deep passion for software development and a keen interest in Artificial Intelligence.
            </p>
            <p>
              With a strong foundation in both theoretical concepts and practical application, I have consistently demonstrated 
              academic excellence, ranking first in my class during the first year of my program.
            </p>
            <p>
              I possess strong analytical and problem-solving skills, combining academic rigor with hands-on experience in 
              project management and full-stack application development. I am highly motivated to tackle technical challenges 
              and contribute effectively to project success.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-colors">
              <h3 className="text-4xl font-bold text-blue-500 mb-2">02</h3>
              <p className="text-sm text-gray-400">Years of Experience</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-colors">
              <h3 className="text-4xl font-bold text-blue-500 mb-2">05+</h3>
              <p className="text-sm text-gray-400">Projects Completed</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-colors">
              <h3 className="text-4xl font-bold text-blue-500 mb-2">01st</h3>
              <p className="text-sm text-gray-400">Class Rank (During the first year of the engineering cycle)</p>
            </div>
             <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-colors">
              <h3 className="text-4xl font-bold text-blue-500 mb-2">24/7</h3>
              <p className="text-sm text-gray-400">Dedication</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
