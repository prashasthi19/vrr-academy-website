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
            Proven track record of success
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 p-8 bg-white rounded-xl shadow-lg">
          <div className="text-center hover:transform hover:scale-105 transition-all duration-300">
            <p className="text-6xl font-bold bg-gradient-to-r from-primaryBlue to-darkBlue bg-clip-text text-transparent mb-2">5000+</p>
            <p className="text-lg text-gray-600 font-semibold">Students Trained</p>
            <p className="text-sm text-gray-500 mt-2">Across all programs</p>
          </div>
          <div className="text-center hover:transform hover:scale-105 transition-all duration-300">
            <p className="text-6xl font-bold bg-gradient-to-r from-primaryBlue to-darkBlue bg-clip-text text-transparent mb-2">98%</p>
            <p className="text-lg text-gray-600 font-semibold">Success Rate</p>
            <p className="text-sm text-gray-500 mt-2">Proven results</p>
          </div>
          <div className="text-center hover:transform hover:scale-105 transition-all duration-300">
            <p className="text-6xl font-bold bg-gradient-to-r from-primaryBlue to-darkBlue bg-clip-text text-transparent mb-2">500+</p>
            <p className="text-lg text-gray-600 font-semibold">Top Rankings</p>
            <p className="text-sm text-gray-500 mt-2">In JEE & NEET</p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-darkText mb-4">📈 Year-on-Year Growth</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-3">
                <span className="text-primaryBlue font-bold">✓</span>
                Consistent improvement in student performance
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primaryBlue font-bold">✓</span>
                High placement and success rates
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primaryBlue font-bold">✓</span>
                Growing student community
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-darkText mb-4">🎯 Our Excellence</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-3">
                <span className="text-primaryBlue font-bold">✓</span>
                Expert faculty with proven track record
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primaryBlue font-bold">✓</span>
                Comprehensive study material & resources
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primaryBlue font-bold">✓</span>
                Personalized attention to every student
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
