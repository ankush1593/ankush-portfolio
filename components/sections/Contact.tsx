"use client";
import { useState, useRef, useEffect } from "react";

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

export default function Contact() {
  const { ref, inView } = useInView();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");

    try {
      // Replace YOUR_FORM_ID with the ID from your Formspree dashboard.
      // e.g. if your endpoint is https://formspree.io/f/abcd1234 → ID is abcd1234
      const res = await fetch("https://formspree.io/f/mnjkarzo", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div ref={ref} className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-slate tracking-widest uppercase">Contact</span>
            <span className="flex-1 h-px bg-mist" />
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left: copy */}
            <div>
              <h2 className="text-display-lg font-bold text-ink text-balance mb-6">
                Let's build something that holds up under load.
              </h2>
              <p className="text-slate leading-relaxed mb-8">
                Whether you're scaling a platform, re-architecting a bottleneck, or just want to talk distributed systems —
                I'm interested. Especially if the problem is genuinely hard.
              </p>

              <div className="space-y-4">
                {[
                  {
                    label: "Email",
                    value: "ankush1593@gmail.com",
                    href: "mailto:ankush1593@gmail.com",
                  },
                  {
                    label: "GitHub",
                    value: "github.com/ankush1593",
                    href: "https://github.com/ankush1593",
                  },
                  {
                    label: "Phone",
                    value: "+91 8960185575",
                    href: "tel:+918960185575",
                  },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center justify-between p-4 rounded-xl border border-mist hover:border-accent/30 transition-colors group"
                  >
                    <span className="text-xs font-mono text-slate uppercase tracking-widest">{item.label}</span>
                    <span className="text-sm text-ink font-medium group-hover:text-accent transition-colors">
                      {item.value} →
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Right: form */}
            <div className="bg-paper rounded-2xl p-7 border border-mist">
              {status === "sent" ? (
                <div className="text-center py-8">
                  <div className="text-4xl mb-4">✓</div>
                  <h3 className="font-bold text-ink text-lg mb-2">Message sent</h3>
                  <p className="text-slate text-sm">I'll get back to you within a day or two.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-slate uppercase tracking-widest">Name</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-white border border-mist rounded-xl px-4 py-3 text-sm text-ink placeholder:text-slate/50 focus:outline-none focus:border-accent transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-slate uppercase tracking-widest">Email</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-white border border-mist rounded-xl px-4 py-3 text-sm text-ink placeholder:text-slate/50 focus:outline-none focus:border-accent transition-colors"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-slate uppercase tracking-widest">Message</label>
                    <textarea
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-white border border-mist rounded-xl px-4 py-3 text-sm text-ink placeholder:text-slate/50 focus:outline-none focus:border-accent transition-colors resize-none"
                      placeholder="Tell me what you're working on..."
                    />
                  </div>
                  <button
                    onClick={handleSubmit}
                    disabled={status === "sending"}
                    className="w-full bg-ink text-paper text-sm font-medium py-3.5 rounded-xl hover:bg-accent transition-colors duration-200 disabled:opacity-50"
                  >
                    {status === "sending" ? "Sending..." : "Send message"}
                  </button>
                  {status === "error" && (
                    <p className="text-red-500 text-xs text-center">
                      Something went wrong. Try emailing directly at ankush1593@gmail.com
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
