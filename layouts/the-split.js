// LAYOUT: THE SPLIT - Asymmetric hero
export default function TheSplit({ businessName, tagline, services, phone, contactEmail }) {
  return (
    <div className="min-h-screen">
      <section className="relative min-h-[70vh] flex">
        <div className="w-full md:w-[55%] bg-neutral-900 p-12 flex flex-col justify-center">
          <p className="uppercase tracking-[0.3em] text-sm opacity-70 mb-4">{tagline}</p>
          <h1 className="text-6xl font-bold mb-6">{businessName}</h1>
          <p className="text-xl opacity-80">Real description of what you do. No buzzwords.</p>
        </div>
        <div className="hidden md:block w-[45%] bg-gradient-to-br from-red-900 to-red-700" />
      </section>
      <section className="p-12">
        <h2 className="text-3xl font-bold mb-8">What We Do</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services?.map((s, i) => (
            <div key={i} className="border-t-2 border-black pt-4">
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="opacity-70">{s.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
