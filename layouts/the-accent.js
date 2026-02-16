'use client';

export default function TheAccent() {
  const features = [
    { title: 'Bold Vision', desc: 'We see what others miss', icon: '◈' },
    { title: 'Fresh Approach', desc: 'New perspectives daily', icon: '◇' },
    { title: 'Clear Focus', desc: 'Precision in every detail', icon: '◈' },
    { title: 'Smart Flow', desc: 'Seamless experiences', icon: '◇' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Accent */}
      <header className="relative py-20 px-8 bg-neutral-900 overflow-hidden">
        {/* Accent Bar */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500" />
        
        <div className="max-w-6xl mx-auto">
          <p className="text-orange-500 tracking-[0.3em] uppercase text-sm font-bold mb-4">
            Introducing
          </p>
          <h1 className="text-6xl md:text-8xl font-black text-white leading-none">
            THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500">FUTURE</span>
          </h1>
          <p className="mt-6 text-xl text-neutral-400 max-w-xl">
            Where bold accents meet refined design. Make your statement.
          </p>
        </div>

        {/* Accent Circle */}
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-br from-yellow-400 to-pink-500 opacity-20 blur-3xl" />
      </header>

      {/* Accent Grid Section */}
      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto">
          {/* Accent Line */}
          <div className="w-24 h-2 bg-yellow-400 mb-16" />
          
          <h2 className="text-5xl font-bold text-neutral-900 mb-12">
            Accentuate <span className="text-orange-500">Your</span> Presence
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, i) => (
              <div 
                key={i}
                className="group p-8 border-2 border-neutral-200 hover:border-orange-500 transition-all duration-300 relative overflow-hidden"
              >
                {/* Accent Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative">
                  <span className="text-5xl text-orange-500 mb-4 block">{feature.icon}</span>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">{feature.title}</h3>
                  <p className="text-neutral-600">{feature.desc}</p>
                </div>

                {/* Corner Accent */}
                <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[30px] border-l-transparent border-b-[30px] border-b-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Accent Banner */}
      <section className="py-24 bg-neutral-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-8">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8">
            MAKE IT <span className="text-yellow-400">POP</span>
          </h2>
          <p className="text-xl text-neutral-400 mb-8">
            Colors that demand attention. Design that delivers results.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 text-white font-bold text-lg hover:shadow-lg hover:shadow-orange-500/30 transition-all hover:scale-105">
            Get Started →
          </button>
        </div>
      </section>

      {/* Cards with Accent */}
      <section className="py-24 px-8 bg-neutral-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-8 shadow-lg relative">
                {/* Left Accent */}
                <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-yellow-400 to-pink-500" />
                
                <div className="pl-6">
                  <span className="text-4xl font-black text-neutral-200">{i}</span>
                  <h3 className="text-xl font-bold text-neutral-900 mt-4">Feature Point</h3>
                  <p className="text-neutral-600 mt-2">
                    Something compelling about this feature that matters to users.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 bg-neutral-900 border-t-4 border-orange-500">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <p className="text-neutral-500">© 2024 Bold Design Co.</p>
          <div className="flex gap-4">
            {['●', '●', '●'].map((dot, i) => (
              <span key={i} className={`w-3 h-3 rounded-full ${i === 1 ? 'bg-orange-500' : 'bg-neutral-700'}`} />
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
