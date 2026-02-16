"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function TheReveal({ 
  businessName = "Business", 
  tagline = "Your tagline here", 
  services = [], 
  phone = "", 
  contactEmail = "" 
}) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const revealItems = [
    { title: "Discover", text: "Uncover possibilities you never imagined", icon: "🔍" },
    { title: "Design", text: "Crafting solutions with precision care", icon: "🎨" },
    { title: "Develop", text: "Building excellence through innovation", icon: "⚡" },
    { title: "Deliver", text: "Results that exceed expectations", icon: "🚀" },
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-zinc-950 text-white overflow-hidden">
      {/* Hero with Reveal */}
      <motion.header style={{ y, opacity }} className="h-screen flex flex-col items-center justify-center px-6 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-violet-900/30 to-transparent" />
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
              transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
        
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, type: "spring" }}
          className="text-center relative z-10"
        >
          <motion.span 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-violet-400 font-mono text-sm tracking-[0.3em]"
          >
            INTRODUCING
          </motion.span>
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-6xl md:text-9xl font-black mt-4 bg-gradient-to-r from-white via-violet-200 to-white bg-clip-text text-transparent"
          >
            {businessName}
          </motion.h1>
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl text-zinc-400 mt-6"
          >
            {tagline}
          </motion.p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-12"
        >
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-zinc-500 text-sm"
          >
            ↓ Scroll to reveal
          </motion.div>
        </motion.div>
      </motion.header>

      {/* Reveal Process */}
      <section className="py-32 px-6 relative">
        <div className="max-w-6xl mx-auto">
          {revealItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.8, type: "spring" }}
              className={`flex items-center gap-12 mb-24 ${i % 2 === 1 ? 'flex-row-reverse' : ''}`}
            >
              <div className="flex-1">
                <div className="text-8xl mb-6">{item.icon}</div>
              </div>
              <div className="flex-1">
                <span className="text-violet-500 font-mono text-sm">Step {i + 1}</span>
                <h3 className="text-5xl font-bold mt-2 mb-4">{item.title}</h3>
                <p className="text-xl text-zinc-400">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Reveal */}
      <section className="py-32 px-6 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold mb-16 text-center"
          >
            What We Offer
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {services.length > 0 ? services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 100, rotate: Math.random() * 10 - 5 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring" }}
                whileHover={{ scale: 1.05, rotate: 0 }}
                className="bg-zinc-800 p-8 rounded-2xl border border-zinc-700 hover:border-violet-500 transition-colors cursor-pointer"
              >
                <div className="w-12 h-12 bg-violet-600 rounded-xl flex items-center justify-center text-2xl mb-4">
                  {String.fromCharCode(97 + i)}
                </div>
                <h3 className="text-xl font-bold">{service}</h3>
              </motion.div>
            )) : (
              <div className="col-span-3 text-center py-12 text-zinc-500">
                Add services to display
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Final Reveal */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="h-screen flex items-center justify-center px-6 bg-gradient-to-b from-zinc-900 to-violet-950"
      >
        <div className="text-center">
          <motion.h2 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-8"
          >
            Ready to Begin?
          </motion.h2>
          <div className="flex flex-col gap-4 items-center text-xl">
            {phone && (
              <motion.a 
                href={`tel:${phone}`}
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                className="text-violet-400 hover:text-violet-300"
              >
                {phone}
              </motion.a>
            )}
            {contactEmail && (
              <motion.a 
                href={`mailto:${contactEmail}`}
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                className="text-pink-400 hover:text-pink-300"
              >
                {contactEmail}
              </motion.a>
            )}
          </div>
        </div>
      </motion.section>
    </div>
  );
}
