'use client';

import { useState, useEffect } from 'react';

export default function ThePrism() {
  const [activeIndex, setActiveIndex] = useState(0);

  const colors = [
    { name: 'Crimson', hex: '#dc2626', bg: 'bg-red-600', text: 'text-red-600', x: 0, y: 0 },
    { name: 'Amber', hex: '#d97706', bg: 'bg-amber-600', text: 'text-amber-600', x: 25, y: 0 },
    { name: 'Emerald', hex: '#059669', bg: 'bg-emerald-600', text: 'text-emerald-600', x: 50, y: 0 },
    { name: 'Cyan', hex: '#0891b2', bg: 'bg-cyan-600', text: 'text-cyan-600', x: 75, y: 0 },
    { name: 'Violet', hex: '#7c3aed', bg: 'bg-violet-600', text: 'text-violet-600', x: 0, y: 50 },
    { name: 'Rose', hex: '#e11d48', bg: 'bg-rose-600', text: 'text-rose-600', x: 25, y: 50 },
    { name: 'Slate', hex: '#475569', bg: 'bg-slate-600', text: 'text-slate-600', x: 50, y: 50 },
    { name: 'Orange', hex: '#ea580c', bg: 'bg-orange-600', text: 'text-orange-600', x: 75, y: 50 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % colors.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [colors.length]);

  return (
    <div className="min-h-screen bg-neutral-900 overflow-hidden">
      {/* Prism Grid */}
      <div className="grid grid-cols-4 grid-rows-2 h-screen">
        {colors.map((color, index) => (
          <div
            key={color.name}
            className={`relative overflow-hidden transition-all duration-700 ${
              activeIndex === index ? 'grayscale-0 scale-100' : 'grayscale hover:grayscale-0'
            }`}
            onMouseEnter={() => setActiveIndex(index)}
          >
            {/* Color Block */}
            <div className={`absolute inset-0 ${color.bg} ${activeIndex === index ? 'opacity-100' : 'opacity-60'}`}>
              {/* Geometric Pattern */}
              <svg className="w-full h-full opacity-20" viewBox="0 0 100 100">
                <defs>
                  <pattern id={`grid-${index}`} width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100" height="100" fill={`url(#grid-${index})`} />
              </svg>
              
              {/* Diagonal Lines */}
              <div className="absolute inset-0" style={{
                backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 40px)'
              }} />
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
              <span className="text-6xl font-bold text-white mix-blend-overlay mb-4">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h2 className={`text-4xl font-black uppercase tracking-widest ${activeIndex === index ? 'text-white' : 'text-white/70'}`}>
                {color.name}
              </h2>
              <p className="text-white/50 mt-4 font-mono text-sm">{color.hex}</p>
            </div>

            {/* Corner Accent */}
            <div className={`absolute top-0 right-0 w-24 h-24 ${activeIndex === index ? 'opacity-100' : 'opacity-30'}`}>
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <polygon points="0,0 100,0 100,100" fill="rgba(255,255,255,0.2)" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* Color Strip */}
      <div className="fixed bottom-0 left-0 right-0 h-2 flex">
        {colors.map((color, index) => (
          <div
            key={color.name}
            className={`flex-1 ${color.bg} transition-all duration-300 ${activeIndex === index ? 'h-2' : 'h-1'}`}
          />
        ))}
      </div>

      {/* Navigation */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-4 z-10">
        {colors.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeIndex === index ? 'bg-white scale-150' : 'bg-white/30 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
