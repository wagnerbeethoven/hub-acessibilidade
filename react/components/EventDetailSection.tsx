import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';

// Reusing simplified UI components
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

// Icons
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

const Share = ({ className = "" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
  </svg>
)

const ArrowLeft = ({ className = "" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
)

export function EventDetailSection() {
  const { id } = useParams();
  const [isRegistered, setIsRegistered] = useState(false);

  // Mock data - in real app this would come from API
  const event = {
    id: 1,
    title: "Global Accessibility Awareness Day 2024",
    description: "Um dia inteiro dedicado à conscientização sobre acessibilidade digital, com palestras, workshops e demonstrações práticas de tecnologias assistivas.",
    longDescription: `
      O Global Accessibility Awareness Day (GAAD) é uma oportunidade única para profissionais de tecnologia, designers, desenvolvedores e defensores da acessibilidade se reunirem para compartilhar conhecimento e experiências.

      Este evento abrangente oferece uma combinação de palestras inspiradoras, workshops práticos e demonstrações de tecnologias assistivas. Os participantes terão a oportunidade de aprender sobre as últimas tendências em acessibilidade digital, conhecer ferramentas inovadoras e conectar-se com uma comunidade vibrante de profissionais comprometidos com a inclusão.

      O programa inclui sessões sobre WCAG 2.1, design inclusivo, desenvolvimento acessível, testes de acessibilidade e muito mais. Também haverá um espaço de networking e uma feira de tecnologias assistivas.
    `,
    date: "2024-05-16",
    time: "09:00 - 18:00",
    location: "São Paulo Convention Center",
    address: "Rua José Bernardo Pinto, 333 - Vila Guilherme, São Paulo - SP",
    type: "conference",
    format: "presencial",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop&crop=center",
    speakers: [
      {
        name: "Haben Girma",
        title: "Disability Rights Advocate",
        company: "Harvard Law School",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b120?w=150&h=150&fit=crop&crop=face",
        bio: "First deafblind graduate of Harvard Law School"
      },
      {
        name: "Léonie Watson",
        title: "Accessibility Engineer",
        company: "TetraLogical",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
        bio: "Co-founder of TetraLogical and accessibility expert"
      },
      {
        name: "Adrian Roselli",
        title: "Accessibility Consultant",
        company: "Independent",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        bio: "Accessibility consultant and speaker"
      }
    ],
    agenda: [
      { time: "09:00 - 09:30", title: "Credenciamento e Coffee", speaker: "" },
      { time: "09:30 - 10:30", title: "Keynote: O Futuro da Acessibilidade Digital", speaker: "Haben Girma" },
      { time: "10:30 - 11:00", title: "Coffee Break", speaker: "" },
      { time: "11:00 - 12:00", title: "WCAG 2.1 na Prática", speaker: "Léonie Watson" },
      { time: "12:00 - 13:30", title: "Almoço", speaker: "" },
      { time: "13:30 - 14:30", title: "Testes de Acessibilidade Automatizados", speaker: "Adrian Roselli" },
      { time: "14:30 - 15:30", title: "Workshop: Design Inclusivo", speaker: "Equipe" },
      { time: "15:30 - 16:00", title: "Coffee Break", speaker: "" },
      { time: "16:00 - 17:00", title: "Painel: Tecnologias Assistivas Emergentes", speaker: "Todos" },
      { time: "17:00 - 18:00", title: "Networking e Encerramento", speaker: "" }
    ],
    attendees: 450,
    maxAttendees: 500,
    price: "Gratuito",
    tags: ["WCAG", "Design Inclusivo", "Tecnologia Assistiva", "Desenvolvimento"],
    organizer: {
      name: "AccessibilityHub",
      email: "eventos@accessibilityhub.com",
      website: "https://accessibilityhub.com"
    },
    status: "upcoming",
    requirements: [
      "Notebook para workshops práticos",
      "Conhecimento básico em HTML/CSS (desejável)",
      "Interesse em acessibilidade digital"
    ],
    benefits: [
      "Certificate de participação",
      "Materiais dos workshops",
      "Acesso à gravação das palestras",
      "Networking com profissionais da área",
      "Coffee breaks e almoço inclusos"
    ]
  };

  const handleRegistration = () => {
    setIsRegistered(!isRegistered);
  };

  const shareEvent = () => {
    if (navigator.share) {
      navigator.share({
        title: event.title,
        text: event.description,
        url: window.location.href,
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copiado para a área de transferência!');
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Back Navigation */}
        <div className="mb-8">
          <Button variant="ghost" asChild>
            <Link to="/events">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar para Eventos
            </Link>
          </Button>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-6">
              <ImageWithFallback
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge className="bg-background/90 backdrop-blur">
                  {event.type === 'conference' ? 'Conferência' : 'Workshop'}
                </Badge>
              </div>
              <div className="absolute top-4 right-4">
                <Badge variant="secondary" className="bg-background/90 backdrop-blur">
                  {event.format === 'online' ? '🌐 Online' : '📍 Presencial'}
                </Badge>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {event.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">{event.title}</h1>
            <p className="text-xl text-muted-foreground mb-6">{event.description}</p>

            {/* Event Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center text-muted-foreground">
                <Calendar className="h-5 w-5 mr-3" />
                <div>
                  <div className="font-medium text-foreground">
                    {new Date(event.date).toLocaleDateString('pt-BR', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                  <div className="text-sm">{event.time}</div>
                </div>
              </div>

              <div className="flex items-center text-muted-foreground">
                <MapPin className="h-5 w-5 mr-3" />
                <div>
                  <div className="font-medium text-foreground">{event.location}</div>
                  <div className="text-sm">{event.address}</div>
                </div>
              </div>

              <div className="flex items-center text-muted-foreground">
                <Users className="h-5 w-5 mr-3" />
                <div>
                  <div className="font-medium text-foreground">
                    {event.attendees}/{event.maxAttendees} participantes
                  </div>
                  <div className="text-sm">
                    {event.maxAttendees - event.attendees} vagas restantes
                  </div>
                </div>
              </div>

              <div className="flex items-center text-muted-foreground">
                <Clock className="h-5 w-5 mr-3" />
                <div>
                  <div className="font-medium text-foreground">Duração: 9 horas</div>
                  <div className="text-sm">Incluindo intervalos</div>
                </div>
              </div>
            </div>
          </div>

          {/* Registration Card */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{event.price}</div>
                  <div className="text-sm text-muted-foreground">Por participante</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  className="w-full" 
                  size="lg"
                  onClick={handleRegistration}
                  variant={isRegistered ? "outline" : "default"}
                >
                  {isRegistered ? "✓ Inscrito" : "Inscrever-se"}
                </Button>
                
                <Button variant="outline" className="w-full" onClick={shareEvent}>
                  <Share className="w-4 h-4 mr-2" />
                  Compartilhar
                </Button>

                <div className="pt-4 border-t space-y-3">
                  <div className="text-sm">
                    <span className="font-medium">Organizador:</span>
                    <div className="text-muted-foreground">{event.organizer.name}</div>
                  </div>
                  
                  <div className="text-sm">
                    <span className="font-medium">Contato:</span>
                    <div className="text-muted-foreground">{event.organizer.email}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Event Description */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <h2 className="text-2xl font-bold">Sobre o Evento</h2>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                {event.longDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 text-muted-foreground leading-relaxed">
                    {paragraph.trim()}
                  </p>
                ))}
              </CardContent>
            </Card>

            {/* Requirements & Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <Card>
                <CardHeader>
                  <h3 className="text-lg font-semibold">Requisitos</h3>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {event.requirements.map((req, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <h3 className="text-lg font-semibold">O que está incluído</h3>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {event.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Speakers */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold">Palestrantes</h3>
              </CardHeader>
              <CardContent className="space-y-4">
                {event.speakers.map((speaker, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <ImageWithFallback
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm">{speaker.name}</div>
                      <div className="text-xs text-muted-foreground">{speaker.title}</div>
                      <div className="text-xs text-muted-foreground">{speaker.company}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Agenda */}
        <Card className="mb-12">
          <CardHeader>
            <h2 className="text-2xl font-bold">Programação</h2>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {event.agenda.map((item, index) => (
                <div key={index} className="flex flex-col md:flex-row md:items-center gap-2 py-3 border-b border-border last:border-b-0">
                  <div className="flex items-center text-sm text-muted-foreground min-w-[120px]">
                    <Clock className="h-4 w-4 mr-2" />
                    {item.time}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">{item.title}</div>
                    {item.speaker && (
                      <div className="text-sm text-muted-foreground">
                        com {item.speaker}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Similar Events */}
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-bold">Eventos Relacionados</h2>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex space-x-3 p-4 border border-border rounded-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=100&h=100&fit=crop&crop=center"
                  alt="Workshop ARIA"
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-sm mb-1">Workshop: ARIA na Prática</h4>
                  <p className="text-xs text-muted-foreground mb-2">15 de Junho • Online</p>
                  <Button size="sm" variant="outline" asChild>
                    <Link to="/events/2">Ver Detalhes</Link>
                  </Button>
                </div>
              </div>

              <div className="flex space-x-3 p-4 border border-border rounded-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=100&h=100&fit=crop&crop=center"
                  alt="Mobile Accessibility"
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-sm mb-1">Acessibilidade em Mobile</h4>
                  <p className="text-xs text-muted-foreground mb-2">20 de Julho • Rio de Janeiro</p>
                  <Button size="sm" variant="outline" asChild>
                    <Link to="/events/3">Ver Detalhes</Link>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}