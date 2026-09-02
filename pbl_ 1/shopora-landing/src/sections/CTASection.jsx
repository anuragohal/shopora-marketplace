import { motion } from 'framer-motion';
import { Button } from '../components/Button';

export const CTASection = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-shopora-primary/5 via-shopora-secondary/5 to-shopora-accent/5 -z-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-gradient-to-b from-shopora-primary/10 to-transparent -z-10" />

      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/15 bg-gradient-to-br from-slate-900/80 to-slate-950/90 p-12 md:p-16 text-center shadow-2xl shadow-shopora-primary/20 backdrop-blur-sm"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-6xl md:text-7xl mb-6"
          >
            🚀
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Ready to Transform Your Local Business?
          </h2>

          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of thriving local shops on Shopora. Get 2 months free access to all premium features. No credit card required.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button href="#pricing" variant="primary" size="lg">
              Start Your Free Trial
            </Button>
            <Button href="#contact" variant="secondary" size="lg">
              Schedule a Demo
            </Button>
          </div>

          <p className="text-sm text-slate-400">
            💡 Pro Tip: Shops that upload products in the first week see 3x faster discovery.
          </p>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-400 mb-6">Trusted by local businesses across India</p>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {['100% Free', '2-Month Trial', 'No Credit Card', 'Cancel Anytime'].map((item, idx) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + idx * 0.05 }}
                className="text-sm font-semibold text-slate-300"
              >
                <span className="mr-2">✓</span>{item}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
