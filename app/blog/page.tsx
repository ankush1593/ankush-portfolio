import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Ankush Srivastava",
  description: "Architecture decisions, performance engineering, and distributed systems war stories.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen pt-28 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <Link href="/" className="text-xs font-mono text-slate hover:text-accent transition-colors mb-8 inline-block">
            ← Back home
          </Link>
          <h1 className="text-display-lg font-bold text-ink text-balance">Writing</h1>
          <p className="text-slate mt-3 leading-relaxed max-w-lg">
            Architecture decisions, performance war stories, and things I wish someone had written
            down when I was figuring them out.
          </p>
        </div>

        {/* Posts list */}
        <div className="space-y-4">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block bg-white rounded-2xl p-7 border border-mist hover:border-accent/30 hover:shadow-sm transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-mono text-accent bg-accent-light px-2 py-0.5 rounded">
                  {post.tag}
                </span>
                <span className="text-xs font-mono text-slate">{post.date}</span>
                <span className="text-xs font-mono text-slate ml-auto">{post.readTime} read</span>
              </div>
              <h2 className="text-lg font-bold text-ink group-hover:text-accent transition-colors mb-2">
                {post.title}
              </h2>
              <p className="text-sm text-slate leading-relaxed line-clamp-2">{post.excerpt}</p>
              <span className="inline-block mt-4 text-sm text-accent group-hover:translate-x-0.5 transition-transform">
                Read →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
