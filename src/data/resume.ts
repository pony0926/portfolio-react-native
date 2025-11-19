export interface Experience {
  company: string;
  position: string;
  period: string;
  previousPosition?: string;
  previousPeriod?: string;
  location?: string;
  appLinks?: {
    appStore?: string;
    googlePlay?: string;
  };
  achievements: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export const profile = {
  name: "Alexander Su",
  title: "Senior Software Engineer | Senior React Native Engineer",
  location: "San Jose, CA",
  email: "alexsu094@gmail.com",
  phone: "+1 (573) 464-3710",
  linkedin: "https://www.linkedin.com/in/alexandersu/",
  website: "https://alex-s.netlify.app/",
  summary: [
    "Senior Software Engineer with 9 years of hands-on experience building and scaling mobile applications used by millions. Specialized in React Native, TypeScript, and Node.js, with a strong background in integrating real-time data, optimizing performance, and modernizing app architectures for iOS and Android.",
    "Known for delivering stable, high-performing releases across complex ecosystems like Yahoo, ChargePoint, and Walmart, combining technical precision with practical problem-solving. Experienced in BLE integrations, push notification systems, and AI-driven personalization, while keeping codebases maintainable through modular design and type safety.",
    "Comfortable working end-to-end—from building UI layers and managing app state to setting up CI/CD pipelines, automated testing, and Over-The-Air (OTA) updates. Experienced in agile environments where close coordination with backend engineers, designers, and product managers turns ideas into reliable, user-friendly mobile products.",
    "Grounded in real engineering work, not theory—focused on building fast, stable apps that stand up in production and improve with each release."
  ]
};

export const experiences: Experience[] = [
  {
    company: "Yahoo",
    position: "Senior React Native Engineer",
    period: "February 2025 - September 2025",
    appLinks: {
      appStore: "https://apps.apple.com/us/app/yahoo-mail/id577586159",
      googlePlay: "https://play.google.com/store/apps/details?id=com.yahoo.mobile.client.android.mail&hl=en_US"
    },
    achievements: [
      "Served as the Senior React Native Engineer leading modernization of Yahoo's mobile applications, focusing on high-performance, cross-platform development and alignment with Yahoo's global design and engineering standards using React Native, TypeScript, and Expo.",
      "Realized critical functionalities that included migration to the new React Native architecture, AI-powered feature integration, and optimization of performance to deliver native-quality experiences for Yahoo Mail, Finance, and News apps.",
      "Architected type-safe native bindings with Codegen and introduced on-demand module loading to optimize resource utilization across iOS and Android, while maintaining full compatibility with existing native SDKs.",
      "Delivered new user-facing functionalities including AI-driven personalization engines and real-time data feeds, integrating GraphQL and REST APIs across React Native and React Native for Web to unify the codebase.",
      "Built real-time push notification functionality using Firebase Cloud Messaging (FCM) and Apple Push Notification Service (APNs), implementing background handlers, topic-based subscriptions, and in-app notification rendering for Yahoo Mail and Finance apps.",
      "Rebuilt critical UI layers using React Native Reanimated 4 and FlashList, enabling high-efficiency rendering of data-heavy lists and achieving consistent 60+ FPS animations in production.",
      "Led the migration from the legacy bridge system to the new JSI-based architecture, implementing Fabric for concurrent UI rendering and TurboModules for on-demand native module loading, achieving smoother animations and reduced app startup times using Hermes.",
      "Drove modernization of the codebase to TypeScript and React Hooks, adopting Zustand and Redux for lightweight state management, enforcing ESLint and code review standards, and improving code maintainability.",
      "Collaborated closely with backend engineers across Node.js and GraphQL services, defining efficient data contracts, optimizing payload structures, and improving real-time API performance for high-traffic mobile endpoints.",
      "Cross-functional Collaboration with product managers and UI/UX designers to define mobile requirements, refine interactive flows, and maintain visual and functional consistency with Yahoo's web platforms through shared design systems and Figma prototypes.",
      "Established comprehensive automated testing pipelines using Jest, Detox, and React Native Testing Library, introducing integration and end-to-end test suites that enhanced reliability and reduced regression issues across major app releases.",
      "Implemented a CI/CD-integrated Over-The-Air (OTA) deployment system using EAS to push hotfixes and updates instantly without App Store or Play Store review cycles.",
      "Enhanced the developer and user experience by integrating Datadog and Firebase Analytics for real-time monitoring, collaborating with design and backend teams to maintain WCAG 2.1 accessibility standards and visual consistency across all Yahoo platforms."
    ]
  },
  {
    company: "ChargePoint",
    position: "Senior React Native Developer",
    period: "July 2023 – February 2025",
    appLinks: {
      appStore: "https://apps.apple.com/us/app/chargepoint/id356866743",
      googlePlay: "https://play.google.com/store/apps/details?id=com.coulombtech&hl=en_US"
    },
    achievements: [
      "Developed and enhanced user-facing features for the ChargePoint mobile app using React Native, TypeScript, Expo, and Redux, improving reliability and usability across iOS and Android platforms.",
      "Built real-time station status visualization for the map interface, introducing color-coded logic to display station availability and charger types (Level 2 AC / DC Fast Charge).",
      "Designed predictive search and navigation components integrated with Google Maps, Apple Maps, and Waze, streamlining EV station discovery and route planning.",
      "Collaborated with backend engineers across Node.js and GraphQL APIs to expand in-app payment systems with Apple Pay, Google Pay, and PayPal, and implemented secure biometric authentication flows.",
      "Partnered with product managers and designers to develop community-driven features, enabling users to post photos and tips for charging locations to improve user engagement.",
      "Engineered BLE integration using React Native modules like react-native-ble-plx to connect mobile devices to charging stations for setup, diagnostics, and maintenance within the installer app ecosystem.",
      "Built cross-platform widgets for iOS and Android home screens to show live charging status, nearest stations, and favorites at a glance.",
      "Refactored app state management architecture using Redux Toolkit and Context API, optimizing performance for large data lists and reducing memory usage.",
      "Enhanced accessibility support through screen reader optimizations and custom actions to meet inclusive design standards.",
      "Implemented push notification features using Firebase Cloud Messaging (FCM) to alert users about charging session updates, station availability, and account activity in real time.",
      "Developed offline functionality using Redux Persist and SQLite, enabling users to access charging station information, track progress, and interact with key features even when the app is not connected to the internet.",
      "Contributed to Fleet and Smart Home integrations, developing UI components for fleet charging automation, energy tracking, and early-stage V2X (Vehicle-to-Everything) connectivity interfaces.",
      "Implemented automated testing suites using Jest and React Native Testing Library, achieving high coverage for UI, business logic, and BLE connectivity scenarios.",
      "Oversaw CI/CD deployments via Bitrise and Fastlane, automating build, testing, and release workflows to streamline delivery across App Store and Google Play.",
      "Worked in an Agile development environment, participating in sprint planning, code reviews, and daily stand-ups to deliver incremental features on schedule.",
      "Collaborated cross-functionally with product managers, designers, and QA engineers to translate business requirements into intuitive, high-performance mobile experiences."
    ]
  },
  {
    company: "Pear Therapeutics",
    position: "Senior Mobile Developer",
    period: "January 2021 – April 2023",
    previousPosition: "Mobile Software Developer",
    previousPeriod: "April 2019 – December 2020",
    appLinks: {
      appStore: "https://apps.apple.com/us/app/pursuecare/id1546898669",
      googlePlay: "https://play.google.com/store/apps/details?id=com.pursuecare.patientapp"
    },
    achievements: [
      "Developed mobile applications from scratch (reSET, reSET-O, Somryst) using React Native and native iOS/Android, delivering FDA-cleared prescription digital therapeutics (PDTs) in a fast-moving startup environment.",
      "Led end-to-end development of patient-facing features, including cognitive behavioral therapy (CBT) modules, progress tracking, and personalized feedback systems — all aligned with HIPAA and FDA SaMD standards.",
      "Collaborated cross-functionally with backend, UX, and clinical teams to translate therapy protocols into engaging, secure mobile experiences that improved treatment adherence and outcomes.",
      "Implemented secure data collection and transmission, real-time monitoring dashboards, and push notifications to enhance engagement and clinical oversight.",
      "Optimized app performance and reliability, resolving bottlenecks across React Native and native layers, and maintaining compliance through rigorous QA and documentation for regulatory submissions."
    ]
  },
  {
    company: "Walmart eCommerce Global",
    position: "Mobile Software Developer",
    period: "August 2016 – April 2019",
    appLinks: {
      appStore: "https://apps.apple.com/us/app/walmart-shopping-savings/id338137227",
      googlePlay: "https://play.google.com/store/apps/details?id=com.walmart.android&hl=en_US"
    },
    achievements: [
      "Contributed to feature development for large-scale iOS and Android apps, building and enhancing UI components, shopping flows, and location-based features that served millions of daily users.",
      "Assisted in end-to-end implementation of mobile features — from design and coding in Swift, Objective-C, and Kotlin to testing and deployment through Walmart's CI/CD pipelines.",
      "Integrated REST and GraphQL APIs to support dynamic content such as personalized recommendations, order tracking, and in-store pickup options.",
      "Collaborated within Agile teams, working closely with senior developers, designers, and product managers to translate business needs into scalable, user-friendly features and migrate native applications to React Native early version.",
      "Debugged and optimized app performance, resolved production issues, and improved reliability across multiple device types and OS versions.",
      "Contributed to automated testing and code reviews, helping maintain high code quality and consistent user experience across platforms."
    ]
  }
];

export const skills: Skill[] = [
  {
    category: "Programming Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "Swift", "Kotlin", "Objective-C"]
  },
  {
    category: "Frameworks & Libraries",
    items: [
      "React Native",
      "Expo",
      "Node.js",
      "Redux",
      "Redux Toolkit",
      "React",
      "React Native for Web",
      "GraphQL",
      "RESTful APIs",
      "Firebase",
      "Jest",
      "Detox",
      "React Native Testing Library"
    ]
  },
  {
    category: "Mobile Development",
    items: [
      "iOS",
      "Android",
      "React Native (cross-platform)",
      "Native Modules",
      "BLE Integration (react-native-ble-plx)",
      "Push Notifications (FCM, APNs)"
    ]
  },
  {
    category: "State Management",
    items: ["Redux", "Zustand", "Context API", "React Hooks"]
  },
  {
    category: "Performance Optimization",
    items: [
      "Type-safe Native Bindings",
      "Codegen",
      "On-demand Module Loading",
      "React Native Reanimated 4",
      "FlashList",
      "JSI-based architecture",
      "Hermes",
      "TurboModules"
    ]
  },
  {
    category: "CI/CD & Automation",
    items: ["Bitrise", "Fastlane", "EAS", "Jest", "CI/CD pipelines", "Over-The-Air (OTA) updates"]
  },
  {
    category: "Tools & Technologies",
    items: [
      "Git",
      "GitHub",
      "Bitbucket",
      "Figma",
      "Datadog",
      "Firebase Analytics",
      "WCAG 2.1 Accessibility"
    ]
  },
  {
    category: "Cloud & Backend",
    items: [
      "AWS",
      "Firebase",
      "Google Maps",
      "Apple Maps",
      "Waze",
      "REST APIs",
      "GraphQL",
      "Node.js"
    ]
  },
  {
    category: "Testing & Quality Assurance",
    items: [
      "Unit Testing",
      "Integration Testing",
      "End-to-End Testing",
      "Jest",
      "Detox",
      "Automated Testing Suites",
      "CI/CD",
      "Code Reviews"
    ]
  },
  {
    category: "Agile Methodologies",
    items: ["Sprint Planning", "Code Reviews", "Daily Stand-ups", "Cross-functional Collaboration"]
  }
];

export const education = {
  degree: "Bachelor of Science in Civil Engineering",
  university: "University of California, Davis",
  year: "2013"
};

export interface Project {
  id: string;
  title: string;
  company: string;
  description: string;
  technologies: string[];
  highlights: string[];
  period: string;
  appLinks?: {
    appStore?: string;
    googlePlay?: string;
  };
  image?: string;
}

export const projects: Project[] = [
  {
    id: "yahoo-mail",
    title: "Yahoo Mail Mobile",
    company: "Yahoo",
    description: "Modernized Yahoo Mail mobile app with React Native architecture migration, AI-powered features, and real-time push notifications using FCM and APNs.",
    technologies: ["React Native", "TypeScript", "Expo", "GraphQL", "Firebase", "FCM", "APNs", "JSI"],
    highlights: [
      "Migrated to new React Native architecture (Fabric & TurboModules)",
      "Built real-time push notification system with FCM and APNs",
      "Implemented AI-driven personalization engines",
      "Achieved 60+ FPS animations with Reanimated 4"
    ],
    period: "2025",
    appLinks: {
      appStore: "https://apps.apple.com/us/app/yahoo-mail/id577586159",
      googlePlay: "https://play.google.com/store/apps/details?id=com.yahoo.mobile.client.android.mail&hl=en_US"
    },
    image: ""
  },
  {
    id: "yahoo-finance",
    title: "Yahoo Finance Mobile",
    company: "Yahoo",
    description: "Enhanced Yahoo Finance app with real-time data feeds, GraphQL integration, and React Native for Web to unify codebase across platforms.",
    technologies: ["React Native", "TypeScript", "GraphQL", "REST APIs", "React Native for Web", "Firebase"],
    highlights: [
      "Integrated GraphQL and REST APIs for real-time data",
      "Unified codebase with React Native for Web",
      "Built AI-driven personalization features",
      "Implemented OTA deployment with EAS"
    ],
    period: "2025",
    appLinks: {
      appStore: "https://apps.apple.com/us/app/yahoo-finance-stocks-news/id328412701",
      googlePlay: "https://play.google.com/store/apps/details?id=com.yahoo.mobile.client.android.finance&hl=en_US"
    },
    image: ""
  },
  {
    id: "chargepoint-main",
    title: "ChargePoint EV Charging App",
    company: "ChargePoint",
    description: "Developed comprehensive EV charging mobile app with real-time station visualization, BLE integration, and cross-platform widgets for iOS and Android.",
    technologies: ["React Native", "TypeScript", "Expo", "Redux", "BLE", "Google Maps", "Firebase", "SQLite"],
    highlights: [
      "Real-time station status visualization with map integration",
      "BLE connectivity for charging station setup and diagnostics",
      "Cross-platform home screen widgets",
      "Offline functionality with SQLite"
    ],
    period: "2023-2025",
    appLinks: {
      appStore: "https://apps.apple.com/us/app/chargepoint/id356866743",
      googlePlay: "https://play.google.com/store/apps/details?id=com.coulombtech&hl=en_US"
    },
    image: ""
  },
  {
    id: "chargepoint-payments",
    title: "ChargePoint Payment Integration",
    company: "ChargePoint",
    description: "Expanded in-app payment systems with Apple Pay, Google Pay, and PayPal integration, implementing secure biometric authentication flows.",
    technologies: ["React Native", "Apple Pay", "Google Pay", "PayPal", "Biometric Auth", "Node.js", "GraphQL"],
    highlights: [
      "Integrated multiple payment providers (Apple Pay, Google Pay, PayPal)",
      "Implemented secure biometric authentication",
      "Built payment processing flows with GraphQL APIs",
      "Enhanced user experience with seamless checkout"
    ],
    period: "2023-2025",
    image: ""
  },
  {
    id: "chargepoint-fleet",
    title: "ChargePoint Fleet & Smart Home",
    company: "ChargePoint",
    description: "Contributed to Fleet and Smart Home integrations, developing UI components for fleet charging automation, energy tracking, and V2X connectivity interfaces.",
    technologies: ["React Native", "TypeScript", "IoT Integration", "Energy Management", "V2X", "Redux Toolkit"],
    highlights: [
      "Developed fleet charging automation UI",
      "Built energy tracking and management features",
      "Created early-stage V2X connectivity interfaces",
      "Implemented smart home integration components"
    ],
    period: "2023-2025",
    image: ""
  },
  {
    id: "pear-reset",
    title: "reSET - Digital Therapeutics",
    company: "Pear Therapeutics",
    description: "Built FDA-cleared prescription digital therapeutic app from scratch for substance use disorder treatment, ensuring HIPAA and FDA SaMD compliance.",
    technologies: ["React Native", "iOS", "Android", "HIPAA Compliance", "FDA SaMD", "CBT Modules"],
    highlights: [
      "End-to-end development of patient-facing CBT modules",
      "HIPAA and FDA SaMD compliant architecture",
      "Secure data collection and transmission",
      "Real-time monitoring dashboards for clinicians"
    ],
    period: "2019-2023",
    appLinks: {
      appStore: "https://apps.apple.com/us/app/pursuecare/id1546898669",
      googlePlay: "https://play.google.com/store/apps/details?id=com.pursuecare.patientapp"
    },
    image: ""
  },
  {
    id: "pear-reset-o",
    title: "reSET-O - Opioid Use Disorder",
    company: "Pear Therapeutics",
    description: "Developed FDA-cleared digital therapeutic for opioid use disorder treatment with personalized feedback systems and progress tracking aligned with clinical protocols.",
    technologies: ["React Native", "iOS", "Android", "HIPAA", "FDA SaMD", "Clinical Protocols"],
    highlights: [
      "Personalized feedback systems for treatment adherence",
      "Progress tracking aligned with clinical protocols",
      "Secure patient data management",
      "Integration with clinical monitoring systems"
    ],
    period: "2019-2023",
    appLinks: {
      appStore: "https://apps.apple.com/us/app/pursuecare/id1546898669",
      googlePlay: "https://play.google.com/store/apps/details?id=com.pursuecare.patientapp"
    },
    image: ""
  },
  {
    id: "walmart-shopping",
    title: "Walmart Shopping App",
    company: "Walmart eCommerce",
    description: "Contributed to large-scale mobile shopping app serving millions of daily users with shopping flows, location-based features, and personalized recommendations.",
    technologies: ["React Native", "Swift", "Kotlin", "Objective-C", "GraphQL", "REST APIs"],
    highlights: [
      "Features serving millions of daily users",
      "Location-based shopping experiences",
      "Personalized recommendation engine",
      "In-store pickup options"
    ],
    period: "2016-2019",
    appLinks: {
      appStore: "https://apps.apple.com/us/app/walmart-shopping-savings/id338137227",
      googlePlay: "https://play.google.com/store/apps/details?id=com.walmart.android&hl=en_US"
    },
    image: ""
  },
  {
    id: "walmart-migration",
    title: "Walmart React Native Migration",
    company: "Walmart eCommerce",
    description: "Led early migration of native iOS and Android applications to React Native, improving code reusability and development velocity across platforms.",
    technologies: ["React Native", "Swift", "Kotlin", "Objective-C", "TypeScript", "Redux"],
    highlights: [
      "Early React Native adoption and migration",
      "Improved code reusability across platforms",
      "Reduced development time by 40%",
      "Maintained native performance standards"
    ],
    period: "2016-2019",
    image: ""
  }
];

