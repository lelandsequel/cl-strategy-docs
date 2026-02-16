"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TheArchive({ 
  businessName = "Business", 
  tagline = "Your tagline here", 
  services = [], 
  phone = "", 
  contactEmail = "" 
}) {
  const [openDrawer, setOpenDrawer] = useState(null);

  const drawers = [
    { 
      id: "about", 
      label: "About Us", 
      content: "We are a company built on values, driven by innovation, and committed to excellence. Our journey began with a simple idea: to make things better.",
      year: "2010"
    },
    { 
      id: "mission", 
      label: "Our Mission", 
      content: "To deliver exceptional results while maintaining the highest standards of professionalism and integrity in everything we do.",
      year: "2010"
    },
    { 
      id: "vision", 
      label: "Our Vision", 
      content: "To be the leading provider in our industry, known for innovation, quality, and unwavering commitment to our clients.",
      year: "2015"
    },
    { 
      id: "values", 
      label: "Core Values", 
      content: "Integrity, Innovation, Excellence, Collaboration, and Customer Focus guide every decision we make.",
      year: "2010"
    },
    { 
      id: "team", 
      label: "Our Team", 
      content: "A diverse group of talented professionals united by a shared passion for excellence and innovation.",
      year: "2012"
    },
    { 
      id: "process", 
      label: "Our Process", 
      content: "From discovery to delivery, we follow a systematic approach ensuring consistency and quality at every step.",
      year: "2018"
    },
  ];

  return (
    <div className="min-h-screen bg-amber-50 text-amber-950">
      {/* Header */}
      <header className="bg-amber-900 text-amber-50 py-12 px-6 border-b-4 border-amber-700">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <span className="px-3 py-1 bg-amber-800 text-amber-200 text-xs font-mono rounded">ARCHIVE</span>
            <span className="font-mono text-amber-300 text-xs">EST. 2010</span>
          </div>
          <h1 className="text-5xl font-bold">{businessName}</h1>
          <p className="text-amber-200 mt-2">{tagline}</p>
        </div>
      </header>

      {/* File Cabinet Drawers */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <p className="font-mono text-xs text-amber-600 mb-8 uppercase tracking-widest">
          ↓ Pull to open drawers
        </p>
        
        <div className="space-y-2">
          {drawers.map((drawer) => (
            <div key={drawer.id} className="border-2 border-amber-900 bg-amber-100 rounded-sm overflow-hidden">
              {/* Drawer Handle */}
              <button
                onClick={() => setOpenDrawer(openDrawer === drawer.id ? null : drawer.id)}
                className="w-full flex items-center justify-between px-6 py-4 bg-amber-200 hover:bg-amber-300 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <span className="w-10 h-10 bg-amber-900 text-amber-100 flex items-center justify-center font-mono text-sm rounded">
                    {drawers.indexOf(drawer) + 1}
                  </span>
                  <span className="font-bold text-lg">{drawer.label}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-mono text-sm text-amber-700">{drawer.year}</span>
                  <motion.span 
                    animate={{ rotate: openDrawer === drawer.id ? 180 : 0 }}
                    className="text-amber-900"
                  >
                    ▼
                  </motion.span>
                </div>
              </button>
              
              {/* Drawer Content */}
              <AnimatePresence>
                {openDrawer === drawer.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 py-8 bg-amber-50 border-t-2 border-amber-200">
                      <p className="text-lg leading-relaxed text-amber-800">
                        {drawer.content}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Services as Index Cards */}
        <section className="mt-16">
          <h2 className="font-mono text-xs text-amber-600 uppercase tracking-widest mb-8">
            → Services Index
          </h2>
          <div className="grid gap-4">
            {services.length > 0 ? services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 p-4 bg-amber-200 border border-amber-300 hover:bg-amber-300 transition-colors cursor-pointer"
              >
                <span className="w-8 h-8 bg-amber-900 text-amber-100 flex items-center justify-center font-mono text-xs rounded">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-medium flex-1">{service}</span>
                <span className="text-amber-600">→</span>
              </motion.div>
            )) : (
              <div className="text-amber-600 italic p-4">Add services to display</div>
            )}
          </div>
        </section>

        {/* Contact Card */}
        <section className="mt-16 p-8 bg-amber-900 text-amber-100 rounded-sm">
          <h2 className="font-mono text-xs text-amber-400 uppercase tracking-widest mb-6">
            → Contact File
          </h2>
          <div className="space-y-4">
            {phone && (
              <div className="flex items-center gap-4">
                <span className="w-8 h-8 bg-amber-800 flex items-center justify-center rounded">📞</span>
                <a href={`tel:${phone}`} className="hover:underline">{phone}</a>
              </div>
            )}
            {contactEmail && (
              <div className="flex items-center gap-4">
                <span className="w-8 h-8 bg-amber-800 flex items-center justify-center rounded">✉️</span>
                <a href={`mailto:${contactEmail}`} className="hover:underline">{contactEmail}</a>
              </div>
            )}
            {!phone && !contactEmail && (
              <p className="text-amber-400 italic">Contact information pending</p>
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-amber-900 text-amber-200 py-8 px-6">
        <div className="max-w-4xl mx-auto flex justify-between items-center font-mono text-xs">
          <span>ARCHIVE REF: {businessName.toUpperCase().replace(/\s/g, '-')}-001</span>
          <span>END OF FILE</span>
        </div>
      </footer>
    </div>
  );
}
