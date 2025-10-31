"use client"

import { useState } from "react"
import { Heart, Users, Clock, Star } from "lucide-react"

const tourData: Record<string, any[]> = {
  "tamil-nadu": [
    {
      id: 1,
      title: "Madurai – Kodaikanal Family Trip",
      description: "Experience the spiritual charm and mountain beauty",
      itinerary: ["Madurai Temple", "Kodaikanal Lakes", "Local Markets"],
      image: "url(/placeholder.svg?height=400&width=600&query=madurai+temple+kodaikanal)",
      price: "₹12,999",
      duration: "4 Days",
      groupSize: "4-20",
      rating: 4.8,
      reviews: 145,
      category: "family",
    },
    {
      id: 2,
      title: "Ooty Weekend Package",
      description: "Perfect getaway for families and couples",
      itinerary: ["Tea Gardens", "Botanical Gardens", "Mountain Views"],
      image: "url(/placeholder.svg?height=400&width=600&query=ooty+nilgiris+tea+gardens)",
      price: "₹8,999",
      duration: "3 Days",
      groupSize: "2-15",
      rating: 4.7,
      reviews: 234,
      category: "honeymoon",
    },
    {
      id: 3,
      title: "Rameswaram Pilgrimage Tour",
      description: "Sacred spiritual journey to holy shores",
      itinerary: ["Ramanathaswamy Temple", "Beach Visit", "Local Culture"],
      image: "url(/placeholder.svg?height=400&width=600&query=rameswaram+temple+beach)",
      price: "₹9,499",
      duration: "3 Days",
      groupSize: "5-25",
      rating: 4.9,
      reviews: 189,
      category: "pilgrimage",
    },
    {
      id: 4,
      title: "Chennai City Highlights",
      description: "Explore the cultural capital of South India",
      itinerary: ["Marina Beach", "Historical Sites", "Art Museums"],
      image: "url(/placeholder.svg?height=400&width=600&query=marina+beach+chennai)",
      price: "₹7,499",
      duration: "2 Days",
      groupSize: "3-20",
      rating: 4.6,
      reviews: 156,
      category: "school",
    },
  ],
  kerala: [
    {
      id: 5,
      title: "Munnar Hill Station Escape",
      description: "Tea gardens and mountain serenity",
      itinerary: ["Tea Plantations", "Mountain Trek", "Sunset Views"],
      image: "url(/placeholder.svg?height=400&width=600&query=munnar+tea+plantations)",
      price: "₹13,999",
      duration: "4 Days",
      groupSize: "4-18",
      rating: 4.9,
      reviews: 267,
      category: "adventure",
    },
    {
      id: 6,
      title: "Alleppey Backwater Cruise",
      description: "Traditional houseboat experience",
      itinerary: ["Houseboat Ride", "Coconut Lagoon", "Local Villages"],
      image: "url(/placeholder.svg?height=400&width=600&query=alleppey+backwaters+houseboat)",
      price: "₹15,499",
      duration: "2 Days",
      groupSize: "2-10",
      rating: 5.0,
      reviews: 312,
      category: "honeymoon",
    },
    {
      id: 7,
      title: "Kochi Cultural Tour",
      description: "Heritage and spice markets",
      itinerary: ["Chinese Fishing Nets", "Fort Kochi", "Spice Markets"],
      image: "url(/placeholder.svg?height=400&width=600&query=kochi+chinese+fishing+nets)",
      price: "₹10,999",
      duration: "3 Days",
      groupSize: "4-20",
      rating: 4.7,
      reviews: 203,
      category: "school",
    },
    {
      id: 8,
      title: "Wayanad Adventure Trek",
      description: "Explore misty mountains and wildlife",
      itinerary: ["Jungle Trek", "Waterfalls", "Local Cuisine"],
      image: "url(/placeholder.svg?height=400&width=600&query=wayanad+waterfalls+jungle)",
      price: "₹11,999",
      duration: "3 Days",
      groupSize: "5-16",
      rating: 4.8,
      reviews: 178,
      category: "adventure",
    },
  ],
  karnataka: [
    {
      id: 9,
      title: "Coorg Coffee Plantation Stay",
      description: "Luxury among coffee estates",
      itinerary: ["Coffee Farm Tour", "Abbey Falls", "Local Meals"],
      image: "url(/placeholder.svg?height=400&width=600&query=coorg+coffee+plantation)",
      price: "₹14,999",
      duration: "3 Days",
      groupSize: "2-12",
      rating: 4.9,
      reviews: 289,
      category: "honeymoon",
    },
    {
      id: 10,
      title: "Mysore Palace Heritage Tour",
      description: "Royal history and architecture",
      itinerary: ["Mysore Palace", "Chamundi Hill", "Silk Weaving"],
      image: "url(/placeholder.svg?height=400&width=600&query=mysore+palace+heritage)",
      price: "₹9,999",
      duration: "2 Days",
      groupSize: "4-30",
      rating: 4.6,
      reviews: 224,
      category: "school",
    },
    {
      id: 11,
      title: "Chikmagalur Hill Station",
      description: "Coffee, hills, and adventure",
      itinerary: ["Coffee Estates", "Baba Budan Giri", "Peak Trek"],
      image: "url(/placeholder.svg?height=400&width=600&query=chikmagalur+hills)",
      price: "₹11,499",
      duration: "3 Days",
      groupSize: "5-20",
      rating: 4.7,
      reviews: 195,
      category: "adventure",
    },
    {
      id: 12,
      title: "Jog Falls Waterfall Tour",
      description: "Nature's magnificent cascade",
      itinerary: ["Jog Falls", "Trek Views", "Photography Spots"],
      image: "url(/placeholder.svg?height=400&width=600&query=jog+falls+waterfall)",
      price: "₹8,499",
      duration: "2 Days",
      groupSize: "3-25",
      rating: 4.8,
      reviews: 167,
      category: "family",
    },
  ],
  family: [
    {
      id: 1,
      title: "Madurai – Kodaikanal Family Trip",
      description: "Experience the spiritual charm and mountain beauty",
      itinerary: ["Madurai Temple", "Kodaikanal Lakes", "Local Markets"],
      image: "url(/placeholder.svg?height=400&width=600&query=madurai+temple+kodaikanal)",
      price: "₹12,999",
      duration: "4 Days",
      groupSize: "4-20",
      rating: 4.8,
      reviews: 145,
      category: "family",
    },
    {
      id: 12,
      title: "Jog Falls Waterfall Tour",
      description: "Nature's magnificent cascade",
      itinerary: ["Jog Falls", "Trek Views", "Photography Spots"],
      image: "url(/placeholder.svg?height=400&width=600&query=jog+falls+waterfall)",
      price: "₹8,499",
      duration: "2 Days",
      groupSize: "3-25",
      rating: 4.8,
      reviews: 167,
      category: "family",
    },
  ],
  school: [
    {
      id: 4,
      title: "Chennai City Highlights",
      description: "Explore the cultural capital of South India",
      itinerary: ["Marina Beach", "Historical Sites", "Art Museums"],
      image: "url(/placeholder.svg?height=400&width=600&query=marina+beach+chennai)",
      price: "₹7,499",
      duration: "2 Days",
      groupSize: "3-20",
      rating: 4.6,
      reviews: 156,
      category: "school",
    },
    {
      id: 7,
      title: "Kochi Cultural Tour",
      description: "Heritage and spice markets",
      itinerary: ["Chinese Fishing Nets", "Fort Kochi", "Spice Markets"],
      image: "url(/placeholder.svg?height=400&width=600&query=kochi+chinese+fishing+nets)",
      price: "₹10,999",
      duration: "3 Days",
      groupSize: "4-20",
      rating: 4.7,
      reviews: 203,
      category: "school",
    },
    {
      id: 10,
      title: "Mysore Palace Heritage Tour",
      description: "Royal history and architecture",
      itinerary: ["Mysore Palace", "Chamundi Hill", "Silk Weaving"],
      image: "url(/placeholder.svg?height=400&width=600&query=mysore+palace+heritage)",
      price: "₹9,999",
      duration: "2 Days",
      groupSize: "4-30",
      rating: 4.6,
      reviews: 224,
      category: "school",
    },
  ],
  honeymoon: [
    {
      id: 2,
      title: "Ooty Weekend Package",
      description: "Perfect getaway for families and couples",
      itinerary: ["Tea Gardens", "Botanical Gardens", "Mountain Views"],
      image: "url(/placeholder.svg?height=400&width=600&query=ooty+nilgiris+tea+gardens)",
      price: "₹8,999",
      duration: "3 Days",
      groupSize: "2-15",
      rating: 4.7,
      reviews: 234,
      category: "honeymoon",
    },
    {
      id: 6,
      title: "Alleppey Backwater Cruise",
      description: "Traditional houseboat experience",
      itinerary: ["Houseboat Ride", "Coconut Lagoon", "Local Villages"],
      image: "url(/placeholder.svg?height=400&width=600&query=alleppey+backwaters+houseboat)",
      price: "₹15,499",
      duration: "2 Days",
      groupSize: "2-10",
      rating: 5.0,
      reviews: 312,
      category: "honeymoon",
    },
    {
      id: 9,
      title: "Coorg Coffee Plantation Stay",
      description: "Luxury among coffee estates",
      itinerary: ["Coffee Farm Tour", "Abbey Falls", "Local Meals"],
      image: "url(/placeholder.svg?height=400&width=600&query=coorg+coffee+plantation)",
      price: "₹14,999",
      duration: "3 Days",
      groupSize: "2-12",
      rating: 4.9,
      reviews: 289,
      category: "honeymoon",
    },
  ],
  adventure: [
    {
      id: 5,
      title: "Munnar Hill Station Escape",
      description: "Tea gardens and mountain serenity",
      itinerary: ["Tea Plantations", "Mountain Trek", "Sunset Views"],
      image: "url(/placeholder.svg?height=400&width=600&query=munnar+tea+plantations)",
      price: "₹13,999",
      duration: "4 Days",
      groupSize: "4-18",
      rating: 4.9,
      reviews: 267,
      category: "adventure",
    },
    {
      id: 8,
      title: "Wayanad Adventure Trek",
      description: "Explore misty mountains and wildlife",
      itinerary: ["Jungle Trek", "Waterfalls", "Local Cuisine"],
      image: "url(/placeholder.svg?height=400&width=600&query=wayanad+waterfalls+jungle)",
      price: "₹11,999",
      duration: "3 Days",
      groupSize: "5-16",
      rating: 4.8,
      reviews: 178,
      category: "adventure",
    },
    {
      id: 11,
      title: "Chikmagalur Hill Station",
      description: "Coffee, hills, and adventure",
      itinerary: ["Coffee Estates", "Baba Budan Giri", "Peak Trek"],
      image: "url(/placeholder.svg?height=400&width=600&query=chikmagalur+hills)",
      price: "₹11,499",
      duration: "3 Days",
      groupSize: "5-20",
      rating: 4.7,
      reviews: 195,
      category: "adventure",
    },
  ],
  pilgrimage: [
    {
      id: 3,
      title: "Rameswaram Pilgrimage Tour",
      description: "Sacred spiritual journey to holy shores",
      itinerary: ["Ramanathaswamy Temple", "Beach Visit", "Local Culture"],
      image: "url(/placeholder.svg?height=400&width=600&query=rameswaram+temple+beach)",
      price: "₹9,499",
      duration: "3 Days",
      groupSize: "5-25",
      rating: 4.9,
      reviews: 189,
      category: "pilgrimage",
    },
  ],
}

