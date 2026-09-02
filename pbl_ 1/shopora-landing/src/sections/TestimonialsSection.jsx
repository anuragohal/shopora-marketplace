import { motion } from 'framer-motion';
import { TestimonialCard } from '../components/TestimonialCard';
import { SectionTitle } from '../components/SectionTitle';
import { StatCard } from '../components/StatCard';

export const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: 'Shopora transformed how customers find us. We went from zero visibility to selling out of specialty items within weeks. It\'s like having a professional storefront on every phone in the neighborhood.',
      author: 'Priya Sharma',
      role: 'Artisan Bakery Owner',
    },
    {
      quote: 'The analytics dashboard helped us understand what products customers actually want. We increased our inventory based on real data, not guesses. Game-changer for a small shop like ours.',
      author: 'Vikram Desai',
      role: 'Electronics Store',
    },
    {
      quote: 'Best investment we made for our boutique. Foot traffic increased 40%, and customers now recognize us online before visiting. The customer reviews feature builds so much trust.',
      author: 'Meera Kapoor',
      role: 'Fashion Boutique',
    },
  ];

  const metrics = [
    { value: '58%', label: 'Avg. foot traffic increase', icon: '📈' },
    { value: '4.8/5', label: 'Customer satisfaction rating', icon: '⭐' },
    { value: '3x', label: 'Faster local discovery', icon: '⚡' },
    { value: '42%', label: 'Sales improvement', icon: '💰' },
  ];

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background accents */}
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-shopora-secondary/5 rounded-full blur-3xl -z-10" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mb-16">
          <SectionTitle
            badge="Social Proof"
            title="Loved by Local Businesses"
            description="Real success stories from shop owners who trusted Shopora with their growth."
            centered
          />
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 lg:grid-cols-3 mb-16">
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard key={testimonial.author} {...testimonial} delay={idx * 0.1} />
          ))}
        </div>

        {/* Metrics */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {metrics.map((metric, idx) => (
            <StatCard key={metric.label} {...metric} delay={idx * 0.08} />
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-shopora-accent/30 bg-gradient-to-r from-shopora-accent/10 to-shopora-primary/10 p-12"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Why Businesses Trust Shopora</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: '✅', title: 'Verified Shops', desc: 'All businesses verified and authenticated.' },
              { icon: '🔒', title: 'Secure Platform', desc: 'Enterprise-grade security and data privacy.' },
              { icon: '⭐', title: 'Authentic Reviews', desc: 'Real customer feedback with quality control.' },
              { icon: '📞', title: 'Expert Support', desc: '24/7 customer success team available.' },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h4 className="font-bold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-slate-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
