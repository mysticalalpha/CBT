"use client";

import dynamic from "next/dynamic";
import { Navigation } from "@/components/landing/navigation";
import { HeroSection } from "@/components/landing/hero-section";
import SpotlightCard from "@/components/ui/spotlight-card";
import DecryptedText from "@/components/ui/decrypted-text";
import ShinyText from "@/components/ui/shiny-text";
import BorderGlow from "@/components/ui/border-glow";

const GridScan = dynamic(
  () => import("@/components/ui/grid-scan").then((mod) => mod.GridScan),
  { ssr: false }
);
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Calendar,
  MapPin,
  FileText,
  Award,
  Phone,
  Briefcase,
  GraduationCap,
  Code2,
} from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen text-white selection:bg-pink-500/20 selection:text-pink-200">
      {/* 1. FIXED BACKGROUND GRIDSCAN CANVAS & CANVAS PETALS */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <GridScan
          sensitivity={0.55}
          lineThickness={1}
          linesColor="#2F293A"
          gridScale={0.1}
          scanColor="#FF9FFC"
          scanOpacity={0.4}
          enablePost={true}
          bloomIntensity={0.6}
          chromaticAberration={0.002}
          noiseIntensity={0.01}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Slowly shifting Aurora gradient spots to custom tint and differentiate background tree */}
        <div className="absolute inset-0 z-[1] mix-blend-color-dodge opacity-25 pointer-events-none">
          <div className="absolute top-[-20%] left-[-15%] w-[70%] h-[70%] rounded-full bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-800 blur-[140px] animate-aurora-slow" />
          <div className="absolute bottom-[-15%] right-[-10%] w-[60%] h-[60%] rounded-full bg-gradient-to-tr from-cyan-400 via-rose-500 to-purple-600 blur-[120px] animate-aurora-reverse" />
        </div>
        {/* Soft, dark overlays for readability and glassmorphism highlight */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,182,193,0.02),transparent_60%)]" />
      </div>

      {/* Grid overlay for tech look (GridScan effect) */}
      <div className="fixed inset-0 z-[2] overflow-hidden pointer-events-none opacity-[0.08]">
        {[...Array(8)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute h-px bg-white"
            style={{ top: `${12.5 * (i + 1)}%`, left: 0, right: 0 }}
          />
        ))}
        {[...Array(12)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute w-px bg-white"
            style={{ left: `${8.33 * (i + 1)}%`, top: 0, bottom: 0 }}
          />
        ))}
        {/* Moving Laser Scanline */}
        <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-pink-400 to-transparent opacity-60 shadow-[0_0_12px_rgba(244,188,220,0.7)] animate-scanline" />
      </div>

      {/* 2. SCROLLABLE LAYERS */}
      <div className="relative z-10 w-full">
        <Navigation />
        <HeroSection />

        {/* About Section */}
        <section id="about" className="relative py-24 lg:py-32">
          <div className="max-w-[1200px] mx-auto px-6">
            {/* Glassmorphic container wrapper */}
            <div className="p-8 md:p-14 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl">
              <div className="grid lg:grid-cols-12 gap-12 items-start">
                <div className="lg:col-span-5">
                  <span className="inline-flex items-center gap-3 text-xs font-mono text-pink-300 tracking-wider uppercase mb-6">
                    <span className="w-6 h-px bg-pink-400" />
                    Objective & Background
                  </span>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-display tracking-tight leading-[0.95] mb-8">
                    About <br />
                    <span className="text-white/40">Prathamesh.</span>
                  </h2>
                  <div className="flex flex-col gap-4 font-mono text-xs text-white/60">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-pink-300" />
                      <span>Gurugram, Haryana, India</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-pink-300" />
                      <span>+91 9310190055</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-6 text-white/70 text-base md:text-lg leading-relaxed font-sans">
                  <p>
                    I am a motivated and detail-oriented <strong className="text-white">Computer Science undergraduate</strong> with hands-on experience in frontend development and software engineering simulations.
                  </p>
                  <p>
                    I specialize in building clean, responsive, and performance-optimized user interfaces. I am open to contributing to scalable software solutions through strong problem-solving, collaboration, and modern web technologies.
                  </p>

                  {/* Education details inside glass card */}
                  <div className="mt-8 p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-md">
                    <div className="flex items-start gap-4">
                      <GraduationCap className="w-6 h-6 text-pink-300 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-display text-white font-semibold">
                          Gurugram University
                        </h3>
                        <p className="text-sm font-mono text-white/50 mt-1">
                          Bachelor of Technology (B.Tech) in Computer Science
                        </p>
                        <div className="flex items-center gap-4 mt-3 text-xs font-mono text-white/70">
                          <span className="px-2.5 py-1 rounded bg-white/5">CGPA: 7.0</span>
                          <span>Expected Aug 2026</span>
                        </div>
                        <p className="text-xs text-pink-300/80 font-mono mt-2">
                          ✦ Dean's List (All Semesters)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="relative py-24">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="p-8 md:p-14 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl">
              <div className="mb-12">
                <span className="inline-flex items-center gap-3 text-xs font-mono text-pink-300 tracking-wider uppercase mb-6">
                  <span className="w-6 h-px bg-pink-400" />
                  Expertise
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display tracking-tight leading-[0.95]">
                  Technical <span className="text-white/40">Skills.</span>
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <BorderGlow
                  borderRadius={24}
                  glowColor="340 100% 80%"
                  backgroundColor="rgba(255,255,255,0.01)"
                  colors={["#FF69B4", "#DA70D6", "#8A2BE2"]}
                  fillOpacity={0.1}
                  glowIntensity={0.8}
                  className="h-full"
                >
                  <SpotlightCard className="border-none bg-transparent h-full flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-mono text-pink-300/80 mb-4 block">[ 01 / FRONTEND ]</span>
                      <h3 className="text-xl font-display mb-6 text-white font-bold">Development</h3>
                      <ul className="space-y-3 font-mono text-sm text-white/70">
                        <li className="flex items-center gap-2 hover:text-white transition-colors">
                          <span className="text-pink-400">→</span> React / Next.js
                        </li>
                        <li className="flex items-center gap-2 hover:text-white transition-colors">
                          <span className="text-pink-400">→</span> JavaScript (ES6+)
                        </li>
                        <li className="flex items-center gap-2 hover:text-white transition-colors">
                          <span className="text-pink-400">→</span> HTML5 & CSS3
                        </li>
                        <li className="flex items-center gap-2 hover:text-white transition-colors">
                          <span className="text-pink-400">→</span> UI Optimization
                        </li>
                        <li className="flex items-center gap-2 hover:text-white transition-colors">
                          <span className="text-pink-400">→</span> State Management
                        </li>
                      </ul>
                    </div>
                  </SpotlightCard>
                </BorderGlow>

                <BorderGlow
                  borderRadius={24}
                  glowColor="340 100% 80%"
                  backgroundColor="rgba(255,255,255,0.01)"
                  colors={["#FF69B4", "#DA70D6", "#8A2BE2"]}
                  fillOpacity={0.1}
                  glowIntensity={0.8}
                  className="h-full"
                >
                  <SpotlightCard className="border-none bg-transparent h-full flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-mono text-pink-300/80 mb-4 block">[ 02 / WORKFLOW ]</span>
                      <h3 className="text-xl font-display mb-6 text-white font-bold">Tools & Platforms</h3>
                      <ul className="space-y-3 font-mono text-sm text-white/70">
                        <li className="flex items-center gap-2 hover:text-white transition-colors">
                          <span className="text-pink-400">→</span> Git / GitHub
                        </li>
                        <li className="flex items-center gap-2 hover:text-white transition-colors">
                          <span className="text-pink-400">→</span> VS Code IDE
                        </li>
                        <li className="flex items-center gap-2 hover:text-white transition-colors">
                          <span className="text-pink-400">→</span> Windows OS
                        </li>
                        <li className="flex items-center gap-2 hover:text-white transition-colors">
                          <span className="text-pink-400">→</span> Automation Scripts
                        </li>
                      </ul>
                    </div>
                  </SpotlightCard>
                </BorderGlow>

                <BorderGlow
                  borderRadius={24}
                  glowColor="340 100% 80%"
                  backgroundColor="rgba(255,255,255,0.01)"
                  colors={["#FF69B4", "#DA70D6", "#8A2BE2"]}
                  fillOpacity={0.1}
                  glowIntensity={0.8}
                  className="h-full"
                >
                  <SpotlightCard className="border-none bg-transparent h-full flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-mono text-pink-300/80 mb-4 block">[ 03 / METHODOLOGY ]</span>
                      <h3 className="text-xl font-display mb-6 text-white font-bold">Other Skills</h3>
                      <ul className="space-y-3 font-mono text-sm text-white/70">
                        <li className="flex items-center gap-2 hover:text-white transition-colors">
                          <span className="text-pink-400">→</span> Debugging
                        </li>
                        <li className="flex items-center gap-2 hover:text-white transition-colors">
                          <span className="text-pink-400">→</span> Bug Fixing
                        </li>
                        <li className="flex items-center gap-2 hover:text-white transition-colors">
                          <span className="text-pink-400">→</span> Technical Docs
                        </li>
                        <li className="flex items-center gap-2 hover:text-white transition-colors">
                          <span className="text-pink-400">→</span> Team Collaboration
                        </li>
                      </ul>
                    </div>
                  </SpotlightCard>
                </BorderGlow>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="relative py-24">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="p-8 md:p-14 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl">
              <div className="mb-12">
                <span className="inline-flex items-center gap-3 text-xs font-mono text-pink-300 tracking-wider uppercase mb-6">
                  <span className="w-6 h-px bg-pink-400" />
                  Work Experience
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display tracking-tight leading-[0.95]">
                  Experience <span className="text-white/40">& simulations.</span>
                </h2>
              </div>

              <div className="space-y-8">
                {/* Real Internship */}
                <BorderGlow
                  borderRadius={24}
                  glowColor="340 100% 80%"
                  backgroundColor="rgba(255,255,255,0.01)"
                  colors={["#FF69B4", "#DA70D6", "#8A2BE2"]}
                  fillOpacity={0.1}
                  glowIntensity={0.8}
                >
                  <SpotlightCard className="border-none bg-transparent w-full">
                    <div className="flex flex-col md:flex-row justify-between gap-4 md:items-center border-b border-white/5 pb-6 mb-6">
                      <div>
                        <span className="text-xs font-mono text-pink-300 uppercase tracking-wider block mb-1">
                          Austere System Limited
                        </span>
                        <h3 className="text-2xl font-display text-white font-bold">
                          Software Developer Intern
                        </h3>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-mono text-white/70 px-4 py-2 rounded-full border border-white/10 bg-white/5 w-fit">
                        <Calendar className="w-4.5 h-4.5 text-pink-300" />
                        <span>Sep 2025 - Dec 2025</span>
                      </div>
                    </div>
                    <ul className="space-y-3 text-white/70 text-sm md:text-base font-sans list-disc list-inside">
                      <li>Developed responsive and reusable UI components using React.</li>
                      <li>Implemented backend logic using Node.js and handled REST API integrations.</li>
                      <li>Improved application state management and optimized UI performance.</li>
                      <li>Identified and resolved layout issues, UI bugs, and performance bottlenecks.</li>
                      <li>Assisted in backend debugging and feature enhancement.</li>
                    </ul>
                  </SpotlightCard>
                </BorderGlow>

                {/* Forage Simulations */}
                <div className="pt-6 border-t border-white/10">
                  <h4 className="text-xs font-mono text-white/40 uppercase tracking-wider mb-6">
                    [ Job Simulations (Forage) ]
                  </h4>
                  <div className="grid md:grid-cols-3 gap-6">
                    <SpotlightCard className="p-6 backdrop-blur-md bg-white/[0.01] flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-mono text-pink-300 uppercase tracking-widest block mb-2">Electronic Arts</span>
                        <h5 className="text-lg font-display text-white font-semibold mb-3">Software Engineering</h5>
                        <p className="text-xs text-white/60 leading-relaxed font-sans">
                          Proposed EA Sports College Football features. Authored stakeholder-ready proposal, designed class diagrams, and patched C++ codebase structure.
                        </p>
                      </div>
                      <span className="text-[10px] font-mono text-white/30 block mt-4">Dec 2024</span>
                    </SpotlightCard>

                    <SpotlightCard className="p-6 backdrop-blur-md bg-white/[0.01] flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-mono text-pink-300 uppercase tracking-widest block mb-2">JPMorgan Chase</span>
                        <h5 className="text-lg font-display text-white font-semibold mb-3">Quantitative Research</h5>
                        <p className="text-xs text-white/60 leading-relaxed font-sans">
                          Analyzed loan portfolios to estimate customer probability of default. Applied dynamic programming to convert numerical credit scores.
                        </p>
                      </div>
                      <span className="text-[10px] font-mono text-white/30 block mt-4">Dec 2024</span>
                    </SpotlightCard>

                    <SpotlightCard className="p-6 backdrop-blur-md bg-white/[0.01] flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-mono text-pink-300 uppercase tracking-widest block mb-2">Hewlett Packard</span>
                        <h5 className="text-lg font-display text-white font-semibold mb-3">Software Simulation</h5>
                        <p className="text-xs text-white/60 leading-relaxed font-sans">
                          Wrote proposal for RESTful web service to manage employee records, building a Java Spring Boot backend handling JSON payloads.
                        </p>
                      </div>
                      <span className="text-[10px] font-mono text-white/30 block mt-4">Dec 2024</span>
                    </SpotlightCard>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="relative py-24">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="p-8 md:p-14 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl">
              <div className="mb-12">
                <span className="inline-flex items-center gap-3 text-xs font-mono text-pink-300 tracking-wider uppercase mb-6">
                  <span className="w-6 h-px bg-pink-400" />
                  Code Repositories
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display tracking-tight leading-[0.95]">
                  Featured <span className="text-white/40">Projects.</span>
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Project 1 */}
                <BorderGlow
                  borderRadius={24}
                  glowColor="340 100% 80%"
                  backgroundColor="rgba(255,255,255,0.01)"
                  colors={["#FF69B4", "#DA70D6", "#8A2BE2"]}
                  fillOpacity={0.1}
                  glowIntensity={0.8}
                  className="h-full"
                >
                  <SpotlightCard className="group border-none bg-transparent flex flex-col justify-between h-[400px]">
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <span className="text-xs font-mono text-white/55">[ React / Node.js ]</span>
                        <a
                          href="https://college-hub-main.prathameshwakekar8055.workers.dev/login"
                          target="_blank"
                          rel="noreferrer"
                          className="p-2.5 border border-white/10 hover:border-pink-300/30 rounded-full bg-white/5 hover:bg-pink-300/10 text-white/70 hover:text-white transition-all"
                        >
                          <ArrowUpRight className="w-5 h-5" />
                        </a>
                      </div>
                      <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-pink-200 transition-colors">
                        College Connect
                      </h3>
                      <p className="text-sm text-white/60 leading-relaxed font-sans">
                        College Connect is a unified campus collaboration platform that combines networking, project collaboration, academic resources, and AI-powered career guidance. It helps students, teachers, and recruiters interact efficiently while supporting skill development and career growth.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 font-mono text-[10px] text-white/80">
                      <span className="px-2.5 py-1 rounded-full border border-white/10 bg-white/5">React</span>
                      <span className="px-2.5 py-1 rounded-full border border-white/10 bg-white/5">Node.js</span>
                      <span className="px-2.5 py-1 rounded-full border border-white/10 bg-white/5">Prisma</span>
                      <span className="px-2.5 py-1 rounded-full border border-white/10 bg-white/5">Cloudflare</span>
                    </div>
                  </SpotlightCard>
                </BorderGlow>

                {/* Project 2 */}
                <BorderGlow
                  borderRadius={24}
                  glowColor="340 100% 80%"
                  backgroundColor="rgba(255,255,255,0.01)"
                  colors={["#FF69B4", "#DA70D6", "#8A2BE2"]}
                  fillOpacity={0.1}
                  glowIntensity={0.8}
                  className="h-full"
                >
                  <SpotlightCard className="group border-none bg-transparent flex flex-col justify-between h-[400px]">
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <span className="text-xs font-mono text-white/55">[ Weather / React ]</span>
                        <a
                          href="https://github.com/mysticalalpha"
                          target="_blank"
                          rel="noreferrer"
                          className="p-2.5 border border-white/10 hover:border-pink-300/30 rounded-full bg-white/5 hover:bg-pink-300/10 text-white/70 hover:text-white transition-all"
                        >
                          <ArrowUpRight className="w-5 h-5" />
                        </a>
                      </div>
                      <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-pink-200 transition-colors">
                        Weather Forecasting App
                      </h3>
                      <p className="text-sm text-white/60 leading-relaxed font-sans">
                        Developed a responsive user interface for real-time weather updates, providing improved multi-device compatibility, performance benchmarks, and live API data synchronization.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 font-mono text-[10px] text-white/80">
                      <span className="px-2.5 py-1 rounded-full border border-white/10 bg-white/5">React</span>
                      <span className="px-2.5 py-1 rounded-full border border-white/10 bg-white/5">CSS3</span>
                      <span className="px-2.5 py-1 rounded-full border border-white/10 bg-white/5">Weather API</span>
                    </div>
                  </SpotlightCard>
                </BorderGlow>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="relative py-24">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="p-8 md:p-14 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl">
              <div className="mb-12">
                <span className="inline-flex items-center gap-3 text-xs font-mono text-pink-300 tracking-wider uppercase mb-6">
                  <span className="w-6 h-px bg-pink-400" />
                  Credentials
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display tracking-tight leading-[0.95]">
                  Certifications <span className="text-white/40">& bootcamps.</span>
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "100 Hours Web Development Bootcamp: Build 23 Projects", issuer: "Udemy" },
                  { title: "The Ultimate React Course 2025: React, Redux & More", issuer: "Udemy" },
                  { title: "The Complete Front-End Web Development Course", issuer: "Udemy" },
                  { title: "Android App Development (34 Hours)", issuer: "MobDevOps" },
                  { title: "HTML, CSS & JavaScript for Web Developers", issuer: "Coursera" },
                ].map((cert, i) => (
                  <div
                    key={i}
                    className="p-5 flex items-start gap-4 rounded-2xl border border-white/5 bg-white/[0.01] backdrop-blur-md hover:border-pink-300/10 transition-colors"
                  >
                    <Award className="w-5 h-5 text-pink-300 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white leading-snug">{cert.title}</h4>
                      <span className="text-xs font-mono text-white/40 mt-1 block">{cert.issuer}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative py-24">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="p-8 md:p-14 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl">
              <div className="grid lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-6">
                  <span className="inline-flex items-center gap-3 text-xs font-mono text-pink-300 tracking-wider uppercase mb-6">
                    <span className="w-6 h-px bg-pink-400" />
                    Say Hello
                  </span>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-display tracking-tight leading-[0.95] mb-8">
                    Let's connect <br />
                    <span className="text-white/40">& collaborate.</span>
                  </h2>
                  <p className="text-white/60 text-base md:text-lg leading-relaxed mb-8 max-w-md font-sans">
                    I am looking for internship opportunities or software engineer roles starting in Gurugram or remote. Let's build something exceptional together!
                  </p>

                  <a
                    href="mailto:prathameshwakekar8055@gmail.com"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white hover:bg-white/90 text-black font-mono text-sm transition-all"
                  >
                    <Mail className="w-4 h-4" />
                    <ShinyText
                      text="prathameshwakekar8055@gmail.com"
                      speed={4}
                      className="text-black font-semibold"
                    />
                  </a>
                </div>

                <div className="lg:col-span-6 grid grid-cols-2 gap-4">
                  {[
                    {
                      name: "GitHub",
                      handle: "@mysticalalpha",
                      icon: <Github className="w-5 h-5" />,
                      href: "https://github.com/mysticalalpha",
                    },
                    {
                      name: "LinkedIn",
                      handle: "prathamesh-wakekar-648472296",
                      icon: <Linkedin className="w-5 h-5" />,
                      href: "https://www.linkedin.com/in/prathamesh-wakekar-648472296/",
                    },
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="p-6 border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] backdrop-blur-md rounded-2xl hover:border-pink-300/20 transition-all flex flex-col justify-between h-32 font-mono group"
                    >
                      <div className="text-white/60 group-hover:text-pink-300 transition-colors">
                        {social.icon}
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-white block">{social.name}</span>
                        <span className="text-xs text-white/40 block mt-1">{social.handle}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Minimal Footer inside glass card */}
        <footer className="py-12 px-6 max-w-[1200px] mx-auto mb-12">
          <div className="p-6 rounded-2xl border border-white/5 bg-black/40 backdrop-blur-md flex flex-col md:flex-row justify-between items-center gap-6 font-mono text-xs text-white/45">
            <div className="flex items-center gap-2">
              <span>© {new Date().getFullYear()} Prathamesh Wakekar.</span>
              <span>All rights reserved.</span>
            </div>
            <div className="flex gap-6">
              <span>Gurugram, India</span>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
