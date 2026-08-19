export default function Achievers() {
  return (
    <section 
      id="achievements" 
      className="border-t-[6px] border-primaryGold bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primaryBlue">Achievers</p>
          <h2 className="mt-4 text-3xl font-black text-darkText sm:text-4xl">Student journeys shaped by disciplined preparation</h2>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-5xl overflow-hidden rounded-3xl border border-gray-200 shadow-2xl">
            <img src="/VRR2.jpeg" alt="VRR Career Academy achievers" className="h-auto w-full object-cover" />
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-8 shadow-lg">
            <h3 className="mb-4 text-2xl font-bold text-darkText">Structured academic monitoring</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-3"><span className="font-bold text-primaryBlue">✓</span> Regular practice and revision frameworks</li>
              <li className="flex items-center gap-3"><span className="font-bold text-primaryBlue">✓</span> Consistent learning habits and progress tracking</li>
              <li className="flex items-center gap-3"><span className="font-bold text-primaryBlue">✓</span> Focused preparation for board and competitive exams</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-lg">
            <h3 className="mb-4 text-2xl font-bold text-darkText">Focused learning environment</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-3"><span className="font-bold text-primaryBlue">✓</span> Concept-driven teaching and doubt support</li>
              <li className="flex items-center gap-3"><span className="font-bold text-primaryBlue">✓</span> Board and competitive exam alignment</li>
              <li className="flex items-center gap-3"><span className="font-bold text-primaryBlue">✓</span> Student and parent guidance throughout the academic year</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
