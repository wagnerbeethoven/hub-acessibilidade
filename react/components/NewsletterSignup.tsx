import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Alert, AlertDescription } from './ui/alert';
import { Mail, CheckCircle } from 'lucide-react';

export function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate newsletter signup
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setEmail('');
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <Card className="max-w-2xl mx-auto text-center">
        <CardContent className="pt-6">
          <div className="flex flex-col items-center space-y-4">
            <CheckCircle className="h-12 w-12 text-green-500" />
            <div>
              <h3 className="text-xl mb-2">Successfully Subscribed!</h3>
              <p className="text-muted-foreground">
                Thank you for joining our community. You'll receive our latest accessibility insights and updates.
              </p>
            </div>
            <Button 
              variant="outline" 
              onClick={() => setIsSubmitted(false)}
              className="mt-4"
            >
              Subscribe Another Email
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
            <Mail className="h-8 w-8 text-primary" />
          </div>
        </div>
        <CardTitle className="text-2xl">Stay Updated</CardTitle>
        <CardDescription className="text-lg">
          Join our newsletter to receive the latest accessibility insights, podcast episodes, and community updates.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
              aria-label="Email address for newsletter subscription"
            />
            <Button 
              type="submit" 
              disabled={!email || isLoading}
              className="sm:w-auto w-full"
            >
              {isLoading ? 'Subscribing...' : 'Subscribe'}
            </Button>
          </div>
          <Alert>
            <AlertDescription className="text-sm text-muted-foreground">
              We respect your privacy. Unsubscribe at any time. No spam, just valuable accessibility content.
            </AlertDescription>
          </Alert>
        </form>
      </CardContent>
    </Card>
  );
}