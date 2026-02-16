// LAYOUT: THE KIOSK - Full-screen interactive kiosk
export default function TheKiosk({ businessName, tagline, services, phone, contactEmail }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-zinc-900 flex flex-col">
      <header className="flex-1 flex flex-col items-center justify-center px-8 text-center">
        <div className="w-32 h-32 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-full mb-8 flex items-center justify-center shadow-[0_0_60px_rgba(52,211,153,0.4)]">
          <span className="text-5xl text-white font-bold">{businessName.charAt(0)}</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">{businessName}</h1>
        <p className="text-xl text-emerald-400 mb-8">{tagline}</p>
        <div className="flex gap-4">
          <button className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-lg transition-all hover:scale-105">
            Tap to Begin
          </button>
        </div>
      </header>
      <section className="flex-1 bg-black/20 backdrop-blur-sm p-8">
        <div className="grid md:grid-cols-3 gap-6 h-full">
          {services?.slice(0, 3).map((s, i) => (
            <div 
              key={i} 
              className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 hover:border-emerald-500/50 transition-all cursor-pointer"
            >
              <div className="w-12 h-12 bg-emerald-500/20 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-emerald-400 text-xl font-bold">{i + 1}</span>
              </div>
              <h3 className="text-white font-semibold mb-2">{s.title}</h3>
              <p className="text-white/60 text-sm">{s.description}</p>
            </div>
          ))}
        </div>
      </section>
      <footer className="bg-black/40 px-8 py-4 flex justify-between items-center text-white/60 text-sm">
        <p>Touch screen to interact</p>
        <p>{phone} • {contactEmail}</p>
      </footer>
    </div>
  )
}
