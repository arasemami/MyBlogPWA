// src/app/page.tsx
import Link from "next/link"
import { Post } from "@/types/blog"

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL as string
const PAGE_SIZE = 10

async function getArticles(page: number): Promise<Post[]> {
  try {
    const res = await fetch(
      `${API_BASE}/posts?_limit=${PAGE_SIZE}&_page=${page}`,
      { cache: "no-store" }
    )
    if (!res.ok) throw new Error("Failed to fetch articles")
    return res.json()
  } catch (err) {
    console.error("Error fetching articles:", err)
    return []
  }
}

export default async function HomePage(props: { searchParams: Promise<{ page?: string }> }) {
  const searchParams = await props.searchParams
  const page = Number(searchParams?.page) || 1
  const articles = await getArticles(page)
 
  return (
    <main className="max-w-3xl mx-auto p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Blog Posts</h1>
        {/* ✅ Correct New Post Button */}
        <Link
          href="/pages/posts/new"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          + New Post
        </Link>
      </div>
 
      {articles.length === 0 ? (
        <p className="text-gray-500">⚠ No articles available right now.</p>
      ) : (
        <ul className="space-y-4">
          {articles.map((article: Post) => (
            <li
              key={article.id}
              className="border p-4 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <Link href={`/pages/posts/${article.id}`}>
                <h2 className="text-lg font-semibold hover:underline">{article.title}</h2>
              </Link>
              <p className="text-gray-600">{article.body}</p>
              <p className="text-sm text-gray-500 mt-2">
                By demo user on {new Date().toLocaleDateString()}
              </p>
            </li>
          ))}
        </ul>
      )}
 
      {/* Pagination */}
      <div className="flex justify-between mt-6">
        {page > 1 ? (
          <Link
            href={`/?page=${page - 1}`}
            className="px-4 py-2 border rounded hover:bg-gray-100"
          >
            ← Previous
          </Link>
        ) : (
          <div />
        )}
        {articles.length === PAGE_SIZE && (
          <Link
            href={`/?page=${page + 1}`}
            className="px-4 py-2 border rounded hover:bg-gray-100"
          >
            Next →
          </Link>
        )}
      </div>
    </main>
  )
}