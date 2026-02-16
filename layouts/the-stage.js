'use client';

import { useState, useEffect } from 'react';

export default function TheStage() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = [
    { title: 'Illuminate', desc: 'Shed light on what matters' },
    { title: 'Reveal', desc: 'Uncover hidden potentials' },
    { title: 'Transform', desc: 'Turn shadows into stories' },
  ];

  return (
    <div className="min-h-screen bg-black overflow-hidden relative">
      {/* Spotlight Effect */}
      <div 
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.95) 50%, rgba(0,0,0,1) 100%)`,
        }}
      />

      {/* Ambient Glow */}
      <div 
        className="absolute w-[800px] h-[800px] rounded-full opacity-30 blur-3xl transition-transform duration-700 ease-out pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,200,100,0.4) 0%, transparent 70%)',
          left: `${mousePos.x}%`,
          top: `${mousePos.y}%`,
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Stage Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-8">
        {/* Spotlight Beam */}
        <div 
          className="absolute top-0 w-px h-screen bg-gradient-to-b from-white/30 via-white/10 to-transparent pointer-events-none"
          style={{ left: `${mousePos.x}%` }}
        />

        {/* Main Title */}
        <div className="text-center mb-20">
          <p className="text-amber-200/60 tracking-[0.5em] uppercase text-sm mb-6">
            Enter the Spotlight
          </p>
          <h1 className="text-7xl md:text-9xl font-black text-white tracking-tight">
            CENTER
          </h1>
          <h1 className="text-7xl md:text-9xl font-black text-white/20 tracking-tight">
            STAGE
          </h1>
        </div>

        {/* Feature Cards */}
        <div className="flex flex-wrap justify-center gap-8 max-w-4xl">
          {features.map((feature, i) => (
            <div 
              key={i}
              className="group relative p-8 border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-500"
              onMouseEnter={() => setActiveIndex(i)}
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-white/5 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative">
                <span className="text-4xl font-black text-white/20 mb-4 block">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-white/50">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button className="mt-16 px-10 py-4 bg-white text-black font-bold tracking-wider hover:bg-amber-100 transition-colors">
          TAKE THE STAGE
        </button>
      </div>

      {/* Bottom Vignette */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black to-transparent pointer-events-none" />

      {/* Floating Particles in Spotlight */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white/60 rounded-full"
          style={{
            left: `${15 + Math.random() * 70}%`,
            top: `${15 + Math.random() * 70}%`,
            animation: `floatParticle ${4 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`,
            opacity: Math.random() * 0.5 + 0.2,
          }}
        />
      ))}

      <style jsx>{`
        @keyframes floatParticle {
          0%, 100% { 
            transform: translateY(0) scale(1); 
            opacity: 0.2;
          }
          50% { 
            transform: translateY(-50px) scale(1.5); 
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
}
