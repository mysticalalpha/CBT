"use client";

import { useEffect, useState } from "react";
import DecryptedText from "@/components/ui/decrypted-text";
import { Github, Linkedin, FileText, Mail } from "lucide-react";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-start overflow-hidden bg-transparent">
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12 py-32 lg:py-40">
        <div className="lg:max-w-[75%]">
          {/* Eyebrow */}
          <div
            className={`mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-xs font-mono text-pink-300 tracking-wider uppercase">
              <span className="w-8 h-px bg-pink-400/50" />
              Computer Science Undergraduate & Developer
            </span>
          </div>

          {/* Main Name & Title */}
          <div className="mb-10">
            <h1
              className={`text-left text-[clamp(2.3rem,6.5vw,6.5rem)] font-display leading-[0.9] tracking-tight text-white transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <span className="block font-sans font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-r from-white via-pink-100 to-white/95">
                <DecryptedText
                  text="PRATHAMESH WAKEKAR"
                  speed={60}
                  maxIterations={15}
                  sequential={true}
                  revealDirection="start"
                  animateOn="view"
                  className="font-sans"
                />
              </span>
              <span className="block mt-2 font-display italic font-normal text-white/85">
                Building scalable web applications and meaningful digital experiences.
              </span>
            </h1>
          </div>

          {/* Bio Description */}
          <p
            className={`mb-10 text-base md:text-lg text-white/60 font-sans max-w-2xl leading-relaxed transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Computer Science undergraduate passionate about React, Full-Stack Development, AI-powered products, and Product Management.
          </p>
        </div>
      </div>

      {/* Stats - Credentials banner & Social Icons */}
      <div
        className={`absolute bottom-12 left-0 right-0 px-6 lg:px-12 transition-all duration-700 delay-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="max-w-[1400px] mx-auto flex flex-wrap items-center gap-6 md:gap-10 bg-black/30 border border-white/5 backdrop-blur-md rounded-2xl p-5 md:p-6 w-fit">
          {[
            { value: "B.Tech CS", label: "Gurugram University 2026" },
            { value: "Developer", label: "Austere System Intern" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col gap-1">
              <span className="text-xl md:text-2xl font-display font-bold text-pink-200/90">{stat.value}</span>
              <span className="text-[10px] text-white/40 tracking-wider font-mono uppercase">
                {stat.label}
              </span>
            </div>
          ))}

          {/* Divider */}
          <div className="hidden sm:block w-px h-8 bg-white/10" />

          {/* Social Icons inside bottom banner */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/mysticalalpha"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white/60 hover:text-pink-300 hover:bg-white/5 rounded-xl transition-all duration-300 group"
              title="GitHub"
            >
              <Github className="w-5 h-5 transition-transform group-hover:scale-110" />
            </a>
            <a
              href="https://www.linkedin.com/in/prathamesh-wakekar-648472296/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white/60 hover:text-pink-300 hover:bg-white/5 rounded-xl transition-all duration-300 group"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5 transition-transform group-hover:scale-110" />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white/60 hover:text-pink-300 hover:bg-white/5 rounded-xl transition-all duration-300 group"
              title="Resume"
            >
              <FileText className="w-5 h-5 transition-transform group-hover:scale-110" />
            </a>
            <a
              href="mailto:prathameshwakekar8055@gmail.com"
              className="p-2 text-white/60 hover:text-pink-300 hover:bg-white/5 rounded-xl transition-all duration-300 group"
              title="Email"
            >
              <Mail className="w-5 h-5 transition-transform group-hover:scale-110" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
