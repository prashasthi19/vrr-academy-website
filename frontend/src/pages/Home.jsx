export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Placeholder for Phase 2 - All components will be added */}
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-primaryBlue to-darkBlue">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-4">
            VRR Academy
          </h1>
          <p className="text-xl text-lightBlue mb-8">
            Coming Soon - Phase 2 Components Loading...
          </p>
          <div className="flex justify-center gap-4">
            <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-white rounded-full animate-pulse delay-75"></div>
            <div className="w-3 h-3 bg-white rounded-full animate-pulse delay-150"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
