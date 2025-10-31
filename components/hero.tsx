"use client"

export default function Hero({ onExplore }: { onExplore: () => void }) {
  return (
    <section
      id="home"
      className="w-full h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col items-center justify-center px-4 relative overflow-hidden"
      style={{
        backgroundImage: "url(/placeholder.svg?height=1080&width=1920&query=scenic+south+india+destinations+travel)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 text-center max-w-2xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-yellow-400">Plan Your Dream Getaway</h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          Personalized trips across South India & beyond with Sun Holidays
        </p>
        <button
          onClick={onExplore}
          className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition transform hover:scale-105"
        >
          Explore Packages
        </button>
      </div>
    </section>
  )
}
