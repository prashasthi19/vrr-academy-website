export default function Achievers() {
  const achievements = [
    {
      rank: 'AIR 1',
      name: 'Rahul Singh',
      exam: 'JEE Advanced 2023',
      score: '342/396',
      image: '👨‍🎓'
    },
    {
      rank: 'AIR 5',
      name: 'Priya Sharma',
      exam: 'NEET 2023',
      score: '710/720',
      image: '👩‍🎓'
    },
    {
      rank: 'AIR 12',
      name: 'Arjun Patel',
      exam: 'JEE Mains 2023',
      score: '298/300',
      image: '👨‍🎓'
    },
    {
      rank: 'AIR 8',
      name: 'Neha Gupta',
      exam: 'NEET 2023',
      score: '705/720',
      image: '👩‍🎓'
    }
  ]

  return (
    <section id="achievements" className="py-16 bg-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-darkText mb-4">
            🏆 Our Achievers
          </h2>
          <p className="text-xl text-gray-600">
            Meet the success stories from VRR Academy
          </p>
        </div>

        {/* Achievement Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achiever, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              {/* Top Color Bar */}
              <div className="h-1 bg-gradient-to-r from-primaryBlue to-darkBlue"></div>

              {/* Content */}
              <div className="p-6 text-center">
                {/* Avatar */}
                <div className="text-6xl mb-4">{achiever.image}</div>

                {/* Rank Badge */}
                <div className="inline-block px-3 py-1 bg-primaryBlue text-white rounded-full text-sm font-bold mb-3">
                  {achiever.rank}
                </div>

                {/* Name */}
                <h3 className="text-xl font-bold text-darkText mb-2">
                  {achiever.name}
                </h3>

                {/* Exam */}
                <p className="text-sm text-gray-600 mb-2">
                  {achiever.exam}
                </p>

                {/* Score */}
                <div className="text-2xl font-bold text-primaryBlue">
                  {achiever.score}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 p-8 bg-white rounded-xl shadow-lg">
          <div className="text-center">
            <p className="text-5xl font-bold text-primaryBlue mb-2">5000+</p>
            <p className="text-lg text-gray-600">Students Trained</p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold text-primaryBlue mb-2">98%</p>
            <p className="text-lg text-gray-600">Success Rate</p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold text-primaryBlue mb-2">500+</p>
            <p className="text-lg text-gray-600">Top Rankings</p>
          </div>
        </div>
      </div>
    </section>
  )
}
