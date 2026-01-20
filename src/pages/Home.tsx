import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import BlogLayout from "@/components/layout/BlogLayout"
import BlogList from "@/components/blog/BlogList"
import BlogDetails from "@/components/blog/BlogDetails"
import { useQuery } from "@tanstack/react-query"
import { getBlogs } from "@/lib/api"

export default function Home() {
  const { data } = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  })

  if (!data) return null

  return (
    <>
      <Navbar />

      <BlogLayout
        sidebar={<BlogList />}
        content={<BlogDetails blog={data[0]} />}
      />

      <Footer />
    </>
  )
}
