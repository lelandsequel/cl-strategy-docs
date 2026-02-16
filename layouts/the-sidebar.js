'use client';
// THE SIDEBAR - Fixed sidebar with scrollable main content
import { useState } from 'react';

export default function TheSidebar({ 
  businessName = 'Sidebar', 
  tagline = 'Navigation first',
  services = [],
  phone,
  contactEmail 
}) {
  const [activeSection, setActiveSection] = useState('home');

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'work', label: 'Work' },
    { id: 'contact', label: 'Contact' }
  ];

  const items = services.length > 0 ? services : [
    { title: 'Strategy Consulting', desc: 'Strategic planning and execution' },
    { title: 'Brand Development', desc: 'Building memorable brands' },
    { title: 'Digital Products', desc: 'Web and mobile applications' },
    { title: 'Marketing', desc: 'Growth and acquisition' }
  ];

  return (
    <div className="min-h-screen flex">
      {/* Fixed sidebar */}
      <aside className="w-72 bg-neutral-900 text-white fixed h-screen flex flex-col">
        {/* Logo */}
        <div className="p-8 border-b border-neutral-800">
          <h1 className="text-2xl font-bold">{businessName}</h1>
          <p className="text-neutral-500 text-sm mt-1">{tagline}</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-6">
          <ul className="space-y-2">
            {sections.map(section => (
              <li key={section.id}>
                <button
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                    activeSection === section.id
                      ? 'bg-white text-neutral-900 font-semibold'
                      : 'text-neutral-400 hover:bg-neutral-800 hover:text-white'
                  }`}
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact info */}
        <div className="p-6 border-t border-neutral-800">
          <a href={`tel:${phone}`} className="block text-neutral-400 hover:text-white text-sm mb-2">
            {phone}
          </a>
          <a href={`mailto:${contactEmail}`} className="block text-neutral-400 hover:text-white text-sm">
            {contactEmail}
          </a>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 ml-72">
        {/* Hero */}
        <section className="min-h-[60vh] flex items-center justify-center p-12 bg-neutral-100">
          <div className="max-w-xl text-center">
            <h2 className="text-5xl font-bold text-neutral-900 mb-6">
              {activeSection === 'home' ? businessName : sections.find(s => s.id === activeSection)?.label}
            </h2>
            <p className="text-lg text-neutral-600">
              {activeSection === 'home' 
                ? 'We create meaningful experiences that connect brands with their audiences.'
                : 'Explore this section to learn more about what we do and how we can help you.'
              }
            </p>
          </div>
        </section>

        {/* Services grid when on services */}
        {activeSection === 'services' && (
          <section className="p-12 bg-white">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
              {items.map((item, i) => (
                <div key={i} className="p-8 bg-neutral-50">
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-neutral-600">{item.description || item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Contact section */}
        {activeSection === 'contact' && (
          <section className="p-12 bg-neutral-900 text-white">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold mb-8">Get in touch</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-neutral-400 text-sm">Phone</p>
                  <a href={`tel:${phone}`} className="text-2xl hover:underline">{phone}</a>
                </div>
                <div>
                  <p className="text-neutral-400 text-sm">Email</p>
                  <a href={`mailto:${contactEmail}`} className="text-2xl hover:underline">{contactEmail}</a>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
