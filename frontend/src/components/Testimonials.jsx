export default function Testimonials() {
  const testimonials = [
    {
      type: 'Google Review',
      name: 'Google Reviewer',
      text: 'V. V. Good n best quality education.',
      rank: 'VRR Academy Sahakar Nagar',
      image: '⭐'
    },
    {
      type: 'Google Review',
      name: 'Google Reviewer',
      text: 'Revisions are also done in a holistic manner.',
      rank: 'VRR Academy Virupakshapura',
      image: '⭐'
    },
    {
      type: 'Google Review',
      name: 'Google Reviewer',
      text: 'Supportive learning environment and experienced educators.',
      rank: 'VRR Academy Bengaluru',
      image: '⭐'
    }
  ]

  return (
    <section className="py-16 bg-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-darkText mb-4">
            💬 Testimonials
          </h2>
          <p className="text-xl text-gray-600">
            What our students and parents say about us
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-primaryBlue"
            >
              {/* Avatar and Info */}
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">{testimonial.image}</div>
                <div>
                  <h4 className="font-bold text-darkText text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-primaryBlue font-semibold">{testimonial.rank}</p>
                  <p className="text-xs text-gray-600">{testimonial.type}</p>
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">⭐</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 italic leading-relaxed">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-6 p-8 bg-gradient-to-r from-primaryBlue to-darkBlue rounded-xl text-white text-center">
          <div>
            <p className="text-4xl font-bold mb-2">4.9/5</p>
            <p className="text-lg">Average Rating</p>
          </div>
          <div>
            <p className="text-4xl font-bold mb-2">1000+</p>
            <p className="text-lg">Happy Reviews</p>
          </div>
          <div>
            <p className="text-4xl font-bold mb-2">98%</p>
            <p className="text-lg">Recommendation Rate</p>
          </div>
        </div>
      </div>
    </section>
  )
}
