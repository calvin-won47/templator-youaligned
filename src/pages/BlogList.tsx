import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchBlogPosts, type BlogListItem } from '../lib/strapi'

function formatDate(value: string | null): string {
  if (!value) return ''
  const iso = String(value)
  const datePart = iso.includes('T') ? iso.split('T')[0] : iso.slice(0, 10)
  return datePart
}

export default function BlogList() {
  const [posts, setPosts] = useState<BlogListItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let mounted = true
    fetchBlogPosts()
      .then((data) => {
        if (mounted) setPosts(data)
      })
      .catch((e: any) => {
        if (mounted) setError(e?.message || 'Error loading posts')
      })
      .finally(() => {
        if (mounted) setLoading(false)
      })
    return () => {
      mounted = false
    }
  }, [])

  if (loading) return <p className="py-12 text-center">Loading...</p>
  if (error) return <p className="py-12 text-center text-red-600">{error}</p>

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-serif font-bold mb-8">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="bg-secondary rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              {post.coverImageUrl && (
                <img
                  src={post.coverImageUrl}
                  alt={post.title || 'Blog cover'}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-6">
                <h2 className="text-xl font-serif font-bold mb-2">
                  <Link to={`/blog/${post.slug}`} className="hover:text-accent transition">
                    {post.title}
                  </Link>
                </h2>
                <small className="text-sm text-gray-500">{formatDate(post.createdAt)}</small>
                {post.excerpt && (
                  <p className="text-gray-600 mt-3">{post.excerpt}</p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}