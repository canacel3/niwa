import Link from 'next/link'
import { parseISO, format } from 'date-fns'
import Line from '../../components/Line'
import type { Blog } from '../../../types/blog'

type Props = {
  blogs: Array<Blog>
}

export default function BlogCards(props: Props) {
  return (
    <div>
      {props.blogs.map((blog) => (
        <Link href={`/blog/${blog.id}`} key={blog.id}>
          <article key={blog.id}>
            <time className='text-lg tracking-widest font-mono'>
              {format(parseISO(blog.publishedAt), 'yyyy.MM.dd')}
            </time>
            <div className='text-2xl font-bold'>{blog.title}</div>
          </article>
          <Line />
        </Link>
      ))}
    </div>
  )
}
