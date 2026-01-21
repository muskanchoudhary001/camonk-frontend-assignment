import { useEffect, useRef } from "react"
import type { Blog } from "@/types/blog"

interface BlogListProps {
  blogs: Blog[]
  onSelect: (blog: Blog) => void
  selectedId?: number
}

export default function BlogList({
  blogs,
  onSelect,
  selectedId,
}: BlogListProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const interval = setInterval(() => {
      const cardHeight = el.firstElementChild?.clientHeight ?? 120

      if (el.scrollTop + el.clientHeight >= el.scrollHeight) {
        el.scrollTop = 0
      } else {
        el.scrollTop += cardHeight
      }
    }, 4000) 

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="space-y-4">

      {/* FIXED HEADER */}
      <h2 className="text-3xl font-bold text-blue-600 sticky top-0 bg-muted/30 z-10 py-2">
        Latest Articles
      </h2>

      {/* AUTO-SCROLL AREA */}
      <div
        ref={scrollRef}
        className="
          max-h-[420px]
          overflow-hidden
          space-y-4
          pr-2
          scroll-smooth
        "
      >
        {blogs.map((blog) => (
          <button
            key={blog.id}
            onClick={() => onSelect(blog)}
            className={`
              w-full text-left rounded-xl border bg-white p-4 transition
              ${
                selectedId === blog.id
                  ? "border-blue-600 bg-blue-50"
                  : "border-gray-200 hover:bg-gray-50"
              }
            `}
          >
            <div className="flex flex-wrap gap-2 mb-1">
              {blog.category.map((tag, index) => (
                <span
                  key={tag}
                  className={`
                    text-xs px-2 py-1 rounded-full font-medium
                    ${
                      [
                        "bg-blue-100 text-blue-700",
                        "bg-green-100 text-pink-700",
                        "bg-purple-100 text-purple-700",
                        "bg-pink-100 text-green-700",
                        "bg-yellow-100 text-yellow-700",
                      ][index % 5]
                    }
                  `}
                >
                  {tag}
                </span>
              ))}
            </div>

            <h4 className="font-semibold text-gray-900">
              {blog.title}
            </h4>

            <p className="text-xs text-gray-500 mt-1">
              {new Date(blog.date).toDateString()}
            </p>
          </button>
        ))}
      </div>
    </div>
  )
}
