
import Hero from '../components/Hero'
import FeaturedPosts from '../components/FeaturedPosts'
import Categories from '../components/Categories'
import PopularVideos from '../components/PopularVideos'

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedPosts />
      <Categories />
      <PopularVideos />
    </div>
  )
}
  