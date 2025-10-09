import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin } from 'lucide-react';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';



const DeveloperStats = () => (
  <Card className="glowing-card bg-gray-900/70 border-gray-800 rounded-xl transition-all duration-300 overflow-hidden h-full flex flex-col justify-center">
    <CardHeader>
      <CardTitle className="text-3xl font-bold text-white mb-2">Developer Stats</CardTitle>
      <p className="text-gray-400 text-sm">Real-time achievements & metrics</p>
    </CardHeader>
    <CardContent>
      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg p-4 border border-blue-500/30">
          <div className="text-2xl font-bold text-blue-400 mb-1">4+</div>
          <div className="text-xs text-gray-300">Companies</div>
        </div>
        <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-lg p-4 border border-green-500/30">
          <div className="text-2xl font-bold text-green-400 mb-1">30+</div>
          <div className="text-xs text-gray-300">Technologies</div>
        </div>
        <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg p-4 border border-purple-500/30">
          <div className="text-2xl font-bold text-purple-400 mb-1">10+</div>
          <div className="text-xs text-gray-300">Years Experience</div>
        </div>
        <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg p-4 border border-orange-500/30">
          <div className="text-2xl font-bold text-orange-400 mb-1">1</div>
          <div className="text-xs text-gray-300">Certification</div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-white mb-4 text-center">Connect With Me</h4>
        <div className="flex justify-center">
          <div id="SocailIcons" className="relative">
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/alexandersu/" target="_blank" rel="noopener noreferrer" className="icons linkedin group">
              <span className="iconName">LinkedIn</span>
              <div className="icon link">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Coding Platforms - Removed as not in resume */}
      {/* <div className="border-t border-gray-700 pt-4">
        <h4 className="text-sm font-semibold text-gray-300 mb-3">Coding Platforms</h4>
        <div className="flex gap-3">
        {codingPlatforms.map((platform) => (
          <a
            key={platform.label}
            href={platform.href}
            target="_blank"
            rel="noopener noreferrer"
              className={`w-12 h-12 flex items-center justify-center rounded-full bg-transparent text-2xl transition-all duration-300 hover:bg-white/10 hover:shadow-[0_0_12px_3px_rgba(36,160,255,0.2)] hover:scale-110`}
            aria-label={platform.label}
              title={platform.label}
          >
            <platform.icon />
          </a>
        ))}
        </div>
            </div> */}
    </CardContent>
  </Card>
);


const Contact = () => {
  return (
    <section id="contact" className="section-container">
      <div className="text-center mb-12">
        <h2 className="section-title">Let's connect</h2>
          </div>
      <div className="max-w-4xl mx-auto">
        {/* Developer Stats, Contact Methods, Coding Platforms */}
        <DeveloperStats />
      </div>
    </section>
  );
};

export default Contact;
