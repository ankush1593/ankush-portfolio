"use client";
import { useRef, useEffect, useState } from "react";

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const experiences = [
  {
    company: "Techmojo Pvt. Ltd.",
    role: "Tech Lead — Member of Technical Staff",
    period: "Feb 2022 — Present",
    location: "Hyderabad (Remote)",
    domain: "Sportsbook & Fintech",
    description:
      "Leading backend architecture for a high-stakes sports betting platform. Everything I do here is measured in milliseconds and millions — market throughput, transaction accuracy, and uptime under load.",
    highlights: [
      "Re-architected the WebSocket pub-sub engine powering 10M+ markets via Kafka fan-out",
      "Built payment gateway processing 1.5M transactions/day at 1000 TPS with 95% auto-recovery",
      "Reduced service memory footprint 80%+ by moving from in-memory preload to lazy Redis architecture",
      "Profiled Go runtime (pprof: CPU, heap, goroutine) to cut peak CPU >50% at 2500+ updates/sec",
      "Led integration of Live Sports Streaming, Bonus Engine, and Bet Builder features",
    ],
    tags: ["Go", "Java", "Kafka", "Redis", "WebSocket", "K8s", "AWS"],
    color: "bg-blue-600",
  },
  {
    company: "PromptCloud Technologies Pvt. Ltd.",
    role: "Tech Lead",
    period: "Nov 2018 — Feb 2022",
    location: "Bengaluru",
    domain: "Data Engineering",
    description:
      "Worked in the data extraction and structuring space — a domain where correctness is everything and scale is relentless. Shipped 100+ crawlers and co-built a job data product from zero.",
    highlights: [
      "Delivered 100+ custom web crawlers extracting structured data (XML, JSON, CSV, JSON-LD)",
      "Built JobsPikr from scratch, integrating ML pipelines with data pipelines",
      "Engineered duplicate job detection and expired listing removal, cutting redundancy by 30%+",
      "Won 1st place at Kreate Hackathon 2019 with an image spam buster built at speed",
    ],
    tags: ["Python", "Java", "ML pipelines", "Data engineering"],
    color: "bg-emerald-600",
  },
  {
    company: "Tata Consultancy Services",
    role: "Systems Engineer",
    period: "Aug 2016 — Oct 2018",
    location: "Chennai",
    domain: "Banking & Enterprise",
    description:
      "Started my career in large-scale enterprise software for Bank of America. Learned to respect the complexity of financial systems, automated painful manual processes, and built my first observability tools.",
    highlights: [
      "Automated billing & invoice generation for Bank of America using Java, Spring MVC, MySQL",
      "Built real-time logging & alerting with Spring AOP, cutting MTTD incidents by ~50%",
      "Created a JAR for dynamic Excel/PDF report generation from user-defined templates",
      "Ranked 98th of 67,000 in TCS CodeVita 2015; 167th in CodeVita 2014",
    ],
    tags: ["Java", "Spring MVC", "MySQL", "Spring AOP"],
    color: "bg-slate-600",
  },
];

export default function Experience() {
  const { ref, inView } = useInView();

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div ref={ref} className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>

          <div className="flex items-center gap-3 mb-14">
            <span className="text-xs font-mono text-slate tracking-widest uppercase">Experience</span>
            <span className="flex-1 h-px bg-mist" />
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-[11px] top-3 bottom-3 w-px bg-mist" />

            <div className="space-y-14">
              {experiences.map((exp, i) => (
                <div key={exp.company} className="md:grid md:grid-cols-[24px_1fr] gap-8">
                  {/* Timeline dot */}
                  <div className="hidden md:flex flex-col items-center mt-1">
                    <div className={`w-6 h-6 rounded-full ${exp.color} flex items-center justify-center flex-shrink-0`}>
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="bg-white rounded-2xl p-7 border border-mist hover:border-accent/20 transition-colors">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
                      <div>
                        <span className="inline-block text-xs font-mono text-slate bg-mist px-2 py-0.5 rounded mb-2">
                          {exp.domain}
                        </span>
                        <h3 className="text-lg font-bold text-ink">{exp.company}</h3>
                        <p className="text-accent font-medium text-sm mt-0.5">{exp.role}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-mono text-slate">{exp.period}</p>
                        <p className="text-xs text-slate/70 mt-0.5">{exp.location}</p>
                      </div>
                    </div>

                    <p className="text-slate text-sm leading-relaxed mt-3 mb-5 max-w-2xl">
                      {exp.description}
                    </p>

                    <ul className="space-y-2 mb-5">
                      {exp.highlights.map((h) => (
                        <li key={h} className="flex gap-2.5 text-sm text-ink/80">
                          <span className="text-accent mt-0.5 flex-shrink-0">→</span>
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-5 border-t border-mist">
                      {exp.tags.map((tag) => (
                        <span key={tag} className="text-xs font-mono text-slate bg-mist px-2.5 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mt-14 bg-mist/50 rounded-2xl p-7 border border-mist">
            <p className="text-xs font-mono text-slate uppercase tracking-widest mb-4">Education</p>
            <div className="flex flex-wrap justify-between gap-3">
              <div>
                <h3 className="font-bold text-ink">B.Tech in Information Technology</h3>
                <p className="text-slate text-sm mt-1">Kamla Nehru Institute of Technology, Sultanpur, UP</p>
              </div>
              <p className="text-sm font-mono text-slate self-start">May 2016</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
