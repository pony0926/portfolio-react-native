import { motion } from 'framer-motion';
import { skills } from '../data/resume';

export default function Skills() {
  return (
    <div className="py-12 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 pb-2 text-center text-gradient leading-tight">
            Skills & Technologies
          </h2>
          <p className="text-center text-gray-400 text-lg">
            Technologies I work with to build exceptional mobile experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillCategory, index) => (
            <motion.div
              key={skillCategory.category}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-effect rounded-xl p-6 shadow-lg card-hover"
            >
              <h3 className="text-xl font-bold text-white mb-4 text-blue-400">
                {skillCategory.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillCategory.items.map((item, itemIndex) => (
                  <motion.span
                    key={itemIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: itemIndex * 0.03 }}
                    className="px-3 py-1.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-300 text-sm rounded-full border border-blue-500/20 hover:border-blue-400/40 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 transition-all cursor-default"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
