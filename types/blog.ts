export type Blog = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  title: string
  content: string
  eyecatch?: {
    url: string
    height: number
    width: number
  }
  category?: {
    id: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    revisedAt: string
    name: string
  }
}

export type Blogs = {
  contents: Array<Blog>
  totalCount: number
  offset: number
  limit: number
}
  