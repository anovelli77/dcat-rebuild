import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function CurrentWorkPage() {
  const projects = [
    {
      title: "Rural Arizona Solar Initiative",
      status: "Active",
      description: "Installing solar power systems in remote communities across Arizona",
      location: "Arizona, USA",
      startDate: "January 2024",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Sustainable Housing Project",
      status: "Planning",
      description: "Developing affordable housing using local materials and appropriate technology",
      location: "Tucson, AZ",
      startDate: "March 2024",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Water Harvesting Network",
      status: "Active",
      description: "Implementing rainwater harvesting systems in drought-affected areas",
      location: "Southwest USA",
      startDate: "October 2023",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Educational Outreach Program",
      status: "Ongoing",
      description: "Training local communities in sustainable construction techniques",
      location: "Multiple Locations",
      startDate: "Ongoing",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-500"
      case "Planning":
        return "bg-yellow-500"
      case "Ongoing":
        return "bg-blue-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-white mb-8">Current Work</h1>

      <p className="text-white mb-8">
        Explore our ongoing projects and initiatives in sustainable technology and community development.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="bg-slate-700 border-slate-600">
            <CardHeader>
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <div className="flex items-center justify-between">
                <CardTitle className="text-orange-400">{project.title}</CardTitle>
                <Badge className={`${getStatusColor(project.status)} text-white`}>{project.status}</Badge>
              </div>
              <CardDescription className="text-slate-300">{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-400">Location:</span>
                  <span className="text-white">{project.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Started:</span>
                  <span className="text-white">{project.startDate}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 bg-slate-700 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-orange-400 mb-4">Get Involved</h2>
        <p className="text-white text-sm mb-4">
          Interested in participating in our current projects? We welcome volunteers, partners, and supporters.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h3 className="text-white font-semibold mb-2">Volunteer</h3>
            <p className="text-slate-300 text-sm">
              Join our project teams and contribute your skills to meaningful work.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">Partner</h3>
            <p className="text-slate-300 text-sm">Organizations can collaborate with us on project implementation.</p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">Support</h3>
            <p className="text-slate-300 text-sm">Financial support helps us expand our project reach and impact.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
