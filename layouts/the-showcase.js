// THE SHOWCASE - Photo showcase aesthetic
export default function TheShowcase({ businessName, tagline, services, phone, contactEmail }) {
  const colors = ['from-rose-400 to-orange-300', 'from-cyan-400 to-blue-500', 'from-violet-400 to-purple-600', 'from-emerald-400 to-teal-500'];
  
  return (
    <div className="min-h-screen bg-black">
      <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center bg-black/50 backdrop-blur-sm">
        <span className="text-white text-xl font-light tracking-wider">{businessName}</span>
        <a href={`mailto:${contactEmail}`} className="text-white/70 hover:text-white transition-colors">Get in touch</a>
      </nav>

      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 gap-2 p-2">
          {[...Array(8)].map((_, i) => (
            <div 
              key={i} 
              className={`bg-gradient-to-br ${colors[i % 4]} opacity-50`}
            />
          ))}
        </div>
        
        <div className="relative z-10 text-center px-8">
          <h1 className="text-6xl md:text-9xl font-black text-white mb-6 tracking-tighter">
            {businessName}
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto">
            {tagline}
          </p>
        </div>
      </section>

      <section className="py-24 px-4 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services?.map((s, i) => (
            <div 
              key={i} 
              className="group relative aspect-square overflow-hidden rounded-2xl"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${colors[i % 4]} group-hover:scale-110 transition-transform duration-700`} />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <span className="text-white/60 text-sm mb-1">0{i + 1}</span>
                <h3 className="text-2xl font-bold text-white mb-2">{s.title}</h3>
                <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-8 text-center bg-white text-black">
        <h2 className="text-4xl font-light mb-8">Ready to work together?</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          <a href={`tel:${phone}`} className="text-xl hover:underline">{phone}</a>
          <a href={`mailto:${contactEmail}`} className="text-xl hover:underline">{contactEmail}</a>
        </div>
      </section>
    </div>
  )
}
