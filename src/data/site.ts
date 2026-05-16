export const GITHUB_USERNAME = 'Aakashbalamurugan';

/** Only these repos appear on the site — not the full GitHub list */
export const highlightedRepoNames = ['BetterMe', 'bus-attendence'];

export const site = {
  name: 'Aakash Balamurugan',
  shortName: 'Aakash',
  initials: 'AAKASH B',
  role: 'Software Engineer',
  company: 'Freshworks',
  location: 'Puducherry, India',
  email: 'aakashbala205@gmail.com',
  phone: '+91 8778148108',
  availability: 'Immediate — open to Chennai, Bengaluru, Hyderabad, and remote',
  summary: `Software Engineer with 2.5+ years at Freshworks, shipping production features across backend microservices and React frontends for a live Cloud SaaS platform. Strong in Java (Spring Boot), Python (FastAPI), and React. Grew JUnit/Mockito coverage from 40% to 88%, stabilised CI/CD pipelines, and delivers full-stack projects end-to-end. Uses AI coding assistants (Claude, GitHub Copilot, Cursor) daily.`,
  links: {
    github: `https://github.com/${GITHUB_USERNAME}`,
    linkedin: 'https://www.linkedin.com/in/aakash-balamurugan/',
    email: 'mailto:aakashbala205@gmail.com',
    phone: 'tel:+918778148108',
  },
  avatar: `${process.env.PUBLIC_URL}/img/aakash.png`,
  githubAvatar: 'https://avatars.githubusercontent.com/u/116252032?v=4',
};

