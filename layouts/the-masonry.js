'use client';
// THE MASONRY - Pinterest-style masonry grid
import { useState } from 'react';

export default function TheMasonry({ 
  businessName = 'Masonry', 
  tagline = 'Organized chaos',
  services = [],
  phone,
  contactEmail 
}) {
  const [showAll, setShowAll] = useState(false);

  const items = services.length > 0 ? services : [
    { title: 'Brand Foundation', height: 'h-64', color: 'bg-rose-500' },
    { title: 'Visual Identity', height: 'h-80', color: 'bg-orange-500' },
    { title: 'Website Design', height: 'h-56', color: 'bg-amber-500' },
    { title: 'Development', height: 'h-72', color: 'bg-yellow-500' },
    { title: 'Marketing Strategy', height: 'h-60', color: 'bg-lime-500' },
    { title: 'Content Creation', height: 'h-84', color: 'bg-green-500' },
    { title: 'Analytics', height: 'h-48', color: 'bg-emerald-500' },
    { title: 'Optimization', height: 'h-68', color: 'bg-teal-500' },
    { title: 'Launch', height: 'h-56', color: 'bg-cyan-500' }
  ];

  const visibleItems = showAll ? items : items.slice(0, 6);

  return (
    <div className="min-h-screen bg-stone-100">
      {/* Header */}
      <header className="bg-white py-16 px-8 border-b border-stone-200">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-6xl font-bold text-stone-900 mb-4">{businessName}</h1>
          <p className="text-xl text-stone-500">{tagline}</p>
        </div>
      </header>

      {/* Masonry grid */}
      <main className="max-w-6xl mx-auto p-8">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {visibleItems.map((item, i) => (
            <div
              key={i}
              className={`${item.height} ${item.color} p-8 break-inside-avoid cursor-pointer group relative overflow-hidden`}
            >
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              
              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end text-white">
                <h3 className="text-2xl font-bold transform group-hover:translate-y-0 translate-y-2 transition-transform">
                  {item.title}
                </h3>
                <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">
                  {item.description || 'View project →'}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Show more button */}
        {!showAll && items.length > 6 && (
          <div className="text-center mt-12">
            <button 
              onClick={() => setShowAll(true)}
              className="bg-stone-900 text-white px-10 py-4 font-bold hover:scale-105 transition-transform"
            >
              View All {items.length} Projects
            </button>
          </div>
        )}
      </main>

      {/* Contact section */}
      <section className="bg-stone-900 text-white py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let's build something great</h2>
          <p className="text-stone-400 mb-8 text-lg">Get in touch to discuss your next project</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href={`tel:${phone}`} className="bg-white text-stone-900 px-8 py-3 font-bold hover:bg-stone-200 transition-colors">
              {phone}
            </a>
            <a href={`mailto:${contactEmail}`} className="border border-white px-8 py-3 font-bold hover:bg-white hover:text-stone-900 transition-colors">
              {contactEmail}
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-stone-500 text-sm">
        © 2024 {businessName}
      </footer>
    </div>
  );
}
