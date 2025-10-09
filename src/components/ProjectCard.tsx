import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface Project {
  id: number;
  title: string;
  description: string | React.ReactNode;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  status?: string;
  statusColor?: string;
  statusGlow?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: {
          type: "spring",
          bounce: 0.4,
          duration: 0.8,
          delay: index * 0.1
        }
      }}
      viewport={{ once: true, amount: 0.1 }}
      whileHover={{ y: -5 }}
      className="h-full group relative"
    >
      {/* Gradient shadow effect */}
      <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-amber-500/60 via-sky-500/60 to-gray-500/60 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 -z-10 scale-110 group-hover:scale-100"></div>
      
      <Card className="overflow-hidden transition-all duration-300 h-full flex flex-col bg-gray-900/70 border-gray-800 rounded-xl relative project-card-hover card-shadow-effect main-project-card">
        {/* Shine effect */}
        <div className="main-project-card__shine"></div>
        {/* Glow effect */}
        <div className="main-project-card__glow"></div>
        
        <div className="overflow-hidden h-48 relative main-project-card__image">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
        </div>
        
        {/* Status badge */}
        {project.statusGlow === 'in-progress' && (
          <div className="main-project-card__badge">In Progress</div>
        )}
        
        <CardHeader>
          <div className="flex items-center gap-2">
            <CardTitle className="text-xl font-semibold text-white flex items-center gap-2 main-project-card__title">
              {project.title}
              {project.statusGlow === 'in-progress' && (
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
              )}
            </CardTitle>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="text-xs bg-gray-800/50 text-blue-300 border-blue-500/20">
                {tag}
              </Badge>
            ))}
          </div>
        </CardHeader>
        
        <CardContent className="flex-grow">
          <CardDescription className="text-sm text-gray-400 main-project-card__description">
            {typeof project.description === 'string' ? (
              <div dangerouslySetInnerHTML={{ __html: project.description }} />
            ) : (
              project.description
            )}
          </CardDescription>
        </CardContent>
        
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
