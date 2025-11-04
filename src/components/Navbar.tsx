import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import {
  User,
  Code2,
  BookOpen,
  Brain,
  Menu,
  X,
} from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: "#hero", label: "Home", icon: User },
    { href: "#technologies", label: "Skills", icon: Brain },
    { href: "#about", label: "About Me", icon: User },
    { href: "#projects", label: "Projects", icon: Code2 },
    
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 h-16 z-50 transition-all duration-300 border-b border-[#3a3a3a]/30 ${
        isAtTop ? 'bg-[#0a0a0a]/80 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center h-full">
          {/* Logo with Glow Effect */}
          <a href="#" className="flex items-center justify-center h-full">
            <svg viewBox="0 0 100 100" className="h-10 w-10">
              <defs>
                <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#60a5fa" />
                  <stop offset="50%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              <text 
                x="50" 
                y="65" 
                fontSize="60" 
                fontWeight="700" 
                fill="url(#logoGradient)" 
                textAnchor="middle" 
                dominantBaseline="middle"
                filter="url(#glow)"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                A
              </text>
            </svg>
          </a>
          
          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center flex-1 justify-center">
            {/* Main Navigation */}
            <div className="flex px-6 py-1.5 bg-[#0a0a0a]/60 backdrop-blur-sm border border-[#3a3a3a]/50 rounded-lg">
              <div className="flex space-x-8 items-center justify-center">
                {navItems.map((item) => (
                  <IslandNavLink key={item.href} href={item.href}>
                    <item.icon className="w-4 h-4 mr-2" />
                    {item.label}
                  </IslandNavLink>
                ))}
              </div>
            </div>
          </div>

          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:bg-gray-800"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div 
          className="md:hidden p-4 bg-[#0a0a0a]/80 backdrop-blur-sm border-t border-[#3a3a3a]/30"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <MobileNavLink 
                key={item.href} 
                href={item.href} 
                onClick={() => setMobileMenuOpen(false)}
              >
                <item.icon className="w-4 h-4 mr-2" />
                {item.label}
              </MobileNavLink>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const IslandNavLink = ({ 
  href, 
  children 
}: { 
  href: string; 
  children: React.ReactNode;
}) => {
  const handleClick = (e: React.MouseEvent) => {
    if (href === "#hero") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <a 
      href={href} 
      onClick={handleClick}
      className="relative px-3 py-2 text-gray-400 hover:text-white transition-all flex items-center group"
    >
      <div className="absolute inset-0 bg-[#60a5fa]/20 rounded-lg opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"></div>
      <span className="relative z-10 flex items-center">{children}</span>
    </a>
  );
};

const MobileNavLink = ({ 
  href, 
  children,
  onClick
}: { 
  href: string; 
  children: React.ReactNode;
  onClick: () => void;
}) => {
  const handleClick = (e: React.MouseEvent) => {
    if (href === "#hero") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    onClick();
  };

  return (
    <a 
      href={href} 
      onClick={handleClick}
      className="relative text-gray-300 hover:text-white py-2 px-4 block hover:bg-gray-800/30 rounded-md transition-all flex items-center group"
    >
      <div className="absolute inset-0 bg-[#60a5fa]/20 rounded-md opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300"></div>
      <span className="relative z-10">{children}</span>
    </a>
  );
};

export default Navbar;
