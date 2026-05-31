import React, { useState } from 'react';
import { Menu, X, ArrowRight, User, ShoppingBag, GraduationCap, Briefcase, Award, Library, Settings } from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  cartCount: number;
  unlockedCoursesCount: number;
  unlockedResourcesCount: number;
  ownerName: string;
  ownerTagline?: string;
  isDevelopmentMode?: boolean;
  setIsDevelopmentMode?: (v: boolean) => void;
}

export default function Navigation({
  activeTab,
  setActiveTab,
  cartCount,
  unlockedCoursesCount,
  unlockedResourcesCount,
  ownerName,
  ownerTagline,
  isDevelopmentMode = false,
  setIsDevelopmentMode = () => {}
}: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'gallery', label: 'Portfolio', icon: Briefcase },
    { id: 'academy', label: 'Academy', icon: GraduationCap },
    { id: 'catalog', label: 'Resources Store', icon: ShoppingBag },
    { id: 'articles', label: 'Articles & Tutorials', icon: Award },
  ];

  const totalUnlocked = unlockedCoursesCount + unlockedResourcesCount;

  const getInitials = (fullName: string) => {
    try {
      return fullName
        .split(' ')
        .map((n) => n[0])
        .slice(0, 2)
        .join('')
        .toUpperCase();
    } catch {
      return 'AH';
    }
  };

  return (
    <div className="w-full sticky top-0 z-50">
      {/* Top Banner with high-end designer statement */}
      <div className="bg-black text-[#FAF9F6] text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] py-2.5 px-4 text-center flex items-center justify-center gap-2 border-b border-white/5">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
        <span>Premium design systems, packaging CAD lines, and premium classes.</span>
      </div>

      {/* Main Premium Clean Nav */}
      <nav id="main-nav" className="bg-[#FAF9F6]/90 backdrop-blur-xl border-b border-black/5 text-[#1A1A1A] shadow-sm relative transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Elegant Owner Brand Name */}
            <div
              onClick={() => {
                setActiveTab('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-3 cursor-pointer group"
              id="brand-logo"
            >
              <div className="h-10 w-10 bg-[#1A1A1A] text-[#FAF9F6] rounded-full flex items-center justify-center font-display text-xs font-black group-hover:bg-amber-600 transition-all duration-300 shadow-md uppercase tracking-wider">
                LWA
              </div>
              <div>
                <span className="text-base sm:text-lg font-bold font-sans tracking-tight text-black block leading-none">
                  {ownerName}
                </span>
                <span className="text-[9px] text-[#D97706]/85 group-hover:text-amber-600 font-mono uppercase tracking-[0.12em] block mt-1.5 font-bold">
                  {isDevelopmentMode ? "DEVELOPMENT & SYSTEM LABS" : (ownerTagline || "STUDIO & DIGITAL MARKETS")}
                </span>
              </div>
            </div>

            {/* Desktop Items */}
            <div className="hidden lg:flex items-center gap-8 text-[11px] font-semibold uppercase tracking-[0.18em]">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    id={`nav-link-${item.id}`}
                    onClick={() => {
                      setActiveTab(item.id);
                      window.scrollTo({ top: 0, behavior: 'auto' });
                    }}
                    className={`pb-1 transition-all duration-300 border-b-2 ${
                      isActive
                        ? 'text-black border-black font-extrabold'
                        : 'text-black/50 hover:text-black border-transparent hover:border-black/20'
                    } ${item.id === 'admin' ? 'text-amber-800 font-bold border-amber-600/30' : ''}`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            {/* Right Buttons: Portal Entry & Cart representation */}
            <div className="hidden sm:flex items-center gap-4">
              {/* Dynamic Library Portal Button */}
              <button
                id="portal-toggle-btn"
                onClick={() => {
                  setActiveTab('library');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest transition-all duration-300 shadow-sm border ${
                  totalUnlocked > 0
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-800 hover:bg-emerald-100'
                    : 'bg-white border-black/15 text-black hover:bg-black hover:text-white'
                }`}
              >
                <Library className="h-3.5 w-3.5" />
                <span>My Hub</span>
                {totalUnlocked > 0 && (
                  <span className="bg-emerald-600 text-white text-[9px] h-5 w-5 rounded-full flex items-center justify-center font-bold">
                    {totalUnlocked}
                  </span>
                )}
              </button>

              <button
                id="contact-nav-btn"
                onClick={() => {
                  setActiveTab('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-5 py-2 bg-black hover:bg-amber-600 text-[#FAF9F6] text-[10px] font-bold uppercase tracking-widest rounded-full transition-all shadow-sm"
              >
                Let's Collab
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center gap-3">
              {totalUnlocked > 0 && (
                <button
                  onClick={() => {
                    setActiveTab('library');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="p-2 bg-emerald-50 border border-emerald-200 rounded-full text-emerald-800 relative"
                >
                  <Library className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 bg-emerald-600 text-white text-[8px] h-4 w-4 rounded-full flex items-center justify-center font-bold">
                    {totalUnlocked}
                  </span>
                </button>
              )}
              <button
                id="mobile-menu-btn"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl text-black hover:bg-black/5 focus:outline-none"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu panel */}
        {isOpen && (
          <div className="lg:hidden border-t border-black/5 bg-[#FAF9F6] px-4 pt-3 pb-6 space-y-2 animate-fadeIn relative z-50">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-mob-${item.id}`}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs uppercase tracking-widest font-bold transition-all ${
                    isActive
                      ? 'bg-black text-[#FAF9F6]'
                      : 'text-black/70 hover:bg-black/5'
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowRight className="h-4 w-4 opacity-50" />
                </button>
              );
            })}
            
            <div className="pt-4 border-t border-black/5 mt-2 space-y-2">
              <button
                onClick={() => {
                  setActiveTab('library');
                  setIsOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-white border border-black/15 text-black hover:bg-black hover:text-white transition-all"
              >
                <Library className="h-4 w-4" />
                <span>My Purchased Items ({totalUnlocked})</span>
              </button>

              <button
                onClick={() => {
                  setActiveTab('contact');
                  setIsOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-black text-[#FAF9F6]"
              >
                <User className="h-4 w-4" />
                <span>Get in Touch</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
