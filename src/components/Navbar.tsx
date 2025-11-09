
import { Link } from 'react-router-dom'
import { Menu, Search, User } from 'lucide-react'
import { useConfig } from '../contexts/ConfigContext'

export default function Navbar() {
  const config = useConfig()
  const brand = config?.siteIdentity?.name || 'YouAligned'
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-serif font-bold text-primary">
          {brand}
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-accent transition">Home</Link>
          <Link to="/articles" className="hover:text-accent transition">Articles</Link>
          <Link to="/videos" className="hover:text-accent transition">Videos</Link>
          <Link to="/about" className="hover:text-accent transition">About</Link>
          <Link to="/blog" className="hover:text-accent transition">Blog</Link>
        </nav>

        <div className="flex items-center space-x-4">
          <button className="p-2 hover:text-accent transition">
            <Search size={20} />
          </button>
          <button className="p-2 hover:text-accent transition">
            <User size={20} />
          </button>
          <button className="md:hidden p-2 hover:text-accent transition">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>
  )
}
  