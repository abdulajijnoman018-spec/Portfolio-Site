import React, { useState } from 'react';
import { COURSES } from '../data/mockData';
import { Course, CourseModule, Lesson } from '../types';
import {
  GraduationCap, BookOpen, Clock, Star, Play, PlayCircle, ChevronDown, Check,
  Sparkles, Award, ArrowRight, ShieldCheck, HelpCircle, X, CheckSquare
} from 'lucide-react';

interface CoursesProps {
  unlockedCourseIds: string[];
  onUnlockCourse: (courseId: string) => void;
  onNavigate: (tab: string) => void;
  courses?: Course[];
}

export default function Courses({ unlockedCourseIds, onUnlockCourse, onNavigate, courses = COURSES }: CoursesProps) {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [visibleSyllabusCourseId, setVisibleSyllabusCourseId] = useState<string | null>(null);
  const [activeModuleId, setActiveModuleId] = useState<string | null>(null);
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);

  // Instantly trigger mock secure checkout for a chosen course
  const [checkoutCourse, setCheckoutCourse] = useState<Course | null>(null);
  const [buyName, setBuyName] = useState('');
  const [buyEmail, setBuyEmail] = useState('');
  const [buySuccess, setBuySuccess] = useState(false);

  const handleEnrollTrigger = (course: Course) => {
    if (unlockedCourseIds.includes(course.id)) {
      onNavigate('library');
      return;
    }
    setCheckoutCourse(course);
    setBuySuccess(false);
  };

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!buyName || !buyEmail) {
      alert('Please output Name and Email details');
      return;
    }

    setBuySuccess(true);
    setTimeout(() => {
      onUnlockCourse(checkoutCourse!.id);
      setCheckoutCourse(null);
      setBuyName('');
      setBuyEmail('');
      setBuySuccess(false);
      onNavigate('library');
    }, 2000);
  };

  const handlePreviewLaunch = (videoUrl: string) => {
    setActiveVideoUrl(videoUrl);
  };

  return (
    <section id="academy-section" className="py-24 bg-white border-b border-black/5 text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 border border-amber-200 text-amber-800 text-[10px] font-mono uppercase tracking-[0.13em] font-semibold mb-3">
            <GraduationCap className="h-4 w-4 animate-bounce" />
            Empowering Emerging Designers
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-black">
            Design Academy
          </h2>
          <p className="mt-4 text-black/60 text-xs sm:text-sm font-normal">
            Gain high-income skillsets in Packaging, Brand Strategy, Figma systems, and Framer development. Designed for freelancers wanting to escape commodity price-floors.
          </p>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {courses.map((course) => {
            const isEnrolled = unlockedCourseIds.includes(course.id);
            return (
              <div
                key={course.id}
                className="bg-[#FAF9F6] border border-black/10 rounded-3xl overflow-hidden flex flex-col justify-between hover:shadow-lg transition-transform duration-300"
              >
                {/* Visual Thumbnail */}
                <div className="relative aspect-video bg-black/5">
                  <img
                    src={course.coverImage}
                    alt={course.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-[#FAF9F6] border border-black/5 px-2.5 py-1 rounded-lg text-[9px] font-mono tracking-wider uppercase font-semibold">
                    {course.category}
                  </div>
                  
                  {isEnrolled && (
                    <div className="absolute inset-0 bg-emerald-900/60 backdrop-blur-xs flex items-center justify-center">
                      <div className="bg-[#FAF9F6] text-emerald-800 px-4 py-2 rounded-2xl flex items-center gap-2 font-bold text-xs shadow-md">
                        <Check className="h-4 w-4 stroke-[3px]" />
                        <span>Enrolled Room</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content info */}
                <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-[11px] font-mono text-black/50 font-bold uppercase tracking-wider">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {course.durationHrs} Hrs Video
                      </span>
                      <span className="flex items-center gap-1">
                        <BookOpen className="h-3.5 w-3.5" />
                        {course.lecturesCount} Lessons
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold font-sans text-black leading-snug">
                      {course.title}
                    </h3>

                    <p className="text-xs text-black/60 leading-relaxed font-normal min-h-[50px] line-clamp-3">
                      {course.description}
                    </p>
                  </div>

                  {/* Skills Gained */}
                  <div className="pt-2">
                    <span className="text-[9px] font-mono uppercase tracking-widest text-black/40 block font-bold mb-1.5">What you'll master:</span>
                    <div className="grid grid-cols-2 gap-1">
                      {course.skillsGained.slice(0, 4).map((skill, index) => (
                        <div key={index} className="flex items-center gap-1.5 text-[9px] font-bold text-black/75">
                          <Check className="h-3 w-3 text-amber-500" />
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing and CTAs */}
                  <div className="space-y-3 pt-4 border-t border-black/5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-xl font-mono font-black text-[#1A1A1A]">${course.salePrice} USD</span>
                        <span className="text-xs text-black/40 line-through font-mono">${course.originalPrice}</span>
                      </div>
                      <span className="text-[10px] font-bold bg-amber-100 text-amber-800 px-2 py-0.5 rounded uppercase">
                        Save {Math.round(((course.originalPrice - course.salePrice) / course.originalPrice) * 100)}%
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => {
                          setVisibleSyllabusCourseId(visibleSyllabusCourseId === course.id ? null : course.id);
                        }}
                        className="w-full py-2.5 bg-white border border-black/15 hover:border-black/30 text-black text-[10px] font-bold uppercase tracking-wider rounded-xl transition-all"
                      >
                        Syllabus Details
                      </button>

                      <button
                        onClick={() => handleEnrollTrigger(course)}
                        className={`w-full py-2.5 text-[10px] font-bold uppercase tracking-wider rounded-xl transition-all ${
                          isEnrolled
                            ? 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100'
                            : 'bg-black text-[#FAF9F6] hover:bg-amber-600'
                        }`}
                      >
                        {isEnrolled ? 'Open Dashboard' : 'Enroll Now'}
                      </button>
                    </div>
                  </div>

                </div>

                {/* Collapsible Syllabus Block inside Card container */}
                {visibleSyllabusCourseId === course.id && (
                  <div className="border-t border-black/10 bg-white p-5 text-left space-y-4 animate-fadeIn">
                    <h4 className="text-xs font-bold text-black uppercase tracking-widest font-mono">
                      📚 Detailed Course Modules:
                    </h4>
                    
                    <div className="space-y-2.5">
                      {course.modules.map((mod) => {
                        const isExpanded = activeModuleId === mod.id;
                        return (
                          <div key={mod.id} className="border border-black/5 rounded-xl overflow-hidden">
                            <button
                              onClick={() => setActiveModuleId(isExpanded ? null : mod.id)}
                              className="w-full p-3 bg-[#FAF9F6] flex items-center justify-between text-xs font-bold text-black text-left"
                            >
                              <span>{mod.title}</span>
                              <ChevronDown className={`h-4 w-4 text-black/40 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                            </button>

                            {isExpanded && (
                              <div className="p-3 bg-white space-y-2 border-t border-black/5">
                                {mod.lessons.map((lesson) => (
                                  <div key={lesson.id} className="flex items-center justify-between text-[11px] hover:bg-black/5 p-1.5 rounded transition-all">
                                    <div className="flex items-center gap-2">
                                      <PlayCircle className="h-3.5 w-3.5 text-black/40" />
                                      <span className="font-medium text-black/80">{lesson.title}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <span className="text-black/40 font-mono text-[10px]">{lesson.duration}</span>
                                      {lesson.isFreePreview && lesson.videoUrl && (
                                        <button
                                          onClick={() => handlePreviewLaunch(lesson.videoUrl!)}
                                          className="text-[9px] font-bold text-[#FAF9F6] bg-amber-600 px-2 py-0.5 rounded cursor-pointer hover:bg-amber-700"
                                        >
                                          Preview File
                                        </button>
                                      )}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Video Overlay Player Modal for Lecture Previews */}
        {activeVideoUrl && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-xs animate-fadeIn">
            <div className="bg-[#FAF9F6] border border-black/10 rounded-3xl max-w-2xl w-full overflow-hidden relative shadow-2xl">
              <div className="px-5 py-3.5 bg-white border-b border-black/5 flex items-center justify-between">
                <span className="text-xs font-bold text-amber-700 tracking-wider inline-flex items-center gap-1">
                  <Play className="h-4 w-4 fill-amber-600 text-amber-600" />
                  Free Preview Lecture Mode
                </span>
                <button
                  onClick={() => setActiveVideoUrl(null)}
                  className="px-3 py-1.5 text-[10px] bg-black text-[#FAF9F6] rounded-lg font-bold hover:bg-emerald-800 transition-colors"
                >
                  Close Player
                </button>
              </div>

              {/* YouTube embed simulation placeholder */}
              <div className="aspect-video bg-black relative">
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideoUrl}?autoplay=1`}
                  title="Academy Video Embed"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>

              <div className="p-4 bg-white text-[10px] text-black/50 text-left">
                💡 Notice: You are previewing a real syllabus lesson from Md. Azizul Hakim's studio catalog library. Enrolling grants full source and CAD file directory access.
              </div>
            </div>
          </div>
        )}

        {/* Academy Secure Checkout Modal Simulation */}
        {checkoutCourse && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 sm:p-6 backdrop-blur-sm animate-fadeIn">
            <div className="bg-white border border-black/5 rounded-3xl max-w-md w-full overflow-hidden shadow-2xl relative text-left">
              
              <button
                onClick={() => setCheckoutCourse(null)}
                className="absolute top-4 right-4 p-1.5 text-black/40 hover:text-black bg-[#FAF9F6] rounded-full border border-black/5 hover:border-black/15 transition-all"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="p-6 bg-black text-[#FAF9F6] flex items-center justify-between">
                <div>
                  <span className="text-[9px] font-mono uppercase tracking-[0.15em] text-amber-400 block">Frictionless Academy Admission</span>
                  <h3 className="text-base font-bold font-sans mt-1">Enroll in Course</h3>
                </div>
                <div className="bg-white/10 text-white rounded-lg px-2.5 py-1 text-xs font-mono font-black">
                  ${checkoutCourse.salePrice} USD
                </div>
              </div>

              <form onSubmit={handleCheckoutSubmit} className="p-6 space-y-4">
                {buySuccess ? (
                  <div className="py-8 text-center space-y-4">
                    <div className="h-14 w-14 bg-emerald-50 text-emerald-700 border border-emerald-250 rounded-full flex items-center justify-center mx-auto animate-bounce">
                      <Check className="h-7 w-7" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-black">Payment Approved!</h4>
                      <p className="text-xs text-black/60 mt-1 font-normal">Authenticating student ledger and redirecting to your personalized learning room...</p>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-center text-xs text-amber-900 flex items-start gap-2">
                      <Sparkles className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span>This is the direct billing simulator for Md. Azizul Hakim's academy courses. Complete details will unlock the student dashboard and syllabus lessons instantly.</span>
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-black/40 font-bold mb-1">Your Full Name:</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Azizul Hakim"
                        value={buyName}
                        onChange={(e) => setBuyName(e.target.value)}
                        className="w-full px-3 py-2 bg-[#FAF9F6] border border-black/10 rounded-xl text-xs focus:outline-none focus:border-black text-black"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-black/40 font-bold mb-1">Target Student Email:</label>
                      <input
                        type="email"
                        required
                        placeholder="student@gmail.com"
                        value={buyEmail}
                        onChange={(e) => setBuyEmail(e.target.value)}
                        className="w-full px-3 py-2 bg-[#FAF9F6] border border-black/10 rounded-xl text-xs focus:outline-none focus:border-black text-black"
                      />
                    </div>

                    <div className="border border-black/5 p-3 rounded-xl bg-[#FAF9F6] text-xs space-y-1.5 text-black/70">
                      <div className="flex justify-between items-center text-[10px] text-black/40 font-bold font-mono">
                        <span>COURSE</span>
                        <span>{checkoutCourse.category}</span>
                      </div>
                      <div className="font-bold text-black leading-tight line-clamp-1">{checkoutCourse.title}</div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-black hover:bg-amber-600 text-white rounded-xl text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-1.5"
                    >
                      <span>Authorize Payment</span>
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
