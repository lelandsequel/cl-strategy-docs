// THE CIRCUIT - Tech/circuit board aesthetic
export default function TheCircuit({ businessName, tagline, services, phone, contactEmail }) {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#00ff88] font-mono">
      <svg className="fixed inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#00ff88" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      <div className="relative z-10">
        <header className="border-b border-[#00ff88]/30 p-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#00ff88] animate-pulse"></div>
            <span className="text-xl tracking-widest">{businessName.toUpperCase()}</span>
          </div>
          <div className="text-sm opacity-70">SYS.ONLINE</div>
        </header>

        <main className="p-6 md:p-12">
          <div className="mb-12">
            <div className="inline-block px-3 py-1 border border-[#00ff88]/50 text-xs mb-4">
              {'>'} INIT_SEQUENCE
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              {businessName}
            </h1>
            <p className="text-[#00ff88] opacity-80 max-w-xl">
              <span className="inline-block w-2 h-4 bg-[#00ff88] mr-2 animate-pulse"></span>
              {tagline}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services?.map((s, i) => (
              <div 
                key={i} 
                className="group relative border border-[#00ff88]/30 bg-[#00ff88]/5 p-6 hover:bg-[#00ff88]/10 transition-all"
              >
                <div className="absolute top-0 left-0 w-4 h-4 border-l border-t border-[#00ff88]"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-r border-b border-[#00ff88]"></div>
                
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs">0{i + 1}</span>
                  <div className="h-px flex-1 bg-[#00ff88]/30"></div>
                </div>
                
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#00ff88] transition-colors">
                  {s.title.toUpperCase()}
                </h3>
                <p className="text-sm opacity-70">{s.description}</p>
                
                <div className="mt-4 text-xs font-mono opacity-50">
                  {'>'} READY
                </div>
              </div>
            ))}
          </div>
        </main>

        <footer className="border-t border-[#00ff88]/30 p-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="font-mono text-sm">
              <span className="opacity-50">EMAIL:</span> {contactEmail}
            </div>
            <div className="font-mono text-sm">
              <span className="opacity-50">TEL:</span> {phone}
            </div>
            <div className="flex gap-2">
              <div className="w-2 h-2 bg-[#00ff88] rounded-full animate-pulse"></div>
              <span className="text-xs">CONNECTED</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
