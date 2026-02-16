"use client";
import { motion } from "framer-motion";

export default function TheStrip({ 
  businessName = "Business", 
  tagline = "Your tagline here", 
  services = [], 
  phone = "", 
  contactEmail = "" 
}) {
  const strips = [
    { color: "bg-red-600", text: "Quality First", textColor: "text-white" },
    { color: "bg-orange-500", text: "Customer Focused", textColor: "text-white" },
    { color: "bg-amber-500", text: "Innovation Driven", textColor: "text-white" },
    { color: "bg-yellow-500", text: "Results Oriented", textColor: "text-black" },
    { color: "bg-lime-500", text: "Sustainable Practices", textColor: "text-black" },
    { color: "bg-green-500", text: "Industry Leaders", textWhite: true, textColor: "text-white" },
    { color: "bg-teal-500", text: "Proven Track Record", textColor: "text-white" },
    { color: "bg-cyan-500", text: "Expert Team", textColor: "text-black" },
    { color: "bg-blue-500", text: "Award Winning", textColor: "text-white" },
    { color: "bg-indigo-600", text: "24/7 Support", textColor: "text-white" },
    { color: "bg-violet-600", text: "Your Success", textColor: "text-white" },
    { color: "bg-purple-600", text: "Our Mission", textColor: "text-white" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <header className="min-h-[60vh] flex flex-col justify-center items-center px-6 py-24 bg-neutral-900">
        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-6xl md:text-8xl font-black text-white text-center"
        >
          {businessName}
        </motion.h1>
        <motion.p 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-neutral-400 mt-6 text-center max-w-2xl"
        >
          {tagline}
        </motion.p>
      </header>

      {/* Horizontal Strips */}
      <main>
        {strips.map((strip, i) => (
          <motion.div
            key={i}
            initial={{ x: i % 2 === 0 ? -100 : 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.6, type: "spring" }}
            className={`${strip.color} py-16 md:py-24 px-6 flex items-center justify-center`}
          >
            <h2 className={`text-4xl md:text-6xl font-bold ${strip.textColor} tracking-wider`}>
              {strip.text}
            </h2>
          </motion.div>
        ))}
      </main>

      {/* Services Strip */}
      <section className="bg-neutral-900 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-white mb-12 text-center"
          >
            Our Services
          </motion.h2>
          
          <div className="space-y-3">
            {services.length > 0 ? services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 p-6 bg-neutral-800 hover:bg-neutral-700 transition-colors rounded-lg group"
              >
                <span className="w-12 h-12 bg-white text-neutral-900 font-bold flex items-center justify-center rounded-full group-hover:scale-110 transition-transform">
                  {i + 1}
                </span>
                <span className="flex-1 text-xl text-white font-medium">{service}</span>
                <span className="text-neutral-500 group-hover:text-white transition-colors">→</span>
              </motion.div>
            )) : (
              <div className="text-center py-12 text-neutral-500">
                Add services to display
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Strip */}
      <footer className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-neutral-900 mb-8">Get In Touch</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            {phone && (
              <a 
                href={`tel:${phone}`}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-neutral-900 text-white font-semibold rounded-lg hover:bg-neutral-800 transition-colors"
              >
                📞 {phone}
              </a>
            )}
            {contactEmail && (
              <a 
                href={`mailto:${contactEmail}`}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-neutral-900 text-neutral-900 font-semibold rounded-lg hover:bg-neutral-900 hover:text-white transition-colors"
              >
                ✉️ {contactEmail}
              </a>
            )}
          </div>
          {!phone && !contactEmail && (
            <p className="text-neutral-500">Add contact details</p>
          )}
        </div>
      </footer>
    </div>
  );
}
