"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "/blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // For anchor links: use /#about when not on homepage, #about when on homepage
  const resolveHref = (href: string) => {
    if (href.startsWith("#")) return isHome ? href : `/${href}`;
    return href;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-paper/90 backdrop-blur-md border-b border-mist shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-mono text-sm font-medium tracking-tight text-ink hover:text-accent transition-colors"
        >
          Ankush Srivastava
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={resolveHref(link.href)}
                className="text-sm text-slate hover:text-ink transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-accent transition-all duration-200 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="mailto:ankush1593@gmail.com"
          className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-accent border border-accent/30 px-4 py-1.5 rounded-full hover:bg-accent hover:text-white transition-all duration-200"
        >
          Hire me
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-px bg-ink transition-transform duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-5 h-px bg-ink transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-px bg-ink transition-transform duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-paper border-b border-mist px-6 pb-6 pt-2">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={resolveHref(link.href)}
                  className="text-base text-slate hover:text-ink transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href="mailto:ankush1593@gmail.com"
            className="mt-5 inline-flex text-sm font-medium text-accent border border-accent/30 px-4 py-2 rounded-full"
          >
            Hire me
          </a>
        </div>
      )}
    </header>
  );
}
