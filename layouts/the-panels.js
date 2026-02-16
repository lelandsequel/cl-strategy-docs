'use client';
// THE PANELS - Sliding panel reveal layout
import { useState } from 'react';

export default function ThePanels({ 
  businessName = 'Panels', 
  tagline = 'Reveal what matters',
  services = [],
  phone,
  contactEmail 
}) {
  const [activePanel, setActivePanel] = useState(0);

  const panels = services.length > 0 ? services : [
    { title: 'Discover', content: 'We start by understanding your vision, goals, and challenges through in-depth conversations.' },
    { title: 'Design', content: 'Our team crafts visual solutions that align with your brand and resonate with your audience.' },
    { title: 'Develop', content: 'We build robust, scalable solutions using cutting-edge technologies and best practices.' },
    { title: 'Deploy', content: 'Smooth launch with comprehensive testing and zero-downtime deployment strategies.' },
    { title: 'Support', content: 'Ongoing maintenance and optimization to ensure continued success and growth.' }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white flex">
      {/* Sidebar */}
      <aside className="w-full md:w-80 bg-slate-950 p-8 flex flex-col justify-between fixed md:relative h-screen z-10">
        <div>
          <h1 className="text-3xl font-bold mb-2">{businessName}</h1>
          <p className="text-slate-400 text-sm">{tagline}</p>
        </div>

        <nav className="space-y-2">
          {panels.map((panel, i) => (
            <button
              key={i}
              onClick={() => setActivePanel(i)}
              className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                activePanel === i 
                  ? 'bg-white text-slate-900 font-semibold' 
                  : 'text-slate-400 hover:bg-slate-800'
              }`}
            >
              <span className="mr-3 opacity-50">{String(i + 1).padStart(2, '0')}</span>
              {panel.title}
            </button>
          ))}
        </nav>

        <div className="text-slate-500 text-sm">
          <a href={`tel:${phone}`} className="hover:text-white">{phone}</a>
        </div>
      </aside>

      {/* Main content area */}
      <main className="flex-1 relative overflow-hidden">
        {panels.map((panel, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-all duration-700 ease-in-out flex items-center justify-center p-12 ${
              activePanel === i 
                ? 'opacity-100 translate-x-0' 
                : i < activePanel 
                  ? 'opacity-0 -translate-x-full' 
                  : 'opacity-0 translate-x-full'
            }`}
            style={{ transitionDelay: activePanel === i ? '0ms' : '0ms' }}
          >
            {/* Background number */}
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30rem] font-bold text-slate-800/50 select-none">
              {String(i + 1).padStart(2, '0')}
            </span>

            {/* Content */}
            <div className="relative z-10 max-w-xl">
              <h2 className="text-6xl md:text-8xl font-bold mb-8">{panel.title}</h2>
              <p className="text-xl text-slate-300 leading-relaxed">{panel.content}</p>
              <button className="mt-8 bg-white text-slate-900 px-8 py-4 font-bold hover:scale-105 transition-transform">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
