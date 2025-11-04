"use client";

import React from "react";
import { motion } from "framer-motion";
import { Box, Lock, Search, Settings, Sparkles, ExternalLink } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

// Tech icon mapping (from Technologies.tsx)
const techIconMap: Record<string, string> = {
  JavaScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  TypeScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  Python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  Java: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  'C++': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
  'C#': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
  HTML: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  HTML5: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  CSS: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  CSS3: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  React: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  Angular: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
  'Tailwind CSS': 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
  Redux: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
  Bootstrap: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
  'Material UI': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg',
  jQuery: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg',
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'Express.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  Django: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
  TensorFlow: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
  FastAPI: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
  GraphQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
  REST: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/api/api-original-wordmark.svg',
  Supabase: 'https://avatars.githubusercontent.com/u/54469796?s=200&v=4',
  MongoDB: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  PostgreSQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  Postgres: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  MySQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  SQLite: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg',
  Redis: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
  Firebase: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
  Docker: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  AWS: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
  Azure: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
  Git: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  Vercel: 'https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png',
  Netlify: 'https://www.netlify.com/v3/img/components/logomark.png',
  Jenkins: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg',
  Linux: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
  LLM: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  OpenAI: 'https://seeklogo.com/images/O/openai-logo-8B9BFEDC26-seeklogo.com.png',
  Agents: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  Timer: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  Productivity: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  Stats: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  IoT: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'WebSocket': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'D3.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'Weather API': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'Forecast': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'React Native': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Expo': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Redux Toolkit': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
  'React Navigation': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'TensorFlow Lite': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
  'Flask': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
  'OCPP': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'AsyncStorage': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Background Tasks': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Sync': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'HIPAA': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/security/security-original.svg',
  'SecureStore': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Encryption': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/security/security-original.svg',
  'Flipper': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Performance': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'Debugging': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'Monitoring': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
};

// Micro projects data based on Alex Su's experience and skills
const microProjectsData = [
  {
    title: "React Native Boilerplate",
    description: "Production-ready <span class='gradient-highlight'>React Native starter</span> with <span class='gradient-highlight'>TypeScript</span>, <span class='gradient-highlight'>Redux Toolkit</span>, and <span class='gradient-highlight'>navigation setup</span>.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["TypeScript", "Redux Toolkit", "Expo"],
    demoUrl: undefined,
    githubUrl: "https://github.com/alexsu/rn-boilerplate"
  },
  {
    title: "AI Smart Reply Generator",
    description: "Mobile app with <span class='gradient-highlight'>TensorFlow Lite</span> integration for <span class='gradient-highlight'>AI-powered smart replies</span> and <span class='gradient-highlight'>message categorization</span>.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["TensorFlow Lite", "Python", "Flask", "MongoDB"],
    demoUrl: undefined,
    githubUrl: "https://github.com/alexsu/ai-smart-reply"
  },
  {
    title: "EV Charging Station Finder",
    description: "Cross-platform app for <span class='gradient-highlight'>EV charging stations</span> with <span class='gradient-highlight'>real-time availability</span> and <span class='gradient-highlight'>OCPP integration</span>.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["GraphQL", "Node.js", "PostgreSQL", "Redis", "AWS"],
    demoUrl: undefined,
    githubUrl: "https://github.com/alexsu/ev-charging-finder"
  },
  {
    title: "Offline-First Mail Client",
    description: "React Native mail client with <span class='gradient-highlight'>SQLite storage</span>, <span class='gradient-highlight'>background sync</span>, and <span class='gradient-highlight'>offline capabilities</span>.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["SQLite", "AsyncStorage", "WebSocket", "Express.js"],
    demoUrl: undefined,
    githubUrl: "https://github.com/alexsu/offline-mail-client"
  },
  {
    title: "Healthcare Compliance Tracker",
    description: "HIPAA-compliant app for <span class='gradient-highlight'>patient data tracking</span> with <span class='gradient-highlight'>secure authentication</span> and <span class='gradient-highlight'>encrypted storage</span>.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Firebase", "SecureStore", "Docker"],
    demoUrl: undefined,
    githubUrl: "https://github.com/alexsu/healthcare-tracker"
  },
  {
    title: "Mobile Performance Monitor",
    description: "Development tool for <span class='gradient-highlight'>React Native performance</span> monitoring with <span class='gradient-highlight'>Flipper integration</span> and <span class='gradient-highlight'>memory profiling</span>.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Flipper", "Monitoring", "Git"],
    demoUrl: undefined,
    githubUrl: "https://github.com/alexsu/rn-performance-monitor"
  }
];

