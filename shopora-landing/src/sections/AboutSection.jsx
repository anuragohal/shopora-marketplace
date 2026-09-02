import { motion } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';

export const AboutSection = () => {
  const values = [
    { icon: '🎯', title: 'Our Mission', description: 'Empower local businesses with digital tools while making nearby discovery faster and smarter.' },
    { icon: '🌟', title: 'Our Vision', description: 'Create a thriving local commerce ecosystem where customers discover products they love.' },
    { icon: '💡', title: 'Why We Exist', description: 'Local shops struggle online. Shopora gives them premium digital presence and growth tools.' },
  ];

  return (
    <section id="about" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-shopora-secondary/5 rounded-full blur-3xl -z-10" />
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mb-16">
          <SectionTitle badge="Who We Are" title="Meet Shopora" description="A modern platform designed to empower local businesses and communities." centered />
        </div>
        <div className="grid gap-8 md:grid-cols-3 mb-16">
          {values.map((value, idx) => (
            <motion.div key={value.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} whileHover={{ y: -4 }} className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/8 to-white/3 p-8 shadow-xl shadow-black/20 hover:border-shopora-primary/30 transition">
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
              <p className="text-slate-400 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
