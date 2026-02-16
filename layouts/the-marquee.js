// THE MARQUEE - Scrolling marquee aesthetic
export default function TheMarquee({ businessName, tagline, services, phone, contactEmail }) {
  const marqueeText = `${businessName} • ${tagline} • Premium Services • Since 2020 • `;
  
  return (
    <div className="min-h-screen bg-amber-50 overflow-hidden">
      <div className="bg-neutral-900 text-white py-3 overflow-hidden">
        <div className="whitespace-nowrap animate-marquee flex">
          {[...Array(8)].map((_, i) => (
            <span key={i} className="mx-8 text-lg font-medium">
              {marqueeText}
            </span>
          ))}
        </div>
      </div>

      <header className="py-16 px-8">
        <h1 className="text-8xl md:text-[10rem] font-black text-neutral-900 leading-[0.8]">
          {businessName.split(' ').map((word, i) => (
            <span key={i} className="block">{word}</span>
          ))}
        </h1>
        <p className="mt-8 text-2xl text-neutral-600 font-light">{tagline}</p>
      </header>

      <div className="bg-neutral-900 py-16 overflow-hidden">
        <div className="whitespace-nowrap animate-marquee-reverse flex">
          {services?.map((s, i) => (
            <span key={i} className="mx-8 text-4xl md:text-6xl font-bold text-neutral-700 hover:text-amber-400 transition-colors cursor-default">
              {s.title.toUpperCase()}
            </span>
          ))}
        </div>
      </div>

      <section className="py-16 px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {services?.map((s, i) => (
            <div key={i} className="border-4 border-neutral-900 p-8 hover:bg-amber-100 transition-colors">
              <span className="text-6xl font-black text-neutral-200">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="text-2xl font-bold mt-4">{s.title}</h3>
              <p className="mt-2 text-neutral-600">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-amber-400 py-12 px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-3xl font-black">{businessName}</div>
          <div className="flex gap-8">
            <a href={`tel:${phone}`} className="text-lg font-medium underline">{phone}</a>
            <a href={`mailto:${contactEmail}`} className="text-lg font-medium underline">{contactEmail}</a>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 20s linear infinite;
        }
      `}</style>
    </div>
  )
}
