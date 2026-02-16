"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function TheHorizontal({ 
  businessName = "Business", 
  tagline = "Your tagline here", 
  services = [], 
  phone = "", 
  contactEmail = "" 
}) {
  const containerRef = useRef(null);
  const { scrollXProgress } = useScroll({ container: containerRef });
  
  const sections = [
    { id: "hero", type: "hero" },
    { id: "about", type: "content", title: "Who We Are" },
    { id: "services", type: "services" },
    { id: "stats", type: "stats" },
    { id: "contact", type: "contact" },
  ];

  return (
    <div className="h-screen overflow-x-auto overflow-y-hidden" ref={containerRef}>
      <div className="flex w-[500vw] h-screen">
        {/* Hero Section */}
        <section className="w-screen h-screen flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white/50 rounded-full"
                animate={{
                  x: [0, Math.random() * 100],
                  y: [0, Math.random() * 100],
                }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>
          <div className="text-center text-white px-8 z-10">
            <motion.h1 
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl font-black mb-6"
            >
              {businessName}
            </motion.h1>
            <motion.p 
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-2xl text-purple-200"
            >
              {tagline}
            </motion.p>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex gap-4 justify-center"
            >
              <span className="text-sm text-purple-300 animate-pulse">→ Scroll right</span>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section className="w-screen h-screen flex-shrink-0 flex items-center justify-center bg-emerald-900 relative">
          <div className="max-w-3xl px-12 text-white">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-emerald-400 font-mono text-sm"
            >
              Section 02
            </motion.span>
            <motion.h2 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="text-6xl font-bold mt-4 mb-8"
            >
              {sections[1].title}
            </motion.h2>
            <motion.p 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl leading-relaxed text-emerald-100"
            >
              We believe in the power of innovation and dedication. Our team works tirelessly 
              to deliver exceptional results that exceed expectations. Every project is an 
              opportunity to create something extraordinary.
            </motion.p>
          </div>
          <div className="absolute right-12 top-1/2 -translate-y-1/2 w-1 h-32 bg-emerald-500/50" />
        </section>

        {/* Services Section */}
        <section className="w-screen h-screen flex-shrink-0 bg-orange-900 py-12 overflow-y-auto">
          <div className="px-12 h-full flex flex-col">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-orange-400 font-mono text-sm"
            >
              Section 03 — What We Do
            </motion.span>
            <h2 className="text-5xl font-bold text-white mt-4 mb-12">Our Services</h2>
            <div className="flex-1 grid grid-cols-3 gap-6">
              {services.length > 0 ? services.map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-orange-800/50 border border-orange-700 p-8 rounded-xl hover:bg-orange-800 transition-colors"
                >
                  <div className="text-4xl mb-4">{(i + 1).toString().padStart(2, '0')}</div>
                  <h3 className="text-2xl font-bold text-white">{service}</h3>
                </motion.div>
              )) : (
                <div className="col-span-3 flex items-center justify-center text-orange-300">
                  Add services to display them here
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-screen h-screen flex-shrink-0 flex items-center justify-center bg-slate-900">
          <div className="text-center text-white px-8">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-slate-400 font-mono text-sm"
            >
              Section 04 — By The Numbers
            </motion.span>
            <div className="flex gap-16 mt-12">
              {[
                { number: "500+", label: "Projects Completed" },
                { number: "98%", label: "Client Satisfaction" },
                { number: "15+", label: "Years Experience" },
                { number: "24/7", label: "Support Available" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.15 }}
                >
                  <div className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500">
                    {stat.number}
                  </div>
                  <div className="text-slate-400 mt-2">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="w-screen h-screen flex-shrink-0 flex items-center justify-center bg-black relative">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-purple-900 opacity-50" />
          <div className="text-center text-white px-8 relative z-10">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-purple-400 font-mono text-sm"
            >
              Section 05 — Get In Touch
            </motion.span>
            <h2 className="text-6xl font-bold mt-4 mb-8">Let's Work Together</h2>
            <div className="flex flex-col gap-4 items-center text-xl">
              {phone && (
                <motion.a 
                  href={`tel:${phone}`}
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  whileHover={{ scale: 1.1 }}
                  className="text-purple-400 hover:text-purple-300"
                >
                  📞 {phone}
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
                  ✉️ {contactEmail}
                </motion.a>
              )}
              {!phone && !contactEmail && (
                <span className="text-gray-500">Contact us today</span>
              )}
            </div>
          </div>
        </section>
      </div>

      {/* Progress Bar */}
      <div className="fixed bottom-0 left-0 right-0 h-2 bg-gray-800 z-50">
        <motion.div 
          className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          style={{ scaleX: scrollXProgress, transformOrigin: "0%" }}
        />
      </div>
    </div>
  );
}
