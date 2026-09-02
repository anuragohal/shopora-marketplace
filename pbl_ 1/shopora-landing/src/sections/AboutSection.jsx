import { motion } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';

export const AboutSection = () => {
  const values = [
    {
      icon: '🎯',
      title: 'Our Mission',
      description: 'Empower local businesses with modern digital tools while making nearby product discovery faster and smarter for customers.',
    },
    {
      icon: '🌟',
      title: 'Our Vision',
      description: 'Create a thriving local commerce ecosystem where customers discover products they love from shops they trust.',
    },
    {
      icon: '💡',
      title: 'Why We Exist',
      description: 'Local shops struggle online. Shopora gives them premium digital presence, product showcase, and growth tools without complexity.',
    },
  ];

  const highlights = [
    { label: 'Customer-First', desc: 'Fast search, location-aware discovery, and clear product previews.' },
    { label: 'Business-First', desc: 'Tools for visibility, promotions, analytics, and affordable marketing.' },
    { label: 'Community-Focused', desc: 'Supporting local economy and building trust between neighbors.' },
  ];

  return (
    <section id="about" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-shopora-secondary/5 rounded-full blur-3xl -z-10" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mb-16">
          <SectionTitle
            badge="Who We Are"
            title="Meet Shopora"
            description="A modern platform designed to empower local businesses and connect communities through smarter product discovery."
            centered
          />
        </div>

        {/* Values Grid */}
        <div className="grid gap-8 md:grid-cols-3 mb-16">
          {values.map((value, idx) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/8 to-white/3 p-8 shadow-xl shadow-black/20 hover:border-shopora-primary/30 transition"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
              <p className="text-slate-400 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Highlights */}
        <div className="grid gap-8 md:grid-cols-3">
          {highlights.map((highlight, idx) => (
            <motion.div
              key={highlight.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`rounded-2xl p-8 border ${idx === 0 ? 'bg-gradient-to-br from-shopora-primary/10 to-shopora-secondary/5 border-shopora-primary/30' : idx === 1 ? 'bg-gradient-to-br from-shopora-accent/10 to-shopora-primary/5 border-shopora-accent/30' : 'bg-white/5 border-white/10'}`}
            >
              <h3 className="text-lg font-bold text-white mb-2">{highlight.label}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{highlight.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
