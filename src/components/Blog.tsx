import React, { useState } from 'react';
import { BLOG_POSTS } from '../data/mockData';
import { BlogPost } from '../types';
import { Calendar, User, Clock, ArrowRight, X, ChevronRight, BookOpen, Layers } from 'lucide-react';

interface BlogProps {
  blogPosts?: BlogPost[];
}

export default function Blog({ blogPosts = BLOG_POSTS }: BlogProps) {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Packaging', 'UI/UX', 'Freelancing'];

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter((p) => p.category === selectedCategory);

  return (
    <section id="blog-section" className="py-24 bg-[#FAF9F6] border-b border-black/5 text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-amber-100 border border-amber-200 text-amber-800 text-[10px] font-mono uppercase tracking-[0.14em] font-semibold mb-3">
            Design Philosophy
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-black">
            The Design Hub & Journal
          </h2>
          <p className="mt-4 text-black/60 text-xs sm:text-sm font-normal">
            Bespoke essays, structured tutorials, and strategic advice on Packaging Design, UI/UX variables systems, and scaling high-ticket freelance businesses.
          </p>
        </div>

        {/* Filter categories strip */}
        <div className="flex items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
                selectedCategory === cat
                  ? 'bg-black text-[#FAF9F6]'
                  : 'bg-white border border-black/5 text-black/60 hover:text-black hover:bg-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Post Card Lists */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="bg-white border border-black/5 rounded-3xl overflow-hidden cursor-pointer group hover:shadow-lg transition-transform duration-300 flex flex-col justify-between"
            >
              {/* Cover visual rendering */}
              <div className="relative aspect-video bg-black/5 overflow-hidden">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-4 left-4 bg-[#FAF9F6] border border-black/5 px-2.5 py-1 rounded-lg text-[9px] font-mono tracking-wider uppercase font-semibold text-black">
                  {post.category}
                </span>
              </div>

              {/* Text metadata */}
              <div className="p-6 sm:p-8 space-y-4 text-left flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-[10px] text-black/40 font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {post.publishedDate}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold font-sans text-black leading-tight group-hover:text-amber-600 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-xs text-black/60 leading-relaxed font-normal line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-5 border-t border-black/5">
                  <div className="flex items-center gap-2">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="h-6 w-6 rounded-full object-cover border border-black/10"
                      referrerPolicy="no-referrer"
                    />
                    <span className="text-[10px] font-bold text-black/70 font-sans">{post.author.name}</span>
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 group-hover:text-amber-800 transition-colors inline-flex items-center gap-1">
                    <span>Read Article</span>
                    <ChevronRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Editorial Comfortable Reading Overlay Modal */}
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 sm:p-6 backdrop-blur-md overflow-hidden animate-fadeIn">
            <div className="bg-white border border-black/10 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl flex flex-col text-left">
              
              {/* Header section stickied */}
              <div className="p-4 sm:p-6 bg-white border-b border-black/5 flex items-center justify-between sticky top-0 z-10">
                <div className="flex items-center gap-2.5">
                  <BookOpen className="h-4.5 w-4.5 text-amber-600" />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-black/40 font-bold">
                    Md. Azizul Hakim Journal • {selectedPost.category}
                  </span>
                </div>

                <button
                  onClick={() => setSelectedPost(null)}
                  className="p-1.5 text-black/40 hover:text-black bg-[#FAF9F6] rounded-full border border-black/5 hover:border-black/15 transition-all"
                >
                  <X className="h-4.5 w-4.5" />
                </button>
              </div>

              {/* Rich Body Reader layout */}
              <div className="p-6 sm:p-12 space-y-6 flex-1">
                
                {/* Visual Top Image */}
                <div className="aspect-video w-full rounded-2xl overflow-hidden bg-black/5 mb-6">
                  <img
                    src={selectedPost.coverImage}
                    alt={selectedPost.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Article typography credentials */}
                <div className="space-y-3">
                  <h1 className="text-2xl sm:text-4xl font-extrabold text-black font-sans leading-tight">
                    {selectedPost.title}
                  </h1>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-black/50 border-b border-black/5 pb-6">
                    <div className="flex items-center gap-2">
                      <img
                        src={selectedPost.author.avatar}
                        alt={selectedPost.author.name}
                        className="h-8 w-8 rounded-full object-cover border border-black/10"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <span className="font-bold text-black block text-xs">{selectedPost.author.name}</span>
                        <span className="text-[10px] uppercase text-black/40 block leading-none mt-0.5">{selectedPost.author.role}</span>
                      </div>
                    </div>
                    <span className="text-black/30">•</span>
                    <span>Published {selectedPost.publishedDate}</span>
                    <span className="text-black/30">•</span>
                    <span className="bg-amber-100 text-amber-900 px-2.5 py-0.5 rounded-full text-[10px] font-bold">
                      {selectedPost.readTime}
                    </span>
                  </div>
                </div>

                {/* Simulated Article Body Markdown parsing */}
                <div className="prose prose-slate max-w-none text-black/80 text-sm sm:text-base leading-relaxed space-y-5 pt-4">
                  {selectedPost.content.split('\n\n').map((paragraph, index) => {
                    if (paragraph.startsWith('## ')) {
                      return (
                        <h2 key={index} className="text-lg sm:text-2xl font-bold font-sans text-black pt-4">
                          {paragraph.replace('## ', '')}
                        </h2>
                      );
                    }
                    if (paragraph.startsWith('### ')) {
                      return (
                        <h3 key={index} className="text-base sm:text-lg font-bold font-sans text-black pt-2">
                          {paragraph.replace('### ', '')}
                        </h3>
                      );
                    }
                    if (paragraph.startsWith('- ')) {
                      return (
                        <ul key={index} className="list-disc list-inside space-y-1.5 pl-2 font-normal text-xs sm:text-sm text-black/75">
                          {paragraph.split('\n').map((li, lIdx) => (
                            <li key={lIdx}>{li.replace('- ', '')}</li>
                          ))}
                        </ul>
                      );
                    }
                    return (
                      <p key={index} className="font-normal text-xs sm:text-sm text-black/75 leading-relaxed">
                        {paragraph}
                      </p>
                    );
                  })}
                </div>

                {/* Simple subscription CTA inside article reading view to capture emails */}
                <div className="mt-12 p-6 sm:p-8 bg-[#FAF9F6] border border-black/10 rounded-2xl text-center space-y-3">
                  <h4 className="text-sm font-bold text-black uppercase font-sans tracking-wide">
                    Enjoyed this aesthetic breakdown?
                  </h4>
                  <p className="text-xs text-black/60 max-w-md mx-auto">
                    Azizul publishes a bi-weekly newsletter containing CAD shapes, responsive variables kits, and code-free Framer resources. Join 5,000+ creators.
                  </p>
                  <div className="flex max-w-xs mx-auto">
                    <input
                      type="email"
                      placeholder="Your secure email"
                      className="px-3 py-2 bg-white text-xs border border-black/10 rounded-l-xl focus:outline-none w-full text-black"
                    />
                    <button
                      onClick={() => alert('Successfully joined the premium list!')}
                      className="px-4 py-2 bg-black text-[#FAF9F6] text-[10px] font-bold uppercase rounded-r-xl hover:bg-amber-600 transition-colors flex-shrink-0"
                    >
                      Subscribe
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
