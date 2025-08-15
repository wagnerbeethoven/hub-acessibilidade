import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Separator } from './ui/separator';
import { ExternalLink, Twitter, Linkedin, Globe, BookOpen, Users, Mic } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ProfessionalsSection() {
  const professionals = [
    {
      id: 1,
      name: "Haben Girma",
      title: "Disability Rights Advocate & Author",
      company: "Harvard Law School",
      bio: "First deafblind graduate of Harvard Law School, disability rights advocate, and author of 'Haben: The Deafblind Woman Who Conquered Harvard Law'.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b120?w=150&h=150&fit=crop&crop=face",
      specialties: ["Disability Rights", "Legal Advocacy", "Inclusive Design", "Public Speaking"],
      achievements: [
        "Named a White House Champion of Change",
        "Recipient of Helen Keller Achievement Award",
        "International disability rights advocate"
      ],
      social: {
        website: "https://habengirma.com",
        twitter: "https://twitter.com/HabenGirma",
        linkedin: "https://linkedin.com/in/habengirma"
      }
    },
    {
      id: 2,
      name: "Léonie Watson",
      title: "Accessibility Engineer & Co-founder",
      company: "TetraLogical",
      bio: "Co-founder of TetraLogical, accessibility expert, and advocate. Member of W3C Advisory Board and former co-chair of the W3C Web Platform WG.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
      specialties: ["Web Standards", "Screen Readers", "ARIA", "W3C Standards"],
      achievements: [
        "W3C Advisory Board member",
        "Former W3C Web Platform WG co-chair",
        "TetraLogical co-founder"
      ],
      social: {
        website: "https://tetralogical.com",
        twitter: "https://twitter.com/LeonieWatson",
        linkedin: "https://linkedin.com/in/leoniewatson"
      }
    },
    {
      id: 3,
      name: "Adrian Roselli",
      title: "Accessibility Consultant",
      company: "Independent Consultant",
      bio: "Accessibility consultant, speaker, and blogger. Focuses on inclusive design, WCAG compliance, and practical accessibility solutions for developers.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      specialties: ["WCAG Compliance", "Testing", "Developer Training", "Inclusive Design"],
      achievements: [
        "Accessibility consultant for 20+ years",
        "Regular conference speaker",
        "Accessibility blog author"
      ],
      social: {
        website: "https://adrianroselli.com",
        twitter: "https://twitter.com/aardrian",
        linkedin: "https://linkedin.com/in/adrianroselli"
      }
    },
    {
      id: 4,
      name: "Sarah Horton",
      title: "UX Accessibility Consultant",
      company: "The Paciello Group",
      bio: "User experience and accessibility expert, author, and advocate for inclusive design practices. Co-author of 'A Web for Everyone'.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      specialties: ["UX Design", "Inclusive Design", "Content Strategy", "Design Systems"],
      achievements: [
        "Co-author of 'A Web for Everyone'",
        "UX accessibility consultant",
        "Inclusive design advocate"
      ],
      social: {
        website: "https://sarahhortondesign.com",
        twitter: "https://twitter.com/gradualclearing",
        linkedin: "https://linkedin.com/in/sarahhorton"
      }
    },
    {
      id: 5,
      name: "Dennis Lembree",
      title: "Web Accessibility Engineer",
      company: "PayPal",
      bio: "Senior accessibility engineer at PayPal, conference speaker, and creator of accessibility resources. Passionate about making the web accessible for everyone.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      specialties: ["Frontend Development", "Accessibility Testing", "ARIA", "Mobile Accessibility"],
      achievements: [
        "PayPal accessibility engineer",
        "Web accessibility conference speaker",
        "Accessibility resource creator"
      ],
      social: {
        website: "https://www.dennislembree.com",
        twitter: "https://twitter.com/dennisl",
        linkedin: "https://linkedin.com/in/dennislembree"
      }
    },
    {
      id: 6,
      name: "Marcy Sutton Todd",
      title: "Accessibility Engineer & Advocate",
      company: "Independent Consultant",
      bio: "Former Head of Learning at Gatsby, accessibility engineer, and creator of accessibility courses. Expert in JavaScript accessibility and testing.",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
      specialties: ["JavaScript Accessibility", "Testing", "Education", "React Development"],
      achievements: [
        "Former Gatsby Head of Learning",
        "Accessibility course creator",
        "JavaScript accessibility expert"
      ],
      social: {
        website: "https://marcysutton.com",
        twitter: "https://twitter.com/marcysutton",
        linkedin: "https://linkedin.com/in/marcysutton"
      }
    },
    {
      id: 7,
      name: "Carie Fisher",
      title: "Frontend Developer & Accessibility Advocate",
      company: "Accessibility Consultant",
      bio: "Frontend developer, accessibility consultant, and speaker. Specializes in inclusive design and accessible frontend development practices.",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      specialties: ["Frontend Development", "CSS Accessibility", "Color Contrast", "Inclusive Design"],
      achievements: [
        "Frontend accessibility consultant",
        "Conference speaker and trainer",
        "Accessibility content creator"
      ],
      social: {
        website: "https://cariefisher.com",
        twitter: "https://twitter.com/cariefisher",
        linkedin: "https://linkedin.com/in/cariefisher"
      }
    },
    {
      id: 8,
      name: "Eric Bailey",
      title: "Inclusive Design Advocate",
      company: "Independent Consultant",
      bio: "Digital accessibility consultant and advocate, writes about inclusive design and accessibility. Contributor to accessibility resources and standards.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
      specialties: ["Inclusive Design", "CSS", "Design Systems", "Accessibility Auditing"],
      achievements: [
        "Digital accessibility consultant",
        "Accessibility writer and advocate",
        "Design system accessibility expert"
      ],
      social: {
        website: "https://ericwbailey.design",
        twitter: "https://twitter.com/ericwbailey",
        linkedin: "https://linkedin.com/in/ericwbailey"
      }
    },
    {
      id: 9,
      name: "Crystal Preston-Watson",
      title: "Senior Accessibility Consultant",
      company: "Microsoft",
      bio: "Senior accessibility consultant at Microsoft, focusing on inclusive gaming and digital accessibility. Advocate for accessibility in technology.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b120?w=150&h=150&fit=crop&crop=face",
      specialties: ["Gaming Accessibility", "Microsoft Products", "Digital Inclusion", "User Research"],
      achievements: [
        "Microsoft accessibility consultant",
        "Gaming accessibility advocate",
        "Digital inclusion expert"
      ],
      social: {
        website: "https://crystalprestonwatson.com",
        twitter: "https://twitter.com/ScopicEngineer",
        linkedin: "https://linkedin.com/in/crystalprestonwatson"
      }
    },
    {
      id: 10,
      name: "Billy Gregory",
      title: "Accessibility Engineer",
      company: "Independent Consultant",
      bio: "Accessibility engineer and consultant with extensive experience in web accessibility. Focus on practical accessibility solutions and developer education.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face",
      specialties: ["Web Accessibility", "WCAG Compliance", "Accessibility Testing", "Training"],
      achievements: [
        "Accessibility engineer consultant",
        "Web accessibility trainer",
        "WCAG compliance expert"
      ],
      social: {
        website: "https://www.billy-gregory.com",
        twitter: "https://twitter.com/thebillygregory",
        linkedin: "https://linkedin.com/in/billygregory"
      }
    },
    {
      id: 11,
      name: "Sheri Byrne-Haber",
      title: "Head of Accessibility",
      company: "VMware",
      bio: "Head of Accessibility at VMware, disability advocate, and accessibility consultant. Expert in accessibility strategy and implementation.",
      image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face",
      specialties: ["Accessibility Strategy", "Enterprise Accessibility", "Legal Compliance", "Training"],
      achievements: [
        "VMware Head of Accessibility",
        "Accessibility strategy expert",
        "Enterprise accessibility consultant"
      ],
      social: {
        website: "https://sheribyrnehaber.com",
        twitter: "https://twitter.com/SheriByrnehaber",
        linkedin: "https://linkedin.com/in/sheribyrnehaber"
      }
    },
    {
      id: 12,
      name: "Karl Groves",
      title: "Accessibility Consultant & Entrepreneur",
      company: "Tenon.io",
      bio: "Founder of Tenon.io, accessibility consultant, and testing expert. Pioneer in automated accessibility testing and audit methodologies.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      specialties: ["Accessibility Testing", "Automation", "Auditing", "Consulting"],
      achievements: [
        "Tenon.io founder",
        "Accessibility testing pioneer",
        "Automated testing expert"
      ],
      social: {
        website: "https://karlgroves.com",
        twitter: "https://twitter.com/karlgroves",
        linkedin: "https://linkedin.com/in/karlgroves"
      }
    }
  ];

  const categories = [
    {
      title: "Legal & Advocacy",
      icon: <BookOpen className="h-4 w-4" />,
      professionals: professionals.filter(p => 
        p.specialties.some(s => s.includes('Rights') || s.includes('Legal') || s.includes('Advocacy'))
      )
    },
    {
      title: "Technical & Development",
      icon: <Users className="h-4 w-4" />,
      professionals: professionals.filter(p => 
        p.specialties.some(s => s.includes('Development') || s.includes('Testing') || s.includes('Engineering'))
      )
    },
    {
      title: "Design & UX",
      icon: <Globe className="h-4 w-4" />,
      professionals: professionals.filter(p => 
        p.specialties.some(s => s.includes('Design') || s.includes('UX'))
      )
    },
    {
      title: "Strategy & Consulting",
      icon: <Mic className="h-4 w-4" />,
      professionals: professionals.filter(p => 
        p.specialties.some(s => s.includes('Strategy') || s.includes('Consulting') || s.includes('Training'))
      )
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-12 text-center">
        <h1 className="mb-4">Accessibility Professionals to Follow</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
          Discover leading voices in accessibility who are shaping the future of inclusive design and digital accessibility.
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          <Badge variant="outline">Disability Rights</Badge>
          <Badge variant="outline">Web Standards</Badge>
          <Badge variant="outline">Inclusive Design</Badge>
          <Badge variant="outline">WCAG Compliance</Badge>
          <Badge variant="outline">Accessibility Testing</Badge>
        </div>
      </div>

      {/* Featured Professionals Grid */}
      <div className="mb-16">
        <h2 className="mb-8 text-center">Featured Professionals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {professionals.slice(0, 6).map((professional) => (
            <Card key={professional.id} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="relative mb-4">
                  <Avatar className="w-20 h-20 mx-auto border-2 border-primary/20">
                    <AvatarImage src={professional.image} alt={professional.name} />
                    <AvatarFallback>{professional.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                </div>
                <CardTitle className="text-lg">{professional.name}</CardTitle>
                <CardDescription className="text-sm">
                  {professional.title}
                  <br />
                  <span className="text-primary">{professional.company}</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {professional.bio}
                </p>
                
                <div className="space-y-2">
                  <h5 className="text-xs text-muted-foreground uppercase tracking-wider">Specialties</h5>
                  <div className="flex flex-wrap gap-1">
                    {professional.specialties.slice(0, 3).map((specialty) => (
                      <Badge key={specialty} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h5 className="text-xs text-muted-foreground uppercase tracking-wider">Key Achievements</h5>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {professional.achievements.slice(0, 2).map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-1 h-1 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <Separator />

                <div className="flex justify-center space-x-2">
                  {professional.social.website && (
                    <Button variant="outline" size="icon" asChild>
                      <a 
                        href={professional.social.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label={`Visit ${professional.name}'s website`}
                      >
                        <Globe className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  {professional.social.twitter && (
                    <Button variant="outline" size="icon" asChild>
                      <a 
                        href={professional.social.twitter} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label={`Follow ${professional.name} on Twitter`}
                      >
                        <Twitter className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  {professional.social.linkedin && (
                    <Button variant="outline" size="icon" asChild>
                      <a 
                        href={professional.social.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label={`Connect with ${professional.name} on LinkedIn`}
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* All Professionals by Category */}
      <div className="space-y-12">
        <div className="text-center">
          <h2 className="mb-4">All Professionals by Category</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore accessibility experts organized by their areas of expertise and contribution to the field.
          </p>
        </div>

        {categories.map((category) => (
          <div key={category.title}>
            <div className="flex items-center space-x-2 mb-6">
              {category.icon}
              <h3>{category.title}</h3>
              <Badge variant="secondary">{category.professionals.length} experts</Badge>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.professionals.map((professional) => (
                <Card key={`${category.title}-${professional.id}`} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <Avatar className="w-12 h-12 border border-primary/20">
                        <AvatarImage src={professional.image} alt={professional.name} />
                        <AvatarFallback className="text-xs">
                          {professional.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm truncate">{professional.name}</h4>
                        <p className="text-xs text-muted-foreground mb-2">{professional.title}</p>
                        <div className="flex flex-wrap gap-1 mb-2">
                          {professional.specialties
                            .filter(specialty => 
                              category.title === "Legal & Advocacy" ? specialty.includes('Rights') || specialty.includes('Legal') || specialty.includes('Advocacy') :
                              category.title === "Technical & Development" ? specialty.includes('Development') || specialty.includes('Testing') || specialty.includes('Engineering') :
                              category.title === "Design & UX" ? specialty.includes('Design') || specialty.includes('UX') :
                              specialty.includes('Strategy') || specialty.includes('Consulting') || specialty.includes('Training')
                            )
                            .slice(0, 2)
                            .map((specialty) => (
                            <Badge key={specialty} variant="outline" className="text-xs px-1.5 py-0">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex space-x-1">
                          {professional.social.website && (
                            <Button variant="ghost" size="icon" className="h-6 w-6" asChild>
                              <a 
                                href={professional.social.website} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                aria-label={`Visit ${professional.name}'s website`}
                              >
                                <Globe className="h-3 w-3" />
                              </a>
                            </Button>
                          )}
                          {professional.social.twitter && (
                            <Button variant="ghost" size="icon" className="h-6 w-6" asChild>
                              <a 
                                href={professional.social.twitter} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                aria-label={`Follow ${professional.name} on Twitter`}
                              >
                                <Twitter className="h-3 w-3" />
                              </a>
                            </Button>
                          )}
                          {professional.social.linkedin && (
                            <Button variant="ghost" size="icon" className="h-6 w-6" asChild>
                              <a 
                                href={professional.social.linkedin} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                aria-label={`Connect with ${professional.name} on LinkedIn`}
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
              Help us expand our community by recommending accessibility professionals who are making a difference in inclusive design and digital accessibility.
            </p>
            <Button asChild>
              <a href="/contact">
                <ExternalLink className="mr-2 h-4 w-4" />
                Suggest a Professional
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}