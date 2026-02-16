// THE DARK - Cinematic dark theme
export default function TheDark({ businessName, tagline, services, phone, contactEmail }) {
  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      <section className="h-screen flex items-end pb-24 px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/50 to-transparent" />
        <div className="relative z-10">
          <p className="uppercase tracking-[0.4em] text-sm text-neutral-400 mb-4">{tagline}</p>
          <h1 className="text-7xl font-bold mb-4">{businessName}</h1>
          <p className="text-xl text-neutral-300">Real description. What you actually do.</p>
        </div>
      </section>
      <section className="px-12 py-24">
        {services?.map((s, i) => (
          <div key={i} className="border-b border-neutral-800 py-8 flex gap-8">
            <span className="text-6xl font-bold text-neutral-800">0{i+1}</span>
            <div>
              <h3 className="text-2xl font-semibold">{s.title}</h3>
              <p className="text-neutral-400">{s.description}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}
