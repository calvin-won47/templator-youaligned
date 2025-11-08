
export default function Footer() {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">YouAligned</h3>
            <p className="text-sm">Yoga, wellness and conscious living inspiration.</p>
          </div>
          <div>
            <h4 className="font-serif font-bold mb-4">Explore</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-accent transition">Home</a></li>
              <li><a href="#" className="hover:text-accent transition">Articles</a></li>
              <li><a href="#" className="hover:text-accent transition">Videos</a></li>
              <li><a href="#" className="hover:text-accent transition">About</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif font-bold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-accent transition">Instagram</a></li>
              <li><a href="#" className="hover:text-accent transition">Facebook</a></li>
              <li><a href="#" className="hover:text-accent transition">Pinterest</a></li>
              <li><a href="#" className="hover:text-accent transition">YouTube</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif font-bold mb-4">Subscribe</h4>
            <p className="text-sm mb-4">Get the latest updates and inspiration.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 w-full rounded-l focus:outline-none text-gray-800"
              />
              <button className="bg-accent text-primary px-4 py-2 rounded-r font-medium">
                Join
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-center">
          <p>© {new Date().getFullYear()} YouAligned. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
  