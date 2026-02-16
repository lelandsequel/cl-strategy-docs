// THE FILMSTRIP - Film strip frames aesthetic
export default function TheFilmstrip({ businessName, tagline, services, phone, contactEmail }) {
  return (
    <div className="min-h-screen bg-neutral-900">
      <header className="bg-black py-8 px-4 overflow-x-auto">
        <div className="flex gap-2 min-w-max">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="w-4 h-20 bg-neutral-800 flex items-center justify-center">
              <div className="w-2 h-2 rounded-sm bg-neutral-700"></div>
            </div>
          ))}
        </div>
      </header>

      <main className="px-4 md:px-8 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="bg-black p-2 mb-12">
            <div className="bg-gradient-to-b from-neutral-800 to-neutral-900 p-12 text-center">
              <span className="inline-block px-4 py-1 border border-white/20 text-white/60 text-sm mb-6">
                INTRODUCING
              </span>
              <h1 className="text-5xl md:text-8xl font-bold text-white mb-4 tracking-tight">
                {businessName}
              </h1>
              <p className="text-xl text-white/60 max-w-2xl mx-auto">
                {tagline}
              </p>
            </div>
          </div>

          <div className="space-y-2 mb-12">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="flex gap-2">
                <div className="w-4 h-4 bg-neutral-800 flex-shrink-0 mt-2"></div>
                <div className="flex-1 h-px bg-neutral-700"></div>
                <div className="w-4 h-4 bg-neutral-800 flex-shrink-0 mt-2"></div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services?.map((s, i) => (
              <div key={i} className="bg-black p-1">
                <div className="bg-neutral-800 aspect-video flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-neutral-700 to-neutral-800"></div>
                  <div className="relative z-10 text-center p-6">
                    <span className="text-4xl mb-4 block">
                      {['🎬', '📽️', '🎥', '🎞️', '🎪', '🌟'][i % 6]}
                    </span>
                    <h3 className="text-lg font-bold text-white">{s.title}</h3>
                  </div>
                </div>
                <div className="bg-black p-3 flex justify-between text-xs text-white/40">
                  <span>SCENE {String(i + 1).padStart(2, '0')}</span>
                  <span>01:30</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <div className="bg-black py-8 px-4 overflow-x-auto">
        <div className="flex gap-2 min-w-max">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="w-4 h-20 bg-neutral-800 flex items-center justify-center">
              <div className="w-2 h-2 rounded-sm bg-neutral-700"></div>
            </div>
          ))}
        </div>
      </div>

      <footer className="bg-neutral-900 py-12 px-8 border-t border-neutral-800">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-white/60 text-sm">
            © 2024 {businessName} • All Rights Reserved
          </div>
          <div className="flex gap-8 text-white">
            <a href={`tel:${phone}`} className="hover:text-white/70 transition-colors">{phone}</a>
            <a href={`mailto:${contactEmail}`} className="hover:text-white/70 transition-colors">{contactEmail}</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
