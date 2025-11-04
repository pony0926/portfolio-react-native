import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";

interface TimelineItem {
  id: number;
  year: string;
  title: string;
  description: string;
  type: 'education' | 'experience' | 'award';
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    year: "2013",
    title: "Bachelor of Science in Civil Engineering, University of California, Davis",
    description: "",
    type: "education"
  },
  {
    id: 2,
    year: "August 2016 - April 2019",
    title: "Mobile Software Developer, Walmart eCommerce Global",
    description: "",
    type: "experience"
  },
  {
    id: 3,
    year: "April 2019 - December 2020",
    title: "Mobile Software Developer, Pear Therapeutics",
    description: "",
    type: "experience"
  },
  {
    id: 4,
    year: "January 2021 - April 2023",
    title: "Senior Mobile Developer, Pear Therapeutics",
    description: "",
    type: "experience"
  },
  {
    id: 5,
    year: "July 2023 - February 2025",
    title: "Senior React Native Developer, ChargePoint",
    description: "",
    type: "experience"
  },
  {
    id: 6,
    year: "February 2025 - September 2025",
    title: "Senior React Native Engineer, Yahoo",
    description: "",
    type: "experience"
  },
];

const About = () => {
  return (
    <section id="about" className="section-container">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Tech Stack & Skills */}
        <motion.div 
          className="lg:col-span-1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="h-full glass-card rounded-xl border-muted">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">Profile Summary</h3>
              
              {/* Profile Summary */}
              <div className="space-y-5 text-sm">
                <p className="text-gray-300 leading-relaxed">
                  Senior Software Engineer with 9 years of hands-on experience building and scaling mobile applications used by millions. Specialized in React Native, TypeScript, and Node.js, with a strong background in integrating real-time data, optimizing performance, and modernizing app architectures for iOS and Android.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Known for delivering stable, high-performing releases across complex ecosystems like Yahoo, ChargePoint, and Walmart, combining technical precision with practical problem-solving. Experienced in BLE integrations, push notification systems, and AI-driven personalization, while keeping codebases maintainable through modular design and type safety.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Comfortable working end-to-end—from building UI layers and managing app state to setting up CI/CD pipelines, automated testing, and Over-The-Air (OTA) updates. Experienced in agile environments where close coordination with backend engineers, designers, and product managers turns ideas into reliable, user-friendly mobile products.
                </p>
                <p className="text-gray-300 leading-relaxed italic">
                  Grounded in real engineering work, not theory—focused on building fast, stable apps that stand up in production and improve with each release.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
        
        {/* Timeline */}
        <div className="lg:col-span-2">
          <div className="relative">
            <div className="absolute left-6 top-5 bottom-5 w-1 bg-[#3a3a3a] rounded-full"></div>
            
            <div className="space-y-16">
              {timelineData.map((item, idx) => (
                <motion.div 
                  key={item.id} 
                  className="relative pl-16 flex items-start group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute left-0 top-1 w-12 h-12 bg-[#2a2a2a] border-2 border-[#60a5fa] flex items-center justify-center rounded-full z-10 group-hover:bg-[#3a3a3a] transition-colors">
                    {item.type === 'education' ? (
                      <GraduationIcon />
                    ) : item.type === 'experience' ? (
                      <WorkIcon />
                    ) : (
                      <AwardIcon />
                    )}
                  </div>
                  <Card className="glass-card rounded-lg border-[#3a3a3a] group-hover:border-[#60a5fa] transition-colors w-full">
                    <CardContent className="p-6">
                      <div className="text-sm font-medium text-muted-foreground mb-1">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-[#60a5fa]">{item.title}</h3>
                      <p className="text-muted-foreground whitespace-pre-line">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WorkIcon = () => (
  <svg 
    className="w-5 h-5 text-white" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
    />
  </svg>
);

const GraduationIcon = () => (
  <svg 
    className="w-5 h-5 text-white" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M19.916 4.626a.75.75 0 01-.025 1.042l-7.25 6.5a.75.75 0 01-1 0l-7.25-6.5a.75.75 0 011.025-1.042L12 10.168l6.591-5.584a.75.75 0 01.975.042z" 
    />
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M3.75 5.25h1.5M20.25 5.25h-1.5M3.75 18.75h1.5M20.25 18.75h-1.5M9 18.75v-4.5M12 18.75v-4.5M15 18.75v-4.5M1.5 12.75h21" 
    />
  </svg>
);

const AwardIcon = () => (
  <svg 
    className="w-5 h-5 text-white" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
    />
  </svg>
);

export default About;
