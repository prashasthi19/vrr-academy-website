export default function Hero() {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-primaryBlue via-darkBlue to-primaryBlue min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-lightBlue bg-opacity-20 rounded-full border border-lightBlue">
              <span className="text-lightBlue font-semibold text-sm">🌟 Welcome to Excellence</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Your Path to
              <span className="block text-lightBlue"> Academic Success</span>
            </h1>

            <p className="text-lg text-gray-200 leading-relaxed">
              Transform your dreams into reality with VRR Academy. Expert faculty, proven methodology, and personalized mentoring for JEE, NEET, and Foundation courses.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div>
                <p className="text-3xl font-bold text-lightBlue">98%</p>
                <p className="text-sm text-gray-300">Success Rate</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-lightBlue">5000+</p>
                <p className="text-sm text-gray-300">Students Trained</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-lightBlue">50+</p>
                <p className="text-sm text-gray-300">Expert Faculty</p>
              </div>
            </div>

            <p className="text-lg text-white font-semibold pt-8">
              Start your learning journey now with VRR tutorials!
            </p>
          </div>

          {/* Right - Hero Image */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-full h-96 overflow-hidden rounded-2xl border border-lightBlue border-opacity-30 shadow-2xl">
              <img
                src="/VRR1.jpeg"
                alt="VRR Academy banner"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>


      {/* Wave animation - REMOVED */}
    </section>
  )
}
