'use client';
// THE DECK - Slide deck presentation style
import { useState } from 'react';

export default function TheDeck({ 
  businessName = 'Deck', 
  tagline = 'Presentation mode',
  services = [],
  phone,
  contactEmail 
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const slides = [
    {
      type: 'title',
      title: businessName,
      subtitle: tagline
    },
    {
      type: 'content',
      title: 'Our Philosophy',
      body: 'We believe in the power of simplicity. Every complex problem has an elegant solution waiting to be discovered.'
    },
    {
      type: 'list',
      title: 'What We Offer',
      items: services.length > 0 ? services.map(s => s.title) : [
        'Brand Strategy',
        'Visual Identity',
        'Web Development',
        'Digital Marketing'
      ]
    },
    {
      type: 'quote',
      quote: 'Design is not just what it looks like. Design is how it works.',
      author: 'Steve Jobs'
    },
    {
      type: 'cta',
      title: 'Ready to Start?',
      phone: phone,
      email: contactEmail
    }
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide(c => c + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(c => c - 1);
    }
  };

  const goToSlide = (i) => {
    setDirection(i > currentSlide ? 1 : -1);
    setCurrentSlide(i);
  };

  return (
    <div className="h-screen bg-indigo-950 text-white overflow-hidden flex flex-col">
      {/* Header bar */}
      <header className="flex justify-between items-center px-8 py-4 bg-indigo-900/50">
        <h1 className="text-lg font-bold">{businessName}</h1>
        <span className="text-sm opacity-60">
          {currentSlide + 1} / {slides.length}
        </span>
      </header>

      {/* Slide container */}
      <main className="flex-1 flex items-center justify-center p-12 relative">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute transition-all duration-500 ${
              i === currentSlide 
                ? 'opacity-100 translate-x-0 scale-100' 
                : direction > 0 
                  ? i < currentSlide ? 'opacity-0 -translate-x-full scale-95' : 'opacity-0 translate-x-full scale-95'
                  : i > currentSlide ? 'opacity-0 translate-x-full scale-95' : 'opacity-0 -translate-x-full scale-95'
            }`}
          >
            {slide.type === 'title' && (
              <div className="text-center">
                <h2 className="text-8xl md:text-9xl font-black mb-6">{slide.title}</h2>
                <p className="text-2xl opacity-70">{slide.subtitle}</p>
              </div>
            )}

            {slide.type === 'content' && (
              <div className="max-w-2xl text-center">
                <h3 className="text-5xl font-bold mb-8">{slide.title}</h3>
                <p className="text-2xl leading-relaxed opacity-80">{slide.body}</p>
              </div>
            )}

            {slide.type === 'list' && (
              <div className="max-w-2xl">
                <h3 className="text-5xl font-bold mb-12">{slide.title}</h3>
                <ul className="space-y-6">
                  {slide.items.map((item, j) => (
                    <li key={j} className="text-3xl flex items-center gap-4">
                      <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-sm">
                        {j + 1}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {slide.type === 'quote' && (
              <div className="max-w-3xl text-center">
                <blockquote className="text-5xl md:text-6xl font-bold leading-tight">
                  "{slide.quote}"
                </blockquote>
                <p className="text-2xl mt-8 opacity-60">— {slide.author}</p>
              </div>
            )}

            {slide.type === 'cta' && (
              <div className="text-center">
                <h3 className="text-6xl font-bold mb-12">{slide.title}</h3>
                <div className="flex flex-col md:flex-row gap-6 justify-center">
                  <a href={`tel:${slide.phone}`} className="bg-white text-indigo-900 px-8 py-4 font-bold text-xl hover:scale-105 transition-transform">
                    {slide.phone}
                  </a>
                  <a href={`mailto:${slide.email}`} className="border-2 border-white px-8 py-4 font-bold text-xl hover:bg-white hover:text-indigo-900 transition-colors">
                    Email Us
                  </a>
                </div>
              </div>
            )}
          </div>
        ))}
      </main>

      {/* Navigation */}
      <footer className="px-8 py-6 bg-indigo-900/50 flex justify-between items-center">
        <button 
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="px-6 py-2 border border-white/30 disabled:opacity-30 hover:bg-white/10 transition-colors"
        >
          ← Previous
        </button>
        
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>

        <button 
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="px-6 py-2 border border-white/30 disabled:opacity-30 hover:bg-white/10 transition-colors"
        >
          Next →
        </button>
      </footer>
    </div>
  );
}
