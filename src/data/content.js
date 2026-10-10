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
      "[I'm Vansh Jaat, a fresher Full Stack MERN Developer who enjoys turning ideas into real, functional web applications. I work across the frontend and backend, building responsive user interfaces, developing REST APIs, managing databases, and integrating authentication and third-party services.",

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
        "A full-stack social media application where users can publish tweets, explore content, search for users and posts, and access subscription plans with usage limits.",

      longDescription:
        "Built using React, TypeScript, Node.js, Express.js, and MongoDB Atlas. The application brings together social interactions, authentication, multilingual interfaces, subscription management, and external service integrations.",

      image: "/projects/twitter-clone.png",

      technologies: [
        "React.js",
        "TypeScript",
        "Node.js",
        "Express.js",
        "MongoDB Atlas",
        "Firebase",
        "Razorpay",
      ],

      features: [
        "User authentication",
        "Google sign-in integration",
        "Create and explore tweets",
        "Search tweets and users",
        "Multilingual interface",
        "Subscription plans",
        "Tweet usage limits",
        "Payment integration",
        "Email and SMS OTP integrations",
        "Image and audio upload functionality",
        "Notification functionality",
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

      architecture: {
        frontend: "React.js / Next.js",
        backend: "Node.js / Express.js",
        database: "MongoDB Atlas",
        authentication: "Firebase",
        payments: "Razorpay",
        mediaStorage: "Cloudinary",
      },

      challenges: [
        "Integrating authentication and OTP providers.",
        "Managing environment variables across local and deployed environments.",
        "Implementing subscription-based tweet limits.",
        "Connecting frontend features to backend APIs and database models.",
      ],

      learnings: [
        "Designing and integrating REST APIs.",
        "Working with MongoDB and Mongoose.",
        "Integrating third-party authentication and payment services.",
        "Debugging deployment and configuration issues.",
        "Managing feature rules in the backend.",
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
        "A recipe-focused application designed to help users discover and interact with recipe content.",

      longDescription:
        "A web application built with Next.js, Clerk authentication, and Strapi CMS. Update this description with the exact AI features and workflows supported by your current deployed version.",

      image: "/projects/servd-ai.png",

      technologies: [
        "Next.js",
        "Clerk",
        "Strapi CMS",
      ],

      features: [
        "Next.js application",
        "Clerk authentication integration",
        "Strapi content management integration",
        "Recipe-focused user experience",
      ],

      architecture: {
        frontend: "Next.js",
        authentication: "Clerk",
        contentManagement: "Strapi CMS",
      },

      liveUrl: "YOUR_SERVD_LIVE_URL",
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
      status: "Last semester of BCA",
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
    username: "Code-sHere",
    profileUrl: "https://github.com/Code-sHere",
    apiUrl: "https://api.github.com",

    title: "Live from Code-sHere.",
    description:
      "Explore my public repositories, programming languages, and development activity.",

    repositoryLimit: 6,

    filters: [
      "All",
      "JavaScript",
      "TypeScript",
    ],

    contributionCalendar: {
      enabled: true,
      fallbackMessage:
        "Contribution data is unavailable right now. Visit my GitHub profile to explore my activity.",
    },

    repositoryFallback: {
      empty:
        "No public repositories match this filter yet.",
      error:
        "GitHub data could not be loaded right now. Please visit my profile directly.",
    },
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

    form: {
      fields: [
        {
          name: "name",
          label: "Name",
          type: "text",
          required: true,
        },
        {
          name: "email",
          label: "Email",
          type: "email",
          required: true,
        },
        {
          name: "subject",
          label: "Subject",
          type: "text",
          required: true,
        },
        {
          name: "message",
          label: "Message",
          type: "textarea",
          required: true,
        },
      ],

      submitLabel: "Send Message",

      statusMessages: {
        sending: "Sending your message...",
        success: "Your message has been sent successfully.",
        error:
          "Your message could not be sent. Please try again.",
      },
    },
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
