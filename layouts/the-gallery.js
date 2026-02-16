'use client';

import { useState } from 'react';

export default function TheGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const artworks = [
    { id: 1, title: 'Abstract Flow', artist: 'Maya Chen', year: '2023', color: 'from-rose-400 to-orange-300', size: 'row-span-2' },
    { id: 2, title: 'Urban Echoes', artist: 'James Wright', year: '2022', color: 'from-slate-600 to-zinc-400', size: '' },
    { id: 3, title: 'Neon Dreams', artist: 'Aria Kim', year: '2024', color: 'from-cyan-400 to-blue-600', size: '' },
    { id: 4, title: 'Silent Void', artist: 'Elena Vo', year: '2023', color: 'from-zinc-800 to-black', size: 'col-span-2' },
    { id: 5, title: 'Golden Hour', artist: 'Marcus Lee', year: '2024', color: 'from-amber-400 to-rose-500', size: '' },
    { id: 6, title: 'Digital Bloom', artist: 'Sofia Rivera', year: '2023', color: 'from-fuchsia-500 to-pink-400', size: 'row-span-2' },
    { id: 7, title: 'Monochrome Study', artist: 'David Park', year: '2022', color: 'from-gray-300 to-gray-600', size: '' },
    { id: 8, title: 'Ocean Depths', artist: 'Nina Patel', year: '2024', color: 'from-teal-600 to-cyan-300', size: '' },
  ];

  return (
    <div className="min-h-screen bg-stone-100">
      {/* Header */}
      <header className="py-8 px-12 bg-white border-b border-stone-200">
        <p className="text-xs tracking-[0.3em] text-stone-400 uppercase mb-2">Exhibition</p>
        <h1 className="text-4xl font-serif text-stone-900">Contemporary Visions</h1>
      </header>

      {/* Gallery Wall */}
      <div className="p-12">
        <div className="grid grid-cols-4 gap-8 auto-rows-[200px]">
          {artworks.map((art) => (
            <div
              key={art.id}
              onClick={() => setSelectedImage(art)}
              className={`relative group cursor-pointer overflow-hidden bg-white p-4 shadow-sm hover:shadow-xl transition-all duration-500 ${art.size || ''}`}
            >
              {/* Artwork */}
              <div className={`w-full h-full bg-gradient-to-br ${art.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white/20 text-6xl font-serif">◆</span>
                </div>
              </div>
              
              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-sm translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-serif text-lg text-stone-900">{art.title}</h3>
                <p className="text-sm text-stone-500">{art.artist}, {art.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-12"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-8 right-8 text-white/60 hover:text-white text-4xl"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          
          <div className="max-w-4xl w-full" onClick={e => e.stopPropagation()}>
            <div className={`w-full h-[60vh] bg-gradient-to-br ${selectedImage.color}`}>
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-white/30 text-[10rem] font-serif">◆</span>
              </div>
            </div>
            <div className="mt-6 flex justify-between items-end">
              <div>
                <h2 className="text-3xl font-serif text-white">{selectedImage.title}</h2>
                <p className="text-white/60 mt-2">{selectedImage.artist}, {selectedImage.year}</p>
              </div>
              <div className="text-right">
                <p className="text-white/40 text-sm">Oil on canvas</p>
                <p className="text-white/40 text-sm">48 × 36 inches</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer Info */}
      <footer className="px-12 py-8 bg-white border-t border-stone-200">
        <div className="flex justify-between items-center text-sm text-stone-500">
          <span>8 Works</span>
          <span>2024 Gallery Season</span>
          <span>Curated by Admin</span>
        </div>
      </footer>
    </div>
  );
}
