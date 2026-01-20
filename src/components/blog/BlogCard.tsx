import type { Blog } from "@/types/blog"

export default function BlogCard({ blog }: { blog: Blog }) {
  return (
    <div className="rounded-xl border bg-white p-4 hover:shadow-md transition">
      <p className="text-xs text-muted-foreground uppercase">
        {blog.category.join(", ")}
      </p>

      <h3 className="font-semibold mt-1">{blog.title}</h3>

      <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
        {blog.description}
      </p>

      <span className="text-xs text-muted-foreground mt-2 block">
        {new Date(blog.date).toDateString()}
      </span>
    </div>
  )
}
