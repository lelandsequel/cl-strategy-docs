'use client';

import { useState } from 'react';

export default function TheCorner() {
  const [activeCorner, setActiveCorner] = useState(null);

  const features = [
    { 
      id: 'tl', 
      title: 'Top Left', 
      desc: 'Starting point of all great journeys',
      icon: '◢'
    },
    { 
      id: 'tr', 
      title: 'Top Right', 
      desc: 'Where aspirations meet reality',
      icon: '◣'
    },
    { 
      id: 'bl', 
      title: 'Bottom Left', 
      desc: 'Foundations built to last',
      icon: '◤'
    },
    { 
      id: 'br', 
      title: 'Bottom Right', 
      desc: 'The destination of every path',
      icon: '◥'
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-900 relative overflow-hidden">
      {/* Corner Elements */}
      {/* Top Left */}
      <div className="absolute top-0 left-0 w-48 h-48">
        <div 
          className={`absolute inset-0 bg-gradient-to-br from-orange-500 to-amber-400 transition-all duration-500 ${
            activeCorner === 'tl' ? 'opacity-100' : 'opacity-30 hover:opacity-60'
          }`}
          style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
        />
        <div className="absolute top-4 left-4 text-white/60 hover:text-white cursor-pointer"
          onMouseEnter={() => setActiveCorner('tl')}
          onMouseLeave={() => setActiveCorner(null)}
        >
          <span className="text-4xl">{features[0].icon}</span>
        </div>
      </div>

      {/* Top Right */}
      <div className="absolute top-0 right-0 w-48 h-48">
        <div 
          className={`absolute inset-0 bg-gradient-to-bl from-cyan-500 to-blue-400 transition-all duration-500 ${
            activeCorner === 'tr' ? 'opacity-100' : 'opacity-30 hover:opacity-60'
          }`}
          style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }}
        />
        <div className="absolute top-4 right-4 text-white/60 hover:text-white cursor-pointer"
          onMouseEnter={() => setActiveCorner('tr')}
          onMouseLeave={() => setActiveCorner(null)}
        >
          <span className="text-4xl">{features[1].icon}</span>
        </div>
      </div>

      {/* Bottom Left */}
      <div className="absolute bottom-0 left-0 w-48 h-48">
        <div 
          className={`absolute inset-0 bg-gradient-to-tr from-purple-500 to-pink-400 transition-all duration-500 ${
            activeCorner === 'bl' ? 'opacity-100' : 'opacity-30 hover:opacity-60'
          }`}
          style={{ clipPath: 'polygon(0 0, 100% 100%, 0 100%)' }}
        />
        <div className="absolute bottom-4 left-4 text-white/60 hover:text-white cursor-pointer"
          onMouseEnter={() => setActiveCorner('bl')}
          onMouseLeave={() => setActiveCorner(null)}
        >
          <span className="text-4xl">{features[2].icon}</span>
        </div>
      </div>

      {/* Bottom Right */}
      <div className="absolute bottom-0 right-0 w-48 h-48">
        <div 
          className={`absolute inset-0 bg-gradient-to-tl from-green-500 to-emerald-400 transition-all duration-500 ${
            activeCorner === 'br' ? 'opacity-100' : 'opacity-30 hover:opacity-60'
          }`}
          style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}
        />
        <div className="absolute bottom-4 right-4 text-white/60 hover:text-white cursor-pointer"
          onMouseEnter={() => setActiveCorner('br')}
          onMouseLeave={() => setActiveCorner(null)}
        >
          <span className="text-4xl">{features[3].icon}</span>
        </div>
      </div>

      {/* Center Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-8">
        <h1 className="text-6xl md:text-8xl font-black text-white mb-4 text-center">
          CORNER
        </h1>
        <p className="text-neutral-400 text-lg max-w-md text-center mb-16">
          Four corners. Four directions. Each holds its own story.
          Hover over a corner to discover.
        </p>

        {/* Feature Cards with Corner Accents */}
        <div className="grid grid-cols-2 gap-6 max-w-2xl w-full">
          {features.map((feature) => (
            <div 
              key={feature.id}
              className={`relative p-6 border transition-all duration-500 cursor-pointer ${
                activeCorner === feature.id 
                  ? 'bg-white/10 border-white' 
                  : 'border-neutral-700 hover:border-neutral-500'
              }`}
              onMouseEnter={() => setActiveCorner(feature.id)}
              onMouseLeave={() => setActiveCorner(null)}
            >
              {/* Corner Accent */}
              <div className={`absolute -top-px -right-px w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] ${
                feature.id === 'tl' ? 'border-t-orange-500' :
                feature.id === 'tr' ? 'border-t-cyan-500' :
                feature.id === 'bl' ? 'border-t-purple-500' :
                'border-t-green-500'
              }`} />
              
              <span className={`text-3xl mb-3 block ${
                feature.id === 'tl' ? 'text-orange-400' :
                feature.id === 'tr' ? 'text-cyan-400' :
                feature.id === 'bl' ? 'text-purple-400' :
                'text-green-400'
              }`}>
                {feature.icon}
              </span>
              <h3 className="text-xl font-bold text-white mb-1">{feature.title}</h3>
              <p className="text-neutral-400 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Lines */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-neutral-700" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-t from-transparent to-neutral-700" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 h-px w-24 bg-gradient-to-r from-transparent to-neutral-700" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 h-px w-24 bg-gradient-to-l from-transparent to-neutral-700" />
      </div>
    </div>
  );
}
