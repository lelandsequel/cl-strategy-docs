// LAYOUT: THE INK - Paper and ink sketch aesthetic
export default function TheInk({ businessName, tagline, services, phone, contactEmail }) {
  return (
    <div className="min-h-screen bg-[#faf8f5]">
      <main className="max-w-3xl mx-auto px-8 py-16">
        <header className="mb-16 border-b-2 border-gray-900 pb-8">
          <p className="text-sm text-gray-500 mb-2">~ {tagline} ~</p>
          <h1 className="text-5xl font-serif text-gray-900">{businessName}</h1>
        </header>
        <section className="mb-16">
          <p className="text-xl leading-relaxed text-gray-700 italic">
            "Simplicity is the ultimate sophistication. We craft experiences that feel like a well-drawn line — intentional, elegant, and timeless."
          </p>
        </section>
        <section className="space-y-12">
          {services?.map((s, i) => (
            <div key={i} className="relative pl-8 border-l-2 border-gray-200 hover:border-gray-900 transition-colors">
              <div className="absolute -left-3 top-0 w-5 h-5 bg-gray-900 rounded-full" />
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-gray-600 leading-relaxed">{s.description}</p>
            </div>
          ))}
        </section>
        <footer className="mt-16 pt-8 border-t-2 border-gray-900">
          <div className="flex justify-between items-center">
            <p className="text-gray-500">— The End —</p>
            <div className="text-right">
              <p className="text-gray-900 font-medium">{contactEmail}</p>
              <p className="text-gray-600">{phone}</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
