import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Search, ExternalLink, Star, Download, Book, Wrench, Users, GraduationCap } from 'lucide-react';

export function ResourcesSection() {
  const [searchTerm, setSearchTerm] = useState('');

  const resourceCategories = [
    { id: 'tools', label: 'Tools', icon: Wrench },
    { id: 'learning', label: 'Learning', icon: GraduationCap },
    { id: 'communities', label: 'Communities', icon: Users },
    { id: 'guidelines', label: 'Guidelines', icon: Book }
  ];

  const resources = {
    tools: [
      {
        id: 1,
        name: 'axe DevTools',
        description: 'The world\'s leading digital accessibility toolkit. Find and fix accessibility issues during development.',
        type: 'Browser Extension',
        rating: 4.9,
        isFree: true,
        isPremium: true,
        url: 'https://www.deque.com/axe/devtools/',
        tags: ['Testing', 'Browser Extension', 'Development']
      },
      {
        id: 2,
        name: 'WAVE Web Accessibility Evaluator',
        description: 'Evaluate web accessibility directly in your browser with detailed feedback and guidance.',
        type: 'Web Tool',
        rating: 4.7,
        isFree: true,
        isPremium: false,
        url: 'https://wave.webaim.org/',
        tags: ['Testing', 'Evaluation', 'Free']
      },
      {
        id: 3,
        name: 'Colour Contrast Analyser',
        description: 'Determine if foreground and background color combinations meet WCAG requirements.',
        type: 'Desktop App',
        rating: 4.6,
        isFree: true,
        isPremium: false,
        url: 'https://www.tpgi.com/color-contrast-checker/',
        tags: ['Color', 'Contrast', 'WCAG']
      },
      {
        id: 4,
        name: 'Screen Reader Testing',
        description: 'Comprehensive guide and tools for testing with popular screen readers like NVDA, JAWS, and VoiceOver.',
        type: 'Guide + Tools',
        rating: 4.8,
        isFree: true,
        isPremium: false,
        url: '#',
        tags: ['Screen Readers', 'Testing', 'Guide']
      }
    ],
    learning: [
      {
        id: 5,
        name: 'Web Accessibility by Google',
        description: 'Free comprehensive course covering web accessibility fundamentals, WCAG guidelines, and practical implementation.',
        type: 'Online Course',
        rating: 4.8,
        isFree: true,
        isPremium: false,
        url: 'https://www.udacity.com/course/web-accessibility--ud891',
        tags: ['Course', 'Fundamentals', 'Google']
      },
      {
        id: 6,
        name: 'Accessibility Developer Guide',
        description: 'Detailed technical guide for developers on implementing accessibility features in web applications.',
        type: 'Documentation',
        rating: 4.9,
        isFree: true,
        isPremium: false,
        url: 'https://www.accessibility-developer-guide.com/',
        tags: ['Development', 'Technical', 'Implementation']
      },
      {
        id: 7,
        name: 'Inclusive Design Principles',
        description: 'Learn the core principles of inclusive design and how to apply them in your design process.',
        type: 'Learning Resource',
        rating: 4.7,
        isFree: true,
        isPremium: false,
        url: 'https://inclusivedesignprinciples.org/',
        tags: ['Design', 'Principles', 'Inclusive']
      },
      {
        id: 8,
        name: 'ARIA Authoring Practices Guide',
        description: 'Official W3C guide for implementing ARIA patterns and practices in web applications.',
        type: 'Documentation',
        rating: 4.8,
        isFree: true,
        isPremium: false,
        url: 'https://www.w3.org/WAI/ARIA/apg/',
        tags: ['ARIA', 'W3C', 'Patterns']
      }
    ],
    communities: [
      {
        id: 9,
        name: 'A11y Community',
        description: 'Global community of accessibility professionals sharing knowledge, resources, and support.',
        type: 'Online Community',
        rating: 4.9,
        isFree: true,
        isPremium: false,
        url: 'https://a11y.info/',
        tags: ['Community', 'Global', 'Support']
      },
      {
        id: 10,
        name: 'WebAIM Discussion List',
        description: 'Active mailing list for web accessibility discussions, questions, and announcements.',
        type: 'Mailing List',
        rating: 4.6,
        isFree: true,
        isPremium: false,
        url: 'https://webaim.org/discussion/',
        tags: ['Discussion', 'Email', 'Q&A']
      },
      {
        id: 11,
        name: 'Accessibility Slack Communities',
        description: 'Collection of Slack workspaces focused on accessibility, including A11y Slack and others.',
        type: 'Chat Community',
        rating: 4.7,
        isFree: true,
        isPremium: false,
        url: 'https://web-a11y.slack.com/',
        tags: ['Slack', 'Chat', 'Real-time']
      },
      {
        id: 12,
        name: 'Inclusive Design 24 (#ID24)',
        description: 'Annual 24-hour online conference celebrating inclusive design and accessibility.',
        type: 'Conference',
        rating: 4.8,
        isFree: true,
        isPremium: false,
        url: 'https://inclusivedesign24.org/',
        tags: ['Conference', 'Annual', 'Global']
      }
    ],
    guidelines: [
      {
        id: 13,
        name: 'WCAG 2.2 Guidelines',
        description: 'Official Web Content Accessibility Guidelines from W3C - the international standard for web accessibility.',
        type: 'Standards',
        rating: 5.0,
        isFree: true,
        isPremium: false,
        url: 'https://www.w3.org/WAI/WCAG22/quickref/',
        tags: ['WCAG', 'Standards', 'W3C']
      },
      {
        id: 14,
        name: 'Section 508 Standards',
        description: 'US federal accessibility standards for electronic and information technology.',
        type: 'Government Standards',
        rating: 4.5,
        isFree: true,
        isPremium: false,
        url: 'https://www.section508.gov/',
        tags: ['Section 508', 'Government', 'US']
      },
      {
        id: 15,
        name: 'EN 301 549 Standard',
        description: 'European accessibility standard for ICT products and services.',
        type: 'European Standard',
        rating: 4.4,
        isFree: true,
        isPremium: false,
        url: 'https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf',
        tags: ['EN 301 549', 'European', 'ICT']
      },
      {
        id: 16,
        name: 'Material Design Accessibility',
        description: 'Google\'s Material Design accessibility guidelines and best practices.',
        type: 'Design System',
        rating: 4.6,
        isFree: true,
        isPremium: false,
        url: 'https://material.io/design/usability/accessibility.html',
        tags: ['Material Design', 'Google', 'Design System']
      }
    ]
  };

  const filterResources = (categoryResources: any[]) => {
    if (!searchTerm) return categoryResources;
    return categoryResources.filter(resource =>
      resource.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.tags.some((tag: string) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  };

  const ResourceCard = ({ resource }: { resource: any }) => (
    <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center space-x-2">
            <Badge variant="outline">{resource.type}</Badge>
            {resource.isFree && <Badge variant="secondary">Free</Badge>}
            {resource.isPremium && <Badge variant="default">Premium</Badge>}
          </div>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm text-muted-foreground">{resource.rating}</span>
          </div>
        </div>
        <CardTitle className="group-hover:text-primary transition-colors">
          {resource.name}
        </CardTitle>
        <CardDescription>{resource.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-1 mb-4">
          {resource.tags.map((tag: string) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex space-x-2">
          <Button size="sm" asChild className="flex-1">
            <a 
              href={resource.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-1"
            >
              <span>Visit Resource</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </Button>
          <Button size="sm" variant="outline">
            <Star className="h-3 w-3" />
          </Button>
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
              <Wrench className="h-10 w-10 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl mb-4">Resources & Tools</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Curated collection of accessibility tools, learning materials, communities, 
            and guidelines to support your inclusive design journey.
          </p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
              aria-label="Search resources"
            />
          </div>
        </div>

        {/* Resource Categories */}
        <Tabs defaultValue="tools" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            {resourceCategories.map((category) => {
              const Icon = category.icon;
              return (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="flex items-center space-x-2"
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{category.label}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {Object.entries(resources).map(([categoryKey, categoryResources]) => {
            const filteredResources = filterResources(categoryResources);
            const category = resourceCategories.find(cat => cat.id === categoryKey);
            
            return (
              <TabsContent key={categoryKey} value={categoryKey}>
                <div className="mb-6">
                  <h2 className="text-2xl mb-2 flex items-center">
                    {category && <category.icon className="h-6 w-6 mr-2 text-primary" />}
                    {category.label}
                    <span className="text-muted-foreground ml-2 text-lg">
                      ({filteredResources.length} resource{filteredResources.length !== 1 ? 's' : ''})
                    </span>
                  </h2>
                  <p className="text-muted-foreground">
                    {categoryKey === 'tools' && 'Essential tools for testing, evaluating, and improving accessibility.'}
                    {categoryKey === 'learning' && 'Courses, guides, and educational materials to expand your knowledge.'}
                    {categoryKey === 'communities' && 'Connect with fellow accessibility advocates and professionals.'}
                    {categoryKey === 'guidelines' && 'Official standards and best practice documentation.'}
                  </p>
                </div>

                {filteredResources.length === 0 ? (
                  <Card className="text-center py-12">
                    <CardContent>
                      <Wrench className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-xl mb-2">No Resources Found</h3>
                      <p className="text-muted-foreground mb-4">
                        Try adjusting your search terms or browse other categories.
                      </p>
                      <Button 
                        variant="outline" 
                        onClick={() => setSearchTerm('')}
                      >
                        Clear Search
                      </Button>
                    </CardContent>
                  </Card>
                ) : (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredResources.map((resource) => (
                      <ResourceCard key={resource.id} resource={resource} />
                    ))}
                  </div>
                )}
              </TabsContent>
            );
          })}
        </Tabs>

        {/* Submit Resource Section */}
        <div className="mt-20">
          <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="text-center py-12">
              <h2 className="text-2xl md:text-3xl mb-4">Know a Great Resource?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Help us build the most comprehensive accessibility resource library. 
                Submit tools, articles, or communities that have helped you.
              </p>
              <Button size="lg">
                Submit a Resource
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}