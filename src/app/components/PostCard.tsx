import Link from "next/link";
import { Post } from "@/types/blog";

export default function PostCard({ article }: { article: Post }) {
  return (
    <article className="border rounded-md p-4 hover:shadow-md transition-shadow bg-white">
      <h2 className="text-lg font-semibold">
        <Link href={`/pages/posts/${article.id}`}>{article.title}</Link>
      </h2>
      <p className="mt-2 text-sm text-gray-600">
        {article.body.slice(0, 100)}...
      </p>
      <div className="text-xs text-gray-500 mt-2">User #{article.userId}</div>
    </article>
  );
}
