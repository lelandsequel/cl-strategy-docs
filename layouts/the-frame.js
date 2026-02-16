// THE FRAME - Window frame aesthetic
export default function TheFrame({ businessName, tagline, services, phone, contactEmail }) {
  return (
    <div className="min-h-screen bg-neutral-100">
      <header className="bg-neutral-900 text-white p-4 flex items-center gap-4">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span className="font-mono text-sm">{businessName} — Home</span>
      </header>
      
      <main className="p-8">
        <div className="bg-white shadow-2xl border border-neutral-200 mb-8">
          <div className="bg-gradient-to-br from-blue-600 to-purple-700 h-64 flex items-center justify-center">
            <h1 className="text-5xl font-bold text-white drop-shadow-lg">{businessName}</h1>
          </div>
          <div className="p-8">
            <p className="text-xl text-neutral-600 font-serif italic">{tagline}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services?.map((s, i) => (
            <div key={i} className="bg-white border-4 border-neutral-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
              <div className="bg-neutral-900 text-white p-3 font-mono text-sm">
                {`> service_${i + 1}.exe`}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-neutral-600">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-neutral-900 text-white p-8 mt-8">
        <div className="flex justify-between items-center">
          <span className="font-mono text-sm opacity-60">© 2024 {businessName}</span>
          <span className="font-mono text-sm">{phone}</span>
        </div>
      </footer>
    </div>
  )
}
