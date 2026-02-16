// THE NOTEBOOK - Sketchbook style aesthetic
export default function TheNotebook({ businessName, tagline, services, phone, contactEmail }) {
  return (
    <div className="min-h-screen bg-[#f5f1e6]">
      <div className="max-w-4xl mx-auto p-4 md:p-8">
        <div className="bg-white shadow-xl rounded-lg p-8 md:p-12 relative" style={{ 
          backgroundImage: 'linear-gradient(#e8e4db 1px, transparent 1px)',
          backgroundSize: '100% 2rem'
        }}>
          <div className="absolute top-0 left-8 w-px h-full bg-red-300"></div>
          
          <header className="pl-8 mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-neutral-200 flex items-center justify-center text-2xl font-serif">
                📓
              </div>
              <div>
                <h1 className="text-4xl md:text-6xl font-serif font-bold text-neutral-800">
                  {businessName}
                </h1>
                <p className="text-neutral-500 italic">{tagline}</p>
              </div>
            </div>
          </header>

          <div className="pl-8 space-y-8">
            {services?.map((s, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-4 h-4 bg-neutral-300 rounded-full border-2 border-white"></div>
                <div className="bg-white border-2 border-neutral-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl font-serif text-neutral-300">✦</span>
                    <div>
                      <h3 className="text-xl font-bold text-neutral-800 font-serif">{s.title}</h3>
                      <p className="text-neutral-600 mt-2 leading-relaxed">{s.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <footer className="pl-8 mt-16 pt-8 border-t-2 border-dashed border-neutral-300">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="font-handwriting text-lg">
                <p className="text-neutral-600">Questions? Let's talk!</p>
                <p className="text-neutral-800 font-medium">{phone}</p>
                <p className="text-neutral-800 font-medium">{contactEmail}</p>
              </div>
              <div className="text-4xl">✏️</div>
            </div>
          </footer>
        </div>

        <div className="text-center mt-8 text-neutral-400 text-sm">
          <p>— Notebook by {businessName} —</p>
        </div>
      </div>

      <style jsx>{`
        .font-handwriting {
          font-family: 'Courier New', monospace;
        }
      `}</style>
    </div>
  )
}
