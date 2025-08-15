import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

export function DesignSystemSection() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="mb-8">
        <h1 className="mb-4">Accessibility Hub - Design System</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Comprehensive documentation for our accessibility-focused design system built with React, Tailwind CSS v4, and shadcn/ui components.
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline">WCAG AA Compliant</Badge>
          <Badge variant="outline">Responsive Design</Badge>
          <Badge variant="outline">Light/Dark Theme</Badge>
          <Badge variant="outline">React 18</Badge>
          <Badge variant="outline">TypeScript</Badge>
          <Badge variant="outline">Tailwind CSS v4</Badge>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="colors">Colors</TabsTrigger>
          <TabsTrigger value="components">Components</TabsTrigger>
          <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
          <TabsTrigger value="technical">Technical</TabsTrigger>
          <TabsTrigger value="figma">Figma Tokens</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Design System Overview</CardTitle>
              <CardDescription>
                A comprehensive accessibility-focused website with light/dark theme support, built with modern web technologies.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="mb-4">Core Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="mb-2">🎨 Theme System</h4>
                    <p className="text-sm text-muted-foreground">OKLCH color space with automatic light/dark theme support and smooth transitions.</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="mb-2">♿ Accessibility First</h4>
                    <p className="text-sm text-muted-foreground">WCAG 2.1 AA compliant with comprehensive keyboard and screen reader support.</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="mb-2">📱 Responsive Design</h4>
                    <p className="text-sm text-muted-foreground">Mobile-first approach with progressive enhancement for all device sizes.</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="mb-2">⚡ Performance</h4>
                    <p className="text-sm text-muted-foreground">Optimized bundle sizes, code splitting, and hardware-accelerated animations.</p>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="mb-4">Typography System</h3>
                <div className="space-y-3">
                  <div className="border rounded-lg p-4">
                    <h4 className="mb-2">System Font Stack</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Uses native system fonts for optimal performance and familiarity across platforms.
                    </p>
                    <code className="text-xs bg-muted p-2 rounded block">
                      -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif
                    </code>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="border rounded-lg p-3">
                      <h5 className="text-sm mb-1">Semantic HTML</h5>
                      <p className="text-xs text-muted-foreground">Relies on browser defaults for optimal accessibility</p>
                    </div>
                    <div className="border rounded-lg p-3">
                      <h5 className="text-sm mb-1">Line Height</h5>
                      <p className="text-xs text-muted-foreground">1.5 for body text, optimized for readability</p>
                    </div>
                    <div className="border rounded-lg p-3">
                      <h5 className="text-sm mb-1">Contrast</h5>
                      <p className="text-xs text-muted-foreground">WCAG AA ratios maintained across all themes</p>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="mb-4">Page Structure</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  <div className="border rounded-lg p-3">
                    <h5 className="text-sm mb-2">🏠 Homepage</h5>
                    <p className="text-xs text-muted-foreground">Hero section, feature highlights, newsletter signup</p>
                  </div>
                  <div className="border rounded-lg p-3">
                    <h5 className="text-sm mb-2">🎙️ Podcast</h5>
                    <p className="text-xs text-muted-foreground">Episode cards with platform embeds and archive</p>
                  </div>
                  <div className="border rounded-lg p-3">
                    <h5 className="text-sm mb-2">📝 Articles</h5>
                    <p className="text-xs text-muted-foreground">Article cards with categories and reading time</p>
                  </div>
                  <div className="border rounded-lg p-3">
                    <h5 className="text-sm mb-2">📚 Resources</h5>
                    <p className="text-xs text-muted-foreground">Tools, guides, and documentation library</p>
                  </div>
                  <div className="border rounded-lg p-3">
                    <h5 className="text-sm mb-2">👥 People & Projects</h5>
                    <p className="text-xs text-muted-foreground">Community profiles and project showcases</p>
                  </div>
                  <div className="border rounded-lg p-3">
                    <h5 className="text-sm mb-2">📞 Contact</h5>
                    <p className="text-xs text-muted-foreground">Contact form with validation and accessibility</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="colors" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Color System</CardTitle>
              <CardDescription>
                OKLCH color space provides consistent, accessible colors across light and dark themes with perceptual uniformity.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="mb-4">Primary Color: #005151 (Teal)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="text-sm">Light Theme</h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-lg bg-primary border shadow-sm"></div>
                        <div>
                          <p className="text-sm">Primary</p>
                          <code className="text-xs text-muted-foreground">oklch(0.296 0.086 180.0)</code>
                          <p className="text-xs text-muted-foreground">#005151</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-lg bg-primary-foreground border shadow-sm"></div>
                        <div>
                          <p className="text-sm">Primary Foreground</p>
                          <code className="text-xs text-muted-foreground">oklch(0.985 0 0)</code>
                          <p className="text-xs text-muted-foreground">Near white text</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-sm">Dark Theme</h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-lg bg-[oklch(0.45_0.12_180.0)] border shadow-sm"></div>
                        <div>
                          <p className="text-sm">Primary (Dark)</p>
                          <code className="text-xs text-muted-foreground">oklch(0.45 0.12 180.0)</code>
                          <p className="text-xs text-muted-foreground">Brighter for dark backgrounds</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-lg bg-[oklch(0.985_0_0)] border shadow-sm"></div>
                        <div>
                          <p className="text-sm">Primary Foreground</p>
                          <code className="text-xs text-muted-foreground">oklch(0.985 0 0)</code>
                          <p className="text-xs text-muted-foreground">Consistent across themes</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="mb-4">Complete Color Tokens</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm mb-4 text-muted-foreground uppercase tracking-wider">Light Theme</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between p-2 border rounded">
                        <div className="flex items-center space-x-3">
                          <div className="w-5 h-5 rounded bg-background border"></div>
                          <span>Background</span>
                        </div>
                        <code className="text-xs">oklch(1 0 0)</code>
                      </div>
                      <div className="flex items-center justify-between p-2 border rounded">
                        <div className="flex items-center space-x-3">
                          <div className="w-5 h-5 rounded bg-foreground border"></div>
                          <span>Foreground</span>
                        </div>
                        <code className="text-xs">oklch(0.145 0 0)</code>
                      </div>
                      <div className="flex items-center justify-between p-2 border rounded">
                        <div className="flex items-center space-x-3">
                          <div className="w-5 h-5 rounded bg-card border"></div>
                          <span>Card</span>
                        </div>
                        <code className="text-xs">oklch(1 0 0)</code>
                      </div>
                      <div className="flex items-center justify-between p-2 border rounded">
                        <div className="flex items-center space-x-3">
                          <div className="w-5 h-5 rounded bg-muted border"></div>
                          <span>Muted</span>
                        </div>
                        <code className="text-xs">oklch(0.97 0 0)</code>
                      </div>
                      <div className="flex items-center justify-between p-2 border rounded">
                        <div className="flex items-center space-x-3">
                          <div className="w-5 h-5 rounded bg-border border"></div>
                          <span>Border</span>
                        </div>
                        <code className="text-xs">oklch(0.922 0 0)</code>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm mb-4 text-muted-foreground uppercase tracking-wider">Dark Theme</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between p-2 border rounded">
                        <div className="flex items-center space-x-3">
                          <div className="w-5 h-5 rounded bg-[oklch(0.145_0_0)] border"></div>
                          <span>Background</span>
                        </div>
                        <code className="text-xs">oklch(0.145 0 0)</code>
                      </div>
                      <div className="flex items-center justify-between p-2 border rounded">
                        <div className="flex items-center space-x-3">
                          <div className="w-5 h-5 rounded bg-[oklch(0.985_0_0)] border"></div>
                          <span>Foreground</span>
                        </div>
                        <code className="text-xs">oklch(0.985 0 0)</code>
                      </div>
                      <div className="flex items-center justify-between p-2 border rounded">
                        <div className="flex items-center space-x-3">
                          <div className="w-5 h-5 rounded bg-[oklch(0.205_0_0)] border"></div>
                          <span>Card</span>
                        </div>
                        <code className="text-xs">oklch(0.205 0 0)</code>
                      </div>
                      <div className="flex items-center justify-between p-2 border rounded">
                        <div className="flex items-center space-x-3">
                          <div className="w-5 h-5 rounded bg-[oklch(0.269_0_0)] border"></div>
                          <span>Muted</span>
                        </div>
                        <code className="text-xs">oklch(0.269 0 0)</code>
                      </div>
                      <div className="flex items-center justify-between p-2 border rounded">
                        <div className="flex items-center space-x-3">
                          <div className="w-5 h-5 rounded bg-[oklch(0.269_0_0)] border"></div>
                          <span>Border</span>
                        </div>
                        <code className="text-xs">oklch(0.269 0 0)</code>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="mb-4">OKLCH Color Space Benefits</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border rounded-lg p-4">
                    <h5 className="text-sm mb-2">🎯 Perceptual Uniformity</h5>
                    <p className="text-xs text-muted-foreground">Colors appear equally bright to human vision</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h5 className="text-sm mb-2">🌈 Wider Gamut</h5>
                    <p className="text-xs text-muted-foreground">Access to more vibrant, displayable colors</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h5 className="text-sm mb-2">🔧 Better Control</h5>
                    <p className="text-xs text-muted-foreground">Independent control of lightness, chroma, and hue</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="components" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Component Library</CardTitle>
              <CardDescription>
                Built on shadcn/ui with custom accessibility enhancements and consistent theming patterns.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="mb-4">Layout Components</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="mb-3 flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      Header
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Sticky navigation: <code className="text-xs">sticky top-0 z-50</code></li>
                      <li>• Logo: Accessibility icon + "Accessibility Hub" text</li>
                      <li>• Desktop: Horizontal menu with hover states</li>
                      <li>• Mobile: Sheet/drawer with hamburger toggle</li>
                      <li>• Theme toggle: Sun/moon icon in both layouts</li>
                      <li>• Active states: Primary color underline for current page</li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="mb-3 flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      Footer
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Multi-column responsive layout</li>
                      <li>• Links organized by category</li>
                      <li>• Social media platform links</li>
                      <li>• Copyright with auto-updating year</li>
                      <li>• Accessibility statement</li>
                      <li>• Responsive: Stacks on mobile devices</li>
                    </ul>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="mb-4">Content Components</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="border rounded-lg p-4">
                    <h5 className="text-sm mb-2">Cards</h5>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Base: <code>bg-card text-card-foreground</code></li>
                      <li>• Hover effects with subtle elevation</li>
                      <li>• Header, body, footer sections</li>
                      <li>• Responsive container adaptation</li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h5 className="text-sm mb-2">Buttons</h5>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Primary: Teal background</li>
                      <li>• Secondary: Muted background</li>
                      <li>• Ghost: Transparent with hover</li>
                      <li>• Outline: Border with transparency</li>
                      <li>• Icon: Square buttons for icons</li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h5 className="text-sm mb-2">Forms</h5>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Consistent border styling</li>
                      <li>• Focus states with ring outline</li>
                      <li>• Label association with controls</li>
                      <li>• Error and success validation</li>
                      <li>• ARIA labels and descriptions</li>
                    </ul>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="mb-4">Interactive Components</h3>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="mb-3">Theme Toggle</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="text-sm mb-2">Animation</h5>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          <li>• Smooth rotate/scale transitions</li>
                          <li>• Sun icon for light theme</li>
                          <li>• Moon icon for dark theme</li>
                          <li>• Hardware-accelerated transforms</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-sm mb-2">Functionality</h5>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          <li>• React context for state management</li>
                          <li>• localStorage persistence</li>
                          <li>• System preference detection</li>
                          <li>• Accessible ARIA labeling</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h4 className="mb-3">Navigation</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="text-sm mb-2">Focus Management</h5>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          <li>• Visible focus indicators</li>
                          <li>• 2px solid ring with 2px offset</li>
                          <li>• Logical tab order progression</li>
                          <li>• Skip links for main content</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-sm mb-2">Keyboard Navigation</h5>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          <li>• Enter/Space for activation</li>
                          <li>• Escape for closing modals</li>
                          <li>• Arrow keys for grouped controls</li>
                          <li>• ARIA current page indicators</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="mb-4">Component Specifications</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                  <div className="border rounded p-3 text-center">
                    <p className="text-xs text-muted-foreground mb-1">Button Height</p>
                    <p>40px mobile</p>
                    <p>36px desktop</p>
                  </div>
                  <div className="border rounded p-3 text-center">
                    <p className="text-xs text-muted-foreground mb-1">Input Height</p>
                    <p>40px</p>
                  </div>
                  <div className="border rounded p-3 text-center">
                    <p className="text-xs text-muted-foreground mb-1">Touch Target</p>
                    <p>44px minimum</p>
                  </div>
                  <div className="border rounded p-3 text-center">
                    <p className="text-xs text-muted-foreground mb-1">Focus Ring</p>
                    <p>2px solid + 2px offset</p>
                  </div>
                  <div className="border rounded p-3 text-center">
                    <p className="text-xs text-muted-foreground mb-1">Card Padding</p>
                    <p>24px</p>
                  </div>
                  <div className="border rounded p-3 text-center">
                    <p className="text-xs text-muted-foreground mb-1">Section Spacing</p>
                    <p>64px desktop</p>
                    <p>48px mobile</p>
                  </div>
                  <div className="border rounded p-3 text-center">
                    <p className="text-xs text-muted-foreground mb-1">Border Radius</p>
                    <p>0.625rem (10px)</p>
                  </div>
                  <div className="border rounded p-3 text-center">
                    <p className="text-xs text-muted-foreground mb-1">Transition</p>
                    <p>0.3s ease</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="accessibility" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Accessibility Features</CardTitle>
              <CardDescription>
                WCAG 2.1 AA compliant design with comprehensive support for assistive technologies and inclusive user experiences.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="mb-4">WCAG 2.1 AA Compliance</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3 border rounded-lg p-3">
                      <Badge variant="outline" className="text-green-600 border-green-600 mt-1">✓ Contrast</Badge>
                      <div>
                        <h5 className="text-sm mb-1">4.5:1 Minimum Ratio</h5>
                        <p className="text-xs text-muted-foreground">All color combinations meet WCAG AA requirements for normal text</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 border rounded-lg p-3">
                      <Badge variant="outline" className="text-blue-600 border-blue-600 mt-1">✓ Focus</Badge>
                      <div>
                        <h5 className="text-sm mb-1">Visible Focus Indicators</h5>
                        <p className="text-xs text-muted-foreground">2px solid ring with 2px offset for all interactive elements</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3 border rounded-lg p-3">
                      <Badge variant="outline" className="text-purple-600 border-purple-600 mt-1">✓ Semantic</Badge>
                      <div>
                        <h5 className="text-sm mb-1">Proper HTML Structure</h5>
                        <p className="text-xs text-muted-foreground">Heading hierarchy, landmarks, and semantic elements</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 border rounded-lg p-3">
                      <Badge variant="outline" className="text-orange-600 border-orange-600 mt-1">✓ ARIA</Badge>
                      <div>
                        <h5 className="text-sm mb-1">Comprehensive Labeling</h5>
                        <p className="text-xs text-muted-foreground">ARIA labels, descriptions, and live regions</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="mb-4">Keyboard Navigation</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h4 className="text-sm">Navigation Keys</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <Badge variant="secondary" className="min-w-16 justify-center">Tab</Badge>
                        <p className="text-sm">Move to next interactive element</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge variant="secondary" className="min-w-16 justify-center">Shift+Tab</Badge>
                        <p className="text-sm">Move to previous interactive element</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge variant="secondary" className="min-w-16 justify-center">Enter</Badge>
                        <p className="text-sm">Activate buttons and links</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge variant="secondary" className="min-w-16 justify-center">Space</Badge>
                        <p className="text-sm">Activate buttons and checkboxes</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-sm">Special Functions</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <Badge variant="secondary" className="min-w-16 justify-center">Escape</Badge>
                        <p className="text-sm">Close modals and dropdown menus</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge variant="secondary" className="min-w-16 justify-center">Arrow Keys</Badge>
                        <p className="text-sm">Navigate within grouped controls</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge variant="secondary" className="min-w-16 justify-center">Home/End</Badge>
                        <p className="text-sm">Jump to start/end of lists</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="mb-4">Screen Reader Support</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h4 className="text-sm">NVDA, JAWS, VoiceOver Compatible</h4>
                    <div className="space-y-2">
                      <div className="border rounded p-3">
                        <h5 className="text-xs mb-1">Live Regions</h5>
                        <p className="text-xs text-muted-foreground">Dynamic content announcements for status updates and changes</p>
                      </div>
                      <div className="border rounded p-3">
                        <h5 className="text-xs mb-1">Role Attributes</h5>
                        <p className="text-xs text-muted-foreground">Clear element purposes and interaction behaviors</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-sm">Content Description</h4>
                    <div className="space-y-2">
                      <div className="border rounded p-3">
                        <h5 className="text-xs mb-1">State Information</h5>
                        <p className="text-xs text-muted-foreground">Current page, expanded/collapsed, selected states</p>
                      </div>
                      <div className="border rounded p-3">
                        <h5 className="text-xs mb-1">Alternative Text</h5>
                        <p className="text-xs text-muted-foreground">Descriptive alt text for all images and icons</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="mb-4">Motion & Animation</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border rounded-lg p-4">
                    <h5 className="text-sm mb-2 flex items-center">
                      <Badge variant="outline" className="mr-2">prefers-reduced-motion</Badge>
                    </h5>
                    <p className="text-xs text-muted-foreground">Automatically respects user's motion preferences in browser settings</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h5 className="text-sm mb-2 flex items-center">
                      <Badge variant="outline" className="mr-2">0.3s transitions</Badge>
                    </h5>
                    <p className="text-xs text-muted-foreground">Smooth but not distracting theme and state transitions</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h5 className="text-sm mb-2 flex items-center">
                      <Badge variant="outline" className="mr-2">CSS transforms</Badge>
                    </h5>
                    <p className="text-xs text-muted-foreground">Hardware-accelerated animations for optimal performance</p>
                  </div>
                </div>
                <div className="mt-4 bg-muted/30 rounded-lg p-4">
                  <h5 className="text-sm mb-2">Reduced Motion Implementation</h5>
                  <code className="text-xs block bg-background p-3 rounded">
                    @media (prefers-reduced-motion: reduce) {'{'}
                    <br />
                    &nbsp;&nbsp;*, *::before, *::after {'{'}
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;animation-duration: 0.01ms !important;
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;transition-duration: 0.01ms !important;
                    <br />
                    &nbsp;&nbsp;{'}'}
                    <br />
                    {'}'}
                  </code>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="mb-4">High Contrast Mode</h3>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Automatically adapts to user's high contrast preferences with enhanced color values for better visibility.
                  </p>
                  <div className="bg-muted/30 rounded-lg p-4">
                    <h5 className="text-sm mb-2">High Contrast Implementation</h5>
                    <code className="text-xs block bg-background p-3 rounded">
                      @media (prefers-contrast: high) {'{'}
                      <br />
                      &nbsp;&nbsp;:root {'{ --primary: oklch(0.2 0.15 180.0); }'}
                      <br />
                      &nbsp;&nbsp;.dark {'{ --primary: oklch(0.7 0.15 180.0); }'}
                      <br />
                      {'}'}
                    </code>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="technical" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Technical Implementation</CardTitle>
              <CardDescription>
                Modern React architecture with TypeScript, performance optimizations, and responsive design principles.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="mb-4">Technology Stack</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <Badge variant="secondary" className="justify-center p-2">React 18</Badge>
                  <Badge variant="secondary" className="justify-center p-2">TypeScript</Badge>
                  <Badge variant="secondary" className="justify-center p-2">Tailwind CSS v4</Badge>
                  <Badge variant="secondary" className="justify-center p-2">shadcn/ui</Badge>
                  <Badge variant="secondary" className="justify-center p-2">React Router</Badge>
                  <Badge variant="secondary" className="justify-center p-2">Lucide Icons</Badge>
                  <Badge variant="secondary" className="justify-center p-2">OKLCH Colors</Badge>
                  <Badge variant="secondary" className="justify-center p-2">CSS Custom Properties</Badge>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="mb-4">Architecture Patterns</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <h4 className="mb-3">Component Structure</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Functional components with React hooks</li>
                        <li>• TypeScript for comprehensive type safety</li>
                        <li>• Context API for global theme management</li>
                        <li>• Custom hooks for reusable logic patterns</li>
                        <li>• Component composition over inheritance</li>
                      </ul>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <h4 className="mb-3">Styling Approach</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Utility-first with Tailwind CSS v4</li>
                        <li>• CSS custom properties for dynamic theming</li>
                        <li>• OKLCH color space for consistency</li>
                        <li>• Component variants with shadcn/ui pattern</li>
                        <li>• Responsive design with mobile-first approach</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="mb-4">Performance Optimizations</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="text-sm">Build Optimizations</h4>
                    <div className="space-y-2">
                      <div className="border rounded p-3">
                        <h5 className="text-xs mb-1">Code Splitting</h5>
                        <p className="text-xs text-muted-foreground">Route-based lazy loading for optimal initial bundle size</p>
                      </div>
                      <div className="border rounded p-3">
                        <h5 className="text-xs mb-1">Tree Shaking</h5>
                        <p className="text-xs text-muted-foreground">Elimination of unused code from final bundle</p>
                      </div>
                      <div className="border rounded p-3">
                        <h5 className="text-xs mb-1">Bundle Analysis</h5>
                        <p className="text-xs text-muted-foreground">Optimized dependency management and chunking</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-sm">Runtime Performance</h4>
                    <div className="space-y-2">
                      <div className="border rounded p-3">
                        <h5 className="text-xs mb-1">React Optimization</h5>
                        <p className="text-xs text-muted-foreground">Efficient re-renders with proper key props and state management</p>
                      </div>
                      <div className="border rounded p-3">
                        <h5 className="text-xs mb-1">CSS Performance</h5>
                        <p className="text-xs text-muted-foreground">Hardware-accelerated animations and efficient transitions</p>
                      </div>
                      <div className="border rounded p-3">
                        <h5 className="text-xs mb-1">Image Optimization</h5>
                        <p className="text-xs text-muted-foreground">Responsive images with fallbacks and lazy loading</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="mb-4">Responsive Design System</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="border rounded p-4 text-center">
                      <h5 className="text-sm mb-2">📱 Mobile</h5>
                      <code className="text-xs">&lt; 768px</code>
                      <p className="text-xs text-muted-foreground mt-2">Touch-optimized, single column</p>
                    </div>
                    <div className="border rounded p-4 text-center">
                      <h5 className="text-sm mb-2">💻 Tablet</h5>
                      <code className="text-xs">768px - 1024px</code>
                      <p className="text-xs text-muted-foreground mt-2">Adaptive layouts, flexible grids</p>
                    </div>
                    <div className="border rounded p-4 text-center">
                      <h5 className="text-sm mb-2">🖥️ Desktop</h5>
                      <code className="text-xs">&gt; 1024px</code>
                      <p className="text-xs text-muted-foreground mt-2">Multi-column, enhanced navigation</p>
                    </div>
                  </div>
                  <div className="bg-muted/30 rounded-lg p-4">
                    <h5 className="text-sm mb-3">Design Principles</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                      <div>
                        <strong>Mobile First:</strong> Progressive enhancement from smallest screens
                      </div>
                      <div>
                        <strong>Flexible Grids:</strong> CSS Grid and Flexbox for adaptive layouts
                      </div>
                      <div>
                        <strong>Container Queries:</strong> Component-level responsive behavior
                      </div>
                      <div>
                        <strong>Fluid Typography:</strong> Responsive text scaling with viewport
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="mb-4">Browser Support & Compatibility</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 border rounded">
                    <h5 className="text-sm mb-2">Chrome</h5>
                    <Badge variant="outline">Last 2 versions</Badge>
                    <p className="text-xs text-muted-foreground mt-2">Full feature support</p>
                  </div>
                  <div className="text-center p-4 border rounded">
                    <h5 className="text-sm mb-2">Firefox</h5>
                    <Badge variant="outline">Last 2 versions</Badge>
                    <p className="text-xs text-muted-foreground mt-2">Full feature support</p>
                  </div>
                  <div className="text-center p-4 border rounded">
                    <h5 className="text-sm mb-2">Safari</h5>
                    <Badge variant="outline">Last 2 versions</Badge>
                    <p className="text-xs text-muted-foreground mt-2">Full feature support</p>
                  </div>
                  <div className="text-center p-4 border rounded">
                    <h5 className="text-sm mb-2">Edge</h5>
                    <Badge variant="outline">Last 2 versions</Badge>
                    <p className="text-xs text-muted-foreground mt-2">Full feature support</p>
                  </div>
                </div>
                <div className="mt-4 space-y-3">
                  <h4 className="text-sm">Progressive Enhancement</h4>
                  <p className="text-sm text-muted-foreground">
                    Core functionality works without JavaScript. Enhanced features are progressively added based on browser capabilities.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="border rounded p-3">
                      <h5 className="text-xs mb-1">Base Layer</h5>
                      <p className="text-xs text-muted-foreground">HTML + CSS for core functionality</p>
                    </div>
                    <div className="border rounded p-3">
                      <h5 className="text-xs mb-1">Enhanced Layer</h5>
                      <p className="text-xs text-muted-foreground">JavaScript for interactions and dynamic features</p>
                    </div>
                    <div className="border rounded p-3">
                      <h5 className="text-xs mb-1">Modern Layer</h5>
                      <p className="text-xs text-muted-foreground">Advanced CSS features and animations</p>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="mb-4">Deployment Considerations</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h4 className="text-sm">SEO Optimization</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Semantic HTML structure for search engines</li>
                      <li>• Meta tags for social sharing</li>
                      <li>• Structured data markup</li>
                      <li>• XML sitemap generation</li>
                      <li>• Open Graph and Twitter Card support</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-sm">Performance & Security</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Privacy-focused analytics integration</li>
                      <li>• Lighthouse score optimization</li>
                      <li>• Content Security Policy headers</li>
                      <li>• HTTPS-only with HSTS</li>
                      <li>• CDN optimization for static assets</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="figma" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Design Tokens for Figma</CardTitle>
              <CardDescription>
                Complete specifications for recreating this design system in Figma with exact values and measurements.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="mb-4">Color Tokens (Hex Values for Figma)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm mb-4 text-muted-foreground uppercase tracking-wider">Light Theme</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 border rounded">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded" style={{backgroundColor: '#005151'}}></div>
                          <span className="text-sm">Primary</span>
                        </div>
                        <code className="text-xs">#005151</code>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded border" style={{backgroundColor: '#FFFFFF'}}></div>
                          <span className="text-sm">Background</span>
                        </div>
                        <code className="text-xs">#FFFFFF</code>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded" style={{backgroundColor: '#0A0A0A'}}></div>
                          <span className="text-sm">Text</span>
                        </div>
                        <code className="text-xs">#0A0A0A</code>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded border" style={{backgroundColor: '#F5F5F5'}}></div>
                          <span className="text-sm">Muted</span>
                        </div>
                        <code className="text-xs">#F5F5F5</code>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm mb-4 text-muted-foreground uppercase tracking-wider">Dark Theme</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 border rounded">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded" style={{backgroundColor: '#4A9B9B'}}></div>
                          <span className="text-sm">Primary</span>
                        </div>
                        <code className="text-xs">#4A9B9B</code>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded border" style={{backgroundColor: '#1A1A1A'}}></div>
                          <span className="text-sm">Background</span>
                        </div>
                        <code className="text-xs">#1A1A1A</code>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded border" style={{backgroundColor: '#F5F5F5'}}></div>
                          <span className="text-sm">Text</span>
                        </div>
                        <code className="text-xs">#F5F5F5</code>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded" style={{backgroundColor: '#2A2A2A'}}></div>
                          <span className="text-sm">Muted</span>
                        </div>
                        <code className="text-xs">#2A2A2A</code>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="mb-4">Spacing Scale</h3>
                <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                  {['4px', '8px', '12px', '16px', '24px', '32px', '48px', '64px', '96px'].map((spacing) => (
                    <div key={spacing} className="border rounded p-3 text-center">
                      <div className="bg-primary rounded mb-2 mx-auto" style={{width: spacing, height: '8px'}}></div>
                      <code className="text-xs">{spacing}</code>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="mb-4">Border Radius Scale</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="border rounded p-3 text-center">
                    <div className="w-12 h-12 bg-primary mx-auto mb-2" style={{borderRadius: '6px'}}></div>
                    <p className="text-sm">Small</p>
                    <code className="text-xs">6px</code>
                  </div>
                  <div className="border rounded p-3 text-center">
                    <div className="w-12 h-12 bg-primary mx-auto mb-2" style={{borderRadius: '8px'}}></div>
                    <p className="text-sm">Medium</p>
                    <code className="text-xs">8px</code>
                  </div>
                  <div className="border rounded p-3 text-center">
                    <div className="w-12 h-12 bg-primary mx-auto mb-2" style={{borderRadius: '10px'}}></div>
                    <p className="text-sm">Large</p>
                    <code className="text-xs">10px</code>
                  </div>
                  <div className="border rounded p-3 text-center">
                    <div className="w-12 h-12 bg-primary mx-auto mb-2" style={{borderRadius: '14px'}}></div>
                    <p className="text-sm">Extra Large</p>
                    <code className="text-xs">14px</code>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="mb-4">Typography Specifications</h3>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="mb-3">Font Family</h4>
                    <div className="bg-muted/30 rounded p-3">
                      <code className="text-sm">
                        -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
                      </code>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      Use system fonts for optimal performance and native feel across platforms
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="border rounded p-3">
                      <h5 className="text-sm mb-2">Approach</h5>
                      <p className="text-xs text-muted-foreground">Rely on browser defaults for font sizes</p>
                    </div>
                    <div className="border rounded p-3">
                      <h5 className="text-sm mb-2">Line Height</h5>
                      <p className="text-xs text-muted-foreground">1.5 for body text readability</p>
                    </div>
                    <div className="border rounded p-3">
                      <h5 className="text-sm mb-2">Contrast</h5>
                      <p className="text-xs text-muted-foreground">WCAG AA compliant ratios</p>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="mb-4">Component Measurements</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="border rounded p-3 text-center">
                    <div className="w-full h-10 bg-primary rounded mb-2 flex items-center justify-center text-primary-foreground text-xs">
                      Button
                    </div>
                    <p className="text-xs">40px mobile</p>
                    <p className="text-xs">36px desktop</p>
                  </div>
                  <div className="border rounded p-3 text-center">
                    <div className="w-full h-10 bg-background border rounded mb-2 flex items-center justify-center text-xs">
                      Input
                    </div>
                    <p className="text-xs">40px height</p>
                  </div>
                  <div className="border rounded p-3 text-center">
                    <div className="w-11 h-11 bg-muted rounded mb-2 mx-auto flex items-center justify-center text-xs">
                      Touch
                    </div>
                    <p className="text-xs">44px minimum</p>
                  </div>
                  <div className="border rounded p-3 text-center">
                    <div className="w-full h-10 bg-background border-2 border-primary rounded mb-2 flex items-center justify-center text-xs">
                      Focus
                    </div>
                    <p className="text-xs">2px ring + 2px offset</p>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="mb-4">Implementation Guidelines</h3>
                <div className="space-y-4">
                  <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                    <h4 className="text-sm mb-2 text-blue-900 dark:text-blue-100">📋 Setup Instructions</h4>
                    <ol className="text-sm text-blue-800 dark:text-blue-200 space-y-1 list-decimal list-inside">
                      <li>Create color styles in Figma using the hex values above</li>
                      <li>Set up text styles using the system font stack</li>
                      <li>Create effect styles for shadows and focus states</li>
                      <li>Build component library with consistent spacing</li>
                      <li>Test accessibility with Figma plugins like Stark</li>
                    </ol>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border rounded p-4">
                      <h5 className="text-sm mb-2">🎨 Design Tokens</h5>
                      <p className="text-xs text-muted-foreground">
                        Use Figma's token system to maintain consistency across your design files and components.
                      </p>
                    </div>
                    <div className="border rounded p-4">
                      <h5 className="text-sm mb-2">🔄 Sync Process</h5>
                      <p className="text-xs text-muted-foreground">
                        Keep design tokens synchronized between Figma and code implementation for accurate handoffs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}