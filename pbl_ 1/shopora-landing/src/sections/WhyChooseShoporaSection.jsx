import { motion } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';

export const WhyChooseShoporaSection = () => {
  const benefits = [
    {
      icon: '🏘️',
      title: 'Support Local Economy',
      description: 'Keep customers engaged with nearby businesses, strengthening community ties and local commerce.',
    },
    {
      icon: '👁️',
      title: 'Better Visibility',
      description: 'Get featured in search results, recommended feeds, and promotional placements right where customers look.',
    },
    {
      icon: '💰',
      title: 'Affordable Marketing',
      description: 'Skip expensive traditional ads. Shopora offers growth tools built for small shop budgets and ROI.',
    },
    {
      icon: '⚡',
      title: 'Easy Discovery',
      description: 'Customers find you fast with location filters, category search, and trending local recommendations.',
    },
    {
      icon: '📊',
      title: 'Growth Analytics',
      description: 'Track visitor stats, popular products, customer preferences, and sales patterns with detailed dashboards.',
    },
    {
      icon: '🤝',
      title: 'Community Trust',
      description: 'Verified shops, authentic reviews, and customer ratings build confidence in your business.',
    },
  ];

  const comparison = [
    { label: 'Traditional Marketplace', shopora: false, traditional: true },
    { label: 'Local-First Design', shopora: true, traditional: false },
    { label: 'Premium UI/UX', shopora: true, traditional: false },
    { label: 'Affordable Plans', shopora: true, traditional: false },
    { label: 'Location-Based Discovery', shopora: true, traditional: false },
    { label: 'Real-Time Analytics', shopora: true, traditional: true },
    { label: 'Customer Support', shopora: true, traditional: true },
  ];

  return (
    <section id="why" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-shopora-secondary/5 rounded-full blur-3xl -z-10" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mb-16">
          <SectionTitle
            badge="Why Choose Shopora"
            title="The Best Platform for Local Business Growth"
            description="Built specifically for local shops and communities, with features that traditional marketplaces don't offer."
            centered
          />
        </div>

        {/* Benefits Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/8 to-white/3 p-8 shadow-xl shadow-black/20 hover:border-shopora-accent/30 transition"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-lg font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">How Shopora Compares</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 text-slate-400 font-semibold">Feature</th>
                  <th className="text-center py-4 px-4">
                    <span className="inline-flex items-center justify-center h-8 px-3 rounded-lg bg-shopora-primary/20 text-shopora-primary font-bold">
                      Shopora
                    </span>
                  </th>
                  <th className="text-center py-4 px-4">
                    <span className="inline-flex items-center justify-center h-8 px-3 rounded-lg bg-slate-600/20 text-slate-300 font-bold">
                      Others
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((item, idx) => (
                  <tr key={item.label} className={idx % 2 === 0 ? 'bg-white/3' : ''}>
                    <td className="py-4 px-4 text-slate-300">{item.label}</td>
                    <td className="text-center py-4 px-4">
                      {item.shopora ? (
                        <span className="text-2xl">✅</span>
                      ) : (
                        <span className="text-slate-600">—</span>
                      )}
                    </td>
                    <td className="text-center py-4 px-4">
                      {item.traditional ? (
                        <span className="text-2xl">✅</span>
                      ) : (
                        <span className="text-slate-600">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseShoporaSection;
