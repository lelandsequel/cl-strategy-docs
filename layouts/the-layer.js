"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function TheLayer({ 
  businessName = "Business", 
  tagline = "Your tagline here", 
  services = [], 
  phone = "", 
  contactEmail = "" 
}) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  const layer1Y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const layer2Y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const layer3Y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const layers = [
    { color: "bg-rose-500", zIndex: 10, offset: 0 },
    { color: "bg-orange-500", zIndex: 20, offset: 40 },
    { color: "bg-amber-500", zIndex: 30, offset: 80 },
    { color: "bg-emerald-500", zIndex: 40, offset: 120 },
    { color: "bg-cyan-500", zIndex: 50, offset: 160 },
    { color: "bg-indigo-500", zIndex: 60, offset: 200 },
  ];

  return (
    <div ref={containerRef} className="min-h-[200vh] bg-slate-950">
      {/* Hero with Overlapping Layers */}
      <header className="h-screen sticky top-0 overflow-hidden">
        {/* Background Layers */}
        <motion.div 
          style={{ y: layer1Y }}
          className="absolute top-20 left-10 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl"
        />
        <motion.div 
          style={{ y: layer2Y }}
          className="absolute bottom-20 right-20 w-64 h-64 bg-cyan-600/30 rounded-full blur-3xl"
        />
        <motion.div 
          style={{ y: layer3Y }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-3xl"
        />

        {/* Overlapping Cards */}
        <div className="relative h-full flex items-center justify-center">
          {layers.slice(0, 4).map((layer, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, rotate: -5 + i * 3 }}
              animate={{ opacity: 1, y: 0, rotate: -5 + i * 3 }}
              transition={{ delay: i * 0.15 }}
              className={`absolute w-72 h-96 ${layer.color} rounded-2xl shadow-2xl`}
              style={{ 
                zIndex: layer.zIndex,
                transform: `translateX(${(i - 1.5) * 60}px) translateY(${layer.offset / 4}px) rotate(${-5 + i * 3}deg)`,
              }}
            />
          ))}
          
          {/* Main Content Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="relative z-[100] bg-white text-slate-900 p-12 rounded-2xl shadow-2xl max-w-lg text-center"
          >
            <h1 className="text-4xl md:text-5xl font-black">{businessName}</h1>
            <p className="text-slate-600 mt-4">{tagline}</p>
            <div className="mt-8 flex gap-4 justify-center">
              {phone && (
                <a href={`tel:${phone}`} className="px-4 py-2 bg-slate-900 text-white rounded-lg text-sm hover:bg-slate-800">
                  Call Us
                </a>
              )}
              {contactEmail && (
                <a href={`mailto:${contactEmail}`} className="px-4 py-2 border border-slate-300 rounded-lg text-sm hover:bg-slate-100">
                  Email
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </header>

      {/* Services with Overlapping Cards */}
      <section className="relative py-32 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">Our Services</h2>
          
          <div className="relative h-[500px]">
            {services.length > 0 ? services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -100, rotate: -10 }}
                whileInView={{ opacity: 1, x: 0, rotate: Math.random() * 10 - 5 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 0, zIndex: 100 }}
                className="absolute w-64 bg-white text-slate-900 p-6 rounded-xl shadow-xl cursor-pointer"
                style={{
                  left: `${(i % 4) * 25}%`,
                  top: `${Math.floor(i / 4) * 150 + (i % 2) * 50}px`,
                  zIndex: 10 + i,
                }}
              >
                <div 
                  className="w-10 h-10 rounded-lg mb-4 flex items-center justify-center text-white font-bold"
                  style={{ backgroundColor: `hsl(${i * 50}, 70%, 50%)` }}
                >
                  {i + 1}
                </div>
                <h3 className="font-bold text-lg">{service}</h3>
              </motion.div>
            )) : (
              <div className="absolute inset-0 flex items-center justify-center text-slate-500">
                Add services to display
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Layered Footer */}
      <footer className="relative py-24 px-6">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-rose-600 transform -skew-y-2" />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-orange-500 transform skew-y-1" />
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-amber-400" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Start?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {phone && (
              <a href={`tel:${phone}`} className="px-8 py-4 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-100">
                {phone}
              </a>
            )}
            {contactEmail && (
              <a href={`mailto:${contactEmail}`} className="px-8 py-4 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800">
                {contactEmail}
              </a>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}