export const skills = [
  {
    title: 'Frontend',
    items: ['React', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Node.js', 'TypeScript'],
  },
  {
    title: 'Backend',
    items: [
      'Java (Spring, Spring Boot)',
      'Python (FastAPI)',
      'REST APIs',
      'Microservices',
      'OAuth2',
      'JWT',
      'Kafka',
    ],
  },
  {
    title: 'Databases',
    items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    title: 'Testing',
    items: ['JUnit', 'Mockito', 'Playwright', 'Selenium', 'SonarQube', 'Postman'],
  },
  {
    title: 'DevOps & Cloud',
    items: ['Docker', 'Kubernetes', 'Jenkins (CI/CD)', 'Git', 'AWS', 'GCP'],
  },
  {
    title: 'Mobile & Practices',
    items: ['Kotlin (Android)', 'Agile', 'LLD', 'System Design', 'AI-Assisted Dev (Cursor, Copilot)'],
  },
];

export const languages = ['English (Professional)', 'Tamil (Native)', 'French (Basic)'];

export const interests = [
  'AI/LLM tooling',
  'System Design',
  'Open Source',
  'Developer productivity automation',
];
export const experience = [
  {
    title: 'Graduate Trainee (Full Stack)',
    company: 'Freshworks',
    period: 'Feb 2025 – May 2026',
    points: [
      'Designed, developed, and shipped scalable RESTful APIs and microservices using Java and Spring Boot, including OAuth2 and JWT-based authentication flows for customer-facing SaaS platforms.',
      'Built and maintained React-based frontend components integrated with backend services, contributing to end-to-end feature delivery across multiple product modules.',
      'Containerised microservices using Docker and managed deployments through Kubernetes in a production SaaS environment.',
      'Improved CI/CD reliability through Jenkins pipeline enhancements, reducing deployment failures and streamlining release workflows.',
      'Developed automated test suites using Playwright and TypeScript, enforced quality standards with SonarQube, and leveraged AI-assisted development tools to accelerate testing and code reviews.',
    ],
  },
  {
    title: 'Software Engineer Intern',
    company: 'Freshworks',
    period: 'Dec 2023 – Jan 2025',
    points: [
      'Contributed to backend and frontend feature development using Java, Spring Boot, and JavaScript-based UI modules.',
      'Increased JUnit and Mockito test coverage from 40% to 88% across microservice modules — the highest coverage improvement within the team during the quarter.',
      'Refactored inter-service API communication to remove redundant calls, improving performance and reducing network overhead.',
      'Implemented Redis-based session storage across microservices and gained exposure to Kafka-driven event streaming architectures.',
      'Optimised MySQL queries and schema design by eliminating N+1 query patterns and adding targeted indexing for high-traffic operations.',
      'Handled L2 production support, debugging live issues across the stack and collaborating with senior engineers to deliver fixes.',
      'Participated in peer code reviews and followed engineering best practices to improve maintainability, reliability, and code quality.',
    ],
  },
];

export const achievements = [
  'Largest test coverage jump on the team: JUnit/Mockito from 40% to 88% in one quarter.',
  'Stabilised CI/CD pipelines across 5+ services by fixing recurring Jenkins build failures.',
  'Independently delivered BetterMe and Bus Attendance System end-to-end (frontend, backend, DB, infra).',
  'Reduced inter-service latency via API refactoring and MySQL optimisation (N+1, indexing).',
  'Implemented Redis session layer for a live multi-tenant SaaS platform.',
];

export const education = [
  {
    title: 'Bachelor of Computer Application (BCA)',
    org: 'University of Madras',
    detail: 'Advanced Software Engineering, DSA, Computer Graphics',
  },
  {
    title: 'FSSA — Full Stack Software Academy',
    org: 'Intensive Program · 2022 – 2023',
    detail: 'Java, HTML, CSS, JavaScript, JSP, Servlets, React',
  },
];

export const certifications = [
  'System Design Fundamentals — Self-study'
];

export const softSkills = [
  'Strong ownership & accountability',
  'Analytical problem-solving',
  'Fast learner & self-starter',
  'Collaborative cross-functional delivery',
  'Production support & on-call readiness',
];

export const featuredProjects = [
  {
    id: 'betterme',
    name: 'BetterMe — Stage Confidence App',
    tech: ['Java', 'JavaScript', 'React', 'MediaDevices API'],
    description:
      'Full-stack web app connecting users with professionals to overcome stage fright — built independently during the FSSA intensive program.',
    highlights: [
      'Frontend with real-time webcam recording via the MediaDevices API — no native app required.',
      'Java REST API for secure video upload, validation, storage, and retrieval.',
      'Session booking flow from registration to professional matching and video review.',
    ],
    github: `https://github.com/${GITHUB_USERNAME}/BetterMe`,
    images: ['/img/screenshots/betterme1.png', '/img/screenshots/betterme2.png'],
  },
  {
    id: 'bus-attendance',
    name: 'Bus Attendance System — AI-Powered Android App',
    tech: ['Python', 'Kotlin', 'FastAPI', 'React', 'MySQL', 'OpenCV', 'Cloudinary'],
    description:
      'Full-stack attendance system with Kotlin Android client and Python/FastAPI backend — real-time face recognition via OpenCV.',
    highlights: [
      'REST API layer with clean JSON contracts and consistent schemas for concurrent mobile requests.',
      'MySQL for structured records and Cloudinary for scalable image storage and auditing.',
      'End-to-end ownership from Android UI to Python ML backend without external guidance.',
    ],
    github: `https://github.com/${GITHUB_USERNAME}/bus-attendence`,
    images: ['/img/screenshots/busapp1.png', '/img/screenshots/busapp2.png'],
  },
];

/** Side demos — kept separate from resume projects */
export const games = [
  {
    name: 'Snake Game',
    description: 'Classic snake — grow by eating food and avoid the walls.',
    repo: `https://github.com/${GITHUB_USERNAME}/snake_game`,
    play: 'https://aakashbalamurugan.github.io/snake_game/',
  },
  {
    name: 'Tic Tac Toe',
    description: 'Two-player X and O — every match has a winner.',
    repo: `https://github.com/${GITHUB_USERNAME}/tic-tac-toe-game`,
    play: 'https://aakashbalamurugan.github.io/tic-tac-toe-game/',
  },
  {
    name: 'Color Picker',
    description: 'Six levels of color-name guessing that get harder each round.',
    repo: `https://github.com/${GITHUB_USERNAME}/color-picker`,
    play: 'https://aakashbalamurugan.github.io/color-picker/',
  },
];
