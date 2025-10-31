"use client"

import { useState } from "react"
import Image from "next/image"
import {
  MessageCircle,
  Menu,
  X,
  Heart,
  Star,
  Users,
  MapPin,
  Calendar,
  ChevronDown,
  Send,
  Mail,
  Phone,
  Clock,
} from "lucide-react"

export default function Home() {
  const [selectedRegion, setSelectedRegion] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const [filter, setFilter] = useState(null)
  const [wishlist, setWishlist] = useState(new Set())
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" })

  const whatsappNumber = "918807001442"
  const baseMessage =
    "Hi Sun Holidays! I am interested in booking a tour. Can you provide more details and available packages?"

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    const msg = `Hello! I have a new inquiry:\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nSubject: ${formData.subject}\n\nMessage: ${formData.message}`
    window.open(`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(msg)}`, "_blank")
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
  }

  const regions = [
    {
      id: 1,
      name: "Tamil Nadu",
      description: "Ancient temples and scenic hill stations",
      image: "/tamil-nadu.jpg",
    },
    {
      id: 2,
      name: "Kerala",
      description: "Backwaters, beaches and spice plantations",
      image: "/kerala-landscape.png",
    },
    {
      id: 3,
      name: "Karnataka",
      description: "Coffee estates and natural waterfalls",
      image: "/karnataka.jpg",
    },
  ]

  const categories = [
    { id: 1, name: "Family", description: "Perfect for families", icon: "👨‍👩‍👧‍👦" },
    { id: 2, name: "School/College", description: "Educational trips", icon: "🎓" },
    { id: 3, name: "Honeymoon", description: "Romantic getaways", icon: "💑" },
    { id: 4, name: "Adventure", description: "Thrilling experiences", icon: "🏔️" },
    { id: 5, name: "Pilgrimage", description: "Spiritual journeys", icon: "🙏" },
  ]

  const tourPackages = [
    {
      id: 1,
      title: "Kodaikanal Romance",
      region: "Tamil Nadu",
      category: "Honeymoon",
      price: "₹25,000",
      duration: "3 Days",
      groupSize: "2-4",
      rating: 4.8,
      reviews: 156,
      image: "/kodaikanal.jpg",
      description: "Misty beauty with lakeside stays and adventures.",
    },
    {
      id: 2,
      title: "Munnar Tea Trail",
      region: "Kerala",
      category: "Family",
      price: "₹22,000",
      duration: "2 Days",
      groupSize: "4-6",
      rating: 4.7,
      reviews: 203,
      image: "/munnar.jpg",
      description: "Walk through lush tea gardens and learn the process.",
    },
    {
      id: 3,
      title: "Alleppey Backwaters",
      region: "Kerala",
      category: "Adventure",
      price: "₹18,000",
      duration: "2 Days",
      groupSize: "6-8",
      rating: 4.9,
      reviews: 298,
      image: "/alleppey.jpg",
      description: "Cruise through scenic backwaters on a houseboat.",
    },
    {
      id: 4,
      title: "Mysore Palace Tour",
      region: "Karnataka",
      category: "Pilgrimage",
      price: "₹15,000",
      duration: "1 Day",
      groupSize: "10+",
      rating: 4.6,
      reviews: 324,
      image: "/mysore.jpg",
      description: "Explore the magnificent Mysore Palace.",
    },
    {
      id: 5,
      title: "Ooty School Trip",
      region: "Tamil Nadu",
      category: "School/College",
      price: "₹12,000",
      duration: "3 Days",
      groupSize: "20+",
      rating: 4.5,
      reviews: 167,
      image: "/ooty.jpg",
      description: "Educational and fun activities in Ooty.",
    },
    {
      id: 6,
      title: "Coorg Coffee Tour",
      region: "Karnataka",
      category: "Family",
      price: "₹20,000",
      duration: "2 Days",
      groupSize: "4-6",
      rating: 4.7,
      reviews: 189,
      image: "/coorg.jpg",
      description: "Experience coffee plantation life.",
    },
    {
      id: 7,
      title: "Wayanad Adventure",
      region: "Kerala",
      category: "Adventure",
      price: "₹24,000",
      duration: "3 Days",
      groupSize: "2-4",
      rating: 4.8,
      reviews: 245,
      image: "/wayanad.jpg",
      description: "Trek through forests and waterfalls.",
    },
    {
      id: 8,
      title: "Jog Falls Trek",
      region: "Karnataka",
      category: "Adventure",
      price: "₹16,000",
      duration: "2 Days",
      groupSize: "6-8",
      rating: 4.6,
      reviews: 198,
      image: "/jog.jpg",
      description: "Experience India's second-highest waterfall.",
    },
    {
      id: 9,
      title: "Rameswaram Pilgrimage",
      region: "Tamil Nadu",
      category: "Pilgrimage",
      price: "₹14,000",
      duration: "2 Days",
      groupSize: "8-10",
      rating: 4.7,
      reviews: 312,
      image: "/rameswaram.jpg",
      description: "Sacred pilgrimage to important temples.",
    },
    {
      id: 10,
      title: "Chikmagalur Getaway",
      region: "Karnataka",
      category: "Family",
      price: "₹19,000",
      duration: "3 Days",
      groupSize: "4-6",
      rating: 4.8,
      reviews: 276,
      image: "/chikmagalur.jpg",
      description: "Relax in serene hills with nature.",
    },
  ]

  const galleryData = [
    { id: 1, title: "Kodaikanal Lakes", region: "Tamil Nadu", image: "/kodaikanal-lakes.jpg", category: "nature" },
    { id: 2, title: "Munnar Tea", region: "Kerala", image: "/munnar-tea.jpg", category: "nature" },
    {
      id: 3,
      title: "Alleppey Backwaters",
      region: "Kerala",
      image: "/alleppey.jpg",
      category: "adventure",
    },
    { id: 4, title: "Mysore Palace", region: "Karnataka", image: "/mysore.jpg", category: "heritage" },
    { id: 5, title: "Marina Beach", region: "Tamil Nadu", image: "/tropical-beach-paradise.png", category: "beach" },
    {
      id: 6,
      title: "Wayanad Waterfalls",
      region: "Kerala",
      image: "/wayanad.jpg",
      category: "adventure",
    },
    { id: 7, title: "Coorg Coffee", region: "Karnataka", image: "/coorg.jpg", category: "nature" },
    { id: 8, title: "Jog Falls", region: "Karnataka", image: "/jog.jpg", category: "adventure" },
    { id: 9, title: "Ooty Gardens", region: "Tamil Nadu", image: "/ooty.jpg", category: "nature" },
    { id: 10, title: "Kochi Nets", region: "Kerala", image: "/kochi.jpg", category: "heritage" },
    {
      id: 11,
      title: "Rameswaram Temple",
      region: "Tamil Nadu",
      image: "/rameswaram.jpg",
      category: "heritage",
    },
    {
      id: 12,
      title: "Chikmagalur Hills",
      region: "Karnataka",
      image: "/chikmagalur.jpg",
      category: "nature",
    },
  ]

  const testimonials = [
    { name: "Rajesh Kumar", text: "Amazing experience! The team was professional and helpful.", rating: 5 },
    { name: "Priya Sharma", text: "Best honeymoon package ever. Worth every penny!", rating: 5 },
    { name: "Amit Patel", text: "Great service and unforgettable memories with family.", rating: 4 },
  ]

  const filteredGallery = filter ? galleryData.filter((item) => item.category === filter) : galleryData
  const filteredPackages = selectedRegion
    ? tourPackages.filter((pkg) => pkg.region === selectedRegion)
    : selectedCategory
      ? tourPackages.filter((pkg) => pkg.category === selectedCategory)
      : tourPackages
  const toggleWishlist = (id) => {
    const newWishlist = new Set(wishlist)
    newWishlist.has(id) ? newWishlist.delete(id) : newWishlist.add(id)
    setWishlist(newWishlist)
  }

  return (
    <main className="w-full">
      <header className="sticky top-0 z-50 bg-black text-white border-b-4 border-yellow-400">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mockup%204-Recovered-m1JFA1eKcI2b2u0aotEvwcjkrWGOWJ.jpg"
              alt="Sun Holidays"
              width={150}
              height={60}
              className="h-14 w-auto"
            />
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="hover:text-yellow-400">
              Home
            </a>
            <a href="#packages" className="hover:text-yellow-400">
              Packages
            </a>
            <a href="#gallery" className="hover:text-yellow-400">
              Gallery
            </a>
            <a href="#contact" className="hover:text-yellow-400">
              Contact
            </a>
            <button
              onClick={() =>
                window.open(
                  `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(baseMessage)}`,
                  "_blank",
                )
              }
              className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500"
            >
              WhatsApp Enquiry
            </button>
          </div>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
        {isMenuOpen && (
          <div className="md:hidden bg-black border-t border-yellow-400 p-4 space-y-3">
            <a href="#home" className="block hover:text-yellow-400">
              Home
            </a>
            <a href="#packages" className="block hover:text-yellow-400">
              Packages
            </a>
            <a href="#gallery" className="block hover:text-yellow-400">
              Gallery
            </a>
            <a href="#contact" className="block hover:text-yellow-400">
              Contact
            </a>
            <button
              onClick={() =>
                window.open(
                  `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(baseMessage)}`,
                  "_blank",
                )
              }
              className="w-full bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold"
            >
              WhatsApp Enquiry
            </button>
          </div>
        )}
      </header>

      <section
        id="home"
        className="relative h-96 md:h-screen bg-cover bg-center"
        style={{ backgroundImage: "url(/placeholder.svg?height=800&width=1200&query=travel+hero)" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Explore South India</h1>
          <p className="text-lg md:text-2xl mb-8">Discover extraordinary destinations with Sun Holidays</p>
          <button
            onClick={() => document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-500 inline-flex items-center gap-2"
          >
            <ChevronDown size={20} />
            Explore Now
          </button>
        </div>
      </section>

      <section id="regions" className="py-16 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-black mb-4 text-center">Choose Your Destination</h2>
          <p className="text-gray-600 text-center mb-12">Select a region to explore our curated tour packages</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {regions.map((region) => (
              <button
                key={region.id}
                onClick={() => {
                  setSelectedRegion(region.name)
                  setSelectedCategory(null)
                  document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" })
                }}
                className={`p-6 rounded-xl transition-all ${selectedRegion === region.name ? "bg-yellow-400 text-black shadow-xl scale-105" : "bg-gray-100 text-black hover:shadow-lg"}`}
              >
                <div
                  className="h-40 rounded-lg mb-4"
                  style={{
                    backgroundImage: `url(${region.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <h3 className="text-2xl font-bold mb-2">{region.name}</h3>
                <p>{region.description}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-black mb-4 text-center">Tour Categories</h2>
          <p className="text-gray-600 text-center mb-12">Find tours that match your interests</p>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.name)
                  setSelectedRegion(null)
                  document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" })
                }}
                className={`p-6 rounded-xl text-center transition-all ${selectedCategory === cat.name ? "bg-yellow-400 text-black shadow-xl scale-105" : "bg-white text-black hover:shadow-lg"}`}
              >
                <div className="text-4xl mb-2">{cat.icon}</div>
                <h3 className="font-bold mb-1">{cat.name}</h3>
                <p className="text-sm">{cat.description}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="packages" className="py-16 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-black mb-2 text-center">
            {selectedRegion
              ? `${selectedRegion} Packages`
              : selectedCategory
                ? `${selectedCategory} Tours`
                : "All Tour Packages"}
          </h2>
          <p className="text-gray-600 text-center mb-12">Discover amazing experiences</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all border border-gray-200 overflow-hidden"
              >
                <div
                  className="relative h-48"
                  style={{
                    backgroundImage: `url(${pkg.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <button
                    onClick={() => toggleWishlist(pkg.id)}
                    className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-yellow-400 transition"
                  >
                    <Heart size={20} className={wishlist.has(pkg.id) ? "fill-red-500 text-red-500" : "text-gray-400"} />
                  </button>
                  <div className="absolute top-4 left-4 bg-yellow-400 text-black px-3 py-1 rounded-full font-bold text-sm">
                    {pkg.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">{pkg.title}</h3>
                  <div className="flex items-center gap-1 mb-4">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={i < Math.floor(pkg.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">({pkg.reviews} reviews)</span>
                  </div>
                  <div className="space-y-2 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} /> {pkg.duration}
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={16} /> {pkg.groupSize} people
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} /> {pkg.region}
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm mb-4">{pkg.description}</p>
                  <button
                    onClick={() =>
                      window.open(
                        `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(`Tour Inquiry: ${pkg.title}\nPrice: ${pkg.price}\nDuration: ${pkg.duration}\n\nCan you provide itinerary and available dates?`)}`,
                        "_blank",
                      )
                    }
                    className="w-full bg-yellow-400 text-black font-bold py-2 rounded-lg hover:bg-yellow-500"
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-16 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-black mb-4 text-center">Photo Gallery</h2>
          <p className="text-gray-600 text-center mb-12">Experience the beauty of South India</p>
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            <button
              onClick={() => setFilter(null)}
              className={`px-4 py-2 rounded-full font-medium transition-all ${filter === null ? "bg-yellow-400 text-black" : "bg-white text-gray-700 hover:bg-gray-200"}`}
            >
              All
            </button>
            {["nature", "adventure", "heritage", "beach"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full font-medium transition-all capitalize ${filter === cat ? "bg-yellow-400 text-black" : "bg-white text-gray-700 hover:bg-gray-200"}`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="group relative h-80 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div
                  className="h-full w-full bg-cover bg-center group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundImage: `url(${item.image})` }}
                ></div>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-bold">{item.title}</h3>
                  <p className="text-gray-200 text-sm">{item.region}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-black mb-12 text-center">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-gray-50 p-8 rounded-xl shadow-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6">"{testimonial.text}"</p>
                <p className="font-bold text-black">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-black mb-12 text-center">Contact Us</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-black mb-8">Get in Touch</h3>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-yellow-400 flex-shrink-0">
                    <Phone className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-black">Phone</h4>
                    <a href="tel:+918807001442" className="text-gray-600 hover:text-yellow-400">
                      +91 88070 01442
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-yellow-400 flex-shrink-0">
                    <Mail className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-black">Email</h4>
                    <a href="mailto:info@sunholidays.in" className="text-gray-600 hover:text-yellow-400">
                      info@sunholidays.in
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-yellow-400 flex-shrink-0">
                    <MapPin className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-black">Address</h4>
                    <p className="text-gray-600">V. Pudur, Thoothukudi - 628905</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-yellow-400 flex-shrink-0">
                    <Clock className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-black">Business Hours</h4>
                    <p className="text-gray-600">Mon-Fri: 9AM-6PM, Sat: 10AM-4PM</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-black mb-8">Send us a Message</h3>
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-black mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-black mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  >
                    <option value="">Select a subject</option>
                    <option value="Package Inquiry">Package Inquiry</option>
                    <option value="Custom Trip">Custom Trip</option>
                    <option value="Group Booking">Group Booking</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-yellow-400 text-black font-bold py-4 rounded-lg hover:bg-yellow-500 transition flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-black mb-12 text-center">FAQ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h4 className="font-bold text-lg text-black mb-3">How do I book?</h4>
              <p className="text-gray-700">
                Browse packages, select a tour, click enquire, and our team gets back with details.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h4 className="font-bold text-lg text-black mb-3">Payment methods?</h4>
              <p className="text-gray-700">
                Bank transfers, online payments, and cash. Custom plans for groups available.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h4 className="font-bold text-lg text-black mb-3">Customize packages?</h4>
              <p className="text-gray-700">
                Yes, we create customized itineraries based on your requirements and budget.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h4 className="font-bold text-lg text-black mb-3">Cancellation policy?</h4>
              <p className="text-gray-700">30+ days before: full refund. Later cancellations get reduced refunds.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-12 px-4 border-t-4 border-yellow-400">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-lg mb-4">Sun Holidays</h4>
              <p className="text-gray-400">
                Your trusted partner for unforgettable travel experiences across South India.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#home" className="hover:text-yellow-400">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#packages" className="hover:text-yellow-400">
                    Packages
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="hover:text-yellow-400">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-yellow-400">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Destinations</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Tamil Nadu</li>
                <li>Kerala</li>
                <li>Karnataka</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="tel:+918807001442" className="hover:text-yellow-400">
                    +91 88070 01442
                  </a>
                </li>
                <li>
                  <a href="mailto:info@sunholidays.in" className="hover:text-yellow-400">
                    info@sunholidays.in
                  </a>
                </li>
                <li>V. Pudur, Thoothukudi</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Sun Holidays. All rights reserved.</p>
            <p className="text-sm border-t border-gray-700 pt-4 mt-4">
              Powered by <span className="text-yellow-400 font-semibold">HYNOX</span>
            </p>
          </div>
        </div>
      </footer>

      <a
        href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(baseMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110 z-40 flex items-center justify-center animate-bounce"
      >
        <MessageCircle size={32} />
      </a>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-yellow-400"
          >
            <span className="text-3xl font-bold">×</span>
          </button>
          <div className="max-w-4xl w-full">
            <div
              className="w-full h-96 md:h-[500px] bg-cover bg-center rounded-xl"
              style={{ backgroundImage: `url(${selectedImage.image})` }}
            />
            <div className="mt-6 text-white text-center">
              <h3 className="text-3xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-gray-300">{selectedImage.region}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
