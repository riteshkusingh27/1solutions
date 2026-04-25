import { Link } from 'react-router-dom'
import { blogPosts } from '../data/blogPosts'

const BlogIndex = () => {
  const renderThumbnail = (post) => {
    if (post.image) {
      return <img src={post.image} alt={post.title} className="h-48 w-full bg-slate-50 object-contain" />
    }

    return (
      <div className="flex h-48 w-full items-center justify-center bg-slate-100 text-sm font-semibold text-slate-500">
        Image coming soon
      </div>
    )
  }

  return (
    <main className="bg-white pb-16 pt-10 text-slate-900">
      <section className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Blogs</p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Latest posts</h1>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link key={post.slug} to={post.slug} className="block">
              <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:shadow-lg">
                {renderThumbnail(post)}
                <div className="space-y-2 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Written by {post.author}</p>
                  <h2 className="text-lg font-bold text-slate-900">{post.title}</h2>
                  <p className="text-sm text-slate-600">Published: {post.date}</p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}

export default BlogIndex
