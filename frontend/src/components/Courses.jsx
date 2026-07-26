export default function Courses() {
  const courses = [
    {
      id: 1,
      title: 'Foundation Courses',
      eligibility: 'Class 8-10',
      description: 'Build strong fundamentals in Math, Physics, Chemistry and Biology for Class 8, 9, and 10 students. Ideal for early exam preparation and academic excellence.',
      features: [
        'Class 8 to 10 aligned curriculum',
        'Conceptual clarity with practice',
        'Weekly tests and performance tracking',
        'Personalized mentoring and doubt support'
      ],
      icon: '📚',
      color: 'from-blue-400 to-blue-600'
    },
    {
      id: 2,
      title: 'JEE Preparation',
      eligibility: 'Class 11-12',
      description: 'Comprehensive coaching for JEE Main and Advanced. Our proven methodology helps students achieve top ranks in the examination.',
      features: [
        'Expert faculty',
        'Daily doubt sessions',
        'Mock tests',
        'Study materials'
      ],
      icon: '⚛️',
      color: 'from-purple-400 to-purple-600'
    },
    {
      id: 3,
      title: 'NEET Preparation',
      eligibility: 'Class 11-12',
      description: 'Specialized coaching for medical aspirants. We focus on high accuracy and quick problem-solving for NEET examination.',
      features: [
        'Biology expertise',
        'Previous year papers',
        'Test series',
        'Career guidance'
      ],
      icon: '🔬',
      color: 'from-green-400 to-green-600'
    },
    {
      id: 4,
      title: 'KCET Preparation',
      eligibility: 'Class 11-12',
      description: 'Specialized coaching for Karnataka CET examination. Master the exam pattern with focused strategies and comprehensive test series.',
      features: [
        'Expert guidance for Engineering and Medical streams',
        'KCET specific test series',
        'Topic-wise preparation material',
        'Time management strategies'
      ],
      icon: '🎯',
      color: 'from-orange-400 to-orange-600'
    }
  ]

  return (
    <section id="courses" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-darkText mb-4">
            📖 Courses We Offer
          </h2>
          <p className="text-xl text-gray-600">
            Choose the right program for your goals
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white border-2 border-gray rounded-xl overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group"
            >
              {/* Header with Icon */}
              <div className={`bg-gradient-to-r ${course.color} p-8 text-center`}>
                <div className="text-6xl mb-2">{course.icon}</div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-2xl font-bold text-darkText mb-2">
                  {course.title}
                </h3>

                {/* Eligibility Badge */}
                <div className="inline-block px-3 py-1 bg-lightBlue text-primaryBlue rounded-full text-sm font-semibold mb-4">
                  {course.eligibility}
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {course.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {course.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-primaryBlue rounded-full"></span>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
