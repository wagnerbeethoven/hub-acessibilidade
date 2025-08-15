import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Simple components (reused pattern)
function Button({ children, variant = "default", size = "default", className = "", asChild = false, ...props }: any) {
  const baseClasses = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
  const variantClasses = { default: "bg-primary text-primary-foreground shadow hover:bg-primary/90", outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground", ghost: "hover:bg-accent hover:text-accent-foreground" }
  const sizeClasses = { default: "h-9 px-4 py-2", sm: "h-8 rounded-md px-3 text-xs", lg: "h-10 rounded-md px-8" }
  const combinedClassName = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`.trim()
  
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, { className: combinedClassName, ...props })
  }
  return <button className={combinedClassName} {...props}>{children}</button>
}

function Card({ children, className = "", ...props }: any) {
  return <div className={`rounded-xl border bg-card text-card-foreground shadow ${className}`} {...props}>{children}</div>
}

function CardHeader({ children, className = "", ...props }: any) {
  return <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props}>{children}</div>
}

function CardContent({ children, className = "", ...props }: any) {
  return <div className={`p-6 pt-0 ${className}`} {...props}>{children}</div>
}

function Badge({ children, variant = "default", className = "", ...props }: any) {
  const baseClasses = "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors"
  const variantClasses = { default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80", secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80", outline: "text-foreground border-border" }
  return <div className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>{children}</div>
}

const Check = ({ className = "" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
)

const ArrowLeft = ({ className = "" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
)

const Upload = ({ className = "" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
  </svg>
)

export function SubmitResourcePage() {
  const [formData, setFormData] = useState({
    title: '', url: '', description: '', category: '', submitterName: '', submitterEmail: '', tags: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

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
          <h1 className="text-3xl font-bold mb-4">Recurso Enviado!</h1>
          <p className="text-xl text-muted-foreground mb-8">Obrigado! Vamos revisar seu recurso e adicioná-lo à nossa biblioteca.</p>
          <Button asChild><Link to="/resources">Ver Recursos</Link></Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <Button variant="ghost" asChild>
            <Link to="/resources"><ArrowLeft className="w-4 h-4 mr-2" />Voltar para Recursos</Link>
          </Button>
        </div>

        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">📚 Submissão de Recurso</Badge>
          <h1 className="text-4xl font-bold mb-6">Submeter um Recurso</h1>
          <p className="text-xl text-muted-foreground">Compartilhe ferramentas, artigos ou recursos úteis sobre acessibilidade.</p>
        </div>

        <Card>
          <CardHeader>
            <h2 className="text-2xl font-bold">Informações do Recurso</h2>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="title" className="block text-sm font-medium mb-2">Título do Recurso *</label>
                <input type="text" id="title" value={formData.title} onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))} className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring" required />
              </div>

              <div>
                <label htmlFor="url" className="block text-sm font-medium mb-2">URL *</label>
                <input type="url" id="url" value={formData.url} onChange={(e) => setFormData(prev => ({ ...prev, url: e.target.value }))} className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring" required />
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-medium mb-2">Categoria *</label>
                <select id="category" value={formData.category} onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))} className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring" required>
                  <option value="">Selecione uma categoria</option>
                  <option value="tools">Ferramentas</option>
                  <option value="guidelines">Diretrizes</option>
                  <option value="testing">Testes</option>
                  <option value="design">Design</option>
                  <option value="development">Desenvolvimento</option>
                  <option value="education">Educação</option>
                </select>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium mb-2">Descrição *</label>
                <textarea id="description" value={formData.description} onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))} className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring" rows={4} required />
              </div>

              <div>
                <label htmlFor="tags" className="block text-sm font-medium mb-2">Tags (separadas por vírgula)</label>
                <input type="text" id="tags" value={formData.tags} onChange={(e) => setFormData(prev => ({ ...prev, tags: e.target.value }))} className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring" placeholder="WCAG, teste, ferramenta" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="submitterName" className="block text-sm font-medium mb-2">Seu nome *</label>
                  <input type="text" id="submitterName" value={formData.submitterName} onChange={(e) => setFormData(prev => ({ ...prev, submitterName: e.target.value }))} className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring" required />
                </div>
                <div>
                  <label htmlFor="submitterEmail" className="block text-sm font-medium mb-2">Seu email *</label>
                  <input type="email" id="submitterEmail" value={formData.submitterEmail} onChange={(e) => setFormData(prev => ({ ...prev, submitterEmail: e.target.value }))} className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring" required />
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full">
                <Upload className="w-4 h-4 mr-2" />Submeter Recurso
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}