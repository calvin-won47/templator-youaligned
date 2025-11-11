
import { Link } from 'react-router-dom'
import { useConfig } from '../contexts/ConfigContext'

export default function Footer() {
  const config = useConfig()
  const brand = config?.siteIdentity?.name || 'YouAligned'
  const desc = config?.footer?.description || config?.slogan || 'Yoga, wellness and conscious living inspiration.'
  const subscribeText = config?.footer?.subscribeText || 'Get the latest updates and inspiration.'
  const subscribeButton = config?.footer?.subscribeButton || 'Join'
  const exploreLinks = Array.isArray(config?.footer?.exploreLinks) && config!.footer!.exploreLinks.length > 0
    ? config!.footer!.exploreLinks
    : [
      { label: 'Home', href: '/' },
      { label: 'Articles', href: '/articles' },
      { label: 'Videos', href: '/videos' },
      { label: 'About', href: '/about' },
      { label: 'Blog', href: '/blog' }
    ]
  const connectLinks = Array.isArray(config?.footer?.connectLinks) && config!.footer!.connectLinks.length > 0
    ? config!.footer!.connectLinks
    : [
      { label: 'Instagram', href: '#' },
      { label: 'Facebook', href: '#' },
      { label: 'Pinterest', href: '#' },
      { label: 'YouTube', href: '#' }
    ]

  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">{brand}</h3>
            <p className="text-sm">{desc}</p>
          </div>
          <div>
            <h4 className="font-serif font-bold mb-4">Explore</h4>
            <ul className="space-y-2">
              {exploreLinks.map((l: any, i: number) => (
                <li key={i}>
                  {String(l.href || '').startsWith('/') ? (
                    <Link to={l.href} className="hover:text-accent transition">{l.label}</Link>
                  ) : (
                    <a href={l.href || '#'} className="hover:text-accent transition" target="_blank" rel="noopener noreferrer">{l.label}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-serif font-bold mb-4">Connect</h4>
            <ul className="space-y-2">
              {connectLinks.map((l: any, i: number) => (
                <li key={i}>
                  <a href={l.href || '#'} className="hover:text-accent transition" target="_blank" rel="noopener noreferrer">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-serif font-bold mb-4">Subscribe</h4>
            <p className="text-sm mb-4">{subscribeText}</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 w-full rounded-l focus:outline-none text-gray-800"
              />
              <button className="bg-accent text-primary px-4 py-2 rounded-r font-medium">
                {subscribeButton}
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-center">
          <p>© {new Date().getFullYear()} {brand}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
  