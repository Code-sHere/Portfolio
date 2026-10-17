import { head } from "motion/react-client";

export const portfolio = {
  // PERSONAL INFORMATION
  personal: {
    name: "Vansh Jaat",
    firstName: "Vansh",
    role: "Full Stack MERN Developer",
    tagline:
      "I build modern, scalable, and interactive web applications from frontend to backend.",
    email: "YOUR_EMAIL@example.com",
    location: "Delhi, India",
    resume: "/resume.pdf",

    links: {
      github: "https://github.com/Code-sHere",
      linkedin: "YOUR_LINKEDIN_URL",
      portfolio: "YOUR_PORTFOLIO_URL",
    },

    availability: [
      "Full-time opportunities",
      "Collaborations",
    ],
  },

  // HERO SECTION
  hero: {
    badge: "Open to Full Stack Opportunities",
    heading: "Full stack,",
    heading2: " front to back.",
    description:
      "I turn ideas into working web applications using modern frontend technologies, powerful backend APIs, databases, authentication, and third-party integrations.",

    buttons: [
      {
        label: "Explore Projects",
        href: "#projects",
      },
      {
        label: "Let's Connect",
        href: "#contact",
      },
      {
        label: "View Resume",
        href: "/resume.pdf",
      },
    ],

    stack: [
      {
        category: "INTERFACE",
        technologies: [
          "React.js",
          "Next.js",
          "JavaScript",
          "TypeScript",
          "Tailwind CSS",
        ],
      },
      {
        category: "API",
        technologies: [
          "Node.js",
          "Express.js",
          "REST APIs",
          "Authentication",
        ],
      },
      {
        category: "DATA",
        technologies: [
          "MongoDB",
          "MongoDB Atlas",
          "Mongoose",
          "MySQL",
        ],
      },
    ],
  },

  // ABOUT SECTION

  about: {
    heading: "A developer who learns by building.",

    description:
      "[I'm Vansh Jaat, a fresher Full Stack also known as a MERN Developer who enjoys turning ideas into real, functional web applications. I work across the frontend and backend, building responsive user interfaces, developing REST APIs, managing databases, and integrating authentication and third-party services.",

    secondParagraph:
      "I've put my skills into practice through projects like my Twitter Clone and SERVD AI. From implementing authentication, subscription plans, payment integration, and multilingual interfaces to building an AI-powered recipe platform, I enjoy exploring how different technologies come together to solve real problems.]",

    workingStyle: [
      {
        title: "Learn by Building",
        description:
          "I strengthen my understanding by creating practical projects, exploring documentation, and applying new technologies to real-world development challenges.",
      },
      {
        title: "Debug with Curiosity",
        description:
          "When something breaks, I trace the data flow, investigate the root cause, and test solutions to understand not just what went wrong, but why.",
      },
      {
        title: "Think Beyond the UI",
        description:
          "I enjoy connecting frontend experiences with backend logic, databases, authentication, and APIs to build applications that work as complete products.",
      },
    ],

    education: [
      {
        title: "Bachelor of Computer Applications",
        institution: "Indira Gandhi National Open University (IGNOU)",
        status: "Pursuing",
      },
      {
        title: "Master Diploma in Computer Engineering",
        institution: "IICS, Yamuna Vihar, Delhi",
        status: "Completed",
      },
    ],

    goal: {
      heading: "What's next?",
      description:
        "I'm looking for an opportunity to begin my professional journey as a software developer, contribute to meaningful products, learn from experienced developers, and grow into a stronger full-stack engineer.",
    },
  },


  // SKILLS
  skills: [
    {
      title: "FRONTEND",
      items: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "TypeScript",
        "React.js",
        "Next.js",
        "Tailwind CSS",
      ],
    },
    {
      title: "BACKEND",
      items: [
        "Node.js",
        "Express.js",
        "Spring Boot",
        "Laravel",
      ],
    },
    {
      title: "DATABASES",
      items: [
        "MongoDB",
        "MongoDB Atlas",
        "Mongoose",
        "MySQL",
      ],
    },
    {
      title: "LANGUAGES",
      items: [
        "JavaScript",
        "Java",
        "Python",
      ],
    },
    {
      title: "TOOLS",
      items: [
        "Git",
        "GitHub",
        "VS Code",
        "Postman",
        "IntelliJ IDEA",
      ],
    },
    {
      title: "INTEGRATIONS",
      items: [
        "Firebase Authentication",
        "Razorpay",
        "Cloudinary",
        "Email OTP",
        "SMS OTP",
        "WebSockets",
        "REST APIs",
      ],
    },
    {
      title: "DEPLOYMENT",
      items: [
        "Vercel",
        "Render",
      ],
    },
  ],

  architecture: [
    {
      layer: "Frontend",
      technologies: ["React.js", "Next.js"],
    },
    {
      layer: "Backend",
      technologies: ["Node.js", "Express.js"],
    },
    {
      layer: "Database",
      technologies: ["MongoDB", "MySQL"],
    },
    {
      layer: "Deployment",
      technologies: ["Vercel", "Render"],
    },
  ],


  // PROJECTS
  projects: [
    {
      id: "twitter-clone",
      title: "Twitter Clone",
      category: "Full Stack",
      featured: true,

      description:
        "A full-stack social media platform featuring tweet publishing, user discovery, social interactions, multilingual support, and subscription-based usage limits.",

      longDescription:
        "Developed a full-stack social media application using React, TypeScript, Next.js, Node.js, Express.js, and MongoDB Atlas. Integrated authentication, social interactions, OTP verification, payment processing, media uploads, and multilingual interfaces.",

      image: "/projects/twitter-clone.png",

      technologies: [
        "React.js",
        "TypeScript",
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB Atlas",
        "Mongoose",
        "Firebase",
        "Brevo",
        "Twilio",
        "Cloudinary",
        "Razorpay",
        "i18next",
      ],

      points: [
        "Developed a full-stack social media platform supporting tweet creation, likes, retweets, comments, user profiles, following, and content discovery.",
        "Implemented user authentication, Google sign-in, password recovery, and email/SMS OTP verification using Firebase and third-party messaging services.",
        "Integrated Razorpay subscription payments with four membership tiers and backend-enforced daily tweet limits.",
        "Built multilingual interfaces supporting English, Spanish, French, Hindi, Portuguese, and Chinese, alongside theme switching and browser notifications.",
        "Developed RESTful APIs with Node.js and Express.js, managed application data using MongoDB Atlas, integrated Cloudinary for media storage, and deployed the frontend on Vercel and backend on Render.",
      ],

      features: [
        "User authentication",
        "Google sign-in integration",
        "Create, like, retweet, and comment on tweets",
        "User profiles and following",
        "Search tweets and users",
        "Six-language interface",
        "Subscription plans and daily tweet limits",
        "Razorpay payment integration",
        "Email and SMS OTP verification",
        "Password recovery",
        "Image and audio upload functionality",
        "Browser notifications",
        "Light and dark themes",
        "Responsive user interface",
      ],

      subscriptionPlans: [
        {
          name: "Free",
          price: "₹0",
          tweetLimit: "1 tweet per day",
        },
        {
          name: "Bronze",
          price: "₹100/month",
          tweetLimit: "3 tweets per day",
        },
        {
          name: "Silver",
          price: "₹300/month",
          tweetLimit: "5 tweets per day",
        },
        {
          name: "Gold",
          price: "₹1000/month",
          tweetLimit: "Unlimited tweets",
        },
      ],

      languages: [
        "English",
        "Spanish",
        "French",
        "Hindi",
        "Portuguese",
        "Chinese",
      ],

      challenges: [
        "Integrating authentication providers and email/SMS OTP workflows.",
        "Managing environment variables and service configurations across local and deployed environments.",
        "Implementing subscription-based tweet limits and payment workflows.",
        "Connecting frontend interactions to REST APIs, database models, and third-party services.",
        "Debugging deployment issues and handling API errors across multiple integrations.",
      ],

      learnings: [
        "Designing and integrating RESTful APIs.",
        "Working with MongoDB Atlas, Mongoose, and data validation.",
        "Integrating third-party authentication, payment, email, SMS, and media services.",
        "Implementing subscription rules and server-side feature restrictions.",
        "Managing environment variables, debugging production issues, and deploying full-stack applications.",
      ],

      liveUrl: "https://twitter-clone-dusky-alpha.vercel.app/",
      githubUrl: "YOUR_TWITTER_CLONE_REPOSITORY_URL",
    },

    {
      id: "servd-ai",
      title: "SERVD AI",
      category: "Full Stack",
      featured: true,

      description:
        "A recipe-focused web application designed to help users explore recipe content through a modern, interactive interface.",

      longDescription:
        "Built a recipe-focused web application using Next.js and React, with Clerk authentication and Strapi CMS integration. The project combines a modern frontend, user authentication, and content management to deliver a structured recipe discovery experience.",

      image: "/projects/servd-ai.png",

      technologies: [
        "Next.js",
        "React.js",
        "JavaScript",
        "Tailwind CSS",
        "Clerk",
        "Strapi CMS",
      ],

      points: [
        "Developed a responsive recipe-focused web application using Next.js, React.js, and Tailwind CSS.",
        "Integrated Clerk authentication to support secure user sign-in and session management.",
        "Connected Strapi CMS to manage recipe content and retrieve structured data for the application.",
        "Designed an interactive user interface for browsing and exploring recipe-related content across screen sizes.",
        "Organized the application using reusable React components and Next.js routing to support maintainable development and navigation.",
      ],

      features: [
        "Recipe-focused content discovery",
        "Clerk authentication integration",
        "Strapi CMS integration",
        "Dynamic content management",
        "Responsive user interface",
        "Reusable React components",
        "Next.js routing",
      ],

      architecture: {
        frontend: "Next.js, React.js, Tailwind CSS",
        authentication: "Clerk",
        contentManagement: "Strapi CMS",
        language: "JavaScript",
      },

      challenges: [
        "Integrating Clerk authentication into the frontend.",
        "Connecting the application to Strapi CMS for content management.",
        "Structuring reusable components and maintaining consistent UI behavior.",
        "Building a responsive interface and organizing application navigation.",
      ],

      learnings: [
        "Building React applications with Next.js.",
        "Implementing third-party authentication with Clerk.",
        "Integrating a headless CMS for content management.",
        "Creating reusable components and responsive layouts.",
        "Structuring maintainable frontend applications.",
      ],

      liveUrl: "https://ai-recipe-maker-servdfrontend.vercel.app/",
      githubUrl: "YOUR_SERVD_REPOSITORY_URL",
    },
  ],

  // CAREER JOURNEY
  journey: [
    {
      status: "Completed",
      title: "Twitter Clone",
      description:
        "Developed a full-stack social application with authentication, subscriptions, and integrations.",
    },
    {
      status: "Completed",
      title: "SERVD AI",
      description:
        "Worked on a recipe-focused web application using Next.js, Clerk, and Strapi.",
    },
    {
      status: "Completed",
      title: "Master Diploma in Computer Engineering",
      description:
        "Studying at IICS, Yamuna Vihar, Delhi.",
    },
    {
      status: "1 exam left",
      title: "Bachelor of Computer Applications",
      description:
        "Studying at IGNOU.",
    },
    {
      status: "Current Goal",
      title: "First Full Stack Developer Role",
      description:
        "Looking to contribute to real-world applications and grow as a software developer.",
    },
  ],

  // CAREER GOALS
  goals: {
    current: {
      title: "Start My Professional Journey",
      description:
        "Secure a full-stack development role where I can contribute to real projects, collaborate with a team, and improve my engineering skills.",
    },

    longTerm: {
      title: "Build Products That Matter",
      description:
        "Grow into a strong software engineer capable of designing scalable applications and delivering reliable products from frontend to backend.",
    },
  },

  // TERMINAL PLAYGROUND
  playground: {
    title: "A little terminal, a lot of code.",
    prompt: "visitor@portfolio:~",
    welcome:
      "Welcome! Type help or select a command to explore my portfolio.",

    commands: [
      "help",
      "about",
      "skills",
      "projects",
      "github",
      "contact",
      "clear",
    ],

    projectslists:[
      "> projects",
      "1. Twitter Clone",
      "2. SERVD AI",
      "3. Chat-Sphere",
      "> "
    ],

    stackExplorer: [
      {
        label: "Interface",
        value: "React.js, Next.js, Tailwind CSS",
      },
      {
        label: "API",
        value: "Node.js, Express.js, REST APIs",
      },
      {
        label: "Data",
        value: "MongoDB Atlas, Mongoose, MySQL",
      },
      {
        label: "Deployment",
        value: "Vercel, Render",
      },
    ],
  },

  // GITHUB SECTION
  github: {
    username: "Live from Code-sHere",
    profileUrl: "https://github.com/Code-sHere",
  },

  // CONTACT SECTION
  contact: {
    title:
      "Have a product idea? Let's build something useful.",

    description:
      "Have an opportunity, project, or interesting idea? Send me a message and let's connect.",

    email: "vansh858688@gmail.com",
    github: "https://github.com/Code-sHere",
    linkedin: "",

    openTo: [
      "Full-time roles",
      "Collaboration",
    ],
  },

  // FOOTER
  footer: {
    headline: "See you in the repo.",
    description:
      "Thanks for exploring my portfolio. Let's build something useful.",
    ctaLabel: "Say Hello",
    ctaHref: "#contact",
    copyright: "© 2026 Vansh Jaat",
    backToTop: "Back to Top",
  },
};

export default portfolio;
