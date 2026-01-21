import type { Blog } from "@/types/blog"

const BASE_URL = "http://localhost:3001"

export const getBlogs = async (): Promise<Blog[]> => {
  const res = await fetch(`${BASE_URL}/blogs`)
  if (!res.ok) {
    throw new Error("Failed to fetch blogs")
  }
  return res.json()
}

export const getBlogsById = async (id: number | string): Promise<Blog | null> => {
  const res = await fetch(`${BASE_URL}/blogs/${id}`)

  // ✅ Blog not found → NOT an error
  if (res.status === 404) {
    return null
  }

  // ❌ Server / network error
  if (!res.ok) {
    throw new Error("Server error")
  }

  return res.json()
}

export const createBlog = async (blog: Omit<Blog, "id">) => {
  const res = await fetch(`${BASE_URL}/blogs`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(blog),
  })

  if (!res.ok) {
    throw new Error("Failed to create blog")
  }

  return res.json()
}
