import React, { useState } from 'react';
import { Course, DesignResource, BlogPost, PortfolioProject, HomePageConfig, FAQItem, SpecializationItem } from '../types';
import {
  Settings, LayoutDashboard, Library, BookOpen, ShoppingBag, Award, MessageSquare,
  PlusCircle, Trash2, LineChart, TrendingUp, Users, DollarSign, Download, Eye,
  CheckCircle, RefreshCw, Send, AlertCircle, Sparkles, HelpCircle, FileText
} from 'lucide-react';

// Define the Inquiry interface
export interface Inquiry {
  id: string;
  name: string;
  email: string;
  type: string;
  message: string;
  date: string;
  status: 'new' | 'replied' | 'archived';
  replyText?: string;
}

interface AdminDashboardProps {
  courses: Course[];
  setCourses: React.Dispatch<React.SetStateAction<Course[]>>;
  resources: DesignResource[];
  setResources: React.Dispatch<React.SetStateAction<DesignResource[]>>;
  blogPosts: BlogPost[];
  setBlogPosts: React.Dispatch<React.SetStateAction<BlogPost[]>>;
  inquiries: Inquiry[];
  setInquiries: React.Dispatch<React.SetStateAction<Inquiry[]>>;
  ownerConfig: {
    name: string;
    tagline: string;
    email: string;
    whatsapp: string;
    photoUrl?: string;
    heroImageUrl?: string;
    heroProjectTitle?: string;
    heroProjectSub?: string;
  };
  setOwnerConfig: (config: {
    name: string;
    tagline: string;
    email: string;
    whatsapp: string;
    photoUrl?: string;
    heroImageUrl?: string;
    heroProjectTitle?: string;
    heroProjectSub?: string;
  }) => void;
  homeConfig: HomePageConfig;
  setHomeConfig: (newConfig: HomePageConfig) => void;
  faqs: FAQItem[];
  setFaqs: (newFaqs: FAQItem[]) => void;
}

