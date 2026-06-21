"use client";
import { useRef, useEffect, useState } from "react";

function useInView(threshold = 0.15) {
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

const values = [
  {
    icon: "⚙️",
    title: "Systems over features",
    body: "I think in feedback loops, not task lists. Before writing code I ask: what breaks this at 10× scale? The answer shapes every design decision.",
  },
  {
    icon: "📉",
    title: "Obsessed with less",
    body: "Cutting memory 80%, slashing startup time from 20 minutes to under one — these aren't wins measured in lines added, but in lines removed.",
  },
  {
    icon: "🔬",
    title: "Production profiling as craft",
    body: "I've spent late nights with pprof traces, hunting goroutine leaks and GC pauses. There's something meditative about finding the exact bottleneck.",
  },
  {
    icon: "🤝",
    title: "Mentorship as multiplier",
    body: "A team that understands the why builds better than one that follows orders. I invest in growing engineers around me, not just the code.",
  },
];

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div ref={ref} className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>

          {/* Section header */}
          <div className="flex items-center gap-3 mb-14">
            <span className="text-xs font-mono text-slate tracking-widest uppercase">About</span>
            <span className="flex-1 h-px bg-mist" />
          </div>

          <div className="grid md:grid-cols-5 gap-14 items-start">
            {/* Main story */}
            <div className="md:col-span-3 space-y-6">
              <h2 className="text-display-lg font-bold text-ink text-balance">
                I've been thinking about distributed systems since before they were cool.
              </h2>

              <div className="space-y-4 text-slate leading-relaxed">
                <p>
                  My journey started in 2016 in Chennai, automating billing pipelines at TCS for Bank of America.
                  It was unglamorous work — stored procedures, invoice templates, edge cases — but it taught me
                  that <strong className="text-ink font-medium">reliability is a feature, not a given.</strong>
                </p>
                <p>
                  I moved into the data world at PromptCloud, where I built 100+ web crawlers and helped launch
                  <em> JobsPikr</em> from the ground up. Wiring ML pipelines into data pipelines, eliminating 30%
                  of duplicate records — this is where I developed my instinct for data quality and system correctness.
                </p>
                <p>
                  At Techmojo I found my real domain: <strong className="text-ink font-medium">high-frequency, event-driven sports platforms</strong>.
                  The problems here are genuinely hard — millions of WebSocket clients, sub-second pricing updates,
                  payment flows that must not lose money. I re-architected a pub-sub system handling 10M+ markets,
                  turned a 20-minute startup into a sub-minute cold boot, and profiled Go runtimes at 2,500+ updates/second.
                </p>
                <p>
                  Outside of systems: I competed in CodeVita in 2014 and 2015, ranking 167th and 98th nationally.
                  I won first place in the Kreate Hackathon 2019 building an image spam buster. These early
                  competitions built something that prod incidents reinforce — the ability to think clearly under pressure.
                </p>
              </div>
            </div>

            {/* Quick facts sidebar */}
            <div className="md:col-span-2 space-y-4">
              <div className="bg-white rounded-2xl p-6 border border-mist">
                <h3 className="text-xs font-mono text-slate uppercase tracking-widest mb-5">Quick facts</h3>
                <ul className="space-y-3 text-sm">
                  {[
                    ["Based in", "Hyderabad (Remote)"],
                    ["Current role", "Tech Lead @ Techmojo"],
                    ["Languages", "Go, Java, SQL"],
                    ["Education", "B.Tech IT, KNIT Sultanpur"],
                    ["Competed in", "TCS CodeVita × 2"],
                    ["Hackathon", "Kreate 2019 Winner 🏆"],
                    ["Open to", "Senior / Staff / Architect roles"],
                  ].map(([label, value]) => (
                    <li key={label} className="flex justify-between gap-3">
                      <span className="text-slate">{label}</span>
                      <span className="text-ink font-medium text-right">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Fun aside */}
              <div className="bg-accent-light border border-accent/20 rounded-2xl p-5">
                <p className="text-sm text-ink leading-relaxed">
                  <span className="font-medium">Fun fact:</span> I once reduced a service's cold startup from
                  20 minutes to under 60 seconds. The old number wasn't from bad code — it was a fundamental
                  architectural assumption that had calcified over time. I find these moments the most satisfying to fix.
                </p>
              </div>
            </div>
          </div>

          {/* Values grid */}
          <div className="mt-16 grid sm:grid-cols-2 gap-5">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="bg-white rounded-2xl p-6 border border-mist hover:border-accent/30 transition-colors"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="text-2xl mb-3">{v.icon}</div>
                <h3 className="font-semibold text-ink mb-2">{v.title}</h3>
                <p className="text-sm text-slate leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
