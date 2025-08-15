import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { Play, ExternalLink, Calendar, Clock, Headphones } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function PodcastSection() {
  const episodes = [
    {
      id: 1,
      title: 'Designing for Everyone: The Future of Inclusive UX',
      description: 'Join us as we explore the evolving landscape of inclusive design with Sarah Chen, Senior UX Designer at Microsoft. We discuss practical strategies for implementing accessibility from the ground up.',
      duration: '45 min',
      date: 'May 15, 2025',
      isNew: true,
      topics: ['Inclusive Design', 'UX Strategy', 'WCAG Guidelines'],
      embedUrl: 'https://open.spotify.com/embed/episode/example1'
    },
    {
      id: 2,
      title: 'Screen Reader Technology: Past, Present, and Future',
      description: 'An in-depth conversation with assistive technology expert Dr. Maria Rodriguez about the evolution of screen readers and what\'s next for users with visual impairments.',
      duration: '52 min',
      date: 'May 1, 2025',
      isNew: false,
      topics: ['Screen Readers', 'Assistive Technology', 'Innovation'],
      embedUrl: 'https://open.spotify.com/embed/episode/example2'
    },
    {
      id: 3,
      title: 'Building Accessible React Components',
      description: 'Technical deep-dive with frontend developer Alex Kim on creating reusable, accessible React components. Perfect for developers looking to improve their accessibility implementation.',
      duration: '38 min',
      date: 'April 17, 2025',
      isNew: false,
      topics: ['React', 'Component Design', 'Development'],
      embedUrl: 'https://open.spotify.com/embed/episode/example3'
    },
    {
      id: 4,
      title: 'Color and Contrast: Designing for Visual Accessibility',
      description: 'Visual designer Lisa Park shares insights on creating beautiful designs that meet accessibility standards, focusing on color theory and contrast ratios.',
      duration: '41 min',
      date: 'April 3, 2025',
      isNew: false,
      topics: ['Visual Design', 'Color Theory', 'WCAG Compliance'],
      embedUrl: 'https://open.spotify.com/embed/episode/example4'
    }
  ];

  const platforms = [
    { name: 'Spotify', url: 'https://spotify.com/show/accessibility-hub', color: 'bg-green-600' },
    { name: 'Apple Podcasts', url: 'https://podcasts.apple.com/accessibility-hub', color: 'bg-purple-600' },
    { name: 'YouTube', url: 'https://youtube.com/@accessibility-hub', color: 'bg-red-600' },
    { name: 'Google Podcasts', url: 'https://podcasts.google.com/accessibility-hub', color: 'bg-blue-600' }
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
              <Headphones className="h-10 w-10 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl mb-4">Accessibility Podcast</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Conversations with accessibility experts, designers, developers, and advocates 
            who are shaping the future of inclusive digital experiences.
          </p>
          
          {/* Platform Links */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {platforms.map((platform) => (
              <Button key={platform.name} variant="outline" asChild>
                <a 
                  href={platform.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <div className={`w-3 h-3 rounded-full ${platform.color}`} />
                  <span>Listen on {platform.name}</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            ))}
          </div>
        </div>

        {/* Episodes Grid */}
        <div className="space-y-8">
          {episodes.map((episode) => (
            <Card key={episode.id} className="overflow-hidden">
              <div className="md:flex">
                {/* Episode Artwork */}
                <div className="md:w-64 h-48 md:h-auto bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Play className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-sm text-muted-foreground">Episode {episode.id}</div>
                  </div>
                </div>
                
                {/* Episode Content */}
                <div className="flex-1">
                  <CardHeader>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      {episode.isNew && <Badge variant="default">New</Badge>}
                      <div className="flex items-center text-sm text-muted-foreground space-x-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{episode.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{episode.duration}</span>
                        </div>
                      </div>
                    </div>
                    <CardTitle className="text-xl md:text-2xl">{episode.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {episode.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    {/* Topics */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {episode.topics.map((topic) => (
                        <Badge key={topic} variant="secondary" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                    
                    {/* Mock Embedded Player */}
                    <div className="bg-muted rounded-lg p-6 mb-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <Button size="sm" className="rounded-full">
                            <Play className="h-4 w-4" />
                          </Button>
                          <div>
                            <div className="text-sm">Now Playing</div>
                            <div className="text-xs text-muted-foreground truncate">
                              {episode.title}
                            </div>
                          </div>
                        </div>
                        <div className="text-xs text-muted-foreground">{episode.duration}</div>
                      </div>
                      <div className="w-full bg-background rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full w-1/3"></div>
                      </div>
                    </div>
                    
                    {/* External Links */}
                    <div className="flex flex-wrap gap-2">
                      {platforms.slice(0, 2).map((platform) => (
                        <Button key={platform.name} variant="outline" size="sm" asChild>
                          <a 
                            href={platform.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center space-x-1"
                          >
                            <span>Play on {platform.name}</span>
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Episodes
          </Button>
        </div>

        {/* Subscribe Section */}
        <div className="mt-20">
          <Separator className="mb-12" />
          <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="text-center py-12">
              <h2 className="text-2xl md:text-3xl mb-4">Never Miss an Episode</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Subscribe to our podcast on your favorite platform and join thousands of 
                accessibility advocates staying informed about the latest trends and insights.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {platforms.map((platform) => (
                  <Button key={platform.name} asChild>
                    <a 
                      href={platform.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2"
                    >
                      <div className={`w-3 h-3 rounded-full ${platform.color}`} />
                      <span>{platform.name}</span>
                    </a>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}