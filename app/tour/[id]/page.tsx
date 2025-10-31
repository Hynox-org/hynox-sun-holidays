"use client"

import Link from "next/link"
import { ChevronLeft, MapPin, Clock, Users, Star, Check } from "lucide-react"

const tourDetails: Record<string, any> = {
  "1": {
    id: 1,
    title: "Madurai – Kodaikanal Family Trip",
    region: "Tamil Nadu",
    description: "Experience the spiritual charm and mountain beauty of South India with your family.",
    fullDescription:
      "This 4-day family trip combines the spiritual heritage of Madurai with the serene mountain beauty of Kodaikanal. Perfect for all ages, experience ancient temples, pristine lakes, and local culture in a comfortable and well-organized itinerary.",
    price: "₹12,999",
    pricePerPerson: "₹3,250",
    duration: "4 Days / 3 Nights",
    groupSize: "4-20 people",
    rating: 4.8,
    reviews: 145,
    highlights: [
      "Visit the magnificent Meenakshi Temple",
      "Explore Kodaikanal Lake and surrounding attractions",
      "Experience local markets and culture",
      "Comfortable accommodation with family-friendly amenities",
      "Guided tours and transportation included",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Madurai",
        description: "Arrive at Madurai, check into hotel, explore Meenakshi Temple, evening market walk.",
      },
      {
        day: "Day 2",
        title: "Madurai City Tour",
        description: "Full day exploring temples, local markets, shopping at Arokiasamy Silk House.",
      },
      {
        day: "Day 3",
        title: "Journey to Kodaikanal",
        description: "Drive to Kodaikanal (3 hours), settle in, evening visit to Kodaikanal Lake.",
      },
      {
        day: "Day 4",
        title: "Kodaikanal Exploration & Return",
        description: "Visit botanical gardens, waterfalls, and return to starting point.",
      },
    ],
    inclusions: [
      "Accommodation in 3-star hotels",
      "Daily breakfast and dinner",
      "All transportation",
      "Guided tours",
      "Entry fees to attractions",
    ],
    exclusions: ["Flights", "Personal expenses", "Meals not mentioned"],
    image: "url(/placeholder.svg?height=600&width=1200&query=madurai+kodaikanal+family)",
  },
  "2": {
    id: 2,
    title: "Ooty Weekend Package",
    region: "Tamil Nadu",
    description: "Perfect getaway for families and couples.",
    fullDescription:
      "Escape to the scenic hill station of Ooty for a perfect weekend. Enjoy tea gardens, botanical gardens, and breathtaking mountain views in just 3 days.",
    price: "₹8,999",
    pricePerPerson: "₹2,250",
    duration: "3 Days / 2 Nights",
    groupSize: "2-15 people",
    rating: 4.7,
    reviews: 234,
    highlights: [
      "Visit sprawling tea gardens",
      "Explore the famous Botanical Gardens",
      "Toy train ride experience",
      "Mountain lake views",
      "Local cuisine tasting",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival & Exploration",
        description: "Arrive at Ooty, check-in, visit Botanical Gardens.",
      },
      {
        day: "Day 2",
        title: "Tea Garden Tour",
        description: "Full day in tea plantations, toy train ride, sunset viewpoint.",
      },
      {
        day: "Day 3",
        title: "Departure",
        description: "Breakfast, souvenir shopping, return to starting point.",
      },
    ],
    inclusions: ["Accommodation", "Breakfast and dinner", "Transportation", "Activity passes"],
    exclusions: ["Flights", "Personal expenses"],
    image: "url(/placeholder.svg?height=600&width=1200&query=ooty+nilgiris+tea+gardens)",
  },
}

export default function TourDetail({ params }: { params: { id: string } }) {
  const tour = tourDetails[params.id]

  if (!tour) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-black mb-4">Tour not found</h1>
          <Link href="/" className="text-yellow-400 hover:text-yellow-500">
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-black text-white px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <Link href="/" className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 mb-6 w-fit">
            <ChevronLeft className="w-5 h-5" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold mb-4">{tour.title}</h1>
          <div className="flex flex-wrap gap-6 text-gray-300">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-yellow-400" />
              <span>{tour.region}</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400" />
              <span>
                {tour.rating} ({tour.reviews} reviews)
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="h-96 bg-cover bg-center relative" style={{ backgroundImage: tour.image }}>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-black mb-4">Overview</h2>
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">{tour.fullDescription}</p>

            <h3 className="text-2xl font-bold text-black mb-6">Highlights</h3>
            <ul className="space-y-3 mb-12">
              {tour.highlights.map((highlight: string, idx: number) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{highlight}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-bold text-black mb-6">Itinerary</h3>
            <div className="space-y-6">
              {tour.itinerary.map((item: any, idx: number) => (
                <div key={idx} className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="font-bold text-lg text-black mb-2">
                    {item.day} - {item.title}
                  </h4>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-8 mt-12">
              <div>
                <h4 className="font-bold text-black mb-4">Inclusions</h4>
                <ul className="space-y-2">
                  {tour.inclusions.map((item: string, idx: number) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-black mb-4">Exclusions</h4>
                <ul className="space-y-2">
                  {tour.exclusions.map((item: string, idx: number) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-xl p-8 sticky top-8">
              <div className="mb-6">
                <p className="text-gray-600 text-sm mb-2">Starting from</p>
                <p className="text-4xl font-bold text-black">{tour.price}</p>
                <p className="text-gray-600 text-sm">{tour.pricePerPerson} per person</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-yellow-400" />
                  <span className="text-gray-700">{tour.duration}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-yellow-400" />
                  <span className="text-gray-700">{tour.groupSize}</span>
                </div>
              </div>

              <a
                href={`https://wa.me/918807001442?text=Hi+Sun+Holidays,+I'm+interested+in+your+${encodeURIComponent(
                  tour.title,
                )}+package.`}
                className="w-full bg-yellow-400 text-black font-bold py-4 rounded-lg hover:bg-yellow-500 transition text-center block mb-4"
              >
                Enquire Now
              </a>

              <button className="w-full bg-black text-white font-bold py-4 rounded-lg hover:bg-gray-800 transition">
                Download Itinerary
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
