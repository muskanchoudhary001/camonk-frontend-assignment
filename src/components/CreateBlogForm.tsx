import { useState } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createBlog } from "@/lib/api"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function CreateBlogForm() {
    const qc = useQueryClient()

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [content, setContent] = useState("")

    const mutation = useMutation({
        mutationFn: createBlog,
        onSuccess: () => {
            qc.invalidateQueries({ queryKey: ["blogs"] })
            setTitle("")
            setDescription("")
            setContent("")
        },
    })

    return (
        <div className="space-y-4">
            <Input
                placeholder="Blog title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <Input
                placeholder="Short description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <Input
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />

            <Button
                onClick={() =>
                    mutation.mutate({
                        title,
                        description,
                        content,
                        category: ["TECH"],
                        coverImage:
                            "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg",
                        date: new Date().toISOString(),
                    })
                }
                disabled={mutation.isPending}
            >
                {mutation.isPending ? "Adding..." : "Add Blog"}
            </Button>
        </div>
    )
}
