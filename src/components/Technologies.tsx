import React from 'react';
import { motion } from 'framer-motion';

const FALLBACK_ICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg';

// All technologies in a single unified list
const allTechnologies = [
  { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', docs: 'https://reactnative.dev/' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', docs: 'https://www.typescriptlang.org/docs/' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', docs: 'https://nodejs.org/en/docs' },
  { name: 'Redux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg', docs: 'https://redux-toolkit.js.org/' },
  { name: 'GraphQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg', docs: 'https://graphql.org/learn/' },
  { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', docs: 'https://firebase.google.com/docs' },
  { name: 'SQLite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg', docs: 'https://www.sqlite.org/docs.html' },
  { name: 'Expo', icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/expo.svg', docs: 'https://docs.expo.dev/' },
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg', docs: 'https://aws.amazon.com/' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', docs: 'https://www.postgresql.org/docs/' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', docs: 'https://www.mongodb.com/docs/' },
  { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', docs: 'https://redis.io/docs/' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', docs: 'https://docs.python.org/3/' },
  { name: 'Jest', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg', docs: 'https://jestjs.io/docs/getting-started' },
  { name: 'Detox', icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/detox.svg', docs: 'https://wix.github.io/Detox/docs/introduction/getting-started' },
  { name: 'React Testing', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', docs: 'https://testing-library.com/docs/react-native-testing-library/intro' },
  { name: 'GitHub Actions', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', docs: 'https://docs.github.com/en/actions' },
  { name: 'Bitrise', icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/bitrise.svg', docs: 'https://devcenter.bitrise.io/' },
  { name: 'Fastlane', icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/fastlane.svg', docs: 'https://docs.fastlane.tools/' },
  { name: 'Flipper', icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/flipper.svg', docs: 'https://fbflipper.com/' },
  { name: 'Sentry', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sentry/sentry-original.svg', docs: 'https://docs.sentry.io/' },
  { name: 'Firebase Analytics', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', docs: 'https://firebase.google.com/docs/analytics' },
  { name: 'PyTorch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg', docs: 'https://pytorch.org/docs/stable/index.html' },
  { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', docs: 'https://www.tensorflow.org/lite/overview' },
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
        <p className="text-lg font-semibold text-gray-500 max-w-2xl mx-auto">
          Tools and frameworks I use daily
        </p>
      </motion.div>
      <motion.div
        className="w-full max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {allTechnologies.map((tech) => (
          <motion.a
            key={tech.name}
            href={tech.docs}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group no-underline"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-16 h-16 bg-[#2a2a2a]/30 border border-[#3a3a3a]/50 rounded-lg flex items-center justify-center mb-2 group-hover:border-[#60a5fa]/50 transition-all relative">
              <div className="absolute inset-0 bg-[#60a5fa]/45 rounded-lg opacity-100 blur-sm"></div>
              <img 
                src={imageErrors[tech.name] ? FALLBACK_ICON : tech.icon}
                alt={tech.name} 
                className="w-10 h-10 object-contain relative z-10"
                onError={() => handleImageError(tech.name)}
              />
            </div>
            <span className="text-sm font-bold text-gray-400 group-hover:text-white text-center leading-tight">
              {tech.name}
            </span>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};

export default Technologies;
