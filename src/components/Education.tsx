import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { education } from '../data/resume';

export default function Education() {
  return (
    <div className="py-12 px-4 sm:px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 pb-2 text-center text-gradient leading-tight">
            Education
          </h2>

          <div className="glass-effect rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/50">
                  <GraduationCap className="text-white" size={32} />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {education.degree}
                </h3>
                <p className="text-xl text-blue-400 font-semibold mb-2">
                  {education.university}
                </p>
                <p className="text-gray-400">
                  {education.year}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
