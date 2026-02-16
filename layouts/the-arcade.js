// LAYOUT: THE ARCADE - Retro gaming neon aesthetic
export default function TheArcade({ businessName, tagline, services, phone, contactEmail }) {
  return (
    <div className="min-h-screen bg-black font-mono">
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/30 via-black to-black" />
      </div>
      <header className="relative z-10 border-b border-purple-500/30">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 animate-pulse">
            {businessName}
          </h1>
          <div className="flex gap-4 text-xs">
            {['START', 'OPTIONS', 'HIGH SCORE'].map((label) => (
              <span key={label} className="text-cyan-400/60 hover:text-cyan-400 cursor-pointer transition-colors">
                [{label}]
              </span>
            ))}
          </div>
        </div>
      </header>
      <main className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <section className="mb-16 border-2 border-cyan-500/30 p-8 bg-cyan-950/20">
          <p className="text-cyan-400 tracking-[0.5em] text-xs mb-2 animate-pulse">{tagline}</p>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4 drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]">
            LEVEL UP
          </h2>
          <p className="text-purple-400">Your journey begins now. Press START to continue.</p>
        </section>
        <section className="grid md:grid-cols-2 gap-6">
          {services?.map((s, i) => (
            <div 
              key={i} 
              className="border-2 border-purple-500/40 p-6 hover:border-cyan-400 hover:bg-cyan-950/30 transition-all group cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-3">
                <span className="text-2xl font-bold text-cyan-400">P{i + 1}</span>
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300">{s.title}</h3>
              </div>
              <p className="text-purple-300 text-sm font-mono">{s.description}</p>
            </div>
          ))}
        </section>
      </main>
      <footer className="relative z-10 border-t border-purple-500/30 mt-12 py-6 text-center">
        <p className="text-xs text-purple-500 font-mono">INSERT COIN TO CONTINUE • {phone}</p>
      </footer>
    </div>
  )
}
