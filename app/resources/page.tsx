import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function ResourcesPage() {
  const resourceCategories = [
    {
      title: "Construction Guides",
      description: "Detailed guides for sustainable building practices",
      resources: [
        "Adobe Construction Manual",
        "Straw Bale Building Guide",
        "Rammed Earth Techniques",
        "Natural Plaster Applications",
      ],
    },
    {
      title: "Energy Systems",
      description: "Resources for renewable energy implementation",
      resources: ["Solar Panel Installation", "Wind Power Systems", "Micro-Hydro Projects", "Energy Efficiency Audits"],
    },
    {
      title: "Water Management",
      description: "Sustainable water use and conservation",
      resources: ["Rainwater Harvesting", "Greywater Systems", "Well Construction", "Water Purification Methods"],
    },
    {
      title: "Waste Management",
      description: "Appropriate waste treatment solutions",
      resources: ["Composting Toilets", "Biogas Systems", "Recycling Programs", "Waste Reduction Strategies"],
    },
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-white mb-8">Resources</h1>

      <p className="text-white mb-8">
        Access our comprehensive library of resources on appropriate technology, sustainable construction, and community
        development.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {resourceCategories.map((category, index) => (
          <Card key={index} className="bg-slate-700 border-slate-600">
            <CardHeader>
              <CardTitle className="text-orange-400">{category.title}</CardTitle>
              <CardDescription className="text-slate-300">{category.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {category.resources.map((resource, resourceIndex) => (
                  <li key={resourceIndex}>
                    <Link href="#" className="text-white hover:text-orange-300 transition-colors text-sm">
                      • {resource}
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 bg-slate-700 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-orange-400 mb-4">Recent Uploads</h2>
        <div className="space-y-3">
          <div className="border-b border-slate-600 pb-2">
            <h3 className="text-white font-semibold">Updated Solar Installation Guide</h3>
            <p className="text-slate-300 text-sm">Latest techniques and safety protocols - Updated March 2024</p>
          </div>
          <div className="border-b border-slate-600 pb-2">
            <h3 className="text-white font-semibold">Water Harvesting Case Study</h3>
            <p className="text-slate-300 text-sm">Successful implementation in rural Arizona - February 2024</p>
          </div>
          <div>
            <h3 className="text-white font-semibold">Sustainable Materials Report</h3>
            <p className="text-slate-300 text-sm">Analysis of locally-sourced building materials - January 2024</p>
          </div>
        </div>
      </div>
    </div>
  )
}
