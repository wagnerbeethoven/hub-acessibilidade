import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';

// Simple UI Components (reusando a estrutura já corrigida)
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
  size?: "default" | "sm" | "lg";
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
    lg: "h-10 rounded-md px-8"
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

// Ícones simples
const Calendar = ({ className = "" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
)

const MapPin = ({ className = "" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const Clock = ({ className = "" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const Users = ({ className = "" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
  </svg>
)

const Video = ({ className = "" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
)

const ExternalLink = ({ className = "" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
)

export function EventsSection() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const events = [
    {
      id: 1,
      title: "Global Accessibility Awareness Day 2024",
      description: "Um dia inteiro dedicado à conscientização sobre acessibilidade digital, com palestras, workshops e demonstrações práticas.",
      date: "2024-05-16",
      time: "09:00 - 18:00",
      location: "São Paulo Convention Center",
      type: "conference",
      format: "presencial",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop&crop=center",
      speakers: ["Haben Girma", "Léonie Watson", "Adrian Roselli"],
      attendees: 450,
      price: "Gratuito",
      tags: ["WCAG", "Design Inclusivo", "Tecnologia Assistiva"],
      isFeatured: true,
      status: "upcoming"
    },
    {
      id: 2,
      title: "Workshop: ARIA na Prática",
      description: "Workshop hands-on sobre implementação de ARIA labels e como melhorar a acessibilidade de aplicações web.",
      date: "2024-06-15",
      time: "14:00 - 17:00",
      location: "Online via Zoom",
      type: "workshop",
      format: "online",
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600&h=400&fit=crop&crop=center",
      speakers: ["Sarah Chen", "Alex Kim"],
      attendees: 120,
      price: "R$ 150",
      tags: ["ARIA", "Desenvolvimento", "Frontend"],
      isFeatured: false,
      status: "upcoming"
    },
    {
      id: 3,
      title: "Acessibilidade em Mobile Apps",
      description: "Como criar aplicativos móveis acessíveis para iOS e Android, seguindo as melhores práticas de cada plataforma.",
      date: "2024-07-20",
      time: "10:00 - 16:00",
      location: "Rio de Janeiro Tech Hub",
      type: "workshop",
      format: "presencial",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop&crop=center",
      speakers: ["Maria Santos", "David Kim"],
      attendees: 80,
      price: "R$ 200",
      tags: ["Mobile", "iOS", "Android", "UX"],
      isFeatured: true,
      status: "upcoming"
    },
    {
      id: 4,
      title: "Accessibility Testing Automation",
      description: "Aprenda a automatizar testes de acessibilidade com ferramentas como axe-core, Pa11y e outras soluções.",
      date: "2024-08-10",
      time: "09:00 - 12:00",
      location: "Online via Teams",
      type: "workshop",
      format: "online",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center",
      speakers: ["Jennifer Wu", "Lucas Silva"],
      attendees: 200,
      price: "R$ 100",
      tags: ["Testing", "Automation", "DevOps"],
      isFeatured: false,
      status: "upcoming"
    },
    {
      id: 5,
      title: "Design System Acessível",
      description: "Como construir e manter um design system que prioriza acessibilidade desde o início.",
      date: "2024-04-15",
      time: "14:00 - 18:00",
      location: "Belo Horizonte Design Center",
      type: "conference",
      format: "presencial",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&h=400&fit=crop&crop=center",
      speakers: ["Ana Costa", "Pedro Oliveira"],
      attendees: 300,
      price: "R$ 180",
      tags: ["Design System", "Tokens", "Componentes"],
      isFeatured: false,
      status: "past"
    }
  ];

  const filters = [
    { id: 'all', label: 'Todos os Eventos' },
    { id: 'upcoming', label: 'Próximos' },
    { id: 'past', label: 'Passados' },
    { id: 'online', label: 'Online' },
    { id: 'presencial', label: 'Presencial' }
  ];

  const filteredEvents = events.filter(event => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'upcoming') return event.status === 'upcoming';
    if (selectedFilter === 'past') return event.status === 'past';
    if (selectedFilter === 'online') return event.format === 'online';
    if (selectedFilter === 'presencial') return event.format === 'presencial';
    return true;
  });

  const featuredEvent = events.find(event => event.isFeatured);

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              📅 Eventos de Acessibilidade
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Eventos &amp; Workshops
              <span className="text-primary block">de Acessibilidade</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Participe de conferências, workshops e meetups sobre acessibilidade digital. 
              Aprenda com especialistas e conecte-se com a comunidade.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                <Calendar className="w-5 h-5 mr-2" />
                Ver Próximos Eventos
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                <Video className="w-5 h-5 mr-2" />
                Eventos Online
              </Button>
            </div>
          </div>
        </div>

        {/* Event Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={selectedFilter === filter.id ? "default" : "outline"}
              size="sm"
              className="rounded-full"
              onClick={() => setSelectedFilter(filter.id)}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Featured Event */}
        {featuredEvent && (
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">Evento em Destaque</h2>
            </div>
            
            <Card className="overflow-hidden border-0 shadow-2xl">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="relative h-64 md:h-full">
                    <ImageWithFallback
                      src={featuredEvent.image}
                      alt={featuredEvent.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-background/90 backdrop-blur">
                        ⭐ Destaque
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-background/90 backdrop-blur">
                        {featuredEvent.format === 'online' ? '🌐 Online' : '📍 Presencial'}
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge>{featuredEvent.type === 'conference' ? 'Conferência' : 'Workshop'}</Badge>
                    <Badge variant="outline">{featuredEvent.price}</Badge>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 hover:text-primary transition-colors">
                    {featuredEvent.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                    {featuredEvent.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      {new Date(featuredEvent.date).toLocaleDateString('pt-BR')} • {featuredEvent.time}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      {featuredEvent.location}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="h-4 w-4 mr-2" />
                      {featuredEvent.attendees} participantes esperados
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button asChild>
                      <Link to={`/events/${featuredEvent.id}`}>
                        Ver Detalhes
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                    <Button variant="outline">
                      <Calendar className="w-4 h-4 mr-2" />
                      Inscrever-se
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Events Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            {selectedFilter === 'all' ? 'Todos os Eventos' : 
             selectedFilter === 'upcoming' ? 'Próximos Eventos' :
             selectedFilter === 'past' ? 'Eventos Passados' :
             selectedFilter === 'online' ? 'Eventos Online' :
             'Eventos Presenciais'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative">
                  <div className="h-48 overflow-hidden">
                    <ImageWithFallback
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-background/90 backdrop-blur">
                      {event.type === 'conference' ? 'Conferência' : 'Workshop'}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge 
                      variant={event.status === 'past' ? "outline" : "default"}
                      className="bg-background/90 backdrop-blur"
                    >
                      {event.status === 'past' ? 'Finalizado' : 'Em breve'}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      {new Date(event.date).toLocaleDateString('pt-BR')}
                    </span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">{event.time}</span>
                  </div>
                  <CardTitle className="text-lg hover:text-primary transition-colors group-hover:text-primary">
                    {event.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {event.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-3 w-3 mr-2" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="h-3 w-3 mr-2" />
                      {event.attendees} participantes
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {event.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      <span className="font-medium text-primary">{event.price}</span>
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                      <Link to={`/events/${event.id}`} className="text-primary hover:text-primary">
                        Ver Detalhes →
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">Nenhum evento encontrado</h3>
              <p className="text-muted-foreground">
                Não há eventos para o filtro selecionado no momento.
              </p>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary/10 via-background to-secondary/10 rounded-2xl p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <Calendar className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Organize um Evento</h3>
            <p className="text-muted-foreground mb-6">
              Tem uma conferência, workshop ou meetup sobre acessibilidade? 
              Compartilhe com nossa comunidade e ajude a espalhar conhecimento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button>
                <Calendar className="w-4 h-4 mr-2" />
                Submeter Evento
              </Button>
              <Button variant="outline">
                <Video className="w-4 h-4 mr-2" />
                Newsletter de Eventos
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}