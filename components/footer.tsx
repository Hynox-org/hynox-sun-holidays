import Link from "next/link"
import { Instagram, Facebook, Youtube, MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-12 px-4 border-t-4 border-yellow-400">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-yellow-400 mb-4">Sun Holidays</h3>
            <p className="text-gray-300">
              Your trusted partner for unforgettable travel experiences across South India.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/#home" className="hover:text-yellow-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#packages" className="hover:text-yellow-400 transition">
                  Packages
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-yellow-400 transition">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-yellow-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="tel:+918807001442" className="hover:text-yellow-400 transition">
                  +91 88070 01442
                </a>
              </li>
              <li>
                <a href="mailto:info@sunholidays.in" className="hover:text-yellow-400 transition">
                  info@sunholidays.in
                </a>
              </li>
              <li>V. Pudur, Thoothukudi - 628905</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-yellow-400 transition">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-yellow-400 transition">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-yellow-400 transition">
                <Youtube size={24} />
              </a>
              <a href="https://wa.me/918807001442" className="hover:text-yellow-400 transition">
                <MessageCircle size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Sun Holidays. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
