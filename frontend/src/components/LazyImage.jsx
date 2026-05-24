import React from 'react'

// Lazy Image component with IntersectionObserver
export const LazyImage = ({ 
  src, 
  alt, 
  placeholder = '/placeholder.svg',
  className = '',
  width = 'auto',
  height = 'auto'
}) => {
  const [imageSrc, setImageSrc] = React.useState(placeholder)
  const [imageRef, setImageRef] = React.useState(null)
  const [isLoaded, setIsLoaded] = React.useState(false)

  React.useEffect(() => {
    if (!imageRef) return

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = new Image()
            img.src = src
            img.onload = () => {
              setImageSrc(src)
              setIsLoaded(true)
              observer.unobserve(entry.target)
            }
          }
        })
      },
      { rootMargin: '50px' }
    )

    observer.observe(imageRef)
    return () => observer.disconnect()
  }, [imageRef, src])

  return (
    <img
      ref={setImageRef}
      src={imageSrc}
      alt={alt}
      className={`${className} transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-75'}`}
      width={width}
      height={height}
      loading="lazy"
    />
  )
}

export default LazyImage
