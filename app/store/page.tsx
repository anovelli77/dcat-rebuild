import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function StorePage() {
  const products = [
    {
      id: 1,
      name: "Sustainable Building Guide",
      description: "Comprehensive guide to sustainable construction practices",
      price: "$29.99",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 2,
      name: "Appropriate Technology Handbook",
      description: "Essential handbook for implementing appropriate technology",
      price: "$24.99",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 3,
      name: "Solar Construction Manual",
      description: "Step-by-step guide to solar installation and maintenance",
      price: "$34.99",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 4,
      name: "Water Harvesting Systems",
      description: "Design and implementation of rainwater harvesting",
      price: "$27.99",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-white mb-8">DCAT Store</h1>

      <p className="text-white mb-8">
        Browse our collection of educational materials, guides, and resources for sustainable construction and
        appropriate technology.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="bg-slate-700 border-slate-600">
            <CardHeader>
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={200}
                height={200}
                className="w-full h-48 object-cover rounded"
              />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-orange-400 mb-2">{product.name}</CardTitle>
              <CardDescription className="text-slate-300 mb-4">{product.description}</CardDescription>
              <div className="flex items-center justify-between">
                <span className="text-white font-bold text-lg">{product.price}</span>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">Add to Cart</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 bg-slate-700 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-orange-400 mb-4">Partnership with Powell's Books</h2>
        <p className="text-white text-sm">
          DCAT has partnered with Powell's Books to offer additional resources on sustainable technology and
          construction. A portion of proceeds from these sales supports DCAT's mission.
        </p>
      </div>
    </div>
  )
}
