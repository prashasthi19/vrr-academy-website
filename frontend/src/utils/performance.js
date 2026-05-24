// Image optimization utility
export const getOptimizedImageUrl = (imagePath, width = 'auto', height = 'auto', quality = 80) => {
  // If using a CDN service like Cloudinary, Imgix, or similar
  // Replace with your actual CDN endpoint
  return imagePath
}

// Lazy Image Loading Component Hook
export const useLazyImage = (imagePath, placeholder = null) => {
  const [imageSrc, setImageSrc] = React.useState(placeholder)
  const [imageRef, setImageRef] = React.useState(null)

  React.useEffect(() => {
    if (!imageRef) return

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const image = new Image()
            image.src = imagePath
            image.onload = () => {
              setImageSrc(imagePath)
              observer.unobserve(entry.target)
            }
          }
        })
      },
      { rootMargin: '50px' }
    )

    observer.observe(imageRef)
    return () => observer.disconnect()
  }, [imageRef, imagePath])

  return [imageSrc, setImageRef]
}

// Performance metrics tracking
export const trackPerformanceMetrics = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    const perfData = window.performance.timing
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart
    const connectTime = perfData.responseEnd - perfData.requestStart
    const renderTime = perfData.domComplete - perfData.domLoading
    const redirectTime = perfData.redirectEnd - perfData.redirectStart

    return {
      pageLoadTime,
      connectTime,
      renderTime,
      redirectTime,
      timestamp: new Date().toISOString()
    }
  }
}

// Web Vitals monitoring
export const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry)
      getFID(onPerfEntry)
      getFCP(onPerfEntry)
      getLCP(onPerfEntry)
      getTTFB(onPerfEntry)
    })
  }
}

// Log performance metrics
export const logPerformanceMetrics = () => {
  const metrics = trackPerformanceMetrics()
  if (metrics) {
    console.group('🚀 Performance Metrics')
    console.log('Page Load Time:', metrics.pageLoadTime, 'ms')
    console.log('Connect Time:', metrics.connectTime, 'ms')
    console.log('Render Time:', metrics.renderTime, 'ms')
    console.log('Redirect Time:', metrics.redirectTime, 'ms')
    console.groupEnd()
  }
}
