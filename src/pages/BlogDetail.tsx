import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { fetchBlogBySlug, type BlogDetailItem } from '../lib/strapi'

function formatDate(value: string | null): string {
  if (!value) return ''
  const iso = String(value)
  const datePart = iso.includes('T') ? iso.split('T')[0] : iso.slice(0, 10)
  return datePart
}

export default function BlogDetail() {
  const { slug } = useParams()
  const [post, setPost] = useState<BlogDetailItem | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let mounted = true
    if (!slug) {
      setError('Invalid blog slug')
      setLoading(false)
      return
    }
    fetchBlogBySlug(slug)
      .then((data) => {
        if (mounted) setPost(data)
      })
      .catch((e: any) => {
        if (mounted) setError(e?.message || 'Error loading blog')
      })
      .finally(() => {
        if (mounted) setLoading(false)
      })
    return () => {
      mounted = false
    }
  }, [slug])

  if (loading) return <p className="py-12 text-center">Loading...</p>
  if (error) return <p className="py-12 text-center text-red-600">{error}</p>
  if (!post) return <p className="py-12 text-center">Not found</p>

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="mb-6">
          <Link to="/blog" className="text-primary hover:text-accent">← Back to Blog</Link>
        </div>
        <article className="prose max-w-none">
          <h1 className="font-serif font-bold">{post.title}</h1>
          <small className="text-sm text-gray-500">{formatDate(post.createdAt)}</small>
          <div className="mt-6">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.contentMarkdown}</ReactMarkdown>
          </div>
        </article>
      </div>
    </div>
  )
}