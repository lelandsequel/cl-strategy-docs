'use client';
// THE TILES - CSS Grid tile layout with hover effects
import { useState } from 'react';

export default function TheTiles({ 
  businessName = 'Tiles', 
  tagline = 'A different perspective',
  services = [],
  phone,
  contactEmail 
}) {
  const [activeTile, setActiveTile] = useState(null);
  
  const tiles = services.length > 0 ? services : [
    { title: 'Strategy', desc: 'Planning', color: 'from-rose-500 to-red-600', icon: '◈' },
    { title: 'Design', desc: 'Creating', color: 'from-orange-500 to-amber-600', icon: '◇' },
    { title: 'Build', desc: 'Developing', color: 'from-amber-500 to-yellow-600', icon: '◆' },
    { title: 'Launch', desc: 'Deploying', color: 'from-lime-500 to-green-600', icon: '○' },
    { title: 'Grow', desc: 'Scaling', color: 'from-emerald-500 to-teal-600', icon: '●' },
    { title: 'Maintain', desc: 'Supporting', color: 'from-cyan-500 to-sky-600', icon: '◎' }
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Header */}
      <header className="p-8 border-b border-neutral-800">
        <h1 className="text-4xl font-bold">{businessName}</h1>
        <p className="text-neutral-500 mt-2">{tagline}</p>
      </header>

      {/* Tile grid */}
      <main className="p-4 md:p-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {tiles.map((tile, i) => (
            <div
              key={i}
              onMouseEnter={() => setActiveTile(i)}
              onMouseLeave={() => setActiveTile(null)}
              className={`
                relative h-48 md:h-64 overflow-hidden cursor-pointer
                transition-all duration-500 ease-out
                ${activeTile === i ? 'md:col-span-1 row-span-1' : ''}
              `}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${tile.color} transition-transform duration-700 ${
                activeTile === i ? 'scale-110' : 'scale-100'
              }`} />
              
              {/* Overlay */}
              <div className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${
                activeTile === i ? 'opacity-0' : 'opacity-100'
              }`} />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-between p-6">
                <span className="text-4xl">{tile.icon}</span>
                <div>
                  <h3 className={`text-2xl font-bold transition-all duration-300 ${
                    activeTile === i ? 'translate-y-0' : 'translate-y-2'
                  }`}>{tile.title}</h3>
                  <p className={`text-white/70 transition-all duration-300 ${
                    activeTile === i ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}>{tile.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="p-8 border-t border-neutral-800 flex justify-between items-center">
        <p className="text-neutral-500">© 2024 {businessName}</p>
        <a href={`tel:${phone}`} className="text-white hover:text-neutral-300">{phone}</a>
      </footer>
    </div>
  );
}
