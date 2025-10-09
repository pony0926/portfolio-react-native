import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import AnimatedText from './AnimatedText';
import { CloudDownload } from './CloudDownload';
import { LayoutGrid } from './LayoutGrid';
import { FileChartColumn } from './FileChartColumn';

const Hero = () => {

  const handleResumeView = () => {
    window.open('/assets/resume.pdf', '_blank');
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/assets/resume.pdf'; // Updated to your resume file location
    link.download = 'AlexSuResume.pdf'; // Updated to your new resume file
    link.click();
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-36">
      <div className="container mx-auto px-6 z-10 relative">
        <div className="max-w-6xl mx-auto text-center px-4">
          <motion.h1 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-relaxed mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="block">Hi, I am Alex Su</span>
            <span className="block mt-2">
              <span className="bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-indigo-500 via-red-500 to-blue-500 text-transparent bg-clip-text">Senior React Native Engineer</span> <span className="text-white">specializing in<br className="hidden sm:block" /> cross-platform mobile development, AI integration,<br className="hidden sm:block" /> </span><span className="bg-gradient-to-r from-red-500 via-green-500 to-purple-500 text-transparent bg-clip-text">scalable backend development.</span>
            </span>
          </motion.h1>
          
          <motion.h2 
            className="text-lg md:text-xl text-gray-400 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="block">I build</span>
            <AnimatedText 
              text={[
                " Cross-platform mobile apps ", 
                "AI-powered mobile features", 
                "Scalable backend systems",
                "High-performance mobile solutions"
              ]} 
              className="text-blue-400 font-medium" 
            />
          </motion.h2>
          
          <motion.p 
            className="text-md mb-10 text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
           Creating fast, smooth, and intelligent mobile experiences with cutting-edge technology and innovative solutions.
          </motion.p>
          
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <a href="#projects" className="gradient-border-button">
              <LayoutGrid width={20} height={20} stroke="#ffffff" />
              My Work
            </a>
            <div className="flex items-center gap-2">
              <button 
                className="gradient-border-button"
                onClick={handleResumeView}
              >
                <FileChartColumn width={20} height={20} stroke="#ffffff" />
                Resume
              </button>
              <button 
                className="gradient-border-button download-btn"
                onClick={handleResumeDownload}
                title="Download Resume"
              >
                <CloudDownload width={20} height={20} stroke="#ffffff" />
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            className="mt-16 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <div className="animate-bounce p-2 bg-blue-900/30 rounded-full border border-blue-500/20">
              <a href="#technologies" className="text-blue-400">
                <svg 
                  className="w-6 h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                  />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
