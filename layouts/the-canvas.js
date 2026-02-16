'use client';
// THE CANVAS - Full viewport canvas-style layout
import { useState } from 'react';

export default function TheCanvas({ 
  businessName = 'Canvas', 
  tagline = 'Your vision, our canvas',
  services = [],
  phone,
  contactEmail 
}) {
  const [active, setActive] = useState(null);

  const items = services.length > 0 ? services : [
    { title: 'Branding', desc: 'Identity that stands out', x: 20, y: 30 },
    { title: 'Web Design', desc: 'Digital experiences', x: 70, y: 25 },
    { title: 'Development', desc: 'Code that powers', x: 45, y: 60 },
    { title: 'Marketing', desc: 'Growth strategies', x: 15, y: 70 },
    { title: 'Consulting', desc: 'Expert advice', x: 75, y: 65 }
  ];

  return (
    <div className="h-screen w-screen overflow-hidden bg-[#1a1a2e] relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {items.map((item, i) => (
          <line
            key={i}
            x1="50%" y1="50%"
            x2={`${item.x}%`} y2={`${item.y}%`}
            stroke="white"
            strokeWidth="1"
            strokeOpacity="0.2"
          />
        ))}
      </svg>

      {/* Center hub */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10">
        <h1 className="text-5xl md:text-7xl font-black text-white mb-4">{businessName}</h1>
        <p className="text-white/60">{tagline}</p>
      </div>

      {/* Floating items */}
      {items.map((item, i) => (
        <div
          key={i}
          className={`absolute transition-all duration-500 cursor-pointer ${
            active === i ? 'z-20 scale-125' : 'z-10 hover:scale-110'
          }`}
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
            transform: `translate(-50%, -50%) ${active === i ? 'scale(1.25)' : 'scale(1)'}`
          }}
          onMouseEnter={() => setActive(i)}
          onMouseLeave={() => setActive(null)}
        >
          <div className={`w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center transition-all ${
            active === i ? 'bg-white text-[#1a1a2e]' : 'bg-white/20 text-white border-2 border-white/40'
          }`}>
            <div className="text-center">
              <h3 className="font-bold text-sm md:text-base">{item.title}</h3>
            </div>
          </div>
          {active === i && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-48 bg-white p-4 text-center">
              <p className="text-[#1a1a2e] text-sm">{item.desc}</p>
            </div>
          )}
        </div>
      ))}

      {/* Bottom info */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-8 z-10">
        <a href={`tel:${phone}`} className="text-white/60 hover:text-white text-sm">
          {phone}
        </a>
        <a href={`mailto:${contactEmail}`} className="text-white/60 hover:text-white text-sm">
          {contactEmail}
        </a>
      </div>
    </div>
  );
}
