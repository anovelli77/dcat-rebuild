import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-white mb-8">About DCAT</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-slate-700 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-orange-400 mb-4">Our History</h2>
          <p className="text-white text-sm leading-relaxed mb-4">
            The Development Center for Appropriate Technology (DCAT) was founded with the mission to enhance the health
            of our planet and communities through sustainable construction and development practices.
          </p>
          <p className="text-white text-sm leading-relaxed">
            We believe that appropriate technology must be connected to the place, resources, economics, culture and
            impacts of its use. Our work spans decades of research, development, and implementation of sustainable
            building practices.
          </p>
        </div>

        <div className="bg-slate-700 rounded-lg p-6">
          <Image
            src="/placeholder.svg?height=200&width=300"
            alt="DCAT Team"
            width={300}
            height={200}
            className="w-full rounded mb-4"
          />
          <h3 className="text-lg font-semibold text-orange-400 mb-2">Our Approach</h3>
          <p className="text-white text-sm">
            Through leadership, strategic relationships, and education, we work to create lasting change in how
            communities approach construction and development.
          </p>
        </div>
      </div>

      <div className="mt-8 bg-slate-700 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-orange-400 mb-4">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Sustainability</h3>
            <p className="text-white text-sm">
              We prioritize long-term environmental health in all our projects and recommendations.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Community</h3>
            <p className="text-white text-sm">
              Local communities are at the center of our approach to appropriate technology.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Education</h3>
            <p className="text-white text-sm">
              Knowledge sharing and capacity building are fundamental to our mission.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
