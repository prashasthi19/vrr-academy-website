export default function Testimonials() {
  const testimonials = [
    {
      type: 'Google Review',
      name: 'Google Reviewer',
      text: 'V. V. Good n best quality education.',
      rank: 'VRR Career Academy Sahakar Nagar',
      image: '⭐'
    },
    {
      type: 'Google Review',
      name: 'Google Reviewer',
      text: 'Revisions are also done in a holistic manner.',
      rank: 'VRR Career Academy Virupakshapura',
      image: '⭐'
    },
    {
      type: 'Google Review',
      name: 'Google Reviewer',
      text: 'Supportive learning environment and experienced educators.',
      rank: 'VRR Career Academy Bengaluru',
      image: '⭐'
    }
  ]

  return (
    <section className="bg-gray py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primaryBlue">Testimonials</p>
          <h2 className="mt-4 text-3xl font-black text-darkText sm:text-4xl">Parents and students value the integrated academic approach</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="rounded-2xl border-l-4 border-primaryBlue bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="mb-4 flex items-center gap-4">
                <div className="text-4xl">{testimonial.image}</div>
                <div>
                  <h4 className="text-lg font-bold text-darkText">{testimonial.name}</h4>
                  <p className="text-sm font-semibold text-primaryBlue">{testimonial.rank}</p>
                  <p className="text-xs text-gray-600">{testimonial.type}</p>
                </div>
              </div>

              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">⭐</span>
                ))}
              </div>

              <p className="text-gray-700 italic leading-relaxed">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
