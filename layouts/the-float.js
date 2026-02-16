'use client';

import { useState, useEffect } from 'react';

export default function TheFloat() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const cards = [
    { id: 1, title: 'Analytics', value: '+127%', icon: '📈', color: 'from-blue-500 to-cyan-400', delay: 0 },
    { id: 2, title: 'Revenue', value: '$48.2K', icon: '💰', color: 'from-emerald-500 to-green-400', delay: 100 },
    { id: 3, title: 'Users', value: '12.4K', icon: '👥', color: 'from-purple-500 to-pink-400', delay: 200 },
    { id: 4, title: 'Performance', value: '99.9%', icon: '⚡', color: 'from-amber-500 to-yellow-400', delay: 300 },
    { id: 5, title: 'Storage', value: '2.1TB', icon: '💾', color: 'from-rose-500 to-red-400', delay: 400 },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black" />
      
      {/* Ambient Orbs */}
      <div 
        className="absolute w-[600px] h-[600px] rounded-full opacity-30 blur-3xl transition-transform duration-1000 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)',
          transform: `translate(${mousePos.x * 2}px, ${mousePos.y * 2}px)`,
        }}
      />
      <div 
        className="absolute w-[500px] h-[500px] rounded-full opacity-20 blur-3xl transition-transform duration-1000 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(236,72,153,0.3) 0%, transparent 70%)',
          transform: `translate(${-mousePos.x * 1.5}px, ${-mousePos.y * 1.5}px)`,
          top: '20%',
          right: '10%',
        }}
      />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center p-8">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 text-center">
          Floating Cards
        </h1>
        <p className="text-neutral-400 mb-16 text-center">
          Hover to interact. Watch them float.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-5xl w-full">
          {cards.map((card) => (
            <div
              key={card.id}
              className="group relative"
              style={{ 
                animationDelay: `${card.delay}ms`,
              }}
            >
              {/* Glow Effect */}
              <div 
                className={`absolute -inset-1 bg-gradient-to-r ${card.color} rounded-2xl blur opacity-25 group-hover:opacity-75 transition-opacity duration-500`}
              />
              
              {/* Card */}
              <div 
                className="relative bg-neutral-900/80 backdrop-blur-xl rounded-2xl p-6 border border-neutral-800/50 transition-all duration-500 group-hover:-translate-y-4 group-hover:shadow-2xl"
                style={{
                  transform: `perspective(1000px) rotateX(${mousePos.y * 0.5}deg) rotateY(${-mousePos.x * 0.5}deg)`,
                }}
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center text-2xl mb-4 shadow-lg`}>
                  {card.icon}
                </div>

                {/* Value */}
                <h3 className="text-3xl font-bold text-white mb-1">{card.value}</h3>
                <p className="text-neutral-400 text-sm">{card.title}</p>

                {/* Hover Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Shadow on hover */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-2/3 h-4 bg-black/50 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Bottom Floating Element */}
        <div className="mt-16 flex gap-4">
          {['●', '○', '○'].map((dot, i) => (
            <span 
              key={i} 
              className={`text-2xl transition-all duration-500 ${
                i === 0 ? 'text-white' : 'text-neutral-700'
              }`}
              style={{
                transform: i === 0 ? 'translateY(0)' : 'translateY(5px)',
              }}
            >
              {dot}
            </span>
          ))}
        </div>
      </div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.2; }
          50% { transform: translateY(-30px) translateX(10px); opacity: 0.5; }
        }
      `}</style>
    </div>
  );
}
