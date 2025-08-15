import React from 'react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';

// Simple Button component
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

// Simple Card components
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

// Simple Badge component
function Badge({ children, variant = "default", className = "", ...props }: {
  children: React.ReactNode;
  variant?: "default" | "secondary";
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>) {
  const baseClasses = "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors"
  
  const variantClasses = {
    default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
    secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
  }
  
  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </div>
  )
}

export function ArticlesSection() {
  const featuredArticle = {
    id: 1,
    title: "Guia Completo: ARIA Labels na Prática",
    excerpt: "Aprenda a implementar ARIA labels efetivamente para melhorar a acessibilidade",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",
    category: "Tutorial",
    readTime: "8 min",
    author: "Sarah Chen",
    date: "8 de Dezembro, 2024"
  };

  const articles = [
    {
      id: 2,
      title: "Navegação por Teclado: Melhores Práticas",
      excerpt: "Como criar padrões de navegação acessíveis",
      image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=600&h=400&fit=crop&crop=center",
      category: "Práticas",
      readTime: "6 min",
      author: "Alex Kim",
      date: "5 de Dezembro, 2024"
    },
    {
      id: 3,
      title: "Teste de Cores e Contraste",
      excerpt: "Ferramentas e técnicas para validar acessibilidade visual",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop&crop=center",
      category: "Ferramentas",
      readTime: "5 min",
      author: "Maria Santos",
      date: "3 de Dezembro, 2024"
    },
    {
      id: 4,
      title: "Formulários Acessíveis com React",
      excerpt: "Implementando formulários inclusivos step-by-step",
      image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=600&h=400&fit=crop&crop=center",
      category: "Desenvolvimento",
      readTime: "12 min",
      author: "Jennifer Wu",
      date: "28 de Novembro, 2024"
    },
    {
      id: 5,
      title: "Design Inclusivo para Mobile",
      excerpt: "Criando apps móveis acessíveis para todos",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop&crop=center",
      category: "Design",
      readTime: "10 min",
      author: "David Kim",
      date: "25 de Novembro, 2024"
    },
    {
      id: 6,
      title: "Tecnologias Assistivas Emergentes",
      excerpt: "Explorando o futuro da acessibilidade digital",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=400&fit=crop&crop=center",
      category: "Inovação",
      readTime: "15 min",
      author: "Dr. Lisa Park",
      date: "22 de Novembro, 2024"
    }
  ];

  const categories = ["Todos", "Tutorial", "Práticas", "Ferramentas", "Desenvolvimento", "Design", "Inovação"];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              📚 Conteúdo Educativo
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Artigos sobre
              <span className="text-primary block">Acessibilidade</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Descubra as melhores práticas, ferramentas e técnicas para criar experiências digitais inclusivas
            </p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "Todos" ? "default" : "outline"}
              size="sm"
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Article */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold">Artigo em Destaque</h2>
          </div>
          
          <Card className="overflow-hidden border-0 shadow-2xl">
            <div className="md:flex">
              <div className="md:w-1/2">
                <div className="relative h-64 md:h-full">
                  <ImageWithFallback
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-background/90 backdrop-blur">
                      ⭐ Destaque
                    </Badge>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Badge>{featuredArticle.category}</Badge>
                  <span className="text-sm text-muted-foreground">{featuredArticle.readTime}</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 hover:text-primary transition-colors">
                  {featuredArticle.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  {featuredArticle.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-medium">
                      SC
                    </div>
                    <div>
                      <div className="font-medium">{featuredArticle.author}</div>
                      <div className="text-sm text-muted-foreground">{featuredArticle.date}</div>
                    </div>
                  </div>
                  <Button>
                    Ler Artigo
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Articles Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Últimos Artigos</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Card key={article.id} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative">
                  <div className="h-48 overflow-hidden">
                    <ImageWithFallback
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-background/90 backdrop-blur">
                      {article.category}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm text-muted-foreground">{article.readTime}</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">{article.date}</span>
                  </div>
                  <CardTitle className="text-lg hover:text-primary transition-colors group-hover:text-primary">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-primary/30 rounded-full flex items-center justify-center text-primary text-sm font-medium">
                        {article.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <span className="text-sm text-muted-foreground">{article.author}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary">
                      Ler →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Carregar Mais Artigos
            </Button>
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="bg-gradient-to-r from-primary/10 via-background to-secondary/10 rounded-2xl p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Receba nossos melhores artigos</h3>
            <p className="text-muted-foreground mb-6">
              Insights semanais sobre acessibilidade, enviados diretamente para seu email
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu email"
                className="flex-1 px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <Button>Inscrever-se</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}