"use client";
import { motion } from "framer-motion";

export default function TheList({ 
  businessName = "Business", 
  tagline = "Your tagline here", 
  services = [], 
  phone = "", 
  contactEmail = "" 
}) {
  const listItems = [
    { label: "Founded", value: "2010" },
    { label: "Headquarters", value: "United States" },
    { label: "Team Size", value: "50+ Professionals" },
    { label: "Clients Served", value: "500+" },
  ];

  const features = [
    "Premium quality guaranteed",
    "24/7 customer support",
    "Free consultations",
    "Satisfaction guaranteed",
    "Licensed & insured",
    "Fast turnaround times",
  ];

  return (
    <div className="min-h-screen bg-neutral-100">
      {/* Header as List Header */}
      <header className="bg-neutral-900 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-mono text-xs text-neutral-500 border-b border-neutral-700 pb-2 mb-8 flex justify-between"
          >
            <span>LIST VIEW</span>
            <span>01/12</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            {businessName}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-neutral-400"
          >
            {tagline}
          </motion.p>
        </div>
      </header>

      {/* Main List */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Quick Stats List */}
        <section className="mb-16">
          <h2 className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-6">
            → Company Overview
          </h2>
          <ul className="space-y-0">
            {listItems.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex justify-between items-center py-4 border-b border-neutral-300 hover:bg-neutral-200 transition-colors px-4 -mx-4 rounded-lg cursor-default"
              >
                <span className="font-medium text-neutral-600">{item.label}</span>
                <span className="font-bold text-neutral-900">{item.value}</span>
              </motion.li>
            ))}
          </ul>
        </section>

        {/* Services List */}
        <section className="mb-16">
          <h2 className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-6">
            → Our Services
          </h2>
          <ul className="space-y-0">
            {services.length > 0 ? services.map((service, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex justify-between items-center py-6 border-b border-neutral-300 hover:bg-neutral-800 hover:text-white transition-colors px-4 -mx-4 rounded-lg cursor-pointer group"
              >
                <span className="flex items-center gap-4">
                  <span className="w-8 h-8 bg-neutral-300 text-neutral-900 font-mono text-sm flex items-center justify-center rounded group-hover:bg-white group-hover:text-neutral-900">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-lg font-medium">{service}</span>
                </span>
                <span className="text-neutral-400 group-hover:text-white">→</span>
              </motion.li>
            )) : (
              <li className="py-6 text-neutral-500 italic">Add services to display</li>
            )}
          </ul>
        </section>

        {/* Features List */}
        <section className="mb-16">
          <h2 className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-6">
            → Why Choose Us
          </h2>
          <ul className="space-y-0">
            {features.map((feature, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.05 }}
                className="flex items-center gap-4 py-3 px-4 -mx-4 hover:bg-neutral-200 transition-colors rounded-lg"
              >
                <span className="w-5 h-5 bg-green-500 text-white rounded-full flex items-center justify-center text-xs">✓</span>
                <span className="text-neutral-700">{feature}</span>
              </motion.li>
            ))}
          </ul>
        </section>

        {/* Contact List */}
        <section>
          <h2 className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-6">
            → Contact Information
          </h2>
          <ul className="space-y-0 bg-neutral-900 rounded-lg overflow-hidden">
            {phone && (
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex justify-between items-center py-5 px-6 text-white hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                <span className="flex items-center gap-4">
                  <span className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">📞</span>
                  <span>Phone</span>
                </span>
                <span className="font-mono">{phone}</span>
              </motion.li>
            )}
            {contactEmail && (
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="flex justify-between items-center py-5 px-6 text-white hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                <span className="flex items-center gap-4">
                  <span className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center">✉️</span>
                  <span>Email</span>
                </span>
                <span className="font-mono text-sm">{contactEmail}</span>
              </motion.li>
            )}
            {!phone && !contactEmail && (
              <li className="py-5 px-6 text-neutral-500 italic">Add contact details</li>
            )}
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex justify-center items-center py-5 px-6 bg-neutral-800 text-white"
            >
              <a href={contactEmail ? `mailto:${contactEmail}` : '#'} className="text-center w-full font-bold hover:underline">
                Get In Touch →
              </a>
            </motion.li>
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-neutral-900 text-neutral-500 py-8 px-6">
        <div className="max-w-4xl mx-auto font-mono text-xs flex justify-between">
          <span>© 2024 {businessName}</span>
          <span>END OF LIST</span>
        </div>
      </footer>
    </div>
  );
}
