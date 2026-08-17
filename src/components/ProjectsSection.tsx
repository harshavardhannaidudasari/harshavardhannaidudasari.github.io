import React from 'react';
import { motion } from 'framer-motion';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

interface Project {
  number: string;
  title: string;
  category: string;
  description: string;
  githubUrl: string;
  liveUrls?: { label: string; url: string }[];
  tech: string[];
  metrics: { label: string; value: string }[];
}

const projects: Project[] = [
  {
    number: '01',
    title: 'Hybrid Test Automation Suite',
    category: 'SDET TOOLKIT / 50+ REPOS',
    description:
      'A library of 50+ modular hybrid test automation frameworks spanning API validation, database checks, performance testing, security scanning, self-healing UI locators, and CI/CD pipeline orchestration — each reimplemented natively across seven language stacks.',
    githubUrl: 'https://github.com/harshavardhannaidudasari?tab=repositories&q=hybrid-',
    tech: [
      'Java', 'Python', 'TypeScript', 'JavaScript', 'C#', '.NET', 'Ruby',
      'Selenium', 'REST Assured', 'JUnit',
    ],
    metrics: [
      { label: 'LANGUAGES', value: '7 Stacks' },
      { label: 'COVERAGE', value: 'API · DB · Perf · Security' },
      { label: 'CI/CD', value: 'Self-Healing Pipeline Runner' },
    ],
  },
  {
    number: '02',
    title: 'OP AI — Orbit Pro',
    category: 'AI OPS / QA COMMAND CENTER',
    description:
      'A blueprint and interactive demo for an AI-driven QA command center that walks a scripted Plan → Inspect → Generate → Review → Execute → Verify → Report reasoning loop, with live agent activity, evidence cards, and a final test report.',
    githubUrl: 'https://github.com/harshavardhannaidudasari/orbit-pro',
    liveUrls: [
      { label: 'VIEW BLUEPRINT', url: 'https://harshavardhannaidudasari.github.io/orbit-pro/' },
      { label: 'TRY LIVE DEMO', url: 'https://harshavardhannaidudasari.github.io/orbit-pro-app/' },
    ],
    tech: ['React', 'TypeScript', 'Vite', 'GitHub Pages'],
    metrics: [
      { label: 'STAGES', value: '7-Step Reasoning Loop' },
      { label: 'HOSTED', value: 'GitHub Pages' },
    ],
  },
  {
    number: '03',
    title: 'Trove Marketplace',
    category: 'FULL-STACK E-COMMERCE',
    description:
      'A full-stack marketplace platform with a FastAPI + PostgreSQL backend and a Vite/React frontend, covering the golden path end to end — browse, cart, checkout, and order history — containerized with Docker Compose.',
    githubUrl: 'https://github.com/harshavardhannaidudasari/trove-marketplace',
    tech: ['FastAPI', 'PostgreSQL', 'React', 'Vite', 'Docker Compose', 'Alembic'],
    metrics: [
      { label: 'BACKEND', value: 'FastAPI + Postgres' },
      { label: 'FRONTEND', value: 'Vite + React' },
      { label: 'FLOW', value: 'Cart → Checkout → Orders' },
    ],
  },
  {
    number: '04',
    title: 'Mobile Automation Framework',
    category: 'MOBILE TEST AUTOMATION',
    description:
      'A Java-based mobile test automation framework for native and hybrid apps, built to plug into the same CI/CD and reporting patterns used across the desktop and API automation suites.',
    githubUrl: 'https://github.com/harshavardhannaidudasari/Mobile-Automation-',
    tech: ['Java', 'Appium', 'TestNG', 'Mobile QA'],
    metrics: [
      { label: 'LANGUAGE', value: 'Java' },
      { label: 'TARGET', value: 'Native + Hybrid Apps' },
      { label: 'INTEGRATION', value: 'CI/CD Ready' },
    ],
  },
  {
    number: '05',
    title: 'AI Chatbot',
    category: 'AI / NLP EXPERIMENT',
    description:
      'A basic conversational AI chatbot built in Python, exploring prompt design and NLP-driven response handling outside the day-to-day QA toolchain.',
    githubUrl: 'https://github.com/harshavardhannaidudasari/Ai-with-python-basic-chatbot',
    tech: ['Python', 'NLP'],
    metrics: [
      { label: 'LANGUAGE', value: 'Python' },
      { label: 'TYPE', value: 'Rule-Based Chatbot' },
      { label: 'FOCUS', value: 'Prompt Design' },
    ],
  },
];

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="work"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-20 pb-32 px-6 sm:px-12 lg:px-20"
    >
      {/* Studio Ambient Glows */}
      <div className="absolute top-1/4 left-1/3 w-[36rem] h-[36rem] bg-[#D4AF37]/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-[#8C6D4F]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-5"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            02 / FEATURED WORK
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              SELECTED WORKS.
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              ENGINEERED VALUE.
            </span>
          </h2>

          <p
            className="text-xs sm:text-sm font-light text-[#A8988B] max-w-sm mt-4 md:mt-0 leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Scroll down to unfold the system architecture cards. Each platform was built to solve complex operational challenges.
          </p>
        </motion.div>

        {/* React Bits Stacking Deck */}
        {/* React Bits Stacking Deck */}
