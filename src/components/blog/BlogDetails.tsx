import type { Blog } from "@/types/blog"
import { Button } from "@/components/ui/button"

export default function BlogDetails({ blog }: { blog: Blog }) {
  return (
    <article className="bg-white rounded-xl border overflow-hidden">
      
      {/* COVER IMAGE */}
      <img
        src={blog.coverImage}
        alt={blog.title}
        className="w-full h-[320px] object-cover"
      />

      {/* CONTENT */}
      <div className="p-8 space-y-6">
        <div className="flex gap-4 text-sm text-muted-foreground">
          <span>{blog.category.join(" & ")}</span>
          <span>•</span>
          <span>{new Date(blog.date).toDateString()}</span>
        </div>

        <h1 className="text-3xl font-bold">{blog.title}</h1>

        <p className="text-lg text-muted-foreground">
          {blog.description}
        </p>

        <div className="prose max-w-none">
          {blog.content}
        </div>

        <Button>Share Article</Button>
      </div>
    </article>
  )
}
