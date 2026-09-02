import { motion } from 'framer-motion';
import { FeatureCard } from '../components/FeatureCard';
import { SectionTitle } from '../components/SectionTitle';

export const FeaturesSection = () => {
  const features = [
    {
      icon: '📍',
      title: 'Nearby Product Discovery',
      description: 'Find exactly what you need from shops closest to you. Smart location-based search saves time and supports your local community.',
    },
    {
      icon: '🏪',
      title: 'Store Profiles & Listings',
      description: 'Beautiful shop profiles with verified information, ratings, promotions, and everything customers need to find and trust local businesses.',
    },
    {
      icon: '✨',
      title: 'Product Promotions',
      description: 'Highlight new arrivals, seasonal offers, and special deals instantly. Get visibility without expensive traditional advertising.',
    },
    {
      icon: '📊',
      title: 'Business Analytics',
      description: 'Track customer interest, popular products, traffic patterns, and sales performance with actionable insights and real-time metrics.',
    },
    {
      icon: '💬',
      title: 'Customer Engagement',
      description: 'Collect reviews, respond to feedback, build loyalty programs, and create meaningful connections with your local customers.',
    },
    {
      icon: '🎯',
      title: 'Smart Recommendations',
      description: 'AI-powered suggestions match customers with products they love based on location, preferences, and local trends.',
    },
    {
      icon: '🎁',
      title: 'Featured Campaigns',
      description: 'Premium visibility placements and promotional campaigns to boost reach and drive foot traffic to your shop.',
    },
    {
      icon: '🔔',
      title: 'Push Notifications',
      description: 'Keep customers updated with new inventory, flash sales, and special offers right on their devices.',
    },
  ];

  return (
    <section id="features" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-shopora-accent/5 rounded-full blur-3xl -z-10" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mb-16">
          <SectionTitle
            badge="Core Features"
            title="Everything You Need to Succeed"
            description="Powerful tools built for local businesses and community-driven commerce."
            centered
          />
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {features.map((feature, idx) => (
            <FeatureCard key={feature.title} {...feature} delay={idx * 0.05} />
          ))}
        </div>

        {/* Featured Benefit */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-3xl border border-shopora-primary/30 bg-gradient-to-r from-shopora-primary/10 to-shopora-secondary/10 p-12 shadow-xl shadow-shopora-primary/20"
        >
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Complete Business Growth Suite
              </h3>
              <p className="text-lg text-slate-300 mb-6">
                From discovery to conversion, Shopora provides everything local businesses need to thrive in the digital marketplace.
              </p>
              <ul className="space-y-3">
                {['Easy product upload', 'Real-time analytics', 'Customer messaging', 'Promotion management'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-300">
                    <span className="h-2 w-2 rounded-full bg-shopora-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-shopora-accent/20 to-transparent p-8 border border-shopora-accent/20">
              <div className="space-y-4">
                <div className="rounded-xl bg-slate-950/80 p-4">
                  <div className="h-3 w-1/3 rounded bg-shopora-primary/50 mb-2" />
                  <div className="h-2 w-full rounded bg-white/10 mb-2" />
                  <div className="h-2 w-4/5 rounded bg-white/10" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-lg bg-slate-950/80 p-3 h-16" />
                  <div className="rounded-lg bg-slate-950/80 p-3 h-16" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
