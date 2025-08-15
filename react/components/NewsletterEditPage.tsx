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
  variant?: "default" | "outline" | "ghost" | "destructive";
  size?: "default" | "sm" | "lg";
  className?: string;
  asChild?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const baseClasses = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
  
  const variantClasses = {
    default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
    outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90"
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
const Settings = ({ className = "" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const Check = ({ className = "" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
)

const Mail = ({ className = "" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

const User = ({ className = "" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
)

const Trash = ({ className = "" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  </svg>
)

const Bell = ({ className = "" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
  </svg>
)

export function NewsletterEditPage() {
  const [activeTab, setActiveTab] = useState('preferences');
  const [showUnsubscribeConfirm, setShowUnsubscribeConfirm] = useState(false);
  const [formData, setFormData] = useState({
    email: 'usuario@email.com',
    name: 'João Silva',
    role: 'developer',
    interests: ['WCAG Guidelines', 'Design Inclusivo', 'Desenvolvimento Acessível'],
    frequency: 'weekly',
    notifications: {
      newsletter: true,
      events: true,
      resources: false,
      community: true
    }
  });
  const [isUpdating, setIsUpdating] = useState(false);

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

  const handleNotificationChange = (key: string) => {
    setFormData(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [key]: !prev.notifications[key as keyof typeof prev.notifications]
      }
    }));
  };

  const handleSave = async () => {
    setIsUpdating(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsUpdating(false);
    alert('Preferências atualizadas com sucesso!');
  };

  const handleUnsubscribe = () => {
    alert('Você foi descadastrado da newsletter. Sentiremos sua falta!');
    // In real app, this would redirect to confirmation page or homepage
  };

  const recentEmails = [
    {
      subject: "Weekly Accessibility Digest #47",
      date: "2024-06-10",
      status: "delivered",
      opens: 1
    },
    {
      subject: "Novo Workshop: ARIA na Prática",
      date: "2024-06-05",
      status: "delivered",
      opens: 2
    },
    {
      subject: "GAAD 2024: Resumo dos Melhores Momentos",
      date: "2024-05-20",
      status: "delivered",
      opens: 1
    },
    {
      subject: "Weekly Accessibility Digest #46",
      date: "2024-05-15",
      status: "delivered",
      opens: 0
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Settings className="w-8 h-8 text-primary" />
            <h1 className="text-3xl font-bold">Gerenciar Newsletter</h1>
          </div>
          <p className="text-muted-foreground">
            Personalize suas preferências de email e gerencie sua inscrição
          </p>
        </div>

        {/* Tabs */}
        <div className="border-b border-border mb-8">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('preferences')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'preferences'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              Preferências
            </button>
            <button
              onClick={() => setActiveTab('history')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'history'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              Histórico
            </button>
            <button
              onClick={() => setActiveTab('account')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'account'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              Conta
            </button>
          </div>
        </div>

        {/* Preferences Tab */}
        {activeTab === 'preferences' && (
          <div className="space-y-8">
            {/* Current Status */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Status da Inscrição</h2>
                  <Badge variant="default" className="bg-green-100 text-green-800 border-green-200">
                    <Check className="w-3 h-3 mr-1" />
                    Ativo
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">{formData.email}</div>
                    <div className="text-sm text-muted-foreground">
                      Inscrito desde março de 2024 • Frequência: {formData.frequency === 'weekly' ? 'Semanal' : formData.frequency === 'biweekly' ? 'Quinzenal' : 'Mensal'}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Personal Info */}
            <Card>
              <CardHeader>
                <h2 className="text-xl font-semibold">Informações Pessoais</h2>
              </CardHeader>
              <CardContent className="space-y-4">
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
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="role" className="block text-sm font-medium mb-2">
                      Função
                    </label>
                    <select
                      id="role"
                      value={formData.role}
                      onChange={(e) => setFormData(prev => ({ ...prev, role: e.target.value }))}
                      className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    >
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
                </div>
              </CardContent>
            </Card>

            {/* Interests */}
            <Card>
              <CardHeader>
                <h2 className="text-xl font-semibold">Interesses</h2>
                <p className="text-sm text-muted-foreground">
                  Selecione os tópicos que mais interessam você
                </p>
              </CardHeader>
              <CardContent>
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
              </CardContent>
            </Card>

            {/* Frequency */}
            <Card>
              <CardHeader>
                <h2 className="text-xl font-semibold">Frequência de Emails</h2>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { value: 'weekly', label: 'Semanal', description: 'Um resumo com os melhores conteúdos da semana' },
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
              </CardContent>
            </Card>

            {/* Notifications */}
            <Card>
              <CardHeader>
                <h2 className="text-xl font-semibold">Tipos de Notificação</h2>
                <p className="text-sm text-muted-foreground">
                  Escolha que tipos de email deseja receber
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { key: 'newsletter', label: 'Newsletter Semanal', description: 'Resumo dos melhores conteúdos' },
                  { key: 'events', label: 'Eventos & Workshops', description: 'Notificações sobre novos eventos' },
                  { key: 'resources', label: 'Novos Recursos', description: 'Quando adicionamos ferramentas ou recursos' },
                  { key: 'community', label: 'Atividades da Comunidade', description: 'Destaques de membros e projetos' }
                ].map((notification) => (
                  <div key={notification.key} className="flex items-center justify-between p-3 border border-border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Bell className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <div className="font-medium text-sm">{notification.label}</div>
                        <div className="text-xs text-muted-foreground">{notification.description}</div>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.notifications[notification.key as keyof typeof formData.notifications]}
                        onChange={() => handleNotificationChange(notification.key)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Save Button */}
            <div className="flex justify-end">
              <Button onClick={handleSave} disabled={isUpdating}>
                {isUpdating ? 'Salvando...' : 'Salvar Alterações'}
              </Button>
            </div>
          </div>
        )}

        {/* History Tab */}
        {activeTab === 'history' && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <h2 className="text-xl font-semibold">Histórico de Emails</h2>
                <p className="text-sm text-muted-foreground">
                  Veja os emails que você recebeu recentemente
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentEmails.map((email, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <Mail className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium text-sm">{email.subject}</div>
                          <div className="text-xs text-muted-foreground">
                            {new Date(email.date).toLocaleDateString('pt-BR')}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant={email.status === 'delivered' ? 'default' : 'secondary'}>
                          {email.status === 'delivered' ? 'Entregue' : 'Pendente'}
                        </Badge>
                        <div className="text-xs text-muted-foreground mt-1">
                          {email.opens} {email.opens === 1 ? 'abertura' : 'aberturas'}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Account Tab */}
        {activeTab === 'account' && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <h2 className="text-xl font-semibold">Configurações da Conta</h2>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <User className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">{formData.name}</div>
                    <div className="text-sm text-muted-foreground">{formData.email}</div>
                    <div className="text-xs text-muted-foreground">
                      Membro desde março de 2024
                    </div>
                  </div>
                </div>

                <div className="border-t border-border pt-6">
                  <h3 className="text-lg font-medium mb-4">Alterar Email</h3>
                  <div className="flex flex-col md:flex-row gap-4">
                    <input
                      type="email"
                      placeholder="Novo email"
                      className="flex-1 px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                    <Button variant="outline">Alterar Email</Button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Você receberá um email de confirmação no novo endereço
                  </p>
                </div>

                <div className="border-t border-border pt-6">
                  <h3 className="text-lg font-medium mb-4">Exportar Dados</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Baixe uma cópia de todos os seus dados de preferências e histórico
                  </p>
                  <Button variant="outline">
                    Exportar Dados
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Danger Zone */}
            <Card className="border-destructive/50">
              <CardHeader>
                <h2 className="text-xl font-semibold text-destructive">Zona de Perigo</h2>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Cancelar Inscrição</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Isso irá remover você de todos os emails da nossa newsletter. 
                    Você pode se inscrever novamente a qualquer momento.
                  </p>
                  {!showUnsubscribeConfirm ? (
                    <Button 
                      variant="destructive" 
                      onClick={() => setShowUnsubscribeConfirm(true)}
                    >
                      <Trash className="w-4 h-4 mr-2" />
                      Cancelar Inscrição
                    </Button>
                  ) : (
                    <div className="space-y-3">
                      <p className="text-sm font-medium text-destructive">
                        Tem certeza? Esta ação não pode ser desfeita.
                      </p>
                      <div className="flex space-x-3">
                        <Button 
                          variant="destructive" 
                          size="sm"
                          onClick={handleUnsubscribe}
                        >
                          Sim, cancelar inscrição
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => setShowUnsubscribeConfirm(false)}
                        >
                          Não, manter inscrição
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-border">
          <h3 className="font-medium mb-4">Links Úteis</h3>
          <div className="flex flex-wrap gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/newsletter/signup">Inscrever Outra Pessoa</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/articles">Ver Artigos</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/contact">Suporte</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/privacy">Política de Privacidade</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}