<ScrollStack
  itemDistance={20}
  itemScale={0.035}
  itemStackDistance={28}
  stackPosition="15%"
  scaleEndPosition="6%"
  baseScale={0.88}
  useWindowScroll={true}
>
          {projects.map((project) => (
            <ScrollStackItem key={project.title}>
              <div className="relative w-full rounded-2xl border border-[#8C6D4F]/50 bg-[#0E0C0A] p-8 sm:p-12 shadow-[0_25px_70px_rgba(0,0,0,0.98)] group overflow-hidden transition-colors duration-500 hover:border-[#D4AF37]">
                
                {/* Top Gold Border Light Flare */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/80 to-transparent" />

                {/* Corner Minimal L-Brackets */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />

                {/* Big Background Watermark Number */}
                <span
                  className="absolute -bottom-6 -right-3 text-8xl sm:text-9xl font-bold text-[#EAD8C7]/5 select-none pointer-events-none leading-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {project.number}
                </span>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                  
                  {/* Left Column (7 Cols) */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="text-xs font-mono font-bold text-[#D4AF37]">
                          {project.number} //
                        </span>
                        <span className="text-[10.5px] font-mono tracking-[0.25em] uppercase text-[#A8988B]">
                          {project.category}
                        </span>
                      </div>

                      <h3
                        className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-4 group-hover:text-[#F7E7C4] transition-colors uppercase leading-[0.9]"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                      >
                        {project.title}
                      </h3>

                      <p
                        className="text-xs sm:text-sm md:text-[14px] font-light text-[#BDB0A4] leading-[1.85] tracking-wide mb-8 max-w-2xl"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 pt-6 border-t border-[#8C6D4F]/25">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 text-[10px] font-medium tracking-[0.16em] uppercase rounded-sm border border-[#8C6D4F]/40 bg-[#16120E] text-[#E8D7C5] group-hover:border-[#D4AF37]/50 transition-all duration-300"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column (5 Cols) */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6 lg:pl-6 lg:border-l lg:border-[#8C6D4F]/25">
                    <div className="space-y-3">
                      <span className="text-[9.5px] font-mono tracking-[0.25em] uppercase text-[#8C6D4F] block mb-2">
                        // ARCHITECTURE METRICS
                      </span>
                      {project.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="p-3.5 rounded-sm border border-[#8C6D4F]/25 bg-[#050403] flex items-center justify-between"
                        >
                          <span className="text-[10px] font-mono text-[#A8988B]">
                            {m.label}
                          </span>
                          <span className="text-[11px] font-mono font-medium text-[#F7E7C4]">
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col gap-3">
                      {project.liveUrls?.map((live) => (
                        <a
                          key={live.label}
                          href={live.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center space-x-3 px-6 py-3.5 border border-[#D4AF37] bg-[#D4AF37] hover:bg-transparent text-black hover:text-[#D4AF37] text-[11px] font-semibold tracking-[0.24em] uppercase transition-all duration-300 shadow-[0_0_25px_rgba(212,175,55,0.25)]"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          <span>{live.label}</span>
                          <span className="text-xs">↗</span>
                        </a>
                      ))}

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center space-x-3 px-6 py-3.5 border border-[#8C6D4F] bg-[#16120E] hover:border-[#D4AF37] hover:bg-[#D4AF37] text-[#EAD8C7] hover:text-black text-[11px] font-medium tracking-[0.24em] uppercase transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.1)]"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        <span>VIEW ON GITHUB</span>
                        <span className="text-xs">↗</span>
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>

      </div>
    </section>
  );
};

export default ProjectsSection;