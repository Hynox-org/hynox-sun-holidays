"use client"

import { Users, Backpack, Heart, Mountain, Zap } from "lucide-react"

const categories = [
  {
    id: "family",
    name: "Family Tours",
    icon: Users,
    description: "Comfortable vacations for all ages",
    color: "bg-blue-500",
  },
  {
    id: "school",
    name: "School/College Trips",
    icon: Backpack,
    description: "Educational + fun group packages",
    color: "bg-purple-500",
  },
  {
    id: "honeymoon",
    name: "Honeymoon Specials",
    icon: Heart,
    description: "Romantic getaways",
    color: "bg-red-500",
  },
  {
    id: "adventure",
    name: "Adventure Tours",
    icon: Mountain,
    description: "Trekking & exploring",
    color: "bg-green-500",
  },
  {
    id: "pilgrimage",
    name: "Pilgrimage Tours",
    icon: Zap,
    description: "Spiritual journeys",
    color: "bg-orange-500",
  },
]

export default function TourCategories({
  selectedCategory,
  onSelectCategory,
}: {
  selectedCategory: string | null
  onSelectCategory: (category: string) => void
}) {
  return (
    <section className="w-full bg-gradient-to-b from-black to-gray-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-4 text-center">Choose Your Travel Type</h2>
        <p className="text-gray-400 text-center mb-12 text-lg">Select a category to see personalized tour options</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {categories.map((category) => {
            const Icon = category.icon
            const isSelected = selectedCategory === category.id

            return (
              <button
                key={category.id}
                onClick={() => onSelectCategory(category.id)}
                className={`p-6 rounded-xl text-center transition-all duration-300 group transform hover:scale-105 ${
                  isSelected
                    ? "bg-yellow-400 text-black shadow-lg ring-4 ring-yellow-600"
                    : "bg-gray-800 text-white hover:bg-gray-700"
                }`}
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${isSelected ? "bg-black/20" : "bg-gray-700 group-hover:bg-gray-600"} mb-4 transition`}
                >
                  <Icon className={`w-8 h-8 ${isSelected ? "text-black" : "text-yellow-400"}`} />
                </div>

                <h3 className="font-bold text-lg mb-2">{category.name}</h3>
                <p className={`text-sm ${isSelected ? "text-black/70" : "text-gray-400"}`}>{category.description}</p>
              </button>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            {selectedCategory
              ? "Scroll down to see tours tailored to your selected category"
              : "Select a category above to explore curated tour packages"}
          </p>
        </div>
      </div>
    </section>
  )
}
