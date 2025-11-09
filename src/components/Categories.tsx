
import { Link } from 'react-router-dom'
import { useConfig } from '../contexts/ConfigContext'

export default function Categories() {
  const config = useConfig()
  const section = config?.homepage?.sections?.categories
  const title = section?.title || 'Browse Categories'
  const items = Array.isArray(section?.items) && section!.items.length > 0
    ? section!.items
    : [
      { name: 'Yoga', slug: 'yoga', count: 42, image: 'https://picsum.photos/400/300?random=4' },
      { name: 'Meditation', slug: 'meditation', count: 28, image: 'https://picsum.photos/400/300?random=5' },
      { name: 'Wellness', slug: 'wellness', count: 35, image: 'https://picsum.photos/400/300?random=6' },
      { name: 'Nutrition', slug: 'nutrition', count: 19, image: 'https://picsum.photos/400/300?random=7' },
      { name: 'Mindfulness', slug: 'mindfulness', count: 23, image: 'https://picsum.photos/400/300?random=8' },
      { name: 'Lifestyle', slug: 'lifestyle', count: 31, image: 'https://picsum.photos/400/300?random=9' }
    ]
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold text-center mb-12">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((category: any, index: number) => (
            <Link 
              key={index} 
              to={`/category/${(category.slug || category.name || '').toLowerCase()}`}
              className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition"
            >
              <img 
                src={category.image} 
                alt={`${category.name} category`}
                className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-2xl font-serif font-bold">{category.name}</h3>
                  {category.count ? (
                    <p className="text-sm">{category.count} Articles</p>
                  ) : null}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
  