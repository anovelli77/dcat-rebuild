"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Support DCAT", href: "/support" },
  { name: "DCAT Store", href: "/store" },
  { name: "Resources", href: "/resources" },
  { name: "Current Work", href: "/current-work" },
]

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="bg-slate-600 border-b border-slate-500">
      <div className="container mx-auto px-4">
        <div className="flex space-x-8 py-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm transition-colors ${
                pathname === item.href ? "text-orange-300" : "text-white hover:text-orange-300"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
