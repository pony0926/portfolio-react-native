import React from 'react';

export default function FeaturesSectionDemo() {
  const features = [
    {
      title: "Cross-Platform Mobile Development",
      description: "Building fast, smooth mobile apps for iOS and Android using React Native and TypeScript.",
    },
    {
      title: "Backend and API Integration",
      description: "Connecting apps to servers and databases with Node.js, GraphQL, and PostgreSQL.",
    },
    {
      title: "AI and Machine Learning Integration",
      description: "Adding smart features like recommendations using AI tools like TensorFlow Lite.",
    },
    {
      title: "CI/CD and Automation",
      description: "Setting up automated processes to build and update apps with Bitrise and GitHub Actions.",
    },
    {
      title: "UI/UX Design and Optimization",
      description: "Creating user-friendly, interactive app interfaces using React Native and Reanimated.",
    },
    {
      title: "Compliance and Quality Assurance",
      description: "Ensuring apps are secure and work well through automated testing and following required standards like HIPAA.",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <FeatureCard key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const FeatureCard = ({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  index: number;
}) => {
  return (
    <div className="parent">
      <div className="card">
        <div className="glass">
          <div className="content">
            <span className="title">{title}</span>
            <span className="text">{description}</span>
          </div>
        </div>
        
        <div className="logo">
          <div className="circle circle1"></div>
          <div className="circle circle2"></div>
          <div className="circle circle3"></div>
          <div className="circle circle4"></div>
          <div className="circle circle5">
            <svg className="svg" viewBox="0 0 24 24">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor"/>
              <path d="M2 17L12 22L22 17" fill="currentColor"/>
              <path d="M2 12L12 17L22 12" fill="currentColor"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}; 