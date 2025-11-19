import { motion } from 'framer-motion';
import { profile } from '../data/resume';

export default function About() {
  return (
    <div className="py-12 px-4 sm:px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 pb-2 text-center text-gradient leading-tight">
            Profile Summary
          </h2>

          <div className="glass-effect rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="space-y-6">
              {profile.summary.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-gray-300 leading-relaxed text-lg"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
