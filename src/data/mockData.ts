import { Course, DesignResource, PortfolioProject, BlogPost, Testimonial, FAQItem, HomePageConfig } from '../types';

export const COURSES: Course[] = [
  {
    id: 'premium-packaging-design',
    title: 'Masterclass in Premium Packaging & Product Label Design',
    category: 'Packaging Design',
    tagline: 'Learn the secrets of luxury packaging, print mechanics, and 3D mockups.',
    description: 'A complete end-to-end program teaching print-ready die lines, materials, material finishes, commercial branding psychology, and photo-real 3D mockup rendering in Blender.',
    coverImage: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80',
    originalPrice: 199,
    salePrice: 89,
    rating: 4.95,
    reviewsCount: 142,
    durationHrs: 28,
    lecturesCount: 45,
    difficulty: 'All Levels',
    features: [
      'Access to 40+ Premium Packaging CAD templates',
      'Step-by-step Blender 3D product mockup tutorials',
      'Direct feedback on your personal class projects',
      'Certificate of Completion & Freelancing Guide'
    ],
    skillsGained: [
      'CAD Packaging Die-lines',
      'Luxury Brand Positioning',
      'Industrial Material Choosing',
      'Photoreal Blender Rendering'
    ],
    modules: [
      {
        id: 'pkg-m1',
        title: 'Module 1: Foundations of Package Design & Structuring',
        lessons: [
          { id: 'pkg-u1', title: 'Welcome and Roadmap to Industry Standard Design', duration: '12:45', isFreePreview: true, videoUrl: 'yUzKb6DG-ks' },
          { id: 'pkg-u2', title: 'Anatomy of a Package: Panels, Flaps & Die-lines', duration: '22:15', isFreePreview: false },
          { id: 'pkg-u3', title: 'Dielines masterclass: Working with CAD vectors', duration: '35:40', isFreePreview: false }
        ]
      },
      {
        id: 'pkg-m2',
        title: 'Module 2: Luxury Finishes & Graphics in Adobe Illustrator',
        lessons: [
          { id: 'pkg-u4', title: 'Color Theory & Ink Management (CMYK vs Pantone)', duration: '18:50', isFreePreview: true, videoUrl: 'yUzKb6DG-ks' },
          { id: 'pkg-u5', title: 'Designing for Foil Stamping, Spot UV, and Embossing', duration: '28:10', isFreePreview: false },
          { id: 'pkg-u6', title: 'Exporting Press-Ready PDFs with Bleeds & Crops', duration: '24:00', isFreePreview: false }
        ]
      },
      {
        id: 'pkg-m3',
        title: 'Module 3: 3D Visualization in Blender',
        lessons: [
          { id: 'pkg-u7', title: 'Blender interface for Package Designers', duration: '20:15', isFreePreview: false },
          { id: 'pkg-u8', title: 'Creating realistic glass, plastic & cardboard shaders', duration: '32:30', isFreePreview: false },
          { id: 'pkg-u9', title: 'Final Studio Lighting & Production Grade Renderings', duration: '40:10', isFreePreview: false }
        ]
      }
    ]
  },
  {
    id: 'advanced-ui-ux-design-systems',
    title: 'Design Systems & UI/UX Career Accelerator with Figma',
    category: 'UI/UX Design',
    tagline: 'Learn Figma auto-layout, advanced design systems, variables & interactive handoff.',
    description: 'Transform from a visual UI artist into a high-earning UX Architect. Learn responsive components, atomic structure, tokens, user journey mapping, and Framer direct publishing.',
    coverImage: 'https://images.unsplash.com/photo-1561070791-26c113006238?auto=format&fit=crop&w=600&q=80',
    originalPrice: 249,
    salePrice: 119,
    rating: 4.88,
    reviewsCount: 310,
    durationHrs: 35,
    lecturesCount: 58,
    difficulty: 'Intermediate',
    features: [
      'Lifetime Access to Md. Azizul Hakim\'s Core Figma Starter kit',
      'Dynamic high-fidelity prototyping challenges',
      'Client presentation framework templates',
      '1-on-1 portfolio review session eligibility'
    ],
    skillsGained: [
      'Figma Variables & Tokens',
      'Advanced Multi-Platform Design Systems',
      'Responsive Auto-Layout v5',
      'Framer Web Deployment'
    ],
    modules: [
      {
        id: 'ux-m1',
        title: 'Module 1: Core UX Foundations & Strategic Flow',
        lessons: [
          { id: 'ux-u1', title: 'UI vs UX: Developing a Strategic Product Mindset', duration: '15:20', isFreePreview: true, videoUrl: 'yUzKb6DG-ks' },
          { id: 'ux-u2', title: 'User Research Methods & Journey Mapping That Works', duration: '25:40', isFreePreview: false },
          { id: 'ux-u3', title: 'Wireframing & Information Architecture Rules', duration: '30:15', isFreePreview: false }
        ]
      },
      {
        id: 'ux-m2',
        title: 'Module 2: Mastering Figma Advanced Systems',
        lessons: [
          { id: 'ux-u4', title: 'Auto-Layout deep dive: Fluid cards and forms', duration: '42:15', isFreePreview: true, videoUrl: 'yUzKb6DG-ks' },
          { id: 'ux-u5', title: 'Component properties, variants & nested instances', duration: '38:10', isFreePreview: false },
          { id: 'ux-u6', title: 'Design Tokens, Variables, & Auto Light/Dark themes', duration: '45:00', isFreePreview: false }
        ]
      }
    ]
  },
  {
    id: 'framer-freelance-design-business',
    title: 'Framer Website Design & Freelancing Mastery',
    category: 'Freelancing & Business',
    tagline: 'Code-free web development. Sell high-ticket dynamic websites to international companies.',
    description: 'Why just deliver static Figma drafts when you can build fully responsive websites for clients? Learn Framer, custom canvas animations, CMS lists, and how to command $3,000+ per freelance project.',
    coverImage: 'https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=600&q=80',
    originalPrice: 179,
    salePrice: 79,
    rating: 4.92,
    reviewsCount: 188,
    durationHrs: 22,
    lecturesCount: 36,
    difficulty: 'All Levels',
    features: [
      '5 Complete Framer landing page templates',
      'Freelace Cold Email & Pitch Deck swipe file',
      'SEO optimization & page speed blueprints',
      'Discord Freelancer group access'
    ],
    skillsGained: [
      'Framer Development & Transitions',
      'Dynamic CMS Integration',
      'International High-Ticket Client Pitching',
      'No-Code Dev-Handoff'
    ],
    modules: [
      {
        id: 'fm-m1',
        title: 'Module 1: Figma to Framer workflow',
        lessons: [
          { id: 'fm-u1', title: 'Introduction to Framer Studio Layout', duration: '14:20', isFreePreview: true, videoUrl: 'yUzKb6DG-ks' },
          { id: 'fm-u2', title: 'Copying from Figma: Preventing stack breaks', duration: '19:40', isFreePreview: false },
          { id: 'fm-u3', title: 'Styling, stacks & relative breakpoints', duration: '28:15', isFreePreview: false }
        ]
      },
      {
        id: 'fm-m2',
        title: 'Module 2: Micro-Interactions & CMS',
        lessons: [
          { id: 'fm-u4', title: 'Creating magnetic button hover animations', duration: '15:10', isFreePreview: true, videoUrl: 'yUzKb6DG-ks' },
          { id: 'fm-u5', title: 'Dynamic blogging with CMS custom collections', duration: '31:40', isFreePreview: false }
        ]
      }
    ]
  }
];

