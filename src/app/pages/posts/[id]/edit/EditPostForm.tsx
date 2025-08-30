"use client"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Post } from "@/types/blog"

interface EditPostFormProps {
  postId: string
}

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL as string

export default function EditPostForm({ postId }: EditPostFormProps) {
  const router = useRouter()
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [loading, setLoading] = useState(false)
  const [loadingPost, setLoadingPost] = useState(true)

  useEffect(() => {
    async function fetchPost() {
      try {
        const res = await fetch(`${API_BASE}/posts/${postId}`)
        if (!res.ok) throw new Error("Post not found")
        const data: Post = await res.json()
        setTitle(data.title)
        setBody(data.body)
      } catch (err) {
        console.error("Error fetching post:", err)
        alert("Post not found")
        router.push("/")
      } finally {
        setLoadingPost(false)
      }
    }
    fetchPost()
  }, [postId, router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch(`${API_BASE}/posts/${postId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, body }),
      })
      router.push(`/pages/posts/${postId}`)
    } catch (err) {
      console.error("Error updating post:", err)
      alert("Failed to update post")
    } finally {
      setLoading(false)
    }
  }

  if (loadingPost) return <p className="p-6">Loading post...</p>

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Edit Post</h1>
      <div>
        <label className="block font-medium mb-1">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
      </div>
      <div>
        <label className="block font-medium mb-1">Body</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="w-full border p-2 rounded"
          rows={5}
          required
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50"
        disabled={loading}
      >
        {loading ? "Updating..." : "Update Post"}
      </button>
    </form>
  )
}