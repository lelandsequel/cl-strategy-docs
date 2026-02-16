// LAYOUT: THE NEXUS - Central hub with radial spokes
export default function TheNexus({ businessName, tagline, services, phone, contactEmail }) {
  return (
    <div className="min-h-screen bg-[#0c0c0c] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-cyan-500/10 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-cyan-500/20 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] border border-cyan-500/30 rounded-full" />
      </div>
      <header className="relative z-10 px-8 py-6 flex justify-between items-center">
        <h1 className="text-xl font-bold text-white tracking-[0.2em]">{businessName}</h1>
        <span className="text-cyan-500/60 text-sm">{tagline}</span>
      </header>
      <main className="relative z-10 min-h-[80vh] flex items-center justify-center">
        <div className="relative w-[600px] h-[600px]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(6,182,212,0.5)]">
              <span className="text-3xl text-white font-bold">{businessName.charAt(0)}</span>
            </div>
            <p className="text-cyan-400 text-sm mt-4 tracking-widest">THE NEXUS</p>
          </div>
          {services?.slice(0, 6).map((s, i) => {
            const angle = (i * 60 - 90) * (Math.PI / 180)
            const radius = 200
            const x = Math.cos(angle) * radius
            const y = Math.sin(angle) * radius
            return (
              <div
                key={i}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40"
                style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
              >
                <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-700 p-4 rounded-lg hover:border-cyan-500/50 hover:bg-zinc-800/80 transition-all text-center">
                  <h3 className="text-white font-semibold text-sm mb-1">{s.title}</h3>
                  <p className="text-zinc-500 text-xs">{s.description.substring(0, 40)}...</p>
                </div>
              </div>
            )
          })}
        </div>
      </main>
      <footer className="relative z-10 px-8 py-6 flex justify-between items-center text-zinc-500 text-sm">
        <p>Connected to everything</p>
        <div className="flex gap-6">
          <a href={`mailto:${contactEmail}`} className="hover:text-cyan-400 transition-colors">{contactEmail}</a>
          <span>{phone}</span>
        </div>
      </footer>
    </div>
  )
}
