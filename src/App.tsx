
import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useConfig } from './contexts/ConfigContext'
import Home from './pages/Home'
import Articles from './pages/Articles'
import Videos from './pages/Videos'
import About from './pages/About'
import BlogList from './pages/BlogList'
import BlogDetail from './pages/BlogDetail'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  const config = useConfig()

  useEffect(() => {
    const title = config?.seo?.title || config?.siteIdentity?.name || 'YouAligned'
    const description = config?.seo?.description || config?.description || 'Yoga, wellness and conscious living inspiration, tutorials and resources'
    document.title = title
    const meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null
    if (meta) {
      meta.content = description
    }
    const keywords = Array.isArray(config?.seo?.keywords)
      ? config!.seo!.keywords.join(', ')
      : (config?.seo_keyword || '')
    let metaKeywords = document.querySelector('meta[name="keywords"]') as HTMLMetaElement | null
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta')
      metaKeywords.name = 'keywords'
      document.head.appendChild(metaKeywords)
    }
    metaKeywords.content = keywords
  }, [config])
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
  