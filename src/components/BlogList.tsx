import { useQuery } from "@tanstack/react-query"
import { getBlogs } from "@/lib/api"
import BlogCard from "./BlogCard"

export default function BlogList({
  onSelect,
}: {
  onSelect: (id: number) => void
}) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  })

  if (isLoading) return <p>Loading blogs...</p>
  if (isError) return <p>Failed to load blogs</p>

  return (
    <div className="space-y-_toggle-3">
      {data!.map((blog) => (
        <BlogCard key={blog.id} blog={blog} onClick={onSelect} />
      ))}
    </div>
  )
}
