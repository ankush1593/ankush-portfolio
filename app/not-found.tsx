import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <p className="font-mono text-accent text-sm mb-4">404</p>
        <h1 className="text-display-md font-bold text-ink mb-4">Page not found</h1>
        <p className="text-slate mb-8">This URL doesn't map to anything. Even good architects make wrong turns.</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-ink text-paper text-sm font-medium px-6 py-3 rounded-full hover:bg-accent transition-colors"
        >
          ← Go home
        </Link>
      </div>
    </div> 
  );
}
