import { motion } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';

export const HowItWorksSection = () => {
  const steps = [
    { number: '1', icon: '📝', title: 'Register', description: 'Create your shop profile in minutes.' },
    { number: '2', icon: '📸', title: 'Upload', description: 'Add products with photos and pricing.' },
    { number: '3', icon: '🔍', title: 'Discover', description: 'Customers find you through search.' },
    { number: '4', icon: '📈', title: 'Grow', description: 'Track analytics and optimize sales.' },
  ];

  return (
    <section id="process" className="relative py-20 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mb-16">
          <SectionTitle badge="How It Works" title="Four Simple Steps" description="Get visibility to nearby customers in minutes." centered />
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, idx) => (
            <motion.div key={step.number} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-950/80 p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-shopora-primary to-shopora-accent text-white font-bold mb-4">
                {step.number}
              </div>
              <p className="text-3xl mb-4">{step.icon}</p>
              <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
              <p className="text-sm text-slate-400">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
