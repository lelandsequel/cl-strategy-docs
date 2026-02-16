// LAYOUT: THE VEIL - Curtain reveal animations
export default function TheVeil({ businessName, tagline, services, phone, contactEmail }) {
  return (
    <div className="min-h-screen bg-zinc-950">
      <header className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center bg-zinc-950/80 backdrop-blur-sm">
        <h1 className="text-2xl font-bold text-white">{businessName}</h1>
        <div className="flex gap-6 text-sm text-zinc-400">
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
      </header>
      <main>
        <section className="h-screen flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-zinc-950 to-zinc-900" />
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-rose-500 to-orange-500 rounded-full blur-[100px]" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full blur-[100px]" />
          </div>
          <div className="relative z-10 text-center px-8">
            <p className="text-rose-400 tracking-[0.4em] text-sm mb-6 uppercase">{tagline}</p>
            <h2 className="text-6xl md:text-8xl font-bold text-white mb-8">
              Lift the<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-orange-400 to-rose-400">veil</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-md mx-auto">
              Discover what's hidden beneath the surface.
            </p>
            <div className="mt-12">
              <div className="w-px h-16 bg-gradient-to-b from-white to-transparent mx-auto animate-pulse" />
            </div>
          </div>
        </section>
        <section id="services" className="py-24 px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {services?.map((s, i) => (
                <div 
                  key={i} 
                  className="group bg-zinc-900/50 border border-zinc-800 p-8 hover:border-rose-500/30 transition-all duration-500 hover:translate-x-2"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-rose-500/20 to-orange-500/20 rounded-lg flex items-center justify-center group-hover:from-rose-500/40 group-hover:to-orange-500/40 transition-all">
                      <span className="text-rose-400 font-bold">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white">{s.title}</h3>
                  </div>
                  <p className="text-zinc-400">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="py-24 px-8 bg-gradient-to-t from-zinc-900">
          <div className="max-w-xl mx-auto text-center">
            <p className="text-zinc-500 mb-4">Ready to see more?</p>
            <a href={`mailto:${contactEmail}`} className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-400 hover:from-rose-300 hover:to-orange-300 transition-all">
              {contactEmail}
            </a>
            <p className="text-zinc-500 mt-4">{phone}</p>
          </div>
        </section>
      </main>
    </div>
  )
}
