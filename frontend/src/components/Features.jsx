export default function Features() {
  const featuresList = [
    {
      icon: '🎓',
      title: 'Expert Faculty',
      description: 'Team of IITians and medical professionals'
    },
    {
      icon: '📚',
      title: 'Comprehensive Material',
      description: 'Detailed study material and previous year papers'
    },
    {
      icon: '⏰',
      title: 'Flexible Timings',
      description: 'Multiple batch timings to suit your schedule'
    },
    {
      icon: '🎯',
      title: 'Focused Approach',
      description: 'Topic-wise preparation with performance tracking'
    },
    {
      icon: '💬',
      title: 'Doubt Sessions',
      description: 'Daily doubt clearing sessions with faculty'
    },
    {
      icon: '🏅',
      title: 'Test Series',
      description: 'Regular mock tests simulating actual exam patterns'
    },
    {
      icon: '📱',
      title: 'Digital Access',
      description: 'Online portal for lectures and assignments'
    },
    {
      icon: '🤝',
      title: 'Mentorship',
      description: 'Career guidance and personalized mentoring'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-darkText mb-4">
            🚀 Features That Define Us
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need for academic excellence
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuresList.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-lightBlue to-gray p-6 rounded-lg border border-primaryBlue border-opacity-20 hover:shadow-lg transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-darkText mb-2">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
