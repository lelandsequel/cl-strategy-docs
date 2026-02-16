"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TheFocus({ 
  businessName = "Business", 
  tagline = "Your tagline here", 
  services = [], 
  phone = "", 
  contactEmail = "" 
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const slides = [
    {
      title: businessName,
      subtitle: tagline,
      bg: "from-slate-900 via-slate-800 to-slate-900",
    },
    {
      title: "Our Approach",
      subtitle: "Focused on delivering excellence in every project",
      bg: "from-emerald-900 via-teal-900 to-slate-900",
    },
    {
      title: "Why Choose Us",
      subtitle: "Unwavering commitment to quality and results",
      bg: "from-violet-900 via-purple-900 to-slate-900",
    },
    ...(services.length > 0 ? services.slice(0, 5).map(service => ({
      title: service,
      subtitle: "Learn more about this service",
      bg: "from-amber-900 via-orange-900 to-slate-900",
    }))) : [],
  ];

  const goToSlide = (index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-slate-900">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].bg} flex flex-col items-center justify-center px-6`}
        >
          {/* Progress Dots */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2 flex gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === currentSlide ? "bg-white scale-125" : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>

          {/* Content */}
          <div className="max-w-4xl text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/60 font-mono text-sm tracking-widest uppercase"
            >
              {currentSlide === 0 ? "Welcome" : `Section ${currentSlide}`}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-8xl font-black text-white mt-6"
            >
              {slides[currentSlide].title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-white/70 mt-6"
            >
              {slides[currentSlide].subtitle}
            </motion.p>
          </div>

          {/* Navigation */}
          <div className="absolute bottom-12 flex gap-4">
            <button
              onClick={() => goToSlide((currentSlide - 1 + slides.length) % slides.length)}
              className="w-12 h-12 border-2 border-white/30 rounded-full flex items-center justify-center text-white/60 hover:border-white hover:text-white transition-colors"
            >
              ←
            </button>
            <button
              onClick={() => goToSlide((currentSlide + 1) % slides.length)}
              className="w-12 h-12 border-2 border-white/30 rounded-full flex items-center justify-center text-white/60 hover:border-white hover:text-white transition-colors"
            >
              →
            </button>
          </div>

          {/* Keyboard Hint */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 translate-y-16 text-white/30 text-sm">
            Use ← → keys to navigate
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Contact Overlay */}
      <div className="absolute top-8 right-8 flex gap-4 z-50">
        {phone && (
          <a
            href={`tel:${phone}`}
            className="px-4 py-2 bg-white/10 backdrop-blur text-white text-sm rounded-full hover:bg-white/20 transition-colors"
          >
            📞 {phone}
          </a>
        )}
        {contactEmail && (
          <a
            href={`mailto:${contactEmail}`}
            className="px-4 py-2 bg-white/10 backdrop-blur text-white text-sm rounded-full hover:bg-white/20 transition-colors"
          >
            Contact
          </a>
        )}
      </div>
    </div>
  );
}
