'use client';
// THE CARDS - Bento grid with varied card sizes
import { useState } from 'react';

export default function TheCards({ 
  businessName = 'Studio', 
  tagline = 'Crafting digital experiences',
  services = [],
  phone,
  contactEmail 
}) {
  const [hovered, setHovered] = useState(null);
  const defaultServices = [
    { title: 'Brand Identity', desc: 'Visual systems that captivate', icon: '◈' },
    { title: 'Web Design', desc: 'Interfaces that inspire action', icon: '◇' },
    { title: 'Development', desc: 'Code that performs beautifully', icon: '◆' },
    { title: 'Strategy', desc: 'Insights that drive growth', icon: '○' },
    { title: 'Motion', desc: 'Animation that brings life', icon: '●' },
    { title: 'Content', desc: 'Stories that connect', icon: '◎' }
  ];
  const items = services.length > 0 ? services : defaultServices;

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-6 bg-stone-50/90 backdrop-blur-sm">
        <h1 className="text-2xl font-bold tracking-tight">{businessName}</h1>
        <a href={`tel:${phone}`} className="text-sm hover:opacity-70">{phone}</a>
      </header>

      {/* Hero - Large card */}
      <main className="pt-24 px-4 md:px-8 pb-16">
        <div className="max-w-6xl mx-auto">
          <div 
            className="bg-stone-900 text-white p-12 md:p-16 mb-8 cursor-pointer transition-all duration-500"
            onMouseEnter={() => setHovered(0)}
            onMouseLeave={() => setHovered(null)}
            style={{ transform: hovered === 0 ? 'scale(1.02)' : 'scale(1)' }}
          >
            <span className="text-xs tracking-[0.3em] opacity-60">WELCOME</span>
            <h2 className="text-5xl md:text-7xl font-bold mt-4 mb-6">{tagline}</h2>
            <p className="text-xl opacity-70 max-w-xl">We create meaningful digital experiences that resonate with your audience.</p>
          </div>

          {/* Bento grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {items.map((item, i) => (
              <div
                key={i}
                className={`bg-white p-8 border border-stone-200 transition-all duration-500 cursor-pointer ${
                  i === 0 ? 'md:col-span-2 md:row-span-2' : ''
                } ${i === 3 ? 'md:col-span-2' : ''}`}
                onMouseEnter={() => setHovered(i + 1)}
                onMouseLeave={() => setHovered(null)}
                style={{ 
                  transform: hovered === i + 1 ? 'translateY(-8px)' : 'translateY(0)',
                  boxShadow: hovered === i + 1 ? '0 20px 40px rgba(0,0,0,0.1)' : 'none'
                }}
              >
                <span className="text-4xl mb-4 block">{item.icon || '◆'}</span>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-stone-500 text-sm">{item.desc || item.description}</p>
              </div>
            ))}
          </div>

          {/* Contact card */}
          <div className="mt-8 bg-stone-900 text-white p-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div>
                <h3 className="text-3xl font-bold">Let's work together</h3>
                <p className="opacity-70 mt-2">Get in touch for a free consultation</p>
              </div>
              <a 
                href={`mailto:${contactEmail}`}
                className="bg-white text-stone-900 px-8 py-4 font-bold hover:scale-105 transition-transform"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer className="px-8 py-8 border-t border-stone-200 text-center text-stone-500 text-sm">
        © 2024 {businessName}
      </footer>
    </div>
  );
}
