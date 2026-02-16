'use client';
// THE ACCORDION - Expandable FAQ sections
import { useState } from 'react';

export default function TheAccordion({ 
  businessName = 'Company', 
  tagline = 'Answers to your questions',
  services = [],
  phone,
  contactEmail 
}) {
  const [openIndex, setOpenIndex] = useState(0);
  
  const faqs = [
    { q: 'What services do you offer?', a: 'We provide comprehensive solutions tailored to your needs, from initial consultation to final delivery.' },
    { q: 'How long does a project take?', a: 'Timeline varies based on scope. Most projects range from 2-8 weeks with regular milestones.' },
    { q: 'What is your pricing structure?', a: 'We offer flexible pricing: hourly rates, fixed project fees, and retainer options available.' },
    { q: 'Do you work with startups?', a: 'Absolutely! We love working with emerging brands and offer scaled packages for early-stage companies.' },
    { q: 'How do we get started?', a: 'Simply reach out via email or phone. We\'ll schedule a free 30-minute discovery call.' }
  ];

  const items = services.length > 0 ? services : [
    { title: 'Consulting', description: 'Expert guidance for your business' },
    { title: 'Implementation', description: 'Execution with precision' },
    { title: 'Support', description: 'Ongoing assistance when you need it' }
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="bg-neutral-900 text-white py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">{businessName}</h1>
          <p className="text-xl opacity-70">{tagline}</p>
        </div>
      </header>

      {/* Accordion sections */}
      <main className="max-w-3xl mx-auto px-6 py-16">
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-neutral-200 bg-white">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-neutral-50 transition-colors"
                >
                  <span className="font-semibold text-lg">{faq.q}</span>
                  <span className={`text-2xl transition-transform duration-300 ${openIndex === i ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <p className="px-6 pb-5 text-neutral-600">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services as accordions too */}
        <section>
          <h2 className="text-2xl font-bold mb-8">Our Services</h2>
          <div className="space-y-2">
            {items.map((item, i) => (
              <div key={i} className="border border-neutral-200 bg-white">
                <button
                  onClick={() => setOpenIndex(openIndex === 100 + i ? -1 : 100 + i)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-neutral-50 transition-colors"
                >
                  <span className="font-semibold text-lg">{item.title}</span>
                  <span className={`text-2xl transition-transform duration-300 ${openIndex === 100 + i ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${
                  openIndex === 100 + i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <p className="px-6 pb-5 text-neutral-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="mt-16 bg-neutral-900 text-white p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
          <p className="opacity-70 mb-6">We're here to help</p>
          <a href={`tel:${phone}`} className="inline-block border-2 border-white px-8 py-3 hover:bg-white hover:text-neutral-900 transition-colors">
            {phone}
          </a>
        </section>
      </main>

      <footer className="px-6 py-8 text-center text-neutral-400 text-sm">
        © 2024 {businessName}
      </footer>
    </div>
  );
}