export default function AdminDashboard({
  courses,
  setCourses,
  resources,
  setResources,
  blogPosts,
  setBlogPosts,
  inquiries,
  setInquiries,
  ownerConfig,
  setOwnerConfig,
  homeConfig,
  setHomeConfig,
  faqs,
  setFaqs
}: AdminDashboardProps) {
  const [activePane, setActivePane] = useState<'analytics' | 'courses' | 'resources' | 'blogs' | 'inquiries' | 'settings' | 'development' | 'homepage'>('analytics');

  // Input states for adding a course
  const [newCourseTitle, setNewCourseTitle] = useState('');
  const [newCoursePrice, setNewCoursePrice] = useState(49);
  const [newCourseCategory, setNewCourseCategory] = useState('Packaging Design');
  const [newCourseTagline, setNewCourseTagline] = useState('');
  const [newCourseDesc, setNewCourseDesc] = useState('');

  // Input states for adding a resource
  const [newResourceTitle, setNewResourceTitle] = useState('');
  const [newResourcePrice, setNewResourcePrice] = useState(19);
  const [newResourceCategory, setNewResourceCategory] = useState<'Packaging' | 'Figma Kits' | '3D Mockups' | 'Bundles' | 'Assets'>('Figma Kits');
  const [newResourceSoftware, setNewResourceSoftware] = useState('Figma');
  const [newResourceDesc, setNewResourceDesc] = useState('');

  // Input states for adding a blog post
  const [newBlogTitle, setNewBlogTitle] = useState('');
  const [newBlogCategory, setNewBlogCategory] = useState<'Branding' | 'Packaging' | 'UI/UX' | 'Freelancing' | 'Business' | 'Tutorial'>('UI/UX');
  const [newBlogExcerpt, setNewBlogExcerpt] = useState('');
  const [newBlogContent, setNewBlogContent] = useState('');

  // Reply state
  const [activeReplyInquiryId, setActiveReplyInquiryId] = useState<string | null>(null);
  const [replyText, setReplyText] = useState('');

  // Setting changes state
  const [tempName, setTempName] = useState(ownerConfig.name);
  const [tempTagline, setTempTagline] = useState(ownerConfig.tagline);
  const [tempEmail, setTempEmail] = useState(ownerConfig.email);
  const [tempWhatsapp, setTempWhatsapp] = useState(ownerConfig.whatsapp);
  const [tempPhotoUrl, setTempPhotoUrl] = useState(ownerConfig.photoUrl || '');
  const [tempHeroImageUrl, setTempHeroImageUrl] = useState(ownerConfig.heroImageUrl || '');
  const [tempHeroProjectTitle, setTempHeroProjectTitle] = useState(ownerConfig.heroProjectTitle || '');
  const [tempHeroProjectSub, setTempHeroProjectSub] = useState(ownerConfig.heroProjectSub || '');

  // Home Page Section Customizer States
  const [tempHeroBadge, setTempHeroBadge] = useState(homeConfig?.heroBadge || '');
  const [tempHeroLine1, setTempHeroLine1] = useState(homeConfig?.heroLine1 || '');
  const [tempHeroLine2, setTempHeroLine2] = useState(homeConfig?.heroLine2 || '');
  const [tempHeroLine3Metallic, setTempHeroLine3Metallic] = useState(homeConfig?.heroLine3Metallic || '');
  const [tempHeroTagsList, setTempHeroTagsList] = useState(homeConfig?.heroTagsList || '');
  const [tempHeroParagraph, setTempHeroParagraph] = useState(homeConfig?.heroParagraph || '');

  const [tempAboutOverHeading, setTempAboutOverHeading] = useState(homeConfig?.aboutOverHeading || '');
  const [tempAboutHeadingName, setTempAboutHeadingName] = useState(homeConfig?.aboutHeadingName || '');
  const [tempAboutShortPitch, setTempAboutShortPitch] = useState(homeConfig?.aboutShortPitch || '');
  const [tempAboutParagraph1, setTempAboutParagraph1] = useState(homeConfig?.aboutParagraph1 || '');
  const [tempAboutParagraph2, setTempAboutParagraph2] = useState(homeConfig?.aboutParagraph2 || '');
  const [tempAboutMandate, setTempAboutMandate] = useState(homeConfig?.aboutMandate || '');

  // Specializations (array of 4 objects)
  const [tempSpecializations, setTempSpecializations] = useState<SpecializationItem[]>(() => 
    homeConfig?.aboutSpecializations || []
  );

  // Partner Verticals as a comma separated text
  const [tempPartnerVerts, setTempPartnerVerts] = useState(() => 
    (homeConfig?.aboutPartnerVerts || []).join(', ')
  );

  // FAQ config copy state
  const [tempFaqOverheading, setTempFaqOverheading] = useState(homeConfig?.faqOverheading || '');
  const [tempFaqHeading, setTempFaqHeading] = useState(homeConfig?.faqHeading || '');
  const [tempFaqSubtext, setTempFaqSubtext] = useState(homeConfig?.faqSubtext || '');

  // FAQ expandable/editable list state
  const [faqItemsList, setFaqItemsList] = useState<FAQItem[]>(() => faqs || []);

  // Contact copy states
  const [tempContactBadge, setTempContactBadge] = useState(homeConfig?.contactBadge || '');
  const [tempContactHeading, setTempContactHeading] = useState(homeConfig?.contactHeading || '');
  const [tempContactParagraph, setTempContactParagraph] = useState(homeConfig?.contactParagraph || '');

  // Handler for saving home configuration changes
  const handleApplyHomeConfig = (e: React.FormEvent) => {
    e.preventDefault();
    const updated: HomePageConfig = {
      heroBadge: tempHeroBadge,
      heroLine1: tempHeroLine1,
      heroLine2: tempHeroLine2,
      heroLine3Metallic: tempHeroLine3Metallic,
      heroTagsList: tempHeroTagsList,
      heroParagraph: tempHeroParagraph,
      aboutOverHeading: tempAboutOverHeading,
      aboutHeadingName: tempAboutHeadingName,
      aboutShortPitch: tempAboutShortPitch,
      aboutParagraph1: tempAboutParagraph1,
      aboutParagraph2: tempAboutParagraph2,
      aboutMandate: tempAboutMandate,
      aboutSpecializations: tempSpecializations,
      aboutPartnerVerts: tempPartnerVerts.split(',').map(s => s.trim()).filter(Boolean),
      faqOverheading: tempFaqOverheading,
      faqHeading: tempFaqHeading,
      faqSubtext: tempFaqSubtext,
      contactBadge: tempContactBadge,
      contactHeading: tempContactHeading,
      contactParagraph: tempContactParagraph
    };
    setHomeConfig(updated);
    setFaqs(faqItemsList);
    alert('🔒 Homepage and custom sections applied successfully!');
  };

  // Stats calculation
  const totalCoursesSales = courses.length * 1420; // Simulated income metrics
  const totalResourcesSales = resources.reduce((acc, r) => acc + (r.downloadsCount * r.price), 0);
  const totalRevenue = totalCoursesSales + totalResourcesSales;
  const totalStudents = courses.reduce((acc, c) => acc + (c.reviewsCount * 12), 0);
  const totalResourceDownloads = resources.reduce((acc, r) => acc + r.downloadsCount, 0);

  const handleAddCourse = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCourseTitle) return;

    const newObj: Course = {
      id: `course-${Date.now()}`,
      title: newCourseTitle,
      category: newCourseCategory,
      tagline: newCourseTagline || 'An advanced look into core industry design secrets.',
      description: newCourseDesc || 'A course launched from Md. Azizul Hakim studio. All resource packages included directly inside student area.',
      coverImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80',
      originalPrice: newCoursePrice * 2,
      salePrice: newCoursePrice,
      rating: 5.0,
      reviewsCount: 1,
      durationHrs: 15,
      lecturesCount: 22,
      difficulty: 'All Levels',
      features: ['Source templates included', 'Personal chat mentorship eligibility'],
      skillsGained: [newCourseCategory, 'Dynamic Business Pitching'],
      modules: [
        {
          id: `mod-1`,
          title: 'Unit 1: Fundamental Concepts and Asset Layouts',
          lessons: [
            { id: `les-1`, title: 'Lesson 1.1 Overview and Toolkit Setup', duration: '15:20', isFreePreview: true, videoUrl: 'yUzKb6DG-ks' },
            { id: `les-2`, title: 'Lesson 1.2 Core Analytical Production Workflow', duration: '25:10', isFreePreview: false }
          ]
        }
      ]
    };

    setCourses([newObj, ...courses]);
    setNewCourseTitle('');
    setNewCourseTagline('');
    setNewCourseDesc('');
    alert('🎉 Course successfully published to the live academy list!');
  };

  const handleAddResource = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newResourceTitle) return;

    const newObj: DesignResource = {
      id: `resource-${Date.now()}`,
      title: newResourceTitle,
      category: newResourceCategory,
      description: newResourceDesc || 'Premium digital delivery designed by Md. Azizul Hakim. Sync values directly inside your active workspace layout.',
      price: newResourcePrice,
      originalPrice: newResourcePrice * 1.5,
      coverImage: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80',
      software: newResourceSoftware,
      fileSize: '45 MB',
      downloadsCount: 0,
      rating: 5.0,
      features: ['Comes with global commercial license', 'Vector source folders included']
    };

    setResources([newObj, ...resources]);
    setNewResourceTitle('');
    setNewResourceDesc('');
    alert('🎉 Resource published and made purchasable inside marketplace store!');
  };

  const handleAddBlog = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newBlogTitle) return;

    const newObj: BlogPost = {
      id: `blog-${Date.now()}`,
      title: newBlogTitle,
      slug: newBlogTitle.toLowerCase().replace(/[^a-z0-9]/g, '-'),
      category: newBlogCategory,
      excerpt: newBlogExcerpt || 'Bespoke design strategies direct from Md. Azizul Hakim workspace.',
      content: newBlogContent || 'This is full-text content ready for professional designers.',
      coverImage: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=600&q=80',
      readTime: '5 mins read',
      publishedDate: 'Today',
      author: {
        name: ownerConfig.name,
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
        role: 'Studio Director'
      }
    };

    setBlogPosts([newObj, ...blogPosts]);
    setNewBlogTitle('');
    setNewBlogExcerpt('');
    setNewBlogContent('');
    alert('🎉 Journal and educational tutorial successfully posted!');
  };

  const handleDeleteCourse = (id: string) => {
    if (confirm('Are you select delete for this premium course? This cannot be undone.')) {
      setCourses(courses.filter((c) => c.id !== id));
    }
  };

  const handleDeleteResource = (id: string) => {
    if (confirm('Are you select delete for this digital asset resource?')) {
      setResources(resources.filter((r) => r.id !== id));
    }
  };

  const handleDeleteBlog = (id: string) => {
    if (confirm('Delete this essay journal item?')) {
      setBlogPosts(blogPosts.filter((b) => b.id !== id));
    }
  };

  const handleInquiryReplySubmit = (e: React.FormEvent, inquiryId: string) => {
    e.preventDefault();
    if (!replyText) return;

    setInquiries(inquiries.map((inq) => {
      if (inq.id === inquiryId) {
        return {
          ...inq,
          status: 'replied',
          replyText: replyText
        };
      }
      return inq;
    }));

    setReplyText('');
    setActiveReplyInquiryId(null);
    alert('📨 Direct email response successfully generated and sent to target mailbox!');
  };

  const handleArchiveInquiry = (id: string) => {
    setInquiries(inquiries.map((inq) => {
      if (inq.id === id) {
        return { ...inq, status: 'archived' };
      }
      return inq;
    }));
  };

  const handleApplySettings = (e: React.FormEvent) => {
    e.preventDefault();
    setOwnerConfig({
      name: tempName,
      tagline: tempTagline,
      email: tempEmail,
      whatsapp: tempWhatsapp,
      photoUrl: tempPhotoUrl,
      heroImageUrl: tempHeroImageUrl,
      heroProjectTitle: tempHeroProjectTitle,
      heroProjectSub: tempHeroProjectSub
    });
    alert('🔒 Brand profile parameters applied globally. Main navigation headers updated.');
  };

  return (
    <section id="admin-studio-pane" className="py-24 bg-[#FAF9F6] border-b border-black/5 text-left text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Title banner */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 border border-amber-200 text-amber-800 text-[10px] font-mono uppercase tracking-[0.2em] font-semibold mb-3">
            <Settings className="h-3 w-3 animate-spin" />
            <span>Md. Azizul Hakim Control Console</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-black">
            Studio Dashboard
          </h2>
          <p className="text-[#1A1A1A]/60 text-xs sm:text-sm font-normal mt-2">
            Configure courses, design marketplace components, communicate with clientele, and inspect global analytics.
          </p>
        </div>

        {/* Dashboard Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Administrative Switcher Buttons */}
          <div className="lg:col-span-3 bg-white border border-black/10 rounded-3xl p-5 space-y-2">
            <span className="text-[9px] font-mono uppercase font-bold tracking-widest text-[#1A1A1A]/40 block mb-3 pl-2">
              Management Panes
            </span>

            <button
              onClick={() => setActivePane('analytics')}
              className={`w-full flex items-center gap-3 px-4 py-3 text-xs font-bold uppercase tracking-wider rounded-xl transition-all ${
                activePane === 'analytics'
                  ? 'bg-black text-[#FAF9F6] shadow-sm'
                  : 'text-black/60 hover:text-black hover:bg-black/5'
              }`}
            >
              <LayoutDashboard className="h-4.5 w-4.5" />
              <span>Studio Analytics</span>
            </button>

            <button
              onClick={() => setActivePane('courses')}
              className={`w-full flex items-center gap-3 px-4 py-3 text-xs font-bold uppercase tracking-wider rounded-xl transition-all ${
                activePane === 'courses'
                  ? 'bg-black text-[#FAF9F6] shadow-sm'
                  : 'text-black/60 hover:text-black hover:bg-black/5'
              }`}
            >
              <BookOpen className="h-4.5 w-4.5" />
              <span>Catalog Courses</span>
              <span className="ml-auto text-[10px] bg-black/10 text-black px-2 py-0.5 rounded-full font-mono font-bold">
                {courses.length}
              </span>
            </button>

            <button
              onClick={() => setActivePane('resources')}
              className={`w-full flex items-center gap-3 px-4 py-3 text-xs font-bold uppercase tracking-wider rounded-xl transition-all ${
                activePane === 'resources'
                  ? 'bg-black text-[#FAF9F6] shadow-sm'
                  : 'text-black/60 hover:text-black hover:bg-black/5'
              }`}
            >
              <ShoppingBag className="h-4.5 w-4.5" />
              <span>Resources Store</span>
              <span className="ml-auto text-[10px] bg-black/10 text-black px-2 py-0.5 rounded-full font-mono font-bold">
                {resources.length}
              </span>
            </button>

            <button
              onClick={() => setActivePane('blogs')}
              className={`w-full flex items-center gap-3 px-4 py-3 text-xs font-bold uppercase tracking-wider rounded-xl transition-all ${
                activePane === 'blogs'
                  ? 'bg-black text-[#FAF9F6] shadow-sm'
                  : 'text-black/60 hover:text-black hover:bg-black/5'
              }`}
            >
              <Award className="h-4.5 w-4.5" />
              <span>Philosophy Blogs</span>
              <span className="ml-auto text-[10px] bg-black/10 text-black px-2 py-0.5 rounded-full font-mono font-bold">
                {blogPosts.length}
              </span>
            </button>

            <button
              onClick={() => setActivePane('inquiries')}
              className={`w-full flex items-center gap-3 px-4 py-3 text-xs font-bold uppercase tracking-wider rounded-xl transition-all relative ${
                activePane === 'inquiries'
                  ? 'bg-black text-[#FAF9F6] shadow-sm'
                  : 'text-black/60 hover:text-black hover:bg-black/5'
              }`}
            >
              <MessageSquare className="h-4.5 w-4.5" />
              <span>Inquiries Hub</span>
              {inquiries.filter((i) => i.status === 'new').length > 0 && (
                <span className="ml-auto text-[9px] bg-amber-600 text-[#FAF9F6] px-2 py-0.5 rounded-full font-black animate-pulse">
                  {inquiries.filter((i) => i.status === 'new').length} NEW
                </span>
              )}
            </button>

            <button
              onClick={() => setActivePane('homepage')}
              className={`w-full flex items-center gap-3 px-4 py-3 text-xs font-bold uppercase tracking-wider rounded-xl transition-all ${
                activePane === 'homepage'
                  ? 'bg-black text-[#FAF9F6] shadow-sm'
                  : 'text-black/60 hover:text-black hover:bg-black/5'
              }`}
            >
              <LayoutDashboard className="h-4.5 w-4.5 text-amber-500" />
              <span>Home Sections</span>
            </button>

            <button
               onClick={() => setActivePane('settings')}
               className={`w-full flex items-center gap-3 px-4 py-3 text-xs font-bold uppercase tracking-wider rounded-xl transition-all ${
                 activePane === 'settings'
                   ? 'bg-black text-[#FAF9F6] shadow-sm'
                   : 'text-black/60 hover:text-black hover:bg-black/5'
               }`}
             >
              <Settings className="h-4.5 w-4.5" />
              <span>Global Settings</span>
            </button>

            <button
              onClick={() => setActivePane('development')}
              className={`w-full flex items-center gap-3 px-4 py-3 text-xs font-bold uppercase tracking-wider rounded-xl transition-all ${
                activePane === 'development'
                  ? 'bg-amber-600 text-[#FAF9F6] shadow-sm font-black border border-amber-700/10'
                  : 'text-black/60 hover:text-black hover:bg-black/5'
              }`}
            >
              <Settings className="h-4.5 w-4.5 text-[#D97706]" />
              <span>Dev Console</span>
            </button>
          </div>

          {/* Right Layout Module panels */}
          <div className="lg:col-span-9 bg-white border border-black/10 rounded-3xl p-6 sm:p-8 min-h-[500px]">
            
            {/* PANEL 1: ANALYTICS OVERVIEW */}
            {activePane === 'analytics' && (
              <div className="space-y-8 animate-fadeIn">
                <h3 className="text-xl font-bold text-black border-b border-black/5 pb-3">
                  Studio Insights & Performance Ledger
                </h3>

                {/* Grid performance status */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="p-5 bg-[#FAF9F6] border border-black/5 rounded-2xl">
                    <DollarSign className="h-6 w-6 text-emerald-600 mb-2" />
                    <span className="text-[10px] text-black/40 font-mono uppercase block font-bold">Simulated Gross Billing</span>
                    <span className="text-xl font-mono font-black text-black block mt-1">
                      ${totalRevenue.toLocaleString()} USD
                    </span>
                    <span className="text-[9px] text-emerald-700 font-bold font-mono block mt-1.5 flex items-center gap-1 mt-3">
                      <TrendingUp className="h-3.5 w-3.5" />
                      +42% from last month
                    </span>
                  </div>

                  <div className="p-5 bg-[#FAF9F6] border border-black/5 rounded-2xl">
                    <Users className="h-6 w-6 text-indigo-600 mb-2" />
                    <span className="text-[10px] text-black/40 font-mono uppercase block font-bold">Total Enrolled Alumni</span>
                    <span className="text-xl font-mono font-black text-black block mt-1">
                      {totalStudents.toLocaleString()} Students
                    </span>
                    <span className="text-[9px] text-black/50 block mt-1.5 font-sans mt-3">
                      Global remote reach active
                    </span>
                  </div>

                  <div className="p-5 bg-[#FAF9F6] border border-black/5 rounded-2xl">
                    <Download className="h-6 w-6 text-amber-600 mb-2" />
                    <span className="text-[10px] text-black/40 font-mono uppercase block font-bold">Digital Marketplace Sales</span>
                    <span className="text-xl font-mono font-black text-black block mt-1">
                      {totalResourceDownloads.toLocaleString()} Downloads
                    </span>
                    <span className="text-[9px] text-black/50 block mt-1.5 font-sans mt-3">
                      Figma, CAD & Blender packs
                    </span>
                  </div>
                </div>

                {/* Simple Simulated Earnings Bar Graph Representation */}
                <div className="bg-[#FAF9F6] border border-black/5 p-6 rounded-2xl">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xs font-mono uppercase tracking-wider text-black/40 block font-bold">Monthly Sales Velocity</span>
                    <span className="text-[10px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded font-mono">STABLE DEVELOPMENT</span>
                  </div>

                  <div className="h-32 flex items-end justify-between gap-2 pt-6">
                    <div className="flex-1 flex flex-col items-center gap-1.5">
                      <div className="w-full bg-black/10 hover:bg-black transition-all rounded-xs" style={{ height: '35%' }}></div>
                      <span className="text-[9px] font-mono font-bold text-black/40">JAN</span>
                    </div>
                    <div className="flex-1 flex flex-col items-center gap-1.5">
                      <div className="w-full bg-black/10 hover:bg-black transition-all rounded-xs" style={{ height: '52%' }}></div>
                      <span className="text-[9px] font-mono font-bold text-black/40">FEB</span>
                    </div>
                    <div className="flex-1 flex flex-col items-center gap-1.5">
                      <div className="w-full bg-black/10 hover:bg-black transition-all rounded-xs" style={{ height: '62%' }}></div>
                      <span className="text-[9px] font-mono font-bold text-black/40">MAR</span>
                    </div>
                    <div className="flex-1 flex flex-col items-center gap-1.5">
                      <div className="w-full bg-black/10 hover:bg-black transition-all rounded-xs" style={{ height: '80%' }}></div>
                      <span className="text-[9px] font-mono font-bold text-black/40">APR</span>
                    </div>
                    <div className="flex-1 flex flex-col items-center gap-1.5">
                      <div className="w-full bg-amber-600 hover:bg-amber-700 transition-all rounded-xs" style={{ height: '95%' }}></div>
                      <span className="text-[9px] font-mono font-bold text-black/40">MAY</span>
                    </div>
                  </div>
                </div>

                {/* Fast audit block */}
                <div className="flex items-center gap-3 text-xs p-4 bg-emerald-50 border border-emerald-250 rounded-xl text-emerald-800">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                  <span>No data discrepancies found. SSL encryption running, and payment routing simulation active.</span>
                </div>
              </div>
            )}

            {/* PANEL 2: MANAGE COURSES */}
            {activePane === 'courses' && (
              <div className="space-y-8 animate-fadeIn">
                <div className="flex justify-between items-center border-b border-black/5 pb-3">
                  <h3 className="text-xl font-bold text-black">Academics Curriculum</h3>
                </div>

                {/* Form to submit course */}
                <form onSubmit={handleAddCourse} className="p-5 bg-[#FAF9F6] border border-black/5 rounded-2xl text-left space-y-4">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-black flex items-center gap-1">
                    <PlusCircle className="h-4.5 w-4.5 text-black/40" />
                    <span>Upload New Training Course Syllabus</span>
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-black/40 font-bold mb-1">Course Title:</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Cinema 4D Product Geometry"
                        value={newCourseTitle}
                        onChange={(e) => setNewCourseTitle(e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-black/10 rounded-xl text-xs focus:outline-none focus:border-black font-sans text-black"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-black/40 font-bold mb-1">Price (USD):</label>
                      <input
                        type="number"
                        required
                        value={newCoursePrice}
                        onChange={(e) => setNewCoursePrice(parseInt(e.target.value) || 0)}
                        className="w-full px-3 py-2 bg-white border border-black/10 rounded-xl text-xs focus:outline-none focus:border-black font-mono text-black"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-black/40 font-bold mb-1">Course Sector:</label>
                      <select
                        value={newCourseCategory}
                        onChange={(e) => setNewCourseCategory(e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-black/10 rounded-xl text-xs focus:outline-none focus:border-black font-sans text-black"
                      >
                        <option value="Packaging Design">Packaging Design</option>
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="Freelancing & Business">Freelancing & Business</option>
                        <option value="3D Visualization">3D Visualization</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-black/40 font-bold mb-1">Syllabus Tagline Highlight:</label>
                      <input
                        type="text"
                        placeholder="Master packaging or typography layouts"
                        value={newCourseTagline}
                        onChange={(e) => setNewCourseTagline(e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-black/10 rounded-xl text-xs focus:outline-none focus:border-black font-sans text-black"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-black/40 font-bold mb-1">Introductory Paragraph Description:</label>
                    <textarea
                      rows={2}
                      placeholder="Give details about lectures duration etc..."
                      value={newCourseDesc}
                      onChange={(e) => setNewCourseDesc(e.target.value)}
                      className="w-full px-3 py-2.5 bg-white border border-black/10 rounded-xl text-xs focus:outline-none focus:border-black font-sans text-black"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-black hover:bg-amber-600 text-white rounded-xl text-xs font-bold uppercase tracking-widest transition-all"
                  >
                    Publish Course Live
                  </button>
                </form>

                {/* List dynamic Courses */}
                <div className="space-y-3">
                  <span className="text-[10px] font-mono uppercase font-bold tracking-widest text-[#1A1A1A]/40 block pl-1">
                    Live Published Academics ({courses.length})
                  </span>

                  <div className="space-y-2">
                    {courses.map((c) => (
                      <div key={c.id} className="p-4 bg-[#FAF9F6] border border-black/5 rounded-xl flex items-center justify-between text-left">
                        <div>
                          <span className="text-[9px] font-mono uppercase text-amber-600 font-bold">{c.category}</span>
                          <h4 className="text-xs sm:text-sm font-bold text-black mt-0.5">{c.title}</h4>
                          <span className="text-[9px] text-[#1A1A1A]/40 font-mono tracking-wider font-bold uppercase block mt-1 bg-white border border-black/5 px-2 py-0.5 rounded-lg inline-block text-left">
                            ${c.salePrice} USD
                          </span>
                        </div>
                        <button
                          onClick={() => handleDeleteCourse(c.id)}
                          className="p-2 bg-white border border-black/5 hover:bg-red-50 text-black/40 hover:text-red-600 rounded-lg transition-colors scale-90"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )}

            {/* PANEL 3: MANAGE STORE RESOURCES */}
            {activePane === 'resources' && (
              <div className="space-y-8 animate-fadeIn">
                <div className="flex justify-between items-center border-b border-black/5 pb-3">
                  <h3 className="text-xl font-bold text-black">Digital Resource Assets</h3>
                </div>

                {/* Form to submit resource */}
                <form onSubmit={handleAddResource} className="p-5 bg-[#FAF9F6] border border-black/5 rounded-2xl text-left space-y-4">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-black flex items-center gap-1">
                    <PlusCircle className="h-4.5 w-4.5" />
                    <span>Post New Marketplace Product Asset</span>
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-black/40 font-bold mb-1">Product Title name:</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Minimal Botanical Scent Mockups"
                        value={newResourceTitle}
                        onChange={(e) => setNewResourceTitle(e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-black/10 rounded-xl text-xs focus:outline-none focus:border-black font-sans text-black"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-black/40 font-bold mb-1">Acquisition Price (USD):</label>
                      <input
                        type="number"
                        required
                        value={newResourcePrice}
                        onChange={(e) => setNewResourcePrice(parseInt(e.target.value) || 0)}
                        className="w-full px-3 py-2 bg-white border border-black/10 rounded-xl text-xs focus:outline-none focus:border-black font-mono text-black"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-black/40 font-bold mb-1">Source Category:</label>
                      <select
                        value={newResourceCategory}
                        onChange={(e) => setNewResourceCategory(e.target.value as any)}
                        className="w-full px-3 py-2 bg-white border border-black/10 rounded-xl text-xs focus:outline-none focus:border-black font-sans text-black"
                      >
                        <option value="Packaging">Packaging CAD Dielines</option>
                        <option value="Figma Kits">Figma UI Kits</option>
                        <option value="3D Mockups">3D Studio Mockups</option>
                        <option value="Bundles">Presentation Bundles</option>
                        <option value="Assets">Gradients & Assets</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-black/40 font-bold mb-1">Required Software:</label>
                      <input
                        type="text"
                        required
                        placeholder="Photoshop, Blender, Figma"
                        value={newResourceSoftware}
                        onChange={(e) => setNewResourceSoftware(e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-black/10 rounded-xl text-xs focus:outline-none focus:border-black font-sans text-black"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-black/40 font-bold mb-1">Short Description Overview:</label>
                    <textarea
                      rows={2}
                      placeholder="e.g. A gorgeous toolkit with auto-layout variables setup..."
                      value={newResourceDesc}
                      onChange={(e) => setNewResourceDesc(e.target.value)}
                      className="w-full px-3 py-2.5 bg-white border border-black/10 rounded-xl text-xs focus:outline-none focus:border-black font-sans text-black"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-black hover:bg-amber-600 text-white rounded-xl text-xs font-bold uppercase tracking-widest transition-all"
                  >
                    Publish to Store
                  </button>
                </form>

                {/* List dynamic resources */}
                <div className="space-y-3">
                  <span className="text-[10px] font-mono uppercase font-bold tracking-widest text-[#1A1A1A]/40 block pl-1">
                    Store Resources ({resources.length})
                  </span>

                  <div className="space-y-2">
                    {resources.map((res) => (
                      <div key={res.id} className="p-4 bg-[#FAF9F6] border border-black/5 rounded-xl flex items-center justify-between text-left">
                        <div>
                          <span className="text-[9px] font-mono uppercase text-black/40 tracking-wider block">{res.category} • {res.software}</span>
                          <h4 className="text-xs sm:text-sm font-bold text-black mt-0.5">{res.title}</h4>
                          <span className="text-[10px] text-black font-mono font-black block mt-1">${res.price} USD</span>
                        </div>
                        <button
                          onClick={() => handleDeleteResource(res.id)}
                          className="p-2 bg-white border border-black/5 hover:bg-red-50 text-black/40 hover:text-red-600 rounded-lg transition-colors scale-90"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )}

            {/* PANEL 4: MANAGE BLOGS */}
            {activePane === 'blogs' && (
              <div className="space-y-8 animate-fadeIn">
                <div className="flex justify-between items-center border-b border-black/5 pb-3">
                  <h3 className="text-xl font-bold text-black">Philosophy Journal Entries</h3>
                </div>

                {/* Form to submit blog */}
                <form onSubmit={handleAddBlog} className="p-5 bg-[#FAF9F6] border border-black/5 rounded-2xl text-left space-y-4">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-black flex items-center gap-1">
                    <PlusCircle className="h-4.5 w-4.5" />
                    <span>Compose New Tutorial Article Log</span>
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-black/40 font-bold mb-1">Article Title:</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Structuring Hexagonal Friction CAD shapes"
                        value={newBlogTitle}
                        onChange={(e) => setNewBlogTitle(e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-black/10 rounded-xl text-xs focus:outline-none focus:border-black font-sans text-black"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-black/40 font-bold mb-1">Category:</label>
                      <select
                        value={newBlogCategory}
                        onChange={(e) => setNewBlogCategory(e.target.value as any)}
                        className="w-full px-3 py-2 bg-white border border-black/10 rounded-xl text-xs focus:outline-none focus:border-black font-sans text-black"
                      >
                        <option value="Packaging">Packaging</option>
                        <option value="UI/UX">UI/UX</option>
                        <option value="Freelancing">Freelancing</option>
                        <option value="Business">Business</option>
                        <option value="Tutorial">Tutorial</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-black/40 font-bold mb-1">Excerpt Abstract Overview:</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. A deep analytical brief outlining dielines..."
                      value={newBlogExcerpt}
                      onChange={(e) => setNewBlogExcerpt(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-black/10 rounded-xl text-xs focus:outline-none focus:border-black font-sans text-black"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-black/40 font-bold mb-1">Full Article rich content:</label>
                    <textarea
                      rows={4}
                      placeholder="Write your article essays here..."
                      value={newBlogContent}
                      onChange={(e) => setNewBlogContent(e.target.value)}
                      className="w-full px-3 py-2.5 bg-white border border-black/10 rounded-xl text-xs focus:outline-none focus:border-black font-sans text-black"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-black hover:bg-amber-600 text-white rounded-xl text-xs font-bold uppercase tracking-widest transition-all"
                  >
                    Post Journal Entry
                  </button>
                </form>

                {/* List dynamic blogs */}
                <div className="space-y-3">
                  <span className="text-[10px] font-mono uppercase font-bold tracking-widest text-[#1A1A1A]/40 block pl-1">
                    Published Essays & Guides ({blogPosts.length})
                  </span>

                  <div className="space-y-2">
                    {blogPosts.map((post) => (
                      <div key={post.id} className="p-4 bg-[#FAF9F6] border border-black/5 rounded-xl flex items-center justify-between text-left">
                        <div>
                          <span className="text-[9px] font-mono uppercase text-amber-600 font-bold">{post.category}</span>
                          <h4 className="text-xs sm:text-sm font-bold text-black mt-0.5">{post.title}</h4>
                          <span className="text-[9px] text-[#1A1A1A]/40 block mt-1">Written: {post.publishedDate} • {post.readTime}</span>
                        </div>
                        <button
                          onClick={() => handleDeleteBlog(post.id)}
                          className="p-2 bg-white border border-black/5 hover:bg-red-50 text-black/40 hover:text-red-600 rounded-lg transition-colors scale-90"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )}

            {/* PANEL 5: MANAGE INQUIRIES */}
            {activePane === 'inquiries' && (
              <div className="space-y-8 animate-fadeIn text-left">
                <div className="border-b border-black/5 pb-3 flex justify-between items-center">
                  <h3 className="text-xl font-bold text-black">Client Inquiry Hub</h3>
                  <span className="text-[10px] font-mono font-bold bg-[#FAF9F6] text-black px-2.5 py-1 rounded">
                    REAL-TIME SYNC
                  </span>
                </div>

                {inquiries.length === 0 ? (
                  <div className="py-20 text-center bg-[#FAF9F6] border border-black/5 rounded-2xl">
                    <span className="text-2xl text-black/35 block">📨</span>
                    <p className="text-xs text-black/45 font-mono mt-2">No client briefs received yet.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {inquiries.map((inq) => {
                      const isReplied = inq.status === 'replied';
                      const isArchived = inq.status === 'archived';
                      return (
                        <div
                          key={inq.id}
                          className={`p-5 rounded-2xl border transition-all text-left space-y-3 ${
                            isArchived ? 'opacity-40 bg-[#FAF9F6]' : 'bg-[#FAF9F6]/40 border-black/5 hover:border-black/10'
                          }`}
                        >
                          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                            <div>
                              <span className="text-[9px] font-mono uppercase tracking-widest text-black/40 block">From:</span>
                              <strong className="text-xs text-black block">{inq.name} ({inq.email})</strong>
                            </div>

                            <div className="flex items-center gap-1.5 flex-wrap">
                              <span className="px-2 py-0.5 rounded text-[8px] font-mono font-bold uppercase bg-black text-[#FAF9F6]">
                                {inq.type}
                              </span>
                              
                              <span className={`px-2 py-0.5 rounded text-[8px] font-mono uppercase font-bold ${
                                inq.status === 'new'
                                  ? 'bg-amber-100 text-amber-900 border border-amber-250 animate-pulse'
                                  : isReplied
                                  ? 'bg-emerald-50 text-emerald-800 border border-emerald-250'
                                  : 'bg-black/5 text-black/50'
                              }`}>
                                {inq.status}
                              </span>
                            </div>
                          </div>

                          <div className="p-3 bg-white border border-black/5 rounded-xl text-xs text-black/75 leading-relaxed font-normal">
                            "{inq.message}"
                          </div>

                          {inq.replyText && (
                            <div className="p-3 bg-emerald-50 border border-emerald-250 rounded-xl text-xs text-emerald-800 font-normal">
                              <strong>📨 MD. AZIZUL HAKIM DIRECT MAIL RESPONSE:</strong><br />
                              <p className="mt-1">"{inq.replyText}"</p>
                            </div>
                          )}

                          {!isArchived && (
                            <div className="flex items-center gap-2 pt-2">
                              {!isReplied && (
                                <button
                                  onClick={() => setActiveReplyInquiryId(activeReplyInquiryId === inq.id ? null : inq.id)}
                                  className="px-3.5 py-1.5 bg-black hover:bg-amber-600 text-white text-[9px] font-bold uppercase tracking-wider rounded-lg transition-all"
                                >
                                  {activeReplyInquiryId === inq.id ? 'Dismiss Reply Form' : 'Send Fast Reply Email'}
                                </button>
                              )}

                              <button
                                onClick={() => handleArchiveInquiry(inq.id)}
                                className="px-3.5 py-1.5 bg-white border border-black/15 text-black hover:bg-black/5 text-[9px] font-bold uppercase tracking-wider rounded-lg transition-all"
                              >
                                Archive Inbound
                              </button>
                            </div>
                          )}

                          {activeReplyInquiryId === inq.id && (
                            <form onSubmit={(e) => handleInquiryReplySubmit(e, inq.id)} className="space-y-3 pt-3 border-t border-black/5">
                              <label className="block text-[9px] font-mono uppercase tracking-wider text-black/45 block font-bold">Write response to {inq.name}</label>
                              <textarea
                                required
                                rows={2}
                                placeholder="Write direct response scope details..."
                                value={replyText}
                                onChange={(e) => setReplyText(e.target.value)}
                                className="w-full px-3 py-2 bg-white border border-black/10 rounded-xl text-xs focus:outline-none focus:border-black font-sans text-black"
                              ></textarea>
                              <button
                                type="submit"
                                className="px-4 py-1.5 bg-emerald-650 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-[9px] font-bold uppercase tracking-wider flex items-center gap-1.5"
                              >
                                <Send className="h-3.5 w-3.5" />
                                <span>Dispatch response to {inq.email}</span>
                              </button>
                            </form>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}

            {/* PANEL 6: GLOBAL SETTINGS */}
            {activePane === 'settings' && (
              <form onSubmit={handleApplySettings} className="space-y-6 animate-fadeIn text-left">
                <h3 className="text-xl font-bold text-black border-b border-black/5 pb-3">
                  Global Studio Personalization Setup
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-black/40 font-bold mb-1">Primary Owner (Md. Azizul Hakim):</label>
                    <input
                      type="text"
                      required
                      value={tempName}
                      onChange={(e) => setTempName(e.target.value)}
                      className="w-full px-3 py-2 bg-[#FAF9F6] border border-black/10 rounded-xl text-xs focus:outline-none focus:border-black text-black"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-black/40 font-bold mb-1">Target Contact Email:</label>
                    <input
                      type="email"
                      required
                      value={tempEmail}
                      onChange={(e) => setTempEmail(e.target.value)}
                      className="w-full px-3 py-2 bg-[#FAF9F6] border border-black/10 rounded-xl text-xs focus:outline-none focus:border-black text-black"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-[#1A1A1A]/40 font-bold mb-1">Studio Taglines (Headline description list):</label>
                  <input
                    type="text"
                    required
                    value={tempTagline}
                    onChange={(e) => setTempTagline(e.target.value)}
                    className="w-full px-3 py-2 bg-[#FAF9F6] border border-black/10 rounded-xl text-xs focus:outline-none focus:border-black text-black"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-[#1A1A1A]/40 font-bold mb-1">Primary Support WhatsApp Direct phone:</label>
                  <input
                    type="text"
                    required
                    value={tempWhatsapp}
                    onChange={(e) => setTempWhatsapp(e.target.value)}
                    className="w-full px-3 py-2 bg-[#FAF9F6] border border-black/10 rounded-xl text-xs focus:outline-none focus:border-black font-mono text-black"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center border-t border-black/5 pt-4">
                  <div className="sm:col-span-8">
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-[#1A1A1A]/40 font-bold mb-1">Owner Profile Avatar Photo:</label>
                    <input
                      type="text"
                      placeholder="Paste image URL (e.g., https://... or base64)..."
                      value={tempPhotoUrl}
                      onChange={(e) => setTempPhotoUrl(e.target.value)}
                      className="w-full px-3 py-2 bg-[#FAF9F6] border border-black/10 rounded-xl text-xs focus:outline-none focus:border-black text-black"
                    />
                    <span className="text-[9px] text-black/40 block mt-1">Alternatively, you can drag & drop or click the profile picture circle directly in the About section of the website to upload any image file.</span>
                  </div>
                  <div className="sm:col-span-4 flex flex-col items-center justify-center">
                    <span className="text-[9px] font-mono uppercase tracking-wider text-[#1A1A1A]/40 font-bold mb-1.5 block text-center w-full">Preview Avatar:</span>
                    <div className="relative h-14 w-14 overflow-hidden rounded-full border border-black/15 shadow-sm bg-[#FAF9F6] flex items-center justify-center">
                      {tempPhotoUrl ? (
                        <img
                          src={tempPhotoUrl}
                          alt="Setting Avatar Preview"
                          className="h-full w-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <span className="text-black/35 font-mono text-xs">None</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Hero Showcase Customizer Box */}
                <div className="border-t border-black/5 pt-6 space-y-4">
                  <span className="text-[10px] font-mono uppercase font-bold tracking-widest text-[#1A1A1A]/40 block">
                    Hero Showcase Masterpiece Settings
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-[#1A1A1A]/40 font-bold mb-1">Showcase Project Title:</label>
                      <input
                        type="text"
                        required
                        value={tempHeroProjectTitle}
                        onChange={(e) => setTempHeroProjectTitle(e.target.value)}
                        className="w-full px-3 py-2 bg-[#FAF9F6] border border-black/10 rounded-xl text-xs focus:outline-none focus:border-black text-black font-sans"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-[#1A1A1A]/40 font-bold mb-1">Showcase Project Subtitle (Aesthetic tag):</label>
                      <input
                        type="text"
                        required
                        value={tempHeroProjectSub}
                        onChange={(e) => setTempHeroProjectSub(e.target.value)}
                        className="w-full px-3 py-2 bg-[#FAF9F6] border border-black/10 rounded-xl text-xs focus:outline-none focus:border-black text-black font-sans"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                    <div className="sm:col-span-8">
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-[#1A1A1A]/40 font-bold mb-1">Showcase Image Photo URL:</label>
                      <input
                        type="text"
                        placeholder="Paste image URL (e.g., https://... or base64)..."
                        value={tempHeroImageUrl}
                        onChange={(e) => setTempHeroImageUrl(e.target.value)}
                        className="w-full px-3 py-2 bg-[#FAF9F6] border border-black/10 rounded-xl text-xs focus:outline-none focus:border-black text-black"
                      />
                      <span className="text-[9px] text-black/40 block mt-1">Alternatively, you can hover and click the "Upload Image" overlay button directly on the main home screen's Hero Showcase card.</span>
                    </div>
                    <div className="sm:col-span-4 flex flex-col items-center justify-center">
                      <span className="text-[9px] font-mono uppercase tracking-wider text-[#1A1A1A]/40 font-bold mb-1.5 block text-center w-full">Preview Showcase:</span>
                      <div className="relative h-16 w-12 overflow-hidden rounded-xl border border-black/15 shadow-sm bg-[#FAF9F6] flex items-center justify-center">
                        {tempHeroImageUrl ? (
                          <img
                            src={tempHeroImageUrl}
                            alt="Setting Showcase Preview"
                            className="h-full w-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        ) : (
                          <span className="text-black/35 font-mono text-[9px]">None</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-start gap-2 max-w-lg">
                  <AlertCircle className="h-4.5 w-4.5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <span>These updates automatically update all headers, main footer, contact directories, and layouts of the studio platform in real-time.</span>
                </div>

                <button
                  type="submit"
                  className="px-5 py-2.5 bg-black hover:bg-amber-600 text-white rounded-xl text-xs font-bold uppercase tracking-widest transition-all"
                >
                  Save Global Parameters
                </button>
              </form>
            )}

            {/* PANEL: DYNAMIC HOMEPAGE SECTIONS CUSTOMIZER */}
            {activePane === 'homepage' && (
              <form onSubmit={handleApplyHomeConfig} className="space-y-8 animate-fadeIn text-left">
                <div className="border-b border-black/5 pb-3">
                  <h3 className="text-xl font-bold text-black font-sans">
                    Homepage Sections Layout Customizer
                  </h3>
                  <p className="text-xs text-black/50 mt-1">
                    Directly modify text fields, headers, bullet lists, FAQ answers and descriptors across the entire home layout view.
                  </p>
                </div>

                {/* Sub-pane A: Hero Banner */}
                <div className="bg-[#FAF9F6] border border-black/5 rounded-3xl p-6 space-y-4">
                  <div className="flex items-center gap-2 border-b border-black/5 pb-2">
                    <Sparkles className="h-4.5 w-4.5 text-amber-500" />
                    <span className="text-xs font-bold uppercase tracking-wider text-black">Section 1: Hero Banner Header</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="sm:col-span-2">
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-[#1A1A1A]/40 font-bold mb-1">Aesthetic Top Badge text:</label>
                      <input
                        type="text"
                        required
                        value={tempHeroBadge}
                        onChange={(e) => setTempHeroBadge(e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-black/10 rounded-xl text-xs focus:outline-none focus:border-black text-black"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-[#1A1A1A]/40 font-bold mb-1">Headline Row 1:</label>
                      <input
                        type="text"
                        required
                        value={tempHeroLine1}
                        onChange={(e) => setTempHeroLine1(e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-black/10 rounded-xl text-xs focus:outline-none focus:border-black text-black"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-[#1A1A1A]/40 font-bold mb-1">Headline Row 2:</label>
                      <input
                        type="text"
                        required
                        value={tempHeroLine2}
                        onChange={(e) => setTempHeroLine2(e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-black/10 rounded-xl text-xs focus:outline-none focus:border-black text-black"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-[#1A1A1A]/40 font-bold mb-1">Headline Row 3 (Elegant italic block):</label>
                      <input
                        type="text"
                        required
                        value={tempHeroLine3Metallic}
                        onChange={(e) => setTempHeroLine3Metallic(e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-black/10 rounded-xl text-xs focus:outline-none focus:border-black text-black"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-[#1A1A1A]/40 font-bold mb-1">Sub-discipline Tags (comma-separated):</label>
                      <input
                        type="text"
                        required
                        value={tempHeroTagsList}
                        onChange={(e) => setTempHeroTagsList(e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-black/10 rounded-xl text-xs focus:outline-none focus:border-black text-black"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-[#1A1A1A]/40 font-bold mb-1">Hero Paragraph Description copy:</label>
                      <textarea
                        rows={3}
                        required
                        value={tempHeroParagraph}
                        onChange={(e) => setTempHeroParagraph(e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-black/10 rounded-xl text-xs focus:outline-none focus:border-black text-black font-sans"
                      />
                    </div>
                  </div>
                </div>

                {/* Sub-pane B: About Section */}
                <div className="bg-[#FAF9F6] border border-black/5 rounded-3xl p-6 space-y-4">
                  <div className="flex items-center gap-2 border-b border-black/5 pb-2">
                    <LayoutDashboard className="h-4.5 w-4.5 text-amber-500" />
                    <span className="text-xs font-bold uppercase tracking-wider text-black">Section 2: About Profile Details</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-[#1A1A1A]/40 font-bold mb-1">Small Overheading label:</label>
                      <input
                        type="text"
                        required
                        value={tempAboutOverHeading}
                        onChange={(e) => setTempAboutOverHeading(e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-black/10 rounded-xl text-xs focus:outline-none focus:border-black text-black"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-[#1A1A1A]/40 font-bold mb-1">Intro Heading Name:</label>
                      <input
                        type="text"
                        required
                        value={tempAboutHeadingName}
                        onChange={(e) => setTempAboutHeadingName(e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-black/10 rounded-xl text-xs focus:outline-none focus:border-black text-black"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-[#1A1A1A]/40 font-bold mb-1">Main Pitch Greeting (Bold leading-sentence):</label>
                      <textarea
                        rows={2}
                        required
                        value={tempAboutShortPitch}
                        onChange={(e) => setTempAboutShortPitch(e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-black/10 rounded-xl text-xs focus:outline-none focus:border-black text-black font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-[#1A1A1A]/40 font-bold mb-1">Narrative Biography Paragraph 1:</label>
                      <textarea
                        rows={4}
                        required
                        value={tempAboutParagraph1}
                        onChange={(e) => setTempAboutParagraph1(e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-black/10 rounded-xl text-xs focus:outline-none focus:border-black text-black font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-[#1A1A1A]/40 font-bold mb-1">Narrative Biography Paragraph 2:</label>
                      <textarea
                        rows={4}
                        required
                        value={tempAboutParagraph2}
                        onChange={(e) => setTempAboutParagraph2(e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-black/10 rounded-xl text-xs focus:outline-none focus:border-black text-black font-sans"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-[#1A1A1A]/40 font-bold mb-1">Core Mandate Quote text:</label>
                      <textarea
                        rows={2}
                        required
                        value={tempAboutMandate}
                        onChange={(e) => setTempAboutMandate(e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-black/10 rounded-xl text-xs focus:outline-none focus:border-black text-black font-sans"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-[#1A1A1A]/40 font-bold mb-1">Partner Industries / Verticals (comma-separated):</label>
                      <input
                        type="text"
                        required
                        value={tempPartnerVerts}
                        onChange={(e) => setTempPartnerVerts(e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-black/10 rounded-xl text-xs focus:outline-none focus:border-black text-black"
                      />
                    </div>
                  </div>

                  {/* Specializations mapping cards inside form */}
                  <div className="space-y-3 pt-2">
                    <span className="block text-[10px] font-mono uppercase tracking-wider text-[#1A1A1A]/40 font-bold mb-1">Configure Main Specializations (4 cards):</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {tempSpecializations.map((spec, idx) => (
                        <div key={idx} className="p-4 bg-white border border-black/15 rounded-2xl space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-[10px] font-mono font-bold text-amber-600">Card #{idx + 1}</span>
                          </div>
                          <input
                            type="text"
                            placeholder="Title (e.g. 3D Visualization)"
                            required
                            value={spec.title}
                            onChange={(e) => {
                              const updated = [...tempSpecializations];
                              updated[idx] = { ...updated[idx], title: e.target.value };
                              setTempSpecializations(updated);
                            }}
                            className="w-full px-2 py-1 bg-[#FAF9F6] border border-black/10 rounded-lg text-xs font-bold text-black focus:outline-none"
                          />
                          <textarea
                            rows={2}
                            placeholder="Brief details..."
                            required
                            value={spec.desc}
                            onChange={(e) => {
                              const updated = [...tempSpecializations];
                              updated[idx] = { ...updated[idx], desc: e.target.value };
                              setTempSpecializations(updated);
                            }}
                            className="w-full px-2 py-1 bg-[#FAF9F6] border border-black/10 rounded-lg text-[11px] text-black/60 focus:outline-none"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sub-pane C: FAQs */}
                <div className="bg-[#FAF9F6] border border-black/5 rounded-3xl p-6 space-y-4">
                  <div className="flex items-center gap-2 border-b border-black/5 pb-2">
                    <HelpCircle className="h-4.5 w-4.5 text-amber-500" />
                    <span className="text-xs font-bold uppercase tracking-wider text-black">Section 3: FAQ Layout and Q&A Items</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-[#1A1A1A]/40 font-bold mb-1">FAQ Small Badge Title label:</label>
                      <input
                        type="text"
                        required
                        value={tempFaqOverheading}
                        onChange={(e) => setTempFaqOverheading(e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-black/10 rounded-xl text-xs focus:outline-none focus:border-black text-black"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-[#1A1A1A]/40 font-bold mb-1">FAQ Main Heading:</label>
                      <input
                        type="text"
                        required
                        value={tempFaqHeading}
                        onChange={(e) => setTempFaqHeading(e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-black/10 rounded-xl text-xs focus:outline-none focus:border-black text-black"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-[#1A1A1A]/40 font-bold mb-1">FAQ Brief Subtext:</label>
                      <input
                        type="text"
                        required
                        value={tempFaqSubtext}
                        onChange={(e) => setTempFaqSubtext(e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-black/10 rounded-xl text-xs focus:outline-none focus:border-black text-black"
                      />
                    </div>
                  </div>

                  {/* FAQ dynamic editing array */}
                  <div className="space-y-3 pt-2">
                    <div className="flex items-center justify-between">
                      <span className="block text-[10px] font-mono uppercase tracking-wider text-[#1A1A1A]/40 font-bold">Manage Individual FAQs ({faqItemsList.length}):</span>
                      <button
                        type="button"
                        onClick={() => {
                          const id = `faq-${Date.now()}`;
                          setFaqItemsList([...faqItemsList, { id, question: 'New Question', answer: 'New Answer placeholder text', category: 'general' }]);
                        }}
                        className="px-2.5 py-1 bg-black text-[#FAF9F6] text-[9px] font-bold uppercase tracking-wider rounded-lg flex items-center gap-1 hover:bg-amber-600 transition-colors"
                      >
                        <PlusCircle className="h-3 w-3" />
                        <span>Add FAQ Row</span>
                      </button>
                    </div>

                    <div className="space-y-4 max-h-96 overflow-y-auto pr-2 border border-black/5 p-4 rounded-2xl bg-white/50">
                      {faqItemsList.map((faq, index) => (
                        <div key={faq.id} className="p-4 bg-white border border-black/10 rounded-xl space-y-2 shadow-sm">
                          <div className="flex items-center justify-between">
                            <span className="text-[9px] font-mono uppercase bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-black">
                              Row #{index + 1}
                            </span>
                            <div className="flex gap-2">
                              <select
                                value={faq.category}
                                onChange={(e) => {
                                  const updated = [...faqItemsList];
                                  updated[index] = { ...updated[index], category: e.target.value as any };
                                  setFaqItemsList(updated);
                                }}
                                className="px-1.5 py-0.5 bg-[#FAF9F6] border border-black/5 rounded text-[10px] focus:outline-none"
                              >
                                <option value="general">general</option>
                                <option value="courses">courses</option>
                                <option value="resources">resources</option>
                                <option value="services">services</option>
                              </select>
                              <button
                                type="button"
                                onClick={() => {
                                  setFaqItemsList(faqItemsList.filter((f) => f.id !== faq.id));
                                }}
                                className="text-red-600 hover:text-red-700 p-0.5"
                                title="Delete FAQ Row"
                              >
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </div>
                          </div>

                          <div className="space-y-1.5">
                            <input
                              type="text"
                              required
                              placeholder="Question text..."
                              value={faq.question}
                              onChange={(e) => {
                                const updated = [...faqItemsList];
                                updated[index] = { ...updated[index], question: e.target.value };
                                setFaqItemsList(updated);
                              }}
                              className="w-full px-2 py-1 bg-[#FAF9F6] border border-black/10 rounded-lg text-xs font-bold text-black focus:outline-none"
                            />
                            <textarea
                              rows={2}
                              required
                              placeholder="Answer text..."
                              value={faq.answer}
                              onChange={(e) => {
                                const updated = [...faqItemsList];
                                updated[index] = { ...updated[index], answer: e.target.value };
                                setFaqItemsList(updated);
                              }}
                              className="w-full px-2 py-1 bg-[#FAF9F6] border border-black/10 rounded-lg text-xs text-black/60 focus:outline-none"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sub-pane D: Contact */}
                <div className="bg-[#FAF9F6] border border-black/5 rounded-3xl p-6 space-y-4">
                  <div className="flex items-center gap-2 border-b border-black/5 pb-2">
                    <FileText className="h-4.5 w-4.5 text-amber-500" />
                    <span className="text-xs font-bold uppercase tracking-wider text-black">Section 4: Contact & Consult Section</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-[#1A1A1A]/40 font-bold mb-1">Small Badge Title label:</label>
                      <input
                        type="text"
                        required
                        value={tempContactBadge}
                        onChange={(e) => setTempContactBadge(e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-black/10 rounded-xl text-xs focus:outline-none focus:border-black text-black"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-[#1A1A1A]/40 font-bold mb-1">Contact Heading:</label>
                      <input
                        type="text"
                        required
                        value={tempContactHeading}
                        onChange={(e) => setTempContactHeading(e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-black/10 rounded-xl text-xs focus:outline-none focus:border-black text-black"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-[#1A1A1A]/40 font-bold mb-1">Contact Description Subheading:</label>
                      <textarea
                        rows={2}
                        required
                        value={tempContactParagraph}
                        onChange={(e) => setTempContactParagraph(e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-black/10 rounded-xl text-xs focus:outline-none focus:border-black text-black"
                      />
                    </div>
                  </div>
                </div>

                {/* Apply footer actions */}
                <div className="flex items-center gap-4 pt-4">
                  <button
                    type="submit"
                    className="px-6 py-3 bg-black hover:bg-amber-600 text-white rounded-xl text-xs font-semibold uppercase tracking-widest transition-all shadow-md hover:scale-[1.02]"
                  >
                    Apply Homepage Changes
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      if (confirm('Revert all temporary edits to original saved settings?')) {
                        setTempHeroBadge(homeConfig?.heroBadge || '');
                        setTempHeroLine1(homeConfig?.heroLine1 || '');
                        setTempHeroLine2(homeConfig?.heroLine2 || '');
                        setTempHeroLine3Metallic(homeConfig?.heroLine3Metallic || '');
                        setTempHeroTagsList(homeConfig?.heroTagsList || '');
                        setTempHeroParagraph(homeConfig?.heroParagraph || '');
                        setTempAboutOverHeading(homeConfig?.aboutOverHeading || '');
                        setTempAboutHeadingName(homeConfig?.aboutHeadingName || '');
                        setTempAboutShortPitch(homeConfig?.aboutShortPitch || '');
                        setTempAboutParagraph1(homeConfig?.aboutParagraph1 || '');
                        setTempAboutParagraph2(homeConfig?.aboutParagraph2 || '');
                        setTempAboutMandate(homeConfig?.aboutMandate || '');
                        setTempSpecializations(homeConfig?.aboutSpecializations || []);
                        setTempPartnerVerts((homeConfig?.aboutPartnerVerts || []).join(', '));
                        setTempFaqOverheading(homeConfig?.faqOverheading || '');
                        setTempFaqHeading(homeConfig?.faqHeading || '');
                        setTempFaqSubtext(homeConfig?.faqSubtext || '');
                        setFaqItemsList(faqs || []);
                        setTempContactBadge(homeConfig?.contactBadge || '');
                        setTempContactHeading(homeConfig?.contactHeading || '');
                        setTempContactParagraph(homeConfig?.contactParagraph || '');
                      }
                    }}
                    className="px-5 py-3 bg-transparent text-black border border-black/10 hover:bg-black/5 rounded-xl text-xs font-semibold uppercase tracking-widest transition-all"
                  >
                    Reset Changes
                  </button>
                </div>
              </form>
            )}

            {/* PANEL 7: DEVELOPMENT CONSOLE */}
            {activePane === 'development' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="border-b border-black/5 pb-3 flex items-center justify-between">
                  <h3 className="text-xl font-bold text-black font-sans">
                    LWA Systems Development Console
                  </h3>
                  <span className="px-2 py-0.5 rounded bg-emerald-100 border border-emerald-200 text-emerald-800 font-mono text-[9px] uppercase tracking-wider font-extrabold flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Live / Port 3000
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-[#FAF9F6] border border-black/5 rounded-2xl">
                    <span className="text-[9px] font-mono uppercase text-black/40 font-bold block">RECONCILIATION SPEED</span>
                    <span className="text-xl font-black text-black block mt-1">2.4ms avg</span>
                    <span className="text-[9px] text-[#D97706] font-mono block mt-0.5">Vite Core HMR Disabled</span>
                  </div>
                  <div className="p-4 bg-[#FAF9F6] border border-black/5 rounded-2xl">
                    <span className="text-[9px] font-mono uppercase text-black/40 font-bold block">COMPILE BRANCH</span>
                    <span className="text-xl font-black text-black block mt-1">origin/stable</span>
                    <span className="text-[9px] text-emerald-600 font-semibold block mt-0.5">Clean Tree Audit</span>
                  </div>
                  <div className="p-4 bg-[#FAF9F6] border border-black/5 rounded-2xl">
                    <span className="text-[9px] font-mono uppercase text-black/40 font-bold block">TYPESAFETY COVERAGE</span>
                    <span className="text-xl font-black text-black block mt-1">100% Strict</span>
                    <span className="text-[9px] text-[#D97706] font-mono block mt-0.5">TypeScript 5.4.5</span>
                  </div>
                </div>

                {/* Simulated Interactive Command terminal */}
                <div className="p-5 bg-black text-emerald-400 font-mono rounded-3xl text-xs space-y-4 shadow-2xl border border-white/10">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="text-[10px] text-white/50 uppercase font-black">Core Process Terminal</span>
                    <div className="flex gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-red-500"></span>
                      <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
                      <span className="h-2 w-2 rounded-full bg-green-500"></span>
                    </div>
                  </div>

                  <div className="space-y-1 text-white/90">
                    <p className="text-amber-400"># lwa-compiler --inspect --build:production</p>
                    <p className="text-emerald-500">[OK] Indexed {courses.length} academy courses, {resources.length} resources, {blogPosts.length} journal items.</p>
                    <p className="text-emerald-500">[OK] Replicated secret admin route authentication endpoints.</p>
                    <p className="text-emerald-500">[OK] Initialized LWA branding: initials set to "LWA".</p>
                    <p className="text-white/40">system daemon listening for webhooks...</p>
                  </div>

                  <div className="bg-white/5 p-3 rounded-xl border border-white/5 space-y-2">
                    <span className="text-[9px] text-white/40 uppercase font-bold block">Trigger System Operations:</span>
                    <div className="flex flex-wrap gap-2 pt-1">
                      <button
                        onClick={() => alert("Success: Regenerated 42 CAD Packaging Dieline meshes!")}
                        className="px-3 py-1.5 bg-white/10 hover:bg-white/15 rounded text-[10px] text-white uppercase tracking-wider font-bold"
                      >
                        Compile CAD template curves
                      </button>
                      <button
                        onClick={() => alert("Success: Production bundle size check completed: 114kb gzip!")}
                        className="px-3 py-1.5 bg-white/10 hover:bg-white/15 rounded text-[10px] text-white uppercase tracking-wider font-bold"
                      >
                        Performance check list
                      </button>
                      <button
                        onClick={() => alert("Success: Cleared local HMR state and recalculated React contexts.")}
                        className="px-3 py-1.5 bg-[#D97706]/90 hover:bg-[#D97706] text-white rounded text-[10px] uppercase tracking-wider font-bold"
                      >
                        Wipe dynamic HMR caches
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl text-xs text-amber-900 flex items-start gap-2">
                  <AlertCircle className="h-4.5 w-4.5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-bold">Development mode configuration options:</p>
                    <p className="mt-1 font-normal opacity-90">To toggle the main layout views from Design Studio to Development Lab, leverage the active pill toggle switch at the top sticky header on the website client.</p>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
