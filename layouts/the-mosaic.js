"use client";
import { motion } from "framer-motion";

export default function TheMosaic({ 
  businessName = "Business", 
  tagline = "Your tagline here", 
  services = [], 
  phone = "", 
  contactEmail = "" 
}) {
  const mosaicTiles = [
    { size: "large", color: "from-rose-400 to-red-600", text: "Quality" },
    { size: "small", color: "from-orange-400 to-amber-600", text: "Trust" },
    { size: "small", color: "from-yellow-400 to-orange-500", text: "Care" },
    { size: "medium", color: "from-lime-400 to-green-600", text: "Growth" },
    { size: "wide", color: "from-emerald-400 to-teal-600", text: "Excellence" },
    { size: "small", color: "from-cyan-400 to-blue-600", text: "Vision" },
    { size: "medium", color: "from-blue-400 to-indigo-600", text: "Innovation" },
    { size: "large", color: "from-violet-400 to-purple-700", text: "Results" },
    { size: "small", color: "from-fuchsia-400 to-pink-600", text: "Passion" },
    { size: "wide", color: "from-rose-400 via-purple-500 to-indigo-600", text: "Partnership" },
  ];

  const getTileClass = (size) => {
    switch(size) {
      case "large": return "md:col-span-2 md:row-span-2";
      case "medium": return "md:col-span-1 md:row-span-2";
      case "wide": return "md:col-span-2";
      default: return "";
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950">
      {/* Header */}
      <header className="p-6 md:p-12 border-b border-neutral-800">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white">{businessName}</h1>
          <p className="text-neutral-400 mt-2 text-lg">{tagline}</p>
        </motion.div>
      </header>

      {/* Main Mosaic Grid */}
      <main className="p-6 md:p-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[150px]">
          {mosaicTiles.map((tile, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, type: "spring" }}
              whileHover={{ scale: 1.02, zIndex: 10 }}
              className={`${getTileClass(tile.color.includes('via') ? 'wide' : tile.size)} relative rounded-2xl overflow-hidden group cursor-pointer`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${tile.color} opacity-80 group-hover:opacity-100 transition-opacity`} />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-bold text-2xl md:text-3xl tracking-tight">{tile.text}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Services Mosaic */}
      <section className="p-6 md:p-12 bg-neutral-900">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold text-white mb-12 text-center"
          >
            Our Services
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {services.length > 0 ? services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -5 }}
                className="aspect-square bg-neutral-800 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:bg-neutral-700 transition-colors"
              >
                <div 
                  className="w-16 h-16 rounded-full mb-4 flex items-center justify-center text-2xl font-bold text-white"
                  style={{ backgroundColor: `hsl(${(i * 40) % 360}, 70%, 50%)` }}
                >
                  {String.fromCharCode(65 + i)}
                </div>
                <h3 className="font-semibold text-white">{service}</h3>
              </motion.div>
            )) : (
              <div className="col-span-4 text-center py-12 text-neutral-500">
                Add services to display
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Strip */}
      <footer className="p-12 bg-gradient-to-r from-rose-600 via-purple-600 to-indigo-600">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-white text-center md:text-left">
            <h2 className="text-3xl font-bold">Let's Create Together</h2>
            <p className="text-white/80 mt-2">Get in touch for a free consultation</p>
          </div>
          <div className="flex flex-col gap-3 text-white">
            {phone && (
              <a href={`tel:${phone}`} className="flex items-center gap-3 hover:underline">
                <span className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">📞</span>
                {phone}
              </a>
            )}
            {contactEmail && (
              <a href={`mailto:${contactEmail}`} className="flex items-center gap-3 hover:underline">
                <span className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">✉️</span>
                {contactEmail}
              </a>
            )}
            {!phone && !contactEmail && (
              <span className="text-white/60">Add contact details</span>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}
