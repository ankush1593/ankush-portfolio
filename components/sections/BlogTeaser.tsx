"use client";
import Link from "next/link";
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

const posts = [
  {
    slug: "why-i-switched-from-in-memory-to-lazy-redis",
    tag: "Architecture",
    title: "Why I Switched a Service from Full In-Memory to Lazy Redis Loading",
    excerpt:
      "A 20-minute cold boot was a symptom, not the problem. Here's the architectural assumption that caused it and exactly how I dismantled it without breaking production.",
    readTime: "8 min",
    date: "Jun 2025",
  },
  {
    slug: "profiling-go-in-production-pprof",
    tag: "Performance",
    title: "Profiling Go in Production: What pprof Actually Tells You",
    excerpt:
      "CPU flame graphs, heap profiles, goroutine dumps — three real incidents from our sportsbook platform where profiling data changed how I understood the system entirely.",
    readTime: "11 min",
    date: "Apr 2025",
  },
  {
    slug: "payment-gateway-resilience-patterns",
    tag: "Fintech",
    title: "Building a Payment Gateway That Doesn't Lose Money",
    excerpt:
      "Circuit breakers, HMAC signatures, idempotent retries — the non-negotiable patterns behind a gateway processing 1.5M transactions a day, and why each one exists.",
    readTime: "9 min",
    date: "Feb 2025",
  },
];

export default function BlogTeaser() {
  const { ref, inView } = useInView();

  return (
    <section id="blog" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div ref={ref} className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-slate tracking-widest uppercase">Writing</span>
            <span className="flex-1 h-px bg-mist" />
          </div>

          <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
            <div>
              <h2 className="text-display-lg font-bold text-ink text-balance">
                Things I've figured out the hard way
              </h2>
              <p className="text-slate mt-3 max-w-lg leading-relaxed">
                Production war stories, architecture decisions, and honest post-mortems — written for engineers who work at scale.
              </p>
            </div>
            <Link
              href="/blog"
              className="text-sm font-medium text-accent hover:underline underline-offset-4 whitespace-nowrap"
            >
              All posts →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl p-6 border border-mist hover:border-accent/30 hover:shadow-sm transition-all duration-200 flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-accent bg-accent-light px-2 py-0.5 rounded">
                    {post.tag}
                  </span>
                  <span className="text-xs font-mono text-slate">{post.date}</span>
                </div>

                <h3 className="font-bold text-ink text-base leading-snug mb-3 group-hover:text-accent transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-sm text-slate leading-relaxed line-clamp-3 flex-1">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-2 mt-5 pt-4 border-t border-mist">
                  <span className="text-xs text-slate font-mono">{post.readTime} read</span>
                  <span className="text-accent text-sm ml-auto group-hover:translate-x-0.5 transition-transform">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
