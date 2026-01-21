import { useState } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"
import { createBlog } from "@/lib/api"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const CATEGORIES = ["FINANCE", "TECH", "CAREER", "SKILLS" , "GENERAL", 
        "EDUCATION","REGULATIONS", "LIFESTYLE"]

export default function CreateBlogForm() {
  const qc = useQueryClient()
  const navigate = useNavigate()

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [content, setContent] = useState("")
  const [coverImage, setCoverImage] = useState("")
  const [category, setCategory] = useState<string[]>(["TECH"])
  const [successMsg, setSuccessMsg] = useState("")

 const mutation = useMutation({
  mutationFn: createBlog,
  onSuccess: (data) => {
    qc.invalidateQueries({ queryKey: ["blogs"] })

    setSuccessMsg("Blog published successfully 🎉")

    // Navigate to the new blog page
    setTimeout(() => {
      navigate(`/blogs/${data.id}`)
    }, 800)
  },
})


  const toggleCategory = (cat: string) => {
    setCategory((prev) =>
      prev.includes(cat)
        ? prev.filter((c) => c !== cat)
        : [...prev, cat]
    )
  }

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 mt-32 mb-24">
      <div className="w-full max-w-xl bg-white rounded-2xl border shadow-lg p-8 space-y-6">

        {/* HEADER */}
        <div className="text-center space-y-1">
          <h2 className="text-2xl font-bold text-gray-900">
            Create New Blog
          </h2>
          <p className="text-sm text-muted-foreground">
            Share your thoughts with the community
          </p>
        </div>

        {/* SUCCESS */}
        {successMsg && (
          <div className="rounded-md bg-green-50 border border-green-200 px-4 py-2 text-sm text-green-700 text-center">
            {successMsg}
          </div>
        )}

        {/* ERROR */}
        {mutation.isError && (
          <div className="rounded-md bg-red-50 border border-red-200 px-4 py-2 text-sm text-red-700 text-center">
            Failed to create blog. Please try again.
          </div>
        )}

        <div className="space-y-5">

          {/* TITLE */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">
              Blog Title
            </label>
            <Input
              placeholder="Enter blog title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              disabled={mutation.isPending}
            />
          </div>

          {/* DESCRIPTION */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">
              Short Description
            </label>
            <Input
              placeholder="Brief summary of the blog"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              disabled={mutation.isPending}
            />
          </div>

          {/* COVER IMAGE */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">
              Cover Image URL
            </label>
            <Input
              placeholder="https://images.pexels.com/..."
              value={coverImage}
              onChange={(e) => setCoverImage(e.target.value)}
              disabled={mutation.isPending}
            />
          </div>

          {/* CATEGORY */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Categories
            </label>

            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => toggleCategory(cat)}
                  className={`
                    px-3 py-1 rounded-full text-xs font-medium border transition
                    ${
                      category.includes(cat)
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-white text-gray-600 hover:bg-gray-100"
                    }
                  `}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* CONTENT */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">
              Content
            </label>
            <textarea
              className="
                w-full min-h-[180px] rounded-lg border border-gray-300
                px-3 py-2 text-sm
                focus:outline-none focus:ring-2 focus:ring-blue-600
                disabled:opacity-60
              "
              placeholder="Write your blog content here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              disabled={mutation.isPending}
            />
          </div>

          {/* SUBMIT */}
          <Button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold"
            disabled={mutation.isPending}
            onClick={() =>
              mutation.mutate({
                title,
                description,
                content,
                category,
                coverImage:
                  coverImage ||
                  "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg",
                date: new Date().toISOString(),
              })
            }
          >
            {mutation.isPending ? "Publishing..." : "Publish Blog"}
          </Button>
        </div>
      </div>
    </div>
  )
}
