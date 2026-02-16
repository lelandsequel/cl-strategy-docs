"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function TheGrid({ 
  businessName = "Business", 
  tagline = "Your tagline here", 
  services = [], 
  phone = "", 
  contactEmail = "" 
}) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const gridItems = [
    { size: "large", title: "Our Story", text: "Building dreams since day one" },
    { size: "tall", title: "Excellence", text: "Quality in every detail" },
    { size: "small", title: "Innovation", text: "Always moving forward" },
    { size: "wide", title: "Community", text: "We serve our neighbors" },
    { size: "small", title: "Trust", text: "Years of reliability" },
    { size: "small", title: "Growth", text: "Continuous improvement" },
    { size: "large", title: "Your Success", text: "Our ultimate goal" },
    { size: "tall", title: "Passion", text: "What drives us daily" },
  ];

  const getGridClass = (size) => {
    switch(size) {
      case "large": return "md:col-span-2 md:row-span-2";
      case "wide": return "md:col-span-2";
      case "tall": return "md:row-span-2";
      default: return "";
    }
  };

  const getHeightClass = (size) => {
    switch(size) {
      case "large": return "min-h-[400px]";
      case "wide": return "min-h-[200px]";
      case "tall": return "min-h-[400px]";
      default: return "min-h-[200px]";
    }
  };

  const colors = [
    "from-rose-500 to-orange-400",
    "from-amber-500 to-yellow-400",
    "from-lime-500 to-emerald-400",
    "from-cyan-500 to-blue-400",
    "from-indigo-500 to-purple-400",
    "from-violet-500 to-fuchsia-400",
    "from-pink-500 to-rose-400",
    "from-red-500 to-orange-400",
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Header */}
      <header className="py-24 px-6 md:px-12 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-zinc-500 font-mono text-sm tracking-widest uppercase"
          >
            Welcome to
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-bold mt-4 bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent"
          >
            {businessName}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-zinc-400 mt-6 max-w-2xl"
          >
            {tagline}
          </motion.p>
        </div>
      </header>

      {/* Masonry Grid */}
      <main className="p-6 md:p-12" ref={containerRef}>
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-4 max-w-7xl mx-auto">
          {gridItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`${getGridClass(item.size)} ${getHeightClass(item.size)} relative group overflow-hidden rounded-2xl`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${colors[i]} opacity-80 group-hover:opacity-100 transition-opacity`} />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <span className="text-white/60 font-mono text-xs mb-2">#{i + 1}</span>
                <h3 className="text-2xl md:text-3xl font-bold text-white">{item.title}</h3>
                <p className="text-white/80 mt-2">{item.text}</p>
              </div>
              <motion.div 
                className="absolute top-4 right-4 w-8 h-8 border-2 border-white/30 rounded-full"
                whileHover={{ scale: 1.2, rotate: 90 }}
              />
            </motion.div>
          ))}
        </div>
      </main>

      {/* Services Section */}
      <section className="py-24 px-6 md:px-12 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Services Grid</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {services.length > 0 ? services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="bg-zinc-800 p-6 rounded-xl border border-zinc-700 hover:border-zinc-500 transition-colors"
              >
                <div className="w-10 h-10 bg-zinc-700 rounded-lg flex items-center justify-center mb-4 text-lg font-bold">
                  {String.fromCharCode(65 + i)}
                </div>
                <h3 className="font-semibold text-lg">{service}</h3>
              </motion.div>
            )) : (
              <div className="col-span-4 text-center py-12 text-zinc-500">
                Add services to display them in the grid
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact */}
      <footer className="py-24 px-6 md:px-12 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h2 className="text-3xl font-bold">{businessName}</h2>
            <p className="text-zinc-400 mt-2">{tagline}</p>
          </div>
          <div className="flex gap-8">
            {phone && (
              <a href={`tel:${phone}`} className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full" />
                {phone}
              </a>
            )}
            {contactEmail && (
              <a href={`mailto:${contactEmail}`} className="text-zinc-400 hover:text-white transition-colors">
                {contactEmail}
              </a>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}
