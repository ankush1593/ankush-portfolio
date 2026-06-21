import { getPost, getAllPosts } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const post = getPost(params.slug);
    return {
      title: `${post.title} — Ankush Srivastava`,
      description: post.excerpt,
    };
  } catch {
    return { title: "Post not found" };
  }
}

export default function PostPage({ params }: Props) {
  let post;
  try {
    post = getPost(params.slug);
  } catch {
    notFound();
  }

  return (
    <div className="min-h-screen pt-28 pb-24 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Back */}
        <Link
          href="/blog"
          className="text-xs font-mono text-slate hover:text-accent transition-colors mb-10 inline-block"
        >
          ← All posts
        </Link>

        {/* Meta */}
        <div className="flex items-center gap-3 mb-5">
          <span className="text-xs font-mono text-accent bg-accent-light px-2 py-0.5 rounded">
            {post.tag}
          </span>
          <span className="text-xs font-mono text-slate">{post.date}</span>
          <span className="text-xs font-mono text-slate">{post.readTime} read</span>
        </div>

        {/* Title */}
        <h1 className="text-display-md font-bold text-ink text-balance mb-4">{post.title}</h1>
        <p className="text-slate leading-relaxed mb-10 text-lg">{post.excerpt}</p>

        <hr className="border-mist mb-10" />

        {/* Body */}
        <article className="prose-custom">
          <MDXRemote source={post.content} />
        </article>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-mist flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-ink">Ankush Srivastava</p>
            <p className="text-xs text-slate">Software Architect · Hyderabad</p>
          </div>
          <a
            href="mailto:ankush1593@gmail.com"
            className="text-sm text-accent hover:underline underline-offset-4"
          >
            Reply via email →
          </a>
        </div>
      </div>
    </div>
  );
}
