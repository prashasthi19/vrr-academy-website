import { useState } from 'react'
import { submitEnquiry } from '../services/api'

const admissionFormUrl =
  import.meta.env.VITE_ADMISSION_FORM_URL ||
  'https://docs.google.com/forms/d/e/1FAIpQLSdUstjuVrJGhVFjf3ry-E1bOmDsu9avbxLopfskJrhRTFRL6Q/viewform?usp=header'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    class: '',
    board: '',
    course: '',
    message: ''
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
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
          board: '',
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
    <section 
      id="contact" 
      className="border-t-[6px] border-primaryGold bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primaryBlue">Contact</p>
            <h2 className="mt-4 text-3xl font-black text-darkText sm:text-4xl">Talk to our admissions team</h2>

            <div className="mt-8 space-y-8">
              <div className="flex gap-4">
                <div className="text-3xl">📍</div>
                <div>
                  <h3 className="mb-2 text-lg font-bold text-darkText">Address</h3>
                  <p className="text-slate-600">
                    <a
                      href="https://maps.google.com/?q=2nd+Floor,+Vinayaka+Complex,+11,+Kodigehalli+-+Thindlu+Main+Road,+Near+SVVK+School,+Sahakar+Nagar,+Kodigehalli,+Bangalore,+Karnataka+560092"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-primaryBlue"
                    >
                      2nd Floor, Vinayaka Complex<br />
                      11, Kodigehalli - Thindlu Main Road<br />
                      Near SVVK School, Sahakar Nagar<br />
                      Kodigehalli, Bangalore<br />
                      Karnataka 560092
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-3xl">☎️</div>
                <div>
                  <h3 className="mb-2 text-lg font-bold text-darkText">Call Now</h3>
                  <p className="text-slate-600">
                    <a href="tel:+919611747003" className="underline hover:text-primaryBlue">9611747003</a><br />
                    <a href="tel:+919741187003" className="underline hover:text-primaryBlue">9741187003</a>
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-3xl">📧</div>
                <div>
                  <h3 className="mb-2 text-lg font-bold text-darkText">Email</h3>
                  <p className="text-slate-600">
                    <a href="mailto:vrr.career.academy@gmail.com" className="underline hover:text-primaryBlue">vrr.career.academy@gmail.com</a>
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-3xl">💬</div>
                <div>
                  <h3 className="mb-2 text-lg font-bold text-darkText">WhatsApp</h3>
                  <a
                    href="https://wa.me/919611747003"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-green-500 px-6 py-3 text-sm font-bold text-white shadow-md transition-colors hover:bg-green-600"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[1.5rem] bg-slate-50 p-6 sm:p-8">
            <h3 className="mb-6 text-2xl font-bold text-darkText">Enquire Now</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-semibold text-darkText">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border-2 border-slate-300 px-4 py-3 focus:border-primaryBlue focus:outline-none"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-darkText">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  pattern="[0-9]{10}"
                  className="w-full rounded-lg border-2 border-slate-300 px-4 py-3 focus:border-primaryBlue focus:outline-none"
                  placeholder="10-digit phone number"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-darkText">Current Class *</label>
                <select
                  name="class"
                  value={formData.class}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border-2 border-slate-300 px-4 py-3 focus:border-primaryBlue focus:outline-none"
                >
                  <option value="">Select your class</option>
                  <option value="10">Class 10</option>
                  <option value="11">Class 11</option>
                  <option value="12">Class 12</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-darkText">Board *</label>
                <select
                  name="board"
                  value={formData.board}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border-2 border-slate-300 px-4 py-3 focus:border-primaryBlue focus:outline-none"
                >
                  <option value="">Select your board</option>
                  <option value="State">State</option>
                  <option value="CBSE">CBSE</option>
                  <option value="ICSE">ICSE</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-darkText">Interested Program *</label>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border-2 border-slate-300 px-4 py-3 focus:border-primaryBlue focus:outline-none"
                >
                  <option value="">Select a program</option>
                  <option value="PCMB">PCMB</option>
                  <option value="PCMC">PCMC</option>
                  <option value="PCME">PCME</option>
                  <option value="PU Integrated Program">PU Integrated Program</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-darkText">Message (Optional)</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full resize-none rounded-lg border-2 border-slate-300 px-4 py-3 focus:border-primaryBlue focus:outline-none"
                  placeholder="Tell us about yourself"
                ></textarea>
              </div>

              {error && <p className="text-sm font-medium text-red-600">{error}</p>}
              {success && <p className="text-sm font-medium text-green-600">✅ Enrollment submitted successfully! We'll contact you soon.</p>}

              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center rounded-full bg-primaryBlue px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-darkBlue disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {loading ? 'Submitting...' : 'ENQUIRE NOW'}
                </button>
                <a
                  href={admissionFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-primaryBlue px-6 py-3 text-sm font-bold text-primaryBlue transition-colors hover:bg-primaryBlue hover:text-white"
                >
                  APPLY NOW
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
