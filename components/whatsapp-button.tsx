"use client"

import { MessageCircle } from "lucide-react"

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918807001442"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110 z-40 flex items-center justify-center animate-bounce"
      title="Chat on WhatsApp"
    >
      <MessageCircle size={32} />
    </a>
  )
}
