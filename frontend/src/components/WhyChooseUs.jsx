export default function WhyChooseUs() {
  const reasons = [
    {
      icon: '🎓',
      title: 'PU + Coaching under one academic system',
      description: 'Students learn board academics and competitive preparation within a single structured framework.'
    },
    {
      icon: '👨‍🏫',
      title: 'Expert subject faculty',
      description: 'Academic guidance designed around concepts, application and exam-oriented thinking.'
    },
    {
      icon: '📘',
      title: 'Chapter-wise study material',
      description: 'Well-structured resources aligned with PU Board and competitive exam needs.'
    },
    {
      icon: '📝',
      title: 'Regular tests and OMR practice',
      description: 'Frequent assessments and practice routines help students improve accuracy and confidence.'
    },
    {
      icon: '🎯',
      title: 'Board + competitive exam strategy',
      description: 'Preparation designed to balance academic performance with KCET, JEE and NEET readiness.'
    },
    {
      icon: '📊',
      title: 'Academic monitoring',
      description: 'Progress is tracked through structured performance review and guided improvement plans.'
    },
    {
      icon: '💬',
      title: 'Parent progress updates',
      description: 'A parent-friendly model that supports ongoing transparency and academic accountability.'
    },
    {
      icon: '🤝',
      title: 'Personal mentoring',
      description: 'Students receive individual guidance to stay focused, disciplined and academically balanced.'
    }
  ]

  return (
    <section id="about" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primaryBlue">Why VRR Career Academy</p>
          <h2 className="mt-4 text-3xl font-black text-darkText sm:text-4xl">One integrated academic ecosystem for future-ready learning</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {reasons.map((reason, index) => (
            <div key={index} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition-shadow duration-200 hover:shadow-lg">
              <div className="mb-4 text-4xl">{reason.icon}</div>
              <h3 className="text-xl font-bold text-darkText">{reason.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
