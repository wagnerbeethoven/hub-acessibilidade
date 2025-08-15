import React, { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

// Simple UI Components
function Button({ 
  children, 
  variant = "default", 
  size = "default", 
  className = "", 
  asChild = false,
  ...props 
}: {
  children: React.ReactNode;
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  asChild?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const baseClasses = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
  
  const variantClasses = {
    default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
    outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground"
  }
  
  const sizeClasses = {
    default: "h-9 px-4 py-2",
    sm: "h-8 rounded-md px-3 text-xs",
    lg: "h-10 rounded-md px-8",
    icon: "h-9 w-9"
  }
  
  const combinedClassName = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`.trim()
  
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: combinedClassName,
      ...props
    })
  }
  
  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  )
}

function Card({ children, className = "", ...props }: { children: React.ReactNode; className?: string } & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`rounded-xl border bg-card text-card-foreground shadow ${className}`} {...props}>
      {children}
    </div>
  )
}

function CardHeader({ children, className = "", ...props }: { children: React.ReactNode; className?: string } & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props}>
      {children}
    </div>
  )
}

function CardContent({ children, className = "", ...props }: { children: React.ReactNode; className?: string } & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`p-6 pt-0 ${className}`} {...props}>
      {children}
    </div>
  )
}

function CardTitle({ children, className = "", ...props }: { children: React.ReactNode; className?: string } & React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={`font-semibold leading-none tracking-tight ${className}`} {...props}>
      {children}
    </h3>
  )
}

function CardDescription({ children, className = "", ...props }: { children: React.ReactNode; className?: string } & React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={`text-sm text-muted-foreground ${className}`} {...props}>
      {children}
    </p>
  )
}

function Badge({ children, variant = "default", className = "", ...props }: {
  children: React.ReactNode;
  variant?: "default" | "secondary" | "outline";
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>) {
  const baseClasses = "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors"
  
  const variantClasses = {
    default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
    secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline: "text-foreground border-border"
  }
  
  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </div>
  )
}

function Avatar({ children, className = "", ...props }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ${className}`} {...props}>
      {children}
    </div>
  )
}

function AvatarImage({ src, alt, className = "" }: { src?: string; alt?: string; className?: string }) {
  return (
    <ImageWithFallback 
      src={src || ""} 
      alt={alt || ""} 
      className={`aspect-square h-full w-full object-cover ${className}`} 
    />
  )
}

function AvatarFallback({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`flex h-full w-full items-center justify-center rounded-full bg-muted text-muted-foreground ${className}`}>
      {children}
    </div>
  )
}

function Separator({ className = "", orientation = "horizontal" }: { className?: string; orientation?: "horizontal" | "vertical" }) {
  return (
    <div 
      className={`shrink-0 bg-border ${orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]"} ${className}`}
    />
  )
}

function Tabs({ children, defaultValue, className = "" }: { 
  children: React.ReactNode; 
  defaultValue?: string; 
  className?: string;
}) {
  const [activeTab, setActiveTab] = useState(defaultValue || "");
  
  return (
    <div className={className} data-active-tab={activeTab}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && typeof child.type !== 'string') {
          return React.cloneElement(child, { activeTab, setActiveTab } as any);
        }
        return child;
      })}
    </div>
  )
}

function TabsList({ children, className = "", activeTab, setActiveTab }: { 
  children: React.ReactNode; 
  className?: string;
  activeTab?: string;
  setActiveTab?: (tab: string) => void;
}) {
  return (
    <div className={`inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground ${className}`}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && typeof child.type !== 'string') {
          return React.cloneElement(child, { activeTab, setActiveTab } as any);
        }
        return child;
      })}
    </div>
  )
}

