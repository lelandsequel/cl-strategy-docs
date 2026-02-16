"use client";
import { motion } from "framer-motion";

export default function TheCanvas({ 
  businessName = "Business", 
  tagline = "Your tagline here", 
  services = [], 
  phone = "", 
  contactEmail = "" 
}) {
  const artworks = [
    { title: "Vision", subtitle: "Seeing beyond", color: "from-rose-500 to-red-700" },
    { title: "Craft", subtitle: "Mastery in detail", color: "from-amber-500 to-orange-700" },
    { title: "Soul", subtitle: "Heart of creation", color: "from-emerald-500 to-green-700" },
    { title: "Flow", subtitle: "Seamless execution", color: "from-cyan-500 to-blue-700" },
    { title: "Light", subtitle: "Illuminating paths", color: "from-violet-500 to-purple-700" },
    { title: "Form", subtitle: "Shaping ideas", color: "from-pink-500 to-rose-700" },
  ];

  return (
    <div className="min-h-screen bg-neutral-950">
      {/* Canvas Header */}
      <header className="h-[40vh] flex flex-col items-center justify-center px-6 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/50 to-neutral-950" />
          <motion.div 
            animate={{ 
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
            className="absolute inset-0 bg-gradient-to-br from-rose-900/20 via-neutral-900 to-violet-900/20 bg-[length:200%_200%]"
          />
        </div>
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-5xl md:text-8xl font-bold text-white relative z-10 text-center"
        >
          {businessName}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-neutral-400 mt-4 relative z-10"
        >
          {tagline}
        </motion.p>
      </header>

      {/* Art Gallery */}
      <main className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-3 gap-8">
          {artworks.map((art, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className={`aspect-[4/5] rounded-sm overflow-hidden mb-4 bg-gradient-to-br ${art.color}`}>
                <div className="w-full h-full bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <span className="text-6xl opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-110">
                    {['👁', '✋', '❤️', '💫', '💡', '◯'][i]}
                  </span>
                </div>
              </div>
              <h3 className="text-white text-xl font-bold">{art.title}</h3>
              <p className="text-neutral-500 text-sm">{art.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Services Gallery */}
      <section className="py-24 px-6 bg-neutral-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
            <span className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center">▣</span>
            Collection
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            {services.length > 0 ? services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="aspect-square bg-neutral-800 rounded-sm flex flex-col items-center justify-center p-6 text-center hover:bg-neutral-700 transition-colors group"
              >
                <div className="w-16 h-16 mb-4 border-2 border-neutral-600 group-hover:border-white transition-colors flex items-center justify-center">
                  <span className="text-2xl font-bold text-neutral-400 group-hover:text-white">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-white font-medium">{service}</h3>
              </motion.div>
            )) : (
              <div className="col-span-4 text-center py-12 text-neutral-500">
                Add services to display
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact */}
      <footer className="py-24 px-6 bg-neutral-950 border-t border-neutral-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Acquisition</h2>
          <p className="text-neutral-400 mb-8">
            Ready to start your project? We'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            {phone && (
              <a href={`tel:${phone}`} className="text-white hover:underline">
                {phone}
              </a>
            )}
            {contactEmail && (
              <a href={`mailto:${contactEmail}`} className="text-white hover:underline">
                {contactEmail}
              </a>
            )}
            {!phone && !contactEmail && (
              <span className="text-neutral-500">Add contact details</span>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}
