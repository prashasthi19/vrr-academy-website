export default function Features() {
  const featuresList = [
    { icon: '📘', title: 'PU Academic Framework', description: 'Structured learning aligned with the PU Board academic calendar and expectations.' },
    { icon: '🧠', title: 'Study Material', description: 'Chapter-wise support designed for concept mastery and repeated revision.' },
    { icon: '✅', title: 'Tests', description: 'Regular assessments to check understanding and improve exam readiness.' },
    { icon: '🔁', title: 'Revision', description: 'Systematic revision cycles help keep academic momentum consistent.' },
    { icon: '🎯', title: 'Competitive Preparation', description: 'Focused preparation support for KCET, JEE and NEET pathways.' },
    { icon: '📊', title: 'Academic Monitoring', description: 'Performance reviews keep students and parents informed at every stage.' }
  ]

  return (
    <section className="border-y-[6px] border-primaryGold bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primaryBlue">Integrated Advantage</p>
          <h2 className="mt-4 text-3xl font-black text-darkText sm:text-4xl">Everything you need under one academic system</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuresList.map((feature, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 text-4xl">{feature.icon}</div>
              <h3 className="text-xl font-bold text-darkText">{feature.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
