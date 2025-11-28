import { useEffect, useState } from 'react';
import { Moon, Sun, ArrowRight, Send, Github, Linkedin, Globe2, ArrowUpRight, Code2, FileCode, Cpu, Activity, FlaskConical, Clock, Code, Monitor } from 'lucide-react';
import { projects } from './data/projects';

function App() {
  const [theme, setTheme] = useState<'dark' | 'light' | 'system'>('system');

  const applyTheme = (resolvedTheme: 'dark' | 'light') => {
    const root = document.documentElement;
    if (resolvedTheme === 'dark') {
      root.classList.add('dark');
      document.body.classList.remove('bg-white', 'text-slate-900');
      document.body.classList.add('bg-slate-950', 'text-slate-50');
    } else {
      root.classList.remove('dark');
      document.body.classList.remove('bg-slate-950', 'text-slate-50');
      document.body.classList.add('bg-white', 'text-slate-900');
    }
  };

  const getResolvedTheme = (themeMode: 'dark' | 'light' | 'system'): 'dark' | 'light' => {
    if (themeMode === 'system') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return themeMode;
  };

  // Initialize theme on mount
  useEffect(() => {
    const stored = localStorage.getItem('theme') as 'dark' | 'light' | 'system' | null;
    const initial = stored || 'system';
    setTheme(initial);
    
    // Apply theme immediately on mount
    const resolved = getResolvedTheme(initial);
    applyTheme(resolved);
  }, []);

  // Update theme when theme state changes and listen to system changes
  useEffect(() => {
    const resolved = getResolvedTheme(theme);
    applyTheme(resolved);

    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = () => {
        const newResolved = mediaQuery.matches ? 'dark' : 'light';
        applyTheme(newResolved);
      };
      
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [theme]);

  const toggleTheme = () => {
    let newTheme: 'dark' | 'light' | 'system';
    if (theme === 'dark') {
      newTheme = 'light';
    } else if (theme === 'light') {
      newTheme = 'system';
    } else {
      newTheme = 'dark';
    }
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live':
        return 'text-emerald-600 ring-emerald-500/40 dark:text-emerald-300 dark:ring-emerald-500/40';
      case 'in-progress':
        return 'text-sky-600 ring-sky-500/40 dark:text-sky-300 dark:ring-sky-500/40';
      default:
        return 'text-slate-600 ring-slate-500/40 dark:text-slate-300 dark:ring-slate-500/40';
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-50 selection:bg-indigo-400/40 selection:text-slate-900 dark:selection:bg-indigo-400/40 dark:selection:text-slate-50">
      <div className="flex min-h-screen flex-col">
        {/* Page Shell */}
        <div className="relative flex-1 bg-gradient-to-b from-white via-white to-slate-50/95 dark:from-slate-950 dark:via-slate-950 dark:to-slate-950/95">
          {/* Glow / Grid Background */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute inset-x-0 top-[-10%] mx-auto h-[24rem] max-w-4xl rounded-full bg-indigo-500/20 blur-3xl"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.12),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.1),_transparent_55%)]"></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.16)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.12)_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>
          </div>

          {/* Header */}
          <header className="relative z-20 mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 pt-6 sm:px-6 lg:px-8">
            <a
              href="#top"
              aria-label="Krishna home"
              className="group inline-flex items-center gap-2"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-slate-100/70 shadow-sm shadow-slate-900/10 ring-1 ring-slate-200/50 backdrop-blur transition-all group-hover:border-indigo-500/40 group-hover:bg-indigo-500/10 dark:border-slate-800 dark:bg-slate-900/70 dark:shadow-black/40 dark:ring-black/50 dark:group-hover:border-indigo-500/40 dark:group-hover:bg-indigo-500/10">
                <Code className="h-4 w-4 text-slate-700 group-hover:text-indigo-600 transition-colors dark:text-slate-300 dark:group-hover:text-indigo-300" />
              </div>
              <span className="hidden text-sm font-medium tracking-tight text-slate-700 sm:inline-flex dark:text-slate-300">
                Krishna
              </span>
            </a>

            <nav
              className="flex items-center gap-1 rounded-full border border-slate-200/80 bg-white/70 px-1.5 py-1 text-xs text-slate-700 shadow-sm shadow-slate-900/10 backdrop-blur dark:border-slate-800/80 dark:bg-slate-950/70 dark:text-slate-300 dark:shadow-black/40"
              aria-label="Primary"
            >
              <a
                href="#work"
                className="rounded-full px-3 py-1.5 font-medium tracking-tight text-slate-700 hover:bg-slate-100/80 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800/80 dark:hover:text-slate-50"
              >
                Work
              </a>
              <a
                href="#tech-stack"
                className="rounded-full px-3 py-1.5 font-medium tracking-tight text-slate-700 hover:bg-slate-100/80 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800/80 dark:hover:text-slate-50"
              >
                Technologies
              </a>
              <a
                href="#about"
                className="rounded-full px-3 py-1.5 font-medium tracking-tight text-slate-700 hover:bg-slate-100/80 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800/80 dark:hover:text-slate-50"
              >
                About
              </a>
              <a
                href="#contact"
                className="rounded-full px-3 py-1.5 font-medium tracking-tight text-slate-700 hover:bg-slate-100/80 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800/80 dark:hover:text-slate-50"
              >
                Contact
              </a>

              <button
                onClick={toggleTheme}
                type="button"
                aria-label="Toggle theme"
                className="ml-1 inline-flex h-7 w-7 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 shadow-sm shadow-slate-900/10 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-300 dark:shadow-black/40 dark:hover:bg-slate-800"
              >
                {theme === 'light' ? (
                  <Sun className="h-3.5 w-3.5" />
                ) : theme === 'dark' ? (
                  <Moon className="h-3.5 w-3.5" />
                ) : (
                  <Monitor className="h-3.5 w-3.5" />
                )}
              </button>
            </nav>
          </header>

          {/* Hero */}
          <main
            id="top"
            className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col gap-16 px-4 pb-16 pt-14 sm:px-6 sm:pt-20 lg:flex-row lg:items-center lg:gap-20 lg:px-8 lg:pb-20"
          >
            {/* Left / Intro */}
            <section className="w-full space-y-10 lg:max-w-xl" aria-labelledby="hero-heading">
              <div className="space-y-6">
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                  Freelance Full-Stack Developer
                </p>

                <h1
                  id="hero-heading"
                  className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-slate-50"
                >
                  I build
                  <span className="text-indigo-600 dark:text-indigo-300"> interactive</span> experiences for the modern web.
                </h1>

                <p className="max-w-xl text-base font-medium text-slate-600 dark:text-slate-300">
                  I'm Krishna, a freelance full-stack developer passionate about crafting exceptional web experiences. 
                  I work with <span className="text-sky-600 dark:text-sky-300"> React</span>, 
                  <span className="text-emerald-600 dark:text-emerald-300"> TypeScript</span>, and modern tooling to build 
                  solutions that prioritize security, performance, and exceptional user experience. 
                  From interactive web applications to developer tools, I bring technical expertise and 
                  attention to detail to every project.
                </p>
              </div>

              {/* CTA Row */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-4 py-2.5 text-xs font-medium tracking-tight text-slate-950 shadow-sm shadow-slate-900/60 ring-1 ring-slate-200 hover:bg-slate-100"
                >
                  <span>View Selected Work</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>

                <a
                  href="mailto:krishnasathvikm@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-slate-50/40 px-3.5 py-2 text-xs font-medium tracking-tight text-slate-700 hover:border-slate-400 hover:bg-slate-100/70 dark:border-slate-700 dark:bg-slate-950/40 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:bg-slate-900/70"
                >
                  <Send className="h-3.5 w-3.5" />
                  <span>Available for projects & web design</span>
                </a>
      </div>

              {/* Meta */}
              <div className="grid gap-4 rounded-2xl border border-slate-200/80 bg-slate-50/50 p-4 text-xs text-slate-700 shadow-sm shadow-slate-900/10 backdrop-blur dark:border-slate-800/80 dark:bg-slate-950/50 dark:text-slate-300 dark:shadow-black/40 sm:grid-cols-3">
                <div className="space-y-1">
                  <p className="font-medium tracking-tight text-slate-500 dark:text-slate-400">Currently</p>
                  <p className="font-semibold tracking-tight text-slate-900 dark:text-slate-100">
                    Building secure web apps
                  </p>
                  <p className="text-[0.7rem] text-slate-500 dark:text-slate-400">Full-stack projects & tools</p>
                </div>
                <div className="space-y-1">
                  <p className="font-medium tracking-tight text-slate-500 dark:text-slate-400">Focus</p>
                  <p className="font-semibold tracking-tight text-slate-900 dark:text-slate-100">
                    Security, Performance, UX
                  </p>
                  <p className="text-[0.7rem] text-slate-500 dark:text-slate-400">Developer tools & experiences</p>
                </div>
                <div className="space-y-1">
                  <p className="font-medium tracking-tight text-slate-500 dark:text-slate-400">Stack</p>
                  <p className="font-semibold tracking-tight text-slate-900 dark:text-slate-100">
                    React, TypeScript, Supabase
                  </p>
                  <p className="text-[0.7rem] text-slate-500 dark:text-slate-400">Always learning & exploring</p>
                </div>
              </div>
            </section>

            {/* Right / Feature Panel */}
            <section
              aria-label="Featured visual"
              className="w-full lg:flex lg:flex-1 lg:justify-end"
            >
              <div className="relative mx-auto mt-2 w-full max-w-xl rounded-3xl border border-slate-200/80 bg-white/80 p-4 shadow-[0_24px_120px_rgba(0,0,0,0.15)] backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/80 dark:shadow-[0_24px_120px_rgba(0,0,0,0.85)] sm:p-5 lg:mt-0">
                {/* Status */}
                <div className="mb-3 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                    <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20 dark:bg-emerald-400 dark:ring-emerald-400/20"></span>
                    <span className="tracking-tight">Available for projects & web design</span>
                  </div>
                  <div className="flex items-center gap-1 rounded-full border border-slate-200 bg-white/80 px-2 py-1 text-[0.7rem] text-slate-500 dark:border-slate-800 dark:bg-slate-950/80 dark:text-slate-400">
                    <span className="inline-flex h-1 w-1 rounded-full bg-indigo-500 dark:bg-indigo-400"></span>
                    <span>Last updated {new Date().getFullYear()}</span>
                  </div>
                </div>

                {/* "Window" */}
                <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-white dark:border-slate-800 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
                  {/* Window Top */}
                  <div className="flex items-center justify-between border-b border-slate-200/90 bg-white/80 px-3 py-2 dark:border-slate-800/90 dark:bg-slate-950/80">
                    <div className="flex items-center gap-1.5">
                      <span className="inline-flex h-2.5 w-2.5 rounded-full bg-rose-500/90"></span>
                      <span className="inline-flex h-2.5 w-2.5 rounded-full bg-amber-400/90"></span>
                      <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400/90"></span>
                    </div>
                    <p className="text-[0.7rem] font-medium tracking-tight text-slate-500 dark:text-slate-400">
                      portfolio.tsx
                    </p>
                    <div className="flex items-center gap-1 text-[0.7rem] text-slate-400 dark:text-slate-500">
                      <div className="h-2.5 w-2.5 rounded-full border border-slate-300 dark:border-slate-600"></div>
                      <div className="h-2.5 w-2.5 rounded border border-slate-300 dark:border-slate-600"></div>
                    </div>
                  </div>

                  {/* Code & preview split */}
                  <div className="grid gap-0 border-t border-slate-200/60 dark:border-slate-900/60 sm:grid-cols-5">
                    {/* Code block */}
                    <div className="relative col-span-3 border-r border-slate-200/60 bg-white/90 p-3 dark:border-slate-900/60 dark:bg-slate-950/90 sm:p-4">
                      <div className="mb-2 flex items-center justify-between text-[0.7rem] text-slate-500 dark:text-slate-400">
                        <div className="flex items-center gap-1.5">
                          <Code2 className="h-3.5 w-3.5" />
                          <span className="font-medium tracking-tight">React · TypeScript</span>
                        </div>
                        <span className="rounded-full bg-slate-100/90 px-2 py-0.5 font-medium text-slate-700 dark:bg-slate-900/90 dark:text-slate-300">
                          src/portfolio.tsx
                        </span>
                      </div>

                      <pre className="overflow-x-auto rounded-xl bg-gradient-to-br from-slate-50/80 via-white to-white p-3 text-[0.68rem] leading-relaxed text-slate-700 ring-1 ring-slate-200/80 dark:from-slate-950/80 dark:via-slate-950/95 dark:to-slate-950 dark:text-slate-300 dark:ring-slate-900/80">
                        <code>{`// typed by krishnasathvik

const Hero = () => {
  return (
    <section className="min-h-[60vh] flex flex-col justify-center">
      <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
        I build expressive web experiences
      </h1>
      <p className="mt-3 text-base text-slate-300">
        Focused on React, TypeScript, security and performance.
      </p>
    </section>
  )
}`}</code>
                      </pre>
                    </div>

                    {/* Preview / stack */}
                    <div className="col-span-2 flex flex-col justify-between gap-3 bg-slate-50/70 p-3 dark:bg-slate-950/70 sm:p-4">
                      <div className="space-y-2">
                        <p className="text-[0.7rem] font-medium tracking-tight text-slate-500 dark:text-slate-400">
                          Tooling
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-slate-100/90 px-2.5 py-1 text-[0.7rem] font-medium tracking-tight text-sky-700 ring-1 ring-sky-500/40 dark:bg-slate-900/90 dark:text-sky-200">
                            <Code2 className="mr-1.5 h-3.5 w-3.5" />
                            React
                          </span>
                          <span className="inline-flex items-center rounded-full bg-slate-100/90 px-2.5 py-1 text-[0.7rem] font-medium tracking-tight text-indigo-700 ring-1 ring-indigo-500/40 dark:bg-slate-900/90 dark:text-indigo-200">
                            <FileCode className="mr-1.5 h-3.5 w-3.5" />
                            TypeScript
                          </span>
                          <span className="inline-flex items-center rounded-full bg-slate-100/90 px-2.5 py-1 text-[0.7rem] font-medium tracking-tight text-emerald-700 ring-1 ring-emerald-500/40 dark:bg-slate-900/90 dark:text-emerald-200">
                            <Cpu className="mr-1.5 h-3.5 w-3.5" />
                            Security
                          </span>
                          <span className="inline-flex items-center rounded-full bg-slate-100/90 px-2.5 py-1 text-[0.7rem] font-medium tracking-tight text-slate-700 ring-1 ring-slate-500/60 dark:bg-slate-900/90 dark:text-slate-200 dark:ring-slate-700/60">
                            <Cpu className="mr-1.5 h-3.5 w-3.5" />
                            Performance
                          </span>
                        </div>
                      </div>

                      <div className="mt-1 rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50/90 via-white to-white p-3 dark:border-slate-800 dark:from-slate-900/90 dark:via-slate-950 dark:to-slate-950">
                        <p className="text-[0.7rem] font-medium tracking-tight text-slate-500 dark:text-slate-400">
                          Craft
                        </p>
                        <p className="mt-1 text-xs font-medium text-slate-800 dark:text-slate-200">
                          Security and performance as design principles.
                        </p>
                        <p className="mt-1 text-[0.7rem] text-slate-600 dark:text-slate-400">
                          I obsess over the details: security practices, micro-interactions, and how
                          performance feels—not just how it measures.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Small footer */}
                <div className="mt-3 flex items-center justify-between text-[0.7rem] text-slate-600 dark:text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <Activity className="h-3 w-3" />
                    <span>Built for the web. Shipped with care.</span>
                  </div>
                  <div className="hidden items-center gap-1 sm:flex">
                    <span className="h-1 w-6 rounded-full bg-gradient-to-r from-emerald-500 to-sky-500 dark:from-emerald-400 dark:to-sky-400"></span>
                    <span>Optimized & accessible</span>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>

        {/* Content Sections */}
        <section
          id="work"
          className="relative border-t border-slate-200/80 bg-white dark:border-slate-800/80 dark:bg-slate-950/95"
          aria-label="Selected work"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.08),_transparent_55%)]"></div>

          <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl dark:text-slate-50">
                Selected work
              </h2>
              <p className="max-w-md text-base font-medium text-slate-600 dark:text-slate-300">
                A few projects that highlight my approach to full-stack development, security, and
                performance on the web.
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid gap-5 md:grid-cols-2">
              {projects.map((project) => (
                <article
                  key={project.id}
                  className="group flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm shadow-slate-900/10 transition hover:border-slate-300/80 hover:bg-slate-50 dark:border-slate-800/80 dark:bg-slate-950/60 dark:shadow-black/40 dark:hover:border-slate-600/80 dark:hover:bg-slate-900/80"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                      <span
                        className={`inline-flex items-center rounded-full bg-slate-100/90 px-2 py-0.5 font-medium tracking-tight ring-1 dark:bg-slate-900/90 ${getStatusColor(project.status)}`}
                      >
                        {project.status === 'live' ? 'Live' : project.status === 'in-progress' ? 'In progress' : 'Coming soon'}
                      </span>
                      <span>{project.category}</span>
                    </div>
                    <h3 className="text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-50">
                      {project.title}
                    </h3>
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
                      {project.description}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center justify-between gap-3 border-t border-slate-200/80 pt-3 text-[0.7rem] text-slate-500 dark:border-slate-800/80 dark:text-slate-400">
                    <div className="flex flex-wrap items-center gap-1.5">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-slate-100/90 px-2 py-0.5 font-medium tracking-tight text-slate-700 dark:bg-slate-900/90 dark:text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-medium tracking-tight text-slate-600 group-hover:text-slate-900 dark:text-slate-300 dark:group-hover:text-slate-50"
                      >
                        <span>Visit</span>
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </a>
                    ) : (
                      <button className="inline-flex items-center gap-1 text-xs font-medium tracking-tight text-slate-500 group-hover:text-slate-700 dark:text-slate-400 dark:group-hover:text-slate-100">
                        <span>Coming soon</span>
                        <Clock className="h-3.5 w-3.5" />
                      </button>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section
          id="tech-stack"
          className="relative border-t border-slate-200/80 bg-slate-50/95 dark:border-slate-800/80 dark:bg-slate-950/95"
          aria-label="Tech Stack"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.08),_transparent_55%)]"></div>

          <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl dark:text-slate-50">
                  Technologies I work with
                </h2>
                <p className="max-w-md text-base font-medium text-slate-600 dark:text-slate-300">
                  Modern tools and frameworks I use to build secure, performant, and scalable web applications.
                </p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Core Stack */}
              <div className="rounded-2xl border border-slate-200/80 bg-white/60 p-5 shadow-sm shadow-slate-900/10 dark:border-slate-800/80 dark:bg-slate-950/60 dark:shadow-black/40">
                <div className="mb-4 flex items-center gap-2">
                  <Code2 className="h-5 w-5 text-sky-600 dark:text-sky-300" />
                  <h3 className="text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-50">Core Stack</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-slate-100/90 px-3 py-1 text-xs font-medium tracking-tight text-sky-700 ring-1 ring-sky-500/40 dark:bg-slate-900/90 dark:text-sky-200">React 18/19</span>
                  <span className="rounded-full bg-slate-100/90 px-3 py-1 text-xs font-medium tracking-tight text-indigo-700 ring-1 ring-indigo-500/40 dark:bg-slate-900/90 dark:text-indigo-200">TypeScript</span>
                  <span className="rounded-full bg-slate-100/90 px-3 py-1 text-xs font-medium tracking-tight text-emerald-700 ring-1 ring-emerald-500/40 dark:bg-slate-900/90 dark:text-emerald-200">Tailwind CSS</span>
                  <span className="rounded-full bg-slate-100/90 px-3 py-1 text-xs font-medium tracking-tight text-purple-700 ring-1 ring-purple-500/40 dark:bg-slate-900/90 dark:text-purple-200">Vite</span>
                </div>
              </div>

              {/* Backend & Database */}
              <div className="rounded-2xl border border-slate-200/80 bg-white/60 p-5 shadow-sm shadow-slate-900/10 dark:border-slate-800/80 dark:bg-slate-950/60 dark:shadow-black/40">
                <div className="mb-4 flex items-center gap-2">
                  <Cpu className="h-5 w-5 text-emerald-600 dark:text-emerald-300" />
                  <h3 className="text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-50">Backend & Database</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-slate-100/90 px-3 py-1 text-xs font-medium tracking-tight text-emerald-700 ring-1 ring-emerald-500/40 dark:bg-slate-900/90 dark:text-emerald-200">Supabase</span>
                  <span className="rounded-full bg-slate-100/90 px-3 py-1 text-xs font-medium tracking-tight text-sky-700 ring-1 ring-sky-500/40 dark:bg-slate-900/90 dark:text-sky-200">Node.js</span>
                  <span className="rounded-full bg-slate-100/90 px-3 py-1 text-xs font-medium tracking-tight text-green-700 ring-1 ring-green-500/40 dark:bg-slate-900/90 dark:text-green-200">MongoDB</span>
                  <span className="rounded-full bg-slate-100/90 px-3 py-1 text-xs font-medium tracking-tight text-indigo-700 ring-1 ring-indigo-500/40 dark:bg-slate-900/90 dark:text-indigo-200">PostgreSQL</span>
                </div>
              </div>

              {/* UI & Components */}
              <div className="rounded-2xl border border-slate-200/80 bg-white/60 p-5 shadow-sm shadow-slate-900/10 dark:border-slate-800/80 dark:bg-slate-950/60 dark:shadow-black/40">
                <div className="mb-4 flex items-center gap-2">
                  <FileCode className="h-5 w-5 text-pink-600 dark:text-pink-300" />
                  <h3 className="text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-50">UI & Components</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-slate-100/90 px-3 py-1 text-xs font-medium tracking-tight text-pink-700 ring-1 ring-pink-500/40 dark:bg-slate-900/90 dark:text-pink-200">Radix UI</span>
                  <span className="rounded-full bg-slate-100/90 px-3 py-1 text-xs font-medium tracking-tight text-violet-700 ring-1 ring-violet-500/40 dark:bg-slate-900/90 dark:text-violet-200">shadcn/ui</span>
                  <span className="rounded-full bg-slate-100/90 px-3 py-1 text-xs font-medium tracking-tight text-cyan-700 ring-1 ring-cyan-500/40 dark:bg-slate-900/90 dark:text-cyan-200">React Router</span>
                </div>
              </div>

              {/* State & Real-time */}
              <div className="rounded-2xl border border-slate-200/80 bg-white/60 p-5 shadow-sm shadow-slate-900/10 dark:border-slate-800/80 dark:bg-slate-950/60 dark:shadow-black/40">
                <div className="mb-4 flex items-center gap-2">
                  <Activity className="h-5 w-5 text-indigo-600 dark:text-indigo-300" />
                  <h3 className="text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-50">State & Real-time</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-slate-100/90 px-3 py-1 text-xs font-medium tracking-tight text-rose-700 ring-1 ring-rose-500/40 dark:bg-slate-900/90 dark:text-rose-200">Zustand</span>
                  <span className="rounded-full bg-slate-100/90 px-3 py-1 text-xs font-medium tracking-tight text-cyan-700 ring-1 ring-cyan-500/40 dark:bg-slate-900/90 dark:text-cyan-200">Dexie.js</span>
                  <span className="rounded-full bg-slate-100/90 px-3 py-1 text-xs font-medium tracking-tight text-green-700 ring-1 ring-green-500/40 dark:bg-slate-900/90 dark:text-green-200">Socket.io</span>
                  <span className="rounded-full bg-slate-100/90 px-3 py-1 text-xs font-medium tracking-tight text-blue-700 ring-1 ring-blue-500/40 dark:bg-slate-900/90 dark:text-blue-200">localStorage</span>
                </div>
              </div>

              {/* AI & Integrations */}
              <div className="rounded-2xl border border-slate-200/80 bg-white/60 p-5 shadow-sm shadow-slate-900/10 dark:border-slate-800/80 dark:bg-slate-950/60 dark:shadow-black/40">
                <div className="mb-4 flex items-center gap-2">
                  <FlaskConical className="h-5 w-5 text-amber-600 dark:text-amber-300" />
                  <h3 className="text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-50">AI & Integrations</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-slate-100/90 px-3 py-1 text-xs font-medium tracking-tight text-pink-700 ring-1 ring-pink-500/40 dark:bg-slate-900/90 dark:text-pink-200">OpenAI GPT-4</span>
                  <span className="rounded-full bg-slate-100/90 px-3 py-1 text-xs font-medium tracking-tight text-violet-700 ring-1 ring-violet-500/40 dark:bg-slate-900/90 dark:text-violet-200">Anthropic Claude</span>
                  <span className="rounded-full bg-slate-100/90 px-3 py-1 text-xs font-medium tracking-tight text-blue-700 ring-1 ring-blue-500/40 dark:bg-slate-900/90 dark:text-blue-200">Google Maps API</span>
                  <span className="rounded-full bg-slate-100/90 px-3 py-1 text-xs font-medium tracking-tight text-emerald-700 ring-1 ring-emerald-500/40 dark:bg-slate-900/90 dark:text-emerald-200">EmailJS</span>
                </div>
              </div>

              {/* Developer Tools */}
              <div className="rounded-2xl border border-slate-200/80 bg-white/60 p-5 shadow-sm shadow-slate-900/10 dark:border-slate-800/80 dark:bg-slate-950/60 dark:shadow-black/40">
                <div className="mb-4 flex items-center gap-2">
                  <FileCode className="h-5 w-5 text-violet-600 dark:text-violet-300" />
                  <h3 className="text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-50">Developer Tools</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-slate-100/90 px-3 py-1 text-xs font-medium tracking-tight text-orange-700 ring-1 ring-orange-500/40 dark:bg-slate-900/90 dark:text-orange-200">Monaco Editor</span>
                  <span className="rounded-full bg-slate-100/90 px-3 py-1 text-xs font-medium tracking-tight text-cyan-700 ring-1 ring-cyan-500/40 dark:bg-slate-900/90 dark:text-cyan-200">Prism.js</span>
                  <span className="rounded-full bg-slate-100/90 px-3 py-1 text-xs font-medium tracking-tight text-blue-700 ring-1 ring-blue-500/40 dark:bg-slate-900/90 dark:text-blue-200">Recharts</span>
                  <span className="rounded-full bg-slate-100/90 px-3 py-1 text-xs font-medium tracking-tight text-yellow-700 ring-1 ring-yellow-500/40 dark:bg-slate-900/90 dark:text-yellow-200">jsPDF</span>
                  <span className="rounded-full bg-slate-100/90 px-3 py-1 text-xs font-medium tracking-tight text-pink-700 ring-1 ring-pink-500/40 dark:bg-slate-900/90 dark:text-pink-200">html2canvas</span>
                </div>
              </div>

              {/* Security & Performance */}
              <div className="rounded-2xl border border-slate-200/80 bg-white/60 p-5 shadow-sm shadow-slate-900/10 dark:border-slate-800/80 dark:bg-slate-950/60 dark:shadow-black/40">
                <div className="mb-4 flex items-center gap-2">
                  <Cpu className="h-5 w-5 text-red-600 dark:text-red-300" />
                  <h3 className="text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-50">Security & Performance</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-slate-100/90 px-3 py-1 text-xs font-medium tracking-tight text-red-700 ring-1 ring-red-500/40 dark:bg-slate-900/90 dark:text-red-200">WebCrypto API</span>
                  <span className="rounded-full bg-slate-100/90 px-3 py-1 text-xs font-medium tracking-tight text-purple-700 ring-1 ring-purple-500/40 dark:bg-slate-900/90 dark:text-purple-200">AES-256-GCM</span>
                  <span className="rounded-full bg-slate-100/90 px-3 py-1 text-xs font-medium tracking-tight text-amber-700 ring-1 ring-amber-500/40 dark:bg-slate-900/90 dark:text-amber-200">DOMPurify</span>
                  <span className="rounded-full bg-slate-100/90 px-3 py-1 text-xs font-medium tracking-tight text-teal-700 ring-1 ring-teal-500/40 dark:bg-slate-900/90 dark:text-teal-200">Vercel</span>
                  <span className="rounded-full bg-slate-100/90 px-3 py-1 text-xs font-medium tracking-tight text-slate-700 ring-1 ring-slate-500/60 dark:bg-slate-900/90 dark:text-slate-200 dark:ring-slate-700/60">Webpack</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="relative border-t border-slate-200/80 bg-white dark:border-slate-800/80 dark:bg-slate-950"
          aria-label="About"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(129,140,248,0.08),_transparent_55%)]"></div>

          <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-12 sm:px-6 lg:flex-row lg:gap-16 lg:px-8 lg:py-16">
            <div className="w-full space-y-3 lg:max-w-md">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl dark:text-slate-50">
                A bit about me
              </h2>
              <p className="text-base font-medium text-slate-600 dark:text-slate-300">
                I work closely with clients to understand their vision and requirements, from initial concept 
                to final deployment. My approach combines clean design with robust engineering—taking ideas 
                from sketch to prototype to production.
              </p>
              <p className="text-base font-medium text-slate-600 dark:text-slate-300">
                I focus on building solutions that solve real problems. Each project is an opportunity to create 
                something meaningful—whether it's a portfolio that showcases your work, a business website that 
                drives growth, or a custom web application that streamlines operations.
              </p>
            </div>

            <div className="w-full space-y-6 lg:flex-1">
              <div className="grid gap-4 rounded-2xl border border-slate-200/80 bg-white/60 p-4 shadow-sm shadow-slate-900/10 dark:border-slate-800/80 dark:bg-slate-950/60 dark:shadow-black/40 sm:grid-cols-2">
                <div className="space-y-2">
                  <p className="text-xs font-medium tracking-tight text-slate-500 dark:text-slate-400">
                    What I deliver
                  </p>
                  <ul className="space-y-1.5 text-sm font-medium text-slate-700 dark:text-slate-300">
                    <li className="flex items-center gap-2">
                      <span className="h-1 w-3 rounded-full bg-emerald-400"></span>
                      Custom websites & web applications
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1 w-3 rounded-full bg-sky-400"></span>
                      Secure, performant solutions
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1 w-3 rounded-full bg-indigo-400"></span>
                      Modern UI/UX with responsive design
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1 w-3 rounded-full bg-purple-400"></span>
                      Full-stack systems & integrations
                    </li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-medium tracking-tight text-slate-500 dark:text-slate-400">
                    Specializations
                  </p>
                  <ul className="space-y-1.5 text-sm font-medium text-slate-700 dark:text-slate-300">
                    <li>React & TypeScript development</li>
                    <li>Supabase backend integration</li>
                    <li>Security-first architecture</li>
                    <li>Developer tools & utilities</li>
                    <li>Performance optimization</li>
                  </ul>
                </div>
              </div>

              <div
                id="experiments"
                className="space-y-3 rounded-2xl border border-slate-200/80 bg-white/60 p-4 shadow-sm shadow-slate-900/10 dark:border-slate-800/80 dark:bg-slate-950/60 dark:shadow-black/40"
              >
                <div className="flex items-center justify-between gap-2">
                  <p className="text-xs font-medium tracking-tight text-slate-500 dark:text-slate-400">
                    Experiments
                  </p>
                  <span className="inline-flex items-center gap-1 rounded-full bg-slate-100/80 px-2 py-0.5 text-[0.7rem] font-medium tracking-tight text-slate-700 dark:bg-slate-900/80 dark:text-slate-300">
                    <FlaskConical className="h-3 w-3" />
                    <span>Small things often</span>
                  </span>
                </div>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Beyond client work, I experiment with new technologies and patterns. 
                  These explorations help me stay current with the latest tools and techniques, 
                  which I then bring to client projects. From security implementations to 
                  developer productivity tools, these experiments fuel continuous learning.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="relative border-t border-slate-200/80 bg-white dark:border-slate-800/80 dark:bg-slate-950"
          aria-label="Contact"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(52,211,153,0.12),_transparent_50%)]"></div>

          <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-12">
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl dark:text-slate-50">
                Let's build something together
              </h2>
              <p className="max-w-xl text-base font-medium text-slate-600 dark:text-slate-300">
                Ready to start your project? I'm here to help turn your ideas into reality. 
                Let's discuss your requirements, timeline, and vision. 
                Reach out and let's build something amazing together.
              </p>
            </div>

            <div className="space-y-3">
              <a
                href="mailto:krishnasathvikm@gmail.com"
                className="inline-flex items-center justify-between gap-4 rounded-2xl border border-emerald-500/60 bg-emerald-500/10 px-4 py-3 text-sm font-medium tracking-tight text-emerald-700 shadow-sm shadow-emerald-500/20 hover:bg-emerald-500/20 dark:border-emerald-400/60 dark:bg-emerald-400/10 dark:text-emerald-50 dark:shadow-emerald-500/30 dark:hover:bg-emerald-400/20"
              >
                <span className="text-sm font-semibold tracking-tight">
                  krishnasathvikm<span className="text-emerald-600 dark:text-emerald-200">@gmail.com</span>
                </span>
                <ArrowUpRight className="h-4 w-4 shrink-0" />
              </a>

               <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-slate-600 dark:text-slate-300">
                 <a
                   href="https://github.com/KrishnaSathvik"
                   target="_blank"
                   rel="noreferrer"
                   className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 hover:border-slate-300 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950/80 dark:hover:border-slate-600 dark:hover:bg-slate-900"
                 >
                   <Github className="h-3.5 w-3.5" />
                   <span>GitHub</span>
                 </a>
                 <a
                   href="https://www.linkedin.com/in/krishnasathvik/"
                   target="_blank"
                   rel="noreferrer"
                   className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 hover:border-slate-300 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950/80 dark:hover:border-slate-600 dark:hover:bg-slate-900"
                 >
                   <Linkedin className="h-3.5 w-3.5" />
                   <span>LinkedIn</span>
                 </a>
                 <a
                   href="https://www.krishnasathvik.com/"
                   target="_blank"
                   rel="noreferrer"
                   className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 hover:border-slate-300 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950/80 dark:hover:border-slate-600 dark:hover:bg-slate-900"
                 >
                   <Globe2 className="h-3.5 w-3.5" />
                   <span>Current site</span>
                 </a>
               </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-200/80 bg-slate-50/95 text-[0.7rem] text-slate-500 dark:border-slate-800/80 dark:bg-slate-950/95 dark:text-slate-500">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
            <p className="font-medium tracking-tight">
              © {new Date().getFullYear()} Krishna. Crafted for the web.
            </p>
            <p className="text-slate-500">
              Built with React, thoughtful design, and a focus on performance.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
