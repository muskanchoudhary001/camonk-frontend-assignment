import { useNavigate } from "react-router-dom"
import type { Blog } from "@/types/blog"

interface BlogCardProps {
  blog: Blog
}

export default function BlogCard({ blog }: BlogCardProps) {
  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(`/blogs/${blog.id}`)}
      className="
        group cursor-pointer
        rounded-2xl border border-blue-100
        bg-white p-5 shadow-sm
        transition-all duration-300
        hover:-translate-y-1
        hover:border-blue-300
        hover:shadow-[0_10px_30px_rgba(37,99,235,0.12)]
      "
    >
      {/* CATEGORY CHIPS */}
      <div className="flex flex-wrap gap-2 mb-3">
        {blog.category.map((tag, index) => (
          <span
            key={tag}
            className={[
              "text-xs font-semibold px-3 py-1 rounded-full",
              [
                "bg-blue-100 text-blue-700",
                "bg-emerald-100 text-emerald-700",
                "bg-purple-100 text-purple-700",
                "bg-pink-100 text-pink-700",
                "bg-yellow-100 text-yellow-700",
              ][index % 5],
            ].join(" ")}
          >
            {tag}
          </span>
        ))}
      </div>

      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
        {blog.title}
      </h3>

      <p className="mt-2 text-sm text-gray-600 line-clamp-3">
        {blog.description}
      </p>

      <p className="mt-4 text-xs text-gray-400">
        {new Date(blog.date).toDateString()}
      </p>
    </div>
  )
}
