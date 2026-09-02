import { motion } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';
import { Button } from '../components/Button';

export const PricingSection = () => {
  const plans = [
    {
      name: 'Free Starter',
      price: '$0',
      period: 'Forever free',
      description: '2-month free premium trial included',
      icon: '🚀',
      features: [
        'Basic shop profile',
        'Up to 50 products',
        'Local discovery',
        'Standard customer support',
        'Basic analytics',
      ],
      cta: 'Get Started',
      variant: 'secondary',
    },
    {
      name: 'Growth Pro',
      price: '$29',
      period: '/month',
      description: 'Perfect for growing shops',
      icon: '📈',
      features: [
        'Everything in Free',
        'Unlimited products',
        'Featured placements',
        'Ad campaigns',
        'Advanced analytics',
        'Customer messaging',
        'Priority support',
      ],
      cta: 'Start Free Trial',
      variant: 'primary',
      featured: true,
    },
    {
      name: 'Premium Elite',
      price: '$79',
      period: '/month',
      description: 'For premium local brands',
      icon: '👑',
      features: [
        'Everything in Growth',
        'Premium analytics',
        'Banner advertisements',
        'Top shop badge',
        'Priority visibility',
        'Custom promotions',
        '24/7 dedicated support',
      ],
      cta: 'Contact Sales',
      variant: 'secondary',
    },
  ];

  const revenueStreams = [
    {
      title: 'Subscription Plans',
      description: 'Tiered pricing starting from free with premium upgrades.',
      items: ['Free tier', 'Growth plan', 'Premium plan'],
    },
    {
      title: 'Featured Promotions',
      description: 'Boost visibility with premium placements and campaigns.',
      items: ['Featured shop badge', 'Top search placement', 'Promotional banners'],
    },
    {
      title: 'Advertisement Services',
      description: 'In-app advertising for maximum local reach.',
      items: ['Display ads', 'Sponsored listings', 'Category promotions'],
    },
    {
      title: 'Premium Analytics',
      description: 'Advanced insights for business growth and optimization.',
      items: ['Detailed metrics', 'Competitor insights', 'Trend analysis'],
    },
  ];

  return (
    <section id="pricing" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background accents */}
      <div className="absolute -top-40 right-10 w-96 h-96 bg-shopora-primary/5 rounded-full blur-3xl -z-10" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mb-16">
          <SectionTitle
            badge="Pricing & Revenue Model"
            title="Plans Built for Every Local Business"
            description="Flexible pricing that grows with your business. Start free and upgrade anytime."
            centered
          />
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 lg:grid-cols-3 mb-16">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className={`rounded-2xl border p-8 transition-all duration-300 ${
                plan.featured
                  ? 'border-shopora-primary/40 bg-gradient-to-br from-shopora-primary/15 to-slate-950/80 shadow-xl shadow-shopora-primary/30 lg:scale-105'
                  : 'border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-950/80 shadow-xl shadow-black/20'
              }`}
            >
              {plan.featured && (
                <div className="mb-4 inline-block px-4 py-2 rounded-full bg-shopora-primary/30 border border-shopora-primary/50">
                  <span className="text-xs font-bold uppercase tracking-widest text-shopora-primary">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                    <span>{plan.icon}</span>
                    {plan.name}
                  </h3>
                  <p className="text-sm text-slate-400 mt-2">{plan.description}</p>
                </div>
              </div>

              <div className="my-6">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-slate-400 ml-2">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-slate-300">
                    <span className="mt-1 h-2 w-2 rounded-full bg-shopora-accent flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.variant}
                size="lg"
                href="#"
                className="w-full"
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Revenue Model */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-white/10 bg-white/5 p-12 backdrop-blur-sm"
        >
          <h3 className="text-3xl font-bold text-white mb-12 text-center">Multiple Revenue Streams</h3>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {revenueStreams.map((stream, idx) => (
              <motion.div
                key={stream.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="rounded-xl border border-white/10 bg-slate-900/50 p-6 hover:border-shopora-accent/30 transition"
              >
                <h4 className="font-bold text-white mb-2">{stream.title}</h4>
                <p className="text-sm text-slate-400 mb-4">{stream.description}</p>
                <ul className="space-y-2">
                  {stream.items.map((item) => (
                    <li key={item} className="text-xs text-shopora-accent flex items-center gap-2">
                      <span>→</span> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