export const DESIGN_RESOURCES: DesignResource[] = [
  {
    id: 'cosmic-dark-ui-kit',
    title: 'Cosmic Studio - High Contrast Figma SaaS UI Kit',
    category: 'Figma Kits',
    description: 'A luxurious dark/light SaaS dashboard UI Kit featuring 150+ variables, 40 responsive charts, and complete mobile layouts built with Figma Auto-Layout v5.',
    price: 39,
    originalPrice: 69,
    coverImage: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=600&q=80',
    software: 'Figma',
    fileSize: '48.2 MB',
    downloadsCount: 1240,
    rating: 4.9,
    features: [
      '12 Completed SaaS dashboards pages',
      'Atomic Typography system synced with Google Fonts',
      'Complete light mode and dark mode native token switches',
      'Vector charts, custom analytics modules & settings panels'
    ],
    demoUrl: 'https://figma.com/'
  },
  {
    id: 'lux-perfume-packaging-mockup',
    title: 'Minimalist Premium Perfume Bottle & Box Mockup Set',
    category: '3D Mockups',
    description: 'High-end 3D visual mockups for cosmetics and perfume labels. Features realistic glass reflections, premium textured cardboards, embossing shaders, and custom shadow maps.',
    price: 24,
    coverImage: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=600&q=80',
    software: 'Photoshop / Blender',
    fileSize: '154 MB',
    downloadsCount: 840,
    rating: 5.0,
    features: [
      '3 High-definition PSD files with smart object layers',
      '1 Blender raw file with materials and studio lighting set up',
      'Customizable background colors and surface details',
      'Gold foil and blind emboss smart filter ready'
    ],
    demoUrl: '#'
  },
  {
    id: 'kraft-carrier-die-lines',
    title: 'Structural CAD Dielines - Eco-Friendly Carrier Pack',
    category: 'Packaging',
    description: 'Flawless laser-cut ready structural package die-lines for premium beverages, food, and e-commerce shopping carriers. Pre-tested on heavy-duty cardboards.',
    price: 15,
    originalPrice: 25,
    coverImage: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=600&q=80',
    software: 'Illustrator / CAD / PDF',
    fileSize: '4.5 MB',
    downloadsCount: 410,
    rating: 4.8,
    features: [
      'Perfect vector paths with cut-crease lines color coded',
      'Detailed folding instructions sheet',
      'Fully resizable for personalized dimensions',
      'Tested with CNC cutting tables representation'
    ],
    demoUrl: '#'
  },
  {
    id: 'studio-deck-presentation-template',
    title: 'Agency Pitch & Visual Identity Presentation Deck',
    category: 'Bundles',
    description: 'A 60-slide hyper-minimal presentation tool built for designers pitching branding projects to global corporations. Win commercial deals with structured aesthetic slides.',
    price: 29,
    originalPrice: 49,
    coverImage: 'https://images.unsplash.com/photo-1512486130939-2c4f799d5a4f?auto=format&fit=crop&w=600&q=80',
    software: 'Figma / Keynote / PowerPoint',
    fileSize: '72 MB',
    downloadsCount: 975,
    rating: 4.95,
    features: [
      '60 Gorgeous unique slides, tailored typography',
      'Modular layout structures for portfolios & pricing charts',
      'Custom hand-crafted vector maps & tables',
      '100% vector based with easy image placeholding overlays'
    ],
    demoUrl: '#'
  },
  {
    id: 'creative-branding-asset-pack',
    title: 'Premium Studio Asset Pack: Gradients, Patterns & Shadows',
    category: 'Assets',
    description: 'Elevate your graphic compositions. A massive bundle of 50 noise gradients, 24 luxury tileable line patterns, and 30 organic natural window glass shadow PNG assets.',
    price: 19,
    coverImage: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=600&q=80',
    software: 'PNG / EPS / Figma',
    fileSize: '320 MB',
    downloadsCount: 1650,
    rating: 4.92,
    features: [
      '50 High-res noise textured wallpaper mesh gradients',
      '24 Vector minimal line tileable patterns',
      '30 Alpha shadow overlay PNG clips (leaves, blinds, frames)',
      'Compatible with Photoshop, Figma, Sketch, Canva, Illustrator'
    ],
    demoUrl: '#'
  }
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'lux-ambrosia-perfumes',
    title: 'Ambrosia Botanics - Luxury Perfumery Structural Packaging',
    category: 'Packaging',
    client: 'Ambrosia France',
    year: '2025',
    tags: ['Packaging Design', '3D Rendering', 'Brand Strategy', 'Foil Stamp'],
    coverImage: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'We created custom structural boxes and gold Foil-Stamped textures for Ambrosia France\'s seasonal botanical wellness collection. This elevated shelf appeal and established a 35% growth in direct boutique sales.',
    challenge: 'The brand wanted to shift from standard cylindrical boxes into a premium hexagon structure that uses sustainable kraft paper, without sacrificing the luxurious gold foiled illustration details.',
    solution: 'Engineered a highly durable custom CAD hexagonal die-line featuring friction locks, avoiding toxic industrial adhesives. Rendered precise photo-real marketing creatives in Blender prior to tool production to run a successful pre-order campaign.'
  },
  {
    id: 'paystream-mobile-hub',
    title: 'PayStream - Seamless Digital Treasury App Design System',
    category: 'Development',
    client: 'PayStream Financial LLC',
    year: '2025',
    tags: ['Fullstack React', 'TypeScript Systems', 'Tailwind CSS', 'State Engines'],
    coverImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
    description: 'A multi-utility cloud banking Web & Mobile workspace designed for modern micro-merchants throughout Europe. The client achieved average app-store onboarding satisfaction rates of 4.97.',
    challenge: 'Existing apps featured bloated navigation drawers, confusing currency conversion states, and slow multi-step authentication layouts.',
    solution: 'Designed and engineered a highly clean, single-screen dominant tab bar holding localized widgets. Leveraged strong modern typography with Inter and JetBrains Mono to keep high legibility for fractional transactions and account metrics.'
  },
  {
    id: 'hyper-futuristic-ai-gen',
    title: 'Quantum Dreams - Parametric Generative Brand Campaign',
    category: 'AI Artist',
    client: 'Neo-Aesthetics Co',
    year: '2025',
    tags: ['Generative AI', 'Stable Diffusion', 'Concept Art', 'LORA Fine-Tuning'],
    coverImage: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=800&q=80',
    description: 'Automated marketing campaigns using custom-trained Stable Diffusion checkpoints to render breathtaking high-end 3D product models in hyper-realistic botanical gardens.',
    challenge: 'Traditional physical photo shoots required $50,000 budgets and weeks of logistical coordination and material travel.',
    solution: 'Engineered a robust multi-prompt generative pipeline, outputting ultra-high definition product scenery assets with matching lighting and perspective setups under 5 hours.'
  },
  {
    id: 'cinematic-hype-cut',
    title: 'Pulse-Drive - Commercial High-Speed Video Campaign',
    category: 'Video Editor',
    client: 'Aether Motorsports',
    year: '2025',
    tags: ['After Effects', 'Premiere Pro', 'Creative Editorial', 'Sound Design'],
    coverImage: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80',
    description: 'Created a highly cinematic, fast-paced editorial launch video using advanced keyframe tracking, bespoke 3D transitions, and rich spatial audio cues.',
    challenge: 'The raw drone footage lacked rhythmic pace and intense tension, coming off as a generic flat car recording.',
    solution: 'Re-timed the entire video footage utilizing dynamic speed ramping matched 100% to synthetic synth bass drums. Hand-painted glowing neon vector accents on Adobe After Effects.'
  },
  {
    id: 'organic-pure-juices',
    title: 'Verde Nectar - Organic Minimal Juicery Label Aesthetics',
    category: 'Packaging',
    client: 'Verde LLC',
    year: '2024',
    tags: ['Brand Identity', 'Product Label', 'CAD Dielines', 'Blender Mockup'],
    coverImage: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80',
    description: 'A vibrant clean label overhaul for a cold-press juicery, shifting focus on transparency and absolute health trust markers through clear typography choices.',
    challenge: 'Competitors utilized cluttered vector illustrations of fruits, resulting in a cheap appearance that failed to match Verde\'s premium organic quality and high pricing tiers.',
    solution: 'Designed an elegant, high-contrast typography hierarchy showcasing ingredients in simple layout outlines, printed on textured compostable cornstarch labels.'
  },
  {
    id: 'vertex-studio-identity',
    title: 'Vertex - Tech Consultancy Web Design & Framer Deployment',
    category: 'UI/UX Design',
    client: 'Vertex Germany',
    year: '2024',
    tags: ['UI/UX Design', 'Framer Website', 'CMS System', 'Web Development'],
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    description: 'Corporate platform migration to Framer, integrating bespoke page animations, interactive service pricing sliders, and an extremely fast CMS portfolio list.',
    challenge: 'WordPress backend took 4.5 seconds to render and layout updates required complex code modifications across several non-adjacent lines.',
    solution: 'Designed and deployed a state-of-the-art Framer setup that loads in 0.6 seconds. Built custom component grids with auto-alignment and fluid margins for seamless editing.'
  },
  {
    id: 'aura-3d-glassware',
    title: 'Aura Glassware - Conceptual Immersive 3D Cosmetics World',
    category: 'Immersive 3D',
    client: 'Aura Luxe Sweden',
    year: '2025',
    tags: ['Immersive 3D', 'Blender Renders', 'Realistic Shaders', 'Lighting Studio'],
    coverImage: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Designed an interactive 3D digital canvas placing glass perfume models in various high-fidelity lighting scenarios.',
    challenge: 'Traditional product photography failed to capture the subtle inner laser-engraved details inside the thick double-wall glassware.',
    solution: 'Created physical-based refractive glass shaders in Blender. Rendered clean 8K layouts showing micro dust-particles and realistic light caustics.'
  },
  {
    id: 'zephyr-holistic-branding',
    title: 'Zephyr Organics - Holistic Brand System & Guidelines',
    category: 'Branding',
    client: 'Zephyr Organics',
    year: '2024',
    tags: ['Brand Identity', 'Minimalist Logo', 'Brand Guidelines', 'Visual Guidelines'],
    coverImage: 'https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?auto=format&fit=crop&w=800&q=80',
    description: 'Developed a comprehensive luxury typography guideline and organic brand visual layout for a premier premium cosmetics manufacturer.',
    challenge: 'The client lacked brand consistency across several packaging lines, causing confusion in retail shelves and organic identity drop-off.',
    solution: 'Selected high-contrast serif and sans-serif pairings (Playfair Display and Inter). Produced custom gold-foiled business cards, stationery letterheads, and unified color palette matrices.'
  },
  {
    id: 'apex-social-marketing',
    title: 'Apex Energy - High-Conversion Social Ad Elements',
    category: 'Social Media Marketing',
    client: 'Apex Athlete Co.',
    year: '2025',
    tags: ['Social Media Elements', 'Ad Campaigns', 'Visual Strategy', 'SMM Design'],
    coverImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
    description: 'Engineered ultra-dynamic, eye-catching visual banner assets for high-budget social media promotion, boosting audience engagement by 24%.',
    challenge: 'Static graphic ads had high friction rates and low click-through rates (under 1.2%) because of visual clutter and generic design formats.',
    solution: 'Designed a clean, bold asymmetrical grid showing 3D mockups styled with motion lines, high-contrast neon highlights, and persuasive copy layouts.'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'pkg-luxury-rules',
    title: '7 Crucial Rules of Designing Luxury Packaging (and Why Dielines Matter)',
    slug: 'rules-of-luxury-packaging-design',
    category: 'Packaging',
    excerpt: 'Before placing any color gradient or logo on a luxury cardboard, your structural CAD curves must be perfect. Here is why craftsmanship starts with dielines.',
    content: `Luxury packaging is not about adding louder colors or bigger foil stamps. It is a sensory experience defined by mathematics, paper physics, and subtle branding psychology.

## 1. The Structure is the Real Brand
Too many graphic artists start with an empty Illustrator canvas and place beautiful vector art without knowing if the box folds properly. The weight of your cardboard, the resistance of the friction tabs, and the sound of the air release upon opening are what communicate "luxury" to the consumer. Always design or test your CAD dieline first.

## 2. Leverage CMYK vs Pantone Correctly
Digital screens render colors in RGB. Press rollers use ink. To secure matching luxury gold lines or consistent brand colors cross-country, never rely on standard CMYK offsets. Utilize official Pantone Solid Coated systems and instruct your printer exactly on hot metallic-foil stamps.

## 3. Emphasize Quiet Luxury & Generous Negative Space
Look at high-end cosmetics or luxury watches. Their graphics use simple layouts, pristine sans-serif or elegant serif typography, and rich off-whites, dark charcoal grays, or solid blacks. Let your typography pair with the texture of the cardboard itself. Over-decorating leads to a cheap visual appearance.

## 4. Design for Tactile Feedback (Materials)
The material finish plays a huge part. Choosing soft-touch matte lamination, uncoated kraft cardboards, or heavily debossed details forces hands to stay longer on your package. Physical contact drives sales conversion!`,
    coverImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80',
    readTime: '6 mins read',
    publishedDate: 'May 12, 2026',
    author: {
      name: 'Md. Azizul Hakim',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      role: 'Principal Brand Designer'
    }
  },
  {
    id: 'figma-variables-guide',
    title: 'A Decisive Guide to Figma Variables and Design Tokens v5',
    slug: 'figma-variables-design-tokens',
    category: 'UI/UX',
    excerpt: 'Are you still copy-pasting styling strings manually across fifty frames? Learn how to leverage alias tokens to make instant dark and light conversions.',
    content: `When Figma launched native variables, the divide between UI visual prototyping and actual codebase development shrunk significantly. Variables let you manage styles as single sources of truth.

## Why Variables Matter for Modern Designs
Instead of assigning a generic slate color like \`#1A1A1A\` directly to your UI frames, you declare a variable called \`color/background/primary\` that maps to it.

### Step 1: Establish Primitive vs. Semantic Collections
Never map your UI components directly to raw color tokens. Create two layers:
1. **Primitives**: e.g., \`Color/Charcoal-900 = #111111\`
2. **Semantic Semantic Tokens**: e.g., \`Color/Surface/Default = Aliased to Charcoal-900\`

### Step 2: Establish Multi-Theme Modes
Within the Figma variable table, configure a column for "Light Mode" and another for "Dark Mode". When you drag a frame inside an active container mapped to Dark Mode, Figma automatically swaps the values of the semantic tokens instantly, avoiding hundreds of hours of manual overrides.

### Step 3: Aligning Figma Tokens with CSS Tailwind variables
By exporting variables using Figma plugins to standard JSON tokens, you can automatically inject them into your Tailwind configuration (like CSS theme blocks), creating a flawless developer handoff with zero room for visual mistranslations.`,
    coverImage: 'https://images.unsplash.com/photo-1541462608141-ad4979e408c9?auto=format&fit=crop&w=600&q=80',
    readTime: '8 mins read',
    publishedDate: 'April 28, 2026',
    author: {
      name: 'Md. Azizul Hakim',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      role: 'UI/UX Specialist'
    }
  },
  {
    id: 'freelance-design-business-secrets',
    title: 'How I Transitioned from $15 Logo Contests to $3k Framer Website Deals',
    slug: 'how-to-scale-freelance-design-business',
    category: 'Freelancing',
    excerpt: 'Stop competing with ten thousand visual coders on standard bid platforms. Learn why offering Framer web publishing scales your income tenfold.',
    content: `If you are still offering "Premium Logo Concept designs for $30" on Fiverr or Upwork, you are in a race to the bottom. In today\'s competitive creative landscape, visual assets are heavily commoditized.

## Rule 1: Shift from Creative Deliverables to Business Outcomes
Clients do not care about bezier curve alignment or beautiful logo grids. They care about their e-commerce conversion rates, lead generation, and online authority. Present your designs as custom systems built to boost sales and drive business growth.

## Rule 2: Solve the Dev-Handoff Bottleneck (Learn Framer)
Many visual designers create stunning mobile application drafts or complex website mockups in Figma, deliver them, and walk away. The client then hires a cheap developer who completely ruins the layout spacing, typography sizes, and alignments. 

By building the final website directly in a no-code visual development platform like **Framer**, you eliminate the developer step. You deliver a live, functional, fast-loading, highly polished web page. This results in standard website contracts scaling from simple $300 assets into $3,000 complete platform packages.

## Rule 3: Craft High-Converting Case Studies (Not Just Mockups)
Ditch standard Unsplash mockups that have zero context. Walk prospective clients through:
- **The Challenge**: The business problem (e.g., "The client\'s website failed to capture mobile merchant registrations").
- **The Process**: Your analytical UX research and competitive audits.
- **The Result**: Measurable, functional statistics (e.g., "The design overhaul led to a 40% uptick in customer conversions in the first quadrant").`,
    coverImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80',
    readTime: '5 mins read',
    publishedDate: 'March 15, 2026',
    author: {
      name: 'Md. Azizul Hakim',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      role: 'Digital Product Creator'
    }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Oliver Kaufmann',
    role: 'CEO & Founder',
    company: 'Scent & Atelier Germany',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
    rating: 5,
    comment: 'Azizul revamped our organic scent collection packaging from scratch. His structural engineering of the CAD dielines and Blender photo-real textures allowed us to start generating sales prior to cutting physical print dies. An absolute master designer!',
    category: 'Packaging'
  },
  {
    id: 't2',
    name: 'Sarah Jenkins',
    role: 'Product Director',
    company: 'FintechHub London',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
    rating: 5,
    comment: 'We hired Md. Azizul for our major app redesign. His Figma Design System was so clean and modular—complete with local styles and responsive auto-layout structures—that our production developers completed integration two weeks ahead of schedule.',
    category: 'UI/UX Design'
  },
  {
    id: 't3',
    name: 'Matias Lindqvist',
    role: 'Co-Founder',
    company: 'Solio Solar Systems',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
    rating: 5,
    comment: 'Having Azizul build our company website directly in Framer was the best decision we made. We avoided standard developer mistranslations and gained a lightning-fast premium landing page with luxurious motion physics. Outstanding freelance professionalism.',
    category: 'Framer Website'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'f1',
    question: 'Are there print-ready resources and templates included in the courses?',
    answer: 'Absolutely. Every course contains full material packages, standard industrial CAD dielines (.AI, .EPS, .DXF, .PDF), custom material shaders, and ready-to-use Figma starter variables frameworks.',
    category: 'courses'
  },
  {
    id: 'f2',
    question: 'How do the Digital Resource downloads work on this website?',
    answer: 'For premium assets and mockups, once your checkout is complete, they are instantly added to your personal "Library" page. You can download the source folders as ZIP files containing commercial-license print CAD shapes, Blender lighting raw paths, and Figma system files.',
    category: 'resources'
  },
  {
    id: 'f3',
    question: 'Can I hire Md. Azizul Hakim for a bespoke corporate project?',
    answer: 'Yes! Azizul works with selective international brands, startups, e-commerce stores, and packaging manufacturers on a contract basis. Please submit your project scope details using the Contact Section form to receive an editorial visual proposal proposal.',
    category: 'services'
  },
  {
    id: 'f4',
    question: 'What softwares do I need to learn your course materials?',
    answer: 'Depending on the course: packaging design utilizes Adobe Illustrator and Blender (Free); UI/UX lessons are instructed in Figma (Free tiers are fine); website composition and freelancer mastery utilize Framer.',
    category: 'general'
  }
];

