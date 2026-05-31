export interface Lesson {
  id: string;
  title: string;
  duration: string;
  isFreePreview: boolean;
  videoUrl?: string; // e.g. Youtube embed ID or placeholder
}

export interface CourseModule {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  coverImage: string;
  originalPrice: number;
  salePrice: number;
  rating: number;
  reviewsCount: number;
  durationHrs: number;
  lecturesCount: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  modules: CourseModule[];
  features: string[];
  skillsGained: string[];
}

export interface DesignResource {
  id: string;
  title: string;
  category: 'Packaging' | 'Figma Kits' | '3D Mockups' | 'Bundles' | 'Assets';
  description: string;
  price: number;
  originalPrice?: number;
  coverImage: string;
  software: string; // e.g., Figma, Photoshop, Illustrator, Blender
  fileSize: string;
  downloadsCount: number;
  rating: number;
  features: string[];
  demoUrl?: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: 'Packaging' | 'UI/UX Design' | '3D Visualization' | 'Immersive 3D' | 'Branding' | 'Social Media Marketing' | 'Development' | 'AI Artist' | 'Video Editor';
  client: string;
  year: string;
  tags: string[];
  coverImage: string;
  galleryImages?: string[];
  description: string;
  challenge: string;
  solution: string;
  liveUrl?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: 'Branding' | 'Packaging' | 'UI/UX' | 'Freelancing' | 'Business' | 'Tutorial';
  excerpt: string;
  content: string; // Rich text / markdown string
  coverImage: string;
  readTime: string;
  publishedDate: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  comment: string;
  category: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'courses' | 'resources' | 'services';
}

export interface CartItem {
  id: string;
  title: string;
  type: 'course' | 'resource';
  price: number;
  coverImage: string;
}

export interface SpecializationItem {
  title: string;
  desc: string;
}

export interface HomePageConfig {
  heroBadge: string;
  heroLine1: string;
  heroLine2: string;
  heroLine3Metallic: string;
  heroTagsList: string;
  heroParagraph: string;
  
  aboutOverHeading: string;
  aboutHeadingName: string;
  aboutShortPitch: string;
  aboutParagraph1: string;
  aboutParagraph2: string;
  aboutMandate: string;
  aboutSpecializations: SpecializationItem[];
  aboutPartnerVerts: string[];
  
  faqOverheading: string;
  faqHeading: string;
  faqSubtext: string;
  
  contactBadge: string;
  contactHeading: string;
  contactParagraph: string;
}

