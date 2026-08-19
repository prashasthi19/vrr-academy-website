const admissionFormUrl =
  import.meta.env.VITE_ADMISSION_FORM_URL ||
  'https://docs.google.com/forms/d/e/1FAIpQLSdUstjuVrJGhVFjf3ry-E1bOmDsu9avbxLopfskJrhRTFRL6Q/viewform?usp=header'

export default function Hero() {
  return (
    <section 
      id="home" 
      className="flex min-h-screen items-center bg-[radial-gradient(circle_at_top_left,_rgba(96,165,250,0.25),_transparent_30%),linear-gradient(135deg,#0a3aab_0%,#0a2d8b_35%,#081d5d_100%)] pt-36 pb-16 text-white">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="animate-fade-in space-y-6">
            <div className="inline-flex rounded-full border border-primaryBlue/30 bg-white px-4 py-2 text-base font-bold uppercase tracking-[0.18em] text-primaryBlue shadow-md">
              VRR Career Academy
            </div>

            <div className="space-y-3">
              <p className="text-base font-semibold uppercase tracking-[0.12em] text-sky-100 sm:text-lg">
                In Academic Association with
              </p>
              <h2 className="text-2xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
                Shanti Niketan PU College
              </h2>
            </div>

            <h1 className="max-w-3xl text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              PU Integrated Academy for Boards + KCET + JEE + NEET
            </h1>

            <div className="space-y-3">
              <p className="text-xl font-bold uppercase tracking-[0.08em] text-sky-100 sm:text-2xl">
                PU BOARDS + KCET + JEE + NEET
              </p>
              <p className="text-lg font-semibold text-sky-100 sm:text-xl">
                PCMB | PCMC | PCME
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-2 rounded-full bg-red-600 px-5 py-2.5 text-sm font-black uppercase tracking-[0.14em] text-white shadow-[0_10px_25px_rgba(220,38,38,0.45)] ring-2 ring-red-300/70">
                <span aria-hidden="true">🔔</span>
                Admissions Open
              </span>
              <span className="text-base font-bold uppercase tracking-[0.12em] text-white sm:text-lg">
                2026–27
              </span>
            </div>

            <div className="flex flex-col gap-4 pt-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-base font-black uppercase tracking-[0.08em] text-primaryBlue shadow-xl transition-transform duration-200 hover:scale-[1.02] focus:outline-none focus-visible:ring-4 focus-visible:ring-white/80"
              >
                ENQUIRE NOW
              </a>
              <a
                href={admissionFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-base font-black uppercase tracking-[0.08em] text-primaryBlue shadow-xl transition-transform duration-200 hover:scale-[1.02] focus:outline-none focus-visible:ring-4 focus-visible:ring-white/80"
              >
                APPLY NOW
              </a>
            </div>
          </div>

          <div className="hidden items-center justify-center lg:flex">
            <div className="w-full max-w-md rounded-[2rem] border border-sky-200/40 bg-white/10 p-5 shadow-2xl backdrop-blur-sm">
              <div className="rounded-[1.5rem] bg-white/5 p-6 text-center ring-1 ring-white/10">
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-sky-100">PU Integrated Academy</p>
                <p className="mt-4 text-3xl font-black text-white">VRR Career Academy</p>
                <p className="mt-4 text-lg font-semibold text-sky-100">Shanti Niketan PU College</p>
                <div className="mt-6 grid gap-3 text-left text-sm text-sky-50">
                  <div className="rounded-xl bg-white/5 px-4 py-3">PU Boards + KCET + JEE + NEET</div>
                  <div className="rounded-xl bg-white/5 px-4 py-3">PCMB | PCMC | PCME</div>
                  <div className="rounded-xl bg-white/5 px-4 py-3">Academic guidance from Class 11 onwards</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
