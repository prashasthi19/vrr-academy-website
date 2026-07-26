import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-darkBlue text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-darkBlue font-bold">VR</span>
              </div>
              <span className="font-bold text-lg">VRR Academy</span>
            </div>
            <p className="text-gray-300 text-sm">
              Empowering students to achieve their dreams through quality education and expert guidance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#courses" className="hover:text-white transition-colors">Courses</a></li>
              <li><a href="#achievements" className="hover:text-white transition-colors">Achievements</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-bold text-lg mb-4">Courses</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Foundation Courses</li>
              <li>JEE Preparation</li>
              <li>NEET Preparation</li>
              <li>Online Classes</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                📍 <a href="https://www.google.com/maps/search/?api=1&query=%2312,+1st+A+Cross,+Dhanalakshmi+Layout,+Virupakshapura,+Bengaluru,+Karnataka+560097" target="_blank" rel="noreferrer" className="underline hover:text-white">#12, 1st A Cross, Dhanalakshmi Layout</a>
              </li>
              <li>
                📍 <a href="https://www.google.com/maps/search/?api=1&query=2nd+Floor,+Vinayaka+Complex,+11+Kodigehalli+-+Thindlu+Main+Road,+near+SVVK+school,+Sahakar+Nagar,+Kodigehalli,+Bangalore,+Karnataka+560092" target="_blank" rel="noreferrer" className="underline hover:text-white">2nd Floor, Vinayaka Complex, Kodigehalli</a>
              </li>
              <li>📞 <a href="tel:+919741187003" className="underline hover:text-white">+91-9741187003</a></li>
              <li>📞 <a href="tel:+919740488001" className="underline hover:text-white">+91-9740488001</a></li>
              <li>📧 vrr.career.acadmey@gmail.com</li>
              <li>🕐 4:30 PM - 9 PM</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 py-6 my-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            © {currentYear} VRR Academy. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-opacity-20 transition-all">
              <span>f</span>
            </a>
            <a href="#" className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-opacity-20 transition-all">
              <span>𝕏</span>
            </a>
            <a href="#" className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-opacity-20 transition-all">
              <span>in</span>
            </a>
            <a href="#" className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-opacity-20 transition-all">
              <span>📷</span>
            </a>
          </div>

          {/* Legal Links */}
          <div className="flex gap-6 text-sm text-gray-400 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
