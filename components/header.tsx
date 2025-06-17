import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-slate-700 border-b border-slate-600">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center space-x-4">
            <div className="text-orange-400 font-serif text-2xl">DCAT</div>
            <div className="text-white text-sm uppercase tracking-wide">
              Development Center for Appropriate Technology
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="text-white text-xs">
              <div>P.O. Box 27513</div>
              <div>Tucson, AZ</div>
              <div>520-624-6628</div>
            </div>
            <Button className="bg-slate-600 hover:bg-slate-500 text-white px-6">DONATE →</Button>
          </div>
        </div>
      </div>
    </header>
  )
}
