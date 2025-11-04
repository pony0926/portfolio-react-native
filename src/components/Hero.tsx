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
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="block mb-4">Hi, I am Alex Su</span>
            <span className="block mt-6">
              <span className="block mb-3 sm:mb-4">
                <span className="text-[#60a5fa] font-semibold">Senior React Native Engineer</span> <span className="text-white">specializing in</span>
              </span>
              <span className="block mb-3 sm:mb-4 text-white">
                cross-platform mobile development, AI
              </span>
              <span className="block mb-3 sm:mb-4 text-white">
                integration,
              </span>
              <span className="block">
                <span className="text-[#60a5fa] font-semibold">scalable backend development.</span>
              </span>
            </span>
          </motion.h1>
          
          <motion.h2 
            className="text-lg md:text-xl text-gray-400 mb-8 font-medium"
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
              className="text-[#60a5fa] font-medium" 
            />
          </motion.h2>
          
          <motion.p 
            className="text-base mb-10 text-gray-400"
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
