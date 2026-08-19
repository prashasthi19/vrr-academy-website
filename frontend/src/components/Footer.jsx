export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t-[6px] border-primaryGold bg-darkBlue py-12 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 grid gap-8 md:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-sm font-black text-darkBlue">
                VRR
              </div>
              <div>
                <div className="text-lg font-black">VRR Career Academy</div>
                <div className="text-xs text-sky-200">PU Integrated Academy</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-300">
              In Academic Association with Shanti Niketan PU College.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-bold">Navigation</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><a href="#home" className="hover:text-white">Home</a></li>
              <li><a href="#integrated" className="hover:text-white">Integrated Program</a></li>
              <li><a href="#courses" className="hover:text-white">Courses</a></li>
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-bold">Programs</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>PCMB</li>
              <li>PCMC</li>
              <li>PCME</li>
              <li>PU Boards + KCET + JEE + NEET</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-bold">Contact</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>📞 <a href="tel:+919611747003" className="underline hover:text-white">9611747003</a></li>
              <li>📞 <a href="tel:+919741187003" className="underline hover:text-white">9741187003</a></li>
              <li>💬 <a href="https://wa.me/919611747003" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">WhatsApp</a></li>
              <li>📧 <a href="mailto:vrr.career.academy@gmail.com" className="underline hover:text-white">vrr.career.academy@gmail.com</a></li>
              <li>
                📍 <a href="https://maps.google.com/?q=2nd+Floor,+Vinayaka+Complex,+11,+Kodigehalli+-+Thindlu+Main+Road,+Near+SVVK+School,+Sahakar+Nagar,+Kodigehalli,+Bangalore,+Karnataka+560092" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
                  2nd Floor, Vinayaka Complex, 11, Kodigehalli - Thindlu Main Road, Near SVVK School, Sahakar Nagar, Kodigehalli, Bangalore, Karnataka 560092
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="my-6 border-t border-slate-700 py-6">
          <p className="text-sm text-slate-300">
            Admissions and academic processes are subject to applicable PU rules and college guidelines.
          </p>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-400 md:flex-row">
          <p>© {currentYear} VRR Career Academy. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#home" className="hover:text-white">Home</a>
            <a href="#contact" className="hover:text-white">Enquire</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
