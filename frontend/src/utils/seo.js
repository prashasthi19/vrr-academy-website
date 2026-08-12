// SEO Meta Tags Utility
export const setSeoMeta = (title, description, image, url) => {
  // Update document title
  document.title = title

  // Update or create meta tags
  const updateMeta = (name, content) => {
    let meta = document.querySelector(`meta[name="${name}"]`)
    if (!meta) {
      meta = document.createElement('meta')
      meta.name = name
      document.head.appendChild(meta)
    }
    meta.content = content
  }

  const updateOgMeta = (property, content) => {
    let meta = document.querySelector(`meta[property="${property}"]`)
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('property', property)
      document.head.appendChild(meta)
    }
    meta.content = content
  }

  // Standard meta tags
  updateMeta('description', description)
  updateMeta('viewport', 'width=device-width, initial-scale=1.0')
  updateMeta('theme-color', '#1D4ED8')
  updateMeta('keywords', 'VRR Academy, Shanti Niketan PU College, PU Integrated Academy, JEE, NEET, KCET, Admissions 2026')

  // Open Graph tags
  updateOgMeta('og:title', title)
  updateOgMeta('og:description', description)
  updateOgMeta('og:image', image)
  updateOgMeta('og:url', url)
  updateOgMeta('og:type', 'website')

  // Twitter Card tags
  updateMeta('twitter:card', 'summary_large_image')
  updateMeta('twitter:title', title)
  updateMeta('twitter:description', description)
  updateMeta('twitter:image', image)
}

// Schema.org Structured Data
export const createStructuredData = (type, data) => {
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.innerHTML = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': type,
    ...data
  })
  document.head.appendChild(script)
}

// Organization Schema
export const addOrganizationSchema = () => {
  createStructuredData('Organization', {
    name: 'VRR Academy',
    url: 'https://vrr-academy.com',
    logo: 'https://vrr-academy.com/logo.png',
    description: 'Leading coaching institute for JEE, NEET, and Foundation courses',
    sameAs: [
      'https://www.facebook.com/vrracademy',
      'https://www.twitter.com/vrracademy',
      'https://www.instagram.com/vrracademy'
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '#12, 1st A Cross, Dhanalakshmi Layout',
      addressLocality: 'Bengaluru',
      addressRegion: 'Karnataka',
      postalCode: '560097',
      addressCountry: 'IN'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Support',
      telephone: '+91-XXXXXXXXXX'
    }
  })
}

// Course Schema
export const addCourseSchema = (courseName, description, instructor) => {
  createStructuredData('Course', {
    name: courseName,
    description: description,
    instructor: {
      '@type': 'Person',
      name: instructor
    },
    provider: {
      '@type': 'Organization',
      name: 'VRR Academy'
    }
  })
}

// Breadcrumb Schema
export const addBreadcrumbSchema = (breadcrumbs) => {
  const itemListElement = breadcrumbs.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url
  }))

  createStructuredData('BreadcrumbList', {
    itemListElement
  })
}
