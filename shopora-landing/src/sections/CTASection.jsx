import { motion } from 'framer-motion';
import { Button } from '../components/Button';

export const CTASection = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-shopora-primary/5 via-shopora-secondary/5 to-shopora-accent/5 -z-10" />
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-3xl border border-white/15 bg-gradient-to-br from-slate-900/80 to-slate-950/90 p-12 md:p-16 text-center">
          <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 3, repeat: Infinity }} className="text-6xl md:text-7xl mb-6">
            🚀
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of thriving shops. Get 2 months free premium features. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="#pricing" variant="primary" size="lg">Start Free Trial</Button>
            <Button href="#contact" variant="secondary" size="lg">Schedule Demo</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
