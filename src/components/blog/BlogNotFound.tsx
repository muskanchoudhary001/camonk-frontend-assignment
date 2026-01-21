import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export default function BlogNotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h2 className="text-3xl font-semibold mb-2">
        Blog not found 📝
      </h2>

      <p className="text-muted-foreground max-w-md mb-6">
        The blog you’re trying to read doesn’t exist or may have been removed.
      </p>

      <Link to="/">
        <Button variant="outline">Back to Blogs</Button>
      </Link>
    </div>
  )
}
