import { useQuery } from "@tanstack/react-query"
import { getBlogsById } from "@/lib/api"

export default function BlogDetails({ blogId }: { blogId: number }) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["blog", blogId],
    queryFn: () => getBlogsById(blogId),
  })

  if (isLoading) return <p>Loading blog...</p>
  if (isError) return <p>Error loading blog</p>

  return (
    <div className="space-y-4">
      <img
        src={data!.coverImage}
        alt={data!.title}
        className="rounded-lg"
      />
      <h1 className="text-2xl font-bold">{data!.title}</h1>
      <p className="text-muted-foreground">{data!.content}</p>
    </div>
  )
}
