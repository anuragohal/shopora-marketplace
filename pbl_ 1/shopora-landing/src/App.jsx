import { useState, useEffect } from 'react';
import {
  HeroSection,
  AboutSection,
  FeaturesSection,
  HowItWorksSection,
  WhyChooseShoporaSection,
  PricingSection,
  TestimonialsSection,
  FAQSection,
  NewsletterSection,
  CTASection,
} from './sections';
import { Header, Footer } from './components';

function App() {
  const [isDark, setIsDark] = useState(true);

  // Initialize theme
  useEffect(() => {
    const storedTheme = localStorage.getItem('shopora-theme');
    if (storedTheme) {
      setIsDark(storedTheme === 'dark');
    }
  }, []);

  // Update theme
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('shopora-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 overflow-hidden">
      {/* Main gradient background */}
      <div className="fixed inset-0 -z-50">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(108,99,255,0.1),rgba(255,255,255,0))]" />
        <div className="absolute top-40 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-shopora-primary/10 rounded-full blur-3xl opacity-20 -z-10" />
      </div>

      {/* Header */}
      <Header isDark={isDark} setIsDark={setIsDark} />

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <HeroSection />

        {/* About Section */}
        <AboutSection />

        {/* Features Section */}
        <FeaturesSection />

        {/* How It Works */}
        <HowItWorksSection />

        {/* Why Choose Shopora */}
        <WhyChooseShoporaSection />

        {/* Pricing Section */}
        <PricingSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* FAQ Section */}
        <FAQSection />

        {/* Newsletter Section */}
        <NewsletterSection />

        {/* CTA Section */}
        <CTASection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
