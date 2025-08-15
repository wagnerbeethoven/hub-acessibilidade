import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ExternalLink, Lightbulb, Filter, Github, Globe, FileText, Package } from 'lucide-react';

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');

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
    },
    {
      id: 5,
      name: 'Voice Navigation Framework',
      description: 'Framework for implementing voice navigation in web applications, making interfaces accessible to users with motor impairments.',
      category: 'Framework',
      status: 'Active',
      impact: '50+ implementations',
      technologies: ['JavaScript', 'Web Speech API', 'Machine Learning'],
      links: {
        github: 'https://github.com/voice-nav-framework',
        demo: 'https://voice-nav-demo.com',
        documentation: 'https://docs.voice-nav.com'
      },
      contributors: ['Voice Tech Collective', 'Accessibility Engineers'],
      isFeatured: true
    },
    {
      id: 6,
      name: 'Color Contrast Analyzer Pro',
      description: 'Advanced color contrast analysis tool with real-time feedback, batch processing, and WCAG compliance reporting.',
      category: 'Tool',
      status: 'Active',
      impact: '5000+ designers',
      technologies: ['Electron', 'React', 'Color Science APIs'],
      links: {
        website: 'https://contrast-analyzer-pro.com',
        github: 'https://github.com/contrast-analyzer-pro',
        download: 'https://releases.contrast-analyzer-pro.com'
      },
      contributors: ['Color Science Lab', 'UX Accessibility Guild'],
      isFeatured: false
    },
    {
      id: 7,
      name: 'Accessible Maps SDK',
      description: 'Software development kit for creating accessible interactive maps with screen reader support and keyboard navigation.',
      category: 'SDK',
      status: 'Beta',
      impact: '25+ applications',
      technologies: ['JavaScript', 'WebGL', 'ARIA', 'Spatial Audio'],
      links: {
        github: 'https://github.com/accessible-maps-sdk',
        documentation: 'https://docs.accessible-maps.org',
        examples: 'https://examples.accessible-maps.org'
      },
      contributors: ['Mapping Accessibility Initiative', 'GIS Community'],
      isFeatured: false
    },
    {
      id: 8,
      name: 'Accessibility Learning Platform',
      description: 'Interactive learning platform with hands-on exercises, assessments, and certification paths for accessibility professionals.',
      category: 'Education',
      status: 'Active',
      impact: '10,000+ learners',
      technologies: ['Next.js', 'PostgreSQL', 'Interactive Tutorials'],
      links: {
        website: 'https://learn-a11y.org',
        github: 'https://github.com/a11y-learning-platform'
      },
      contributors: ['Education Working Group', 'Industry Experts'],
      isFeatured: true
    }
  ];

  const categories = ['all', 'Open Source', 'Design System', 'Research', 'DevOps', 'Framework', 'Tool', 'SDK', 'Education'];
  const filteredProjects = selectedCategory === 'all' ? projects : projects.filter(p => p.category === selectedCategory);
  const featuredProjects = projects.filter(p => p.isFeatured);

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
          {Object.entries(project.links).map(([type, url]) => {
            const getIcon = (linkType: string) => {
              switch(linkType) {
                case 'github': return <Github className="h-3 w-3" />;
                case 'website': 
                case 'demo': return <Globe className="h-3 w-3" />;
                case 'documentation': return <FileText className="h-3 w-3" />;
                case 'npm': 
                case 'download': return <Package className="h-3 w-3" />;
                default: return <ExternalLink className="h-3 w-3" />;
              }
            };

            return (
              <Button key={type} size="sm" variant="outline" asChild>
                <a href={url as string} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1">
                  {getIcon(type)}
                  <span className="capitalize">{type}</span>
                </a>
              </Button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-12 text-center">
        <h1 className="mb-4">Accessibility Projects</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
          Discover innovative projects, tools, and research initiatives that are advancing accessibility in the digital world.
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          <Badge variant="outline">Open Source</Badge>
          <Badge variant="outline">Research</Badge>
          <Badge variant="outline">Tools</Badge>
          <Badge variant="outline">Education</Badge>
          <Badge variant="outline">Frameworks</Badge>
        </div>
      </div>

      <Tabs defaultValue="featured" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
          <TabsTrigger value="featured">Featured</TabsTrigger>
          <TabsTrigger value="all">All Projects</TabsTrigger>
          <TabsTrigger value="categories">By Category</TabsTrigger>
        </TabsList>

        <TabsContent value="featured" className="space-y-6">
          <div className="text-center mb-8">
            <h2 className="mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Highlighting exceptional projects that are making significant impact in the accessibility community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="all" className="space-y-6">
          <div className="text-center mb-8">
            <h2 className="mb-4">All Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse our complete collection of accessibility projects and initiatives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="categories" className="space-y-6">
          <div className="text-center mb-8">
            <h2 className="mb-4">Projects by Category</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore projects organized by type and purpose.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="flex items-center space-x-1"
              >
                <Filter className="h-3 w-3" />
                <span>{category === 'all' ? 'All' : category}</span>
                <Badge variant="secondary" className="ml-1">
                  {category === 'all' ? projects.length : projects.filter(p => p.category === category).length}
                </Badge>
              </Button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Statistics */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="text-center">
          <CardContent className="p-6">
            <div className="text-2xl mb-2">{projects.length}</div>
            <div className="text-sm text-muted-foreground">Total Projects</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-6">
            <div className="text-2xl mb-2">{projects.filter(p => p.status === 'Active').length}</div>
            <div className="text-sm text-muted-foreground">Active Projects</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-6">
            <div className="text-2xl mb-2">{projects.filter(p => p.category === 'Open Source').length}</div>
            <div className="text-sm text-muted-foreground">Open Source</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-6">
            <div className="text-2xl mb-2">{new Set(categories.slice(1)).size}</div>
            <div className="text-sm text-muted-foreground">Categories</div>
          </CardContent>
        </Card>
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-8">
            <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="mb-4">Have a Project to Share?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Help us showcase innovative accessibility projects and tools. Submit your project to be featured in our community showcase.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <a href="/contact">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Submit a Project
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://github.com/accessibility-hub" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Contribute on GitHub
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}