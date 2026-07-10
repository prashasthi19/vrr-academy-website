export default function WhyChooseUs() {
  const reasons = [
    {
      icon: '👨‍🏫',
      title: 'Expert Faculty',
      description: 'Experienced teachers with proven track record of producing top rankers'
    },
    {
      icon: '📝',
      title: 'Weekly Tests',
      description: 'Regular assessments to track progress and identify weak areas'
    },
    {
      icon: '🎯',
      title: 'Personal Mentoring',
      description: 'One-on-one doubt sessions and personalized study guidance'
    },
    {
      icon: '📊',
      title: 'Proven Results',
      description: '98% success rate with consistent AIR rankings'
    },
    {
      icon: '💻',
      title: 'Digital Learning',
      description: 'Access to recorded lectures and online study materials'
    },
    {
      icon: '🏆',
      title: 'Success Track Record',
      description: '5000+ successful students placed in top colleges'
    }
  ]

  return (
    <section id="why-us" className="py-16 bg-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-darkText mb-4">
            ✨ Why Choose VRR Academy?
          </h2>
          <p className="text-xl text-gray-600">
            What sets us apart from other coaching institutes
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              {/* Icon */}
              <div className="text-5xl mb-4">{reason.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-bold text-darkText mb-3">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>

              {/* Bottom accent */}
              <div className="w-12 h-1 bg-gradient-to-r from-primaryBlue to-darkBlue mt-4 rounded-full"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
