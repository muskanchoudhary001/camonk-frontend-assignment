import { useEffect, useState } from "react"
import BlogCard from "@/components/ui/BlogCard"
import type { Blog } from "@/types/blog"

export default function AllBlogs() {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/db.json")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data.blogs)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  if (loading) {
    return <p className="text-center py-20">Loading blogs...</p>
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-10 mt-28">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">
        All Blogs
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </section>
  )
}
