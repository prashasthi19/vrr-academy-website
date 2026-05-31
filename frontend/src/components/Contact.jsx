import { useState } from 'react'
import { submitEnquiry } from '../services/api'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    class: '',
    course: '',
    message: ''
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess(false)

    try {
      const response = await submitEnquiry(formData)
      if (response.success) {
        setSuccess(true)
        setFormData({
          name: '',
          phone: '',
          class: '',
          course: '',
          message: ''
        })
        setTimeout(() => setSuccess(false), 5000)
      }
    } catch (err) {
      setError(err.message || 'Failed to submit enquiry. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <div>
            <h2 className="text-4xl font-bold text-darkText mb-8">
              📞 Get In Touch
            </h2>

            <div className="space-y-8">
              {/* Address */}
              <div className="flex gap-4">
                <div className="text-3xl">📍</div>
                <div>
                  <h3 className="font-bold text-lg text-darkText mb-2">Address</h3>
                  <p className="text-gray-600">
                    2nd Floor, Vinayaka Complex<br />
                    11, Kodigehalli - Thindlu Main Road<br />
                    near SVVK school, Sahakar Nagar<br />
                    Kodigehalli, Bangalore<br />
                    Karnataka, 560092
                  </p>
                  <a 
                    href="https://maps.google.com/?q=2nd+Floor,+Vinayaka+Complex,+11,+Kodigehalli,+Bangalore,+560092" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-semibold"
                  >
                    📍 View on Google Maps
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="text-3xl">☎️</div>
                <div>
                  <h3 className="font-bold text-lg text-darkText mb-2">Phone</h3>
                  <p className="text-gray-600">
                    <a href="tel:9741187003" className="hover:text-primaryBlue transition-colors">+91-9741187003</a><br />
                    <a href="tel:9740488001" className="hover:text-primaryBlue transition-colors">+91-9740488001</a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="text-3xl">📧</div>
                <div>
                  <h3 className="font-bold text-lg text-darkText mb-2">Email</h3>
                  <p className="text-gray-600">
                    info@vrracademy.com<br />
                    support@vrracademy.com
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex gap-4">
                <div className="text-3xl">💬</div>
                <div>
                  <h3 className="font-bold text-lg text-darkText mb-2">WhatsApp</h3>
                  <button className="inline-block px-6 py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition-colors">
                    Chat with us
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-gray p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-darkText mb-6">
              Quick Enquiry Form
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-darkText mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primaryBlue transition-colors"
                  placeholder="Your name"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-darkText mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  pattern="[0-9]{10}"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primaryBlue transition-colors"
                  placeholder="10-digit phone number"
                />
              </div>

              {/* Class */}
              <div>
                <label className="block text-sm font-semibold text-darkText mb-2">
                  Current Class *
                </label>
                <select
                  name="class"
                  value={formData.class}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primaryBlue transition-colors"
                >
                  <option value="">Select your class</option>
                  <option value="9">Class 9</option>
                  <option value="10">Class 10</option>
                  <option value="11">Class 11</option>
                  <option value="12">Class 12</option>
                </select>
              </div>

              {/* Course */}
              <div>
                <label className="block text-sm font-semibold text-darkText mb-2">
                  Interested Course *
                </label>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primaryBlue transition-colors"
                >
                  <option value="">Select a course</option>
                  <option value="Foundation">Foundation</option>
                  <option value="JEE">JEE</option>
                  <option value="NEET">NEET</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-darkText mb-2">
                  Message (Optional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primaryBlue transition-colors resize-none"
                  placeholder="Tell us about yourself"
                ></textarea>
              </div>

              {/* Success Message */}
              {success && (
                <div className="p-4 bg-green-100 border-2 border-green-500 text-green-700 rounded-lg">
                  ✅ Enquiry submitted successfully! We'll contact you soon.
                </div>
              )}

              {/* Error Message */}
              {error && (
                <div className="p-4 bg-red-100 border-2 border-red-500 text-red-700 rounded-lg">
                  ❌ {error}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-primaryBlue text-white font-bold rounded-lg hover:bg-darkBlue transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Submitting...' : 'Submit Enquiry'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
