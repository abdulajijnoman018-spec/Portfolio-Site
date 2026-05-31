import React, { useRef } from 'react';
import { User, Target, Heart, Award, ShieldCheck, Mail, MapPin, Upload } from 'lucide-react';

interface AboutProps {
  ownerName?: string;
  ownerPhotoUrl?: string;
  onUpdatePhoto?: (base64: string) => void;
  aboutOverHeading?: string;
  aboutHeadingName?: string;
  aboutShortPitch?: string;
  aboutParagraph1?: string;
  aboutParagraph2?: string;
  aboutMandate?: string;
  aboutSpecializations?: { title: string; desc: string }[];
  aboutPartnerVerts?: string[];
}

export default function About({
  ownerName = "Md. Azizul Hakim",
  ownerPhotoUrl = "",
  onUpdatePhoto,
  aboutOverHeading = "THE DESIGNER BEHIND THE BRAND",
  aboutHeadingName = "Md. Azizul Hakim",
  aboutShortPitch = "Hi, I'm Md. Azizul Hakim, a multidisciplinary designer specializing in Packaging Design, Brand Identity Design, UI/UX Design, 3D Product Visualization, Motion Graphics, and Digital Product Development.",
  aboutParagraph1 = "Over the years, I have helped global businesses create impactful visual identities, premium product packaging, intuitive user experiences, and high-converting digital assets. My work seamlessly translates strategic design thinking into beautiful, product-ready visual outcomes.",
  aboutParagraph2 = "Whether designing a luxury fragrance package with complex gold foil alignment or writing components for custom SaaS design tokens, my goal is exact: help brands stand out in fierce, competitive global markets.",
  aboutMandate = "My mission is simple: transform raw creative ideas into memorable, functional visual experiences that drive measurable business growth.",
  aboutSpecializations = [
    { title: 'Packaging Design', desc: 'Crafting luxury, high-end outer hulls, custom CAD dielines, paper engineering, and photorealistic 3D presentation.' },
    { title: 'UI/UX Design Systems', desc: 'Constructing robust, token-synergized product frameworks, fluid Figma variants, and direct Framer deployments.' },
    { title: 'Brand Identity', desc: 'Conceptualizing memorable typography, geometric logos, brand guidelines, and distinctive print methodologies.' },
    { title: '3D Product Visualization', desc: 'Creating immaculate studio-lit product renders and packaging close-ups in Blender & Keyshot (no physical prototyping needed).' }
  ],
  aboutPartnerVerts = [
    'Startups & Tech Incubators',
    'Premium eCommerce Brands',
    'Paper & Bottle Manufacturers',
    'Luxury Wellness & Cosmetics',
    'Gourmet Food & Beverages',
    'Digital Product Entrepreneurs'
  ]
}: AboutProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onUpdatePhoto) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          onUpdatePhoto(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="about-section" className="py-24 bg-white border-b border-black/5 text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Heading Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-4">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-amber-600 font-bold block mb-3">
              {aboutOverHeading}
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-none text-black">
              About {aboutHeadingName.split(' ').slice(1).join(' ') || aboutHeadingName || ownerName}
            </h2>
          </div>
          <div className="lg:col-span-8">
            <p className="text-lg sm:text-xl text-black/80 font-normal leading-relaxed">
              {aboutShortPitch}
            </p>
          </div>
        </div>

        {/* Master Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Interactive Editorial Cards */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="space-y-6 text-black/75 text-sm sm:text-base leading-relaxed">
              <p>
                {aboutParagraph1}
              </p>
              <p>
                {aboutParagraph2}
              </p>
            </div>

            {/* Specialties grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {aboutSpecializations.map((spec, i) => (
                <div key={i} className="p-5 bg-[#FAF9F6] rounded-2xl border border-black/5 hover:border-black/10 transition-colors">
                  <h4 className="text-sm font-bold text-black uppercase tracking-wider font-sans">{spec.title}</h4>
                  <p className="text-xs text-black/60 mt-2 leading-relaxed">{spec.desc}</p>
                </div>
              ))}
            </div>

          </div>

          {/* Right: Personal Detail Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#FAF9F6] border border-black/10 p-6 sm:p-8 rounded-3xl space-y-6">
              
              <div className="flex items-center gap-4 border-b border-black/5 pb-5">
                <div 
                  onClick={handleAvatarClick}
                  className="relative h-16 w-16 group rounded-full overflow-hidden border border-black/15 shadow-sm cursor-pointer"
                  title="Click to upload your custom photo"
                >
                  <img
                    src={ownerPhotoUrl || "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=150&q=80"}
                    alt={`${ownerName} Profile Portrait`}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105 duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <Upload className="h-4 w-4 text-white" />
                    <span className="text-[7px] text-white uppercase font-bold tracking-wider mt-0.5">Upload</span>
                  </div>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept="image/*"
                    className="hidden"
                  />
                </div>
                <div>
                  <h3 className="text-base font-bold text-black font-sans leading-none">{ownerName}</h3>
                  <span className="text-[10px] text-amber-600 block font-mono font-bold mt-1 uppercase tracking-wider">
                    Studio Director & Architect
                  </span>
                  <div className="flex items-center gap-1.5 text-black/50 text-[10px] mt-1 font-medium">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>Global Remote Work</span>
                  </div>
                </div>
              </div>

              {/* Core Mission Block */}
              <div className="space-y-3">
                <span className="text-[10.5px] font-mono uppercase font-bold tracking-widest text-[#1A1A1A]/40 block">
                  Core Mandate
                </span>
                <p className="text-xs text-black/80 font-medium leading-relaxed bg-white border border-black/5 p-4 rounded-xl">
                  "{aboutMandate}"
                </p>
              </div>

              {/* Partner Industries checklist */}
              <div className="space-y-3 pt-2">
                <span className="text-[10px] font-mono uppercase font-bold tracking-widest text-[#1A1A1A]/40 block">
                  Partner Verticals
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {aboutPartnerVerts.map((val, i) => (
                    <div key={i} className="flex items-center gap-2 text-[11px] text-black/80 font-medium font-sans">
                      <ShieldCheck className="h-3.5 w-3.5 text-emerald-600 flex-shrink-0" />
                      <span>{val}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
