'use client';

import { useState } from 'react';

export default function TheDual() {
  const [activeSide, setActiveSide] = useState('left');

  return (
    <div className="h-screen w-full overflow-hidden flex">
      {/* Left Panel */}
      <div 
        className={`w-1/2 h-full transition-all duration-700 ease-in-out relative overflow-hidden ${
          activeSide === 'left' ? 'w-full md:w-1/2' : 'w-0 md:w-1/4'
        }`}
      >
        <div className="absolute inset-0 bg-neutral-900">
          {/* Pattern */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 50px, white 50px, white 51px)`,
          }} />
          
          <div className="h-full flex flex-col justify-center items-center p-12 text-center">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
              DARK
            </h2>
            <p className="text-neutral-400 text-lg max-w-md">
              Embrace the shadows. Find elegance in the absence of light. 
              Minimal. Powerful. Timeless.
            </p>
            <button 
              onClick={() => setActiveSide('left')}
              className="mt-8 px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-neutral-900 transition-all"
            >
              Explore Dark
            </button>
          </div>
        </div>

        {/* Toggle Button */}
        <button 
          onClick={() => setActiveSide(activeSide === 'left' ? 'right' : 'left')}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-8 h-16 bg-neutral-900 flex items-center justify-center text-white/60 hover:text-white transition-colors z-10"
        >
          <span className="transform rotate-90 text-xs tracking-widest">SWITCH</span>
        </button>
      </div>

      {/* Divider Line */}
      <div className="hidden md:block w-px bg-neutral-800 h-full" />

      {/* Right Panel */}
      <div 
        className={`w-1/2 h-full transition-all duration-700 ease-in-out relative overflow-hidden ${
          activeSide === 'right' ? 'w-full md:w-1/2' : 'w-0 md:w-1/4'
        }`}
      >
        <div className="absolute inset-0 bg-white">
          {/* Pattern */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, black 1px, transparent 0)`,
            backgroundSize: '20px 20px'
          }} />
          
          <div className="h-full flex flex-col justify-center items-center p-12 text-center">
            <h2 className="text-5xl md:text-7xl font-black text-neutral-900 mb-6">
              LIGHT
            </h2>
            <p className="text-neutral-600 text-lg max-w-md">
              Clarity in its purest form. Bright. Clean. Unapologetically 
              bold in its simplicity.
            </p>
            <button 
              onClick={() => setActiveSide('right')}
              className="mt-8 px-8 py-3 border-2 border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white transition-all"
            >
              Explore Light
            </button>
          </div>
        </div>

        {/* Toggle Button */}
        <button 
          onClick={() => setActiveSide(activeSide === 'right' ? 'left' : 'right')}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-16 bg-white flex items-center justify-center text-neutral-400 hover:text-neutral-900 transition-colors z-10"
        >
          <span className="transform rotate-90 text-xs tracking-widest">SWITCH</span>
        </button>
      </div>

      {/* Center Focus (when split) */}
      {activeSide === 'left' && (
        <div className="hidden md:flex absolute right-1/4 top-1/2 -translate-y-1/2 translate-x-1/2 w-16 h-16 bg-white rounded-full items-center justify-center shadow-2xl z-20 cursor-pointer hover:scale-110 transition-transform"
          onClick={() => setActiveSide('right')}
        >
          <span className="text-neutral-900 text-xl">→</span>
        </div>
      )}
      
      {activeSide === 'right' && (
        <div className="hidden md:flex absolute left-1/4 top-1/2 -translate-y-1/2 -translate-x-1/2 w-16 h-16 bg-neutral-900 rounded-full items-center justify-center shadow-2xl z-20 cursor-pointer hover:scale-110 transition-transform"
          onClick={() => setActiveSide('left')}
        >
          <span className="text-white text-xl">←</span>
        </div>
      )}

      {/* Mobile Toggle */}
      <div className="md:hidden fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-30">
        <button 
          onClick={() => setActiveSide('left')}
          className={`px-6 py-2 rounded-full ${activeSide === 'left' ? 'bg-neutral-900 text-white' : 'bg-neutral-200 text-neutral-600'}`}
        >
          Dark
        </button>
        <button 
          onClick={() => setActiveSide('right')}
          className={`px-6 py-2 rounded-full ${activeSide === 'right' ? 'bg-neutral-900 text-white' : 'bg-neutral-200 text-neutral-600'}`}
        >
          Light
        </button>
      </div>
    </div>
  );
}
