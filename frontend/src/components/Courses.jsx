const programs = [
  {
    name: 'PCMB',
    subjects: 'Physics • Chemistry • Mathematics • Biology',
    focus: 'PU Boards + KCET + JEE + NEET',
    description: 'A complete science pathway for students aiming for strong board performance along with competitive exam readiness.',
    accent: 'from-blue-600 to-blue-500'
  },
  {
    name: 'PCMC',
    subjects: 'Physics • Chemistry • Mathematics • Computer Science',
    focus: 'PU Boards + KCET + JEE',
    description: 'Built for students who are oriented toward mathematics, technology and engineering-focused academic planning.',
    accent: 'from-indigo-600 to-indigo-500'
  },
  {
    name: 'PCME',
    subjects: 'Physics • Chemistry • Mathematics • Electronics',
    focus: 'PU Boards + KCET + JEE',
    description: 'A focused stream for students interested in high-value technical pathways and structured academic preparation.',
    accent: 'from-sky-600 to-cyan-500'
  }
]

export default function Courses() {
  return (
    <section 
      id="courses" 
      className="border-t-[6px] border-primaryGold bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primaryBlue">Programs</p>
          <h2 className="mt-4 text-3xl font-black text-darkText sm:text-4xl">Choose the right stream for your future</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {programs.map((program) => (
            <div
              key={program.name}
              className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className={`bg-gradient-to-r ${program.accent} p-7 text-white`}>
                <div className="text-sm font-bold uppercase tracking-[0.18em] text-blue-100">Stream</div>
                <h3 className="mt-3 text-3xl font-black">{program.name}</h3>
              </div>

              <div className="p-6">
                <p className="text-base font-semibold text-slate-700">{program.subjects}</p>
                <div className="mt-5 rounded-xl bg-blue-50 p-3">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-primaryBlue">Focus</p>
                  <p className="mt-2 text-sm font-semibold text-darkText">{program.focus}</p>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-slate-600">{program.description}</p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center rounded-full bg-primaryBlue px-5 py-2.5 text-sm font-bold text-white transition-colors duration-200 hover:bg-darkBlue"
                >
                  Enquire Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
