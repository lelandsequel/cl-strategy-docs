// THE MINIMAL - Bare bones
export default function TheMinimal({ businessName, tagline, services, phone, contactEmail }) {
  return (
    <div className="min-h-screen font-sans">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur z-50 flex justify-between px-6 py-4 border-b">
        <strong>{businessName}</strong>
        <nav className="flex gap-6 text-sm"><a href="#services">Services</a><a href="#contact">Contact</a></nav>
      </header>
      <main className="pt-32 px-6 max-w-2xl mx-auto">
        <p className="text-lg text-neutral-500 mb-12">{tagline}</p>
        <section id="services" className="mb-16">
          <h2 className="text-xs uppercase tracking-widest text-neutral-400 mb-6">Services</h2>
          {services?.map((s, i) => (
            <div key={i} className="border-b border-neutral-200 pb-4 mb-4">
              <h3 className="font-medium text-lg">{s.title}</h3>
              <p className="text-neutral-600">{s.description}</p>
            </div>
          ))}
        </section>
        <section id="contact" className="mb-16">
          <h2 className="text-xs uppercase tracking-widest text-neutral-400 mb-6">Contact</h2>
          <p className="mb-2">{phone}</p>
          <a href={`mailto:${contactEmail}`} className="underline">{contactEmail}</a>
        </section>
      </main>
    </div>
  )
}
