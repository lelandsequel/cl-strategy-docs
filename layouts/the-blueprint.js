'use client';

import { useState } from 'react';

export default function TheBlueprint() {
  const [activeTool, setActiveTool] = useState('select');

  return (
    <div className="min-h-screen bg-slate-900 text-cyan-400 font-mono relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(to right, rgba(6,182,212,0.03) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(6,182,212,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px'
      }} />
      
      {/* Blueprint Border */}
      <div className="absolute inset-4 border-2 border-cyan-500/30">
        <div className="absolute -top-px -left-px w-8 h-8 border-l-2 border-t-2 border-cyan-400" />
        <div className="absolute -top-px -right-px w-8 h-8 border-r-2 border-t-2 border-cyan-400" />
        <div className="absolute -bottom-px -left-px w-8 h-8 border-l-2 border-b-2 border-cyan-400" />
        <div className="absolute -bottom-px -right-px w-8 h-8 border-r-2 border-b-2 border-cyan-400" />
      </div>

      {/* Toolbar */}
      <div className="absolute top-8 left-8 flex flex-col gap-2 bg-slate-800/80 p-3 rounded-lg border border-cyan-500/30 backdrop-blur-sm">
        {['select', 'line', 'rect', 'circle', 'dim'].map(tool => (
          <button
            key={tool}
            onClick={() => setActiveTool(tool)}
            className={`px-4 py-2 text-sm uppercase tracking-wider rounded transition-all ${
              activeTool === tool 
                ? 'bg-cyan-500 text-slate-900' 
                : 'hover:bg-cyan-500/20'
            }`}
          >
            {tool}
          </button>
        ))}
      </div>

      {/* Title Block */}
      <div className="absolute top-8 right-8 bg-slate-800/80 p-4 rounded-lg border border-cyan-500/30 backdrop-blur-sm">
        <h1 className="text-lg font-bold text-cyan-300">PROJECT: ALPHA-7</h1>
        <p className="text-xs text-cyan-600 mt-1">SCALE: 1:100</p>
        <p className="text-xs text-cyan-600">DATE: 2024-02-16</p>
        <p className="text-xs text-cyan-600">REV: 3.2</p>
      </div>

      {/* Main Blueprint Area */}
      <div className="absolute inset-20 flex items-center justify-center">
        <div className="relative w-[600px] h-[400px]">
          {/* Building Outline */}
          <svg className="w-full h-full" viewBox="0 0 600 400">
            {/* Main Structure */}
            <rect x="100" y="50" width="400" height="300" fill="none" stroke="#06b6d4" strokeWidth="2" />
            
            {/* Rooms */}
            <rect x="100" y="50" width="150" height="150" fill="none" stroke="#06b6d4" strokeWidth="1" />
            <rect x="250" y="50" width="250" height="150" fill="none" stroke="#06b6d4" strokeWidth="1" />
            <rect x="100" y="200" width="200" height="150" fill="none" stroke="#06b6d4" strokeWidth="1" />
            <rect x="300" y="200" width="200" height="150" fill="none" stroke="#06b6d4" strokeWidth="1" />
            
            {/* Doors */}
            <line x1="180" y1="200" x2="220" y2="200" stroke="#22d3ee" strokeWidth="2" />
            <path d="M 220 200 Q 230 215 220 230" fill="none" stroke="#22d3ee" strokeWidth="1" />
            
            <line x1="300" y1="150" x2="300" y2="190" stroke="#22d3ee" strokeWidth="2" />
            <path d="M 300 190 Q 285 200 300 210" fill="none" stroke="#22d3ee" strokeWidth="1" />
            
            {/* Windows */}
            <rect x="120" y="80" width="40" height="30" fill="none" stroke="#06b6d4" strokeWidth="1" strokeDasharray="4" />
            <rect x="280" y="80" width="40" height="30" fill="none" stroke="#06b6d4" strokeWidth="1" strokeDasharray="4" />
            <rect x="340" y="80" width="40" height="30" fill="none" stroke="#06b6d4" strokeWidth="1" strokeDasharray="4" />
            
            {/* Dimensions */}
            <line x1="50" y1="50" x2="50" y2="350" stroke="#06b6d4" strokeWidth="1" strokeDasharray="4" />
            <text x="35" y="200" fill="#06b6d4" fontSize="12" transform="rotate(-90 35,200)">3000mm</text>
            
            <line x1="100" y1="380" x2="500" y2="380" stroke="#06b6d4" strokeWidth="1" strokeDasharray="4" />
            <text x="280" y="395" fill="#06b6d4" fontSize="12">4000mm</text>
            
            {/* Grid Points */}
            {[...Array(9)].map((_, i) => (
              [...Array(7)].map((_, j) => (
                <circle key={`${i}-${j}`} cx={100 + i * 50} cy={50 + j * 50} r="2" fill="#06b6d4" opacity="0.5" />
              ))
            ))}
          </svg>
          
          {/* Measurement Overlay */}
          <div className="absolute -right-24 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
            <div className="h-32 w-px bg-cyan-500/50" />
            <span className="text-xs text-cyan-400">3000mm</span>
            <div className="h-32 w-px bg-cyan-500/50" />
          </div>
        </div>
      </div>

      {/* Coordinates */}
      <div className="absolute bottom-8 left-8 text-xs text-cyan-600">
        X: 450.32 Y: 127.88 Z: 0.00
      </div>

      {/* Scale Bar */}
      <div className="absolute bottom-8 right-8">
        <div className="flex items-center gap-1">
          {[...Array(10)].map((_, i) => (
            <div key={i} className={`w-8 h-2 ${i % 2 === 0 ? 'bg-cyan-400' : 'bg-cyan-400/30'}`} />
          ))}
        </div>
        <p className="text-xs text-cyan-500 mt-1 text-right">1000mm</p>
      </div>
    </div>
  );
}
