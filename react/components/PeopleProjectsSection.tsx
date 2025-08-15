import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ExternalLink, Users, Lightbulb, MapPin, Calendar, Award, Github, Twitter, Linkedin } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function PeopleProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('people');

  const people = [
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
      isFeatured: true
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
      isFeatured: true
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
      isFeatured: false
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
      isFeatured: false
    }
  ];

  const projects = [
    {
      id: 1,
      name: 'Accessibility Dashboard',
      description: 'Open-source dashboard for tracking accessibility metrics across web applications with real-time monitoring and reporting.',
      category: 'Open Source',
      status: 'Active',
      impact: '1000+ developers',
      technologies: ['React', 'TypeScript', 'Node.js'],
      links: {
        github: 'https://github.com/a11y-dashboard',
        demo: 'https://a11y-dashboard.netlify.app',
        website: 'https://a11ydashboard.org'
      },
      contributors: ['Alex Kim', 'Sarah Chen', '50+ Contributors'],
      isFeatured: true
    },
    {
      id: 2,
      name: 'Inclusive Design System',
      description: 'Comprehensive design system built with accessibility-first principles, used by major e-commerce platforms.',
      category: 'Design System',
      status: 'Active',
      impact: '10M+ users',
      technologies: ['Figma', 'React', 'Storybook'],
      links: {
        website: 'https://inclusive-ds.com',
        documentation: 'https://docs.inclusive-ds.com'
      },
      contributors: ['Design Team at Shopify', 'Community Contributors'],
      isFeatured: true
    },
    {
      id: 3,
      name: 'Screen Reader Voice Training',
      description: 'Machine learning project to improve screen reader voice quality and naturalness for better user experience.',
      category: 'Research',
      status: 'In Development',
      impact: 'Research Phase',
      technologies: ['Python', 'TensorFlow', 'NLP'],
      links: {
        paper: 'https://arxiv.org/abs/example',
        github: 'https://github.com/sr-voice-training'
      },
      contributors: ['Dr. Maria Rodriguez', 'Stanford AI Lab'],
      isFeatured: false
    },
    {
      id: 4,
      name: 'A11y Testing Automation',
      description: 'CI/CD integration tools for automated accessibility testing with comprehensive reporting and fix suggestions.',
      category: 'DevOps',
      status: 'Beta',
      impact: '200+ projects',
      technologies: ['JavaScript', 'Docker', 'GitHub Actions'],
      links: {
        github: 'https://github.com/a11y-ci',
        npm: 'https://npmjs.com/package/a11y-ci'
      },
      contributors: ['Open Source Community', 'Industry Partners'],
      isFeatured: false
    }
  ];

  const PeopleCard = ({ person }: { person: any }) => (
    <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
      <CardHeader>
        <div className="flex items-start space-x-4">
          {/* Avatar placeholder */}
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
            <div className="flex items-center text-sm text-muted-foreground mt-1">
              <MapPin className="h-3 w-3 mr-1" />
              {person.location}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          {person.bio}
        </p>
        
        {/* Expertise Tags */}
        <div className="mb-4">
          <div className="text-sm mb-2">Expertise:</div>
          <div className="flex flex-wrap gap-1">
            {person.expertise.map((skill: string) => (
              <Badge key={skill} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-4">
          <div className="text-sm mb-2 flex items-center">
            <Award className="h-3 w-3 mr-1" />
            Achievements:
          </div>
          <ul className="text-sm text-muted-foreground space-y-1">
            {person.achievements.map((achievement: string, index: number) => (
              <li key={index} className="flex items-start">
                <span className="w-1 h-1 bg-primary rounded-full mt-2 mr-2 flex-shrink-0" />
                {achievement}
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div className="flex space-x-2">
          {person.socialLinks.github && (
            <Button size="sm" variant="outline" asChild>
              <a href={person.socialLinks.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-3 w-3" />
              </a>
            </Button>
          )}
          {person.socialLinks.twitter && (
            <Button size="sm" variant="outline" asChild>
              <a href={person.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                <Twitter className="h-3 w-3" />
              </a>
            </Button>
          )}
          {person.socialLinks.linkedin && (
            <Button size="sm" variant="outline" asChild>
              <a href={person.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-3 w-3" />
              </a>
            </Button>
          )}
          {person.socialLinks.website && (
            <Button size="sm" variant="outline" asChild>
              <a href={person.socialLinks.website} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-3 w-3" />
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );

  const ProjectCard = ({ project }: { project: any }) => (
    <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center space-x-2">
            <Badge variant="outline">{project.category}</Badge>
            <Badge variant={project.status === 'Active' ? 'default' : 
                          project.status === 'Beta' ? 'secondary' : 'outline'}>
              {project.status}
            </Badge>
          </div>
          {project.isFeatured && <Badge variant="default">Featured</Badge>}
        </div>
        <CardTitle className="group-hover:text-primary transition-colors">
          {project.name}
        </CardTitle>
        <CardDescription className="text-base leading-relaxed">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* Impact & Technologies */}
        <div className="space-y-3 mb-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Impact:</span>
            <span>{project.impact}</span>
          </div>
          <div>
            <div className="text-sm text-muted-foreground mb-1">Technologies:</div>
            <div className="flex flex-wrap gap-1">
              {project.technologies.map((tech: string) => (
                <Badge key={tech} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Contributors */}
        <div className="mb-4">
          <div className="text-sm text-muted-foreground mb-1">Contributors:</div>
          <div className="text-sm">
            {project.contributors.join(', ')}
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-2">
          {Object.entries(project.links).map(([type, url]) => (
            <Button key={type} size="sm" variant="outline" asChild>
              <a href={url as string} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1">
                <span className="capitalize">{type}</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
              <Users className="h-10 w-10 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl mb-4">People & Projects</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the inspiring individuals and innovative projects driving accessibility 
            forward in design, development, and research.
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="people" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8 max-w-md mx-auto">
            <TabsTrigger value="people" className="flex items-center space-x-2">
              <Users className="h-4 w-4" />
              <span>People</span>
            </TabsTrigger>
            <TabsTrigger value="projects" className="flex items-center space-x-2">
              <Lightbulb className="h-4 w-4" />
              <span>Projects</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="people">
            <div className="mb-6">
              <h2 className="text-2xl mb-2">Accessibility Champions</h2>
              <p className="text-muted-foreground">
                Professionals making significant contributions to digital accessibility through 
                design, development, research, and advocacy.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {people.map((person) => (
                <PeopleCard key={person.id} person={person} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="projects">
            <div className="mb-6">
              <h2 className="text-2xl mb-2">Innovative Projects</h2>
              <p className="text-muted-foreground">
                Open-source tools, research initiatives, and innovative solutions 
                advancing accessibility in the digital world.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Nomination Section */}
        <div className="mt-20">
          <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="text-center py-12">
              <h2 className="text-2xl md:text-3xl mb-4">Know Someone Amazing?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Help us celebrate accessibility champions and innovative projects. 
                Nominate individuals or initiatives making a difference in digital inclusion.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  Nominate a Person
                  <Users className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Submit a Project
                  <Lightbulb className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}