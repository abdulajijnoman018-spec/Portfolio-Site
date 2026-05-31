import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS } from '../data/mockData';
import { PortfolioProject } from '../types';
import { X, ExternalLink, Calendar, Briefcase, Eye, Layers, LayoutGrid, List } from 'lucide-react';

interface PortfolioProps {
  isDevelopmentMode?: boolean;
}

export default function Portfolio({ isDevelopmentMode = false }: PortfolioProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [viewType, setViewType] = useState<'grid' | 'list'>('grid');

  const categories = ['All', 'Packaging', 'Immersive 3D', 'UI/UX Design', 'Branding', 'Social Media Marketing', 'Development', 'AI Artist', 'Video Editor'];

  const filteredProjects = selectedCategory === 'All'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <section id="portfolio-section" className="py-24 bg-[#FAF9F6] border-b border-black/5 text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Elements */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-amber-100 border border-amber-200 text-amber-800 text-[10px] font-mono uppercase tracking-[0.15em] font-semibold mb-3">
            Creative Showcase
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-black">
            Portfolio Gallery
          </h2>
          <p className="mt-4 text-black/60 text-xs sm:text-sm font-normal">
            Explore premium packaging structural lines, pristine digital products, full-stack software systems, and elite design systems crafted for international manufacturing houses and selective brands.
          </p>
        </div>

        {/* Dynamic Categories & Layout View Switchers container */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 border-b border-black/5 pb-8">
          {/* Categories Tab Pill Selector */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
                  selectedCategory === cat
                    ? 'bg-black text-[#FAF9F6] shadow-sm'
                    : 'bg-white border border-black/5 text-black/60 hover:text-black hover:bg-white/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid vs Line layout view selectors */}
          <div className="flex items-center gap-1 bg-black/[0.04] border border-black/5 p-1 rounded-xl">
            <button
              onClick={() => setViewType('grid')}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 text-[9px] font-mono font-bold uppercase tracking-widest ${
                viewType === 'grid'
                  ? 'bg-white text-black shadow-xs'
                  : 'text-black/50 hover:text-black'
              }`}
              title="Grid View"
            >
              <LayoutGrid className="h-3.5 w-3.5" />
              <span>Grid</span>
            </button>
            <button
              onClick={() => setViewType('list')}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 text-[9px] font-mono font-bold uppercase tracking-widest ${
                viewType === 'list'
                  ? 'bg-white text-black shadow-xs'
                  : 'text-black/50 hover:text-black'
              }`}
              title="Line/List View"
            >
              <List className="h-3.5 w-3.5" />
              <span>Line</span>
            </button>
          </div>
        </div>

        {/* Portfolio Content depending on selected layout style */}
        {viewType === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group bg-white rounded-3xl overflow-hidden border border-black/5 cursor-pointer shadow-none hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
              >
                {/* Image box hover effects */}
                <div className="relative aspect-video overflow-hidden bg-black/5">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 opacity-95 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Visual Eye Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-[#FAF9F6] text-black h-12 w-12 rounded-full flex items-center justify-center shadow-lg transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                      <Eye className="h-5 w-5" />
                    </div>
                  </div>

                  {/* Upper Left Category tag */}
                  <div className="absolute top-4 left-4 bg-[#FAF9F6]/95 backdrop-blur-md border border-black/5 px-2.5 py-1 rounded-lg text-[9px] font-mono tracking-wider uppercase font-semibold">
                    {project.category}
                  </div>
                </div>

                {/* Text Meta info */}
                <div className="p-6 sm:p-8 space-y-4">
                  <div className="flex justify-between items-center text-[10px] font-mono text-black/40">
                    <span className="font-bold">CLIENT: {project.client}</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold font-sans text-black group-hover:text-amber-600 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs text-black/60 leading-relaxed font-normal line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tag lines */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="bg-[#FAF9F6] border border-black/5 text-[9px] text-black/60 font-semibold px-2 py-0.5 rounded">
                        #{tag}
                      </span>
                    ))}
                    {project.category === 'Development' && (
                      <span className="bg-amber-50 border border-amber-200 text-[9px] text-amber-800 font-mono font-bold px-2 py-0.5 rounded">
                        #Core-Dev-Handoff
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group bg-white rounded-3xl overflow-hidden border border-black/5 cursor-pointer shadow-none hover:shadow-xl transition-all duration-300 p-4 sm:p-6 flex flex-col md:flex-row items-center gap-6 text-left"
              >
                {/* Landscape Left image wrapper */}
                <div className="relative w-full md:w-80 aspect-video rounded-2xl overflow-hidden bg-black/5 shrink-0 self-stretch">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Category overlay */}
                  <div className="absolute top-3 left-3 bg-[#FAF9F6]/95 backdrop-blur-md border border-black/5 px-2 py-0.5 rounded-md text-[8px] font-mono tracking-wider uppercase font-semibold">
                    {project.category}
                  </div>
                </div>

                {/* Right detailed landscape grid profile */}
                <div className="flex-1 w-full space-y-3.5">
                  <div className="flex justify-between items-center text-[10px] font-mono text-black/40">
                    <span className="font-bold">PARTNER: {project.client}</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {project.year}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-sans text-black group-hover:text-amber-600 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-black/60 leading-relaxed font-normal">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-1.5">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className="bg-[#FAF9F6] border border-black/5 text-[9px] text-black/60 font-semibold px-2 py-0.5 rounded">
                          #{tag}
                        </span>
                      ))}
                      {project.category === 'Development' && (
                        <span className="bg-amber-50 border border-amber-200 text-[9px] text-amber-800 font-mono font-bold px-2 py-0.5 rounded">
                          #Fullstack-Specs
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] uppercase font-mono font-bold text-amber-800 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      <span>Inspect Details</span>
                      <ExternalLink className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty state conditional */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-white border border-black/5 rounded-3xl">
            <span className="text-3xl">📦</span>
            <p className="mt-3 text-xs text-black/40 font-mono">No projects found. New releases coming soon.</p>
          </div>
        )}

        {/* Detailed Case Study Reader Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 sm:p-6 backdrop-blur-md animate-fadeIn">
            <div className="bg-white border border-black/10 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl">
              
              {/* Close Button absolute */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 text-black/40 hover:text-black bg-[#FAF9F6] border border-black/5 hover:border-black/20 hover:scale-105 transition-all rounded-full"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Cover visual banner */}
              <div className="aspect-video w-full bg-black/5 relative">
                <img
                  src={selectedProject.coverImage}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                  <span className="bg-amber-600 px-2.5 py-1 text-[9px] font-mono uppercase tracking-wider rounded-lg font-bold">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-xl sm:text-3xl font-black font-sans leading-tight mt-2.5">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              {/* Narrative Content block */}
              <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-8 text-left">
                
                {/* Left primary descriptions */}
                <div className="md:col-span-8 space-y-6">
                  <div>
                    <h4 className="text-xs font-bold text-amber-600 uppercase tracking-widest block font-mono border-b border-black/5 pb-2">
                      Project Challenge
                    </h4>
                    <p className="text-xs sm:text-sm text-black/70 leading-relaxed mt-2.5 font-normal">
                      {selectedProject.challenge}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-emerald-700 uppercase tracking-widest block font-mono border-b border-black/5 pb-2">
                      Strategic Solution
                    </h4>
                    <p className="text-xs sm:text-sm text-black/70 leading-relaxed mt-2.5 font-normal">
                      {selectedProject.solution}
                    </p>
                  </div>
                </div>

                {/* Right side Metadata column */}
                <div className="md:col-span-4 bg-[#FAF9F6] border border-black/5 p-5 rounded-2xl space-y-4 text-xs">
                  <div>
                    <span className="text-[10px] text-black/40 font-mono uppercase tracking-wider block">Partner Client</span>
                    <span className="font-bold text-black font-sans block mt-1">{selectedProject.client}</span>
                  </div>

                  <div>
                    <span className="text-[10px] text-black/40 font-mono uppercase tracking-wider block">Production Year</span>
                    <span className="font-bold text-black font-sans block mt-1 flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5 text-black/50" />
                      {selectedProject.year}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] text-black/40 font-mono uppercase tracking-wider block">Execution Scope</span>
                    <div className="flex flex-wrap gap-1.1 flex-wrap mt-1">
                      {selectedProject.tags.map((tag, idx) => (
                        <span key={idx} className="bg-white border border-black/15 text-[9px] text-black/70 font-semibold px-2 py-0.5 rounded m-0.5 inline-block">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-black/5">
                    <button
                      onClick={() => alert(`Redirecting to live preview or presentation for: ${selectedProject.title}`)}
                      className="w-full py-2.5 bg-black hover:bg-amber-600 text-[#FAF9F6] font-bold uppercase tracking-wider text-[10px] rounded-xl transition-all flex items-center justify-center gap-2"
                    >
                      <Layers className="h-3.5 w-3.5" />
                      <span>Request Presentation</span>
                    </button>
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
