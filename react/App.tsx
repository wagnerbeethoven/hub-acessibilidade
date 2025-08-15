import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Homepage } from './components/Homepage';
import { ArticlesSection } from './components/ArticlesSection';
import { ResourcesSection } from './components/ResourcesSection';
import { PeopleSection } from './components/PeopleSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { DesignSystemSection } from './components/DesignSystemSection';
import { EventsSection } from './components/EventsSection';
import { EventDetailSection } from './components/EventDetailSection';
import { NewsletterSignupPage } from './components/NewsletterSignupPage';
import { NewsletterEditPage } from './components/NewsletterEditPage';
import { NominatePage } from './components/NominatePage';
import { SubmitResourcePage } from './components/SubmitResourcePage';
import { SubmitProjectPage } from './components/SubmitProjectPage';

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-background text-foreground">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/articles" element={<ArticlesSection />} />
              <Route path="/resources" element={<ResourcesSection />} />
              <Route path="/people" element={<PeopleSection />} />
              <Route path="/projects" element={<ProjectsSection />} />
              <Route path="/contact" element={<ContactSection />} />
              <Route path="/design-system" element={<DesignSystemSection />} />
              
              {/* Events */}
              <Route path="/events" element={<EventsSection />} />
              <Route path="/events/:id" element={<EventDetailSection />} />
              
              {/* Newsletter */}
              <Route path="/newsletter/signup" element={<NewsletterSignupPage />} />
              <Route path="/newsletter/manage" element={<NewsletterEditPage />} />
              
              {/* Submissions */}
              <Route path="/nominate" element={<NominatePage />} />
              <Route path="/submit/resource" element={<SubmitResourcePage />} />
              <Route path="/submit/project" element={<SubmitProjectPage />} />
              
              {/* Redirects for old routes */}
              <Route path="/podcast" element={<Navigate to="/articles" replace />} />
              <Route path="/professionals" element={<Navigate to="/people" replace />} />
              <Route path="/people-projects" element={<Navigate to="/people" replace />} />
              
              {/* Handle legacy HTML file requests */}
              <Route path="/preview_page.html" element={<Navigate to="/" replace />} />
              <Route path="*.html" element={<Navigate to="/" replace />} />
              
              {/* Catch-all route for any unmatched URLs */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}