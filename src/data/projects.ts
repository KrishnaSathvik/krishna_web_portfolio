export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  status: 'live' | 'in-progress' | 'coming-soon';
  tags: string[];
  url?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    id: 'npe-usa',
    title: 'TrailVerse - National Parks Explorer',
    description: 'AI-powered platform for exploring and planning trips to America\'s 470+ National Parks. Features dual AI integration (OpenAI GPT-4 & Anthropic Claude), interactive maps with Google Maps API, real-time chat persistence, community reviews with image uploads, comprehensive park data from NPS API, and advanced filtering. Built with React, Node.js, MongoDB, and real-time features.',
    category: 'Full-Stack Web App',
    status: 'live',
    tags: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'OpenAI', 'Claude', 'Google Maps', 'Socket.io'],
    url: 'https://www.nationalparksexplorerusa.com/',
  },
  {
    id: 'applytrak',
    title: 'ApplyTrak - Job Application Tracker',
    description: 'Production-ready job application tracking system with real-time sync, gamified achievements system (26+ achievements with XP & leveling), advanced analytics, cross-device support, and comprehensive data management. Features universal import/export (CSV, Excel, JSON), PDF generation, admin dashboard, and email notifications. Built with React 19, Supabase, and modern tooling.',
    category: 'Full-Stack Web App',
    status: 'live',
    tags: ['React', 'TypeScript', 'Supabase', 'Zustand', 'Dexie.js', 'Recharts', 'jsPDF'],
    url: 'https://applytrak.com',
  },
  {
    id: 'codevault',
    title: 'SnippetBase - Code Knowledge Base',
    description: 'Complete knowledge base for developers with 153+ production-ready code snippets and 27+ cheat sheets. Features smart search, syntax highlighting with Prism.js, offline-first design with localStorage, neobrutalist UI, and covers PySpark, SQL, Python, dbt, Kafka, Airflow, Databricks, and Docker. Perfect for developers who want to stop Googling the same things.',
    category: 'Knowledge Base',
    status: 'live',
    tags: ['React', 'Vite', 'Prism.js', 'Tailwind CSS', 'Offline-First'],
    url: 'https://snippetbase.vercel.app/',
  },
  {
    id: 'dailyfit',
    title: 'DailyFit - AI-Powered Health Tracker',
    description: 'Conversational AI assistant for daily fitness and nutrition tracking. Features smart AI chatbot accepting text, voice, or images, photo recognition for food and workouts, voice logging, daily summaries with calories and macros, personalized onboarding, and Q&A engine. Built with React, TypeScript, Supabase, and OpenAI GPT-4.',
    category: 'Full-Stack Web App',
    status: 'live',
    tags: ['React', 'TypeScript', 'Supabase', 'OpenAI GPT-4', 'Radix UI', 'Vite'],
  },
  {
    id: 'securetools',
    title: 'SecureTools - Security Utilities',
    description: 'Professional security and privacy tools that run entirely in your browser. Features password & passphrase generator with entropy analysis, AES-256-GCM text encryption/decryption, security headers checker, two-factor authentication generator, random data generator, and password strength analyzer. Military-grade security with Web Crypto API, completely free with zero server round-trips.',
    category: 'Security Tools',
    status: 'live',
    tags: ['React', 'TypeScript', 'WebCrypto API', 'AES-256-GCM', 'Security'],
    url: 'https://www.securetools.dev/',
  },
  {
    id: 'textcraft',
    title: 'TextCraft - Text Processing Tools',
    description: 'Professional text processing tools that run entirely in your browser. Features word counter with reading time estimates, case converter (uppercase, lowercase, Title Case, camelCase, kebab-case, snake_case), line breaks remover, text diff checker for comparing versions, and Lorem Ipsum generator. Lightning fast with zero server round-trips and complete privacy.',
    category: 'Developer Tools',
    status: 'live',
    tags: ['React', 'TypeScript', 'Text Processing', 'Browser-Based'],
    url: 'https://www.textcraft.dev/',
  },
  {
    id: 'byte-toolbox',
    title: 'ByteToolbox - Professional Developer Tools',
    description: 'Free online developer tools collection for JSON formatting, Base64 encoding/decoding, hash generation (SHA-256, SHA-512, MD5, SHA-1), UUID creation, regex testing with real-time highlighting, and timestamp conversion. Features Monaco Editor (VS Code-powered), command palette, dark/light theme, PWA support, and full TypeScript coverage.',
    category: 'Developer Tools',
    status: 'live',
    tags: ['React', 'TypeScript', 'Monaco Editor', 'Vite', 'shadcn/ui'],
    url: 'https://www.bytetoolbox.com/',
  },
  {
    id: 'html-code-saver',
    title: 'Templio - HTML Template Saver',
    description: 'Production-ready web application for saving and previewing HTML templates in the cloud with automatic screenshot generation. Features save HTML templates with title and description, automatic screenshot generation using html2canvas, beautiful card view with screenshot previews, live preview and code view modes, favorites system, filtering and sorting, pagination (6 per page), secure authentication via Supabase, XSS protection with DOMPurify, and dark/light theme switcher.',
    category: 'Full-Stack Web App',
    status: 'live',
    tags: ['React', 'Vite', 'Supabase', 'html2canvas', 'Prism.js', 'DOMPurify'],
  },
  {
    id: 'astro-portfolio',
    title: 'AstroByKrishna - Astrophotography Portfolio',
    description: 'Modern, responsive portfolio website showcasing astrophotography work. Features beautiful card-based gallery with pagination (6 images per page), category filtering by orientation and technique, location display with full National Park names, integrated EmailJS contact form, and comprehensive SEO optimization. Built with React, TypeScript, and Tailwind CSS.',
    category: 'Portfolio',
    status: 'live',
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'React Router', 'EmailJS'],
    url: 'https://www.astrobykrishna.com',
  },
  {
    id: 'ks-portfolio',
    title: 'Krishna Sathvik - Portfolio',
    description: 'Modern, minimalist portfolio showcasing data engineering expertise and technical projects. Features neo-minimal dark UI with glass cards and subtle glow, hero section with resume summary and certification badges, comprehensive sections (Skills, Experience, Projects, Education, Publications, Certifications), accessible EmailJS contact form with spam protection, and complete SEO & PWA setup. Built with clean HTML, Tailwind CSS, and vanilla JavaScript for optimal performance.',
    category: 'Portfolio',
    status: 'live',
    tags: ['HTML', 'Tailwind CSS', 'Vanilla JavaScript', 'Webpack', 'EmailJS'],
    url: 'https://www.krishnasathvik.com/',
  },
];
