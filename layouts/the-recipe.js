// THE RECIPE - Recipe card aesthetic
export default function TheRecipe({ businessName, tagline, services, phone, contactEmail }) {
  return (
    <div className="min-h-screen bg-orange-50">
      <div className="max-w-3xl mx-auto p-6">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-orange-400 to-amber-500 p-8 text-white">
            <span className="uppercase tracking-widest text-sm opacity-80">Business Profile</span>
            <h1 className="text-5xl font-serif mt-2">{businessName}</h1>
            <p className="mt-4 text-xl opacity-90">{tagline}</p>
          </div>

          <div className="p-8">
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-orange-100">
              <div className="flex items-center gap-2">
                <span className="text-3xl">📞</span>
                <span className="font-medium">{phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-3xl">✉️</span>
                <span className="font-medium">{contactEmail}</span>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-serif mb-6 flex items-center gap-2">
                <span className="w-8 h-8 bg-orange-200 rounded-full flex items-center justify-center text-sm">📋</span>
                Our Services
              </h2>
              
              <div className="space-y-6">
                {services?.map((s, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-orange-50 rounded-xl">
                    <div className="w-10 h-10 bg-orange-200 rounded-full flex items-center justify-center font-bold text-orange-700 flex-shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{s.title}</h3>
                      <p className="text-neutral-600 mt-1">{s.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 p-6 bg-amber-100 rounded-2xl">
              <div className="text-center">
                <div className="text-3xl font-serif font-bold">100%</div>
                <div className="text-sm text-neutral-600">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-serif font-bold">24/7</div>
                <div className="text-sm text-neutral-600">Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-serif font-bold">✓</div>
                <div className="text-sm text-neutral-600">Trusted</div>
              </div>
            </div>
          </div>

          <div className="bg-neutral-900 text-white p-6 text-center">
            <p className="font-serif italic">"Serving with passion since 2020"</p>
          </div>
        </div>
      </div>
    </div>
  )
}
