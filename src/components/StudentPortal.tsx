import React, { useState } from 'react';
import { COURSES, DESIGN_RESOURCES } from '../data/mockData';
import { Course, DesignResource, Lesson } from '../types';
import {
  GraduationCap, BookOpen, Clock, PlayCircle, Star, Download, Sparkles, Check,
  X, CheckSquare, Layers, FolderDown, ArrowUpRight, Play, RefreshCw
} from 'lucide-react';

interface StudentPortalProps {
  unlockedCourseIds: string[];
  unlockedResourceIds: string[];
  onNavigate: (tab: string) => void;
  courses?: Course[];
  resources?: DesignResource[];
}

export default function StudentPortal({
  unlockedCourseIds,
  unlockedResourceIds,
  onNavigate,
  courses = COURSES,
  resources = DESIGN_RESOURCES
}: StudentPortalProps) {
  const [activePortalTab, setActivePortalTab] = useState<'courses' | 'resources'>('courses');
  const [activeCourseId, setActiveCourseId] = useState<string | null>(null);
  const [playingLessonId, setPlayingLessonId] = useState<string | null>(null);
  
  // Completed lessons checklist simulation
  const [completedLessonIds, setCompletedLessonIds] = useState<string[]>([]);
  
  // Download progress bar simulation
  const [downloadingResourceId, setDownloadingResourceId] = useState<string | null>(null);
  const [downloadProgress, setDownloadProgress] = useState<number>(0);

  const unlockedCourses = courses.filter((c) => unlockedCourseIds.includes(c.id));
  const unlockedResources = resources.filter((r) => unlockedResourceIds.includes(r.id));

  // Determine active course
  const activeCourse = unlockedCourses.find((c) => c.id === activeCourseId) || unlockedCourses[0];

  // Pick running lesson
  const allLessons = activeCourse ? activeCourse.modules.flatMap(m => m.lessons) : [];
  const activeLesson = allLessons.find(l => l.id === playingLessonId) || allLessons[0];

  const handleToggleLessonComplete = (lessonId: string) => {
    if (completedLessonIds.includes(lessonId)) {
      setCompletedLessonIds(completedLessonIds.filter(id => id !== lessonId));
    } else {
      setCompletedLessonIds([...completedLessonIds, lessonId]);
    }
  };

  const handleSourceDownloadSimulation = (resourceId: string, resourceTitle: string) => {
    setDownloadingResourceId(resourceId);
    setDownloadProgress(0);
    
    const interval = setInterval(() => {
      setDownloadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setDownloadingResourceId(null);
            alert(`🎉 Asset downloaded successfully!\nFile Saved: ${resourceId}_package_structure.zip`);
          }, 400);
          return 100;
        }
        return prev + 25;
      });
    }, 150);
  };

  const hasAnyUnlocked = unlockedCourseIds.length > 0 || unlockedResourceIds.length > 0;

  return (
    <section id="library-portal-section" className="py-20 bg-[#FAF9F6] text-[#1A1A1A] min-h-screen text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Portal Greeting Banner */}
        <div className="bg-black text-[#FAF9F6] p-8 sm:p-12 rounded-3xl mb-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-1/4 w-80 h-full bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex items-center gap-4 relative z-10">
            <div className="h-16 w-16 bg-amber-500 text-black rounded-full flex items-center justify-center font-black text-2xl font-serif">
              H
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black font-sans">
                My Creative Hub
              </h2>
              <p className="text-xs text-white/60 mt-1 font-mono uppercase tracking-widest leading-none">
                Client Room & Learning Space
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 relative z-10">
            <button
              onClick={() => onNavigate('catalog')}
              className="px-6 py-2.5 bg-white text-black text-[10px] font-bold uppercase tracking-widest rounded-xl transition-all hover:bg-amber-600 hover:text-[#FAF9F6] shadow-sm"
            >
              Exchanges Catalog
            </button>
          </div>
        </div>

        {/* Empty state redirect fallback */}
        {!hasAnyUnlocked ? (
          <div className="text-center py-20 bg-white border border-black/5 rounded-3xl space-y-6 max-w-lg mx-auto">
            <span className="text-5xl block animate-bounce">🗝️</span>
            <div>
              <h3 className="text-lg font-bold text-black">Private Library Locked</h3>
              <p className="text-xs text-black/50 mt-1.5 leading-relaxed font-normal max-w-sm mx-auto">
                No active courses or downloadable digital assets on this profile yet. Complete a checkout simulation in our store or training academy to populate this area instantly!
              </p>
            </div>
            <div>
              <button
                onClick={() => onNavigate('catalog')}
                className="px-6 py-3 bg-black hover:bg-amber-600 text-white text-[11px] font-bold uppercase tracking-widest rounded-xl transition-all"
              >
                Go to Resources Store
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-12">
            
            {/* Dynamic Internal Navigation Selector Tabs */}
            <div className="flex border-b border-black/5 gap-4">
              {unlockedCourses.length > 0 && (
                <button
                  onClick={() => setActivePortalTab('courses')}
                  className={`pb-3 text-xs sm:text-sm font-bold tracking-wider transition-all border-b-2 flex items-center gap-2 ${
                    activePortalTab === 'courses'
                      ? 'border-black text-black font-extrabold'
                      : 'border-transparent text-black/40 hover:text-black hover:border-black/10'
                  }`}
                >
                  <GraduationCap className="h-4.5 w-4.5" />
                  <span>Enrolled Academics</span>
                  <span className="text-[10px] bg-black/5 border border-black/5 px-2 py-0.5 rounded-full font-mono text-black/60 font-bold">
                    {unlockedCourses.length}
                  </span>
                </button>
              )}

              {unlockedResources.length > 0 && (
                <button
                  onClick={() => setActivePortalTab('resources')}
                  className={`pb-3 text-xs sm:text-sm font-bold tracking-wider transition-all border-b-2 flex items-center gap-2 ${
                    activePortalTab === 'resources'
                      ? 'border-black text-black font-extrabold'
                      : 'border-transparent text-black/40 hover:text-black hover:border-black/10'
                  }`}
                >
                  <FolderDown className="h-4.5 w-4.5" />
                  <span>Asset Source Downloads</span>
                  <span className="text-[10px] bg-black/5 border border-black/5 px-2 py-0.5 rounded-full font-mono text-black/60 font-bold">
                    {unlockedResources.length}
                  </span>
                </button>
              )}
            </div>

            {/* View A: Enrolled Academics Syllabus + Video Player */}
            {activePortalTab === 'courses' && unlockedCourses.length > 0 && (
              <div className="space-y-8">
                
                {/* Course Switcher Strip if multiple courses enrolled */}
                {unlockedCourses.length > 1 && (
                  <div className="flex gap-2">
                    {unlockedCourses.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => {
                          setActiveCourseId(c.id);
                          setPlayingLessonId(null);
                        }}
                        className={`px-4 py-2 border rounded-xl text-[10px] font-bold uppercase transition-all ${
                          activeCourse.id === c.id
                            ? 'bg-black text-[#FAF9F6] border-black'
                            : 'bg-white border-black/10 text-black/60 hover:text-black hover:bg-[#FAF9F6]'
                        }`}
                      >
                        {c.category} Course
                      </button>
                    ))}
                  </div>
                )}

                {/* Main Video & Playlist Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Big Interactive Lecture Box */}
                  <div className="lg:col-span-8 space-y-4 text-left">
                    <div className="aspect-video bg-black rounded-3xl overflow-hidden border border-black/10 relative shadow-lg">
                      <iframe
                        src={`https://www.youtube.com/embed/${activeLesson?.videoUrl || 'yUzKb6DG-ks'}?autoplay=0`}
                        title="Interactive Student Portal Class Video Player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      ></iframe>
                    </div>

                    <div className="p-5 bg-white border border-black/5 rounded-2xl space-y-2">
                      <span className="inline-block px-2.5 py-0.5 rounded-md bg-amber-50 text-amber-800 text-[9px] font-mono font-bold uppercase border border-amber-200">
                        Lesson Active: Chapter Lecture
                      </span>
                      <h3 className="text-lg font-bold text-black font-sans leading-snug">
                        {activeLesson?.title || 'Course Lecture Foundations'}
                      </h3>
                      <p className="text-xs text-black/65 leading-relaxed font-normal">
                        Experience Md. Azizul Hakim's specialized studio-grade commercial strategies. Master materials, finishes, design systems architectures, and high-conversion assets.
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Interactive Syllabus Checklist */}
                  <div className="lg:col-span-4 bg-white border border-black/10 p-5 rounded-3xl space-y-4">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#1A1A1A]/50 block font-bold border-b border-black/5 pb-2">
                      Curriculum Modules Checklist
                    </span>

                    <div className="space-y-4 max-h-[420px] overflow-y-auto pr-1">
                      {activeCourse.modules.map((mod) => (
                        <div key={mod.id} className="space-y-2 text-left">
                          <span className="text-[10px] text-amber-600 block font-bold font-mono">{mod.title}</span>
                          <div className="space-y-1.5">
                            {mod.lessons.map((les) => {
                              const isPlaying = activeLesson?.id === les.id;
                              const isFinished = completedLessonIds.includes(les.id);
                              return (
                                <div
                                  key={les.id}
                                  className={`p-3 rounded-xl border flex items-center justify-between transition-all ${
                                    isPlaying
                                      ? 'bg-black text-[#FAF9F6] border-black'
                                      : 'bg-[#FAF9F6] border-black/5 hover:bg-black/5'
                                  }`}
                                >
                                  <button
                                    onClick={() => setPlayingLessonId(les.id)}
                                    className="flex-1 text-left"
                                  >
                                    <span className="text-xs font-bold leading-tight block">{les.title}</span>
                                    <span className="text-[9px] text-black/40 font-mono tracking-wide block mt-1">
                                      Duration: {les.duration}
                                    </span>
                                  </button>

                                  <button
                                    onClick={() => handleToggleLessonComplete(les.id)}
                                    className={`h-4.5 w-4.5 rounded-md flex items-center justify-center border font-bold transition-all ${
                                      isFinished
                                        ? 'bg-emerald-650 bg-emerald-600 border-emerald-600 text-white'
                                        : 'bg-white border-black/15 text-transparent hover:border-emerald-600'
                                    }`}
                                  >
                                    <Check className="h-3.5 w-3.5 stroke-[3px]" />
                                  </button>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            )}

            {/* View B: Bought Resources Source Downloads */}
            {activePortalTab === 'resources' && unlockedResources.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {unlockedResources.map((res) => {
                  const isDownloading = downloadingResourceId === res.id;
                  return (
                    <div
                      key={res.id}
                      className="bg-white border border-black/10 p-6 sm:p-8 rounded-3xl flex flex-col justify-between hover:border-black/20 hover:shadow-xs transition-shadow"
                    >
                      <div className="space-y-3 text-left">
                        <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-black/40">
                          {res.category} Source
                        </span>
                        <h3 className="text-base font-bold text-black font-sans leading-snug">
                          {res.title}
                        </h3>
                        <p className="text-xs text-black/60 leading-relaxed font-normal">
                          ZIP bundle containing ready vector designs, standard CAD cutting lines files, typography systems documentation, and Blender rendering configurations.
                        </p>

                        <div className="p-3 bg-[#FAF9F6] rounded-xl border border-black/5 space-y-1.5 text-[10px]">
                          <span className="font-bold text-black border-b border-black/5 pb-1 block">Included Files:</span>
                          <p className="font-mono text-black/50 text-wrap leading-tight">
                            • packaging_cad_{res.id}_die.dxf<br />
                            • textures_source_embossing.eps<br />
                            • blender_raw_studio_lights.blend
                          </p>
                        </div>
                      </div>

                      <div className="pt-6 border-t border-black/5 mt-6 space-y-3">
                        {isDownloading ? (
                          <div className="space-y-1.5">
                            <div className="flex justify-between items-center text-[10px] text-black/60 font-bold font-mono">
                              <span>Downloading...</span>
                              <span>{downloadProgress}%</span>
                            </div>
                            <div className="h-2 w-full bg-[#FAF9F6] border border-black/5 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-emerald-600 transition-all duration-150"
                                style={{ width: `${downloadProgress}%` }}
                              ></div>
                            </div>
                          </div>
                        ) : (
                          <button
                            onClick={() => handleSourceDownloadSimulation(res.id, res.title)}
                            className="w-full py-2.5 bg-black hover:bg-emerald-700 text-white text-[10px] font-bold uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-1.5"
                          >
                            <Download className="h-3.5 w-3.5" />
                            <span>Download ZIP Folder ({res.fileSize})</span>
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

          </div>
        )}

      </div>
    </section>
  );
}
