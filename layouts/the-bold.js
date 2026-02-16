// THE BOLD - Brutalist yellow/black
export default function TheBold({ businessName, tagline, services, phone, contactEmail }) {
  return (
    <div className="min-h-screen bg-yellow-400 text-black">
      <section className="min-h-[80vh] p-8 flex flex-col justify-between">
        <div className="flex justify-between font-bold">
          <span>{businessName.toUpperCase()}</span>
          <span>SINCE 1987</span>
        </div>
        <div>
          <p className="text-2xl mb-4">{tagline}</p>
          <h1 className="text-8xl font-black tracking-tighter leading-[0.85]">{businessName.toUpperCase()}</h1>
        </div>
      </section>
      <section className="bg-black text-white p-8">
        <h2 className="text-6xl font-black mb-8">WHAT WE DO</h2>
        <div className="grid md:grid-cols-2 gap-px bg-white">
          {services?.map((s, i) => (
            <div key={i} className="bg-black p-8 hover:bg-neutral-900 transition-colors">
              <h3 className="text-3xl font-bold mb-2">{s.title.toUpperCase()}</h3>
              <p className="opacity-70">{s.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
