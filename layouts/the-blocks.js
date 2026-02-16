'use client';

import { useState } from 'react';

export default function TheBlocks() {
  const [hoveredBlock, setHoveredBlock] = useState(null);

  const blocks = [
    // Large Hero Block
    { 
      id: 1, 
      type: 'hero',
      title: 'Modular Design',
      subtitle: 'Build your own',
      color: 'bg-neutral-900',
      textColor: 'text-white',
      span: 'col-span-2 row-span-2'
    },
    // Standard Blocks
    { id: 2, type: 'stat', value: '42', label: 'Components', color: 'bg-blue-500', span: '' },
    { id: 3, type: 'image', color: 'bg-gradient-to-br from-rose-400 to-orange-300', span: '' },
    { id: 4, type: 'text', title: 'Flexible Grid', desc: 'Arrange blocks in any configuration', color: 'bg-neutral-100', textColor: 'text-neutral-900', span: '' },
    // Wide Block
    { id: 5, type: 'wide', title: 'Seamless Integration', desc: 'Works with any framework', color: 'bg-purple-600', span: 'col-span-2' },
    { id: 6, type: 'stat', value: '99%', label: 'Satisfaction', color: 'bg-emerald-500', span: '' },
    { id: 7, type: 'image', color: 'bg-gradient-to-br from-cyan-400 to-blue-500', span: '' },
    { id: 8, type: 'text', title: 'Responsive', desc: 'Adapts to any screen size', color: 'bg-neutral-800', textColor: 'text-white', span: '' },
    // Tall Block
    { id: 9, type: 'tall', title: 'Creative Freedom', color: 'bg-amber-500', span: 'row-span-2' },
    { id: 10, type: 'stat', value: '10K+', label: 'Downloads', color: 'bg-pink-500', span: '' },
    { id: 11, type: 'text', title: 'Open Source', desc: 'Free to use and modify', color: 'bg-neutral-200', textColor: 'text-neutral-900', span: '' },
  ];

  const renderBlock = (block) => {
    switch (block.type) {
      case 'hero':
        return (
          <div className={`h-full ${block.color} p-8 flex flex-col justify-between`}>
            <span className="text-white/30 text-sm tracking-widest uppercase">Featured</span>
            <div>
              <h2 className={`text-4xl font-bold ${block.textColor} mb-2`}>{block.title}</h2>
              <p className="text-white/60">{block.subtitle}</p>
            </div>
            <div className="flex gap-2">
              {['■', '■', '■'].map((s, i) => (
                <span key={i} className="text-white/20">{s}</span>
              ))}
            </div>
          </div>
        );
      case 'stat':
        return (
          <div className={`h-full ${block.color} p-6 flex flex-col justify-center items-center text-center`}>
            <span className="text-5xl font-black text-white mb-2">{block.value}</span>
            <span className="text-white/70 uppercase tracking-wider text-sm">{block.label}</span>
          </div>
        );
      case 'image':
        return (
          <div className={`h-full ${block.color} flex items-center justify-center`}>
            <span className="text-white/20 text-6xl font-bold">IMG</span>
          </div>
        );
      case 'text':
        return (
          <div className={`h-full ${block.color} p-6 flex flex-col justify-center`}>
            <h3 className={`text-xl font-bold ${block.textColor} mb-2`}>{block.title}</h3>
            <p className={block.textColor === 'text-white' ? 'text-white/60' : 'text-neutral-600'}>{block.desc}</p>
          </div>
        );
      case 'wide':
        return (
          <div className={`h-full ${block.color} p-8 flex items-center justify-between`}>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">{block.title}</h3>
              <p className="text-white/70">{block.desc}</p>
            </div>
            <span className="text-white/20 text-6xl">→</span>
          </div>
        );
      case 'tall':
        return (
          <div className={`h-full ${block.color} p-8 flex flex-col justify-end`}>
            <h3 className="text-2xl font-bold text-white mb-2">{block.title}</h3>
            <div className="flex gap-1">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-white/30 rounded-sm" />
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 p-8">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Modular Blocks</h1>
        <p className="text-neutral-400">A flexible grid system for any layout</p>
      </header>

      {/* Block Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[180px]">
        {blocks.map((block) => (
          <div
            key={block.id}
            className={`relative group overflow-hidden ${block.span} ${
              hoveredBlock === block.id ? 'ring-2 ring-white ring-offset-2 ring-offset-neutral-950' : ''
            }`}
            onMouseEnter={() => setHoveredBlock(block.id)}
            onMouseLeave={() => setHoveredBlock(null)}
          >
            {renderBlock(block)}
            
            {/* Block Number */}
            <div className="absolute top-2 right-2 w-6 h-6 bg-black/30 rounded flex items-center justify-center text-xs text-white/40 font-mono">
              {block.id}
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </div>
        ))}
      </div>

      {/* Add Block Button */}
      <div className="mt-8 flex justify-center">
        <button className="px-6 py-3 border-2 border-dashed border-neutral-700 text-neutral-500 hover:border-neutral-500 hover:text-neutral-300 transition-all flex items-center gap-2">
          <span>+</span>
          <span>Add Block</span>
        </button>
      </div>

      {/* Block Types Legend */}
      <div className="mt-16 grid grid-cols-6 gap-4 text-xs">
        {['hero', 'stat', 'image', 'text', 'wide', 'tall'].map(type => (
          <div key={type} className="text-center">
            <div className="w-full h-8 bg-neutral-800 rounded mb-2 flex items-center justify-center">
              <span className="text-neutral-500">{type[0].toUpperCase()}</span>
            </div>
            <span className="text-neutral-500">{type}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
