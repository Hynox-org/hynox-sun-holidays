"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-black text-white border-b-4 border-yellow-400">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mockup%204-Recovered-m1JFA1eKcI2b2u0aotEvwcjkrWGOWJ.jpg"
            alt="Sun Holidays Logo"
            width={150}
            height={60}
            className="h-14 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/#home" className="hover:text-yellow-400 transition">
            Home
          </Link>
          <Link href="/#packages" className="hover:text-yellow-400 transition">
            Packages
          </Link>
          <Link href="/gallery" className="hover:text-yellow-400 transition">
            Gallery
          </Link>
          <Link href="/contact" className="hover:text-yellow-400 transition">
            Contact
          </Link>
          <a
            href="https://wa.me/918807001442"
            className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
          >
            WhatsApp
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black border-t border-yellow-400 p-4 space-y-3">
          <Link href="/#home" className="block hover:text-yellow-400 transition">
            Home
          </Link>
          <Link href="/#packages" className="block hover:text-yellow-400 transition">
            Packages
          </Link>
          <Link href="/gallery" className="block hover:text-yellow-400 transition">
            Gallery
          </Link>
          <Link href="/contact" className="block hover:text-yellow-400 transition">
            Contact
          </Link>
          <a
            href="https://wa.me/918807001442"
            className="block bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold text-center"
          >
            WhatsApp
          </a>
        </div>
      )}
    </header>
  )
}
