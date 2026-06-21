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

const problems = [
  {
    tag: "Real-time systems",
    title: "WebSocket pub-sub for 10M+ markets",
    situation:
      "A revenue-critical sports platform was delivering live pricing to thousands of concurrent clients via WebSocket. The subscription model, caching, and concurrency design were all struggling under load — and every failure was visible to users mid-bet.",
    approach:
      "I re-architected the core subscription model: redesigned the Kafka fan-out strategy, rebuilt the caching layer for hot data, and overhauled concurrency patterns. Every design choice was benchmarked against the worst-case throughput we'd seen in production.",
    result: "System now reliably delivers pricing across 10M+ markets and 1M+ events without throttling under peak load.",
    metrics: [
      { label: "markets served", value: "10M+" },
      { label: "concurrent events", value: "1M+" },
      { label: "CPU reduction", value: ">50%" },
    ],
    stack: ["Go", "Kafka", "WebSocket", "Redis"],
    color: "bg-blue-50 border-blue-100",
    tagColor: "text-blue-600 bg-blue-100",
  },
  {
    tag: "Payment infrastructure",
    title: "Payment gateway handling 1.5M txn/day",
    situation:
      "Building a payment system that processes real money is unforgiving. The existing flow had no circuit breaking, no retry logic, and manual reconciliation for failed payments — each failure meant either lost revenue or customer support overhead.",
    approach:
      "Designed from scratch with Spring Boot: JWT+HMAC authentication, rate limiting per client, circuit breaker patterns to isolate downstream failures, and automated retry reconciliation that caught and recovered failed payments without human intervention.",
    result: "System handles 1,000 TPS at peak, processes 1.5M transactions per day, and auto-recovers 95% of failed payments.",
    metrics: [
      { label: "transactions/day", value: "1.5M" },
      { label: "peak throughput", value: "1000 TPS" },
      { label: "auto-recovered", value: "95%" },
    ],
    stack: ["Java", "Spring Boot", "JWT", "HMAC"],
    color: "bg-emerald-50 border-emerald-100",
    tagColor: "text-emerald-700 bg-emerald-100",
  },
  {
    tag: "Performance engineering",
    title: "20-minute cold boot → under 1 minute",
    situation:
      "A service was preloading its entire working set into memory on startup. This architectural decision had made sense early on, but had calcified into a liability: 20-minute cold boots meant slow horizontal scaling, painful deployments, and fragile high-availability posture.",
    approach:
      "Transformed the service to lazy-load data from Redis on demand. This eliminated Kafka's role as a persistent store, cut the in-memory footprint dramatically, and decoupled availability from pre-warming time. Also ran deep pprof profiling (CPU, heap, goroutine) to fix object allocation patterns and GC pressure.",
    result: "Cold start dropped from 20 minutes to under 60 seconds. Memory footprint cut by 80%+. Teams could now scale horizontally in response to load spikes.",
    metrics: [
      { label: "startup time", value: "20m → <1m" },
      { label: "memory cut", value: "80%+" },
      { label: "Kafka dependency", value: "eliminated" },
    ],
    stack: ["Go", "Redis", "pprof", "Kafka"],
    color: "bg-violet-50 border-violet-100",
    tagColor: "text-violet-700 bg-violet-100",
  },
];

export default function Signature() {
  const { ref, inView } = useInView();

  return (
    <section id="work" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div ref={ref} className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-slate tracking-widest uppercase">Signature work</span>
            <span className="flex-1 h-px bg-mist" />
          </div>

          <div className="mb-14">
            <h2 className="text-display-lg font-bold text-ink text-balance">
              The problems that shaped how I think
            </h2>
            <p className="text-slate mt-3 max-w-xl leading-relaxed">
              These aren't just resume bullets. Here's what the problems actually looked like, and what it took to solve them.
            </p>
          </div>

          <div className="space-y-8">
            {problems.map((p, i) => (
              <div key={p.title} className={`rounded-2xl border p-8 ${p.color}`}>
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <span className={`text-xs font-mono font-medium uppercase tracking-widest px-2 py-1 rounded-md ${p.tagColor}`}>
                      {p.tag}
                    </span>
                    <h3 className="text-xl font-bold text-ink mt-3">{p.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span key={s} className="text-xs font-mono bg-white/70 border border-white/80 text-slate px-2.5 py-1 rounded-full">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Situation → Approach → Result */}
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  {[
                    { label: "Situation", text: p.situation },
                    { label: "Approach", text: p.approach },
                    { label: "Result", text: p.result },
                  ].map(({ label, text }) => (
                    <div key={label}>
                      <p className="text-xs font-mono font-medium text-slate uppercase tracking-widest mb-2">{label}</p>
                      <p className="text-sm text-ink/80 leading-relaxed">{text}</p>
                    </div>
                  ))}
                </div>

                {/* Metrics */}
                <div className="flex flex-wrap gap-4 pt-5 border-t border-black/5">
                  {p.metrics.map((m) => (
                    <div key={m.label} className="bg-white/60 rounded-xl px-4 py-2.5">
                      <p className="text-xs font-mono text-slate">{m.label}</p>
                      <p className="font-bold text-ink text-base mt-0.5">{m.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
