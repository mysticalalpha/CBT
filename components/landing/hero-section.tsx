"use client";

import { useEffect, useState } from "react";
import DecryptedText from "@/components/ui/decrypted-text";

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
              <span className="block mt-2 font-display italic font-normal text-white/85 lowercase">
                building responsive interfaces & simulations.
              </span>
            </h1>
          </div>
        </div>
      </div>

      {/* Stats - Credentials banner (keeping only B.Tech CS & Developer Intern) */}
      <div
        className={`absolute bottom-12 left-0 right-0 px-6 lg:px-12 transition-all duration-700 delay-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="max-w-[1400px] mx-auto flex flex-wrap items-center gap-10 lg:gap-20 bg-black/30 border border-white/5 backdrop-blur-md rounded-2xl p-6 w-fit">
          {[
            { value: "B.Tech CS", label: "Gurugram University 2026" },
            { value: "Developer", label: "Austere System Intern" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col gap-1">
              <span className="text-2xl font-display font-bold text-pink-200/90">{stat.value}</span>
              <span className="text-[10px] text-white/40 tracking-wider font-mono uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
