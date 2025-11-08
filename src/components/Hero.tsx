
export default function Hero() {
  return (
    <section className="relative h-96 bg-gray-100 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="container mx-auto px-4 relative z-10 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
          Align Your Life
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Yoga, wellness and conscious living inspiration, tutorials and resources
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-accent text-primary px-6 py-3 rounded font-medium hover:bg-opacity-90 transition">
            Explore Articles
          </button>
          <button className="border border-white px-6 py-3 rounded font-medium hover:bg-white hover:text-primary transition">
            Watch Videos
          </button>
        </div>
      </div>
    </section>
  )
}
  