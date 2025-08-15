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
const Users = ({ className = "" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
  </svg>
)

const Check = ({ className = "" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
)

const Send = ({ className = "" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
)

const ArrowLeft = ({ className = "" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
)

export function NominatePage() {
  const [formData, setFormData] = useState({
    nomineeName: '',
    nomineeEmail: '',
    nomineeCompany: '',
    nomineeRole: '',
    category: '',
    achievements: '',
    contribution: '',
    reason: '',
    nominatorName: '',
    nominatorEmail: '',
    nominatorConsent: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const categories = [
    { value: 'community', label: 'Membro da Comunidade' },
    { value: 'professional', label: 'Profissional Destaque' },
    { value: 'advocate', label: 'Defensor/Ativista' },
    { value: 'educator', label: 'Educador' },
    { value: 'innovator', label: 'Inovador' },
    { value: 'researcher', label: 'Pesquisador' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen py-12 flex items-center justify-center">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <div className="w-20 h-20 bg-green-100 dark:bg-green-900/20 rounded-full mx-auto mb-6 flex items-center justify-center">
            <Check className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Nominação Enviada!</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Obrigado por nomear {formData.nomineeName}! Nossa equipe irá revisar a indicação.
          </p>
          <Button asChild>
            <Link to="/people">
              <Users className="w-4 h-4 mr-2" />
              Ver Pessoas em Destaque
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <Button variant="ghost" asChild>
            <Link to="/people">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar para Pessoas
            </Link>
          </Button>
        </div>

        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">🌟 Nominação</Badge>
          <h1 className="text-4xl font-bold mb-6">Nomear Alguém para Destaque</h1>
          <p className="text-xl text-muted-foreground">
            Ajude-nos a reconhecer pessoas inspiradoras da nossa comunidade.
          </p>
        </div>

        <Card>
          <CardHeader>
            <h2 className="text-2xl font-bold">Formulário de Nominação</h2>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nomineeName" className="block text-sm font-medium mb-2">
                    Nome da pessoa *
                  </label>
                  <input
                    type="text"
                    id="nomineeName"
                    value={formData.nomineeName}
                    onChange={(e) => setFormData(prev => ({ ...prev, nomineeName: e.target.value }))}
                    className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="nomineeEmail" className="block text-sm font-medium mb-2">
                    Email da pessoa
                  </label>
                  <input
                    type="email"
                    id="nomineeEmail"
                    value={formData.nomineeEmail}
                    onChange={(e) => setFormData(prev => ({ ...prev, nomineeEmail: e.target.value }))}
                    className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nomineeRole" className="block text-sm font-medium mb-2">
                    Cargo/Função *
                  </label>
                  <input
                    type="text"
                    id="nomineeRole"
                    value={formData.nomineeRole}
                    onChange={(e) => setFormData(prev => ({ ...prev, nomineeRole: e.target.value }))}
                    className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="nomineeCompany" className="block text-sm font-medium mb-2">
                    Empresa/Organização
                  </label>
                  <input
                    type="text"
                    id="nomineeCompany"
                    value={formData.nomineeCompany}
                    onChange={(e) => setFormData(prev => ({ ...prev, nomineeCompany: e.target.value }))}
                    className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-3">Categoria *</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {categories.map((category) => (
                    <label key={category.value} className="flex items-center space-x-2 cursor-pointer p-3 rounded-md border hover:bg-muted">
                      <input
                        type="radio"
                        name="category"
                        value={category.value}
                        checked={formData.category === category.value}
                        onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                        required
                      />
                      <span className="text-sm">{category.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="contribution" className="block text-sm font-medium mb-2">
                  Contribuições para Acessibilidade *
                </label>
                <textarea
                  id="contribution"
                  value={formData.contribution}
                  onChange={(e) => setFormData(prev => ({ ...prev, contribution: e.target.value }))}
                  className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                  rows={4}
                  required
                />
              </div>

              <div>
                <label htmlFor="reason" className="block text-sm font-medium mb-2">
                  Por que ela merece destaque? *
                </label>
                <textarea
                  id="reason"
                  value={formData.reason}
                  onChange={(e) => setFormData(prev => ({ ...prev, reason: e.target.value }))}
                  className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                  rows={4}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nominatorName" className="block text-sm font-medium mb-2">
                    Seu nome *
                  </label>
                  <input
                    type="text"
                    id="nominatorName"
                    value={formData.nominatorName}
                    onChange={(e) => setFormData(prev => ({ ...prev, nominatorName: e.target.value }))}
                    className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="nominatorEmail" className="block text-sm font-medium mb-2">
                    Seu email *
                  </label>
                  <input
                    type="email"
                    id="nominatorEmail"
                    value={formData.nominatorEmail}
                    onChange={(e) => setFormData(prev => ({ ...prev, nominatorEmail: e.target.value }))}
                    className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    required
                  />
                </div>
              </div>

              <label className="flex items-start space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.nominatorConsent}
                  onChange={(e) => setFormData(prev => ({ ...prev, nominatorConsent: e.target.checked }))}
                  className="mt-1"
                  required
                />
                <span className="text-sm text-muted-foreground">
                  Confirmo que tenho permissão para nomear esta pessoa e que as informações fornecidas são verdadeiras.
                </span>
              </label>

              <Button type="submit" size="lg" className="w-full">
                <Send className="w-4 h-4 mr-2" />
                Enviar Nominação
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}