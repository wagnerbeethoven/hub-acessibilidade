import React from 'react';
import { Link } from 'react-router-dom';
import { CommunityIllustration } from './illustrations/CommunityIllustration';
import { AccessibilityIllustration } from './illustrations/AccessibilityIllustration';
import { LearningIllustration } from './illustrations/LearningIllustration';
import { CollaborationIllustration } from './illustrations/CollaborationIllustration';
import { GrowthIllustration } from './illustrations/GrowthIllustration';

// Simple components
function Button({ children, variant = "default", size = "default", className = "", asChild = false, ...props }: any) {
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
    return React.cloneElement(children, { className: combinedClassName, ...props })
  }
  return <button className={combinedClassName} {...props}>{children}</button>
}

function Card({ children, className = "", ...props }: any) {
  return <div className={`rounded-xl border bg-card text-card-foreground shadow ${className}`} {...props}>{children}</div>
}

function CardContent({ children, className = "", ...props }: any) {
  return <div className={`p-6 ${className}`} {...props}>{children}</div>
}

function Badge({ children, variant = "default", className = "", ...props }: any) {
  const baseClasses = "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors"
  const variantClasses = {
    default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
    secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline: "text-foreground border-border"
  }
  return <div className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>{children}</div>
}

// Simple icons
const ArrowRight = ({ className = "" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
)

const Heart = ({ className = "" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
)

const Users = ({ className = "" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
)

const BookOpen = ({ className = "" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
)

const Lightbulb = ({ className = "" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
)

const Globe = ({ className = "" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>
)

const Star = ({ className = "" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
)

export function Homepage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                  🌟 Uma comunidade para todos
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  Construindo uma web
                  <span className="text-primary block">mais acessível juntos</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  Somos uma comunidade vibrante de pessoas que acreditam que a web deve ser 
                  acessível para todos. Aqui você encontra apoio, aprende e cresce junto com outros 
                  apaixonados por inclusão digital.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-3" asChild>
                  <Link to="/people">
                    <Heart className="w-5 h-5 mr-2" />
                    Conhecer a Comunidade
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-3" asChild>
                  <Link to="/articles">
                    <BookOpen className="w-5 h-5 mr-2" />
                    Começar a Aprender
                  </Link>
                </Button>
              </div>

              {/* Community stats */}
              <div className="flex flex-wrap gap-8 pt-8 border-t border-border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">5.2K+</div>
                  <div className="text-sm text-muted-foreground">Membros ativos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">150+</div>
                  <div className="text-sm text-muted-foreground">Artigos compartilhados</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">40+</div>
                  <div className="text-sm text-muted-foreground">Eventos realizados</div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <div className="community-illustration">
                <CommunityIllustration className="w-full max-w-lg h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              O que nos move como comunidade
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Nossos valores guiam cada interação, cada projeto e cada iniciativa que desenvolvemos juntos.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Value 1 */}
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="pt-8">
                <div className="flex justify-center mb-6">
                  <div className="illustration-float">
                    <AccessibilityIllustration className="w-24 h-24 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4">Inclusão para Todos</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Acreditamos que toda pessoa merece acesso igual à informação e às oportunidades digitais, 
                  independentemente de suas habilidades.
                </p>
              </CardContent>
            </Card>

            {/* Value 2 */}
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="pt-8">
                <div className="flex justify-center mb-6">
                  <div className="illustration-float" style={{animationDelay: '2s'}}>
                    <LearningIllustration className="w-24 h-24 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4">Aprendizado Compartilhado</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Crescemos juntos compartilhando conhecimento, experiências e descobertas. 
                  Cada pessoa ensina e aprende ao mesmo tempo.
                </p>
              </CardContent>
            </Card>

            {/* Value 3 */}
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="pt-8">
                <div className="flex justify-center mb-6">
                  <div className="illustration-float" style={{animationDelay: '4s'}}>
                    <CollaborationIllustration className="w-24 h-24 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4">Colaboração Aberta</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Trabalhamos juntos, dividimos recursos e apoiamos uns aos outros para 
                  criar soluções que beneficiem toda a comunidade.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Por onde você quer começar?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Escolha o caminho que mais faz sentido para você neste momento. Todos levam ao mesmo lugar: 
              uma web mais acessível para todos.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Articles */}
            <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-0 shadow-lg">
              <Link to="/articles" className="block">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-chart-1/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-chart-1/30 transition-colors">
                    <BookOpen className="w-6 h-6 text-chart-1" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                    Aprender & Descobrir
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Explore artigos práticos, tutoriais e guias escritos por nossa comunidade 
                    para todos os níveis de conhecimento.
                  </p>
                  <div className="flex items-center text-primary group-hover:translate-x-1 transition-transform">
                    <span className="text-sm font-medium">Começar a ler</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </CardContent>
              </Link>
            </Card>

            {/* People */}
            <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-0 shadow-lg">
              <Link to="/people" className="block">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-chart-2/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-chart-2/30 transition-colors">
                    <Users className="w-6 h-6 text-chart-2" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                    Conectar & Compartilhar
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Conheça pessoas incríveis que estão fazendo a diferença na acessibilidade 
                    e faça parte desta rede de apoio.
                  </p>
                  <div className="flex items-center text-primary group-hover:translate-x-1 transition-transform">
                    <span className="text-sm font-medium">Conhecer pessoas</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </CardContent>
              </Link>
            </Card>

            {/* Projects */}
            <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-0 shadow-lg">
              <Link to="/projects" className="block">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-chart-3/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-chart-3/30 transition-colors">
                    <Lightbulb className="w-6 h-6 text-chart-3" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                    Construir & Contribuir
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Veja projetos inspiradores criados pela comunidade e descubra como 
                    contribuir ou compartilhar suas próprias ideias.
                  </p>
                  <div className="flex items-center text-primary group-hover:translate-x-1 transition-transform">
                    <span className="text-sm font-medium">Ver projetos</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </CardContent>
              </Link>
            </Card>

            {/* Resources */}
            <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-0 shadow-lg">
              <Link to="/resources" className="block">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-chart-4/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-chart-4/30 transition-colors">
                    <Globe className="w-6 h-6 text-chart-4" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                    Ferramentas & Recursos
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Acesse uma biblioteca curada de ferramentas, bibliotecas e recursos 
                    essenciais para desenvolvimento acessível.
                  </p>
                  <div className="flex items-center text-primary group-hover:translate-x-1 transition-transform">
                    <span className="text-sm font-medium">Explorar recursos</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </CardContent>
              </Link>
            </Card>

            {/* Events */}
            <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-0 shadow-lg">
              <Link to="/events" className="block">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-chart-5/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-chart-5/30 transition-colors">
                    <Star className="w-6 h-6 text-chart-5" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                    Eventos & Workshops
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Participe de eventos, workshops e meetups para aprender na prática 
                    e conhecer pessoas da comunidade.
                  </p>
                  <div className="flex items-center text-primary group-hover:translate-x-1 transition-transform">
                    <span className="text-sm font-medium">Ver eventos</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </CardContent>
              </Link>
            </Card>

            {/* Newsletter */}
            <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-0 shadow-lg">
              <Link to="/newsletter/signup" className="block">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                    Newsletter da Comunidade
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Receba as novidades, destaques e histórias inspiradoras da nossa 
                    comunidade diretamente no seu email.
                  </p>
                  <div className="flex items-center text-primary group-hover:translate-x-1 transition-transform">
                    <span className="text-sm font-medium">Inscrever-se</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </CardContent>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Community CTA */}
      <section className="py-20 bg-gradient-to-r from-primary/5 via-background to-chart-2/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Faça parte desta jornada
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Nossa comunidade cresce a cada dia com pessoas que acreditam que juntos podemos 
                criar uma web mais inclusiva e acessível. Qual será sua contribuição?
              </p>
            
              <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center mb-8">
                <Button size="lg" className="text-lg px-8" asChild>
                  <Link to="/people">
                    <Heart className="w-5 h-5 mr-2" />
                    Juntar-se à Comunidade
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8" asChild>
                  <Link to="/contact">
                    Começar uma Conversa
                  </Link>
                </Button>
              </div>

              {/* Contribution ideas */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center lg:text-left">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto lg:mx-0 mb-4 flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Compartilhe conhecimento</h4>
                  <p className="text-sm text-muted-foreground">
                    Escreva artigos, faça tutoriais ou compartilhe sua experiência
                  </p>
                </div>
                
                <div className="text-center lg:text-left">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto lg:mx-0 mb-4 flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Apoie outros membros</h4>
                  <p className="text-sm text-muted-foreground">
                    Responda dúvidas, mentore e colabore em projetos
                  </p>
                </div>
                
                <div className="text-center lg:text-left">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto lg:mx-0 mb-4 flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Crie soluções</h4>
                  <p className="text-sm text-muted-foreground">
                    Desenvolva ferramentas e projetos que ajudem toda a comunidade
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <div className="community-illustration">
                <GrowthIllustration className="w-full max-w-md h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}