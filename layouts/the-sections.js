'use client';
// THE SECTIONS - Full-screen scroll sections with progress
import { useState, useEffect } from 'react';

export default function TheSections({ 
  businessName = 'Sections', 
  tagline = 'Scroll through',
  services = [],
  phone,
  contactEmail 
}) {
  const [currentSection, setCurrentSection] = useState(0);

  const sections = [
    { 
      title: businessName, 
      subtitle: tagline,
      bg: 'bg-neutral-900',
      content: null
    },
    { 
      title: 'Services', 
      subtitle: 'What we do',
      bg: 'bg-stone-800',
      content: services.length > 0 ? services : [
        { title: 'Strategy', desc: 'Planning your path to success' },
        { title: 'Design', desc: 'Beautiful, functional solutions' },
        { title: 'Development', desc: 'Robust, scalable code' }
      ]
    },
    { 
      title: 'Work', 
      subtitle: 'Our projects',
      bg: 'bg-zinc-800',
      content: ['Project One', 'Project Two', 'Project Three']
    },
    { 
      title: 'Contact', 
      subtitle: 'Get in touch',
      bg: 'bg-neutral-800',
      content: { phone, email: contactEmail }
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const windowHeight = window.innerHeight;
      const section = Math.floor(scrollPos / windowHeight);
      setCurrentSection(section);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-white/10">
        <div 
          className="h-full bg-white transition-all duration-300"
          style={{ width: `${((currentSection + 1) / sections.length) * 100}%` }}
        />
      </div>

      {/* Section indicators */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
        {sections.map((_, i) => (
          <button
            key={i}
            onClick={() => window.scrollTo({ top: i * window.innerHeight, behavior: 'smooth' })}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSection === i ? 'bg-white scale-125' : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Sections */}
      {sections.map((section, i) => (
        <section
          key={i}
          className={`min-h-screen ${section.bg} text-white flex items-center justify-center p-8`}
        >
          <div className="text-center max-w-3xl">
            <span className="text-sm tracking-[0.3em] opacity-60 mb-4 block">
              {section.subtitle}
            </span>
            
            {section.content === null ? (
              // Hero
              <h1 className="text-7xl md:text-9xl font-bold mb-6">{section.title}</h1>
            ) : Array.isArray(section.content) && typeof section.content[0] === 'object' ? (
              // Services grid
              <div className="grid md:grid-cols-3 gap-8 text-left">
                {section.content.map((item, j) => (
                  <div key={j} className="bg-white/10 p-6">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="opacity-70">{item.desc}</p>
                  </div>
                ))}
              </div>
            ) : Array.isArray(section.content) ? (
              // Work list
              <div className="space-y-4">
                {section.content.map((item, j) => (
                  <div key={j} className="text-3xl md:text-5xl font-bold opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
                    {item}
                  </div>
                ))}
              </div>
            ) : (
              // Contact
              <div>
                <h2 className="text-6xl md:text-8xl font-bold mb-8">{section.title}</h2>
                <div className="flex flex-col md:flex-row gap-8 justify-center">
                  <a href={`tel:${section.content.phone}`} className="text-2xl hover:underline">
                    {section.content.phone}
                  </a>
                  <a href={`mailto:${section.content.email}`} className="text-2xl hover:underline">
                    {section.content.email}
                  </a>
                </div>
              </div>
            )}
          </div>
        </section>
      ))}
    </div>
  );
}
