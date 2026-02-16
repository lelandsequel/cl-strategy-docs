'use client';

import { useState } from 'react';

export default function TheShelf() {
  const [selected, setSelected] = useState(null);

  const products = [
    { 
      id: 1, 
      name: 'Minimal Chair', 
      price: '$299', 
      category: 'Furniture',
      color: 'from-stone-400 to-stone-600',
      tag: 'Best Seller'
    },
    { 
      id: 2, 
      name: 'Analog Watch', 
      price: '$449', 
      category: 'Accessories',
      color: 'from-zinc-700 to-zinc-900',
      tag: 'New'
    },
    { 
      id: 3, 
      name: 'Leather Bag', 
      price: '$389', 
      category: 'Accessories',
      color: 'from-amber-700 to-amber-900',
      tag: null
    },
    { 
      id: 4, 
      name: 'Desk Lamp', 
      price: '$179', 
      category: 'Lighting',
      color: 'from-neutral-300 to-neutral-500',
      tag: 'Sale'
    },
    { 
      id: 5, 
      name: 'Ceramic Vase', 
      price: '$89', 
      category: 'Decor',
      color: 'from-rose-300 to-rose-500',
      tag: null
    },
    { 
      id: 6, 
      name: 'Wireless Speaker', 
      price: '$249', 
      category: 'Electronics',
      color: 'from-slate-600 to-slate-800',
      tag: 'New'
    },
  ];

  return (
    <div className="min-h-screen bg-stone-100">
      {/* Header */}
      <header className="bg-white py-12 px-8 border-b border-stone-200">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-[0.4em] text-stone-400 uppercase mb-2">Curated Collection</p>
          <h1 className="text-4xl font-serif text-stone-900">The Shelf</h1>
        </div>
      </header>

      {/* Products Grid */}
      <main className="max-w-6xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {products.map((product) => (
            <div 
              key={product.id}
              className="group cursor-pointer"
              onClick={() => setSelected(product)}
            >
              {/* Product Card */}
              <div className="relative bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-500">
                {/* Shelf Line */}
                <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-r from-stone-300 via-stone-400 to-stone-300" />
                
                {/* Tag */}
                {product.tag && (
                  <span className={`absolute top-4 left-4 px-3 py-1 text-xs font-bold uppercase tracking-wider ${
                    product.tag === 'Sale' ? 'bg-red-500 text-white' :
                    product.tag === 'New' ? 'bg-green-500 text-white' :
                    'bg-amber-500 text-white'
                  }`}>
                    {product.tag}
                  </span>
                )}

                {/* Product Image Placeholder */}
                <div className={`h-64 bg-gradient-to-br ${product.color} mb-6 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/20 text-8xl">◐</span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="text-center">
                  <p className="text-xs text-stone-400 uppercase tracking-wider mb-2">{product.category}</p>
                  <h3 className="text-xl font-serif text-stone-900 mb-2">{product.name}</h3>
                  <p className="text-lg font-bold text-stone-600">{product.price}</p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 border-2 border-stone-900 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>

              {/* Quick Add Button */}
              <button className="w-full mt-4 py-3 bg-stone-900 text-white text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all -translate-y-2 group-hover:translate-y-0">
                Quick Add
              </button>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-20 flex justify-center gap-2">
          {[1, 2, 3].map((page) => (
            <button 
              key={page}
              className={`w-10 h-10 flex items-center justify-center transition-colors ${
                page === 1 
                  ? 'bg-stone-900 text-white' 
                  : 'bg-white text-stone-600 hover:bg-stone-200'
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      </main>

      {/* Quick View Modal */}
      {selected && (
        <div 
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-8"
          onClick={() => setSelected(null)}
        >
          <div className="bg-white max-w-2xl w-full p-8 relative" onClick={e => e.stopPropagation()}>
            <button 
              className="absolute top-4 right-4 text-2xl text-stone-400 hover:text-stone-600"
              onClick={() => setSelected(null)}
            >
              ×
            </button>

            <div className="flex gap-8">
              <div className={`w-48 h-48 bg-gradient-to-br ${selected.color} flex items-center justify-center`}>
                <span className="text-white/30 text-6xl">◐</span>
              </div>
              <div>
                <p className="text-xs text-stone-400 uppercase tracking-wider mb-1">{selected.category}</p>
                <h2 className="text-2xl font-serif text-stone-900 mb-2">{selected.name}</h2>
                <p className="text-3xl font-bold text-stone-900 mb-4">{selected.price}</p>
                <p className="text-stone-600 mb-6">
                  Premium quality {selected.name.toLowerCase()} from our curated collection. 
                  Designed to elevate your space.
                </p>
                <button className="px-8 py-3 bg-stone-900 text-white uppercase tracking-wider hover:bg-stone-800 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-12 px-8">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <p>© 2024 The Shelf</p>
          <div className="flex gap-6 text-sm">
            <span>Shipping</span>
            <span>Returns</span>
            <span>Contact</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
