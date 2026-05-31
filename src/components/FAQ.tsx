import React, { useState } from 'react';
import { FAQS } from '../data/mockData';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQItem } from '../types';

interface FAQProps {
  faqs?: FAQItem[];
  faqOverheading?: string;
  faqHeading?: string;
  faqSubtext?: string;
}

export default function FAQ({
  faqs = [],
  faqOverheading = "Self-Service Hub",
  faqHeading = "Commonly Asked Questions",
  faqSubtext = "Understand academic licensing, source package contents, and custom collaboration pathways with our studio partners."
}: FAQProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'general', 'courses', 'resources', 'services'];
  const activeFaqs = faqs.length > 0 ? faqs : FAQS;

  const filteredFaqs = selectedCategory === 'All'
    ? activeFaqs
    : activeFaqs.filter(f => f.category === selectedCategory);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="faq-section" className="py-24 bg-[#FAF9F6] border-b border-black/5 text-[#1A1A1A]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-amber-100 border border-amber-200 text-amber-800 text-[10px] font-mono uppercase tracking-[0.15em] font-semibold mb-3">
            {faqOverheading}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-black">
            {faqHeading}
          </h2>
          <p className="mt-4 text-black/60 text-xs sm:text-sm font-normal">
            {faqSubtext}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-lg text-[9px] font-bold uppercase tracking-wider transition-all border ${
                selectedCategory === cat
                  ? 'bg-black text-[#FAF9F6] border-black'
                  : 'bg-white border-black/5 text-black/50 hover:text-black hover:bg-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Collapsible Accordion Grid */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isExpanded = expandedId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white border border-black/5 rounded-2xl overflow-hidden shadow-none transition-all duration-300"
              >
                {/* Header Toggle */}
                <button
                  onClick={() => toggleExpand(faq.id)}
                  className="w-full flex items-center justify-between p-5 text-left text-sm sm:text-base font-bold font-sans text-black hover:text-amber-600 transition-colors"
                >
                  <div className="flex items-center gap-3 pr-4">
                    <HelpCircle className="h-4 w-4 text-black/30 flex-shrink-0" />
                    <span>{faq.question}</span>
                  </div>
                  <ChevronDown className={`h-5 w-5 text-black/40 transition-transform flex-shrink-0 ${isExpanded ? 'rotate-180' : ''}`} />
                </button>

                {/* Collapsible Panels */}
                <div className={`transition-all duration-300 overflow-hidden ${isExpanded ? 'max-h-72 border-t border-black/5' : 'max-h-0'}`}>
                  <p className="p-5 text-xs sm:text-sm text-black/60 leading-relaxed font-normal bg-[#FAF9F6]/30">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Support Banner */}
        <div className="mt-12 p-6 bg-white border border-black/5 rounded-2xl text-center space-y-3">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-amber-600 block font-bold">Unresolved Queries?</span>
          <p className="text-xs text-black/60 max-w-md mx-auto">
            Not finding what you need? Reach out directly via live contact coordinates or schedule an active visual consultation call.
          </p>
        </div>

      </div>
    </section>
  );
}
