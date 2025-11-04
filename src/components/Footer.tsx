import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative">
      {/* Main footer content */}
      <div className="bg-[#0a0a0a]/80 backdrop-blur-sm py-4 border-t border-[#3a3a3a]/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Left side - Logo */}
            <div className="flex items-center mb-4 md:mb-0">
              <div className="flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="h-10 w-10">
                  <defs>
                    <linearGradient id="footerLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#60a5fa" />
                      <stop offset="50%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                    <filter id="footerGlow">
                      <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  <text 
                    x="50" 
                    y="65" 
                    fontSize="50" 
                    fontWeight="700" 
                    fill="url(#footerLogoGradient)" 
                    textAnchor="middle" 
                    dominantBaseline="middle"
                    filter="url(#footerGlow)"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    A
                  </text>
                </svg>
              </div>
            </div>

            {/* Right side - Text */}
            <div className="flex items-center">
              <p className="text-gray-400 text-sm md:text-base">
                Pixels, code, and endless possibilities.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-[#2a2a2a] border border-[#3a3a3a] hover:bg-[#3a3a3a] text-white rounded-lg transition-colors"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
};

export default Footer;
