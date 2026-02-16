// LAYOUT: THE PANORAMA - Wide panoramic scrolling
export default function ThePanorama({ businessName, tagline, services, phone, contactEmail }) {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 overflow-x-auto">
      <header className="fixed top-0 left-0 z-50 px-8 py-6 w-[200vw] flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white tracking-widest">{businessName}</h1>
        <span className="text-white/60">{tagline}</span>
      </header>
      <main className="flex h-screen items-center px-8 w-[200vw]">
        <section className="flex-shrink-0 w-[40vw] pr-16">
          <p className="text-pink-400 tracking-[0.3em] text-sm mb-4 uppercase">Welcome to</p>
          <h2 className="text-7xl font-bold text-white mb-6 leading-tight">
            A wider<br/>perspective
          </h2>
          <p className="text-white/70 text-xl leading-relaxed">
            Step beyond the ordinary and experience the breadth of what's possible.
          </p>
        </section>
        <section className="flex-shrink-0 w-[30vw] mx-16">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-2xl">
            <p className="text-white/40 text-sm mb-4">SCROLL →</p>
            <h3 className="text-3xl font-bold text-white mb-4">Our Services</h3>
            <div className="space-y-4">
              {services?.slice(0, 3).map((s, i) => (
                <div key={i} className="border-b border-white/10 pb-4">
                  <p className="text-pink-300 font-semibold">{s.title}</p>
                  <p className="text-white/60 text-sm">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {services?.slice(3).map((s, i) => (
          <div 
            key={i} 
            className="flex-shrink-0 w-[25vw] mx-4 bg-white/5 border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-all"
          >
            <div className="text-8xl font-black text-white/10 mb-4">{i + 4}</div>
            <h3 className="text-2xl font-bold text-white mb-2">{s.title}</h3>
            <p className="text-white/60">{s.description}</p>
          </div>
        ))}
        <section className="flex-shrink-0 w-[20vw] ml-16">
          <p className="text-white/60 mb-4">Get in touch</p>
          <a href={`mailto:${contactEmail}`} className="text-pink-400 text-xl hover:text-pink-300 transition-colors block mb-2">
            {contactEmail}
          </a>
          <p className="text-white/40">{phone}</p>
        </section>
      </main>
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 text-white/40 text-sm">
        ← Scroll horizontally →
      </div>
    </div>
  )
}
