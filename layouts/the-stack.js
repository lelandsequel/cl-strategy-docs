'use client';
// THE STACK - Card stack with drag/swap interaction
import { useState } from 'react';

export default function TheStack({ 
  businessName = 'Stack', 
  tagline = 'Building up',
  services = [],
  phone,
  contactEmail 
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = services.length > 0 ? services : [
    { title: 'Brand Strategy', desc: 'Define your positioning and voice', color: 'bg-indigo-600' },
    { title: 'Visual Identity', desc: 'Logo, colors, typography', color: 'bg-violet-600' },
    { title: 'Web Design', desc: 'User experience and interface', color: 'bg-purple-600' },
    { title: 'Development', desc: 'Frontend and backend', color: 'bg-fuchsia-600' },
    { title: 'Launch', desc: 'Deployment and testing', color: 'bg-pink-600' },
    { title: 'Growth', desc: 'Analytics and optimization', color: 'bg-rose-600' }
  ];

  const nextCard = () => {
    setCurrentIndex((currentIndex + 1) % cards.length);
  };

  const prevCard = () => {
    setCurrentIndex((currentIndex - 1 + cards.length) % cards.length);
  };

  // Get visible cards (current + next 2 for stacking effect)
  const getVisibleCards = () => {
    return cards.map((card, i) => {
      const offset = (i - currentIndex + cards.length) % cards.length;
      return { ...card, offset, originalIndex: i };
    }).slice(0, 3);
  };

  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col">
      {/* Header */}
      <header className="p-8 text-center">
        <h1 className="text-white text-4xl font-bold">{businessName}</h1>
        <p className="text-neutral-500 mt-2">{tagline}</p>
      </header>

      {/* Stack area */}
      <main className="flex-1 flex items-center justify-center p-8 relative">
        {/* Cards stack */}
        <div className="relative w-80 h-96">
          {getVisibleCards().reverse().map((card, i) => (
            <div
              key={card.originalIndex}
              className={`absolute inset-0 ${card.color} rounded-2xl shadow-2xl cursor-pointer transition-all duration-500`}
              style={{
                transform: `translateY(${i * 8}px) scale(${1 - i * 0.05})`,
                zIndex: i,
              }}
              onClick={nextCard}
            >
              <div className="h-full flex flex-col justify-end p-8 text-white">
                <span className="text-6xl opacity-30 mb-4">{String(card.originalIndex + 1).padStart(2, '0')}</span>
                <h3 className="text-3xl font-bold mb-2">{card.title}</h3>
                <p className="opacity-80">{card.desc || card.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4">
          <button 
            onClick={prevCard}
            className="w-12 h-12 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors"
          >
            ←
          </button>
          <div className="flex items-center gap-2">
            {cards.map((_, i) => (
              <div 
                key={i} 
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === currentIndex ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
          <button 
            onClick={nextCard}
            className="w-12 h-12 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors"
          >
            →
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-8 text-center">
        <a href={`tel:${phone}`} className="text-white/60 hover:text-white">
          {phone}
        </a>
      </footer>
    </div>
  );
}
