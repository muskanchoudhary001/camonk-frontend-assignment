import BlogList from "@/components/BlogList"
import BlogDetails from "@/components/BlogDetails"
import { useState } from "react"

export default function Home() {
    const [selectedId, setSelectedId] = useState<number | null>(null)

    return (
        <div className="grid grod-cols-1 md:grid-cols-3 gap-4 p-6">
            <div className="md:col-span-1">
                <BlogList onSelect={setSelectedId} />
            </div>

            <div className="md:col-span-2">
                {selectedId ? (< BlogDetails blogId={selectedId} />) : (
                    <p className="text-muted-foreground">Select a blog to view details.</p>
                )}
            </div>
        </div>
    )

}