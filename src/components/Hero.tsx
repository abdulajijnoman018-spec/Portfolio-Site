import React, { useRef } from 'react';
import { ArrowRight, Sparkles, Star, LayoutGrid, ShoppingCart, Award, Compass, Upload, Edit2 } from 'lucide-react';

interface HeroProps {
  onNavigate: (tab: string) => void;
  isDevelopmentMode?: boolean;
  heroImageUrl?: string;
  onUpdateHeroImage?: (base64: string) => void;
  heroProjectTitle?: string;
  heroProjectSub?: string;
  onUpdateHeroText?: (title: string, sub: string) => void;
  heroBadge?: string;
  heroLine1?: string;
  heroLine2?: string;
  heroLine3Metallic?: string;
  heroTagsList?: string;
  heroParagraph?: string;
}

export default function Hero({
  onNavigate,
  isDevelopmentMode = false,
  heroImageUrl = "https://images.unsplash.com/photo-1541462608141-ad4979e408c9?auto=format&fit=crop&q=80&w=700",
  onUpdateHeroImage,
  heroProjectTitle = "Ambrosia Luxury Perfumes",
  heroProjectSub = "Winner Packaging Design Award 2025",
  onUpdateHeroText,
  heroBadge = "Multidisciplinary Design & Dev Studio",
  heroLine1 = "Design.",
  heroLine2 = "Code.",
  heroLine3Metallic = "Create.",
  heroTagsList = "Packaging Design, Development, AI Artist, Video Editor",
  heroParagraph = "Helping brands and organizations produce high-converting products, elite full-stack system architectures, surreal artistic visuals, and dynamic media compositions with luxurious execution."
}: HeroProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleHeroImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onUpdateHeroImage) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          onUpdateHeroImage(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEditText = () => {
    if (!onUpdateHeroText) return;
    const newTitle = prompt("Enter new project title for the showcase:", heroProjectTitle);
    if (newTitle === null) return;
    const newSub = prompt("Enter new subtitle / award info:", heroProjectSub);
    if (newSub === null) return;
    onUpdateHeroText(newTitle, newSub);
  };
  return (
    <section id="hero-section" className="relative bg-[#FAF9F6] pt-12 pb-24 md:py-32 overflow-hidden border-b border-black/5">
      {/* Editorial aesthetic grid layer */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-35 pointer-events-none"></div>

      {/* Radiant minimal gradient overlay */}
      <div className="absolute top-1/4 right-[10%] w-[450px] h-[450px] bg-amber-100/35 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Creative Typography column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black text-[#FAF9F6] text-[10px] font-mono uppercase tracking-[0.2em]">
              <Sparkles className="h-3 w-3 text-amber-400" />
              <span>{heroBadge}</span>
            </div>

            <h1 className="text-5xl sm:text-7xl font-black font-sans tracking-tight text-black leading-[1.05]">
              {heroLine1}<br />
              {heroLine2}<br />
              <span className="font-serif italic font-normal text-amber-600 block sm:inline">{heroLine3Metallic}</span>
            </h1>

            <div className="text-xs sm:text-sm font-mono tracking-widest text-[#1A1A1A]/70 uppercase font-semibold flex flex-wrap gap-2 items-center">
              {heroTagsList.split(',').map((t, idx, arr) => {
                const tag = t.trim();
                if (!tag) return null;
                return (
                  <React.Fragment key={idx}>
                    <span>{tag}</span>
                    {idx < arr.length - 1 && <span className="text-amber-500">•</span>}
                  </React.Fragment>
                );
              })}
            </div>

            <p className="max-w-xl text-base sm:text-lg text-black/70 leading-relaxed font-normal">
              {heroParagraph}
            </p>

            {/* Quick action group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4">
              <button
                onClick={() => onNavigate('catalog')}
                className="px-8 py-3.5 bg-black hover:bg-amber-600 text-[#FAF9F6] text-[11px] font-bold uppercase tracking-widest rounded-full transition-all duration-300 flex items-center justify-center gap-2 group shadow-sm"
              >
                <span>Browse Resource Marketplace</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => onNavigate('academy')}
                className="px-8 py-3.5 bg-transparent text-black hover:bg-black hover:text-[#FAF9F6] border border-black text-[11px] font-bold uppercase tracking-widest rounded-full transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Academics & Mentoring</span>
              </button>
            </div>
          </div>

          {/* Bold Visual Block / Portfolio Feature Teaser */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full max-w-sm mx-auto rounded-3xl overflow-hidden shadow-2xl border border-black/10 bg-white group">
              <img
                src={heroImageUrl}
                alt="LWA Learn With Aziz Portfolio Showcase"
                className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              
              {/* Dynamic editing controls on hover */}
              <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  type="button"
                  onClick={handleHeroImageClick}
                  className="px-3 py-2 bg-black/75 backdrop-blur-md text-[#FAF9F6] hover:bg-black border border-white/10 rounded-xl text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-lg transition-all hover:scale-105"
                  title="Change Hero Showcase Image"
                >
                  <Upload className="h-3.5 w-3.5 text-amber-500" />
                  <span>Upload Image</span>
                </button>
                {onUpdateHeroText && (
                  <button
                    type="button"
                    onClick={handleEditText}
                    className="px-3 py-2 bg-amber-900/85 backdrop-blur-md text-[#FAF9F6] hover:bg-amber-900 border border-white/10 rounded-xl text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-lg transition-all hover:scale-105"
                    title="Edit Showcase Credentials"
                  >
                    <Edit2 className="h-3.5 w-3.5 text-amber-400" />
                    <span>Edit Info</span>
                  </button>
                )}
              </div>

              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*"
                className="hidden"
              />

              {/* Card visual brand card overlay */}
              <div className="absolute inset-x-4 bottom-4 bg-[#FAF9F6]/95 backdrop-blur-md p-5 rounded-2xl border border-black/5 shadow-md flex items-center justify-between animate-fadeIn">
                <div className="flex-1 min-w-0 pr-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-black/40 block">
                    Featured Masterpiece
                  </span>
                  <span className="text-sm font-bold font-sans text-black block mt-1 truncate" title={heroProjectTitle}>
                    {heroProjectTitle}
                  </span>
                  <span className="text-[10px] text-[#D97706] block font-semibold mt-0.5 truncate" title={heroProjectSub}>
                    {heroProjectSub}
                  </span>
                </div>
                <button
                  onClick={() => onNavigate('gallery')}
                  className="p-3 bg-black text-[#FAF9F6] hover:bg-amber-600 transition-colors rounded-full shadow-sm flex-shrink-0"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* floating feedback component */}
            <div className="absolute -top-6 -left-6 sm:-left-12 bg-white border border-black/5 p-4 rounded-2xl shadow-xl z-25 flex items-center gap-3 animate-fadeIn">
              <div className="h-10 w-10 bg-amber-50 rounded-lg flex items-center justify-center text-amber-600">
                <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
              </div>
              <div>
                <span className="text-[10px] text-black/40 font-bold uppercase tracking-wider block">
                  Global Audits
                </span>
                <span className="text-xs font-black text-black block leading-tight mt-0.5">
                  100% Client Satisfaction
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Studio metrics strip */}
        <div className="mt-20 pt-10 border-t border-black/5 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 bg-white rounded-2xl border border-black/5 hover:shadow-xs transition-shadow">
            <span className="text-2xl sm:text-3xl font-bold text-amber-600 block font-serif italic">150+</span>
            <span className="text-[10px] text-black/50 tracking-widest uppercase font-bold mt-1.5 block">Premium Templates Sold</span>
          </div>
          <div className="p-4 bg-white rounded-2xl border border-black/5 hover:shadow-xs transition-shadow">
            <span className="text-2xl sm:text-3xl font-bold text-black block font-serif italic">5,000+</span>
            <span className="text-[10px] text-black/50 tracking-widest uppercase font-bold mt-1.5 block">Active Global Students</span>
          </div>
          <div className="p-4 bg-white rounded-2xl border border-black/5 hover:shadow-xs transition-shadow">
            <span className="text-2xl sm:text-3xl font-bold text-black block font-serif italic">100%</span>
            <span className="text-[10px] text-black/50 tracking-widest uppercase font-bold mt-1.5 block">CAD Production Tested</span>
          </div>
          <div className="p-4 bg-white rounded-2xl border border-black/5 hover:shadow-xs transition-shadow">
            <span className="text-2xl sm:text-3xl font-bold text-amber-600 block font-serif italic">8+ Years</span>
            <span className="text-[10px] text-black/50 tracking-widest uppercase font-bold mt-1.5 block">Professional Experience</span>
          </div>
        </div>

      </div>
    </section>
  );
}
