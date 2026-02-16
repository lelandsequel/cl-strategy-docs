'use client';

import { useState, useEffect } from 'react';

export default function TheSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState('next');

  const slides = [
    {
      id: 1,
      title: 'Mountain Dawn',
      subtitle: 'The first light',
      image: 'from-indigo-900 via-purple-900 to-pink-500',
      content: 'Where silence meets the sky',
    },
    {
      id: 2,
      title: 'Ocean Depths',
      subtitle: 'Beneath the waves',
      image: 'from-cyan-900 via-blue-900 to-teal-500',
      content: 'Discover the unknown world',
    },
    {
      id: 3,
      title: 'Desert Wind',
      subtitle: 'Endless horizons',
      image: 'from-orange-900 via-amber-800 to-yellow-500',
      content: 'Where dreams stretch forever',
    },
    {
      id: 4,
      title: 'Forest Mist',
      subtitle: 'Nature\'s embrace',
      image: 'from-green-900 via-emerald-800 to-lime-500',
      content: 'Breathe in the wild',
    },
  ];

  const nextSlide = () => {
    setDirection('next');
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection('prev');
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen w-full overflow-hidden bg-black relative">
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide 
                ? 'opacity-100 scale-100 translate-x-0' 
                : index === (currentSlide - 1 + slides.length) % slides.length
                  ? 'opacity-0 scale-110 -translate-x-full'
                  : 'opacity-0 scale-110 translate-x-full'
            }`}
            style={{
              background: `linear-gradient(135deg, ${slide.image.split(' ')[1]}, ${slide.image.split(' ')[3]})`,
            }}
          >
            {/* Overlay Pattern */}
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)'
            }} />

            {/* Content */}
            <div className="relative h-full flex flex-col justify-center items-center text-center px-8">
              <p className="text-white/60 tracking-[0.5em] text-sm mb-4 uppercase">
                {slide.subtitle}
              </p>
              <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter mb-6">
                {slide.title}
              </h1>
              <p className="text-xl text-white/80 max-w-xl">
                {slide.content}
              </p>
            </div>

            {/* Slide Number */}
            <div className="absolute bottom-20 left-20">
              <span className="text-8xl font-black text-white/10">
                {String(slide.id).padStart(2, '0')}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 -translate-y-1/2 w-16 h-16 flex items-center justify-center border border-white/20 text-white/60 hover:bg-white hover:text-black transition-all duration-300"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 -translate-y-1/2 w-16 h-16 flex items-center justify-center border border-white/20 text-white/60 hover:bg-white hover:text-black transition-all duration-300"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
        <div 
          className="h-full bg-white transition-all duration-[6000ms] ease-linear"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentSlide ? 'next' : 'prev');
              setCurrentSlide(index);
            }}
            className={`h-1 rounded-full transition-all duration-500 ${
              index === currentSlide ? 'w-12 bg-white' : 'w-4 bg-white/30 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Counter */}
      <div className="absolute top-8 right-8 flex items-center gap-2 text-white/40 font-mono text-sm">
        <span>{String(currentSlide + 1).padStart(2, '0')}</span>
        <span>/</span>
        <span>{String(slides.length).padStart(2, '0')}</span>
      </div>
    </div>
  );
}
