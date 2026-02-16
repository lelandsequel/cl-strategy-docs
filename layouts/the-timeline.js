// THE TIMELINE - Horizontal timeline aesthetic
export default function TheTimeline({ businessName, tagline, services, phone, contactEmail }) {
  return (
    <div className="min-h-screen bg-slate-100">
      <header className="bg-slate-800 text-white py-20 px-8 text-center">
        <h1 className="text-6xl font-light">{businessName}</h1>
        <p className="mt-4 text-xl text-slate-300">{tagline}</p>
      </header>

      <div className="overflow-x-auto py-20 px-8">
        <div className="min-w-max flex items-start gap-8">
          <div className="flex-shrink-0 w-64">
            <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
              ★
            </div>
            <h3 className="text-xl font-bold text-center">Start</h3>
            <p className="text-center text-neutral-500 mt-2">Your journey begins here</p>
          </div>

          {services?.map((s, i) => (
            <div key={i} className="flex-shrink-0 w-80">
              <div className="relative">
                <div className="absolute top-8 left-0 w-full h-1 bg-slate-300 -z-10"></div>
                <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 ${
                  i % 3 === 0 ? 'bg-emerald-500' : i % 3 === 1 ? 'bg-blue-500' : 'bg-purple-500'
                }`}>
                  {i + 1}
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                <p className="text-neutral-600 text-sm">{s.description}</p>
              </div>
              
              <div className="text-center mt-4 text-sm text-neutral-400">
                Step {i + 1} of {services.length}
              </div>
            </div>
          ))}

          <div className="flex-shrink-0 w-64">
            <div className="relative">
              <div className="absolute top-8 left-0 w-full h-1 bg-slate-300 -z-10"></div>
              <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                ✓
              </div>
            </div>
            <h3 className="text-xl font-bold text-center">Complete</h3>
            <p className="text-center text-neutral-500 mt-2">Let's get started!</p>
          </div>
        </div>
      </div>

      <footer className="bg-slate-800 text-white py-12 px-8">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <div className="text-2xl font-light">{businessName}</div>
            <div className="text-slate-400">{tagline}</div>
          </div>
          <div className="flex gap-6">
            <a href={`tel:${phone}`} className="hover:text-slate-300">{phone}</a>
            <a href={`mailto:${contactEmail}`} className="hover:text-slate-300">{contactEmail}</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
