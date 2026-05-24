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

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <button className="px-8 py-4 bg-white text-primaryBlue font-bold rounded-lg hover:bg-gray transform hover:scale-105 transition-all duration-300 shadow-lg">
                Start Your Journey
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-primaryBlue transform hover:scale-105 transition-all duration-300">
                Book Free Demo
              </button>
            </div>
          </div>

          {/* Right - Placeholder for Hero Image */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-full h-96 bg-white bg-opacity-10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-lightBlue border-opacity-30 animate-pulse">
              <div className="text-center">
                <svg className="w-24 h-24 text-lightBlue mx-auto mb-4 opacity-50" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
                </svg>
                <p className="text-lightBlue text-sm">Hero Image - Add your banner here</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave animation */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-auto" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.87,168.19-17.28,250.6-.39C823.78,31,906.4,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#ffffff"
          ></path>
        </svg>
      </div>
    </section>
  )
}
