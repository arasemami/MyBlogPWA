import Link from "next/link"
import { Post, Comment } from "@/types/blog"

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL as string

async function getPost(id: string): Promise<Post | null> {
  const res = await fetch(`${API_BASE}/posts/${id}`, { cache: "no-store" })
  if (!res.ok) return null
  return res.json()
}

async function getComments(id: string): Promise<Comment[]> {
  const res = await fetch(`${API_BASE}/posts/${id}/comments`, { cache: "no-store" })
  if (!res.ok) return []
  return res.json()
}

export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const post = await getPost(id)
  const comments = await getComments(id)
  
  if (!post) {
    return (
      <main className="max-w-3xl mx-auto p-6">
        <h2 className="text-xl font-bold">Post not found</h2>
        <Link href="/" className="text-blue-600 underline">
          ← Back
        </Link>
      </main>
    )
  }
  
  return (
    <main className="max-w-3xl mx-auto p-6">
      <div className="flex justify-between items-center mb-4">
        <Link href="/" className="text-blue-600 underline">
          ← Back
        </Link>
        <Link
          href={`/pages/posts/${post.id}/edit`}
          className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Edit Post
        </Link>
      </div>
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-600 mb-6">{post.body}</p>
      <section>
        <h2 className="text-xl font-semibold mb-4">Comments</h2>
        {comments.length === 0 ? (
          <p className="text-gray-500">No comments yet.</p>
        ) : (
          <ul className="space-y-3">
            {comments.map((comment: Comment) => (
              <li key={comment.id} className="border p-3 rounded">
                <p className="font-medium">{comment.name}</p>
                <p className="text-sm text-gray-500">{comment.email}</p>
                <p className="mt-1">{comment.body}</p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  )
}