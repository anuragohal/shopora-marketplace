import { motion } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';

export const HowItWorksSection = () => {
  const steps = [
    {
      number: '1',
      icon: '📝',
      title: 'Register Your Business',
      description: 'Create a shop profile on Shopora in minutes with essential business information and contact details.',
    },
    {
      number: '2',
      icon: '📸',
      title: 'Upload Products',
      description: 'Add your products, services, and promotions with photos, descriptions, and pricing details.',
    },
    {
      number: '3',
      icon: '🔍',
      title: 'Get Discovered',
      description: 'Customers find you through location-based search, featured listings, and smart recommendations.',
    },
    {
      number: '4',
      icon: '📈',
      title: 'Track & Grow',
      description: 'Monitor analytics, customer engagement, and sales while optimizing your visibility and offerings.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="process" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background accents */}
      <div className="absolute -bottom-40 left-10 w-96 h-96 bg-shopora-primary/5 rounded-full blur-3xl -z-10" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mb-16">
          <SectionTitle
            badge="How It Works"
            title="Four Simple Steps to Success"
            description="Get your business visible to nearby customers in minutes, not months."
            centered
          />
        </div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              variants={itemVariants}
              className="relative group"
            >
              {/* Connector line for desktop */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-24 left-1/2 w-full h-1 bg-gradient-to-r from-shopora-primary to-transparent -ml-1/2" />
              )}

              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-950/80 p-8 h-full hover:border-shopora-primary/30 transition-all hover:shadow-lg hover:shadow-shopora-primary/20">
                {/* Step Number */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-shopora-primary to-shopora-accent text-xl font-bold text-white shadow-lg shadow-shopora-primary/40">
                    {step.number}
                  </div>
                  <span className="text-3xl opacity-60 group-hover:opacity-100 transition">{step.icon}</span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>

                {/* Status indicator */}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="text-xs uppercase tracking-widest text-shopora-accent font-semibold">
                    Avg time: {idx === 0 ? '5 min' : idx === 1 ? '15 min' : idx === 2 ? '1 day' : 'Ongoing'}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-2xl border border-shopora-accent/30 bg-gradient-to-r from-shopora-accent/10 to-shopora-primary/10 p-8"
        >
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">🎯 Pro Tips for Success</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• Use high-quality product photos</li>
                <li>• Update promotions regularly</li>
                <li>• Respond to customer reviews</li>
                <li>• Monitor your analytics weekly</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">⭐ Expected Results</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• 3x faster customer discovery</li>
                <li>• 40%+ increase in foot traffic</li>
                <li>• 5-star customer reviews boost</li>
                <li>• Real-time growth tracking</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
