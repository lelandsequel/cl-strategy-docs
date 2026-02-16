"use client";
import { useState } from "react";

export default function TheCity({ 
  businessName = "Business", 
  tagline = "Your tagline here", 
  services = [], 
  phone = "", 
  contactEmail = "" 
}) {
  const [selectedCity, setSelectedCity] = useState("");

  const cities = [
    { name: "New York", slug: "new-york", neighborhoods: ["Manhattan", "Brooklyn", "Queens", "Bronx", "Staten Island"] },
    { name: "Los Angeles", slug: "los-angeles", neighborhoods: ["Hollywood", "Santa Monica", "Beverly Hills", "Downtown", "Pasadena"] },
    { name: "Chicago", slug: "chicago", neighborhoods: ["Loop", "Wicker Park", "Lincoln Park", "Hyde Park", "River North"] },
    { name: "Houston", slug: "houston", neighborhoods: ["Downtown", "Galleria", "Midtown", "Heights", "Memorial"] },
    { name: "Phoenix", slug: "phoenix", neighborhoods: ["Scottsdale", "Tempe", "Mesa", "Chandler", "Old Town"] },
    { name: "Philadelphia", slug: "philadelphia", neighborhoods: ["Center City", "Fishtown", "Manayunk", "University City", "South Street"] },
    { name: "San Antonio", slug: "san-antonio", neighborhoods: ["River Walk", "Downtown", "Alamo Heights", "Pearl District", "Southtown"] },
    { name: "San Diego", slug: "san-diego", neighborhoods: ["Gaslamp", "La Jolla", "North Park", "Hillcrest", "Coronado"] },
  ];

  const currentCity = cities.find(c => c.slug === selectedCity) || cities[0];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* City Selector */}
      <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-slate-900 py-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-3">
            {cities.map(city => (
              <button
                key={city.slug}
                onClick={() => setSelectedCity(city.slug)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCity === city.slug || (!selectedCity && city.slug === "new-york")
                    ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
                    : "bg-white/10 hover:bg-white/20"
                }`}
              >
                {city.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Hero with City Context */}
      <div className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1920')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <p className="text-blue-400 font-mono text-sm mb-4">📍 Serving {currentCity.name} and surrounding areas</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            {businessName} <span className="text-blue-400">{currentCity.name}</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mb-8">
            {tagline}
          </p>
          <div className="flex flex-wrap gap-4">
            {phone && (
              <a href={`tel:${phone}`} className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors">
                📞 {phone}
              </a>
            )}
            {contactEmail && (
              <a href={`mailto:${contactEmail}`} className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-lg font-semibold transition-colors">
                ✉️ Get Free Quote
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Local Neighborhoods */}
      <div className="bg-slate-800 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            Serving All of {currentCity.name}
          </h2>
          <div className="flex flex-wrap gap-3">
            {currentCity.neighborhoods.map(neighborhood => (
              <span key={neighborhood} className="px-4 py-2 bg-slate-700 rounded-lg text-sm">
                {neighborhood}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Our Services in {currentCity.name}</h2>
          <p className="text-slate-400 mb-12 max-w-2xl">
            Professional {businessName.toLowerCase()} services tailored to the {currentCity.name} market
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.length > 0 ? services.map((service, i) => (
              <div key={i} className="bg-slate-800/50 border border-slate-700 p-6 rounded-xl hover:border-blue-500/50 transition-colors group">
                <div className="w-12 h-12 bg-blue-900/50 rounded-lg flex items-center justify-center mb-4 text-2xl">
                  {(i + 1).toString().padStart(2, '0')}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{service}</h3>
                <p className="text-slate-400 text-sm">Professional {service.toLowerCase()} services available in {currentCity.name} and nearby areas.</p>
              </div>
            )) : (
              <div className="col-span-full text-center py-12 text-slate-500">
                <p>Contact us for custom solutions in {currentCity.name}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* SEO Content Section */}
      <div className="bg-slate-800 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Best {businessName} in {currentCity.name}</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-slate-300 leading-relaxed">
              Looking for top-quality {businessName.toLowerCase()} services in {currentCity.name}? 
              We proudly serve the entire {currentCity.name} metropolitan area, including {currentCity.neighborhoods.slice(0, 3).join(", ")}, 
              and surrounding communities. Our local expertise means we understand the unique needs of {currentCity.name} residents and businesses.
            </p>
            <p className="text-slate-300 leading-relaxed mt-4">
              Whether you're in downtown {currentCity.name} or the suburbs, our team is ready to deliver 
              exceptional results. Contact us today for a free consultation tailored to your {currentCity.name} location.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-xl font-bold">{businessName}</h3>
            <p className="text-slate-400">{currentCity.name}'s Premier Choice</p>
          </div>
          <div className="flex gap-6">
            {phone && <a href={`tel:${phone}`} className="text-slate-400 hover:text-white transition-colors">{phone}</a>}
            {contactEmail && <a href={`mailto:${contactEmail}`} className="text-slate-400 hover:text-white transition-colors">{contactEmail}</a>}
          </div>
        </div>
      </footer>
    </div>
  );
}
