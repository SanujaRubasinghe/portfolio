const navLinks = [
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Research",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Education",
    link: "#education",
  },
];

const words = [
  { text: "Data", imgPath: "/images/data.svg" },
  { text: "Algorithms", imgPath: "/images/algorithms.svg" },
  { text: "Models", imgPath: "/images/models.svg" },
  { text: "Insights", imgPath: "/images/ideas.svg" },
  { text: "Data", imgPath: "/images/data.svg" },
  { text: "Algorithms", imgPath: "/images/algorithms.svg" },
  { text: "Models", imgPath: "/images/models.svg" },
  { text: "Insights", imgPath: "/images/ideas.svg" },
];

const counterItems = [
  { value: 2, suffix: "+", label: "AI/ML Projects" },
  { value: 1, suffix: "+", label: "Research Papers Read" },
  { value: 5, suffix: "+", label: "Core Courses" },
  { value: 2, suffix: "", label: "Years in CS" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Model Development",
    desc: "Building and fine-tuning machine learning models from classical algorithms to deep neural networks.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Continuous Learning",
    desc: "Actively expanding knowledge through online courses, competitions, and hands-on experimentation with new technologies.",
  },
  {
    imgPath: "/images/time.png",
    title: "Problem Solving",
    desc: "Breaking down complex challenges into manageable components and applying ML techniques to find optimal solutions.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Adrian brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Frontend Developer",
    date: "January 2023 - Present",
    responsibilities: [
      "Developed and maintained user-facing features for the Hostinger website.",
      "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
      "Optimized web applications for maximum speed and scalability.",
    ],
  },
  {
    review: "Adrian’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Full Stack Developer",
    date: "June 2020 - December 2023",
    responsibilities: [
      "Led the development of Docker's web applications, focusing on scalability.",
      "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
      "Contributed to open-source projects that were used with the Docker ecosystem.",
    ],
  },
  {
    review: "Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "React Native Developer",
    date: "March 2019 - May 2020",
    responsibilities: [
      "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
      "Improved app performance and user experience through code optimization and testing.",
      "Coordinated with the product team to implement features based on feedback.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

const myProjects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "Facilitates purchases from international websites like Amazon and eBay, allowing customers to shop from these sites and have products delivered domestically.",
    subDescription: [
      "Built a scalable application with ASP.NET Core MVC, integrating global platforms like Amazon for domestic delivery.",
      "Implemented secure authentication and database management using ASP.NET Core Identity and Entity Framework Core.",
      "Designed a responsive frontend with Tailwind CSS, enhancing user experience.",
      "Added payment systems, localization, and product filtering for functionality improvements.",
    ],
    href: "",
    logo: "",
    image: "/images/projects/accessories.jpg",
    tags: [
      {
        id: 1,
        name: "C#",
        path: "/images/logos/csharp.svg",
      },
      {
        id: 2,
        name: ".Net",
        path: "/images/logos/dotnet.svg",
      },
      {
        id: 3,
        name: "Ef Core",
        path: "/images/logos/efcore.png",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/images/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 2,
    title: "Authentication & Authorization System",
    description:
      "A secure authentication and authorization system using Auth0 for seamless user management.",
    subDescription: [
      "Integrated Auth0 for authentication, supporting OAuth, JWT, and multi-factor authentication.",
      "Implemented role-based access control (RBAC) for fine-grained user permissions.",
      "Developed a React-based frontend with Tailwind CSS for a sleek user experience.",
      "Connected to a secure SQLite database for user data storage.",
    ],
    href: "",
    logo: "",
    image: "/images/projects/auth-system.jpg",
    tags: [
      {
        id: 1,
        name: "Auth0",
        path: "/images/logos/auth0.svg",
      },
      {
        id: 2,
        name: "React",
        path: "/images/logos/react.svg",
      },
      {
        id: 3,
        name: "SQLite",
        path: "/images/logos/sqlite.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/images/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 3,
    title: "Blazor Web App",
    description:
      "A modern, interactive web application built with Blazor WebAssembly and .NET Core.",
    subDescription: [
      "Developed a fully interactive Single Page Application (SPA) using Blazor WebAssembly.",
      "Implemented API interactions using .NET Core for a robust backend.",
      "Designed responsive UI components with Tailwind CSS for an enhanced UX.",
      "Integrated SQLite for efficient client-side database storage.",
    ],
    href: "",
    logo: "",
    image: "/images/projects/blazor-app.jpg",
    tags: [
      {
        id: 1,
        name: "Blazor",
        path: "/images/logos/blazor.svg",
      },
      {
        id: 2,
        name: ".NET Core",
        path: "/images/logos/dotnetcore.svg",
      },
      {
        id: 3,
        name: "SQLite",
        path: "/images/logos/sqlite.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/images/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 4,
    title: "C++ Game Engine",
    description:
      "A lightweight C++ game engine designed for 2D and 3D game development.",
    subDescription: [
      "Built a powerful rendering engine using OpenGL and C++.",
      "Developed a physics engine with collision detection and particle effects.",
      "Implemented a scripting system for easy game customization.",
      "Optimized performance with multi-threading and efficient memory management.",
    ],
    href: "",
    logo: "",
    image: "/images/projects/game-engine.jpg",
    tags: [
      {
        id: 1,
        name: "C++",
        path: "/images/logos/cplusplus.svg",
      },
      {
        id: 2,
        name: "C#",
        path: "/images/logos/csharp.svg",
      },
      {
        id: 3,
        name: "Git",
        path: "/images/logos/git.svg",
      },
      {
        id: 4,
        name: "Microsoft",
        path: "/images/logos/microsoft.svg",
      },
    ],
  },
  {
    id: 5,
    title: "WordPress Custom Theme",
    description:
      "A fully customizable WordPress theme optimized for performance and SEO.",
    subDescription: [
      "Developed a responsive WordPress theme using HTML5, CSS3, and JavaScript.",
      "Integrated Tailwind CSS for modern styling and UI enhancements.",
      "Optimized SEO and page speed using Vite.js for fast builds.",
      "Implemented custom widgets and plugin compatibility for extended functionality.",
    ],
    href: "",
    logo: "",
    image: "/images/projects/wordpress-theme.jpg",
    tags: [
      {
        id: 1,
        name: "WordPress",
        path: "/images/logos/wordpress.svg",
      },
      {
        id: 2,
        name: "HTML5",
        path: "/images/logos/html5.svg",
      },
      {
        id: 3,
        name: "CSS3",
        path: "/images/logos/css3.svg",
      },
      {
        id: 4,
        name: "Vite.js",
        path: "/images/logos/vitejs.svg",
      },
    ],
  },
  {
    id: 6,
    title: "Online Learning Platform",
    description:
      "A web application that allows users to enroll in courses, watch video lectures, and take quizzes.",
    subDescription: [
      "Built using Blazor WebAssembly for a seamless SPA experience.",
      "Implemented video streaming with Azure Media Services.",
      "Added a quiz system with dynamic question generation and real-time grading.",
      "Integrated Stripe API for secure payment processing.",
    ],
    href: "",
    logo: "",
    image: "/images/projects/elearning.jpg",
    tags: [
      {
        id: 1,
        name: "Blazor",
        path: "/images/logos/blazor.svg",
      },
      {
        id: 2,
        name: "Azure",
        path: "/images/logos/azure.svg",
      },
      {
        id: 3,
        name: "Stripe",
        path: "/images/logos/stripe.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/images/logos/tailwindcss.svg",
      },
    ],
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
  myProjects
};
