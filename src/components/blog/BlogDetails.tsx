import { useState } from "react"
import type { Blog } from "@/types/blog"
import { Button } from "@/components/ui/button"
import { ThumbsUp, ThumbsDown, Share2 } from "lucide-react"

const tagColors = [
  "bg-blue-100 text-blue-700",
  "bg-green-100 text-green-700",
  "bg-purple-100 text-purple-700",
  "bg-pink-100 text-pink-700",
  "bg-yellow-100 text-yellow-700",
]

export default function BlogDetails({ blog }: { blog: Blog }) {
  const [liked, setLiked] = useState(false)
  const [disliked, setDisliked] = useState(false)

  const handleLike = () => {
    setLiked(!liked)
    if (disliked) setDisliked(false)
  }

  const handleDislike = () => {
    setDisliked(!disliked)
    if (liked) setLiked(false)
  }

  return (
    <article className="bg-white rounded-xl border overflow-hidden">

      {/* COVER IMAGE */}
      <img
        src={blog.coverImage}
        alt={blog.title}
        className="w-full h-[320px] object-cover"
      />

      <div className="p-8 space-y-8">

        {/* TAGS + DATE */}
        <div className="flex flex-wrap items-center gap-3">
          {blog.category.map((tag, index) => (
            <span
              key={tag}
              className={`text-xs px-3 py-1 rounded-full font-medium ${tagColors[index % tagColors.length]}`}
            >
              {tag}
            </span>
          ))}
          <span className="text-sm text-muted-foreground">
            • {new Date(blog.date).toDateString()}
          </span>
        </div>

        {/* TITLE */}
        <h1 className="text-3xl font-bold text-gray-900">
          {blog.title}
        </h1>

        {/* DESCRIPTION */}
        <p className="text-lg text-muted-foreground">
          {blog.description}
        </p>

        {/* CONTENT */}
        <div className="prose prose-blue max-w-none">
          {blog.content}
        </div>

        <hr />

        {/* ACTIONS */}
        <div className="flex items-center justify-between">

          {/* LIKE / DISLIKE */}
          <div className="flex items-center gap-6">

            {/* LIKE */}
            <button
              onClick={handleLike}
              className={`
                flex items-center gap-2 text-sm font-medium transition
                ${liked ? "text-blue-600" : "text-gray-600 hover:text-blue-600"}
              `}
            >
              <ThumbsUp
                className={`
                  w-5 h-5 transition-transform
                  ${liked ? "scale-125 animate-bounce" : ""}
                `}
                fill={liked ? "currentColor" : "none"}
              />
              Like
            </button>

            {/* DISLIKE */}
            <button
              onClick={handleDislike}
              className={`
                flex items-center gap-2 text-sm font-medium transition
                ${disliked ? "text-red-500" : "text-gray-600 hover:text-red-500"}
              `}
            >
              <ThumbsDown
                className={`
                  w-5 h-5 transition-transform
                  ${disliked ? "scale-125 animate-bounce" : ""}
                `}
                fill={disliked ? "currentColor" : "none"}
              />
              Dislike
            </button>
          </div>

          {/* SHARE */}
          <Button className="bg-blue-700 hover:bg-blue-800 text-white rounded-full px-6 flex items-center gap-2">
            <Share2 className="w-4 h-4" />
            Share Article
          </Button>
        </div>
      </div>
    </article>
  )
}
