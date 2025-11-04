import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const CustomScrollbar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Custom scrollbar styles
    const style = document.createElement('style');
    style.textContent = `
      ::-webkit-scrollbar {
        width: 6px;
      }
      ::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.05);
      }
      ::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.2);
        border-radius: 3px;
        transition: all 0.3s ease;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: rgba(255, 255, 255, 0.3);
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-[#60a5fa] origin-left z-[60]"
      style={{ scaleX }}
    />
  );
};

export default CustomScrollbar; 