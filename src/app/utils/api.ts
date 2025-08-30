 import axios from "axios";
import { Post, Comment, CreatePostData, UpdatePostData } from "@/types/blog";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL;

export const api = axios.create({
  baseURL: API_BASE,
  headers: { "Content-Type": "application/json" },
});

// Fetch posts with pagination
export async function fetchPosts(limit = 10, page = 1): Promise<{ posts: Post[], total: number }> {
  const res = await api.get("/posts", { params: { _limit: limit, _page: page } });
 
  const total = Number(res.headers["x-total-count"] || 100); // fake total
  return { posts: res.data, total };
}

// Single post
export async function fetchPost(id: string | number): Promise<Post> {
  const res = await api.get(`/posts/${id}`);
  return res.data;
}

// Comments for a post
export async function fetchComments(postId: string | number): Promise<Comment[]> {
  const res = await api.get(`/posts/${postId}/comments`);
  return res.data;
}

// Optional CRUD (will fake responses, doesn't persist on server)
export async function createPost(payload: CreatePostData): Promise<Post> {
  const res = await api.post("/posts", payload);
  return res.data;
}

export async function updatePost(id: number, payload: UpdatePostData): Promise<Post> {
  const res = await api.put(`/posts/${id}`, payload);
  return res.data;
}

export async function deletePost(id: number): Promise<void> {
  const res = await api.delete(`/posts/${id}`);
  return res.data;
}