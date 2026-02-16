// THE BANNER - Banner slider aesthetic
'use client';
import { useState } from 'react';

export default function TheBanner({ businessName, tagline, services, phone, contactEmail }) {
  const [current, setCurrent] = useState(0);
  
 [
    { title  const banners =: businessName, subtitle: tagline, bg: 'from-slate-900 to-slate-700' },
    ...(services?.slice(0, 3).map(s => ({ title: s.title, subtitle: s.description, bg: 'from-blue-600 to-indigo-800' })) || [])
  ];

  return (
    <div className="min-h-screen bg-neutral-900">
      <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center">
        <span className="text-white font-bold text-xl">{businessName}</span>
        <div className="flex gap-4">
          {banners.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-all ${current === i ? 'bg-white w-8' : 'bg-white/30'}`}
            />
          ))}
        </div>
      </nav>

      <div className="h-screen relative">
        {banners.map((banner, i) => (
          <div
            key={i}
            className={`absolute inset-0 bg-gradient-to-br ${banner.bg} transition-opacity duration-700 ${i === current ? 'opacity-100' : 'opacity-0'}`}
          >
            <div className="h-full flex items-center justify-center">
              <div className="text-center px-8">
                <span className="inline-block px-4 py-1 bg-white/20 rounded-full text-white text-sm mb-6">
                  {i === 0 ? 'WELCOME' : `SERVICE ${i}`}
                </span>
                <h1 className="text-5xl md:text-8xl font-bold text-white mb-4">
                  {banner.title}
                </h1>
                <p className="text-xl text-white/80 max-w-xl mx-auto">
                  {banner.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white p-8">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <div className="text-2xl font-bold">{businessName}</div>
            <div className="text-neutral-500">{tagline}</div>
          </div>
          <div className="flex gap-8">
            <a href={`tel:${phone}`} className="font-medium hover:text-blue-600">{phone}</a>
            <a href={`mailto:${contactEmail}`} className="font-medium hover:text-blue-600">{contactEmail}</a>
          </div>
        </div>
      </div>
    </div>
  )
}
