// LAYOUT: THE HORIZON - Horizontal scroll with depth layers
export default function TheHorizon({ businessName, tagline, services, phone, contactEmail }) {
  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
      <header className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center">
        <h1 className="text-white font-light tracking-[0.2em]">{businessName}</h1>
        <div className="flex gap-6 text-white/60 text-sm">
          <span className="hover:text-white cursor-pointer">→</span>
        </div>
      </header>
      <main className="flex overflow-x-auto h-screen items-center px-8 gap-24">
        <section className="flex-shrink-0 w-[500px]">
          <p className="text-purple-400 tracking-[0.4em] text-sm mb-4">{tagline}</p>
          <h2 className="text-5xl text-white font-bold mb-6 leading-tight">
            Beyond the<br/>horizon
          </h2>
          <p className="text-white/70 leading-relaxed">
            Pushing boundaries and exploring new dimensions in everything we create.
          </p>
          <div className="mt-8 flex gap-4">
            <div className="w-2 h-2 bg-purple-500 rounded-full" />
            <div className="w-2 h-2 bg-white/30 rounded-full" />
            <div className="w-2 h-2 bg-white/30 rounded-full" />
          </div>
        </section>
        {services?.map((s, i) => (
          <div 
            key={i} 
            className="flex-shrink-0 w-[350px] bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/20 transition-all"
          >
            <div className="text-6xl font-black text-white/10 mb-4">0{i + 1}</div>
            <h3 className="text-2xl font-bold text-white mb-3">{s.title}</h3>
            <p className="text-white/70">{s.description}</p>
          </div>
        ))}
        <section className="flex-shrink-0 w-[300px]">
          <p className="text-white/60 mb-4">Ready to begin?</p>
          <a href={`mailto:${contactEmail}`} className="text-purple-400 hover:text-purple-300 text-lg">
            {contactEmail}
          </a>
          <p className="text-white/40 mt-2">{phone}</p>
        </section>
      </main>
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 text-white/40 text-xs">
        ← SCROLL HORIZONTALLY →
      </div>
    </div>
  )
}
