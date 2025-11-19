import { motion } from 'framer-motion';
import { experiences } from '../data/resume';
import { Smartphone, Users, TrendingUp, Award, Code, Zap } from 'lucide-react';
import type { Experience as ExperienceType } from '../data/resume';

const stats = [
  { label: "Years Experience", value: "9+", icon: TrendingUp },
  { label: "Apps Built", value: "10+", icon: Smartphone },
  { label: "Users Served", value: "Millions", icon: Users },
  { label: "Companies", value: "4", icon: Award },
];

export default function Experience() {
  return (
    <div className="py-12 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 pb-2 text-center text-gradient leading-tight">
            Professional Experience
          </h2>
          <p className="text-center text-gray-400 text-lg">
            9 years of building mobile applications used by millions
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-effect rounded-xl p-6 text-center card-hover"
              >
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                    <Icon className="text-blue-400" size={24} />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-indigo-500/50 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} experience={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ExperienceCard({ experience, index }: { experience: ExperienceType; index: number }) {
  const isEven = index % 2 === 0;

  // Calculate key metrics from achievements
  const keyMetrics = [
    { icon: Code, text: `${experience.achievements.length} Key Achievements` },
    { icon: Zap, text: "High Performance" },
    { icon: Users, text: "Millions of Users" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative"
    >
      <div className={`flex flex-col md:flex-row gap-6 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
        {/* Timeline Dot */}
        <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-gray-950 shadow-lg transform md:-translate-x-1/2 z-10"></div>

        {/* Experience Card */}
        <div className={`ml-16 md:ml-0 md:w-5/12 ${isEven ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
          <div className="glass-effect rounded-xl p-6 shadow-xl card-hover">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-1">
                  {experience.company}
                </h3>
                <p className="text-lg font-semibold text-blue-400 mb-2">
                  {experience.position}
                </p>
                {experience.previousPosition && (
                  <p className="text-base font-medium text-gray-400 mb-2">
                    {experience.previousPosition}
                  </p>
                )}
                <p className="text-sm text-gray-500 mb-4">
                  {experience.period}
                  {experience.previousPeriod && ` • ${experience.previousPeriod}`}
                </p>
              </div>
              {experience.appLinks && (
                <div className="flex gap-2">
                  {experience.appLinks.appStore && (
                    <a
                      href={experience.appLinks.appStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-400 hover:text-blue-400 transition-colors rounded-lg hover:bg-gray-800/50"
                      title="App Store"
                    >
                      <Smartphone size={20} />
                    </a>
                  )}
                  {experience.appLinks.googlePlay && (
                    <a
                      href={experience.appLinks.googlePlay}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-400 hover:text-green-400 transition-colors rounded-lg hover:bg-gray-800/50"
                      title="Google Play"
                    >
                      <Smartphone size={20} />
                    </a>
                  )}
                </div>
              )}
            </div>

            {/* Key Metrics */}
            <div className="flex flex-wrap gap-2 mb-4">
              {keyMetrics.map((metric, idx) => {
                const Icon = metric.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-500/20"
                  >
                    <Icon className="text-blue-400" size={14} />
                    <span className="text-xs text-gray-300">{metric.text}</span>
                  </div>
                );
              })}
            </div>

            {/* Achievements */}
            <ul className="space-y-3">
              {experience.achievements.slice(0, 5).map((achievement, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  className="text-gray-300 text-sm leading-relaxed flex items-start"
                >
                  <span className="text-blue-400 mr-2 mt-1">▸</span>
                  <span>{achievement}</span>
                </motion.li>
              ))}
              {experience.achievements.length > 5 && (
                <li className="text-gray-500 text-sm italic">
                  +{experience.achievements.length - 5} more achievements
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Empty Space Content - Key Highlights */}
        <div className={`hidden md:block md:w-5/12 ${isEven ? 'md:pl-8' : 'md:pr-8'}`}>
          <div className="h-full flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: isEven ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
              className="glass-effect rounded-xl p-6 space-y-4"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Award className="text-white" size={20} />
                </div>
                <h4 className="text-lg font-bold text-white">Key Highlights</h4>
              </div>
              
              {/* Top 3 Key Achievements */}
              <div className="space-y-3">
                {experience.achievements.slice(0, 3).map((achievement, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 + idx * 0.1 }}
                    className="flex items-start gap-3 p-3 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-lg border border-blue-500/10 hover:border-blue-500/30 transition-colors"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-xs font-bold text-blue-400">{idx + 1}</span>
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed">{achievement}</p>
                  </motion.div>
                ))}
              </div>

              {/* Company Stats */}
              <div className="pt-4 border-t border-gray-800">
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center p-3 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-500/20">
                    <div className="text-2xl font-bold text-blue-400 mb-1">
                      {experience.achievements.length}
                    </div>
                    <div className="text-xs text-gray-400">Achievements</div>
                  </div>
                  <div className="text-center p-3 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 rounded-lg border border-purple-500/20">
                    <div className="text-2xl font-bold text-purple-400 mb-1">
                      {experience.appLinks ? (experience.appLinks.appStore && experience.appLinks.googlePlay ? '2' : '1') : '0'}
                    </div>
                    <div className="text-xs text-gray-400">Platforms</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
