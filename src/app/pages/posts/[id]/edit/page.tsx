// src/app/pages/posts/[id]/edit/page.tsx
import { notFound } from "next/navigation"
import { Post } from "@/types/blog"

interface EditPostPageProps {
  params: Promise<{ id: string }>
}

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL as string

async function getPost(id: string): Promise<Post | null> {
  const res = await fetch(`${API_BASE}/posts/${id}`)
  if (!res.ok) return null
  return res.json()
}

export default async function EditPostPage({ params }: EditPostPageProps) {
  const { id: postId } = await params
  
  const post = await getPost(postId)
  if (!post) return notFound()
  
  return (
    <form className="space-y-4 max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Edit Post</h1>
      <div>
        <label className="block font-medium mb-1">Title</label>
        <input
          type="text"
          defaultValue={post.title}
          className="w-full border p-2 rounded"
        />
      </div>
      <div>
        <label className="block font-medium mb-1">Body</label>
        <textarea
          defaultValue={post.body}
          className="w-full border p-2 rounded"
          rows={5}
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Update Post
      </button>
    </form>
  )
}