function TabsTrigger({ 
  children, 
  value, 
  className = "",
  activeTab,
  setActiveTab
}: { 
  children: React.ReactNode; 
  value: string; 
  className?: string;
  activeTab?: string;
  setActiveTab?: (tab: string) => void;
}) {
  const isActive = activeTab === value;
  
  return (
    <button 
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${isActive ? 'bg-background text-foreground shadow-sm' : ''} ${className}`}
      onClick={() => setActiveTab?.(value)}
    >
      {children}
    </button>
  )
}

function TabsContent({ 
  children, 
  value, 
  className = "",
  activeTab
}: { 
  children: React.ReactNode; 
  value: string; 
  className?: string;
  activeTab?: string;
}) {
  if (activeTab !== value) return null;
  
  return (
    <div className={`mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${className}`}>
      {children}
    </div>
  )
}

// Simple Icons (replacing lucide-react)
const BookOpen = ({ className = "" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
)

const Users = ({ className = "" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
  </svg>
)

const Globe = ({ className = "" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>
)

const Mic = ({ className = "" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
  </svg>
)

const MapPin = ({ className = "" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const Award = ({ className = "" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
)

const Github = ({ className = "" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
)

const Twitter = ({ className = "" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
  </svg>
)

const Linkedin = ({ className = "" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const ExternalLink = ({ className = "" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
)

export function PeopleSection() {
  const [selectedCategory, setSelectedCategory] = useState('community');

  // Community Members from original PeopleProjectsSection
  const communityMembers = [
    {
      id: 1,
      name: 'Sarah Chen',
      title: 'Senior UX Designer',
      company: 'Microsoft',
      location: 'Seattle, WA',
      bio: 'Leading inclusive design initiatives at Microsoft and advocating for accessibility in enterprise software.',
      expertise: ['Inclusive Design', 'Enterprise UX', 'WCAG Guidelines'],
      achievements: ['Microsoft Accessibility Champion 2024', 'A11y Conference Speaker'],
      socialLinks: {
        twitter: 'https://twitter.com/sarahchen',
        linkedin: 'https://linkedin.com/in/sarahchen',
        website: 'https://sarahchen.design'
      },
      isFeatured: true,
      type: 'community'
    },
    {
      id: 2,
      name: 'Dr. Maria Rodriguez',
      title: 'Assistive Technology Researcher',
      company: 'Stanford University',
      location: 'Palo Alto, CA',
      bio: 'Pioneering research in AI-powered assistive technologies and their impact on digital accessibility.',
      expertise: ['Assistive Technology', 'AI Research', 'Screen Readers'],
      achievements: ['ACM SIGACCESS Award 2023', 'Published 40+ Research Papers'],
      socialLinks: {
        linkedin: 'https://linkedin.com/in/mariarodriguez',
        website: 'https://stanford.edu/~mrodriguez'
      },
      isFeatured: true,
      type: 'community'
    },
    {
      id: 3,
      name: 'Alex Kim',
      title: 'Frontend Developer & A11y Advocate',
      company: 'Shopify',
      location: 'Toronto, Canada',
      bio: 'Building accessible e-commerce experiences and contributing to open-source accessibility tools.',
      expertise: ['React Accessibility', 'Web Components', 'Testing'],
      achievements: ['axe-core Contributor', 'React A11y Library Creator'],
      socialLinks: {
        github: 'https://github.com/alexkim',
        twitter: 'https://twitter.com/alexkimdev',
        linkedin: 'https://linkedin.com/in/alexkim'
      },
      isFeatured: false,
      type: 'community'
    },
    {
      id: 4,
      name: 'Jennifer Wu',
      title: 'Accessibility Consultant',
      company: 'Independent',
      location: 'San Francisco, CA',
      bio: 'Helping startups and Fortune 500 companies build accessible products from the ground up.',
      expertise: ['Accessibility Auditing', 'Training', 'WCAG Compliance'],
      achievements: ['500+ Accessibility Audits', 'CPACC Certified'],
      socialLinks: {
        linkedin: 'https://linkedin.com/in/jenniferwu',
        website: 'https://a11yconsulting.com'
      },
      isFeatured: false,
      type: 'community'
    }
  ];

  // Accessibility Professionals from ProfessionalsSection
  const professionals = [
    {
      id: 5,
      name: "Haben Girma",
      title: "Disability Rights Advocate & Author",
      company: "Harvard Law School",
      bio: "First deafblind graduate of Harvard Law School, disability rights advocate, and author of 'Haben: The Deafblind Woman Who Conquered Harvard Law'.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b120?w=150&h=150&fit=crop&crop=face",
      expertise: ["Disability Rights", "Legal Advocacy", "Inclusive Design", "Public Speaking"],
      achievements: [
        "Named a White House Champion of Change",
        "Recipient of Helen Keller Achievement Award",
        "International disability rights advocate"
      ],
      socialLinks: {
        website: "https://habengirma.com",
        twitter: "https://twitter.com/HabenGirma",
        linkedin: "https://linkedin.com/in/habengirma"
      },
      isFeatured: true,
      type: 'professional'
    },
    {
      id: 6,
      name: "Léonie Watson",
      title: "Accessibility Engineer & Co-founder",
      company: "TetraLogical",
      bio: "Co-founder of TetraLogical, accessibility expert, and advocate. Member of W3C Advisory Board and former co-chair of the W3C Web Platform WG.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
      expertise: ["Web Standards", "Screen Readers", "ARIA", "W3C Standards"],
      achievements: [
        "W3C Advisory Board member",
        "Former W3C Web Platform WG co-chair",
        "TetraLogical co-founder"
      ],
      socialLinks: {
        website: "https://tetralogical.com",
        twitter: "https://twitter.com/LeonieWatson",
        linkedin: "https://linkedin.com/in/leoniewatson"
      },
      isFeatured: true,
      type: 'professional'
    },
    {
      id: 7,
      name: "Adrian Roselli",
      title: "Accessibility Consultant",
      company: "Independent Consultant",
      bio: "Accessibility consultant, speaker, and blogger. Focuses on inclusive design, WCAG compliance, and practical accessibility solutions for developers.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      expertise: ["WCAG Compliance", "Testing", "Developer Training", "Inclusive Design"],
      achievements: [
        "Accessibility consultant for 20+ years",
        "Regular conference speaker",
        "Accessibility blog author"
      ],
      socialLinks: {
        website: "https://adrianroselli.com",
        twitter: "https://twitter.com/aardrian",
        linkedin: "https://linkedin.com/in/adrianroselli"
      },
      isFeatured: false,
      type: 'professional'
    },
    {
      id: 8,
      name: "Sarah Horton",
      title: "UX Accessibility Consultant",
      company: "The Paciello Group",
      bio: "User experience and accessibility expert, author, and advocate for inclusive design practices. Co-author of 'A Web for Everyone'.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      expertise: ["UX Design", "Inclusive Design", "Content Strategy", "Design Systems"],
      achievements: [
        "Co-author of 'A Web for Everyone'",
        "UX accessibility consultant",
        "Inclusive design advocate"
      ],
      socialLinks: {
        website: "https://sarahhortondesign.com",
        twitter: "https://twitter.com/gradualclearing",
        linkedin: "https://linkedin.com/in/sarahhorton"
      },
      isFeatured: false,
      type: 'professional'
    },
    {
      id: 9,
      name: "Dennis Lembree",
      title: "Web Accessibility Engineer",
      company: "PayPal",
      bio: "Senior accessibility engineer at PayPal, conference speaker, and creator of accessibility resources. Passionate about making the web accessible for everyone.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      expertise: ["Frontend Development", "Accessibility Testing", "ARIA", "Mobile Accessibility"],
      achievements: [
        "PayPal accessibility engineer",
        "Web accessibility conference speaker",
        "Accessibility resource creator"
      ],
      socialLinks: {
        website: "https://www.dennislembree.com",
        twitter: "https://twitter.com/dennisl",
        linkedin: "https://linkedin.com/in/dennislembree"
      },
      isFeatured: false,
      type: 'professional'
    },
    {
      id: 10,
      name: "Marcy Sutton Todd",
      title: "Accessibility Engineer & Advocate",
      company: "Independent Consultant",
      bio: "Former Head of Learning at Gatsby, accessibility engineer, and creator of accessibility courses. Expert in JavaScript accessibility and testing.",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
      expertise: ["JavaScript Accessibility", "Testing", "Education", "React Development"],
      achievements: [
        "Former Gatsby Head of Learning",
        "Accessibility course creator",
        "JavaScript accessibility expert"
      ],
      socialLinks: {
        website: "https://marcysutton.com",
        twitter: "https://twitter.com/marcysutton",
        linkedin: "https://linkedin.com/in/marcysutton"
      },
      isFeatured: false,
      type: 'professional'
    }
  ];

  const allPeople = [...communityMembers, ...professionals];
  const featuredPeople = allPeople.filter(person => person.isFeatured);

  const categories = [
    {
      title: "Legal & Advocacy",
      icon: <BookOpen className="h-4 w-4" />,
      people: allPeople.filter(p => 
        p.expertise.some(s => s.includes('Rights') || s.includes('Legal') || s.includes('Advocacy'))
      )
    },
    {
      title: "Technical & Development",
      icon: <Users className="h-4 w-4" />,
      people: allPeople.filter(p => 
        p.expertise.some(s => s.includes('Development') || s.includes('Testing') || s.includes('React') || s.includes('Frontend'))
      )
    },
    {
      title: "Design & UX",
      icon: <Globe className="h-4 w-4" />,
      people: allPeople.filter(p => 
        p.expertise.some(s => s.includes('Design') || s.includes('UX'))
      )
    },
    {
      title: "Research & Standards",
      icon: <Mic className="h-4 w-4" />,
      people: allPeople.filter(p => 
        p.expertise.some(s => s.includes('Research') || s.includes('Standards') || s.includes('ARIA') || s.includes('WCAG'))
      )
    }
  ];

  const CommunityPersonCard = ({ person }: { person: any }) => (
    <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
      <CardHeader>
        <div className="flex items-start space-x-4">
          <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
            <Users className="h-8 w-8 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-1">
              <CardTitle className="group-hover:text-primary transition-colors">
                {person.name}
              </CardTitle>
              {person.isFeatured && <Badge variant="default">Featured</Badge>}
            </div>
            <CardDescription className="text-base">
              {person.title} at {person.company}
            </CardDescription>
            {person.location && (
              <div className="flex items-center text-sm text-muted-foreground mt-1">
                <MapPin className="h-3 w-3 mr-1" />
                {person.location}
              </div>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          {person.bio}
        </p>
        
        <div className="mb-4">
          <div className="text-sm mb-2">Expertise:</div>
          <div className="flex flex-wrap gap-1">
            {person.expertise.slice(0, 3).map((skill: string) => (
              <Badge key={skill} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <div className="text-sm mb-2 flex items-center">
            <Award className="h-3 w-3 mr-1" />
            Achievements:
          </div>
          <ul className="text-sm text-muted-foreground space-y-1">
            {person.achievements.slice(0, 2).map((achievement: string, index: number) => (
              <li key={index} className="flex items-start">
                <span className="w-1 h-1 bg-primary rounded-full mt-2 mr-2 flex-shrink-0" />
                {achievement}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex space-x-2">
          {person.socialLinks.github && (
            <Button size="sm" variant="outline" asChild>
              <a href={person.socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${person.name}'s GitHub`}>
                <Github className="h-3 w-3" />
              </a>
            </Button>
          )}
          {person.socialLinks.twitter && (
            <Button size="sm" variant="outline" asChild>
              <a href={person.socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label={`Follow ${person.name} on Twitter`}>
                <Twitter className="h-3 w-3" />
              </a>
            </Button>
          )}
          {person.socialLinks.linkedin && (
            <Button size="sm" variant="outline" asChild>
              <a href={person.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`Connect with ${person.name} on LinkedIn`}>
                <Linkedin className="h-3 w-3" />
              </a>
            </Button>
          )}
          {person.socialLinks.website && (
            <Button size="sm" variant="outline" asChild>
              <a href={person.socialLinks.website} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${person.name}'s website`}>
                <ExternalLink className="h-3 w-3" />
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );

  const ProfessionalPersonCard = ({ person }: { person: any }) => (
    <Card className="group hover:shadow-lg transition-all duration-300">
      <CardHeader className="text-center pb-4">
        <div className="relative mb-4">
          <Avatar className="w-20 h-20 mx-auto border-2 border-primary/20">
            <AvatarImage src={person.image} alt={person.name} />
            <AvatarFallback>{person.name.split(' ').map((n: string) => n[0]).join('')}</AvatarFallback>
          </Avatar>
        </div>
        <CardTitle className="text-lg">{person.name}</CardTitle>
        <CardDescription className="text-sm">
          {person.title}
          <br />
          <span className="text-primary">{person.company}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          {person.bio}
        </p>
        
        <div className="space-y-2">
          <h5 className="text-xs text-muted-foreground uppercase tracking-wider">Specialties</h5>
          <div className="flex flex-wrap gap-1">
            {person.expertise.slice(0, 3).map((specialty: string) => (
              <Badge key={specialty} variant="secondary" className="text-xs">
                {specialty}
              </Badge>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <h5 className="text-xs text-muted-foreground uppercase tracking-wider">Key Achievements</h5>
          <ul className="text-xs text-muted-foreground space-y-1">
            {person.achievements.slice(0, 2).map((achievement: string, index: number) => (
              <li key={index} className="flex items-start">
                <span className="w-1 h-1 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                {achievement}
              </li>
            ))}
          </ul>
        </div>

        <Separator />

        <div className="flex justify-center space-x-2">
          {person.socialLinks.website && (
            <Button variant="outline" size="icon" asChild>
              <a 
                href={person.socialLinks.website} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={`Visit ${person.name}'s website`}
              >
                <Globe className="h-4 w-4" />
              </a>
            </Button>
          )}
          {person.socialLinks.twitter && (
            <Button variant="outline" size="icon" asChild>
              <a 
                href={person.socialLinks.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={`Follow ${person.name} on Twitter`}
              >
                <Twitter className="h-4 w-4" />
              </a>
            </Button>
          )}
          {person.socialLinks.linkedin && (
            <Button variant="outline" size="icon" asChild>
              <a 
                href={person.socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={`Connect with ${person.name} on LinkedIn`}
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-12 text-center">
        <h1 className="mb-4">Accessibility People</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
          Meet the inspiring individuals driving accessibility forward through design, development, research, and advocacy.
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          <Badge variant="outline">Community Members</Badge>
          <Badge variant="outline">Industry Leaders</Badge>
          <Badge variant="outline">Advocates</Badge>
          <Badge variant="outline">Researchers</Badge>
          <Badge variant="outline">Developers</Badge>
        </div>
      </div>

      <Tabs defaultValue="featured" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
          <TabsTrigger value="featured">Featured</TabsTrigger>
          <TabsTrigger value="community">Community</TabsTrigger>
          <TabsTrigger value="professionals">Professionals</TabsTrigger>
        </TabsList>

        <TabsContent value="featured" className="space-y-6">
          <div className="text-center mb-8">
            <h2 className="mb-4">Featured People</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Highlighting exceptional contributors to the accessibility community who are making significant impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPeople.map((person) => (
              person.type === 'community' ? (
                <CommunityPersonCard key={person.id} person={person} />
              ) : (
                <ProfessionalPersonCard key={person.id} person={person} />
              )
            ))}
          </div>
        </TabsContent>

        <TabsContent value="community" className="space-y-6">
          <div className="text-center mb-8">
            <h2 className="mb-4">Community Members</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Active community members contributing to accessibility through various projects and initiatives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {communityMembers.map((person) => (
              <CommunityPersonCard key={person.id} person={person} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="professionals" className="space-y-6">
          <div className="text-center mb-8">
            <h2 className="mb-4">Industry Professionals</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Leading accessibility experts and thought leaders in the industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {professionals.map((person) => (
              <ProfessionalPersonCard key={person.id} person={person} />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Categories Section */}
      <div className="mt-16 space-y-12">
        <div className="text-center">
          <h2 className="mb-4">People by Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore accessibility experts organized by their areas of expertise and contribution to the field.
          </p>
        </div>

        {categories.map((category) => (
          <div key={category.title}>
            <div className="flex items-center space-x-2 mb-6">
              {category.icon}
              <h3>{category.title}</h3>
              <Badge variant="secondary">{category.people.length} people</Badge>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.people.map((person) => (
                <Card key={`${category.title}-${person.id}`} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      {person.type === 'professional' ? (
                        <Avatar className="w-12 h-12 border border-primary/20">
                          <AvatarImage src={person.image} alt={person.name} />
                          <AvatarFallback className="text-xs">
                            {person.name.split(' ').map((n: string) => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                      ) : (
                        <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Users className="h-6 w-6 text-primary" />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm truncate">{person.name}</h4>
                        <p className="text-xs text-muted-foreground mb-2">{person.title}</p>
                        <div className="flex flex-wrap gap-1 mb-2">
                          {person.expertise
                            .filter((specialty: string) => 
                              category.title === "Legal & Advocacy" ? specialty.includes('Rights') || specialty.includes('Legal') || specialty.includes('Advocacy') :
                              category.title === "Technical & Development" ? specialty.includes('Development') || specialty.includes('Testing') || specialty.includes('React') || specialty.includes('Frontend') :
                              category.title === "Design & UX" ? specialty.includes('Design') || specialty.includes('UX') :
                              specialty.includes('Research') || specialty.includes('Standards') || specialty.includes('ARIA') || specialty.includes('WCAG')
                            )
                            .slice(0, 2)
                            .map((specialty: string) => (
                            <Badge key={specialty} variant="outline" className="text-xs px-1.5 py-0">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex space-x-1">
                          {person.socialLinks.website && (
                            <Button variant="ghost" size="icon" className="h-6 w-6" asChild>
                              <a 
                                href={person.socialLinks.website} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                aria-label={`Visit ${person.name}'s website`}
                              >
                                <Globe className="h-3 w-3" />
                              </a>
                            </Button>
                          )}
                          {person.socialLinks.twitter && (
                            <Button variant="ghost" size="icon" className="h-6 w-6" asChild>
                              <a 
                                href={person.socialLinks.twitter} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                aria-label={`Follow ${person.name} on Twitter`}
                              >
                                <Twitter className="h-3 w-3" />
                              </a>
                            </Button>
                          )}
                          {person.socialLinks.linkedin && (
                            <Button variant="ghost" size="icon" className="h-6 w-6" asChild>
                              <a 
                                href={person.socialLinks.linkedin} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                aria-label={`Connect with ${person.name} on LinkedIn`}
                              >
                                <Linkedin className="h-3 w-3" />
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-8">
            <h3 className="mb-4">Know Someone Who Should Be Featured?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Help us expand our community by recommending accessibility professionals and community members who are making a difference in inclusive design and digital accessibility.
            </p>
            <Button asChild>
              <a href="/contact">
                <ExternalLink className="mr-2 h-4 w-4" />
                Nominate Someone
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}