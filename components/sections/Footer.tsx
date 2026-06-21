export default function Footer() {
  return (
    <footer className="bg-ink text-paper/60 py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="font-mono text-sm text-paper">
            Ankush Srivastava
          </p>
          <p className="text-xs mt-1">
            Software Architect · Hyderabad, India
          </p>
        </div>

        <div className="flex items-center gap-6 text-xs font-mono">
          <a href="https://github.com/ankush1593" target="_blank" rel="noopener noreferrer" className="hover:text-paper transition-colors">
            GitHub
          </a>
          <a href="mailto:ankush1593@gmail.com" className="hover:text-paper transition-colors">
            Email
          </a>
          <a href="https://www.linkedin.com/in/ankush-srivastava" className="hover:text-paper transition-colors">
            LinkedIn
          </a>
        </div>

        <p className="text-xs w-full md:w-auto text-center md:text-right">
          Built with Next.js · © {new Date().getFullYear()} Ankush Srivastava
        </p>
      </div>
    </footer>
  );
}
