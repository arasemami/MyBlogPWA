import { create } from "zustand"
import { persist } from "zustand/middleware"

type Article = {
  id: number
  title: string
  body: string
}

type State = {
  posts: Article[]
  page: number
  total: number
  pageSize: number
  setPosts: (p: Article[], total?: number) => void
  setPage: (p: number) => void
  clear: () => void
}

export const usePostsStore = create<State>()(
  persist(
    (set) => ({
      posts: [],
      page: 1,
      total: 0,
      pageSize: 10,
      setPosts: (posts, total = 0) => set({ posts, total }),
      setPage: (page) => set({ page }),
      clear: () => set({ posts: [], page: 1, total: 0 }),
    }),
    {
      name: "posts-storage", 
    }
  )
)
