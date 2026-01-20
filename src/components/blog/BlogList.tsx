import { useQuery } from "@tanstack/react-query"
import { getBlogs } from "@/lib/api"
import BlogCard from "./BlogCard"

export default function BlogList() {
  const { data } = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  })

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Latest Articles</h2>
      {data?.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  )
}
