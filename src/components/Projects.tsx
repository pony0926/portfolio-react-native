import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard, { Project } from './ProjectCard';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import GlowingEffectDemo from "./ui/glowing-effect-demo";
import { useState } from 'react';
import { Card } from './ui/card';

// Sample projects data
const projectsData: Project[] = [
  {
    id: 1,
    title: "Yahoo Mail App – React Native Modernization",
    description: (
      <div className="text-white space-y-4 leading-relaxed">
        <p className="text-gray-200 text-sm leading-relaxed">
          Led the mobile modernization of Yahoo Mail Next, revamping its core architecture for both iOS and Android platforms using <span className="text-blue-400 font-semibold">React Native</span>. Built a unified codebase ensuring <span className="text-green-400 font-semibold">high performance</span>, <span className="text-purple-400 font-semibold">maintainability</span>, and <span className="text-yellow-400 font-semibold">seamless user experience</span> across devices.
        </p>
        
        <div className="space-y-3">
          <div className="flex items-start space-x-3 p-3 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg border border-blue-500/20">
            <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <span className="text-yellow-400 font-semibold text-sm">UI Optimization:</span>
              <p className="text-gray-300 text-xs mt-1">Re-engineered rendering layer with <span className="text-blue-400">React Native Fabric renderer</span> for enhanced UI responsiveness and concurrent rendering.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3 p-3 bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-lg border border-green-500/20">
            <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <span className="text-green-400 font-semibold text-sm">Offline-first Experience:</span>
              <p className="text-gray-300 text-xs mt-1">Developed robust offline system using <span className="text-blue-400">SQLite</span> and <span className="text-blue-400">AsyncStorage</span> for message availability in low connectivity.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3 p-3 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-lg border border-purple-500/20">
            <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <span className="text-purple-400 font-semibold text-sm">AI-Powered Features:</span>
              <p className="text-gray-300 text-xs mt-1">Integrated Python microservices with <span className="text-blue-400">Flask</span> and <span className="text-blue-400">TensorFlow Lite</span> for smart replies and categorization.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3 p-3 bg-gradient-to-r from-orange-900/20 to-red-900/20 rounded-lg border border-orange-500/20">
            <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <span className="text-orange-400 font-semibold text-sm">Push Notifications:</span>
              <p className="text-gray-300 text-xs mt-1">Integrated <span className="text-blue-400">FCM</span> and <span className="text-blue-400">APNs</span> for real-time inbox updates and user engagement.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3 p-3 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-lg border border-cyan-500/20">
            <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <span className="text-cyan-400 font-semibold text-sm">CI/CD Integration:</span>
              <p className="text-gray-300 text-xs mt-1">Automated pipelines with <span className="text-blue-400">Expo</span>, <span className="text-blue-400">Bitrise</span>, and <span className="text-blue-400">GitHub Actions</span> for streamlined development workflow.</p>
            </div>
          </div>
        </div>
        
        <div className="mt-4 p-3 bg-gradient-to-r from-emerald-900/30 to-teal-900/30 rounded-lg border border-emerald-500/30">
          <p className="text-emerald-300 text-xs font-medium leading-relaxed">
            Optimized for large inboxes and high throughput, delivering consistent, responsive experience for millions of users.
          </p>
        </div>
      </div>
    ),
    image: "/assets/img/Yahoo/main.jpeg", // Main image from Yahoo folder
    tags: ["React Native", "Expo", "TypeScript", "Redux Toolkit", "GraphQL", "Node.js", "Python", "AI/ML"],
    demoUrl: "#", // No demo URL provided
    githubUrl: "#", // No GitHub URL provided
  },
  {
    id: 2,
    title: "ChargePoint – EV Charging Mobile Platform",
    description: (
      <div className="text-white space-y-4 leading-relaxed">
        <p className="text-gray-200 text-sm leading-relaxed">
          Contributed to the development of the ChargePoint mobile platform, enabling electric vehicle (EV) drivers to locate, reserve, and manage charging stations in real-time. Built a comprehensive solution for the EV charging ecosystem with <span className="text-green-400 font-semibold">real-time data management</span> and <span className="text-blue-400 font-semibold">seamless user experience</span>.
        </p>
        
        <div className="space-y-3">
          <div className="flex items-start space-x-3 p-3 bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-lg border border-green-500/20">
            <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <span className="text-green-400 font-semibold text-sm">Real-time EV Charging Management:</span>
              <p className="text-gray-300 text-xs mt-1">Developed interactive map interface displaying real-time charging station locations and status updates for seamless navigation.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3 p-3 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-lg border border-blue-500/20">
            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <span className="text-blue-400 font-semibold text-sm">Seamless User Experience:</span>
              <p className="text-gray-300 text-xs mt-1">Implemented secure authentication with <span className="text-blue-400">OAuth2</span> and persistent session management using <span className="text-blue-400">SecureStore</span> and <span className="text-blue-400">AsyncStorage</span>.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3 p-3 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-lg border border-purple-500/20">
            <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <span className="text-purple-400 font-semibold text-sm">UI/UX Design:</span>
              <p className="text-gray-300 text-xs mt-1">Built scalable UI architecture with <span className="text-blue-400">React Native</span> and <span className="text-blue-400">TypeScript</span>, incorporating consistent design language for mobile-first experiences.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3 p-3 bg-gradient-to-r from-orange-900/20 to-yellow-900/20 rounded-lg border border-orange-500/20">
            <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <span className="text-orange-400 font-semibold text-sm">Performance Optimization:</span>
              <p className="text-gray-300 text-xs mt-1">Applied <span className="text-blue-400">lazy loading</span> and <span className="text-blue-400">code splitting</span> techniques to handle large station datasets efficiently.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3 p-3 bg-gradient-to-r from-cyan-900/20 to-teal-900/20 rounded-lg border border-cyan-500/20">
            <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <span className="text-cyan-400 font-semibold text-sm">API Integration:</span>
              <p className="text-gray-300 text-xs mt-1">Integrated <span className="text-blue-400">OCPP</span> and <span className="text-blue-400">GraphQL</span> to enable seamless communication between app and diverse EV hardware systems.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3 p-3 bg-gradient-to-r from-indigo-900/20 to-blue-900/20 rounded-lg border border-indigo-500/20">
            <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <span className="text-indigo-400 font-semibold text-sm">CI/CD Implementation:</span>
              <p className="text-gray-300 text-xs mt-1">Streamlined development pipeline with <span className="text-blue-400">Expo</span>, <span className="text-blue-400">Fastlane</span>, and <span className="text-blue-400">GitHub Actions</span> for continuous updates.</p>
            </div>
          </div>
        </div>
        
        <div className="mt-4 p-3 bg-gradient-to-r from-emerald-900/30 to-green-900/30 rounded-lg border border-emerald-500/30">
          <p className="text-emerald-300 text-xs font-medium leading-relaxed">
            Showcased ability to create high-performance mobile applications while collaborating cross-functionally to integrate backend systems for real-time data management.
          </p>
        </div>
      </div>
    ),
    image: "/assets/img/ChargePoint/main.jpeg", // Main image from ChargePoint folder
    tags: ["React Native", "Expo", "TypeScript", "Redux Toolkit", "GraphQL", "Node.js", "OAuth2"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Pear Therapeutics – Digital Therapeutics Mobile Apps",
    description: (
      <div className="text-white space-y-4 leading-relaxed">
        <p className="text-gray-200 text-sm leading-relaxed">
          Played a key role in developing <span className="text-purple-400 font-semibold">FDA-cleared digital therapeutics apps</span>, including reSET, reSET-O, and Somryst, built using <span className="text-blue-400 font-semibold">React Native</span> and <span className="text-blue-400 font-semibold">TypeScript</span> for iOS and Android platforms. Focused on delivering <span className="text-green-400 font-semibold">health-focused mobile applications</span> with both technical and regulatory compliance.
        </p>
        
        <div className="space-y-3">
          <div className="flex items-start space-x-3 p-3 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-lg border border-purple-500/20">
            <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <span className="text-purple-400 font-semibold text-sm">FDA-Cleared Digital Health Solutions:</span>
              <p className="text-gray-300 text-xs mt-1">Contributed to development and maintenance of digital therapeutic apps meeting <span className="text-blue-400">HIPAA</span> and <span className="text-blue-400">FDA compliance</span> requirements.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3 p-3 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-lg border border-blue-500/20">
            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <span className="text-blue-400 font-semibold text-sm">Code Refactoring and Optimization:</span>
              <p className="text-gray-300 text-xs mt-1">Led migration from legacy <span className="text-blue-400">JavaScript</span> to <span className="text-blue-400">TypeScript</span>, introducing modular architecture and strict type definitions.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3 p-3 bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-lg border border-green-500/20">
            <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <span className="text-green-400 font-semibold text-sm">Patient and Clinician Features:</span>
              <p className="text-gray-300 text-xs mt-1">Designed reusable <span className="text-blue-400">React hooks</span> and components for patient onboarding, therapy modules, and clinician dashboards.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3 p-3 bg-gradient-to-r from-orange-900/20 to-red-900/20 rounded-lg border border-orange-500/20">
            <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <span className="text-orange-400 font-semibold text-sm">AI Integration:</span>
              <p className="text-gray-300 text-xs mt-1">Integrated <span className="text-blue-400">Python-based AI microservices</span> for analyzing speech data and providing cognitive biomarkers.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3 p-3 bg-gradient-to-r from-cyan-900/20 to-teal-900/20 rounded-lg border border-cyan-500/20">
            <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <span className="text-cyan-400 font-semibold text-sm">Wearable Device Integration:</span>
              <p className="text-gray-300 text-xs mt-1">Connected <span className="text-blue-400">Fitbit</span> and <span className="text-blue-400">Garmin SDKs</span> for real-time physiological data collection.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3 p-3 bg-gradient-to-r from-indigo-900/20 to-purple-900/20 rounded-lg border border-indigo-500/20">
            <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <span className="text-indigo-400 font-semibold text-sm">Testing and Quality Assurance:</span>
              <p className="text-gray-300 text-xs mt-1">Migrated testing framework to <span className="text-blue-400">Jest</span> and <span className="text-blue-400">React Native Testing Library</span> for FDA submission builds.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3 p-3 bg-gradient-to-r from-emerald-900/20 to-green-900/20 rounded-lg border border-emerald-500/20">
            <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <span className="text-emerald-400 font-semibold text-sm">Cloud and Backend Integration:</span>
              <p className="text-gray-300 text-xs mt-1">Developed secure cloud communication with <span className="text-blue-400">Firebase</span> and <span className="text-blue-400">REST APIs</span> for encrypted storage and HIPAA compliance.</p>
            </div>
          </div>
        </div>
        
        <div className="mt-4 p-3 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-lg border border-purple-500/30">
          <p className="text-purple-300 text-xs font-medium leading-relaxed">
            Emphasized ability to develop health-focused mobile applications that deliver both technical and regulatory compliance, contributing to the advancement of digital health solutions.
          </p>
        </div>
      </div>
    ),
    image: "/assets/img/Pear/1.webp", // First image from Pear folder
    tags: ["React Native", "TypeScript", "Node.js", "Firebase", "AWS Amplify", "Python", "HIPAA/FDA Compliance"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Walmart eCommerce Global – Mobile Shopping App",
    description: (
      <div className="text-white space-y-4 leading-relaxed">
        <p className="text-gray-200 text-sm leading-relaxed">
          Contributed to the development of the Walmart Mobile Shopping App, enhancing the mobile shopping experience for millions of users. Focused on delivering <span className="text-blue-400 font-semibold">high-scale, enterprise-level mobile applications</span> with <span className="text-green-400 font-semibold">seamless user interactions</span> and <span className="text-purple-400 font-semibold">compliance with industry standards</span>.
        </p>
        
        <div className="space-y-3">
          <div className="flex items-start space-x-3 p-3 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-lg border border-blue-500/20">
            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <span className="text-blue-400 font-semibold text-sm">Feature Development for Mobile Shopping:</span>
              <p className="text-gray-300 text-xs mt-1">Built and maintained <span className="text-blue-400">React Native</span> components for product listings, checkout flow, and user profile management on iOS and Android.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3 p-3 bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-lg border border-green-500/20">
            <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <span className="text-green-400 font-semibold text-sm">Real-Time Product APIs:</span>
              <p className="text-gray-300 text-xs mt-1">Collaborated with backend teams to integrate mobile front-end with real-time product APIs backed by <span className="text-blue-400">MySQL</span> and <span className="text-blue-400">MongoDB</span>.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3 p-3 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-lg border border-purple-500/20">
            <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <span className="text-purple-400 font-semibold text-sm">Personalization and Search:</span>
              <p className="text-gray-300 text-xs mt-1">Developed personalized search and recommendation features using <span className="text-blue-400">Elasticsearch</span> and <span className="text-blue-400">Kafka</span> event streams.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3 p-3 bg-gradient-to-r from-orange-900/20 to-yellow-900/20 rounded-lg border border-orange-500/20">
            <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <span className="text-orange-400 font-semibold text-sm">Performance Optimization:</span>
              <p className="text-gray-300 text-xs mt-1">Focused on optimizing app performance by profiling API latency, reducing bundle size, and improving rendering efficiency for large catalog views.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3 p-3 bg-gradient-to-r from-cyan-900/20 to-teal-900/20 rounded-lg border border-cyan-500/20">
            <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <span className="text-cyan-400 font-semibold text-sm">Cross-Functional Collaboration:</span>
              <p className="text-gray-300 text-xs mt-1">Worked closely with backend developers to integrate secure order tracking and payment workflows using <span className="text-blue-400">Spring-based microservices</span>.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3 p-3 bg-gradient-to-r from-indigo-900/20 to-blue-900/20 rounded-lg border border-indigo-500/20">
            <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <span className="text-indigo-400 font-semibold text-sm">Testing and Continuous Integration:</span>
              <p className="text-gray-300 text-xs mt-1">Implemented unit and integration tests using <span className="text-blue-400">Mocha</span>, <span className="text-blue-400">Chai</span>, and <span className="text-blue-400">Enzyme</span> for stable CI pipelines.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3 p-3 bg-gradient-to-r from-emerald-900/20 to-green-900/20 rounded-lg border border-emerald-500/20">
            <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <span className="text-emerald-400 font-semibold text-sm">Mobile Transactions and Compliance:</span>
              <p className="text-gray-300 text-xs mt-1">Supported secure payment processing through <span className="text-blue-400">Spring-based microservices</span>, ensuring secure and compliant transactions.</p>
            </div>
          </div>
        </div>
        
        <div className="mt-4 p-3 bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-lg border border-blue-500/30">
          <p className="text-blue-300 text-xs font-medium leading-relaxed">
            Enhanced ability to work in high-scale, enterprise-level mobile applications, ensuring seamless user interactions and compliance with industry standards.
          </p>
        </div>
      </div>
    ),
    image: "/assets/img/Walmart/main.jpg", // Main image from Walmart folder
    tags: ["React Native", "JavaScript", "Node.js", "Express.js", "MySQL", "MongoDB", "Kafka", "Elasticsearch"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

const yahooImages = [
  '/assets/img/Yahoo/1.jpg',
  '/assets/img/Yahoo/2.png',
  '/assets/img/Yahoo/3.gif',
  '/assets/img/Yahoo/4.jpg',
  '/assets/img/Yahoo/5.png',
  '/assets/img/Yahoo/6.png',
  '/assets/img/Yahoo/7.jpg',
];

const chargePointImages = [
  '/assets/img/ChargePoint/1.webp',
  '/assets/img/ChargePoint/2.jpeg',
  '/assets/img/ChargePoint/3.jpg',
  '/assets/img/ChargePoint/4.png',
  '/assets/img/ChargePoint/5.png',
  '/assets/img/ChargePoint/6.png',
  '/assets/img/ChargePoint/7.png',
];

const walmartImages = [
  '/assets/img/Walmart/1.webp',
  '/assets/img/Walmart/2.jpg',
  '/assets/img/Walmart/3.jpg',
  '/assets/img/Walmart/4.jpg',
  '/assets/img/Walmart/5.webp',
  '/assets/img/Walmart/6.webp',
  '/assets/img/Walmart/7.webp',
  '/assets/img/Walmart/8.webp',
];

const pearImages = [
  '/assets/img/Pear/1.webp',
  '/assets/img/Pear/2.png',
  '/assets/img/Pear/3.png',
  '/assets/img/Pear/4.jpg',
  '/assets/img/Pear/5.jpg',
  '/assets/img/Pear/6.avif',
  '/assets/img/Pear/7.png',
];

const walmartModalDescription = (
  <div className="text-white space-y-4 text-base md:text-lg">
    <div className="font-bold text-2xl mb-2 flex items-center gap-2">
      <span role="img" aria-label="mobile">📱</span> Walmart eCommerce Global App: Overview
    </div>
    <div>
      The Walmart eCommerce Global App serves as the digital gateway to Walmart's extensive online retail ecosystem. It integrates various services, including product browsing, order management, and personalized shopping experiences, catering to a diverse global customer base.
    </div>
    <div className="font-semibold text-lg flex items-center gap-2 mt-4">
      <span role="img" aria-label="screenshots">🖼️</span> Interface Screenshots
    </div>
    <ul className="list-disc ml-6 space-y-2">
      <li><b>Homepage Layout:</b> The homepage features a clean, user-friendly design with easy navigation to various product categories and promotions.</li>
      <li><b>Product Search and Filters:</b> Robust search functionality with filters to help users find products quickly and efficiently.</li>
      <li><b>Product Details Page:</b> Detailed product information, including images, specifications, and customer reviews, to assist in informed purchasing decisions.</li>
      <li><b>Checkout Process:</b> A streamlined checkout process that supports multiple payment options and delivery methods.</li>
    </ul>
    <div className="font-semibold text-lg flex items-center gap-2 mt-4">
      <span role="img" aria-label="tools">🛠️</span> Key Features
    </div>
    <ul className="list-disc ml-6 space-y-2">
      <li><b>Smart Search and Voice Commands:</b> The app offers an intelligent search bar with autocomplete suggestions and voice search capabilities, enhancing user convenience.</li>
      <li><b>Store Mode & Geo-Fencing:</b> Enables users to switch to a mode tailored to their nearest physical Walmart, providing real-time inventory updates and aisle navigation.</li>
      <li><b>Personalized Deals & Dynamic Pricing:</b> The app adjusts pricing and promotions based on user location, shopping history, and time of day, offering personalized savings opportunities.</li>
      <li><b>Walmart Pay Integration:</b> Facilitates secure, contactless in-store payments through the app, enhancing the shopping experience.</li>
      <li><b>Walmart+ Membership:</b> Provides members with benefits like free shipping, fuel discounts, and early access to deals, all accessible within the app.</li>
    </ul>
    <div className="font-semibold text-lg flex items-center gap-2 mt-4">
      <span role="img" aria-label="design">🎨</span> Design Highlights
    </div>
    <ul className="list-disc ml-6 space-y-2">
      <li><b>Product-Focused Homepage:</b> The redesigned homepage emphasizes product discovery with rich imagery and live videos, creating an engaging shopping experience.</li>
      <li><b>Omnichannel Integration:</b> Seamless integration between online and offline shopping experiences, allowing users to check in-store availability and opt for pickup or delivery options.</li>
      <li><b>User-Centric Navigation:</b> Intuitive navigation with clear categories and personalized recommendations, enhancing user engagement and satisfaction.</li>
    </ul>
    <div className="font-semibold text-lg flex items-center gap-2 mt-4">
      <span role="img" aria-label="download">📥</span> Download the App
    </div>
    <div>
      You can download the Walmart eCommerce Global App for <a href="https://apps.apple.com/app/walmart/id338137227" target="_blank" className="underline text-blue-300">iOS</a> and <a href="https://play.google.com/store/apps/details?id=com.walmart.android" target="_blank" className="underline text-blue-300">Android</a>.
    </div>
  </div>
);

function WalmartModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [current, setCurrent] = useState(0);
  const total = walmartImages.length;
  
  // Reset to first image and scroll to top when modal opens
  React.useEffect(() => {
    if (open) {
      setCurrent(0);
      // Scroll description to top
      setTimeout(() => {
        const descriptionElement = document.querySelector('.walmart-modal-description');
        if (descriptionElement) {
          descriptionElement.scrollTop = 0;
        }
      }, 100);
    }
  }, [open]);
  
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm transition-all duration-300" onClick={onClose}>
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl shadow-2xl flex flex-col md:flex-row w-[98vw] max-w-5xl max-h-[92vh] overflow-hidden relative border border-blue-900/40 animate-fade-in" onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-blue-400 z-10 bg-black/40 rounded-full w-10 h-10 flex items-center justify-center shadow-lg border border-blue-500/30 hover:scale-110 transition"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        {/* Left: Image carousel/flow */}
        <div className="md:w-1/2 w-full flex flex-col items-center justify-center bg-gradient-to-b from-black/60 via-blue-900/30 to-black/80 relative h-[92vh]">
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-blue-700/70 text-white rounded-full w-9 h-9 flex items-center justify-center z-10 shadow-md border border-blue-500/30 transition disabled:opacity-40"
              onClick={() => setCurrent((current - 1 + total) % total)}
              disabled={total <= 1}
              aria-label="Previous image"
            >
              ‹
            </button>
            <img
              src={walmartImages[current]}
              alt={`Walmart screenshot ${current + 1}`}
              className="rounded-none md:rounded-l-3xl object-cover w-full h-full border-0"
              style={{ background: '#222' }}
            />
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-blue-700/70 text-white rounded-full w-9 h-9 flex items-center justify-center z-10 shadow-md border border-blue-500/30 transition disabled:opacity-40"
              onClick={() => setCurrent((current + 1) % total)}
              disabled={total <= 1}
              aria-label="Next image"
            >
              ›
            </button>
          </div>
          <div className="flex gap-2 mt-2 justify-center pb-2 absolute bottom-4 left-1/2 -translate-x-1/2">
            {walmartImages.map((img, idx) => (
              <button
                key={img}
                className={`w-3 h-3 rounded-full border-2 ${idx === current ? 'bg-blue-400 border-blue-300 scale-125' : 'bg-gray-700 border-gray-500'} transition-all`}
                onClick={() => setCurrent(idx)}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>
        </div>
        {/* Right: Description */}
        <div className="walmart-modal-description md:w-1/2 w-full p-8 overflow-y-auto flex flex-col justify-start bg-gradient-to-b from-black/60 via-gray-900/80 to-blue-900/60 animate-fade-in h-[92vh]">
          {walmartModalDescription}
        </div>
      </div>
    </div>
  );
}

const pearModalDescription = (
  <div className="text-white space-y-4 text-base md:text-lg">
    <div className="font-bold text-2xl mb-2 flex items-center gap-2">
      <span role="img" aria-label="mobile">📱</span> Overview of reSET & reSET-O
    </div>
    <div>
      reSET and reSET-O are FDA-authorized prescription digital therapeutics developed by Pear Therapeutics. These apps deliver evidence-based treatments through interactive modules, aiming to enhance patient engagement and support recovery outside traditional clinical settings.
    </div>
    <div className="space-y-2">
      <div>
        <strong>reSET:</strong> A 12-week program for patients with SUD, providing cognitive behavioral therapy (CBT) to reinforce abstinence and improve treatment outcomes.
      </div>
      <div>
        <strong>reSET-O:</strong> Similar to reSET but tailored for patients with OUD, integrating medication tracking features for buprenorphine use and contingency management to support recovery.
      </div>
    </div>
    <div className="font-semibold text-lg flex items-center gap-2 mt-4">
      <span role="img" aria-label="screenshots">🖼️</span> Interface Screenshots
    </div>
    <ul className="list-disc ml-6 space-y-2">
      <li><b>Home Screen:</b> The home screen displays a serene nature scene that transitions from winter to summer as the patient progresses through therapy, symbolizing recovery.</li>
      <li><b>Contingency Management Rewards Wheel:</b> A feature that incentivizes users to stick to their treatment goals with rewards, enhancing motivation.</li>
      <li><b>Therapy Module Interface:</b> Interactive CBT modules that guide patients through various therapeutic lessons.</li>
      <li><b>Clinician Dashboard:</b> Allows clinicians to monitor patient progress, including lesson completion, cravings, and substance use reports.</li>
    </ul>
    <div className="font-semibold text-lg flex items-center gap-2 mt-4">
      <span role="img" aria-label="tools">🛠️</span> Key Features
    </div>
    <ul className="list-disc ml-6 space-y-2">
      <li><b>Interactive CBT Modules:</b> Both apps offer self-paced, interactive CBT lessons designed to address the psychological aspects of addiction.</li>
      <li><b>Contingency Management:</b> Incorporates a rewards system to encourage adherence to treatment goals, enhancing patient engagement.</li>
      <li><b>Medication Tracking (reSET-O):</b> Specifically for OUD, reSET-O includes features to track buprenorphine use, supporting medication adherence.</li>
      <li><b>Progress Monitoring:</b> Patients can track their cravings, substance use, and triggers, providing valuable data for both patients and clinicians.</li>
      <li><b>Clinician Dashboard:</b> Enables healthcare providers to monitor patient activity, including lesson completion and self-reported data, facilitating informed clinical decisions.</li>
    </ul>
    <div className="font-semibold text-lg flex items-center gap-2 mt-4">
      <span role="img" aria-label="design">🎨</span> Design Highlights
    </div>
    <ul className="list-disc ml-6 space-y-2">
      <li><b>Engaging User Interface:</b> The apps feature a user-friendly design with interactive elements that enhance user engagement and adherence to the therapeutic process.</li>
      <li><b>Motivational Elements:</b> Incorporation of a rewards system and visual progress indicators to motivate users throughout their recovery journey.</li>
      <li><b>Personalized Experience:</b> Customization options that allow users to tailor their therapeutic experience to their preferences and needs.</li>
    </ul>
    <div className="font-semibold text-lg flex items-center gap-2 mt-4">
      <span role="img" aria-label="download">📥</span> Download the Apps
    </div>
    <div className="space-y-2">
      <div>You can download the reSET and reSET-O apps from the following platforms:</div>
      <div className="space-y-1 ml-4">
        <div><a href="https://apps.apple.com/app/reset/id123456789" target="_blank" className="underline text-blue-300">reSET on App Store</a></div>
        <div><a href="https://apps.apple.com/app/reset-o/id123456790" target="_blank" className="underline text-blue-300">reSET-O on App Store</a></div>
        <div><a href="https://play.google.com/store/apps/details?id=com.peartherapeutics.reset" target="_blank" className="underline text-blue-300">reSET on Google Play</a></div>
        <div><a href="https://play.google.com/store/apps/details?id=com.peartherapeutics.reset-o" target="_blank" className="underline text-blue-300">reSET-O on Google Play</a></div>
      </div>
    </div>
  </div>
);

function PearModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [current, setCurrent] = useState(0);
  const total = pearImages.length;
  
  // Reset to first image and scroll to top when modal opens
  React.useEffect(() => {
    if (open) {
      setCurrent(0);
      // Scroll description to top
      setTimeout(() => {
        const descriptionElement = document.querySelector('.pear-modal-description');
        if (descriptionElement) {
          descriptionElement.scrollTop = 0;
        }
      }, 100);
    }
  }, [open]);
  
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm transition-all duration-300" onClick={onClose}>
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl shadow-2xl flex flex-col md:flex-row w-[98vw] max-w-5xl max-h-[92vh] overflow-hidden relative border border-blue-900/40 animate-fade-in" onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-blue-400 z-10 bg-black/40 rounded-full w-10 h-10 flex items-center justify-center shadow-lg border border-blue-500/30 hover:scale-110 transition"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        {/* Left: Image carousel/flow */}
        <div className="md:w-1/2 w-full flex flex-col items-center justify-center bg-gradient-to-b from-black/60 via-blue-900/30 to-black/80 relative h-[92vh]">
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-blue-700/70 text-white rounded-full w-9 h-9 flex items-center justify-center z-10 shadow-md border border-blue-500/30 transition disabled:opacity-40"
              onClick={() => setCurrent((current - 1 + total) % total)}
              disabled={total <= 1}
              aria-label="Previous image"
            >
              ‹
            </button>
            <img
              src={pearImages[current]}
              alt={`Pear Therapeutics screenshot ${current + 1}`}
              className="rounded-none md:rounded-l-3xl object-contain w-full h-full border-0"
              style={{ background: '#222' }}
            />
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-blue-700/70 text-white rounded-full w-9 h-9 flex items-center justify-center z-10 shadow-md border border-blue-500/30 transition disabled:opacity-40"
              onClick={() => setCurrent((current + 1) % total)}
              disabled={total <= 1}
              aria-label="Next image"
            >
              ›
            </button>
          </div>
          <div className="flex gap-2 mt-2 justify-center pb-2 absolute bottom-4 left-1/2 -translate-x-1/2">
            {pearImages.map((img, idx) => (
              <button
                key={img}
                className={`w-3 h-3 rounded-full border-2 ${idx === current ? 'bg-blue-400 border-blue-300 scale-125' : 'bg-gray-700 border-gray-500'} transition-all`}
                onClick={() => setCurrent(idx)}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>
        </div>
        {/* Right: Description */}
        <div className="pear-modal-description md:w-1/2 w-full p-8 overflow-y-auto flex flex-col justify-start bg-gradient-to-b from-black/60 via-gray-900/80 to-blue-900/60 animate-fade-in h-[92vh]">
          {pearModalDescription}
        </div>
      </div>
    </div>
  );
}

const chargePointModalDescription = (
  <div className="text-white space-y-4 text-base md:text-lg">
    <div className="font-bold text-2xl mb-2 flex items-center gap-2">
      <span role="img" aria-label="mobile">📱</span> ChargePoint Mobile App: Overview
    </div>
    <div>
      The ChargePoint app is a comprehensive solution for electric vehicle (EV) drivers, offering seamless access to the world's largest EV charging network. With over 200,000 charging spots across North America and Europe, the app simplifies the process of finding, using, and paying for EV charging.
    </div>
    <div className="font-semibold text-lg flex items-center gap-2 mt-4">
      <span role="img" aria-label="screenshots">🖼️</span> Interface Screenshots
    </div>
    <ul className="list-disc ml-6 space-y-2">
      <li><b>Charging Activity Dashboard:</b> View detailed insights into your charging sessions, including costs, energy usage, and distance added.</li>
      <li><b>Station Map with Filters:</b> Easily locate nearby charging stations with customizable filters for connector type, charging speed, and availability.</li>
      <li><b>Home Charging Management:</b> Manage your home charging setup, schedule sessions, and monitor usage remotely.</li>
      <li><b>Charging Session Details:</b> Access real-time information about your charging session, including estimated completion time and cost.</li>
    </ul>
    <div className="font-semibold text-lg flex items-center gap-2 mt-4">
      <span role="img" aria-label="tools">🛠️</span> Key Features
    </div>
    <ul className="list-disc ml-6 space-y-2">
      <li><b>Find Charging Stations:</b> Discover real-time station availability with the ChargePoint map.</li>
      <li><b>Start Charging Instantly:</b> Begin charging via Tap to Charge, directly in the ChargePoint app, or with your RFID card.</li>
      <li><b>Track Charging Activity:</b> See your charging history and trends, including miles added and cost. Easily control both your public and home charging in a single app.</li>
      <li><b>Get Live Updates:</b> Receive real-time notifications and reminders about your charging status, including when a station becomes available, your car finishes charging, and a charging session's cost.</li>
      <li><b>Enjoy Convenient Widgets:</b> Activate widgets to seamlessly find nearby stations, view your charging status, manage home charging, and more without opening the app.</li>
      <li><b>Learn from Driver Tips:</b> Get station advice complete with photos from other drivers to better navigate and enjoy ChargePoint's global app and roaming network.</li>
      <li><b>Charge at Home:</b> Use the ChargePoint app to charge your EV at home with ChargePoint Home Flex. Schedule charging, set reminders, get notifications, track usage, and more.</li>
      <li><b>Join a Virtual Waitlist:</b> Reserve a charging spot from anywhere via our virtual Waitlist feature.</li>
      <li><b>Maximize Charging with Your Wear OS by Google:</b> Tap to charge with your Wear OS by Google to start charging instantly and easily see miles added to your range.</li>
      <li><b>Locate Stations and More with Android Auto:</b> Easily access charging info while on the road with your Android Auto in-vehicle display.</li>
    </ul>
    <div className="font-semibold text-lg flex items-center gap-2 mt-4">
      <span role="img" aria-label="design">🎨</span> Design Highlights
    </div>
    <ul className="list-disc ml-6 space-y-2">
      <li><b>Refreshed User Interface:</b> The app features a refreshed look and feel with easier access to your favorite features, including a new bottom navigation bar for improved accessibility.</li>
      <li><b>Intuitive Navigation:</b> Navigate between your charging map, activity, home, and account sections with simple and intuitive buttons.</li>
      <li><b>Enhanced Station Details:</b> The station half sheet now includes relevant station attributes and actions to get drivers to their destination faster, with speed represented as lightning bolts and kilowatts.</li>
      <li><b>Accessibility Improvements:</b> The bottom navigation bar replaced the hamburger menu, improving feature discoverability and accessibility, especially for home charger owners.</li>
    </ul>
    <div className="font-semibold text-lg flex items-center gap-2 mt-4">
      <span role="img" aria-label="download">📥</span> Download the App
    </div>
    <div>
      You can download the ChargePoint app for <a href="https://apps.apple.com/app/chargepoint/id342656341" target="_blank" className="underline text-blue-300">iOS</a> and <a href="https://play.google.com/store/apps/details?id=com.chargepoint.chargepoint" target="_blank" className="underline text-blue-300">Android</a>.
    </div>
  </div>
);

function ChargePointModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [current, setCurrent] = useState(0);
  const total = chargePointImages.length;
  
  // Reset to first image and scroll to top when modal opens
  React.useEffect(() => {
    if (open) {
      setCurrent(0);
      // Scroll description to top
      setTimeout(() => {
        const descriptionElement = document.querySelector('.chargepoint-modal-description');
        if (descriptionElement) {
          descriptionElement.scrollTop = 0;
        }
      }, 100);
    }
  }, [open]);
  
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm transition-all duration-300" onClick={onClose}>
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl shadow-2xl flex flex-col md:flex-row w-[98vw] max-w-5xl max-h-[92vh] overflow-hidden relative border border-blue-900/40 animate-fade-in" onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-blue-400 z-10 bg-black/40 rounded-full w-10 h-10 flex items-center justify-center shadow-lg border border-blue-500/30 hover:scale-110 transition"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        {/* Left: Image carousel/flow */}
        <div className="md:w-1/2 w-full flex flex-col items-center justify-center bg-gradient-to-b from-black/60 via-blue-900/30 to-black/80 relative h-[92vh]">
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-blue-700/70 text-white rounded-full w-9 h-9 flex items-center justify-center z-10 shadow-md border border-blue-500/30 transition disabled:opacity-40"
              onClick={() => setCurrent((current - 1 + total) % total)}
              disabled={total <= 1}
              aria-label="Previous image"
            >
              ‹
            </button>
            <img
              src={chargePointImages[current]}
              alt={`ChargePoint screenshot ${current + 1}`}
              className="rounded-none md:rounded-l-3xl object-cover w-full h-full border-0"
              style={{ background: '#222' }}
            />
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-blue-700/70 text-white rounded-full w-9 h-9 flex items-center justify-center z-10 shadow-md border border-blue-500/30 transition disabled:opacity-40"
              onClick={() => setCurrent((current + 1) % total)}
              disabled={total <= 1}
              aria-label="Next image"
            >
              ›
            </button>
          </div>
          <div className="flex gap-2 mt-2 justify-center pb-2 absolute bottom-4 left-1/2 -translate-x-1/2">
            {chargePointImages.map((img, idx) => (
              <button
                key={img}
                className={`w-3 h-3 rounded-full border-2 ${idx === current ? 'bg-blue-400 border-blue-300 scale-125' : 'bg-gray-700 border-gray-500'} transition-all`}
                onClick={() => setCurrent(idx)}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>
        </div>
        {/* Right: Description */}
        <div className="chargepoint-modal-description md:w-1/2 w-full p-8 overflow-y-auto flex flex-col justify-start bg-gradient-to-b from-black/60 via-gray-900/80 to-blue-900/60 animate-fade-in h-[92vh]">
          {chargePointModalDescription}
        </div>
      </div>
    </div>
  );
}

const yahooModalDescription = (
  <div className="text-white space-y-4 text-base md:text-lg">
    <div className="font-bold text-2xl mb-2 flex items-center gap-2">
      <span role="img" aria-label="mobile">📱</span> Yahoo Mail Mobile App: Overview
    </div>
    <div>
      The Yahoo Mail mobile app offers a sleek, user-friendly interface designed to streamline email management. It integrates AI-powered features, a messaging-inspired design, and gamified elements to enhance user experience.
    </div>
    <div className="font-semibold text-lg flex items-center gap-2 mt-4">
      <span role="img" aria-label="screenshots">🖼️</span> Interface Screenshots
    </div>
    <ul className="list-disc ml-6 space-y-2">
      <li><b>Modern Inbox Layout:</b> A clean, organized inbox with easy navigation.</li>
      <li><b>AI-Powered Email Summaries:</b> Quick overviews of email content for efficient reading.</li>
      <li><b>Integrated Calendar and Tasks:</b> Seamless integration with calendar and task management.</li>
      <li><b>Customizable Themes:</b> Personalize the app's appearance with various themes.</li>
    </ul>
    <div className="font-semibold text-lg flex items-center gap-2 mt-4">
      <span role="img" aria-label="tools">🛠️</span> Key Features
    </div>
    <ul className="list-disc ml-6 space-y-2">
      <li><b>AI-Powered Summaries:</b> Quickly grasp email content with AI-generated summaries.</li>
      <li><b>Smart Organization:</b> Automatically categorize emails into tabs like Offers, Newsletters, and Social.</li>
      <li><b>Quick Actions:</b> Perform tasks like Unsubscribe, Archive, or Mark as Read with a single tap.</li>
      <li><b>Multiple Account Support:</b> Manage Gmail, Outlook, and AOL accounts within the app.</li>
      <li><b>Enhanced Security:</b> Features like Account Key and advanced spam filtering ensure a secure inbox.</li>
    </ul>
    <div className="font-semibold text-lg flex items-center gap-2 mt-4">
      <span role="img" aria-label="design">🎨</span> Design Highlights
    </div>
    <ul className="list-disc ml-6 space-y-2">
      <li><b>Messaging-Inspired Interface:</b> A conversational design that makes email interactions feel more natural.</li>
      <li><b>Gamified Experience:</b> Engaging elements that make email management more interactive.</li>
      <li><b>Customizable Themes:</b> Adjust the app's appearance to suit personal preferences.</li>
    </ul>
    <div className="font-semibold text-lg flex items-center gap-2 mt-4">
      <span role="img" aria-label="download">📥</span> Download the App
    </div>
    <div>
      You can download the Yahoo Mail app for <a href="https://apps.apple.com/app/yahoo-mail/id577586159" target="_blank" className="underline text-blue-300">iOS</a> and <a href="https://play.google.com/store/apps/details?id=com.yahoo.mobile.client.android.mail" target="_blank" className="underline text-blue-300">Android</a> devices.
    </div>
  </div>
);

function YahooModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [current, setCurrent] = useState(0);
  const total = yahooImages.length;
  
  // Reset to first image and scroll to top when modal opens
  React.useEffect(() => {
    if (open) {
      setCurrent(0);
      // Scroll description to top
      setTimeout(() => {
        const descriptionElement = document.querySelector('.yahoo-modal-description');
        if (descriptionElement) {
          descriptionElement.scrollTop = 0;
        }
      }, 100);
    }
  }, [open]);
  
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm transition-all duration-300" onClick={onClose}>
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl shadow-2xl flex flex-col md:flex-row w-[98vw] max-w-5xl max-h-[92vh] overflow-hidden relative border border-blue-900/40 animate-fade-in" onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-blue-400 z-10 bg-black/40 rounded-full w-10 h-10 flex items-center justify-center shadow-lg border border-blue-500/30 hover:scale-110 transition"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        {/* Left: Image carousel/flow */}
        <div className="md:w-1/2 w-full flex flex-col items-center justify-center bg-gradient-to-b from-black/60 via-blue-900/30 to-black/80 relative h-[92vh]">
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-blue-700/70 text-white rounded-full w-9 h-9 flex items-center justify-center z-10 shadow-md border border-blue-500/30 transition disabled:opacity-40"
              onClick={() => setCurrent((current - 1 + total) % total)}
              disabled={total <= 1}
              aria-label="Previous image"
            >
              ‹
            </button>
            <img
              src={yahooImages[current]}
              alt={`Yahoo Mail screenshot ${current + 1}`}
              className="rounded-none md:rounded-l-3xl object-cover w-full h-full border-0"
              style={{ background: '#222' }}
            />
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-blue-700/70 text-white rounded-full w-9 h-9 flex items-center justify-center z-10 shadow-md border border-blue-500/30 transition disabled:opacity-40"
              onClick={() => setCurrent((current + 1) % total)}
              disabled={total <= 1}
              aria-label="Next image"
            >
              ›
            </button>
          </div>
          <div className="flex gap-2 mt-2 justify-center pb-2 absolute bottom-4 left-1/2 -translate-x-1/2">
            {yahooImages.map((img, idx) => (
              <button
                key={img}
                className={`w-3 h-3 rounded-full border-2 ${idx === current ? 'bg-blue-400 border-blue-300 scale-125' : 'bg-gray-700 border-gray-500'} transition-all`}
                onClick={() => setCurrent(idx)}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>
        </div>
        {/* Right: Description */}
        <div className="yahoo-modal-description md:w-1/2 w-full p-8 overflow-y-auto flex flex-col justify-start bg-gradient-to-b from-black/60 via-gray-900/80 to-blue-900/60 animate-fade-in h-[92vh]">
          {yahooModalDescription}
        </div>
      </div>
    </div>
  );
}

const Projects = () => {
  const [yahooModalOpen, setYahooModalOpen] = useState(false);
  const [chargePointModalOpen, setChargePointModalOpen] = useState(false);
  const [pearModalOpen, setPearModalOpen] = useState(false);
  const [walmartModalOpen, setWalmartModalOpen] = useState(false);

  return (
    <section id="projects" className="section-container relative">
      <h2 className="section-title mb-8">Professional Experience</h2>
      
      {/* Project Description */}
      <motion.div 
        className="text-center mb-12 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="text-lg text-gray-300 leading-relaxed">
          Here's a detailed look at my professional journey and contributions.
        </p>
      </motion.div>
      
      {/* Projects Grid */}
      <div className="w-[130%] -ml-[15%] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {projectsData.map((project, index) => (
          project.title.includes('Yahoo') ? (
            <div key={project.id} onClick={() => setYahooModalOpen(true)} className="cursor-pointer">
              <ProjectCard project={project} index={index} />
            </div>
          ) : project.title.includes('ChargePoint') ? (
            <div key={project.id} onClick={() => setChargePointModalOpen(true)} className="cursor-pointer">
              <ProjectCard project={project} index={index} />
            </div>
          ) : project.title.includes('Pear') ? (
            <div key={project.id} onClick={() => setPearModalOpen(true)} className="cursor-pointer">
              <ProjectCard project={project} index={index} />
            </div>
          ) : project.title.includes('Walmart') ? (
            <div key={project.id} onClick={() => setWalmartModalOpen(true)} className="cursor-pointer">
              <ProjectCard project={project} index={index} />
            </div>
          ) : (
          <ProjectCard key={project.id} project={project} index={index} />
          )
        ))}
      </div>

      {/* Yahoo Modal */}
      <YahooModal open={yahooModalOpen} onClose={() => setYahooModalOpen(false)} />
      {/* ChargePoint Modal */}
      <ChargePointModal open={chargePointModalOpen} onClose={() => setChargePointModalOpen(false)} />
      {/* Pear Modal */}
      <PearModal open={pearModalOpen} onClose={() => setPearModalOpen(false)} />
      {/* Walmart Modal */}
      <WalmartModal open={walmartModalOpen} onClose={() => setWalmartModalOpen(false)} />
      {/* Micro Projects Section */}
      <div className="mt-16">
        <h3 className="section-title mb-8">Micro Projects</h3>
        <GlowingEffectDemo />
      </div>
    </section>
  );
};

export default Projects;
