import { useState } from "react"
import BlogLayout from "@/components/layout/BlogLayout"
import BlogList from "@/components/blog/BlogList"
import BlogDetails from "@/components/blog/BlogDetails"
import { useQuery } from "@tanstack/react-query"
import { getBlogs } from "@/lib/api"
import type { Blog } from "@/types/blog"

export default function Home() {
  const { data } = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  })

  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null)

  if (!data) return null

  return (
    <>
      <BlogLayout
        sidebar={
          <BlogList
            blogs={data}
            onSelect={setSelectedBlog}
            selectedId={selectedBlog?.id}
          />
        }
        content={
          <BlogDetails blog={selectedBlog ?? data[0]} />
        }
      />
    </>
  )
}
