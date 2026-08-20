const streams = [
  { name: 'PCMB', description: 'Physics • Chemistry • Mathematics • Biology', focus: 'PU Boards + KCET (& JEE/NEET for interested students)' },
  { name: 'PCMC', description: 'Physics • Chemistry • Mathematics • Computer Science', focus: 'PU Boards + KCET (& JEE for interested students)' },
  { name: 'PCME', description: 'Physics • Chemistry • Mathematics • Electronics', focus: 'PU Boards + KCET (& JEE for interested students)' }
]

export default function IntegratedProgram() {
  return (
    <section 
      id="integrated" 
      className="border-t-[6px] border-primaryGold bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-primaryBlue">Integrated Academic Program</p>
          <h2 className="mt-4 text-3xl font-black text-darkText sm:text-4xl">A strong academic bridge for PU and competitive success</h2>
        </div>

        <div className="mt-10 rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8 lg:p-10">
          <div className="flex flex-col items-center justify-center gap-3 text-center">
            <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
              <span className="text-2xl font-black text-darkText sm:text-3xl">VRR Career Academy</span>
              <img src="/HS3.jpeg" alt="partnership" className="h-8 sm:h-10" />
              <span className="text-2xl font-black text-primaryBlue sm:text-3xl">Shanti Niketan PU College</span>
            </div>
            <div className="mt-4 h-px w-full max-w-3xl bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
            <div className="mt-6">
              <p className="text-base font-bold uppercase tracking-[0.2em] text-slate-500">PU Integrated Academy</p>
              <p className="mt-3 text-2xl font-black text-darkText sm:text-3xl">PU BOARDS + KCET + JEE + NEET</p>
              <p className="mt-3 text-lg font-semibold text-primaryBlue">ALL UNDER ONE ROOF</p>
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {streams.map((stream) => (
              <div key={stream.name} className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-shadow duration-200 hover:shadow-lg">
                <h3 className="text-2xl font-black text-darkText">{stream.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{stream.description}</p>
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Focus</p>
                <p className="mt-2 text-sm font-semibold text-primaryBlue">{stream.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
