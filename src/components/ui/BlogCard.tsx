import type { Blog } from "@/types/blog"

interface BlogCardProps {
  blog: Blog
  onClick?: () => void
}

export default function BlogCard({ blog, onClick }: BlogCardProps) {
  return (
    <div
      onClick={onClick}
      className="
        group cursor-pointer
        rounded-2xl border border-gray-200 bg-white
        p-5 shadow-sm
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-xl
      "
    >
      {/* CATEGORY CHIPS */}
      <div className="flex flex-wrap gap-2 mb-3">
        {blog.category.map((tag, index) => (
          <span
            key={tag}
            className={`
              text-xs font-semibold px-3 py-1 rounded-full
              ${
                [
                  "bg-blue-100 text-blue-700",
                  "bg-emerald-100 text-emerald-700",
                  "bg-purple-100 text-purple-700",
                  "bg-pink-100 text-pink-700",
                  "bg-yellow-100 text-yellow-700",
                  "bg-indigo-100 text-indigo-700",
                ][index % 6]
              }
            `}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* TITLE */}
      <h3
        className="
          text-lg font-semibold text-gray-900
          group-hover:text-blue-600
          transition line-clamp-2
        "
      >
        {blog.title}
      </h3>

      {/* DESCRIPTION */}
      <p className="mt-2 text-sm text-gray-600 line-clamp-3">
        {blog.description}
      </p>

      {/* DATE */}
      <p className="mt-4 text-xs text-gray-400">
        {new Date(blog.date).toDateString()}
      </p>
    </div>
  )
}
