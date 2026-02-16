// LAYOUT: THE DOCK - macOS dock style navigation
export default function TheDock({ businessName, tagline, services, phone, contactEmail }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      <main className="pb-32">
        <section className="h-screen flex flex-col items-center justify-center text-center px-6">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl mb-8 shadow-2xl flex items-center justify-center">
            <span className="text-3xl text-white font-bold">{businessName.charAt(0)}</span>
          </div>
          <h1 className="text-4xl font-semibold text-white mb-2">{businessName}</h1>
          <p className="text-slate-400 mb-8">{tagline}</p>
          <div className="flex gap-4">
            <button className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors">
              Get Started
            </button>
            <button className="px-6 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors">
              Learn More
            </button>
          </div>
        </section>
        <section className="max-w-5xl mx-auto px-6 -mt-8">
          <div className="grid md:grid-cols-3 gap-4">
            {services?.slice(0, 6).map((s, i) => (
              <div 
                key={i} 
                className="group bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:bg-slate-700/80 hover:border-blue-500/50 transition-all"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-white text-sm font-semibold">{i + 1}</span>
                </div>
                <h3 className="text-white font-semibold mb-2">{s.title}</h3>
                <p className="text-slate-400 text-sm">{s.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer className="fixed bottom-0 left-0 right-0 bg-slate-900/80 backdrop-blur-md border-t border-slate-700 py-4">
        <div className="max-w-5xl mx-auto flex justify-center gap-8 text-sm">
          <a href={`tel:${phone}`} className="text-slate-400 hover:text-white transition-colors">
            📞 {phone}
          </a>
          <a href={`mailto:${contactEmail}`} className="text-slate-400 hover:text-white transition-colors">
            ✉️ {contactEmail}
          </a>
        </div>
      </footer>
    </div>
  )
}
