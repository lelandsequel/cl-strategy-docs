// THE CARD STACK - Stacked cards aesthetic
export default function TheCardStack({ businessName, tagline, services, phone, contactEmail }) {
  return (
    <div className="min-h-screen bg-neutral-900 py-20 px-8">
      <header className="text-center mb-24">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">{businessName}</h1>
        <p className="text-neutral-400 text-xl">{tagline}</p>
      </header>

      <div className="max-w-4xl mx-auto relative h-[500px]">
        {services?.slice(0, 5).map((s, i) => (
          <div
            key={i}
            className="absolute left-1/2 transform -translate-x-1/2 transition-all duration-500 hover:scale-105 cursor-pointer"
            style={{
              top: `${i * 30}px`,
              zIndex: services.length - i,
            }}
          >
            <div 
              className="w-80 md:w-96 rounded-3xl overflow-hidden shadow-2xl"
              style={{
                background: `linear-gradient(135deg, hsl(${200 + i * 30}, 70%, ${15 + i * 5}%) 0%, hsl(${180 + i * 30}, 60%, ${10 + i * 5}%) 100%)`,
                border: `1px solid hsl(${200 + i * 30}, 50%, ${20 + i * 5}%)`
              }}
            >
              <div className="h-40 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-4xl text-white/80">{['⚡', '💎', '🎯', '🚀', '⭐'][i]}</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white text-sm font-bold">
                    {i + 1}
                  </div>
                  <span className="text-white/50 text-sm">Service</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
                <p className="text-neutral-400 text-sm">{s.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <footer className="text-center mt-24">
        <div className="inline-flex gap-6 text-white">
          <a href={`tel:${phone}`} className="hover:text-neutral-300 transition-colors">
            <span className="mr-2">📞</span>{phone}
          </a>
          <a href={`mailto:${contactEmail}`} className="hover:text-neutral-300 transition-colors">
            <span className="mr-2">✉️</span>{contactEmail}
          </a>
        </div>
      </footer>
    </div>
  )
}
