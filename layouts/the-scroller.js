'use client';
// THE SCROLLER - Horizontal scroll showcase
import { useRef } from 'react';

export default function TheScroller({ 
  businessName = 'Gallery', 
  tagline = 'Scroll horizontally to explore',
  services = [],
  phone,
  contactEmail 
}) {
  const scrollRef = useRef(null);
  
  const items = services.length > 0 ? services : [
    { title: 'Project Alpha', category: 'Branding', color: 'bg-red-500' },
    { title: 'Project Beta', category: 'Web Design', color: 'bg-orange-500' },
    { title: 'Project Gamma', category: 'Development', color: 'bg-amber-500' },
    { title: 'Project Delta', category: 'Strategy', color: 'bg-yellow-500' },
    { title: 'Project Epsilon', category: 'Marketing', color: 'bg-lime-500' },
    { title: 'Project Zeta', category: 'Content', color: 'bg-green-500' }
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="h-screen bg-zinc-950 overflow-hidden">
      {/* Fixed header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-5">
        <h1 className="text-white text-xl font-bold">{businessName}</h1>
        <span className="text-zinc-500 text-sm">{tagline}</span>
      </header>

      {/* Horizontal scroll container */}
      <div 
        ref={scrollRef}
        className="h-full flex items-center gap-4 px-24 overflow-x-auto scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {/* Intro slide */}
        <div className="flex-shrink-0 w-[80vw] md:w-[40vw]">
          <h2 className="text-6xl md:text-8xl font-bold text-white leading-tight">
            Our<br/>Work
          </h2>
          <p className="text-zinc-500 mt-6 text-lg max-w-sm">
            Explore our portfolio of projects across various industries and disciplines.
          </p>
        </div>

        {/* Project cards */}
        {items.map((item, i) => (
          <div 
            key={i}
            className={`flex-shrink-0 w-[80vw] md:w-[35vw] h-[60vh] ${item.color || 'bg-zinc-800'} flex flex-col justify-end p-8 transition-transform hover:scale-[1.02]`}
          >
            <span className="text-white/60 text-sm uppercase tracking-wider">{item.category}</span>
            <h3 className="text-4xl font-bold text-white mt-2">{item.title}</h3>
            <p className="text-white/70 mt-4">{item.description || 'A remarkable project delivered with excellence.'}</p>
          </div>
        ))}

        {/* Contact slide */}
        <div className="flex-shrink-0 w-[80vw] md:w-[35vw] h-[60vh] bg-zinc-800 flex flex-col justify-center items-center p-8">
          <h3 className="text-4xl font-bold text-white mb-4">Let's Create</h3>
          <p className="text-zinc-400 text-center mb-8">Ready to start your next project?</p>
          <a href={`tel:${phone}`} className="bg-white text-zinc-900 px-8 py-4 font-bold">
            {phone}
          </a>
        </div>

        {/* Spacer */}
        <div className="flex-shrink-0 w-24" />
      </div>

      {/* Navigation arrows */}
      <button 
        onClick={() => scroll('left')}
        className="fixed left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-sm transition-colors"
      >
        ←
      </button>
      <button 
        onClick={() => scroll('right')}
        className="fixed right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-sm transition-colors"
      >
        →
      </button>

      {/* Progress indicator */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {items.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full bg-white/30" />
        ))}
      </div>
    </div>
  );
}
