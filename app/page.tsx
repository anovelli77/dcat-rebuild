import Image from "next/image"

export default function HomePage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* Welcome Section */}
      <div className="lg:col-span-1">
        <div className="bg-slate-700 rounded-lg overflow-hidden">
          <div className="relative h-48">
            <Image src="/placeholder.svg?height=200&width=300" alt="Welcome to DCAT" fill className="object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-white text-center">
                <h2 className="text-xl font-bold mb-2">Welcome to DCAT...</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 bg-slate-700 rounded-lg p-4">
          <Image
            src="/placeholder.svg?height=120&width=200"
            alt="DCAT Building"
            width={200}
            height={120}
            className="w-full rounded"
          />
        </div>

        <div className="mt-4 bg-slate-700 rounded-lg p-4">
          <Image
            src="/placeholder.svg?height=80&width=200"
            alt="DCAT Work"
            width={200}
            height={80}
            className="w-full rounded"
          />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="lg:col-span-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Mission Statement */}
          <div className="bg-slate-600 rounded-lg p-6">
            <div className="text-orange-400 text-sm font-bold mb-4 transform -rotate-90 origin-left absolute">
              MISSION
            </div>
            <div className="ml-8">
              <div className="relative mb-4">
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  alt="Sustainable Construction"
                  width={150}
                  height={150}
                  className="rounded-full mx-auto"
                />
              </div>
              <p className="text-white text-sm leading-relaxed">
                <strong>
                  DCAT works to enhance the health of the planet and our communities by providing leadership,
                  sustainable construction and development through leadership, strategic relationships, and education.
                </strong>
              </p>
              <p className="text-white text-sm mt-4">
                Welcome to our new website! We hope your visit helps connect you with the people, projects, and
                resources you seek on the path to sustainability.
              </p>
            </div>
          </div>

          {/* Technology Section */}
          <div className="bg-slate-600 rounded-lg p-6">
            <div className="text-orange-400 text-sm font-bold mb-4 transform -rotate-90 origin-left absolute">
              APPROPRIATE TECHNOLOGY
            </div>
            <div className="ml-8">
              <div className="relative mb-4">
                <Image
                  src="/placeholder.svg?height=150&width=200"
                  alt="Appropriate Technology"
                  width={200}
                  height={150}
                  className="rounded mx-auto"
                />
              </div>
              <p className="text-white text-sm leading-relaxed">
                Appropriate technology must be connected to the place, resources, economics, culture and impacts of its
                use.
              </p>
            </div>
          </div>

          {/* Partnership Section */}
          <div className="md:col-span-2 bg-slate-600 rounded-lg p-6">
            <div className="text-orange-400 text-sm font-bold mb-4 transform -rotate-90 origin-left absolute">
              PARTNERSHIP
            </div>
            <div className="ml-8 flex items-center space-x-6">
              <div className="flex-1">
                <Image
                  src="/placeholder.svg?height=120&width=200"
                  alt="Partnership"
                  width={200}
                  height={120}
                  className="rounded"
                />
              </div>
              <div className="flex-1">
                <p className="text-white text-sm">
                  <strong>Powells.com</strong> and <strong>DCAT</strong> benefits as a partner!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Announcements */}
        <div className="mt-6 bg-slate-700 rounded-lg p-4">
          <p className="text-orange-400 text-sm">See our Announcements section for recent uploads and reports!</p>
        </div>
      </div>
    </div>
  )
}
