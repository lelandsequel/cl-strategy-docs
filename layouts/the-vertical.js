"use client";
import { motion, useScroll, useTransform } from "framer-motion";

export default function TheVertical({ 
  businessName = "Business", 
  tagline = "Your tagline here", 
  services = [], 
  phone = "", 
  contactEmail = "" 
}) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const storySections = [
    { title: "The Beginning", text: "Every great journey starts with a single step. We began with a vision to transform how businesses connect with their customers." },
    { title: "The Challenge", text: "The path wasn't easy. We faced obstacles that tested our resolve and pushed us to innovate beyond conventional boundaries." },
    { title: "The Breakthrough", text: "Through persistence and passion, we discovered our unique approach—a method that sets us apart from the rest." },
    { title: "Today", text: "Now, we bring that same dedication to every client we serve. Your success is our story." }
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-serif">
      {/* Hero */}
      <motion.header 
        style={{ y }}
        className="h-screen flex flex-col justify-center items-center px-8 text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-amber-100/50 to-transparent" />
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-bold tracking-tight mb-6 relative z-10"
        >
          {businessName}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl md:text-2xl text-stone-600 max-w-2xl relative z-10"
        >
          {tagline}
        </motion.p>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-12 animate-bounce"
        >
          ↓ Scroll to begin
        </motion.div>
      </motion.header>

      {/* Story Sections */}
      <div className="max-w-4xl mx-auto px-8 py-32">
        {storySections.map((section, i) => (
          <motion.section
            key={i}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.8 }}
            className="mb-48 border-l-4 border-amber-600 pl-8"
          >
            <span className="text-amber-600 font-mono text-sm">Chapter {i + 1}</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">{section.title}</h2>
            <p className="text-xl leading-relaxed text-stone-700">{section.text}</p>
          </motion.section>
        ))}
      </div>

      {/* Services */}
      <section className="py-32 bg-stone-900 text-stone-100">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-5xl font-bold mb-16 text-center">What We Do</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-stone-800 p-8 border-t-4 border-amber-500"
              >
                <h3 className="text-2xl font-bold mb-4">{service}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <footer className="py-32 bg-amber-700 text-white text-center">
        <h2 className="text-4xl font-bold mb-8">Let's Write Your Story Together</h2>
        <div className="flex flex-col gap-4 items-center">
          {phone && <a href={`tel:${phone}`} className="text-2xl hover:underline">{phone}</a>}
          {contactEmail && <a href={`mailto:${contactEmail}`} className="text-2xl hover:underline">{contactEmail}</a>}
        </div>
      </footer>
    </div>
  );
}
