'use client';

import { useEffect, useState } from 'react';

export default function TheBillboard() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-[200vh] bg-zinc-950 text-white">
      {/* Hero Section with Massive Typography */}
      <section className="h-screen sticky top-0 flex flex-col justify-center items-center overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: 'radial-gradient(ellipse at center, #f97316 0%, transparent 70%)'
          }}
        />
        
        <div className="relative z-10 text-center px-4">
          <h1 
            className="text-[12vw] leading-[0.85] font-black tracking-tighter mix-blend-difference"
            style={{
              transform: `translateY(${scrollY * 0.3}px)`,
              opacity: 1 - scrollY / 700
            }}
          >
            DESIGN
          </h1>
          <h1 
            className="text-[12vw] leading-[0.85] font-black tracking-tighter text-orange-500 mix-blend-screen"
            style={{
              transform: `translateY(${scrollY * 0.5}px)`,
              opacity: 1 - scrollY / 600
            }}
          >
            WITHOUT
          </h1>
          <h1 
            className="text-[12vw] leading-[0.85] font-black tracking-tighter"
            style={{
              transform: `translateY(${scrollY * 0.7}px)`,
              opacity: 1 - scrollY / 500
            }}
          >
            LIMITS
          </h1>
        </div>

        {/* Floating Words */}
        <div 
          className="absolute top-1/4 left-10 text-6xl font-bold text-zinc-800 opacity-0"
          style={{
            transform: `translateY(${scrollY * -0.2}px)`,
            opacity: Math.max(0, Math.min(1, (scrollY - 100) / 200))
          }}
        >
          CREATE
        </div>
        <div 
          className="absolute bottom-1/4 right-10 text-6xl font-bold text-zinc-800 opacity-0"
          style={{
            transform: `translateY(${scrollY * -0.3}px)`,
            opacity: Math.max(0, Math.min(1, (scrollY - 150) / 200))
          }}
        >
          IMPACT
        </div>

        {/* Scroll Indicator */}
        <div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ opacity: 1 - scrollY / 300 }}
        >
          <span className="text-xs tracking-[0.5em] text-zinc-500 uppercase">Scroll</span>
          <div className="w-px h-16 bg-gradient-to-b from-orange-500 to-transparent" />
        </div>
      </section>

      {/* Content Section */}
      <section className="min-h-screen bg-zinc-950 flex items-center justify-center py-32">
        <div className="max-w-4xl mx-auto px-8">
          <p className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="text-orange-500">Words</span> that demand 
            <span className="block mt-4">attention.</span>
            <span className="block mt-4 text-zinc-600">Space that</span>
            <span className="block">breathes.</span>
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="min-h-[50vh] bg-zinc-900 flex items-center">
        <div className="w-full grid grid-cols-3 divide-x divide-zinc-800">
          {[
            { number: '10K', label: 'Pixels' },
            { number: '∞', label: 'Possibilities' },
            { number: '1', label: 'Message' }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center justify-center py-20">
              <span className="text-8xl md:text-9xl font-black text-white">{stat.number}</span>
              <span className="text-xl text-zinc-500 mt-4 tracking-widest uppercase">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="h-[50vh] flex items-center justify-center bg-gradient-to-b from-zinc-900 to-zinc-950">
        <h2 className="text-[8vw] font-black text-zinc-800 hover:text-orange-500 transition-colors duration-500 cursor-default">
          MAKE IT BIG
        </h2>
      </section>
    </div>
  );
}
