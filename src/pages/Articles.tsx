
import ArticleList from '../components/ArticleList'

export default function Articles() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-serif font-bold mb-8">All Articles</h1>
        <ArticleList />
      </div>
    </div>
  )
}
  