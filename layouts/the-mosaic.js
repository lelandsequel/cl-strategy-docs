// LAYOUT: THE MOSAIC - Hexagonal tile mosaic
export default function TheMosaic({ businessName, tagline, services, phone, contactEmail }) {
  const hexagons = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L']
  
  return (
    <div className="min-h-screen bg-zinc-900">
      <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-900/90 backdrop-blur-sm px-8 py-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-zinc-100 tracking-wider">{businessName}</h1>
          <p className="text-zinc-500 text-sm">{tagline}</p>
        </div>
      </header>
      <main className="pt-28 pb-12 px-8">
        <section className="text-center mb-16">
          <h2 className="text-5xl font-bold text-zinc-100 mb-4">Fit together perfectly</h2>
          <p className="text-zinc-500 max-w-xl mx-auto">
            Like pieces of a mosaic, every element works in harmony to create something beautiful.
          </p>
        </section>
        <section className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {services?.map((s, i) => (
            <div 
              key={i} 
              className="group relative w-48 h-56 flex flex-col items-center justify-center bg-gradient-to-br from-violet-600/20 to-fuchsia-600/20 border border-violet-500/30 hover:border-violet-400 hover:from-violet-600/40 hover:to-fuchsia-600/40 transition-all clip-hexagon cursor-pointer"
              style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
            >
              <div className="text-center p-4">
                <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-violet-500/30 flex items-center justify-center">
                  <span className="text-violet-300 font-bold">{i + 1}</span>
                </div>
                <h3 className="text-zinc-100 font-semibold text-sm mb-1">{s.title}</h3>
                <p className="text-zinc-500 text-xs leading-tight">{s.description}</p>
              </div>
            </div>
          ))}
        </section>
        <section className="mt-16 text-center">
          <p className="text-zinc-400 mb-4">Let's create something together</p>
          <div className="flex justify-center gap-8 text-sm">
            <a href={`mailto:${contactEmail}`} className="text-violet-400 hover:text-violet-300 transition-colors">
              {contactEmail}
            </a>
            <span className="text-zinc-600">{phone}</span>
          </div>
        </section>
      </main>
    </div>
  )
}
