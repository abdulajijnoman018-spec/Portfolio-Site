import React, { useState } from 'react';
import { Mail, MessageCircle, Globe, Github, Linkedin, Send, Sparkles, Check, PhoneCall, Gift } from 'lucide-react';

interface ContactProps {
  onNewInquiry?: (inq: { name: string; email: string; type: string; message: string }) => void;
  ownerEmail?: string;
  ownerWhatsapp?: string;
  isDevelopmentMode?: boolean;
  contactBadge?: string;
  contactHeading?: string;
  contactParagraph?: string;
}

export default function Contact({
  onNewInquiry,
  ownerEmail,
  ownerWhatsapp,
  isDevelopmentMode = false,
  contactBadge = "LET'S ARRANGE A PARTNERSHIP",
  contactHeading = "Get In Touch",
  contactParagraph = "Whether you need luxury packaging die-lines, high-end Figma system components, fullstack application engineering, AI artistic creative assets, or dynamic video edit sequences, let's explore."
}: ContactProps) {
  // Contact Form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState('Packaging');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [contactResult, setContactResult] = useState('');

  // Newsletter states
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterResult, setNewsletterResult] = useState('');

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert('Please fill out all required fields.');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setContactResult(isDevelopmentMode 
        ? 'Thank you! Your technical specifications sheet has been recorded into the secure admin control dashboard index.'
        : 'Thank you! Your message has been received by our studio dashboard in real-time. A customized design proposal is on its way.'
      );
      
      if (onNewInquiry) {
        onNewInquiry({
          name,
          email,
          type: projectType,
          message
        });
      }

      setName('');
      setEmail('');
      setMessage('');
    }, 1200);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterResult(isDevelopmentMode 
      ? 'Successfully joined! The link to the LWA React + Dieline CAD script package is on its way to your inbox.' 
      : 'Successfully joined! Check your inbox for the free CAD Packaging templates pack.'
    );
    setNewsletterEmail('');
    setTimeout(() => setNewsletterResult(''), 6000);
  };

  return (
    <section id="contact-section" className="py-24 bg-white border-b border-black/5 text-[#1A1A1A] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Double Column Grid: Info + Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side: Editorial coordinates and socials */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#D97706] font-bold block">
                {contactBadge}
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-black leading-none">
                {contactHeading}
              </h2>
              <p className="text-xs sm:text-sm text-black/60 font-normal leading-relaxed">
                {contactParagraph}
              </p>
            </div>

            {/* Direct coordinate indicators */}
            <div className="space-y-4">
              <div className="p-4 bg-[#FAF9F6] border border-black/5 rounded-2xl flex items-center gap-4">
                <div className="h-10 w-10 bg-black text-white rounded-full flex items-center justify-center">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[9px] font-mono text-black/40 block lowercase font-semibold">Active Studio Email</span>
                  <span className="text-xs sm:text-sm font-bold text-black block">{ownerEmail || "azizul.designer@gmail.com"}</span>
                </div>
              </div>

              <div className="p-4 bg-[#FAF9F6] border border-black/5 rounded-2xl flex items-center gap-4 animate-pulse">
                <div className="h-10 w-10 bg-emerald-600 text-white rounded-full flex items-center justify-center">
                  <MessageCircle className="h-5 w-5 fill-white text-emerald-600" />
                </div>
                <div>
                  <span className="text-[9px] font-mono text-black/45 block lowercase font-semibold">Active WhatsApp Desk</span>
                  <span className="text-xs sm:text-sm font-bold text-black block">{ownerWhatsapp || "+8801824707011"}</span>
                </div>
              </div>
            </div>

            {/* Premium Social Links row */}
            <div className="space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-black/40 block font-bold">Creative Indices</span>
              <div className="flex gap-2.5">
                <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="p-3 bg-[#FAF9F6] border border-black/5 hover:bg-black hover:text-[#FAF9F6] transition-all rounded-full">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-3 bg-[#FAF9F6] border border-black/5 hover:bg-black hover:text-[#FAF9F6] transition-all rounded-full">
                  <Github className="h-4 w-4" />
                </a>
                <a href="https://dribbble.com/" target="_blank" rel="noreferrer" className="p-3 bg-[#FAF9F6] border border-black/5 hover:bg-black hover:text-[#FAF9F6] transition-all rounded-full">
                  <Globe className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Lead capturing active contact form */}
          <div className="lg:col-span-7 bg-[#FAF9F6] border border-black/10 p-6 sm:p-10 rounded-3xl shadow-sm space-y-6">
            <div className="border-b border-black/5 pb-4">
              <h3 className="text-lg font-bold text-black font-sans leading-none flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-amber-500" />
                Submit Project Brief & Technical Specs
              </h3>
            </div>

            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-black/40 font-bold mb-1">Your Name:</label>
                  <input
                    type="text"
                    required
                    placeholder="Azizul Hakim"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-black/10 rounded-xl text-xs focus:outline-none focus:border-black font-sans text-black"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-black/40 font-bold mb-1">Your Email Address:</label>
                  <input
                    type="email"
                    required
                    placeholder="azizul@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-black/10 rounded-xl text-xs focus:outline-none focus:border-black font-sans text-black"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-mono uppercase tracking-wider text-black/40 font-bold mb-1">Scope Verticals:</label>
                <select
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-black/10 rounded-xl text-xs focus:outline-none focus:border-black font-sans text-black"
                >
                  <option value="Packaging">Packaging & Label Design</option>
                  <option value="UI-UX">UI/UX Figma System</option>
                  <option value="Framer-Web">Framer Web Design</option>
                  <option value="3D-Visualization">3D Rendering / Blender Visuals</option>
                  <option value="Development">Fullstack Development (React, Node.js)</option>
                  <option value="AI-Artist">AI Artist & Creative Automation</option>
                  <option value="Video-Editing">Video Editing & Motion Graphics</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-mono uppercase tracking-wider text-black/40 font-bold mb-1">Brief Description / Challenges:</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Explain your business objectives, target audience, specifications, tech stacks, or video timeline/creative styles briefly..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2.5 bg-white border border-black/10 rounded-xl text-xs focus:outline-none focus:border-black font-sans text-black"
                ></textarea>
              </div>

              {contactResult && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-center text-xs text-emerald-800 font-medium">
                  {contactResult}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-black hover:bg-amber-600 text-white rounded-xl text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-1.5"
              >
                {isSubmitting ? (
                  <span>Dispatching...</span>
                ) : (
                  <>
                    <Send className="h-3.5 w-3.5" />
                    <span>Send Secure Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

        {/* Newsletter Subscription Footer Banner */}
        <div className="mt-20 border border-black/5 rounded-3xl overflow-hidden shadow-sm relative">
          {/* Subtle decoration elements */}
          <div className="absolute top-0 right-0 w-80 h-full bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="bg-[#FAF9F6] border border-black/10 px-6 py-12 sm:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center text-left relative z-10">
            <div className="md:col-span-7 space-y-3">
              <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold uppercase tracking-widest text-[#1A1A1A]/50 bg-white border border-black/5 px-2.5 py-1 rounded-lg">
                <Gift className="h-3.5 w-3.5 text-amber-500" />
                Specialist Design Resource Gift
              </span>
              <h3 className="text-xl sm:text-2xl font-black font-sans text-black">
                Join MD. Azizul Hakim Newsletter list
              </h3>
              <p className="text-xs text-black/60 leading-relaxed font-normal max-w-xl">
                Get a high-end Figma Landing Page starter wireframe and 3 luxury CAD Packaging templates instantly for free, plus bi-weekly tutorials on freelance studio growth and design.
              </p>
            </div>

            <div className="md:col-span-5 w-full">
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <div className="flex">
                  <input
                    type="email"
                    required
                    placeholder="azizul@example.com"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-black/10 rounded-l-xl text-xs focus:outline-none focus:border-black font-sans text-black"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-black hover:bg-amber-600 text-white text-[10px] font-bold uppercase rounded-r-xl transition-all font-mono tracking-wider flex-shrink-0"
                  >
                    Get Assets
                  </button>
                </div>
                {newsletterResult && (
                  <p className="text-[10px] text-emerald-805 text-emerald-700 font-bold bg-emerald-50 border border-emerald-250 p-2 rounded-lg text-center font-sans tracking-wide">
                    {newsletterResult}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
