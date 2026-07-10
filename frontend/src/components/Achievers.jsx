export default function Achievers() {
  return (
    <section id="achievements" className="py-16 bg-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-darkText mb-4">
            🏆 Our Achievements
          </h2>
          <p className="text-xl text-gray-600">
            Celebrating student success at VRR Academy
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
            <img
              src="/VRR2.jpeg"
              alt="VRR Academy achievers"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
