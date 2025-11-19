import { motion } from 'framer-motion';
import { useState } from 'react';
import { projects } from '../data/resume';
import { Smartphone } from 'lucide-react';
import { getCompanyGradient, getAppIcon, getAppVisual } from '../utils/appImages';
import { getProjectScreenshot } from '../utils/appScreenshots';
import type { Project } from '../data/resume';

export default function Projects() {
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
            Featured Projects
          </h2>
          <p className="text-center text-gray-400 text-lg max-w-2xl mx-auto">
            Mobile applications and systems I've built, serving millions of users across iOS and Android platforms
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // Get app screenshot URL from official sources
  const appScreenshotUrl = getProjectScreenshot(project.id);
  const appIconUrl = getAppIcon(project.id, project.company);
  const appVisual = getAppVisual(project.id, project.company, project.title);
  // Priority: project.image > appScreenshotUrl > appIconUrl
  const imageUrl = project.image || appScreenshotUrl || appIconUrl;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="glass-effect rounded-2xl overflow-hidden card-hover h-full flex flex-col">
        {/* App Image */}
        <div className={`relative h-48 bg-gradient-to-br ${getCompanyGradient(project.company)} overflow-hidden`}>
          {imageUrl && !imageError ? (
            <div className="relative w-full h-full">
              <img
                src={imageUrl}
                alt={project.title}
                className={`w-full h-full object-cover object-center transition-all duration-500 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                } group-hover:scale-110`}
                style={{
                  objectPosition: 'center center',
                  imageRendering: 'crisp-edges'
                }}
                onLoad={() => setImageLoaded(true)}
                onError={() => {
                  setImageError(true);
                  setImageLoaded(false);
                }}
              />
            </div>
          ) : null}
          
          {/* Fallback Visual - App Icon or Company Initial */}
          {(imageError || !imageUrl) && (
            <div className={`absolute inset-0 bg-gradient-to-br ${appVisual.color} flex items-center justify-center`}>
              <div className="text-center px-4">
                <div className="text-8xl mb-3 drop-shadow-lg">{appVisual.icon}</div>
                <div className="text-white font-bold text-xl mb-1 drop-shadow-md">{appVisual.text}</div>
                <div className="text-white/70 text-sm font-medium">{project.company}</div>
              </div>
            </div>
          )}
          
          {/* Loading placeholder */}
          {!imageLoaded && !imageError && imageUrl && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 border-4 border-white/30 border-t-white/80 rounded-full animate-spin"></div>
            </div>
          )}
          
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent"></div>
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-blue-300 bg-blue-500/30 backdrop-blur-sm px-3 py-1.5 rounded-full border border-blue-400/30">
                {project.company}
              </span>
              {project.appLinks && (
                <div className="flex gap-2">
                  {project.appLinks.appStore && (
                    <a
                      href={project.appLinks.appStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-white/90 hover:text-white bg-white/20 hover:bg-white/30 rounded-lg transition-all backdrop-blur-sm border border-white/20 hover:scale-110"
                      title="View on App Store"
                      onClick={(e) => e.stopPropagation()}
                      aria-label={`View ${project.title} on App Store`}
                    >
                      <Smartphone size={16} />
                    </a>
                  )}
                  {project.appLinks.googlePlay && (
                    <a
                      href={project.appLinks.googlePlay}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-white/90 hover:text-white bg-white/20 hover:bg-white/30 rounded-lg transition-all backdrop-blur-sm border border-white/20 hover:scale-110"
                      title="View on Google Play"
                      onClick={(e) => e.stopPropagation()}
                      aria-label={`View ${project.title} on Google Play`}
                    >
                      <Smartphone size={16} />
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <div className="mb-4">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm mb-3 leading-relaxed line-clamp-2">
              {project.description}
            </p>
          </div>

          {/* Technologies */}
          <div className="mb-4 flex-1">
            <div className="flex flex-wrap gap-1.5 mb-3">
              {project.technologies.slice(0, 4).map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-300 text-xs rounded-md border border-blue-500/20"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="px-2 py-0.5 text-gray-500 text-xs rounded-md">
                  +{project.technologies.length - 4}
                </span>
              )}
            </div>

            {/* Highlights */}
            <ul className="space-y-1.5">
              {project.highlights.slice(0, 3).map((highlight, idx) => (
                <li key={idx} className="text-gray-400 text-xs flex items-start">
                  <span className="text-purple-400 mr-1.5 mt-0.5">▸</span>
                  <span className="line-clamp-1">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer with Download Buttons */}
          <div className="pt-4 border-t border-gray-800">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-gray-500">{project.period}</span>
              <div className="h-1 w-16 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            {project.appLinks && (project.appLinks.appStore || project.appLinks.googlePlay) && (
              <div className="flex gap-2">
                {project.appLinks.appStore && (
                  <a
                    href={project.appLinks.appStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r from-blue-600/80 to-blue-700/80 hover:from-blue-600 hover:to-blue-700 text-white text-xs font-medium rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Smartphone size={14} />
                    <span>App Store</span>
                  </a>
                )}
                {project.appLinks.googlePlay && (
                  <a
                    href={project.appLinks.googlePlay}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r from-green-600/80 to-green-700/80 hover:from-green-600 hover:to-green-700 text-white text-xs font-medium rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-green-500/50"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Smartphone size={14} />
                    <span>Google Play</span>
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
