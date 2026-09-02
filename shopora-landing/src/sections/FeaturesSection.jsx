import { motion } from 'framer-motion';
import { FeatureCard } from '../components/FeatureCard';
import { SectionTitle } from '../components/SectionTitle';

export const FeaturesSection = () => {
  const features = [
    { icon: '📍', title: 'Nearby Product Discovery', description: 'Find exactly what you need from shops closest to you. Smart search saves time.' },
    { icon: '🏪', title: 'Store Profiles', description: 'Beautiful shop profiles with verified info, ratings, and everything customers need.' },
    { icon: '✨', title: 'Product Promotions', description: 'Highlight deals and offers instantly. Get visibility without expensive ads.' },
    { icon: '📊', title: 'Business Analytics', description: 'Track visitor stats, popular products, and sales performance with dashboards.' },
    { icon: '💬', title: 'Customer Engagement', description: 'Collect reviews, respond to feedback, and build loyalty programs.' },
    { icon: '🎯', title: 'Smart Recommendations', description: 'AI-powered suggestions match customers based on location and preferences.' },
    { icon: '🎁', title: 'Featured Campaigns', description: 'Premium visibility placements and promotions to boost reach.' },
    { icon: '🔔', title: 'Push Notifications', description: 'Keep customers updated with inventory, sales, and special offers.' },
  ];

  return (
    <section id="features" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute top-40 right-0 w-96 h-96 bg-shopora-accent/5 rounded-full blur-3xl -z-10" />
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mb-16">
          <SectionTitle badge="Core Features" title="Everything You Need to Succeed" description="Powerful tools built for local commerce." centered />
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, idx) => (
            <FeatureCard key={feature.title} {...feature} delay={idx * 0.05} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
