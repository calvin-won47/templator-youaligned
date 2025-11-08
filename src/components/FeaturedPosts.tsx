
import { Link } from 'react-router-dom'

const featuredPosts = [
  {
    id: 1,
    title: "Morning Yoga Routine for Beginners",
    excerpt: "Start your day with this gentle 20-minute yoga sequence perfect for beginners.",
    category: "Yoga",
    date: "May 15, 2023",
    image: "https://picsum.photos/800/500?random=1",
    alt: "Woman doing yoga on the beach at sunrise"
  },
  {
    id: 2,
    title: "5 Essential Oils for Stress Relief",
    excerpt: "Discover the best essential oils to help you relax and reduce stress.",
    category: "Wellness",
    date: "May 10, 2023",
    image: "https://picsum.photos/800/500?random=2",
    alt: "Essential oil bottles with diffuser"
  },
  {
    id: 3,
    title: "Meditation Techniques for Better Sleep",
    excerpt: "Learn simple meditation practices to improve your sleep quality.",
    category: "Meditation",
    date: "May 5, 2023",
    image: "https://picsum.photos/800/500?random=3",
    alt: "Person meditating in peaceful setting"
  }
]

export default function FeaturedPosts() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold text-center mb-12">Featured Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPosts.map(post => (
            <div key={post.id} className="bg-secondary rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <img 
                src={post.image} 
                alt={post.alt} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-sm text-accent font-medium">{post.category}</span>
                <h3 className="text-xl font-serif font-bold my-2">
                  <Link to={`/articles/${post.id}`} className="hover:text-accent transition">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <Link 
                    to={`/articles/${post.id}`} 
                    className="text-primary hover:text-accent transition font-medium"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
  