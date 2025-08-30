// pages/index.tsx
import { GetServerSideProps } from "next";
import { fetchPosts } from "../utils/api";
import PostCard from "../components/PostCard";
import Pagination from "../components/Pagination";
import { useRouter } from "next/router";
import { Post } from "@/types/blog";
 
const PAGE_SIZE = 10;

interface HomeProps {
  initialPosts: Post[];
  initialTotal: number;
  page: number;
}

export default function Home({ initialPosts, initialTotal, page }: HomeProps) {
  const router = useRouter();

  const onPage = (p: number) => {
    router.push(`/?page=${p}`, undefined, { shallow: false });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Posts</h1>
      <div className="grid gap-4">
        {initialPosts.map((post: Post) => (
          <PostCard key={post.id} article={post} />
        ))}
      </div>

      <Pagination page={page} total={initialTotal} pageSize={PAGE_SIZE} onPage={onPage} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async (ctx) => {
  const page = Number(ctx.query.page || 1);
  try {
    const data = await fetchPosts(PAGE_SIZE, page);
    return {
      props: {
        initialPosts: data.posts,
        initialTotal: data.total,
        page,
      },
    };
  } catch (err) {
    console.error("Error fetching posts:", err);
    return { props: { initialPosts: [], initialTotal: 0, page } };
  }
};