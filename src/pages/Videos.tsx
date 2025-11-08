
import VideoList from '../components/VideoList'

export default function Videos() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-serif font-bold mb-8">All Videos</h1>
        <VideoList />
      </div>
    </div>
  )
}
  