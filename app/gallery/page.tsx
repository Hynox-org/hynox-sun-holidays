"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, Maximize2 } from "lucide-react"

const galleryData = [
  {
    id: 1,
    title: "Kodaikanal Lakes",
    region: "Tamil Nadu",
    image: "url(/placeholder.svg?height=500&width=500&query=kodaikanal+lakes+scenic)",
    category: "nature",
  },
  {
    id: 2,
    title: "Munnar Tea Plantations",
    region: "Kerala",
    image: "url(/placeholder.svg?height=500&width=500&query=munnar+tea+gardens)",
    category: "nature",
  },
  {
    id: 3,
    title: "Alleppey Backwaters",
    region: "Kerala",
    image: "url(/placeholder.svg?height=500&width=500&query=alleppey+backwaters+houseboat)",
    category: "adventure",
  },
  {
    id: 4,
    title: "Mysore Palace",
    region: "Karnataka",
    image: "url(/placeholder.svg?height=500&width=500&query=mysore+palace+architecture)",
    category: "heritage",
  },
  {
    id: 5,
    title: "Marina Beach",
    region: "Tamil Nadu",
    image: "url(/placeholder.svg?height=500&width=500&query=marina+beach+sunset)",
    category: "beach",
  },
  {
    id: 6,
    title: "Wayanad Waterfalls",
    region: "Kerala",
    image: "url(/placeholder.svg?height=500&width=500&query=wayanad+waterfalls+jungle)",
    category: "adventure",
  },
  {
    id: 7,
    title: "Coorg Coffee Estate",
    region: "Karnataka",
    image: "url(/placeholder.svg?height=500&width=500&query=coorg+coffee+plantation)",
    category: "nature",
  },
  {
    id: 8,
    title: "Jog Falls",
    region: "Karnataka",
    image: "url(/placeholder.svg?height=500&width=500&query=jog+falls+waterfall)",
    category: "adventure",
  },
  {
    id: 9,
    title: "Ooty Botanical Gardens",
    region: "Tamil Nadu",
    image: "url(/placeholder.svg?height=500&width=500&query=ooty+botanical+gardens)",
    category: "nature",
  },
  {
    id: 10,
    title: "Kochi Chinese Fishing Nets",
    region: "Kerala",
    image: "url(/placeholder.svg?height=500&width=500&query=kochi+chinese+fishing+nets)",
    category: "heritage",
  },
  {
    id: 11,
    title: "Rameswaram Temple",
    region: "Tamil Nadu",
    image: "url(/placeholder.svg?height=500&width=500&query=rameswaram+temple+beach)",
    category: "heritage",
  },
  {
    id: 12,
    title: "Chikmagalur Hills",
    region: "Karnataka",
    image: "url(/placeholder.svg?height=500&width=500&query=chikmagalur+hills+sunset)",
    category: "nature",
  },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<(typeof galleryData)[0] | null>(null)
  const [filter, setFilter] = useState<string | null>(null)

  const categories = ["nature", "adventure", "heritage", "beach"]
  const filteredGallery = filter ? galleryData.filter((item) => item.category === filter) : galleryData

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-black text-white px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 mb-6 w-fit">
            <ChevronLeft className="w-5 h-5" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold mb-2">Gallery</h1>
          <p className="text-gray-300">Explore the stunning destinations across South India</p>
        </div>
      </div>

      <div className="bg-gray-50 px-4 py-8 border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setFilter(null)}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                filter === null ? "bg-yellow-400 text-black" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full font-medium transition-all capitalize ${
                  filter === cat ? "bg-yellow-400 text-black" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative h-80 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div
                className="h-full w-full bg-cover bg-center group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundImage: item.image }}
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-bold">{item.title}</h3>
                <p className="text-gray-200 text-sm">{item.region}</p>
              </div>
              <div className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full transition opacity-0 group-hover:opacity-100">
                <Maximize2 className="w-5 h-5 text-black" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-yellow-400 transition"
          >
            <span className="text-3xl font-bold">×</span>
          </button>
          <div className="max-w-4xl w-full">
            <div
              className="w-full h-96 md:h-[500px] bg-cover bg-center rounded-xl"
              style={{ backgroundImage: selectedImage.image }}
            />
            <div className="mt-6 text-white text-center">
              <h2 className="text-3xl font-bold mb-2">{selectedImage.title}</h2>
              <p className="text-gray-300">{selectedImage.region}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
