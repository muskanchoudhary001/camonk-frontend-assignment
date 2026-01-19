import type { Blog } from "@/types/blog"
import { Card, CardContent } from "@/components/ui/card"


export default function BlogCard({
    blog,
    onClick,
}: {
    blog: Blog
    onClick: (id: number) => void
}) {
    return (
        <Card
            className="cursor-pointer hover:shadow-md"
            onClick={() => onClick(blog.id)}
        >
            <CardContent className="p-4 space-y-2">
                <div className="text-xs text-muted-foreground">
                    {blog.category.join(",")}
                </div>
                <h3 className="font-semibold">{blog.title}</h3>
                <p className="text-sm text-muted-foreground">{blog.description}</p>
            </CardContent>
        </Card>
    )
}
