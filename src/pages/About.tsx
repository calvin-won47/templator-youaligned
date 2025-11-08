
export default function About() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-serif font-bold mb-8 text-center">About YouAligned</h1>
          
          <div className="mb-12">
            <img 
              src="https://picsum.photos/1200/600?random=28" 
              alt="Team practicing yoga together" 
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          
          <div className="prose max-w-none">
            <h2 className="font-serif font-bold text-2xl mb-4">Our Mission</h2>
            <p className="mb-6">
              YouAligned was founded in 2015 with a simple mission: to make yoga, wellness and conscious living 
              accessible to everyone. We believe that when you align your body, mind and spirit, you create 
              harmony in your life and in the world around you.
            </p>
            
            <h2 className="font-serif font-bold text-2xl mb-4">Our Story</h2>
            <p className="mb-6">
              What started as a small blog sharing yoga tips has grown into a thriving community of over 
              500,000 monthly readers. Our team of certified yoga instructors, wellness experts and writers 
              are passionate about sharing their knowledge to help you live your best life.
            </p>
            
            <h2 className="font-serif font-bold text-2xl mb-4">Our Values</h2>
            <ul className="mb-6 list-disc pl-6">
              <li className="mb-2">Accessibility - Making wellness practices available to all</li>
              <li className="mb-2">Authenticity - Sharing real, practical advice</li>
              <li className="mb-2">Community - Building connections between like-minded people</li>
              <li className="mb-2">Sustainability - Promoting eco-conscious living</li>
              <li>Compassion - For ourselves, others and the planet</li>
            </ul>
            
            <h2 className="font-serif font-bold text-2xl mb-4">Meet the Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <img 
                  src="https://picsum.photos/300/300?random=29" 
                  alt="Sarah Johnson - Founder" 
                  className="w-full h-auto rounded-full mb-4 mx-auto max-w-[200px]"
                />
                <h3 className="font-serif font-bold text-xl">Sarah Johnson</h3>
                <p className="text-accent mb-2">Founder & Lead Instructor</p>
                <p className="text-sm">500RYT, Yoga Therapist</p>
              </div>
              <div className="text-center">
                <img 
                  src="https://picsum.photos/300/300?random=30" 
                  alt="Michael Chen - Editor" 
                  className="w-full h-auto rounded-full mb-4 mx-auto max-w-[200px]"
                />
                <h3 className="font-serif font-bold text-xl">Michael Chen</h3>
                <p className="text-accent mb-2">Editor & Wellness Coach</p>
                <p className="text-sm">Nutrition Specialist</p>
              </div>
              <div className="text-center">
                <img 
                  src="https://picsum.photos/300/300?random=31" 
                  alt="Priya Patel - Content Creator" 
                  className="w-full h-auto rounded-full mb-4 mx-auto max-w-[200px]"
                />
                <h3 className="font-serif font-bold text-xl">Priya Patel</h3>
                <p className="text-accent mb-2">Content Creator</p>
                <p className="text-sm">Meditation Teacher</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
  