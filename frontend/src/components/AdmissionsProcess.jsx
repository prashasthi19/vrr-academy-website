const steps = [
  {
    step: 'STEP 1',
    title: 'Enquiry',
    description: 'Share your academic goals and interest in the PU integrated program.'
  },
  {
    step: 'STEP 2',
    title: 'Counselling',
    description: 'Meet our team for guidance on stream choice, academic fit, and preparation planning.'
  },
  {
    step: 'STEP 3',
    title: 'Program Guidance',
    description: 'Understand the board and competitive exam roadmap for PU, KCET, JEE and NEET preparation.'
  },
  {
    step: 'STEP 4',
    title: 'Stream Selection',
    description: 'Choose the right path: PCMB, PCMC or PCME based on your academic direction.'
  },
  {
    step: 'STEP 5',
    title: 'Admission Confirmation',
    description: 'Complete the admission process and begin the integrated academic journey.'
  }
]

export default function AdmissionsProcess() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primaryBlue">Admissions Process</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-darkText">Simple, transparent and parent-friendly</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {steps.map((item, index) => (
            <div
              key={item.step}
              className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              {index !== steps.length - 1 && (
                <div className="hidden xl:block absolute -right-3 top-1/2 h-px w-6 -translate-y-1/2 bg-primaryBlue/40" />
              )}
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-primaryBlue/10 text-sm font-bold text-primaryBlue">
                {index + 1}
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">{item.step}</p>
              <h3 className="mt-3 text-xl font-bold text-darkText">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
