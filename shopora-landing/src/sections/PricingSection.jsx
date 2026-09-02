import { motion } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';
import { Button } from '../components/Button';

export const PricingSection = () => {
  const plans = [
    {
      name: 'Free Starter',
      price: '$0',
      period: 'Forever',
      icon: '🚀',
      features: ['Basic shop profile', 'Up to 50 products', 'Local discovery', 'Standard support'],
      variant: 'secondary',
    },
    {
      name: 'Growth Pro',
      price: '$29',
      period: '/month',
      icon: '📈',
      features: ['Unlimited products', 'Featured placements', 'Ad campaigns', 'Advanced analytics', 'Priority support'],
      variant: 'primary',
      featured: true,
    },
    {
      name: 'Premium Elite',
      price: '$79',
      period: '/month',
      icon: '👑',
      features: ['Premium analytics', 'Banner ads', 'Top shop badge', 'Priority visibility', '24/7 support'],
      variant: 'secondary',
    },
  ];

  return (
    <section id="pricing" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute -top-40 right-10 w-96 h-96 bg-shopora-primary/5 rounded-full blur-3xl -z-10" />
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mb-16">
          <SectionTitle badge="Pricing" title="Plans for Every Business" description="Start free and upgrade anytime." centered />
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className={`rounded-2xl border p-8 transition-all ${
                plan.featured ? 'border-shopora-primary/40 bg-gradient-to-br from-shopora-primary/15 to-slate-950/80 lg:scale-105' : 'border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-950/80'
              }`}
            >
              <div className="mb-4 text-3xl">{plan.icon}</div>
              <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
              <div className="my-6">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-slate-400 ml-2">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-slate-300">
                    <span className="mt-1 h-2 w-2 rounded-full bg-shopora-accent" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button variant={plan.variant} size="lg" href="#" className="w-full">
                Choose {plan.name}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
