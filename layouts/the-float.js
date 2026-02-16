'use client';
// THE FLOAT - Floating/drifting elements
import { useState, useEffect } from 'react';

export default function TheFloat({ 
  businessName = 'Float', 
  tagline = 'Nothing is fixed',
  services = [],
  phone,
  contactEmail 
}) {
  const [positions, setPositions] = useState([...Array(8)].map(() => ({ x: Math.random() * 80, y: Math.random() * 80, delay: Math.random() * 5 })));

  const items = services.length > 0 ? services : [
    { title: 'Strategy', emoji: '◈' },
    { title: 'Design', emoji: '◇' },
    { title: 'Build', emoji: '◆' },
    { title: 'Launch', emoji: '○' },
    { title: 'Grow', emoji: '●' },
    { title: 'Scale', emoji: '◎' }
  ];

  return (
    <div className="min-h-screen bg-slate-950 overflow-hidden relative">
      {/* Floating background shapes */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full opacity-20"
          style={{
            width: `${100 + i * 30}px`,
            height: `${100 + i * 30}px`,
            left: `${(i * 13) % 90}%`,
            top: `${(i * 17) % 90}%`,
            background: `hsl(${i * 30}, 70%, 50%)`,
            animation: `float ${10 + i * 2}s ease-in-out infinite`,
            animationDelay: `${i * 0.5}s`
          }}
        />
      ))}

      {/* Header - floating */}
      <header className="relative z-10 p-8 flex justify-between items-start">
        <h1 className="text-white text-3xl font-bold animate-bounce" style={{ animationDuration: '3s' }}>
          {businessName}
        </h1>
        <a href={`tel:${phone}`} className="text-white/60 hover:text-white">{phone}</a>
      </header>

      {/* Main content */}
      <main className="relative z-10 min-h-[80vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-6xl md:text-8xl font-black text-white mb-6 animate-pulse">
            {tagline}
          </h2>
          <p className="text-xl text-white/60 max-w-xl mx-auto">
            Embracing chaos, finding balance. Our approach adapts and evolves.
          </p>
        </div>
      </main>

      {/* Floating service cards */}
      <div className="relative z-10 p-8">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-sm p-6 text-center cursor-pointer hover:bg-white/20 transition-all hover:scale-110"
              style={{
                animation: `float ${4 + i * 0.5}s ease-in-out infinite`,
                animationDelay: `${positions[i]?.delay || i * 0.3}s`
              }}
            >
              <span className="text-4xl mb-2 block">{item.emoji}</span>
              <h3 className="text-white font-bold">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-20px) rotate(2deg); }
          50% { transform: translateY(0) rotate(0deg); }
          75% { transform: translateY(20px) rotate(-2deg); }
        }
      `}</style>
    </div>
  );
}
