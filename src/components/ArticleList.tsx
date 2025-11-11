
import { Link } from 'react-router-dom'
import { useConfig } from '../contexts/ConfigContext'

type ArticleItem = {
  id: number | string
  title: string
  excerpt?: string
  category?: string
  date?: string
  image?: string
  alt?: string
  linkPath?: string
}

export default function ArticleList() {
  const config = useConfig()
  const section = config?.homepage?.sections?.articleList
  const articles: ArticleItem[] = Array.isArray(section?.items) && section!.items.length > 0
    ? (section!.items as ArticleItem[])
    : [
      { id: 1, title: 'Morning Yoga Routine for Beginners', excerpt: 'Start your day with this gentle 20-minute yoga sequence perfect for beginners.', category: 'Yoga', date: 'May 15, 2023', image: 'https://picsum.photos/800/500?random=14', alt: 'Woman doing yoga on the beach at sunrise' },
      { id: 2, title: '5 Essential Oils for Stress Relief', excerpt: 'Discover the best essential oils to help you relax and reduce stress.', category: 'Wellness', date: 'May 10, 2023', image: 'https://picsum.photos/800/500?random=15', alt: 'Essential oil bottles with diffuser' },
      { id: 3, title: 'Meditation Techniques for Better Sleep', excerpt: 'Learn simple meditation practices to improve your sleep quality.', category: 'Meditation', date: 'May 5, 2023', image: 'https://picsum.photos/800/500?random=16', alt: 'Person meditating in peaceful setting' },
      { id: 4, title: 'The Benefits of Yin Yoga', excerpt: 'Explore how yin yoga can improve flexibility and reduce stress.', category: 'Yoga', date: 'April 28, 2023', image: 'https://picsum.photos/800/500?random=17', alt: 'Person in yin yoga pose' },
      { id: 5, title: 'Healthy Smoothie Recipes for Energy', excerpt: 'Try these delicious smoothie recipes to boost your energy naturally.', category: 'Nutrition', date: 'April 22, 2023', image: 'https://picsum.photos/800/500?random=18', alt: 'Colorful smoothie in glass' },
      { id: 6, title: 'Mindful Walking in Nature', excerpt: 'How to practice mindfulness while walking outdoors.', category: 'Mindfulness', date: 'April 15, 2023', image: 'https://picsum.photos/800/500?random=19', alt: 'Person walking on forest path' }
    ]
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {articles.map((article: ArticleItem) => (
        <div key={article.id} className="bg-secondary rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
          <img 
            src={article.image} 
            alt={article.alt} 
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <span className="text-sm text-accent font-medium">{article.category}</span>
            <h3 className="text-xl font-serif font-bold my-2">
              <Link to={article.linkPath || `/articles/${article.id}`} className="hover:text-accent transition">
                {article.title}
              </Link>
            </h3>
            <p className="text-gray-600 mb-4">{article.excerpt}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">{article.date}</span>
              <Link 
                to={article.linkPath || `/articles/${article.id}`} 
                className="text-primary hover:text-accent transition font-medium"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
  