import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
const Mail = ({ className = "" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

const Check = ({ className = "" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
)

const Star = ({ className = "" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
)

const Calendar = ({ className = "" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
)

const BookOpen = ({ className = "" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
)

const Cog = ({ className = "" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

export function NewsletterSignupPage() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    role: '',
    interests: [] as string[],
    frequency: 'weekly'
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const interests = [
    'WCAG Guidelines',
    'Design Inclusivo',
    'Desenvolvimento Acessível',
    'Tecnologias Assistivas',
    'Testes de Acessibilidade',
    'Eventos e Conferências',
    'Recursos e Ferramentas',
    'Pesquisas e Estudos',
    'Legislação',
    'Comunidade'
  ];

  const handleInterestChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen py-12 flex items-center justify-center">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <div className="w-20 h-20 bg-green-100 dark:bg-green-900/20 rounded-full mx-auto mb-6 flex items-center justify-center">
            <Check className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Inscrição Confirmada!</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Obrigado por se juntar à nossa comunidade! Você receberá em breve o primeiro email da nossa newsletter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link to="/articles">
                <BookOpen className="w-4 h-4 mr-2" />
                Explorar Artigos
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/newsletter/manage">
                <Cog className="w-4 h-4 mr-2" />
                Gerenciar Preferências
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            📧 Newsletter
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Fique por dentro das
            <span className="text-primary block">novidades em acessibilidade</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Receba insights, tutoriais, eventos e as últimas tendências em acessibilidade digital 
            diretamente no seu email. Junte-se a mais de 5.000 profissionais!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <h2 className="text-2xl font-bold">Personalize sua Newsletter</h2>
                <p className="text-muted-foreground">
                  Conte-nos mais sobre você para enviarmos conteúdo relevante
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Basic Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Nome completo
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="Seu nome"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="seu@email.com"
                        required
                      />
                    </div>
                  </div>

                  {/* Role */}
                  <div>
                    <label htmlFor="role" className="block text-sm font-medium mb-2">
                      Qual sua função? (opcional)
                    </label>
                    <select
                      id="role"
                      value={formData.role}
                      onChange={(e) => setFormData(prev => ({ ...prev, role: e.target.value }))}
                      className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Selecione uma opção</option>
                      <option value="developer">Desenvolvedor(a)</option>
                      <option value="designer">Designer</option>
                      <option value="qa">QA/Tester</option>
                      <option value="pm">Product Manager</option>
                      <option value="researcher">Pesquisador(a)</option>
                      <option value="consultant">Consultor(a)</option>
                      <option value="student">Estudante</option>
                      <option value="other">Outro</option>
                    </select>
                  </div>

                  {/* Interests */}
                  <div>
                    <label className="block text-sm font-medium mb-3">
                      Quais tópicos interessam você? (selecione todos que se aplicam)
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {interests.map((interest) => (
                        <label key={interest} className="flex items-center space-x-2 cursor-pointer p-2 rounded-md hover:bg-muted">
                          <input
                            type="checkbox"
                            checked={formData.interests.includes(interest)}
                            onChange={() => handleInterestChange(interest)}
                            className="rounded border-input text-primary focus:ring-ring"
                          />
                          <span className="text-sm">{interest}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Frequency */}
                  <div>
                    <label className="block text-sm font-medium mb-3">
                      Com que frequência deseja receber emails?
                    </label>
                    <div className="space-y-2">
                      {[
                        { value: 'weekly', label: 'Semanal (recomendado)', description: 'Um resumo com os melhores conteúdos da semana' },
                        { value: 'biweekly', label: 'Quinzenal', description: 'A cada duas semanas' },
                        { value: 'monthly', label: 'Mensal', description: 'Uma vez por mês com os destaques' }
                      ].map((option) => (
                        <label key={option.value} className="flex items-start space-x-3 cursor-pointer p-3 rounded-md hover:bg-muted">
                          <input
                            type="radio"
                            name="frequency"
                            value={option.value}
                            checked={formData.frequency === option.value}
                            onChange={(e) => setFormData(prev => ({ ...prev, frequency: e.target.value }))}
                            className="mt-1 text-primary focus:ring-ring"
                          />
                          <div>
                            <div className="font-medium text-sm">{option.label}</div>
                            <div className="text-xs text-muted-foreground">{option.description}</div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Privacy */}
                  <div className="p-4 bg-muted rounded-md">
                    <p className="text-sm text-muted-foreground">
                      Ao se inscrever, você concorda em receber emails do AccessibilityHub. 
                      Você pode cancelar a inscrição a qualquer momento. 
                      Leia nossa <Link to="/privacy" className="text-primary hover:underline">política de privacidade</Link>.
                    </p>
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Mail className="w-4 h-4 mr-2" />
                    Inscrever-se na Newsletter
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Benefits */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold">O que você receberá</h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium text-sm">Artigos Exclusivos</div>
                    <div className="text-xs text-muted-foreground">Tutoriais aprofundados e guias práticos</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <div className="font-medium text-sm">Eventos & Workshops</div>
                    <div className="text-xs text-muted-foreground">Primeiros a saber sobre eventos</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Cog className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-medium text-sm">Ferramentas & Recursos</div>
                    <div className="text-xs text-muted-foreground">Descobertas de ferramentas úteis</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Star className="w-4 h-4 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-medium text-sm">Conteúdo Premium</div>
                    <div className="text-xs text-muted-foreground">Acesso antecipado a conteúdos</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold">Junte-se à Comunidade</h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">5.2K+</div>
                    <div className="text-sm text-muted-foreground">Inscritos ativos</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">95%</div>
                    <div className="text-sm text-muted-foreground">Taxa de satisfação</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">230+</div>
                    <div className="text-sm text-muted-foreground">Edições enviadas</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center space-x-1 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-sm text-muted-foreground mb-3">
                  "A newsletter do AccessibilityHub é essencial para manter-me atualizada sobre as melhores práticas em acessibilidade."
                </blockquote>
                <div className="text-xs">
                  <div className="font-medium">Sarah Chen</div>
                  <div className="text-muted-foreground">UX Designer, Microsoft</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}