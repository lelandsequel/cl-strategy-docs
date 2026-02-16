// LAYOUT: THE LENS - Focus reveal with circular zoom
export default function TheLens({ businessName, tagline, services, phone, contactEmail }) {
  return (
    <div className="min-h-screen bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-amber-500/20 via-orange-500/10 to-transparent rounded-full blur-3xl" />
      </div>
      <header className="relative z-10 flex justify-between items-center px-12 py-8">
        <h1 className="text-2xl font-bold text-white tracking-tight">{businessName}</h1>
        <nav className="flex gap-8 text-sm text-zinc-400">
          <a href="#services" className="hover:text-amber-400 transition-colors">Services</a>
          <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
        </nav>
      </header>
      <main className="relative z-10 px-12 py-8">
        <section className="min-h-[60vh] flex items-center">
          <div className="max-w-xl">
            <p className="text-amber-500 tracking-[0.3em] text-sm mb-4 uppercase">{tagline}</p>
            <h2 className="text-6xl font-bold text-white mb-6 leading-tight">
              Focus on<br/><span className="text-amber-500">what matters</span>
            </h2>
            <p className="text-zinc-400 text-lg">
              We help you cut through the noise and concentrate on your core mission.
            </p>
          </div>
          <div className="absolute right-20 w-[400px] h-[400px] border-2 border-amber-500/30 rounded-full flex items-center justify-center">
            <div className="w-[350px] h-[350px] border border-zinc-700 rounded-full" />
          </div>
        </section>
        <section id="services" className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services?.map((s, i) => (
            <div 
              key={i} 
              className="group relative p-6 border border-zinc-800 hover:border-amber-500/50 transition-all bg-zinc-900/50"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-500/0 group-hover:from-amber-500/10 group-hover:to-transparent transition-all" />
              <div className="relative">
                <div className="w-10 h-10 rounded-full border border-amber-500/30 flex items-center justify-center mb-4 group-hover:border-amber-500 group-hover:bg-amber-500/20 transition-all">
                  <span className="text-amber-500 text-sm font-bold">{i + 1}</span>
                </div>
                <h3 className="text-white font-semibold mb-2">{s.title}</h3>
                <p className="text-zinc-500 text-sm">{s.description}</p>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  )
}
