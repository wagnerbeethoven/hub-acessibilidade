# Accessibility Hub - Design System Documentation

## Overview
This design system provides a comprehensive accessibility-focused website with light/dark theme support, built with React, Tailwind CSS v4, and shadcn/ui components.

## Color System

### Primary Color: #005151 (Teal)
- **Light Theme Primary**: `oklch(0.296 0.086 180.0)` - #005151
- **Dark Theme Primary**: `oklch(0.45 0.12 180.0)` - Brighter teal for dark backgrounds
- **Primary Foreground**: `oklch(0.985 0 0)` - Near white text on primary backgrounds

### Color Tokens

#### Light Theme
```css
--background: oklch(1 0 0)              /* Pure white */
--foreground: oklch(0.145 0 0)          /* Near black text */
--card: oklch(1 0 0)                    /* White cards */
--muted: oklch(0.97 0 0)                /* Light gray */
--border: oklch(0.922 0 0)              /* Light border */
--primary: oklch(0.296 0.086 180.0)     /* #005151 teal */
```

#### Dark Theme
```css
--background: oklch(0.145 0 0)          /* Dark background */
--foreground: oklch(0.985 0 0)          /* Near white text */
--card: oklch(0.205 0 0)                /* Dark cards */
--muted: oklch(0.269 0 0)               /* Dark gray */
--border: oklch(0.269 0 0)              /* Dark border */
--primary: oklch(0.45 0.12 180.0)       /* Brighter teal */
```

## Typography
- **System Fonts**: Uses system font stack for optimal performance
- **No Custom Font Sizes**: Relies on semantic HTML and browser defaults
- **Accessibility**: All text maintains WCAG AA contrast ratios

## Component Library

### Layout Components

#### Header
- **Sticky Navigation**: `sticky top-0 z-50`
- **Logo**: Accessibility icon + "Accessibility Hub" text
- **Desktop Navigation**: Horizontal menu with hover states
- **Mobile Navigation**: Sheet/drawer with toggle
- **Theme Toggle**: Sun/moon icon toggle in both desktop and mobile
- **Active States**: Primary color underline for current page

#### Footer
- **Multi-Column Layout**: Links organized by category
- **Social Links**: External platform links
- **Copyright**: Current year auto-update
- **Responsive**: Stacks on mobile

### Content Components

#### Cards
- **Base Card**: `bg-card text-card-foreground`
- **Hover Effects**: Subtle elevation and border changes
- **Content Areas**: Header, body, footer sections
- **Responsive**: Adapts to container width

#### Buttons
- **Primary**: Teal background with white text
- **Secondary**: Muted background
- **Ghost**: Transparent with hover states
- **Outline**: Border with transparent background
- **Icon**: Square buttons for icons

#### Forms
- **Input Fields**: Consistent border and focus states
- **Labels**: Proper association with form controls
- **Validation**: Error and success states
- **Accessibility**: ARIA labels and descriptions

### Interactive Components

#### Theme Toggle
- **Animation**: Smooth rotate/scale transitions
- **Icons**: Sun (light) and Moon (dark)
- **State Management**: React context with localStorage
- **Accessibility**: Proper ARIA labels

#### Navigation
- **Focus Management**: Visible focus indicators
- **Keyboard Navigation**: Tab order and Enter/Space activation
- **Screen Readers**: ARIA current page indicators
- **Mobile**: Touch-friendly targets (44px minimum)

## Pages & Sections

### Homepage
- **Hero Section**: Introduction and call-to-action
- **Feature Cards**: Highlights of main sections
- **Newsletter Signup**: Email capture form

### Podcast Section
- **Episode Cards**: Title, description, platforms
- **Embedded Players**: Spotify, Apple Podcasts integration
- **Archive**: Organized by date/category

### Articles Section
- **Article Cards**: Title, excerpt, date, tags
- **Categories**: Filtering and organization
- **Reading Time**: Estimated time indicators

