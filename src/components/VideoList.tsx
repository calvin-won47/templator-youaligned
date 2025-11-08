
const videos = [
  {
    id: 1,
    title: "30-Minute Vinyasa Flow",
    views: "125K",
    duration: "30:15",
    thumbnail: "https://picsum.photos/400/225?random=20",
    alt: "Yoga instructor demonstrating vinyasa flow"
  },
  {
    id: 2,
    title: "Morning Meditation for Clarity",
    views: "89K",
    duration: "15:42",
    thumbnail: "https://picsum.photos/400/225?random=21",
    alt: "Peaceful meditation scene"
  },
  {
    id: 3,
    title: "Yoga for Back Pain Relief",
    views: "210K",
    duration: "25:30",
    thumbnail: "https://picsum.photos/400/225?random=22",
    alt: "Yoga poses for back pain"
  },
  {
    id: 4,
    title: "Breathwork for Anxiety",
    views: "76K",
    duration: "18:20",
    thumbnail: "https://picsum.photos/400/225?random=23",
    alt: "Person practicing breathing exercises"
  },
  {
    id: 5,
    title: "Sun Salutation Tutorial",
    views: "142K",
    duration: "22:10",
    thumbnail: "https://picsum.photos/400/225?random=24",
    alt: "Demonstration of sun salutation sequence"
  },
  {
    id: 6,
    title: "Evening Yoga for Better Sleep",
    views: "98K",
    duration: "28:45",
    thumbnail: "https://picsum.photos/400/225?random=25",
    alt: "Gentle evening yoga routine"
  },
  {
    id: 7,
    title: "Prenatal Yoga First Trimester",
    views: "67K",
    duration: "35:20",
    thumbnail: "https://picsum.photos/400/225?random=26",
    alt: "Pregnant woman doing yoga"
  },
  {
    id: 8,
    title: "Chair Yoga for Seniors",
    views: "54K",
    duration: "20:15",
    thumbnail: "https://picsum.photos/400/225?random=27",
    alt: "Older adults doing chair yoga"
  }
]

export default function VideoList() {
  return (
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
  )
}
  