export const DEFAULT_HOME_PAGE_CONFIG: HomePageConfig = {
  heroBadge: "Multidisciplinary Design & Dev Studio",
  heroLine1: "Design.",
  heroLine2: "Code.",
  heroLine3Metallic: "Create.",
  heroTagsList: "Packaging Design, Development, AI Artist, Video Editor",
  heroParagraph: "Helping brands and organizations produce high-converting products, elite full-stack system architectures, surreal artistic visuals, and dynamic media compositions with luxurious execution.",
  
  aboutOverHeading: "THE DESIGNER BEHIND THE BRAND",
  aboutHeadingName: "Md. Azizul Hakim",
  aboutShortPitch: "Hi, I'm Md. Azizul Hakim, a multidisciplinary designer specializing in Packaging Design, Brand Identity Design, UI/UX Design, 3D Product Visualization, Motion Graphics, and Digital Product Development.",
  aboutParagraph1: "Over the years, I have helped global businesses create impactful visual identities, premium product packaging, intuitive user experiences, and high-converting digital assets. My work seamlessly translates strategic design thinking into beautiful, product-ready visual outcomes.",
  aboutParagraph2: "Whether designing a luxury fragrance package with complex gold foil alignment or writing components for custom SaaS design tokens, my goal is exact: help brands stand out in fierce, competitive global markets.",
  aboutMandate: "My mission is simple: transform raw creative ideas into memorable, functional visual experiences that drive measurable business growth.",
  aboutSpecializations: [
    { title: 'Packaging Design', desc: 'Crafting luxury, high-end outer hulls, custom CAD dielines, paper engineering, and photorealistic 3D presentation.' },
    { title: 'UI/UX Design Systems', desc: 'Constructing robust, token-synergized product frameworks, fluid Figma variants, and direct Framer deployments.' },
    { title: 'Brand Identity', desc: 'Conceptualizing memorable typography, geometric logos, brand guidelines, and distinctive print methodologies.' },
    { title: '3D Product Visualization', desc: 'Creating immaculate studio-lit product renders and packaging close-ups in Blender & Keyshot (no physical prototyping needed).' }
  ],
  aboutPartnerVerts: [
    'Startups & Tech Incubators',
    'Premium eCommerce Brands',
    'Paper & Bottle Manufacturers',
    'Luxury Wellness & Cosmetics',
    'Gourmet Food & Beverages',
    'Digital Product Entrepreneurs'
  ],
  
  faqOverheading: "Self-Service Hub",
  faqHeading: "Commonly Asked Questions",
  faqSubtext: "Understand academic licensing, source package contents, and custom collaboration pathways with Md. Azizul Hakim.",
  
  contactBadge: "LET'S ARRANGE A PARTNERSHIP",
  contactHeading: "Get In Touch",
  contactParagraph: "Whether you need luxury packaging die-lines, high-end Figma system components, fullstack application engineering, AI artistic creative assets, or dynamic video edit sequences, let's explore."
};

