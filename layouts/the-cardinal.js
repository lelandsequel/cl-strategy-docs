// LAYOUT: THE CARDINAL - Card masonry with magnetic hover
export default function TheCardinal({ businessName, tagline, services, phone, contactEmail }) {
  return (
    <div className="min-h-screen bg-stone-50">
      <header className="fixed top-0 left-0 right-0 z-50 bg-stone-50/90 backdrop-blur-sm border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight">{businessName}</h1>
          <nav className="flex gap-6 text-sm">
            <a href="#services" className="hover:text-red-600 transition-colors">Services</a>
            <a href="#contact" className="hover:text-red-600 transition-colors">Contact</a>
          </nav>
        </div>
      </header>
      <main className="pt-24 px-6 pb-12 max-w-6xl mx-auto">
        <section className="mb-16 text-center py-12">
          <p className="uppercase tracking-[0.25em] text-xs text-red-600 mb-4">{tagline}</p>
          <h2 className="text-5xl font-bold text-stone-900 mb-6">We build things</h2>
          <p className="text-stone-600 max-w-xl mx-auto">Passionately crafting solutions that matter.</p>
        </section>
        <section id="services" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services?.map((s, i) => (
            <div 
              key={i} 
              className="group bg-white p-8 border border-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors">
                <span className="text-red-600 group-hover:text-white font-bold">{i + 1}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-stone-600 text-sm">{s.description}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  )
}
