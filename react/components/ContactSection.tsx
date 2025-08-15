import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Alert, AlertDescription } from './ui/alert';
import { Mail, MessageSquare, Send, CheckCircle, Twitter, Linkedin, Github, Globe } from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'podcast', label: 'Podcast Guest/Topic' },
    { value: 'collaboration', label: 'Collaboration' },
    { value: 'speaking', label: 'Speaking Opportunity' },
    { value: 'feedback', label: 'Feedback' },
    { value: 'other', label: 'Other' }
  ];

  const socialLinks = [
    {
      name: 'Twitter',
      url: 'https://twitter.com/accessibilityhub',
      icon: Twitter,
      description: 'Follow us for daily accessibility tips and updates'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/company/accessibility-hub',
      icon: Linkedin,
      description: 'Connect with our professional network'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/accessibility-hub',
      icon: Github,
      description: 'Contribute to our open-source projects'
    },
    {
      name: 'Website',
      url: 'mailto:hello@accessibilityhub.org',
      icon: Mail,
      description: 'Direct email for important inquiries'
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        type: ''
      });
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen py-12 px-4 flex items-center justify-center">
        <Card className="max-w-2xl mx-auto text-center">
          <CardContent className="pt-12 pb-12">
            <div className="flex flex-col items-center space-y-6">
              <div className="w-20 h-20 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
                <CheckCircle className="h-10 w-10 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h1 className="text-3xl mb-4">Message Sent Successfully!</h1>
                <p className="text-muted-foreground text-lg mb-6">
                  Thank you for reaching out. We'll get back to you within 24-48 hours.
                </p>
                <p className="text-sm text-muted-foreground mb-8">
                  In the meantime, feel free to explore our latest podcast episodes and articles.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={() => setIsSubmitted(false)}>
                  Send Another Message
                </Button>
                <Button variant="outline" onClick={() => window.location.href = '/'}>
                  Back to Home
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
              <MessageSquare className="h-10 w-10 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl mb-4">Get in Touch</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions, feedback, or want to collaborate? We'd love to hear from you. 
            Reach out and let's build a more accessible web together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Send className="h-5 w-5 text-primary" />
                <span>Send us a Message</span>
              </CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                {/* Contact Type */}
                <div className="space-y-2">
                  <Label htmlFor="type">Type of Inquiry</Label>
                  <Select value={formData.type} onValueChange={(value) => handleInputChange('type', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      {contactTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    required
                    placeholder="Brief description of your message"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    required
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                    className="resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  disabled={isSubmitting || !formData.name || !formData.email || !formData.subject || !formData.message}
                  className="w-full"
                  size="lg"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>

                {/* Privacy Notice */}
                <Alert>
                  <AlertDescription className="text-sm">
                    We respect your privacy. Your information will only be used to respond to your inquiry 
                    and will never be shared with third parties.
                  </AlertDescription>
                </Alert>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information & Social Links */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>Direct Contact</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">General Inquiries</div>
                  <a 
                    href="mailto:hello@accessibilityhub.org" 
                    className="text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring rounded-sm"
                  >
                    hello@accessibilityhub.org
                  </a>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Podcast Inquiries</div>
                  <a 
                    href="mailto:podcast@accessibilityhub.org" 
                    className="text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring rounded-sm"
                  >
                    podcast@accessibilityhub.org
                  </a>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Collaboration</div>
                  <a 
                    href="mailto:partnerships@accessibilityhub.org" 
                    className="text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring rounded-sm"
                  >
                    partnerships@accessibilityhub.org
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card>
              <CardHeader>
                <CardTitle>Connect With Us</CardTitle>
                <CardDescription>
                  Follow our social channels for the latest updates and accessibility insights.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-accent transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                      >
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm">{social.name}</div>
                          <div className="text-xs text-muted-foreground">
                            {social.description}
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card>
              <CardHeader>
                <CardTitle>Response Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">General Inquiries</span>
                    <span>24-48 hours</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Podcast Requests</span>
                    <span>3-5 business days</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Collaboration</span>
                    <span>1 week</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}