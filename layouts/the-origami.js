// LAYOUT: THE ORIGAMI - Folded paper aesthetic
export default function TheOrigami({ businessName, tagline, services, phone, contactEmail }) {
  return (
    <div className="min-h-screen bg-[#f4f1ea]">
      <div className="fixed inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="black" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>
      <header className="relative z-10 px-12 py-8">
        <h1 className="text-3xl font-bold text-zinc-800">{businessName}</h1>
        <p className="text-zinc-500 mt-2">{tagline}</p>
      </header>
      <main className="relative z-10 px-12 py-8">
        <section className="mb-16">
          <div className="bg-white shadow-lg transform rotate-1 hover:rotate-0 transition-transform duration-300" style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)' }}>
            <div className="p-12 border-l-4 border-zinc-300">
              <h2 className="text-4xl font-bold text-zinc-800 mb-4">Crafted with care</h2>
              <p className="text-zinc-600 text-lg">Every fold tells a story. Every detail matters.</p>
            </div>
          </div>
        </section>
        <section className="grid md:grid-cols-2 gap-8">
          {services?.map((s, i) => (
            <div 
              key={i} 
              className="bg-white shadow-md p-8 hover:shadow-xl transition-shadow duration-300"
              style={{ 
                clipPath: i % 2 === 0 ? 'polygon(0 0, 100% 0, 100% 85%, 90% 100%, 0 100%)' : 'polygon(10% 0, 100% 0, 100% 100%, 0 100%, 0 15%)'
              }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-zinc-100 flex items-center justify-center flex-shrink-0" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}>
                  <span className="text-zinc-600 font-bold">{i + 1}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-zinc-800 mb-2">{s.title}</h3>
                  <p className="text-zinc-600">{s.description}</p>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
      <footer className="relative z-10 mt-16 bg-zinc-800 text-white p-8">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div>
            <p className="font-bold">{businessName}</p>
            <p className="text-zinc-400 text-sm mt-1">~ Folded with love ~</p>
          </div>
          <div className="text-right text-sm">
            <p>{contactEmail}</p>
            <p className="text-zinc-400">{phone}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
