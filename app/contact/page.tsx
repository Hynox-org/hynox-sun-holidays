"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, Mail, Phone, MapPin, Clock, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Create WhatsApp message
    const whatsappMessage = `Hello! I have a new inquiry:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}

Message: ${formData.message}`

    const whatsappUrl = `https://wa.me/918807001442?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, "_blank")

    // Reset form
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-black text-white px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <Link href="/" className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 mb-6 w-fit">
            <ChevronLeft className="w-5 h-5" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
          <p className="text-gray-300">Get in touch with Sun Holidays for your next adventure</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-black mb-8">Get in Touch</h2>

            <div className="space-y-8">
              {/* Phone */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-yellow-400">
                    <Phone className="h-6 w-6 text-black" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-black">Phone</h3>
                  <a href="tel:+918807001442" className="text-gray-600 hover:text-yellow-400 transition">
                    +91 88070 01442
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-yellow-400">
                    <Mail className="h-6 w-6 text-black" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-black">Email</h3>
                  <a href="mailto:info@sunholidays.in" className="text-gray-600 hover:text-yellow-400 transition">
                    info@sunholidays.in
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-yellow-400">
                    <MapPin className="h-6 w-6 text-black" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-black">Address</h3>
                  <p className="text-gray-600">V. Pudur, Thoothukudi - 628905</p>
                  <p className="text-gray-600">Tamil Nadu, India</p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-yellow-400">
                    <Clock className="h-6 w-6 text-black" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-black">Business Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="mt-12 pt-12 border-t">
              <h3 className="text-lg font-bold text-black mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link href="/gallery" className="block text-gray-600 hover:text-yellow-400 transition">
                  View Gallery
                </Link>
                <Link href="/" className="block text-gray-600 hover:text-yellow-400 transition">
                  Browse Packages
                </Link>
                <a href="https://wa.me/918807001442" className="block text-gray-600 hover:text-yellow-400 transition">
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-black mb-8">Send us a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-black mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="+91 XXXXX XXXXX"
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
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                >
                  <option value="">Select a subject</option>
                  <option value="Package Inquiry">Package Inquiry</option>
                  <option value="Custom Trip">Custom Trip Planning</option>
                  <option value="Group Booking">Group Booking</option>
                  <option value="Partnership">Partnership Opportunity</option>
                  <option value="Other">Other</option>
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
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
                  placeholder="Tell us about your travel plans..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-400 text-black font-bold py-4 rounded-lg hover:bg-yellow-500 transition flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message via WhatsApp
              </button>

              <p className="text-xs text-gray-500 text-center">
                By submitting this form, you agree to our privacy policy. We'll get back to you within 24 hours.
              </p>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 pt-16 border-t">
          <h2 className="text-3xl font-bold text-black mb-12 text-center">Frequently Asked Questions</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-bold text-lg text-black mb-3">How do I book a tour?</h3>
              <p className="text-gray-700">
                You can browse our packages, select a tour, and click the enquiry button. Our team will get back to you
                with details and available dates.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-bold text-lg text-black mb-3">What payment methods do you accept?</h3>
              <p className="text-gray-700">
                We accept bank transfers, online payments, and cash. Contact us for custom payment plans for group
                bookings.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-bold text-lg text-black mb-3">Can I customize my tour package?</h3>
              <p className="text-gray-700">
                We offer customized tour packages. Contact us with your requirements and budget, and we'll create the
                perfect itinerary.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-bold text-lg text-black mb-3">What's your cancellation policy?</h3>
              <p className="text-gray-700">
                We offer flexible cancellation policies. Cancellations made 30 days before the tour get a full refund,
                with reduced refunds for later cancellations.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-bold text-lg text-black mb-3">Do you offer travel insurance?</h3>
              <p className="text-gray-700">
                Yes, we recommend travel insurance for all tours. We can help you with insurance packages that cover
                medical emergencies and trip cancellations.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-bold text-lg text-black mb-3">Are there group discounts?</h3>
              <p className="text-gray-700">
                Yes! We offer special group discounts for bookings of 10 or more people. Contact us for a customized
                quote.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