// Color gradients for each card - clean and modern colors
const cardGradients = [
  'linear-gradient(163deg, #00ff75 0%, #3700ff 100%)', // Blue-Green
  'linear-gradient(163deg, #ff6b6b 0%, #ee5a6f 100%)', // Pink-Red
  'linear-gradient(163deg, #4ecdc4 0%, #44a08d 100%)', // Teal
  'linear-gradient(163deg, #f093fb 0%, #f5576c 100%)', // Purple-Pink
  'linear-gradient(163deg, #4facfe 0%, #00f2fe 100%)', // Blue-Cyan
  'linear-gradient(163deg, #43e97b 0%, #38f9d7 100%)', // Green-Cyan
];

export default function GlowingEffectDemo() {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
      {microProjectsData.map((project, idx) => (
        <motion.li
          key={project.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          viewport={{ once: true }}
        >
          <GridItem 
            project={{
              ...project,
              image: project.image && project.image.startsWith('/') ? 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80' : project.image
            }}
            index={idx}
          />
        </motion.li>
      ))}
    </ul>
  );
}

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
}

interface GridItemProps {
  project: Project;
  index: number;
}

const GridItem = ({ project, index }: GridItemProps) => {
  const gradient = cardGradients[index % cardGradients.length];
  const hoverColors = [
    'rgba(0, 255, 117, 0.30)', // Blue-Green
    'rgba(255, 107, 107, 0.30)', // Pink-Red
    'rgba(78, 205, 196, 0.30)', // Teal
    'rgba(240, 147, 251, 0.30)', // Purple-Pink
    'rgba(79, 172, 254, 0.30)', // Blue-Cyan
    'rgba(67, 233, 123, 0.30)', // Green-Cyan
  ];
  const hoverColor = hoverColors[index % hoverColors.length];

  return (
    <div className="h-[16rem] list-none">
      <div 
        className="micro-project-card h-full"
        style={{
          backgroundImage: gradient,
        }}
      >
        <div
          className="micro-project-card-inner relative h-full rounded-2xl border-2 border-white/30 hover:border-blue-400 transition-colors duration-300 p-4 overflow-hidden shadow-2xl group card-shadow-effect project-card-hover input-shadow-effect"
          style={{
            backgroundImage: `url(${project.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          onMouseEnter={(e) => {
            const card = e.currentTarget.closest('.micro-project-card') as HTMLElement;
            if (card) {
              card.style.boxShadow = `0px 0px 30px 1px ${hoverColor}`;
            }
          }}
          onMouseLeave={(e) => {
            const card = e.currentTarget.closest('.micro-project-card') as HTMLElement;
            if (card) {
              card.style.boxShadow = '';
            }
          }}
        >
        <GlowingEffect
          spread={20}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/80 to-black/50 pointer-events-none z-0" />
        <div className="relative flex h-full flex-col justify-between gap-2 rounded-lg p-3 z-10">
          <div className="flex flex-row items-start justify-between gap-2">
            <div className="flex-1 min-w-0">
              <h3 className="font-sans text-xl font-bold text-white mb-1">
                {project.title}
              </h3>
              <p 
                className="font-sans text-sm text-gray-200 mb-2"
                dangerouslySetInnerHTML={{ __html: project.description }}
              />
            </div>
            {/* Tech stack logos - vertical column, glassmorphism style */}
            <div className="flex flex-col gap-1 items-end justify-start min-w-[2rem]">
              {project.tags.map((tag) => (
                techIconMap[tag] ? (
                  <div
                    key={tag}
                    className="w-7 h-7 flex items-center justify-center rounded bg-black/30 backdrop-blur-md border border-white/10 shadow-md"
                    title={tag}
                  >
                    <img
                      src={techIconMap[tag]}
                      alt={tag}
                      className="w-5 h-5 object-contain"
                      style={{ filter: 'none' }}
                    />
                  </div>
                ) : null
              ))}
            </div>
          </div>
          {/* Live demo button only */}
          <div className="flex flex-row items-center justify-end gap-2 mt-auto">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-black/70 border border-white/20 hover:bg-gray-900 hover:border-blue-400 transition-colors"
                title="View Live"
              >
                <ExternalLink className="w-5 h-5 text-white" />
              </a>
            )}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}; 