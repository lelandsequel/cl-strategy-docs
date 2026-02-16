// LAYOUT: THE GRIDIRON - Dense spreadsheet data aesthetic
export default function TheGridiron({ businessName, tagline, services, phone, contactEmail }) {
  return (
    <div className="min-h-screen bg-[#1a1a2e] font-mono text-sm">
      <header className="bg-[#16213e] border-b border-gray-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex gap-1">
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span className="w-3 h-3 rounded-full bg-yellow-500" />
              <span className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <h1 className="text-gray-300">{businessName}.sheet</h1>
          </div>
          <span className="text-gray-500 text-xs">Last saved: just now</span>
        </div>
      </header>
      <main className="p-6 overflow-x-auto">
        <section className="mb-8">
          <div className="inline-block bg-[#0f3460] px-4 py-2 rounded-t-lg">
            <p className="text-gray-400 text-xs">A1</p>
            <p className="text-blue-400">{tagline}</p>
          </div>
          <div className="mt-4">
            <h2 className="text-3xl text-white font-bold">DATA_DRIVEN_SOLUTIONS</h2>
          </div>
        </section>
        <section>
          <div className="bg-[#16213e] rounded-lg overflow-hidden border border-gray-700">
            <div className="grid grid-cols-[60px_1fr_2fr] gap-1 bg-[#0f3460] p-2 text-gray-400 text-xs">
              <span>#</span>
              <span>SERVICE</span>
              <span>DESCRIPTION</span>
            </div>
            {services?.map((s, i) => (
              <div 
                key={i} 
                className="grid grid-cols-[60px_1fr_2fr] gap-1 p-3 border-t border-gray-700 hover:bg-[#0f3460]/50 transition-colors"
              >
                <span className="text-gray-500">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-green-400 font-semibold">{s.title.toUpperCase()}</span>
                <span className="text-gray-300">{s.description}</span>
              </div>
            ))}
          </div>
        </section>
        <section className="mt-12 flex gap-4">
          <div className="bg-[#16213e] p-4 rounded border border-gray-700">
            <p className="text-gray-500 text-xs mb-1">CONTACT</p>
            <p className="text-white">{contactEmail}</p>
          </div>
          <div className="bg-[#16213e] p-4 rounded border border-gray-700">
            <p className="text-gray-500 text-xs mb-1">PHONE</p>
            <p className="text-white">{phone}</p>
          </div>
        </section>
      </main>
    </div>
  )
}
