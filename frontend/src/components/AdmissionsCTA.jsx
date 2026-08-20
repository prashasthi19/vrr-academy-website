const admissionFormUrl =
  import.meta.env.VITE_ADMISSION_FORM_URL ||
  'https://docs.google.com/forms/d/e/1FAIpQLSdUstjuVrJGhVFjf3ry-E1bOmDsu9avbxLopfskJrhRTFRL6Q/viewform?usp=header'

export default function AdmissionsCTA() {
  return (
    <section className="bg-gradient-to-r from-darkBlue via-primaryBlue to-sky-700 py-16 text-white border-y-[6px] border-primaryGold">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-100">Admissions Open</p>
        <h2 className="mt-4 text-3xl font-black sm:text-4xl md:text-5xl">2027–28</h2>
        <p className="mt-3 text-xl font-semibold text-sky-100">PU Integrated Program</p>
        <p className="mt-4 text-lg text-sky-50">PCMB | PCMC | PCME</p>
        <p className="mt-2 text-lg text-sky-50">PU BOARDS + KCET + JEE + NEET</p>

        <div className="mt-8 flex justify-center">
          <a
            href={admissionFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-bold text-primaryBlue shadow-xl transition-transform duration-200 hover:scale-[1.02] focus:outline-none focus-visible:ring-4 focus-visible:ring-white/80"
            aria-label="Apply now for admission"
          >
            APPLY NOW
          </a>
        </div>
      </div>
    </section>
  )
}
