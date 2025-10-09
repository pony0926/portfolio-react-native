import React from 'react';
import { motion } from 'framer-motion';

const FALLBACK_ICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg';

const techGroups = [
  {
    label: 'Programming & Frameworks',
    items: [
      { name: 'React Native', icon: 'https://reactnative.dev/img/header_logo.svg', docs: 'https://reactnative.dev/' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', docs: 'https://www.typescriptlang.org/docs/' },
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', docs: 'https://nodejs.org/en/docs' },
      { name: 'Redux Toolkit', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg', docs: 'https://redux-toolkit.js.org/' },
      { name: 'GraphQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg', docs: 'https://graphql.org/learn/' },
    ],
  },
  {
    label: 'Mobile Development & Integrations',
    items: [
      { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', docs: 'https://firebase.google.com/docs' },
      { name: 'SQLite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg', docs: 'https://www.sqlite.org/docs.html' },
      { name: 'Expo', icon: 'https://docs.expo.dev/static/images/sdk/icon.png', docs: 'https://docs.expo.dev/' },
      { name: 'AWS Lambda', icon: 'https://docs.aws.amazon.com/lambda/latest/dg/images/lambda-logo.png', docs: 'https://docs.aws.amazon.com/lambda/latest/dg/whatis-lambda.html' },
    ],
  },
  {
    label: 'Backend & Databases',
    items: [
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', docs: 'https://www.postgresql.org/docs/' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', docs: 'https://www.mongodb.com/docs/' },
      { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', docs: 'https://redis.io/docs/' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', docs: 'https://docs.python.org/3/' },
    ],
  },
  {
    label: 'Testing & Quality Assurance',
    items: [
      { name: 'Jest', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg', docs: 'https://jestjs.io/docs/getting-started' },
      { name: 'Detox', icon: 'https://wix.github.io/Detox/img/detox-logo.png', docs: 'https://wix.github.io/Detox/docs/introduction/getting-started' },
      { name: 'React Native Testing Library', icon: 'https://testing-library.com/img/octopus-64x64.png', docs: 'https://testing-library.com/docs/react-native-testing-library/intro' },
    ],
  },
  {
    label: 'DevOps & CI/CD Pipelines',
    items: [
      { name: 'GitHub Actions', icon: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png', docs: 'https://docs.github.com/en/actions' },
      { name: 'Bitrise', icon: 'https://www.bitrise.io/assets/img/logo_dark.svg', docs: 'https://devcenter.bitrise.io/' },
      { name: 'Fastlane', icon: 'https://fastlane.tools/assets/img/fastlane.png', docs: 'https://docs.fastlane.tools/' },
    ],
  },
  {
    label: 'Performance & Debugging Tools',
    items: [
      { name: 'Flipper', icon: 'https://fbflipper.com/img/flipper-icon.png', docs: 'https://fbflipper.com/' },
      { name: 'Sentry', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sentry/sentry-original.svg', docs: 'https://docs.sentry.io/' },
      { name: 'Firebase Analytics', icon: 'https://firebase.google.com/downloads/brand-guidelines/PNG/FC_Analytics.png', docs: 'https://firebase.google.com/docs/analytics' },
    ],
  },
  {
    label: 'AI, Data & Machine Learning',
    items: [
      { name: 'PyTorch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg', docs: 'https://pytorch.org/docs/stable/index.html' },
      { name: 'TensorFlow Lite', icon: 'https://www.tensorflow.org/lite/images/lite_logo.png', docs: 'https://www.tensorflow.org/lite/overview' },
    ],
  },
  {
    label: 'UI/UX & Accessibility',
    items: [
      { name: 'styled-components', icon: 'https://styled-components.com/logo.png', docs: 'https://styled-components.com/docs' },
      { name: 'WCAG 2.1 Compliance', icon: 'https://www.w3.org/WAI/wcag2.1/understanding/images/wcag-logo.png', docs: 'https://www.w3.org/TR/WCAG21/' },
    ],
  },
  {
    label: 'Software Practices & Methodologies',
    items: [
      { name: 'Agile Development', icon: 'https://www.svgrepo.com/show/343213/agile.svg', docs: 'https://agilemanifesto.org/' },
      { name: 'HIPAA & FDA Compliance', icon: 'https://www.svgrepo.com/show/303273/automation.svg', docs: '#' },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 50,
    },
  },
};

const Technologies = () => {
  const [imageErrors, setImageErrors] = React.useState<Record<string, boolean>>({});

  const handleImageError = (techName: string) => {
    setImageErrors(prev => ({ ...prev, [techName]: true }));
  };

  return (
    <section id="technologies" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="section-title">
          Technologies I Work With
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Cutting-edge tools and frameworks for building the future
        </p>
      </motion.div>
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-16 gap-x-12">
        {techGroups.map((group) => (
          <div key={group.label} className="flex flex-col items-center h-full">
            <h3 className="text-xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              {group.label}
            </h3>
            <motion.div
              className="grid grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {group.items.map((tech) => (
                <motion.a
                  key={tech.name}
                  href={tech.docs}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center group no-underline"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.08,
                    rotateY: 5,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  whileTap={{ scale: 0.96 }}
                >
                  <div className="relative p-2 rounded-xl bg-black/40 backdrop-blur-sm border border-blue-500/20 shadow-[0_0_10px_rgba(59,130,246,0.08)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-300 w-16 h-16 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/20 to-purple-600/0 rounded-xl blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-150 group-hover:scale-100"></div>
                    <motion.img 
                      src={imageErrors[tech.name] ? FALLBACK_ICON : tech.icon}
                      alt={tech.name} 
                      className="w-10 h-10 object-contain relative z-10 filter drop-shadow-[0_0_8px_rgba(59,130,246,0.3)] group-hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.6)] transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      onError={() => handleImageError(tech.name)}
                    />
                  </div>
                  <motion.span 
                    className="mt-1 text-xs text-gray-400 group-hover:text-blue-400 transition-colors duration-300 text-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    {tech.name}
                  </motion.span>
                </motion.a>
              ))}
              
              {/* More Skills Button */}
              <motion.div
                className="flex flex-col items-center group cursor-pointer"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.08,
                  rotateY: 5,
                  transition: { type: "spring", stiffness: 300 }
                }}
                whileTap={{ scale: 0.96 }}
              >
                <div className="relative p-2 rounded-xl bg-black/40 backdrop-blur-sm border border-gray-500/20 shadow-[0_0_10px_rgba(100,100,100,0.08)] group-hover:shadow-[0_0_30px_rgba(100,100,100,0.4)] transition-all duration-300 w-16 h-16 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-600/0 via-gray-600/20 to-gray-600/0 rounded-xl blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-150 group-hover:scale-100"></div>
                  <motion.div 
                    className="w-10 h-10 flex items-center justify-center relative z-10"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <span className="text-2xl text-gray-400 group-hover:text-gray-300 transition-colors duration-300">⋯</span>
                  </motion.div>
                </div>
                <motion.span 
                  className="mt-1 text-xs text-gray-500 group-hover:text-gray-400 transition-colors duration-300 text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  More
                </motion.span>
              </motion.div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
