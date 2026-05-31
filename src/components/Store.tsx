import React, { useState } from 'react';
import { DESIGN_RESOURCES } from '../data/mockData';
import { DesignResource } from '../types';
import { Search, ShoppingBag, ArrowRight, Download, Eye, ExternalLink, Sparkles, Check, CheckCircle2, DollarSign, X } from 'lucide-react';

interface StoreProps {
  unlockedResourceIds: string[];
  onUnlockResource: (resourceId: string) => void;
  onNavigate: (tab: string) => void;
  resources?: DesignResource[];
}

export default function Store({ unlockedResourceIds, onUnlockResource, onNavigate, resources = DESIGN_RESOURCES }: StoreProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [checkoutProduct, setCheckoutProduct] = useState<DesignResource | null>(null);
  
  // Simulation form states
  const [buyerEmail, setBuyerEmail] = useState('');
  const [buyerName, setBuyerName] = useState('');
  const [cardDigits, setCardDigits] = useState('');
  const [purchaseSuccess, setPurchaseSuccess] = useState(false);

  const categories = ['All', 'Packaging', 'Figma Kits', '3D Mockups', 'Bundles', 'Assets'];

  // Soft search & category filters combinations
  const filteredResources = resources.filter(res => {
    const matchesSearch = res.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          res.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = selectedCategory === 'All' || res.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  const handleBuyClick = (resource: DesignResource) => {
    if (unlockedResourceIds.includes(resource.id)) {
      // Already bought, go to Library hub
      onNavigate('library');
      return;
    }
    setCheckoutProduct(resource);
    setPurchaseSuccess(false);
  };

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!buyerEmail || !buyerName) {
      alert('Please fill out Name and Email');
      return;
    }

    // Simulate standard webhook / payment gate success
    setPurchaseSuccess(true);
    setTimeout(() => {
      onUnlockResource(checkoutProduct!.id);
      setCheckoutProduct(null);
      setBuyerEmail('');
      setBuyerName('');
      setCardDigits('');
      setPurchaseSuccess(false);
      // Automatically redirect to personal hub library!
      onNavigate('library');
    }, 2000);
  };

  return (
    <section id="resources-marketplace-section" className="py-24 bg-[#FAF9F6] border-b border-black/5 text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Group */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-black text-[#FAF9F6] text-[10px] font-mono uppercase tracking-[0.15em] font-semibold mb-3">
            <ShoppingBag className="h-3 w-3 text-amber-400" />
            Premium Digital Marketplace
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-black">
            Design Resource Store
          </h2>
          <p className="mt-4 text-black/60 text-xs sm:text-sm font-normal">
            Buy premium digital products including ready-to-print vector packaging dielines, high-fidelity Figma systems, studio-grade Blender lighting files, and holistic presentation bundles.
          </p>
        </div>

        {/* Filters and search controller */}
        <div className="bg-white border border-black/5 rounded-3xl p-5 mb-12 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 shadow-sm">
          {/* Categories */}
          <div className="flex flex-wrap gap-1.5 order-2 md:order-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all ${
                  selectedCategory === cat
                    ? 'bg-black text-[#FAF9F6]'
                    : 'bg-[#FAF9F6] border border-black/5 text-black/60 hover:text-black hover:bg-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative order-1 md:order-2 max-w-xs w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-black/40" />
            <input
              type="text"
              placeholder="Search design kits..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-[#FAF9F6] border border-black/10 rounded-xl text-xs focus:outline-none focus:border-amber-500 font-sans text-black"
            />
          </div>
        </div>

        {/* Market Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResources.map((res) => {
            const isOwned = unlockedResourceIds.includes(res.id);
            return (
              <div
                key={res.id}
                className="bg-white border border-black/5 rounded-3xl overflow-hidden flex flex-col justify-between group shadow-none hover:shadow-lg transition-transform duration-300"
              >
                {/* Image panel */}
                <div className="relative aspect-[3/2] overflow-hidden bg-black/5">
                  <img
                    src={res.coverImage}
                    alt={res.title}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Category overlay label */}
                  <span className="absolute top-4 left-4 bg-black/90 text-white border border-white/5 px-2 py-0.5 rounded text-[8px] font-mono uppercase font-bold tracking-wider">
                    {res.category}
                  </span>
                  
                  {/* Software label overlay */}
                  <span className="absolute bottom-4 right-4 bg-[#FAF9F6]/95 backdrop-blur-sm border border-black/5 px-2.5 py-1 rounded-lg text-[9px] font-mono text-black/75 font-semibold">
                    {res.software}
                  </span>

                  {isOwned && (
                    <div className="absolute inset-0 bg-emerald-900/60 backdrop-blur-xs flex items-center justify-center">
                      <div className="bg-white text-emerald-800 px-4 py-2 rounded-2xl flex items-center gap-2 font-bold text-xs shadow-md">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                        <span>Purchased & Unlocked</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Info summary */}
                <div className="p-6 space-y-4 text-left flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[10px] text-black/40 font-mono">
                      <span>SIZE: {res.fileSize}</span>
                      <span className="flex items-center gap-1">
                        <Download className="h-3 w-3" />
                        {res.downloadsCount.toLocaleString()} downloads
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-black group-hover:text-amber-600 transition-colors leading-snug">
                      {res.title}
                    </h3>

                    <p className="text-xs text-black/60 leading-relaxed font-normal line-clamp-3">
                      {res.description}
                    </p>
                  </div>

                  {/* Highlights and actions */}
                  <div className="pt-4 border-t border-black/5 space-y-4">
                    <div className="flex flex-wrap gap-1">
                      {res.features.slice(0, 2).map((feat, idx) => (
                        <span key={idx} className="bg-[#FAF9F6] border border-black/5 text-[9px] text-black/60 font-semibold px-2 py-0.5 rounded-lg">
                          • {feat}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <div>
                        {res.originalPrice && (
                          <span className="text-xs text-black/40 line-through mr-1 font-mono">${res.originalPrice}</span>
                        )}
                        <span className="text-xl font-mono font-black text-black">${res.price} USD</span>
                      </div>

                      <button
                        onClick={() => handleBuyClick(res)}
                        className={`px-5 py-2.5 text-[10px] font-bold uppercase tracking-widest rounded-xl transition-all flex items-center gap-2 ${
                          isOwned
                            ? 'bg-emerald-50 text-emerald-805 border border-emerald-300 hover:bg-emerald-100 text-emerald-800'
                            : 'bg-black hover:bg-amber-600 text-white'
                        }`}
                      >
                        <span>{isOwned ? 'Access Library' : 'Direct Unlock'}</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty Search block */}
        {filteredResources.length === 0 && (
          <div className="text-center py-16 bg-white border border-black/5 rounded-3xl">
            <span className="text-3xl">📦</span>
            <p className="mt-3 text-xs text-black/40 font-mono">No matching resources in this category.</p>
          </div>
        )}

        {/* Simple Premium Checkout Simulation Modal */}
        {checkoutProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 sm:p-6 backdrop-blur-sm animate-fadeIn">
            <div className="bg-white border border-black/5 rounded-3xl max-w-md w-full overflow-hidden shadow-2xl relative text-left">
              
              <button
                onClick={() => setCheckoutProduct(null)}
                className="absolute top-4 right-4 p-1.5 text-black/40 hover:text-black bg-[#FAF9F6] rounded-full border border-black/5 hover:border-black/15 transition-all"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="p-6 bg-black text-[#FAF9F6] flex items-center justify-between">
                <div>
                  <span className="text-[9px] font-mono uppercase tracking-[0.15em] text-amber-400 block">Instant Asset Acquisition</span>
                  <h3 className="text-base font-bold font-sans mt-1">Unlock Digital Source</h3>
                </div>
                <div className="bg-white/10 text-white rounded-lg px-2.5 py-1 text-xs font-mono font-black">
                  ${checkoutProduct.price} USD
                </div>
              </div>

              {/* Checkout Form simulation */}
              <form onSubmit={handleCheckoutSubmit} className="p-6 space-y-4">
                
                {purchaseSuccess ? (
                  <div className="py-8 text-center space-y-4">
                    <div className="h-14 w-14 bg-emerald-50 text-emerald-700 border border-emerald-250 rounded-full flex items-center justify-center mx-auto animate-bounce">
                      <Check className="h-7 w-7" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-black">Payment Confirmed!</h4>
                      <p className="text-xs text-black/60 mt-1">Unlocking your secure ZIP file and linking to your personal hub now...</p>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-center text-xs text-amber-900 flex items-start gap-2">
                      <Sparkles className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span>This is a secure checkout simulator. Filling out your details will instantly unlock the real download file in your Library hub.</span>
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-black/40 font-bold mb-1">Your Full Name:</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. John Doe"
                        value={buyerName}
                        onChange={(e) => setBuyerName(e.target.value)}
                        className="w-full px-3 py-2 bg-[#FAF9F6] border border-black/10 rounded-xl text-xs focus:outline-none focus:border-black"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-black/40 font-bold mb-1">Target Email (For Access Link):</label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={buyerEmail}
                        onChange={(e) => setBuyerEmail(e.target.value)}
                        className="w-full px-3 py-2 bg-[#FAF9F6] border border-black/10 rounded-xl text-xs focus:outline-none focus:border-black"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-black/40 font-bold mb-1">Card Details:</label>
                      <div className="relative">
                        <input
                          type="text"
                          required
                          placeholder="•••• •••• •••• 4242"
                          maxLength={19}
                          value={cardDigits}
                          onChange={(e) => setCardDigits(e.target.value)}
                          className="w-full px-3 py-2 bg-[#FAF9F6] border border-black/10 rounded-xl text-xs focus:outline-none focus:border-black font-mono font-bold"
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-1.5 opacity-40">
                          <span className="text-[10px] font-black uppercase font-mono tracking-wider">VISA</span>
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-black hover:bg-amber-600 text-white rounded-xl text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-1.5"
                    >
                      <span>Secure Authorize</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </>
                )}

              </form>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
