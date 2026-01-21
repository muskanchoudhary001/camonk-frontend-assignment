import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { getBlogsById } from "@/lib/api"
import BlogDetails from "@/components/blog/BlogDetails"
import BlogNotFound from "@/components/blog/BlogNotFound"
import ErrorState from "@/components/common/Errorstate"

export default function BlogPage() {
  const { id } = useParams()

  const {
    data: blog,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["blog", id],
    queryFn: () => getBlogsById(Number(id!)),
    enabled: !!id,
  })

  if (isLoading) {
    return <p className="text-center pt-20">Loading...</p>
  }

  // 🔴 API / server / network issue
  if (isError) {
    return (
      <ErrorState
        title="Server Error"
        message="Unable to load the blog. Please try again later."
      />
    )
  }

  // 🟡 Blog ID does not exist
  if (!blog) {
    return <BlogNotFound />
  }

  return (
    <main className="min-h-screen bg-muted/30 pt-20 px-4">
      <div className="max-w-5xl mx-auto py-10">
        <BlogDetails blog={blog} />
      </div>
    </main>
  )
}
