import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

export default function FeaturesSectionDemo() {
  const features = [
    {
      title: "Cross-Platform Mobile Development",
      description: "Building fast, smooth mobile apps for iOS and Android using React Native and TypeScript.",
      icon: "📱",
    },
    {
      title: "Backend and API Integration",
      description: "Connecting apps to servers and databases with Node.js, GraphQL, and PostgreSQL.",
      icon: "🔌",
    },
    {
      title: "AI and Machine Learning Integration",
      description: "Adding smart features like recommendations using AI tools like TensorFlow Lite.",
      icon: "🤖",
    },
    {
      title: "CI/CD and Automation",
      description: "Setting up automated processes to build and update apps with Bitrise and GitHub Actions.",
      icon: "⚙️",
    },
    {
      title: "UI/UX Design and Optimization",
      description: "Creating user-friendly, interactive app interfaces using React Native and Reanimated.",
      icon: "🎨",
    },
    {
      title: "Compliance and Quality Assurance",
      description: "Ensuring apps are secure and work well through automated testing and following required standards like HIPAA.",
      icon: "✅",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <FeatureCard key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const FeatureCard = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: string;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="glass-card rounded-lg border-[#3a3a3a] hover:border-[#60a5fa] transition-colors h-full">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="text-3xl flex-shrink-0">{icon}</div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white mb-2">
                {title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}; 