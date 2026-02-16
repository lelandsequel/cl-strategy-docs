'use client';
// THE CAROUSEL - Circular carousel with 3D perspective
import { useState } from 'react';

export default function TheCarousel({ 
  businessName = 'Carousel', 
  tagline = 'Round and round',
  services = [],
  phone,
  contactEmail 
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = services.length > 0 ? services : [
    { title: 'Strategy', desc: 'Planning the path ahead', color: 'from-rose-500 to-red-600' },
    { title: 'Design', desc: 'Crafting visual stories', color: 'from-orange-500 to-orange-600' },
    { title: 'Development', desc: 'Building with precision', color: 'from-amber-500 to-amber-600' },
    { title: 'Marketing', desc: 'Reaching your audience', color: 'from-yellow-500 to-yellow-600' },
    { title: 'Analytics', desc: 'Measuring success', color: 'from-lime-500 to-lime-600' },
    { title: 'Growth', desc: 'Scaling new heights', color: 'from-green-500 to-green-600' }
  ];

  const radius = 180;

  return (
    <div className="min-h-screen bg-neutral-900 overflow-hidden flex flex-col">
      {/* Header */}
      <header className="p-8 text-center relative z-10">
        <h1 className="text-white text-4xl font-bold">{businessName}</h1>
        <p className="text-neutral-500 mt-2">{tagline}</p>
      </header>

      {/* Carousel */}
      <main className="flex-1 flex items-center justify-center relative">
        {/* Center info */}
        <div className="absolute z-20 text-center">
          <span className="text-white/40 text-sm uppercase tracking-widest">Current</span>
          <h2 className="text-5xl font-bold text-white mt-2">{items[activeIndex].title}</h2>
          <p className="text-white/60 mt-4 max-w-xs">{items[activeIndex].desc}</p>
        </div>

        {/* 3D Carousel ring */}
        <div className="relative w-[400px] h-[400px]">
          {items.map((item, i) => {
            const angle = (i / items.length) * 2 * Math.PI;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            const isActive = i === activeIndex;
            const offset = (i - activeIndex + items.length) % items.length;
            const scale = isActive ? 1.3 : 0.8;
            const opacity = isActive ? 1 : 0.5;
            
            return (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className="absolute w-24 h-24 rounded-full transition-all duration-500 flex items-center justify-center text-white font-bold"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `translate(-50%, -50%) translate(${x}px, ${y}px) scale(${scale})`,
                  opacity: opacity,
                  background: `linear-gradient(135deg, ${item.color.split(' ')[1]}, ${item.color.split(' ')[3]})`,
                  zIndex: isActive ? 10 : 1
                }}
              >
                <span className={isActive ? 'text-lg' : 'text-sm'}>{i + 1}</span>
              </button>
            );
          })}
        </div>
      </main>

      {/* Controls */}
      <footer className="p-8 flex justify-center gap-4 relative z-10">
        <button 
          onClick={() => setActiveIndex((activeIndex - 1 + items.length) % items.length)}
          className="w-12 h-12 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
        >
          ←
        </button>
        <div className="flex items-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === activeIndex ? 'w-8 bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
        <button 
          onClick={() => setActiveIndex((activeIndex + 1) % items.length)}
          className="w-12 h-12 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
        >
          →
        </button>
      </footer>
    </div>
  );
}
