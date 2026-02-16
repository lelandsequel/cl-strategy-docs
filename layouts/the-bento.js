// THE BENTO - Bento grid aesthetic
export default function TheBento({ businessName, tagline, services, phone, contactEmail }) {
  return (
    <div className="min-h-screen bg-neutral-900 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-6">
          <h1 className="text-3xl md:text-5xl font-bold text-white">{businessName}</h1>
          <p className="text-neutral-400 mt-2">{tagline}</p>
        </header>

        <div className="grid grid-cols-4 grid-rows-4 gap-3 h-[80vh]">
          <div className="col-span-2 row-span-2 bg-gradient-to-br from-orange-500 to-pink-500 rounded-3xl p-6 flex flex-col justify-between">
            <span className="text-white/80 text-xl">Featured</span>
            <div>
              <h2 className="text-4xl font-bold text-white">Premium</h2>
              <p className="text-white/80">Our flagship service</p>
            </div>
          </div>

          <div className="col-span-1 row-span-1 bg-neutral-800 rounded-2xl p-4 flex items-center justify-center">
            <span className="text-neutral-400 text-sm">⚡ Fast</span>
          </div>

          <div className="col-span-1 row-span-2 bg-white rounded-2xl p-6">
            <div className="w-full h-full flex flex-col justify-between">
              <span className="text-xs text-neutral-500 uppercase tracking-wider">Quote</span>
              <div className="text-3xl font-bold">"{tagline?.split('.')[0]}"</div>
              <span className="text-xs text-neutral-400">— {businessName}</span>
            </div>
          </div>

          <div className="col-span-1 row-span-1 bg-blue-600 rounded-2xl p-4 flex items-center justify-center">
            <span className="text-white font-medium">24/7 Support</span>
          </div>

          <div className="col-span-2 row-span-2 bg-neutral-800 rounded-2xl p-6 overflow-hidden">
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <div className="space-y-2">
              {services?.slice(0, 4).map((s, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-neutral-300">{s.title}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-1 row-span-1 bg-purple-600 rounded-2xl p-4 flex items-center justify-center">
            <span className="text-white font-medium">Pro</span>
          </div>

          <div className="col-span-1 row-span-1 bg-neutral-700 rounded-2xl p-4 flex items-center justify-center">
            <span className="text-neutral-300 text-sm">{phone}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
