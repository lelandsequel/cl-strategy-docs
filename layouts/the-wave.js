'use client';

export default function TheWave() {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Section 1 - Hero */}
      <section className="relative bg-indigo-900 h-screen flex items-center justify-center overflow-hidden">
        {/* Wave SVG Background */}
        <svg className="absolute bottom-0 left-0 w-full h-40 text-indigo-800" viewBox="0 0 1440 160" preserveAspectRatio="none">
          <path fill="currentColor" d="M0,64 C288,160 576,32 864,64 C1152,96 1440,32 1440,32 L1440,160 L0,160 Z" />
        </svg>
        
        <div className="relative z-10 text-center px-8">
          <h1 className="text-6xl md:text-8xl font-black text-white mb-4">
            Ride the <span className="text-indigo-400">Wave</span>
          </h1>
          <p className="text-indigo-200 text-xl max-w-xl">
            Smooth curves meet bold design. Let the flow guide you.
          </p>
        </div>
      </section>

      {/* Section 2 - Features */}
      <section className="relative bg-indigo-800 -mt-1 overflow-hidden">
        <svg className="absolute top-0 left-0 w-full h-40 text-indigo-900 -scale-y-100" viewBox="0 0 1440 160" preserveAspectRatio="none">
          <path fill="currentColor" d="M0,64 C288,160 576,32 864,64 C1152,96 1440,32 1440,32 L1440,160 L0,160 Z" />
        </svg>

        <div className="container mx-auto px-8 py-32 relative z-10">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: '∿', title: 'Fluid Motion', desc: 'Smooth transitions that flow naturally' },
              { icon: '≋', title: 'Organic Shapes', desc: 'Design that breathes and moves' },
              { icon: '∫', title: 'Continuous Flow', desc: 'No breaks, only transitions' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <span className="text-6xl text-indigo-400/50 mb-4 block">{item.icon}</span>
                <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-indigo-200">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Wave Divider */}
        <svg className="absolute bottom-0 left-0 w-full h-40 text-indigo-700" viewBox="0 0 1440 160" preserveAspectRatio="none">
          <path fill="currentColor" d="M0,64 C288,160 576,32 864,64 C1152,96 1440,32 1440,32 L1440,160 L0,160 Z" />
        </svg>
      </section>

      {/* Section 3 - Content */}
      <section className="relative bg-indigo-700 -mt-1 overflow-hidden">
        <svg className="absolute top-0 left-0 w-full h-40 text-indigo-800 -scale-y-100" viewBox="0 0 1440 160" preserveAspectRatio="none">
          <path fill="currentColor" d="M0,64 C288,160 576,32 864,64 C1152,96 1440,32 1440,32 L1440,160 L0,160 Z" />
        </svg>

        <div className="container mx-auto px-8 py-32 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-white mb-8">
              Feel the <span className="text-indigo-300">Rhythm</span>
            </h2>
            <p className="text-indigo-100 text-lg leading-relaxed">
              Like ocean waves, design should rise and fall naturally. 
              Each section flows into the next, creating an experience 
              that's both predictable and surprising.
            </p>
          </div>
        </div>

        <svg className="absolute bottom-0 left-0 w-full h-40 text-indigo-600" viewBox="0 0 1440 160" preserveAspectRatio="none">
          <path fill="currentColor" d="M0,64 C288,160 576,32 864,64 C1152,96 1440,32 1440,32 L1440,160 L0,160 Z" />
        </svg>
      </section>

      {/* Section 4 - CTA */}
      <section className="relative bg-indigo-600 -mt-1 overflow-hidden">
        <svg className="absolute top-0 left-0 w-full h-40 text-indigo-700 -scale-y-100" viewBox="0 0 1440 160" preserveAspectRatio="none">
          <path fill="currentColor" d="M0,64 C288,160 576,32 864,64 C1152,96 1440,32 1440,32 L1440,160 L0,160 Z" />
        </svg>

        <div className="container mx-auto px-8 py-32 relative z-10">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Ready to <span className="text-indigo-200">Dive In?</span>
            </h2>
            <button className="px-10 py-4 bg-white text-indigo-900 font-bold text-lg hover:bg-indigo-50 transition-colors rounded-full">
              Get Started
            </button>
          </div>
        </div>

        {/* Bottom Wave */}
        <svg className="absolute bottom-0 left-0 w-full h-40 text-indigo-900" viewBox="0 0 1440 160" preserveAspectRatio="none">
          <path fill="currentColor" d="M0,64 C288,160 576,32 864,64 C1152,96 1440,32 1440,32 L1440,160 L0,160 Z" />
        </svg>
      </section>

      {/* Footer */}
      <section className="bg-indigo-950 py-12">
        <div className="container mx-auto px-8 text-center text-indigo-300">
          <p>© 2024 Wave Design. All rights reserved.</p>
        </div>
      </section>
    </div>
  );
}
