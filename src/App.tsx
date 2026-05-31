import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Store from './components/Store';
import Courses from './components/Courses';
import Blog from './components/Blog';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import StudentPortal from './components/StudentPortal';
import AdminDashboard, { Inquiry } from './components/AdminDashboard';
import AdminLogin from './components/AdminLogin';
import { COURSES, DESIGN_RESOURCES, BLOG_POSTS, FAQS, DEFAULT_HOME_PAGE_CONFIG } from './data/mockData';
import { HomePageConfig, FAQItem } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState<boolean>(false);
  const [unlockedCourseIds, setUnlockedCourseIds] = useState<string[]>([]);
  const [unlockedResourceIds, setUnlockedResourceIds] = useState<string[]>([]);

  // Highly premium live states synced from admin dashboard
  const [courses, setCourses] = useState(COURSES);
  const [resources, setResources] = useState(DESIGN_RESOURCES);
  const [blogPosts, setBlogPosts] = useState(BLOG_POSTS);

  // Live editable home sections and FAQs
  const [faqs, setFaqs] = useState<FAQItem[]>(() => {
    const saved = localStorage.getItem('lwa_faqs');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed;
      } catch (e) {}
    }
    return FAQS;
  });

  const [homeConfig, setHomeConfig] = useState<HomePageConfig>(() => {
    const saved = localStorage.getItem('lwa_home_config');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed === 'object') {
          return { ...DEFAULT_HOME_PAGE_CONFIG, ...parsed };
        }
      } catch (e) {}
    }
    return DEFAULT_HOME_PAGE_CONFIG;
  });

  const handleUpdateHomeConfig = (newConfig: HomePageConfig) => {
    setHomeConfig(newConfig);
    localStorage.setItem('lwa_home_config', JSON.stringify(newConfig));
  };

  const handleUpdateFaqs = (newFaqs: FAQItem[]) => {
    setFaqs(newFaqs);
    localStorage.setItem('lwa_faqs', JSON.stringify(newFaqs));
  };

  interface OwnerConfiguration {
    name: string;
    tagline: string;
    email: string;
    whatsapp: string;
    photoUrl?: string;
    heroImageUrl?: string;
    heroProjectTitle?: string;
    heroProjectSub?: string;
  }

  const [ownerConfig, setOwnerConfig] = useState<OwnerConfiguration>(() => {
    const saved = localStorage.getItem('lwa_owner_config');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed === 'object') {
          return {
            name: parsed.name || "Md. Azizul Hakim",
            tagline: parsed.tagline || "TOP RATED GRAPHIC & 3D STUDIO",
            email: parsed.email || "abdulajij.noman018@gmail.com",
            whatsapp: parsed.whatsapp || "01962045142",
            photoUrl: parsed.photoUrl || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=700",
            heroImageUrl: parsed.heroImageUrl || "https://images.unsplash.com/photo-1541462608141-ad4979e408c9?auto=format&fit=crop&q=80&w=700",
            heroProjectTitle: parsed.heroProjectTitle || "Ambrosia Luxury Perfumes",
            heroProjectSub: parsed.heroProjectSub || "Winner Packaging Design Award 2025"
          };
        }
      } catch (e) {}
    }
    return {
      name: "Md. Azizul Hakim",
      tagline: "TOP RATED GRAPHIC & 3D STUDIO",
      email: "abdulajij.noman018@gmail.com",
      whatsapp: "01962045142",
      photoUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=700",
      heroImageUrl: "https://images.unsplash.com/photo-1541462608141-ad4979e408c9?auto=format&fit=crop&q=80&w=700",
      heroProjectTitle: "Ambrosia Luxury Perfumes",
      heroProjectSub: "Winner Packaging Design Award 2025"
    };
  });

  const handleUpdateOwnerConfig = (newConfig: OwnerConfiguration) => {
    setOwnerConfig(newConfig);
    localStorage.setItem('lwa_owner_config', JSON.stringify(newConfig));
  };

  const [inquiries, setInquiries] = useState<Inquiry[]>([
    {
      id: 'inq-default-1',
      name: 'Frederic Dupont',
      email: 'f.dupont@chanel-parfums.fr',
      type: 'Packaging',
      message: 'Looking to produce a limited edition hexagon box template for our spring botanical lines. Need fully compliant CAD vector cutlines designed by next Tuesday. Can you consult on cardboard finishes too?',
      date: 'May 30, 2026',
      status: 'new'
    },
    {
      id: 'inq-default-2',
      name: 'Jessica Vance',
      email: 'jess.vance@vortexsystems.io',
      type: 'UI-UX',
      message: 'We require a brand-new multi-mode Design System in Figma holding 200+ reactive variables and auto-layouts. Our developers use Tailwind so the tokens map clean. Please send billing estimate schedules!',
      date: 'May 28, 2026',
      status: 'replied',
      replyText: 'Hello Jessica! Yes, I specialize exactly in Figma variable mappings aligned with Tailwind configuration systems. I have loaded my SaaS UI template kit with complete variables into the direct Store repository, feel free to inspect. I can schedule a call tomorrow afternoon.'
    }
  ]);

  const handleNewInquiry = (newInq: { name: string; email: string; type: string; message: string }) => {
    const raw: Inquiry = {
      id: `inq-${Date.now()}`,
      name: newInq.name,
      email: newInq.email,
      type: newInq.type,
      message: newInq.message,
      date: new Date().toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' }),
      status: 'new'
    };
    setInquiries((prev) => [raw, ...prev]);
  };

  const handleUnlockCourse = (courseId: string) => {
    if (!unlockedCourseIds.includes(courseId)) {
      setUnlockedCourseIds((prev) => [...prev, courseId]);
    }
  };

  const handleUnlockResource = (resourceId: string) => {
    if (!unlockedResourceIds.includes(resourceId)) {
      setUnlockedResourceIds((prev) => [...prev, resourceId]);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1A1A1A] selection:bg-amber-500 selection:text-white font-sans antialiased">
      
      {/* Sticky Main Navigation */}
      <Navigation
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        cartCount={0}
        unlockedCoursesCount={unlockedCourseIds.length}
        unlockedResourcesCount={unlockedResourceIds.length}
        ownerName={ownerConfig.name}
        ownerTagline={ownerConfig.tagline}
      />

      {/* Main viewport router switches */}
      <main className="transition-all duration-300">
        
        {/* VIEW A: Dashboard landing */}
        {activeTab === 'home' && (
          <div className="animate-fadeIn">
            <Hero
              onNavigate={setActiveTab}
              heroImageUrl={ownerConfig.heroImageUrl}
              heroProjectTitle={ownerConfig.heroProjectTitle}
              heroProjectSub={ownerConfig.heroProjectSub}
              onUpdateHeroImage={(base64) => handleUpdateOwnerConfig({ ...ownerConfig, heroImageUrl: base64 })}
              onUpdateHeroText={(title, sub) => handleUpdateOwnerConfig({ ...ownerConfig, heroProjectTitle: title, heroProjectSub: sub })}
              heroBadge={homeConfig.heroBadge}
              heroLine1={homeConfig.heroLine1}
              heroLine2={homeConfig.heroLine2}
              heroLine3Metallic={homeConfig.heroLine3Metallic}
              heroTagsList={homeConfig.heroTagsList}
              heroParagraph={homeConfig.heroParagraph}
            />
            <About 
              ownerName={ownerConfig.name}
              ownerPhotoUrl={ownerConfig.photoUrl}
              onUpdatePhoto={(base64) => handleUpdateOwnerConfig({ ...ownerConfig, photoUrl: base64 })}
              aboutOverHeading={homeConfig.aboutOverHeading}
              aboutHeadingName={homeConfig.aboutHeadingName}
              aboutShortPitch={homeConfig.aboutShortPitch}
              aboutParagraph1={homeConfig.aboutParagraph1}
              aboutParagraph2={homeConfig.aboutParagraph2}
              aboutMandate={homeConfig.aboutMandate}
              aboutSpecializations={homeConfig.aboutSpecializations}
              aboutPartnerVerts={homeConfig.aboutPartnerVerts}
            />
            <Portfolio />
            <FAQ 
              faqs={faqs}
              faqOverheading={homeConfig.faqOverheading}
              faqHeading={homeConfig.faqHeading}
              faqSubtext={homeConfig.faqSubtext}
            />
            <Contact
              onNewInquiry={handleNewInquiry}
              ownerEmail={ownerConfig.email}
              ownerWhatsapp={ownerConfig.whatsapp}
              contactBadge={homeConfig.contactBadge}
              contactHeading={homeConfig.contactHeading}
              contactParagraph={homeConfig.contactParagraph}
            />
          </div>
        )}

        {/* VIEW B: Detached Portfolio */}
        {activeTab === 'gallery' && (
          <div className="animate-fadeIn">
            <Portfolio />
          </div>
        )}

        {/* VIEW C: Detached Training Modules */}
        {activeTab === 'academy' && (
          <div className="animate-fadeIn">
            <Courses
              unlockedCourseIds={unlockedCourseIds}
              onUnlockCourse={handleUnlockCourse}
              onNavigate={setActiveTab}
              courses={courses}
            />
          </div>
        )}

        {/* VIEW D: Detached Assets Store */}
        {activeTab === 'catalog' && (
          <div className="animate-fadeIn">
            <Store
              unlockedResourceIds={unlockedResourceIds}
              onUnlockResource={handleUnlockResource}
              onNavigate={setActiveTab}
              resources={resources}
            />
          </div>
        )}

        {/* VIEW E: Detached Philosophy blogs */}
        {activeTab === 'articles' && (
          <div className="animate-fadeIn">
            <Blog blogPosts={blogPosts} />
          </div>
        )}

        {/* VIEW F: Detached Contact info form */}
        {activeTab === 'contact' && (
          <div className="animate-fadeIn">
            <Contact
              onNewInquiry={handleNewInquiry}
              ownerEmail={ownerConfig.email}
              ownerWhatsapp={ownerConfig.whatsapp}
              contactBadge={homeConfig.contactBadge}
              contactHeading={homeConfig.contactHeading}
              contactParagraph={homeConfig.contactParagraph}
            />
          </div>
        )}

        {/* VIEW G: Student and User library hub */}
        {activeTab === 'library' && (
          <div className="animate-fadeIn">
            <StudentPortal
              unlockedCourseIds={unlockedCourseIds}
              unlockedResourceIds={unlockedResourceIds}
              onNavigate={setActiveTab}
              courses={courses}
              resources={resources}
            />
          </div>
        )}

        {/* NEW VIEW H: Restricted Admin/Studio Control Center */}
        {activeTab === 'admin' && (
          <div className="animate-fadeIn">
            {isAdminAuthenticated ? (
              <AdminDashboard
                courses={courses}
                setCourses={setCourses}
                resources={resources}
                setResources={setResources}
                blogPosts={blogPosts}
                setBlogPosts={setBlogPosts}
                inquiries={inquiries}
                setInquiries={setInquiries}
                ownerConfig={ownerConfig}
                setOwnerConfig={handleUpdateOwnerConfig}
                homeConfig={homeConfig}
                setHomeConfig={handleUpdateHomeConfig}
                faqs={faqs}
                setFaqs={handleUpdateFaqs}
              />
            ) : (
              <AdminLogin
                onSuccess={() => setIsAdminAuthenticated(true)}
                onCancel={() => {
                  setActiveTab('home');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            )}
          </div>
        )}

      </main>

      {/* Editorial footer */}
      <footer id="editorial-footer" className="bg-[#FAF9F6] border-t border-black/5 py-12 text-[#1A1A1A]/50 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-center md:text-left">
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-black/5 pb-8">
            <div>
              <span className="text-sm font-bold text-black font-sans block leading-none">
                {ownerConfig.name}
              </span>
              <span className="text-[10px] text-amber-600 font-mono font-bold block mt-1 uppercase tracking-widest">
                Principal Multidisciplinary DESIGNER
              </span>
            </div>

            {/* Quick routes links */}
            <div className="flex flex-wrap gap-4 text-[10px] font-mono uppercase tracking-widest font-bold">
              <button onClick={() => setActiveTab('home')} className="hover:text-black transition-colors">Home</button>
              <button onClick={() => setActiveTab('gallery')} className="hover:text-black transition-colors">Portfolio</button>
              <button onClick={() => setActiveTab('catalog')} className="hover:text-black transition-colors">Store</button>
              <button onClick={() => setActiveTab('academy')} className="hover:text-black transition-colors">Academy</button>
              <button onClick={() => {
                setActiveTab('admin');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }} className="text-amber-800 hover:text-black transition-colors">Studio Console</button>
              <button onClick={() => setActiveTab('contact')} className="hover:text-black transition-colors">Let's Collab</button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-mono uppercase">
            <p className="tracking-wider">
              © 2026 {ownerConfig.name.toUpperCase()}. All creative assets properly commercialized.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:underline">Studio Licence</a>
              <a href="#" className="hover:underline">Legal Terms</a>
              <button onClick={() => {
                setActiveTab('admin');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }} className="hover:underline font-bold text-amber-600">Admin Control Panel</button>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
