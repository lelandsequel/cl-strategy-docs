"use client";
import { motion } from "framer-motion";

export default function TheEditorial({ 
  businessName = "Business", 
  tagline = "Your tagline here", 
  services = [], 
  phone = "", 
  contactEmail = "" 
}) {
  const articles = [
    { type: "lead", title: "The Art of Excellence", excerpt: "How we redefined industry standards and set new benchmarks for quality." },
    { type: "standard", title: "Industry Insights", excerpt: "Deep dive into the trends shaping our field and what they mean for you." },
    { type: "quote", quote: "Excellence is not a destination but a continuous journey of improvement.", author: "Our Founder" },
    { type: "standard", title: "Client Success Stories", excerpt: "Real results from real clients who trusted us with their vision." },
  ];

  return (
    <div className="min-h-screen bg-[#f5f0e6] text-[#1a1a1a] font-serif">
      {/* Masthead */}
      <header className="border-b-4 border-black py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end border-b border-gray-400 pb-4 mb-4">
            <span className="font-mono text-sm">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <span className="font-mono text-sm">Volume 1, Issue 1</span>
          </div>
          <h1 className="text-7xl md:text-9xl font-black text-center tracking-tight">
            {businessName}
          </h1>
          <p className="text-center text-xl mt-4 font-sans text-gray-600 max-w-2xl mx-auto">
            {tagline}
          </p>
          <div className="flex justify-center gap-8 mt-6 font-mono text-sm">
            {phone && <span>📞 {phone}</span>}
            {contactEmail && <span>✉️ {contactEmail}</span>}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Lead Story */}
          <div className="lg:col-span-8">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="border-b-2 border-black pb-12 mb-12"
            >
              <span className="font-mono text-xs uppercase tracking-widest text-red-700">Cover Story</span>
              <h2 className="text-5xl font-bold mt-2 mb-6 leading-tight">
                {articles[0].title}
              </h2>
              <p className="text-xl leading-relaxed text-gray-700">
                {articles[0].excerpt}
              </p>
              <div className="mt-8 h-64 bg-gradient-to-r from-gray-800 to-gray-600 rounded-sm" />
            </motion.article>

            {/* Two Column Articles */}
            <div className="grid md:grid-cols-2 gap-12">
              {articles.slice(1, 3).map((article, i) => (
                <motion.article
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="border-t-2 border-black pt-6"
                >
                  <span className="font-mono text-xs uppercase tracking-widest text-gray-500">Feature</span>
                  <h3 className="text-2xl font-bold mt-2 mb-3">{article.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{article.excerpt}</p>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-12">
            {/* Services as "Classifieds" */}
            <div className="bg-white p-6 border-2 border-black">
              <h3 className="font-mono text-sm uppercase tracking-widest border-b border-gray-300 pb-3 mb-4">
                Our Services
              </h3>
              <ul className="space-y-4">
                {services.map((service, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-black mt-2 flex-shrink-0" />
                    <span className="font-semibold">{service}</span>
                  </li>
                ))}
                {services.length === 0 && (
                  <li className="text-gray-500 italic">Contact us for services</li>
                )}
              </ul>
            </div>

            {/* Pull Quote */}
            <blockquote className="border-l-4 border-black pl-6 py-2">
              <p className="text-2xl font-bold leading-tight">
                "{articles[2].quote}"
              </p>
              <cite className="block mt-4 font-mono text-sm text-gray-600">— {articles[2].author}</cite>
            </blockquote>

            {/* Contact Card */}
            <div className="bg-black text-white p-6">
              <h3 className="font-mono text-sm uppercase tracking-widest mb-4">Contact</h3>
              <div className="space-y-3 font-mono text-sm">
                {phone && (
                  <a href={`tel:${phone}`} className="block hover:text-gray-300 transition-colors">
                    Phone: {phone}
                  </a>
                )}
                {contactEmail && (
                  <a href={`mailto:${contactEmail}`} className="block hover:text-gray-300 transition-colors">
                    Email: {contactEmail}
                  </a>
                )}
                {!phone && !contactEmail && (
                  <span className="text-gray-400">Get in touch today</span>
                )}
              </div>
            </div>
          </aside>
        </div>

        {/* Full Width Quote Banner */}
        <section className="my-24 py-16 border-y-4 border-black text-center">
          <p className="text-4xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
            "Crafting excellence, one project at a time. Your vision, our expertise."
          </p>
        </section>

        {/* More Services */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 border border-gray-300"
            >
              <span className="font-mono text-xs text-gray-400">#{i + 1}</span>
              <h4 className="text-xl font-bold mt-2">{service}</h4>
              <p className="mt-4 text-gray-600 text-sm">
                Professional {service.toLowerCase()} services delivered with precision and care.
              </p>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Footer as Index */}
      <footer className="bg-black text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="font-mono text-sm uppercase tracking-widest mb-4">Index</h3>
              <ul className="space-y-2 font-mono text-sm">
                <li>Home ..................... 1</li>
                <li>Services ................ 4</li>
                <li>About .................. 8</li>
                <li>Contact ............... 12</li>
              </ul>
            </div>
            <div className="md:col-span-2 flex flex-col justify-end items-end">
              <h2 className="text-4xl font-black">{businessName}</h2>
              <p className="font-mono text-sm mt-2">{tagline}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
