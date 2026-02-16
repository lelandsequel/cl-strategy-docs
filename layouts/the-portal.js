// THE PORTAL - Modal navigation aesthetic
'use client';
import { useState } from 'react';

export default function ThePortal({ businessName, tagline, services, phone, contactEmail }) {
  const [activeModal, setActiveModal] = useState(null);

  const content = {
    home: (
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-black text-white mb-4">{businessName}</h1>
        <p className="text-xl text-white/70">{tagline}</p>
      </div>
    ),
    services: (
      <div className="space-y-4 max-h-[60vh] overflow-y-auto">
        <h2 className="text-3xl font-bold text-white mb-6">Our Services</h2>
        {services?.map((s, i) => (
          <div key={i} className="p-4 bg-white/10 rounded-xl">
            <h3 className="text-xl font-bold text-white">{s.title}</h3>
            <p className="text-white/70 mt-2">{s.description}</p>
          </div>
        ))}
      </div>
    ),
    contact: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-white">Get in Touch</h2>
        <div className="space-y-4">
          <a href={`tel:${phone}`} className="flex items-center gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors">
            <span className="text-2xl">📞</span>
            <span className="text-white">{phone}</span>
          </a>
          <a href={`mailto:${contactEmail}`} className="flex items-center gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors">
            <span className="text-2xl">✉️</span>
            <span className="text-white">{contactEmail}</span>
          </a>
        </div>
      </div>
    )
  };

  const labels = ['home', 'services', 'contact'];

  return (
    <div className="min-h-screen bg-neutral-900 flex items-center justify-center p-8">
      <div className="relative w-full max-w-2xl">
        <div className="absolute -inset-4 bg-gradient-to-r from-violet-600 to-blue-600 rounded-3xl blur-2xl opacity-50"></div>
        
        <div className="relative bg-neutral-900 rounded-2xl p-8 md:p-12 border border-neutral-700">
          <div className="flex justify-center gap-2 mb-12">
            {labels.map((label) => (
              <button
                key={label}
                onClick={() => setActiveModal(label)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeModal === label 
                    ? 'bg-white text-black' 
                    : 'bg-neutral-800 text-white hover:bg-neutral-700'
                }`}
              >
                {label.charAt(0).toUpperCase() + label.slice(1)}
              </button>
            ))}
          </div>

          <div className="min-h-[300px] flex items-center justify-center">
            {activeModal ? (
              <button 
                onClick={() => setActiveModal(null)}
                className="w-full"
              >
                {content[activeModal]}
              </button>
            ) : (
              <div className="text-center">
                <p className="text-white/50 mb-4">← Select a portal</p>
                <h1 className="text-6xl md:text-8xl font-black text-white">{businessName}</h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
