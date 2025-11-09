
import { useConfig } from '../contexts/ConfigContext'

export default function Hero() {
  const config = useConfig()
  const title = config?.hero?.title || 'Align Your Life'
  const subtitle = config?.hero?.subtitle || config?.description || 'Yoga, wellness and conscious living inspiration, tutorials and resources'
  const ctaArticles = config?.hero?.ctaArticles || 'Explore Articles'
  const ctaVideos = config?.hero?.ctaVideos || 'Watch Videos'

  return (
    <section className="relative h-96 bg-gray-100 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="container mx-auto px-4 relative z-10 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
          {title}
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-accent text-primary px-6 py-3 rounded font-medium hover:bg-opacity-90 transition">
            {ctaArticles}
          </button>
          <button className="border border-white px-6 py-3 rounded font-medium hover:bg-white hover:text-primary transition">
            {ctaVideos}
          </button>
        </div>
      </div>
    </section>
  )
}
  