export default function TourPackages({
  region,
  isCategory = false,
}: {
  region: string
  isCategory?: boolean
}) {
  const packages = tourData[region] || []
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null)
  const [wishlist, setWishlist] = useState<Set<number>>(new Set())

  const categories = ["family", "adventure", "school", "honeymoon", "pilgrimage"]
  const filteredPackages = selectedFilter ? packages.filter((pkg) => pkg.category === selectedFilter) : packages

  const toggleWishlist = (id: number) => {
    const newWishlist = new Set(wishlist)
    if (newWishlist.has(id)) {
      newWishlist.delete(id)
    } else {
      newWishlist.add(id)
    }
    setWishlist(newWishlist)
  }

  if (packages.length === 0) return null

  return (
    <section id="packages" className={`w-full ${isCategory ? "bg-gray-50" : "bg-white"} py-16 px-4`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-black mb-2 text-center">
          {isCategory ? "Featured Tours" : "Available Tour Packages"}
        </h2>
        <p className="text-gray-600 text-center mb-12">Browse our curated collection of premium experiences</p>

        {!isCategory && (
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <button
              onClick={() => setSelectedFilter(null)}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                selectedFilter === null ? "bg-yellow-400 text-black" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              All Tours
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-4 py-2 rounded-full font-medium transition-all capitalize ${
                  selectedFilter === cat ? "bg-yellow-400 text-black" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPackages.map((tour) => (
            <div
              key={tour.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col"
            >
              <div className="relative overflow-hidden h-48">
                <div
                  className="h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundImage: tour.image }}
                />
                <div className="absolute top-2 right-2 bg-yellow-400 text-black px-3 py-1 rounded-full font-bold text-sm flex items-center gap-1">
                  <Star className="w-4 h-4 fill-black" />
                  {tour.rating}
                </div>
                <button
                  onClick={() => toggleWishlist(tour.id)}
                  className="absolute top-2 left-2 bg-white/90 hover:bg-white p-2 rounded-full transition"
                >
                  <Heart
                    className={`w-5 h-5 transition ${
                      wishlist.has(tour.id) ? "fill-red-500 text-red-500" : "text-gray-400"
                    }`}
                  />
                </button>
              </div>

              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-lg font-bold text-black mb-2 line-clamp-2">{tour.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{tour.description}</p>

                <div className="grid grid-cols-3 gap-2 mb-4 text-xs text-gray-700">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-yellow-400" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-yellow-400" />
                    <span>{tour.groupSize}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs">({tour.reviews} reviews)</span>
                  </div>
                </div>

                <ul className="text-xs text-gray-700 mb-6 space-y-1 flex-grow">
                  {tour.itinerary.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-yellow-400 rounded-full flex-shrink-0"></span>
                      <span className="line-clamp-1">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between gap-2">
                  <span className="text-xl font-bold text-black">{tour.price}</span>
                  <a
                    href={`https://wa.me/918807001442?text=Hi+Sun+Holidays,+I'm+interested+in+your+${encodeURIComponent(
                      tour.title,
                    )}+package.`}
                    className="flex-1 bg-yellow-400 text-black font-bold py-2 rounded-lg hover:bg-yellow-500 transition text-center text-sm"
                  >
                    Enquire
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredPackages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No tours found in this category. Try another filter!</p>
          </div>
        )}
      </div>
    </section>
  )
}
