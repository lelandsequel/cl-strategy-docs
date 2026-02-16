"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function TheParallax({ 
  businessName = "Business", 
  tagline = "Your tagline here", 
  services = [], 
  phone = "", 
  contactEmail = "" 
}) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.5, 1]);

  return (
    <div ref={containerRef} className="min-h-[300vh] bg-slate-950">
      {/* Hero Section with Parallax */}
      <div className="h-screen sticky top-0 overflow-hidden">
        <motion.div style={{ y: y1 }} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/50 to-slate-950" />
          <div className="absolute top-20 left-10 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl" />
        </motion.div>
        
        <motion.div style={{ y: y2, rotate, scale }} className="absolute top-40 right-20">
          <div className="w-32 h-32 border border-indigo-500/30 rotate-45" />
        </motion.div>

        <motion.div style={{ y: y3 }} className="absolute bottom-40 left-1/4">
          <div className="w-20 h-20 bg-purple-500/20 rounded-full blur-2xl" />
        </motion.div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-black text-white text-center"
          >
            {businessName}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-indigo-300 mt-6 text-center"
          >
            {tagline}
          </motion.p>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="absolute bottom-12 text-white/50 text-sm animate-bounce"
          >
            ↓ Scroll to explore
          </motion.div>
        </div>
      </div>

      {/* Services Section with Parallax */}
      <div className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            style={{ y: y4 }}
            className="text-5xl font-bold text-white mb-16 text-center"
          >
            Our Services
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.length > 0 ? services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-900/80 backdrop-blur p-8 rounded-2xl border border-slate-800 hover:border-indigo-500/50 transition-colors"
              >
                <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-4 text-xl">
                  {String.fromCharCode(97 + i)}
                </div>
                <h3 className="text-xl font-bold text-white">{service}</h3>
                <p className="text-slate-400 mt-2">
                  Professional {service.toLowerCase()} services tailored to your needs.
                </p>
              </motion.div>
            )) : (
              <div className="col-span-3 text-center py-12 text-slate-500">
                Add services to display
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative py-32 px-6 bg-gradient-to-b from-slate-950 to-indigo-950/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Projects" },
              { number: "98%", label: "Satisfaction" },
              { number: "15+", label: "Years" },
              { number: "24/7", label: "Support" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-black text-white">{stat.number}</div>
                <div className="text-indigo-400 mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="relative py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Let's Work Together</h2>
          <p className="text-slate-400 mb-8">
            Get in touch to start your next project
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            {phone && (
              <a 
                href={`tel:${phone}`}
                className="px-8 py-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
              >
                {phone}
              </a>
            )}
            {contactEmail && (
              <a 
                href={`mailto:${contactEmail}`}
                className="px-8 py-4 border-2 border-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-500 transition-colors"
              >
                {contactEmail}
              </a>
            )}
            {!phone && !contactEmail && (
              <span className="text-slate-500">Add contact details</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