### Resources Section
- **Resource Cards**: Tools, guides, documentation
- **Categories**: Screen readers, testing tools, guidelines
- **External Links**: Proper target and rel attributes

### People & Projects Section
- **Profile Cards**: Photos, names, roles, bios
- **Project Showcases**: Accessibility-focused projects
- **Links**: Portfolio and social media connections

### Contact Section
- **Contact Form**: Name, email, message fields
- **Validation**: Real-time form validation
- **Accessibility**: Error handling and success states

## Accessibility Features

### WCAG Compliance
- **AA Contrast**: All color combinations meet 4.5:1 ratio
- **Focus Indicators**: 2px solid ring with offset
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **ARIA Labels**: Comprehensive labeling for screen readers

### Keyboard Navigation
- **Tab Order**: Logical progression through interactive elements
- **Skip Links**: Jump to main content
- **Escape Handling**: Close modals and menus
- **Enter/Space**: Activate buttons and links

### Screen Reader Support
- **Live Regions**: Dynamic content announcements
- **Role Attributes**: Clear element purposes
- **State Information**: Current page, expanded/collapsed states
- **Alternative Text**: All images have descriptive alt text

### Motion & Animation
- **Reduced Motion**: Respects `prefers-reduced-motion`
- **Smooth Transitions**: 0.3s ease for theme changes
- **Performance**: CSS transforms for animations
- **Optional**: All animations can be disabled

## Responsive Design

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Layout Patterns
- **Mobile First**: Progressive enhancement
- **Grid Systems**: CSS Grid and Flexbox
- **Container Queries**: Component-level responsiveness
- **Fluid Typography**: Responsive text scaling

## Technical Implementation

### React Components
- **Functional Components**: Using React hooks
- **TypeScript**: Full type safety
- **Context API**: Theme management
- **Custom Hooks**: Reusable logic

### Styling Approach
- **Tailwind CSS v4**: Utility-first framework
- **CSS Custom Properties**: Theme tokens
- **OKLCH Color Space**: Modern color definitions
- **Component Variants**: shadcn/ui pattern

### Performance
- **Code Splitting**: Route-based lazy loading
- **Tree Shaking**: Unused code elimination
- **Image Optimization**: Responsive images with fallbacks
- **Caching**: Browser and CDN optimization

## Browser Support
- **Modern Browsers**: Chrome, Firefox, Safari, Edge (last 2 versions)
- **Accessibility Tools**: NVDA, JAWS, VoiceOver compatibility
- **Progressive Enhancement**: Core functionality without JavaScript

## Deployment Considerations
- **SEO**: Meta tags, structured data, sitemap
- **Analytics**: Privacy-focused tracking
- **Performance**: Lighthouse score optimization
- **Security**: Content Security Policy, HTTPS only

## Design Tokens for Figma

If creating this design system in Figma, use these specifications:

### Colors (Figma Hex Values)
- **Primary Light**: #005151
- **Primary Dark**: #4A9B9B (approximate)
- **Background Light**: #FFFFFF
- **Background Dark**: #1A1A1A
- **Text Light**: #0A0A0A
- **Text Dark**: #F5F5F5

### Spacing Scale
- **4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px**

### Border Radius
- **Small**: 6px
- **Medium**: 8px  
- **Large**: 10px
- **Extra Large**: 14px

### Typography Scale
- **Use system fonts**: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto
- **Rely on browser defaults for sizes**
- **Maintain 1.5 line height for body text**

### Component Specifications
- **Button Height**: 40px (mobile), 36px (desktop)
- **Input Height**: 40px
- **Minimum Touch Target**: 44px
- **Focus Ring**: 2px solid primary color, 2px offset
- **Card Padding**: 24px
- **Section Spacing**: 64px (desktop), 48px (mobile)

This documentation provides all the specifications needed to recreate the design system in Figma or any other design tool.