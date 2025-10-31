"use client"

const regions = [
  {
    id: "tamil-nadu",
    name: "Tamil Nadu",
    description: "Beaches, temples & culture",
    image: "url(/placeholder.svg?height=400&width=600&query=kodaikanal+mountains+tamil+nadu)",
  },
  {
    id: "kerala",
    name: "Kerala",
    description: "Backwaters & hill stations",
    image: "url(/placeholder.svg?height=400&width=600&query=munnar+backwaters+kerala)",
  },
  {
    id: "karnataka",
    name: "Karnataka",
    description: "Heritage & waterfalls",
    image: "url(/placeholder.svg?height=400&width=600&query=coorg+mysore+waterfalls)",
  },
]

export default function RegionSelector({
  selectedRegion,
  onSelectRegion,
}: {
  selectedRegion: string | null
  onSelectRegion: (region: string) => void
}) {
  return (
    <section id="regions" className="w-full bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-black mb-4 text-center">Choose Your Destination</h2>
        <p className="text-gray-600 text-center mb-12 text-lg">Select a region to explore our premium tour packages</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {regions.map((region) => (
            <button
              key={region.id}
              onClick={() => onSelectRegion(region.id)}
              className={`group relative h-96 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl ${
                selectedRegion === region.id ? "ring-4 ring-yellow-400" : ""
              }`}
            >
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: region.image }} />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition"></div>

              <div className="relative h-full flex flex-col items-center justify-center text-white p-6 text-center">
                <h3 className="text-3xl font-bold mb-2">{region.name}</h3>
                <p className="text-lg text-gray-100">{region.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
