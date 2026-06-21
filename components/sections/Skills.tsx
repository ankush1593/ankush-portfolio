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

const skillGroups = [
  {
    label: "Core languages",
    icon: "{ }",
    description: "The languages I reach for first",
    skills: [
      { name: "Go (Golang)", level: 95, note: "Primary language at Techmojo" },
      { name: "Java", level: 90, note: "9 years, Spring ecosystem expert" },
      { name: "SQL", level: 80, note: "MySQL, PostgreSQL" },
      { name: "JavaScript", level: 60, note: "Supporting/frontend" },
    ],
  },
  {
    label: "Architecture & frameworks",
    icon: "⬡",
    description: "How I wire systems together",
    skills: [
      { name: "Microservices", level: 95, note: "Design + migration" },
      { name: "Spring Boot", level: 92, note: "Deep production usage" },
      { name: "gRPC", level: 80, note: "Internal service comms" },
      { name: "WebSockets", level: 90, note: "Real-time platform core" },
    ],
  },
  {
    label: "Data & messaging",
    icon: "⇌",
    description: "Moving and storing data at scale",
    skills: [
      { name: "Apache Kafka", level: 92, note: "Fan-out, event sourcing" },
      { name: "Redis", level: 88, note: "Caching, pub-sub, lazy-load" },
      { name: "PostgreSQL / RDS", level: 80, note: "AWS managed" },
      { name: "RabbitMQ", level: 70, note: "Message queuing" },
    ],
  },
  {
    label: "Infrastructure & cloud",
    icon: "☁",
    description: "Where my code lives in production",
    skills: [
      { name: "Kubernetes (EKS)", level: 82, note: "Container orchestration" },
      { name: "AWS (EC2, S3, Gateway)", level: 80, note: "Core services" },
      { name: "Grafana / Prometheus", level: 78, note: "Metrics & alerting" },
      { name: "ELK Stack", level: 72, note: "Logging & search" },
    ],
  },
];

function SkillBar({ name, level, note, inView, delay }: {
  name: string; level: number; note: string; inView: boolean; delay: number;
}) {
  return (
    <div className="group" style={{ transitionDelay: `${delay}ms` }}>
      <div className="flex justify-between items-baseline mb-1.5">
        <span className="text-sm font-medium text-ink">{name}</span>
        <span className="text-xs text-slate font-mono">{level}%</span>
      </div>
      <div className="h-1.5 bg-mist rounded-full overflow-hidden">
        <div
          className="h-full bg-accent rounded-full transition-all duration-700 ease-out"
          style={{ width: inView ? `${level}%` : "0%", transitionDelay: `${delay}ms` }}
        />
      </div>
      <p className="text-xs text-slate/70 mt-1">{note}</p>
    </div>
  );
}

export default function Skills() {
  const { ref, inView } = useInView();

  return (
    <section id="skills" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div ref={ref} className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-slate tracking-widest uppercase">Skills</span>
            <span className="flex-1 h-px bg-mist" />
          </div>

          <div className="mb-14">
            <h2 className="text-display-lg font-bold text-ink text-balance">
              Tools I trust at 3am in production
            </h2>
            <p className="text-slate mt-3 max-w-lg leading-relaxed">
              Not a skills list — a map of what I actually reach for when something's on fire.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {skillGroups.map((group, gi) => (
              <div key={group.label} className="bg-paper rounded-2xl p-7 border border-mist">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xl font-mono text-accent">{group.icon}</span>
                  <h3 className="font-bold text-ink">{group.label}</h3>
                </div>
                <p className="text-xs text-slate mb-6">{group.description}</p>
                <div className="space-y-5">
                  {group.skills.map((skill, si) => (
                    <SkillBar
                      key={skill.name}
                      {...skill}
                      inView={inView}
                      delay={gi * 80 + si * 60}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Monitoring callout */}
          <div className="mt-8 bg-ink rounded-2xl p-7 text-paper flex flex-wrap gap-6 items-center justify-between">
            <div>
              <p className="font-bold text-lg">Monitoring & observability</p>
              <p className="text-slate text-sm mt-1">The instruments I use to understand what's happening in prod</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Dynatrace", "Grafana", "Prometheus", "Elasticsearch", "Kibana", "pprof"].map((tool) => (
                <span key={tool} className="text-xs font-mono bg-white/10 text-paper/80 px-3 py-1.5 rounded-full border border-white/10">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
