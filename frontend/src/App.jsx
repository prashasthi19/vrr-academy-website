import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Lazy load pages
const Home = lazy(() => import('./pages/Home'))

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="text-center">
      <div className="inline-block">
        <div className="w-16 h-16 border-4 border-primaryBlue border-t-transparent rounded-full animate-spin"></div>
      </div>
      <p className="mt-4 text-gray-600 font-semibold">Loading...</p>
    </div>
  </div>
)

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-1 pt-16">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
