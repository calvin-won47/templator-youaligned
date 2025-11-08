
const videos = [
  {
    id: 1,
    title: "30-Minute Vinyasa Flow",
    views: "125K",
    duration: "30:15",
    thumbnail: "https://picsum.photos/400/225?random=10",
    alt: "Yoga instructor demonstrating vinyasa flow"
  },
  {
    id: 2,
    title: "Morning Meditation for Clarity",
    views: "89K",
    duration: "15:42",
    thumbnail: "https://picsum.photos/400/225?random=11",
    alt: "Peaceful meditation scene"
  },
  {
    id: 3,
    title: "Yoga for Back Pain Relief",
    views: "210K",
    duration: "25:30",
    thumbnail: "https://picsum.photos/400/225?random=12",
    alt: "Yoga poses for back pain"
  },
  {
    id: 4,
    title: "Breathwork for Anxiety",
    views: "76K",
    duration: "18:20",
    thumbnail: "https://picsum.photos/400/225?random=13",
    alt: "Person practicing breathing exercises"
  }
]

export default function PopularVideos() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold text-center mb-12">Popular Videos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map(video => (
            <div key={video.id} className="group">
              <div className="relative overflow-hidden rounded-lg mb-3">
                <img 
                  src={video.thumbnail} 
                  alt={video.alt}
                  className="w-full h-auto group-hover:scale-105 transition duration-500"
                />
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                  {video.duration}
                </div>
              </div>
              <h3 className="font-serif font-bold text-lg mb-1 group-hover:text-accent transition">
                {video.title}
              </h3>
              <p className="text-gray-600 text-sm">{video.views} views</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="border border-primary text-primary px-6 py-3 rounded font-medium hover:bg-primary hover:text-white transition">
            View All Videos
          </button>
        </div>
      </div>
    </section>
  )
}
  