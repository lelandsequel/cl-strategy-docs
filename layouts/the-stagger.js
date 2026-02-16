'use client';
import { useState, useEffect } from 'react';

export default function TheStagger({
  businessName = 'Business Name',
  tagline = 'Your tagline here',
  services = [],
  images = []
}) {
  const [visible, setVisible] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % 10);
      setVisible(prev => {
        const newVisible = [...prev];
        if (!newVisible.includes(currentIndex)) {
          newVisible.push(currentIndex);
        }
        return newVisible;
      });
    }, 500);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const words = businessName.split('');

  return (
    <div className="min-h-screen bg-zinc-900 text-white overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900"/>
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(255,255,255,0.03) 2px,
            rgba(255,255,255,0.03) 4px
          )`
        }}/>
      </div>

      {/* Header */}
      <header className="relative z-10 flex justify-between items-center px-6 py-6 max-w-7xl mx-auto">
        <h1 className="text-xl font-bold tracking-widest">{businessName}</h1>
        <nav className="hidden md:flex gap-8 text-sm text-zinc-400">
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>
      </header>

      {/* Hero - staggered text reveal */}
      <section className="relative z-10 min-h-[80vh] flex items-center justify-center px-6">
        <div className="text-center">
          {/* Staggered business name */}
          <h2 className="text-6xl md:text-9xl font-black mb-8 leading-none">
            {words.map((char, i) => (
              <span 
                key={i}
                className={`inline-block transition-all duration-500 ${
                  visible.includes(i) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  transitionDelay: `${i * 50}ms`,
                  marginRight: char === ' ' ? '0.3em' : '0'
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </h2>

          {/* Staggered tagline */}
          <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto">
            {tagline.split(' ').map((word, i) => (
              <span 
                key={i}
                className={`inline-block mr-2 transition-all duration-500 ${
                  visible.includes(20 + i) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${600 + i * 100}ms` }}
              >
                {word}
              </span>
            ))}
          </p>

          {/* Staggered CTA */}
          <div className={`mt-12 transition-all duration-700 ${
            visible.includes(30) ? 'opacity-100' : 'opacity-0'
          }`} style={{ transitionDelay: '1200ms' }}>
            <button className="bg-white text-zinc-900 px-10 py-5 font-bold text-lg hover:scale-105 transition-transform">
              Discover More
            </button>
          </div>
        </div>
      </section>

      {/* Services - staggered grid */}
      <section id="services" className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {(services.length > 0 ? services : [
              { title: 'Strategy', description: 'Planning that reveals your path' },
              { title: 'Design', description: 'Visual solutions that stand out' },
              { title: 'Development', description: 'Building for the future' }
            ]).map((service, i) => (
              <div 
                key={i}
                className={`group bg-zinc-800/50 border border-zinc-700 p-8 transition-all duration-700 hover:border-white ${
                  visible.includes(40 + i)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${1500 + i * 150}ms` }}
              >
                <div className="w-12 h-12 bg-zinc-700 group-hover:bg-white group-hover:text-zinc-900 flex items-center justify-center text-2xl font-bold mb-6 transition-colors">
                  {i + 1}
                </div>
                <h4 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">
                  {service.title || service}
                </h4>
                <p className="text-zinc-500 group-hover:text-zinc-400 transition-colors">
                  {service.description || 'Service description'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats - staggered numbers */}
      <section className="relative z-10 py-24 px-6 bg-zinc-800/30">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-8 text-center">
          {[
            { value: '100+', label: 'Projects' },
            { value: '50+', label: 'Clients' },
            { value: '10+', label: 'Years' }
          ].map((stat, i) => (
            <div 
              key={i}
              className={`transition-all duration-700 ${
                visible.includes(50 + i)
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-90'
              }`}
              style={{ transitionDelay: `${2000 + i * 200}ms` }}
            >
              <div className="text-5xl md:text-7xl font-black text-white mb-2">
                {stat.value}
              </div>
              <div className="text-zinc-500 uppercase tracking-wider text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 py-24 px-6 text-center">
        <div className={`transition-all duration-1000 ${
          visible.includes(60) ? 'opacity-100' : 'opacity-0'
        }`} style={{ transitionDelay: '2500ms' }}>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to begin?
          </h3>
          <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
            Let's create something remarkable together. 
            Your journey starts with a single step.
          </p>
          <button className="bg-white text-zinc-900 px-10 py-5 font-bold text-lg hover:scale-105 transition-transform">
            Get Started
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-6 border-t border-zinc-800 text-center text-zinc-500 text-sm">
        <p>© 2024 {businessName}</p>
      </footer>
    </div>
  );
}
