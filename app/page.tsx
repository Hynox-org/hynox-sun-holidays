"use client";

import { useState } from "react";
import Image from "next/image";
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
  ArrowRight,
  Check,
} from "lucide-react";

export default function Home() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{
    id: number;
    title: string;
    region: string;
    image: string;
    category: string;
  } | null>(null);
  const [wishlist, setWishlist] = useState(new Set<number>());
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const whatsappNumber = "918807001442";
  const baseMessage =
    "Hi Sun Holidays! I am interested in booking a tour. Can you provide more details and available packages?";

  interface PlanDuration {
    "2days plan"?: string[];
    "3days plan"?: string[];
  }

  interface PlansByRegion {
    Kerala: PlanDuration;
    "Tamil Nadu": PlanDuration;
    Karnataka: PlanDuration;
  }

  const keralaPlans: PlanDuration = {
    "2days plan": [
      "2days Vagamon",
      "2days Munnar",
      "Vagamon/kochi",
      "Vagamon/kochi-wonderla",
      "Vagamon/Alleppey",
      "Vagamon/varkala",
      "Munnar/kochi",
      "Marayoor/munnar",
    ],
    "3days plan": [
      "Vagamon/varkala/kochi",
      "Vagamon/varkala/Alleppey",
      "Munnar/Marayoor/kochi",
      "Vagamon/Munnar/kochi",
      "Munnar/vagamon/varkala",
      "Munnar/vagamon/Alleppey",
    ],
  };

  const tamilnaduPlans: PlanDuration = {
    "2days plan": ["2days ooty", "2days kodaikanal", "2days valaparai"],
  };

  const karnatakaPlans: PlanDuration = {
    "2days plan": [
      "2days coorg",
      "mysore/coorg",
      "coorg/chikmagalur",
      "Bangalore/mysore",
      "Bangalore/coorg",
      "Bangalore/chikmaglur",
      "Dandeli/gokarna",
      "Murdeswar/gokarna",
    ],
    "3days plan": [
      "Bangalore/mysore/coorg",
      "Wonderla/mysore/coorg",
      "Mysore/coorg/Chikmaglur",
      "2days coorg/chikmagalur",
      "dandeli/gokarna/murdeshwar",
    ],
  };

  const plansByRegion: PlansByRegion = {
    Kerala: keralaPlans,
    "Tamil Nadu": tamilnaduPlans,
    Karnataka: karnatakaPlans,
  };

  const handleFormChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello! I have a new inquiry:\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nSubject: ${formData.subject}\n\nMessage: ${formData.message}`;
    window.open(
      `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
        msg
      )}`,
      "_blank"
    );
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handlePlanInquiry = (planName: string) => {
    const msg = `Hi Sun Holidays! I am interested in the "${planName}" tour package for ${selectedRegion}. Can you provide more details including pricing, itinerary, and available dates?`;
    window.open(
      `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
        msg
      )}`,
      "_blank"
    );
  };

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
  ];

  const galleryData = Array.from({ length: 14 }, (_, i) => ({
    id: i + 1,
    title: `Gallery Image ${i + 1}`,
    region: "South India",
    image: `/gallery_${i + 1}.jpg`,
    category: "all",
  }));

  const testimonials = [
    {
      name: "Rajesh Kumar",
      text: "Amazing experience! The team was professional and helpful.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      text: "Best honeymoon package ever. Worth every penny!",
      rating: 5,
    },
    {
      name: "Amit Patel",
      text: "Great service and unforgettable memories with family.",
      rating: 4,
    },
  ];

  const filteredGallery = galleryData;
  const toggleWishlist = (id: number) => {
    const newWishlist = new Set(wishlist);
    newWishlist.has(id) ? newWishlist.delete(id) : newWishlist.add(id);
    setWishlist(newWishlist);
  };

  return (
    <main className="w-full">
      <header className="sticky top-0 z-50 bg-black text-white border-b-4 border-yellow-400">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-center">
          <div className="hidden md:flex items-center gap-8 justify-center">
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
                  `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
                    baseMessage
                  )}`,
                  "_blank"
                )
              }
              className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500"
            >
              WhatsApp Enquiry
            </button>
          </div>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
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
                  `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
                    baseMessage
                  )}`,
                  "_blank"
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
        style={{ backgroundImage: "url(/home_page_cover.jpg)" }}
      ></section>

      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              About SUN Holidays
            </h2>
            <div className="w-20 h-1 bg-teal-500 mx-auto"></div>
          </div>

          {/* Main Content - Single Centered Paragraph */}
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-gray-700 text-lg leading-relaxed text-center">
              SUN Holidays is a trusted travel management company based in
              India, driven by a passion for creating memorable experiences.
              With over seven years of expertise, we've grown into a reliable
              brand known for excellence and personalized service. We specialize
              in College Tours, Industrial Visits, School Trips, Corporate
              Travel, and Leisure Holidays — plus complete ticketing solutions
              for air, train, and bus travel. We believe travel is about
              discovering new perspectives and creating stories that last a
              lifetime. Every trip is thoughtfully designed to match your needs,
              combining comfort, convenience, and value. Our mission is to
              simplify travel with end-to-end solutions, letting you enjoy the
              journey while we handle the details.
            </p>
          </div>

          {/* Stats/Features Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">7+</div>
              <div className="text-gray-600 text-sm font-medium">
                Years Experience
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">100%</div>
              <div className="text-gray-600 text-sm font-medium">
                Customer Satisfaction
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">24/7</div>
              <div className="text-gray-600 text-sm font-medium">
                Support Available
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">2L+</div>
              <div className="text-gray-600 text-sm font-medium">
                Happy Travelers
              </div>
            </div>
          </div>

          {/* Trust Badge */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 text-sm italic">
              Your trusted partner for seamless and memorable travel experiences
            </p>
          </div>
        </div>
      </section>

      <section id="packages" className="py-16 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-black mb-4 text-center">
            Choose Your Destination
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Select a region to explore our curated tour packages
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {regions.map((region) => (
              <button
                key={region.id}
                onClick={() => {
                  setSelectedRegion(region.name);
                  setSelectedPlan(null);
                  document
                    .getElementById("plans")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`p-6 rounded-xl transition-all ${
                  selectedRegion === region.name
                    ? "bg-yellow-400 text-black shadow-xl scale-105"
                    : "bg-gray-100 text-black hover:shadow-lg"
                }`}
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

      {selectedRegion &&
        plansByRegion[selectedRegion as keyof PlansByRegion] && (
          <section
            id="plans"
            className="py-16 bg-gradient-to-b from-gray-50 to-white px-4"
          >
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-black mb-4">
                  {selectedRegion} Tour Packages
                </h2>
                <p className="text-gray-600 text-lg">
                  Choose your perfect itinerary and duration
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {Object.keys(
                  plansByRegion[selectedRegion as keyof PlansByRegion]
                ).map((planDuration) => (
                  <button
                    key={planDuration}
                    onClick={() =>
                      setSelectedPlan(
                        selectedPlan === planDuration ? null : planDuration
                      )
                    }
                    className={`p-8 rounded-2xl text-center transition-all transform hover:scale-105 ${
                      selectedPlan === planDuration
                        ? "bg-gradient-to-br from-yellow-400 to-yellow-500 text-black shadow-2xl"
                        : "bg-white text-black hover:shadow-xl border-2 border-gray-200"
                    }`}
                  >
                    <div className="flex items-center justify-center gap-3 mb-2">
                      <Calendar
                        size={28}
                        className={
                          selectedPlan === planDuration
                            ? "text-black"
                            : "text-yellow-500"
                        }
                      />
                      <h3 className="text-2xl font-bold capitalize">
                        {planDuration}
                      </h3>
                    </div>
                    <p
                      className={`text-sm ${
                        selectedPlan === planDuration
                          ? "text-black/80"
                          : "text-gray-500"
                      }`}
                    >
                      {
                        (
                          plansByRegion[selectedRegion as keyof PlansByRegion][
                            planDuration as keyof PlanDuration
                          ] || []
                        ).length
                      }{" "}
                      tours available
                    </p>
                  </button>
                ))}
              </div>

              {selectedPlan && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-6 rounded-2xl shadow-lg mb-6">
                    <h3 className="text-3xl font-bold text-black text-center flex items-center justify-center gap-3">
                      <MapPin size={32} />
                      {selectedPlan} - {selectedRegion}
                    </h3>
                    <p className="text-center text-black/80 mt-2">
                      Click on any package to inquire via WhatsApp
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {(
                      plansByRegion[selectedRegion as keyof PlansByRegion][
                        selectedPlan as keyof PlanDuration
                      ] || []
                    ).map((planItem: string, idx: number) => (
                      <div
                        key={idx}
                        className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 overflow-hidden border border-gray-200"
                      >
                        <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-4">
                          <div className="flex items-center gap-3">
                            <div className="bg-black/10 p-2 rounded-full">
                              <MapPin size={20} className="text-black" />
                            </div>
                            <h4 className="text-lg font-bold text-black capitalize">
                              {planItem}
                            </h4>
                          </div>
                        </div>

                        <div className="p-6 space-y-4">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-gray-600">
                              <Check size={16} className="text-green-600" />
                              <span className="text-sm">
                                Professional Tour Guide
                              </span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                              <Check size={16} className="text-green-600" />
                              <span className="text-sm">
                                Comfortable Transportation
                              </span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                              <Check size={16} className="text-green-600" />
                              <span className="text-sm">
                                Hotel Accommodation
                              </span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                              <Check size={16} className="text-green-600" />
                              <span className="text-sm">Sightseeing Tours</span>
                            </div>
                          </div>

                          <button
                            onClick={() => handlePlanInquiry(planItem)}
                            className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold py-3 px-4 rounded-lg hover:from-yellow-500 hover:to-yellow-600 transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-xl"
                          >
                            <MessageCircle size={18} />
                            Inquire Now
                            <ArrowRight size={18} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

      <section id="gallery" className="py-16 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-black mb-4 text-center">
            Photo Gallery
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Experience the beauty of South India
          </p>
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
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-black mb-12 text-center">
            Contact Us
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-black mb-8">
                Get in Touch
              </h3>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-yellow-400 flex-shrink-0">
                    <Phone className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-black">Phone</h4>
                    <a
                      href="tel:+918807001442"
                      className="text-gray-600 hover:text-yellow-400"
                    >
                      +91 88070 01442
                    </a>
                    <br/>
                    <a
                      href="tel:+918637687531"
                      className="text-gray-600 hover:text-yellow-400"
                    >
                      +91 86376 87531
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-yellow-400 flex-shrink-0">
                    <Mail className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-black">Email</h4>
                    <a
                      href="mailto:sunholidays2014@gmail.com"
                      className="text-gray-600 hover:text-yellow-400"
                    >
                      sunholidays2014@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-yellow-400 flex-shrink-0">
                    <MapPin className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-black">Address</h4>
                    <p className="text-gray-600">
                      V. Pudur, Thoothukudi - 628905
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-yellow-400 flex-shrink-0">
                    <Clock className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-black">
                      Business Hours
                    </h4>
                    <p className="text-gray-600">
                      24/7
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-black mb-8">
                Send us a Message
              </h3>
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-black mb-2"
                  >
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
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-black mb-2"
                  >
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
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-black mb-2"
                  >
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
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-black mb-2"
                  >
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
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-black mb-2"
                  >
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

      <footer className="bg-black text-white py-12 px-4 border-t-4 border-yellow-400">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-lg mb-4">Sun Holidays</h4>
              <p className="text-gray-400">
                Your trusted partner for unforgettable travel experiences across
                South India.
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
                  <a
                    href="mailto:sunholidays2014@gmail.com"
                    className="hover:text-yellow-400"
                  >
                    sunholidays2014@gmail.com
                  </a>
                </li>
                <li>V. Pudur, Thoothukudi</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Sun Holidays. All rights reserved.</p>
            <p className="text-sm border-t border-gray-700 pt-4 mt-4">
              Powered by{" "}
              <span className="text-yellow-400 font-semibold">HYNOX</span>
            </p>
          </div>
        </div>
      </footer>

      <a
        href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
          baseMessage
        )}`}
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
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </main>
  );
}
