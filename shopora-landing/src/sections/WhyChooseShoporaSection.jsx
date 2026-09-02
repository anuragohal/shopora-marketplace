import { motion } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';

export const WhyChooseShoporaSection = () => {
  const benefits = [
    { icon: '🏘️', title: 'Support Local', description: 'Keep business with nearby shops and communities.' },
    { icon: '👁️', title: 'Better Visibility', description: 'Get featured in search results and feeds.' },
    { icon: '💰', title: 'Affordable', description: 'No expensive ads, just smart growth tools.' },
    { icon: '⚡', title: 'Easy Discovery', description: 'Customers find you fast with location filters.' },
    { icon: '📊', title: 'Analytics', description: 'Track stats and optimize your business.' },
    { icon: '🤝', title: 'Community', description: 'Verified shops and authentic reviews.' },
  ];

  return (
    <section id="why" className="relative py-20 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mb-16">
          <SectionTitle badge="Why Choose Shopora" title="The Best for Local Business" description="Built specifically for local shops and communities." centered />
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, idx) => (
            <motion.div key={b.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.08 }} whileHover={{ y: -4 }} className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/8 to-white/3 p-8 hover:border-shopora-accent/30">
              <div className="text-4xl mb-4">{b.icon}</div>
              <h3 className="text-lg font-bold text-white mb-3">{b.title}</h3>
              <p className="text-slate-400 text-sm">{b.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseShoporaSection;
