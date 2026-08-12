export default function IntegratedProgram() {
  return (
    <section id="integrated" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-2xl shadow-xl bg-white">
          {/* Main content */}
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gradient">VRR CAREER ACADEMY × SHANTI NIKETAN PU COLLEGE</h3>
            <h2 className="mt-2 text-base sm:text-lg font-medium text-gray-600">Academic Integration for PU + Competitive Exam Preparation</h2>

            <p className="mt-4 text-2xl font-bold text-primaryBlue">PU BOARDS + KCET + JEE + NEET</p>
            <p className="text-sm text-primaryBlue font-bold mt-1">ALL UNDER ONE ROOF</p>

            <div className="mt-4">
              <div className="text-lg text-darkText font-bold">ADMISSIONS OPEN!</div>
              <div className="text-sm font-normal text-gray-600">2026–27 BATCH</div>
            </div>

            <div className="mt-6">
              <a href="#contact" className="inline-block px-6 py-3 bg-primaryBlue text-white font-bold rounded-lg shadow-md hover:bg-darkBlue transition-colors" aria-label="Apply for admission">
                APPLY NOW
              </a>
            </div>
          </div>

          {/* Streams - centered, no subjects listed per request */}
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-primaryBlue text-white shadow-md flex items-center justify-center">
              <h4 className="text-xl font-bold">PCMB</h4>
            </div>
            <div className="p-6 rounded-xl bg-darkBlue text-white shadow-md flex items-center justify-center">
              <h4 className="text-xl font-bold">PCMC</h4>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-r from-primaryBlue to-darkBlue text-white shadow-md flex items-center justify-center">
              <h4 className="text-xl font-bold">PCME</h4>
            </div>
          </div>

          {/* Integrated advantages - placed below streams, colorful cards */}
          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg bg-blue-50">
              <h5 className="font-semibold text-darkText">📚 Board Academics + Exam Prep</h5>
              <p className="text-sm text-gray-600 mt-2">PU Board curriculum delivered alongside focused JEE/NEET/KCET coaching.</p>
            </div>
            <div className="p-6 rounded-lg bg-yellow-50">
              <h5 className="font-semibold text-darkText">🧪 Regular Tests & Revision</h5>
              <p className="text-sm text-gray-600 mt-2">Structured assessments, revision cycles and performance tracking.</p>
            </div>
            <div className="p-6 rounded-lg bg-rose-50">
              <h5 className="font-semibold text-darkText">📘 Study Material</h5>
              <p className="text-sm text-gray-600 mt-2">Comprehensive study materials aligned to both board and competitive exams.</p>
            </div>
            <div className="p-6 rounded-lg bg-green-50">
              <h5 className="font-semibold text-darkText">🤝 Personal Mentoring</h5>
              <p className="text-sm text-gray-600 mt-2">Academic monitoring and mentoring to guide career pathways.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
