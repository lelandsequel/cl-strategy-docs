"use client";
import { motion } from "framer-motion";

export default function TheContrast({ 
  businessName = "Business", 
  tagline = "Your tagline here", 
  services = [], 
  phone = "", 
  contactEmail = "" 
}) {
  return (
    <div className="min-h-screen bg-white text-black font-mono">
      {/* Header */}
      <header className="border-b-8 border-black">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <motion.h1 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="text-6xl md:text-9xl font-black uppercase tracking-tighter"
          >
            {businessName}
          </motion.h1>
          <motion.p 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl mt-4 max-w-xl"
          >
            {tagline}
          </motion.p>
        </div>
      </header>

      {/* Bold Statement */}
      <section className="bg-black text-white py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl md:text-7xl font-black leading-tight"
          >
            WE DON'T DO
            <br />
            <span className="text-black bg-white px-4">ORDINARY.</span>
          </motion.p>
        </div>
      </section>

      {/* Services - Stark Grid */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black uppercase mb-12 border-b-4 border-black pb-4">
            SERVICES
          </h2>
          <div className="grid md:grid-cols-2 gap-0 border-4 border-black">
            {services.length > 0 ? services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className={`p-8 border-2 border-black hover:bg-black hover:text-white transition-colors cursor-pointer ${
                  i % 2 === 0 ? '' : 'bg-black text-white hover:bg-white hover:text-black'
                }`}
              >
                <span className="text-6xl font-black opacity-30">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-2xl font-black uppercase mt-4">{service}</h3>
              </motion.div>
            )) : (
              <div className="col-span-2 p-12 text-center text-gray-500">
                ADD SERVICES TO DISPLAY
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Inverted Section */}
      <section className="bg-black text-white py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-black uppercase">WHY US?</h2>
            <ul className="mt-8 space-y-4">
              {["QUALITY", "SPEED", "PRECISION", "RESULTS"].map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ x: -30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 text-xl"
                >
                  <span className="w-4 h-4 bg-white" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="aspect-square border-8 border-white flex items-center justify-center">
            <span className="text-9xl font-black">★</span>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 px-6 border-y-8 border-black">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "500+", label: "PROJECTS" },
            { number: "100%", label: "COMMITTED" },
            { number: "24/7", label: "AVAILABLE" },
            { number: "∞", label: "POTENTIAL" },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl md:text-7xl font-black">{stat.number}</div>
              <div className="text-sm mt-2 tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <footer className="bg-black text-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl md:text-8xl font-black uppercase mb-12">
            LET'S
            <br />
            <span className="bg-white text-black px-4">TALK.</span>
          </h2>
          <div className="flex flex-col md:flex-row gap-8 text-2xl">
            {phone && (
              <a href={`tel:${phone}`} className="hover:underline underline-offset-8">
                {phone}
              </a>
            )}
            {contactEmail && (
              <a href={`mailto:${contactEmail}`} className="hover:underline underline-offset-8">
                {contactEmail}
              </a>
            )}
            {!phone && !contactEmail && (
              <span className="text-gray-500">ADD CONTACT INFO</span>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}
