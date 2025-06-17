import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function SupportPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-white mb-8">Support DCAT</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-slate-700 border-slate-600">
          <CardHeader>
            <CardTitle className="text-orange-400">Make a Donation</CardTitle>
            <CardDescription className="text-slate-300">
              Your financial support helps us continue our mission of promoting appropriate technology.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-white text-sm mb-4">
              Donations support our research, education programs, and community outreach efforts.
            </p>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">Donate Now</Button>
          </CardContent>
        </Card>

        <Card className="bg-slate-700 border-slate-600">
          <CardHeader>
            <CardTitle className="text-orange-400">Volunteer</CardTitle>
            <CardDescription className="text-slate-300">
              Join our community of volunteers working on sustainable technology projects.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-white text-sm mb-4">
              We welcome volunteers with various skills including construction, research, and education.
            </p>
            <Button
              variant="outline"
              className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white"
            >
              Learn More
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 bg-slate-700 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-orange-400 mb-4">Other Ways to Support</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Spread the Word</h3>
            <p className="text-white text-sm">
              Share our mission with your network and help us reach more communities in need of appropriate technology
              solutions.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Partner with Us</h3>
            <p className="text-white text-sm">
              Organizations and businesses can partner with DCAT to implement sustainable technology projects.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Educational Institutions</h3>
            <p className="text-white text-sm">
              Schools and universities can collaborate with us on research projects and educational programs.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
