import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Navbar from "@/components/shared/Navbar";
import CommandPalette from "@/components/shared/CommandPalette";

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col pt-24">
      {/* Keeping Navbar active on the blog route too */}
      <Navbar />
      <CommandPalette />

      <main className="max-w-4xl mx-auto px-6 py-12 w-full flex-1">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Technical Writing</h1>
          <div className="w-16 h-1 bg-primary rounded-full mb-6" />
          <p className="text-lg text-muted-foreground">
            Thoughts on enterprise architecture, AI integration, and the modern React ecosystem.
          </p>
        </div>

        <div className="space-y-12">
          {posts.length === 0 ? (
            <p className="text-muted-foreground">No posts published yet.</p>
          ) : (
            posts.map((post) => (
              <article key={post.slug} className="group relative border-b border-border/50 pb-12 last:border-0">
                <Link href={`/blog/${post.slug}`} className="absolute inset-0 z-10" />
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map(tag => (
                    <span key={tag} className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary/80 text-secondary-foreground border border-border/50">
                      {tag}
                    </span>
                  ))}
                </div>

                <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {post.description}
                </p>

                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <time dateTime={post.date}>{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</time>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.readingTime}</span>
                  </div>
                  <div className="ml-auto flex items-center gap-1 text-primary opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </article>
            ))
          )}
        </div>
      </main>
    </div>
  );
}
