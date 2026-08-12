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
              <div className="text-4xl sm:text-5xl text-red-600 font-extrabold">ADMISSIONS OPEN!</div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-800 mt-2">2026–27 BATCH</div>
            </div>

            <div className="mt-8">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdUstjuVrJGhVFjf3ry-E1bOmDsu9avbxLopfskJrhRTFRL6Q/viewform?usp=header" target="_blank" rel="noreferrer noopener" className="inline-block px-14 py-6 bg-red-600 text-white font-extrabold text-2xl sm:text-3xl rounded-2xl shadow-2xl hover:bg-red-700 hover:shadow-3xl transform hover:scale-110 transition-all duration-300" aria-label="Apply for admission via Google Form">
                APPLY NOW →
              </a>
            </div>
          </div>

          {/* Streams - centered, no subjects listed per request */}
          <div className="mt-10 grid md:grid-cols-3 gap-4">
            <div className="p-3 rounded bg-primaryBlue text-white shadow-md flex items-center justify-center">
              <h4 className="text-base font-bold">PCMB</h4>
            </div>
            <div className="p-3 rounded bg-darkBlue text-white shadow-md flex items-center justify-center">
              <h4 className="text-base font-bold">PCMC</h4>
            </div>
            <div className="p-3 rounded bg-gradient-to-r from-primaryBlue to-darkBlue text-white shadow-md flex items-center justify-center">
              <h4 className="text-base font-bold">PCME</h4>
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
