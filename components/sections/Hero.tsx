"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const roles = [
  "Software Architect",
  "Distributed Systems Engineer",
  "Backend Craftsman",
  "Performance Obsessive",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setRoleIndex((i) => (i + 1) % roles.length);
        setVisible(true);
      }, 300);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center pt-16 px-6">
      <div className="max-w-5xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center min-h-[calc(100vh-4rem)]">
          {/* Left: Text */}
          <div className="flex flex-col justify-center py-16 md:py-0">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-6">
              <span className="inline-block w-8 h-px bg-accent" />
              <span className="text-sm font-mono text-slate tracking-widest uppercase">
                9+ years in production
              </span>
            </div>

            {/* Name */}
            <h1 className="text-display-xl font-bold text-ink mb-4 text-balance">
              Ankush
              <br />
              Srivastava
            </h1>

            {/* Rotating role */}
            <div className="h-9 mb-6 overflow-hidden">
              <p
                className={`text-display-md font-medium text-accent transition-all duration-300 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
                }`}
                style={{ transform: visible ? "translateY(0)" : "translateY(-8px)" }}
              >
                {roles[roleIndex]}
              </p>
            </div>

            {/* Tagline */}
            <p className="text-slate text-lg leading-relaxed mb-10 max-w-md">
              I architect systems that handle millions of events per second — WebSocket platforms,
              payment gateways, and real-time data pipelines — and I care deeply about what
              happens under load.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#work"
                className="inline-flex items-center gap-2 bg-ink text-paper text-sm font-medium px-6 py-3 rounded-full hover:bg-accent transition-colors duration-200"
              >
                See my work
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a
                href="mailto:ankush1593@gmail.com"
                className="inline-flex items-center gap-2 text-sm font-medium text-ink border border-subtle px-6 py-3 rounded-full hover:border-accent hover:text-accent transition-colors duration-200"
              >
                Get in touch
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-5 mt-10 pt-10 border-t border-mist">
              <a
                href="https://github.com/ankush1593"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate hover:text-ink transition-colors text-sm font-mono"
              >
                GitHub →
              </a>
              <a
                href="https://www.linkedin.com/in/ankush-srivastava"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate hover:text-ink transition-colors text-sm font-mono"
              >
                LinkedIn →
              </a>
            </div>
          </div>

          {/* Right: Avatar illustration */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border border-mist scale-110" />
              <div className="absolute inset-0 rounded-full border border-accent/10 scale-125" />

              <AvatarIllustration />

              {/* Floating stat cards */}
              <div className="absolute -left-10 top-1/4 bg-white rounded-xl px-4 py-3 shadow-sm border border-mist">
                <p className="font-mono text-xs text-slate">peak throughput</p>
                <p className="font-bold text-ink text-lg mt-0.5">1000 TPS</p>
              </div>

              <div className="absolute -right-8 bottom-1/4 bg-white rounded-xl px-4 py-3 shadow-sm border border-mist">
                <p className="font-mono text-xs text-slate">memory cut</p>
                <p className="font-bold text-accent text-lg mt-0.5">−80%</p>
              </div>

              <div className="absolute -right-4 top-8 bg-ink text-paper rounded-xl px-4 py-3 shadow-sm">
                <p className="font-mono text-xs text-slate">startup time</p>
                <p className="font-bold text-green-400 text-lg mt-0.5">20min → 1min</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden md:flex justify-center pb-8 -mt-8">
          <div className="flex flex-col items-center gap-2 text-slate">
            <span className="text-xs font-mono tracking-widest uppercase">scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-slate to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

function AvatarIllustration() {
  return (
    <svg
      width="280"
      height="320"
      viewBox="0 0 280 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-sm"
    >
      {/* Background circle */}
      <circle cx="140" cy="160" r="130" fill="#EFF6FF" />

      {/* Body / shirt */}
      <ellipse cx="140" cy="260" rx="70" ry="55" fill="#1E40AF" />
      <ellipse cx="140" cy="280" rx="80" ry="60" fill="#1D4ED8" />

      {/* Neck */}
      <rect x="124" y="210" width="32" height="30" rx="4" fill="#FBBF8A" />

      {/* Head */}
      <ellipse cx="140" cy="185" rx="52" ry="58" fill="#FBBF8A" />

      {/* Hair */}
      <ellipse cx="140" cy="135" rx="52" ry="26" fill="#1C1917" />
      <ellipse cx="100" cy="152" rx="14" ry="20" fill="#1C1917" />
      <ellipse cx="180" cy="152" rx="14" ry="20" fill="#1C1917" />

      {/* Eyes */}
      <ellipse cx="122" cy="182" rx="9" ry="10" fill="white" />
      <ellipse cx="158" cy="182" rx="9" ry="10" fill="white" />
      <circle cx="124" cy="183" r="5" fill="#1C1917" />
      <circle cx="160" cy="183" r="5" fill="#1C1917" />
      <circle cx="126" cy="181" r="1.5" fill="white" />
      <circle cx="162" cy="181" r="1.5" fill="white" />

      {/* Eyebrows */}
      <path d="M113 170 Q122 165 131 170" stroke="#1C1917" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M149 170 Q158 165 167 170" stroke="#1C1917" strokeWidth="2.5" strokeLinecap="round" fill="none" />

      {/* Nose */}
      <path d="M140 190 Q136 202 140 205 Q144 202 140 190" stroke="#E8A070" strokeWidth="1.5" fill="none" strokeLinecap="round" />

      {/* Smile */}
      <path d="M128 215 Q140 226 152 215" stroke="#D97706" strokeWidth="2.5" strokeLinecap="round" fill="none" />

      {/* Glasses */}
      <rect x="109" y="175" width="26" height="18" rx="5" stroke="#374151" strokeWidth="2" fill="none" />
      <rect x="145" y="175" width="26" height="18" rx="5" stroke="#374151" strokeWidth="2" fill="none" />
      <path d="M135 184 H145" stroke="#374151" strokeWidth="2" />
      <path d="M109 184 H105" stroke="#374151" strokeWidth="2" />
      <path d="M171 184 H175" stroke="#374151" strokeWidth="2" />

      {/* Laptop */}
      <rect x="60" y="285" width="160" height="8" rx="4" fill="#374151" />
      <rect x="72" y="248" width="136" height="38" rx="4" fill="#1F2937" />
      <rect x="76" y="252" width="128" height="30" rx="2" fill="#111827" />

      {/* Code on screen */}
      <rect x="80" y="256" width="40" height="2" rx="1" fill="#60A5FA" />
      <rect x="80" y="261" width="60" height="2" rx="1" fill="#34D399" />
      <rect x="80" y="266" width="50" height="2" rx="1" fill="#A78BFA" />
      <rect x="80" y="271" width="35" height="2" rx="1" fill="#60A5FA" />
      <rect x="128" y="256" width="30" height="2" rx="1" fill="#FCD34D" />
      <rect x="128" y="261" width="45" height="2" rx="1" fill="#F87171" />
      <rect x="128" y="266" width="55" height="2" rx="1" fill="#34D399" />
      <rect x="128" y="271" width="40" height="2" rx="1" fill="#60A5FA" />

      {/* Cursor blink */}
      <rect x="192" y="271" width="2" height="7" rx="1" fill="#60A5FA" opacity="0.8">
        <animate attributeName="opacity" values="0.8;0;0.8" dur="1.2s" repeatCount="indefinite" />
      </rect>
    </svg>
  );
}
