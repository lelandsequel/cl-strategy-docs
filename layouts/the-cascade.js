// THE CASCADE - Waterfall reveals aesthetic
'use client';
import { useState, useEffect } from 'react';

export default function TheCascade({ businessName, tagline, services, phone, contactEmail }) {
  const [visible, setVisible] = useState([]);

  useEffect(() => {
    const timers = services?.map((_, i) => 
      setTimeout(() => setVisible(v => [...v, i]), i * 200)
    );
    return () => timers?.forEach(clearTimeout);
  }, [services?.length]);

  return (
    <div className="min-h-screen bg-slate-900 overflow-hidden">
      <header className="min-h-[60vh] flex items-end pb-16 px-8">
        <div>
          <div className="flex gap-2 mb-4">
            {[...Array(6)].map((_, i) => (
              <div 
                key={i} 
                className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
                style={{ animationDelay: `${i * 100}ms` }}
              />
            ))}
          </div>
          <h1 className="text-6xl md:text-9xl font-black text-white leading-[0.9]">
            {businessName.split(' ').map((word, i) => (
              <span 
                key={i} 
                className="block"
                style={{ 
                  opacity: visible.includes(0) ? 1 : 0,
                  transform: visible.includes(0) ? 'translateY(0)' : 'translateY(40px)',
                  transition: 'all 0.6s ease-out',
                  transitionDelay: `${i * 100}ms`
                }}
              >
                {word}
              </span>
            ))}
          </h1>
          <p 
            className="mt-6 text-xl text-cyan-400"
            style={{ 
              opacity: visible.includes(0) ? 1 : 0,
              transform: visible.includes(0) ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s ease-out 0.5s'
            }}
          >
            {tagline}
          </p>
        </div>
      </header>

      <section className="py-16 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services?.map((s, i) => (
            <div
              key={i}
              className="group"
              style={{
                opacity: visible.includes(i) ? 1 : 0,
                transform: visible.includes(i) ? 'translateY(0)' : 'translateY(60px)',
                transition: 'all 0.6s ease-out',
                transitionDelay: `${0.3 + i * 0.15}s`
              }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-slate-800 p-8 hover:bg-slate-700 transition-colors">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform"></div>
                
                <div className="relative">
                  <span className="text-5xl font-black text-slate-700">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="text-xl font-bold text-white mt-4">{s.title}</h3>
                  <p className="text-slate-400 mt-2">{s.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-cyan-500 text-black py-16 px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <h2 className="text-3xl font-black">{businessName}</h2>
          <div className="flex gap-8 font-medium">
            <a href={`tel:${phone}`}>{phone}</a>
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
