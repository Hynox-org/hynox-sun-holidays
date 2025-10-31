export default function Testimonials() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Chennai",
      text: "Amazing experience! The Kodaikanal trip was perfectly planned and the team was very helpful.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      location: "Bangalore",
      text: "Best honeymoon package ever! The Kerala backwaters were absolutely romantic.",
      rating: 5,
    },
    {
      name: "Arjun Nair",
      location: "Mumbai",
      text: "School trip to Coorg was unforgettable for our students. Highly recommended!",
      rating: 5,
    },
  ]

  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-black mb-4 text-center">Hear From Our Travelers</h2>
        <p className="text-gray-600 text-center mb-12 text-lg">Real experiences from our happy customers</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-gray-50 p-8 rounded-xl shadow-lg">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
              <div className="border-t pt-4">
                <p className="font-bold text-black">{testimonial.name}</p>
                <p className="text-gray-600 text-sm">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
