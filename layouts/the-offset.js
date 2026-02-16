// THE OFFSET - Asymmetric, offset layout
export default function TheOffset({ businessName, tagline, services, phone, contactEmail }) {
  return (
    <div className="min-h-screen bg-stone-50 overflow-x-hidden">
      <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 p-6 flex justify-between items-center">
        <span className="text-2xl font-light tracking-widest">{businessName}</span>
        <a href={`mailto:${contactEmail}`} className="text-sm underline underline-offset-4">Contact</a>
      </nav>

      <section className="pt-32 pb-16 px-4 md:px-16">
        <div className="max-w-4xl ml-auto mr-0 md:mr-24">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500 mb-4">{tagline}</p>
          <h1 className="text-7xl md:text-9xl font-serif leading-[0.85] text-neutral-900">
            {businessName.split(' ').map((word, i) => (
              <span key={i} className="block" style={{ marginLeft: i % 2 === 1 ? '2rem' : '0' }}>
                {word}
              </span>
            ))}
          </h1>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="grid md:grid-cols-12 gap-4">
          {services?.map((s, i) => (
            <div 
              key={i} 
              className={`md:col-span-4 p-8 md:p-12 ${i % 2 === 0 ? 'md:mt-0' : 'md:mt-24'}`}
            >
              <span className="text-6xl font-light text-neutral-200">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="text-2xl font-medium mt-4 mb-2">{s.title}</h3>
              <p className="text-neutral-600 leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-neutral-900 text-white py-24 px-4 md:px-16">
        <div className="md:ml-24">
          <h2 className="text-4xl font-light mb-8">Let's work together</h2>
          <a href={`mailto:${contactEmail}`} className="text-2xl underline decoration-1 underline-offset-8 hover:text-neutral-300">
            {contactEmail}
          </a>
        </div>
      </section>
    </div>
  )
}
