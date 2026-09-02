import { motion } from 'framer-motion';
import { Button } from '../components/Button';

export const NewsletterSection = () => {
  return (
    <section id="contact" className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-shopora-primary/5 to-shopora-accent/5 -z-10" />
      <div className="mx-auto max-w-2xl px-6 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-white/15 bg-gradient-to-br from-slate-900/70 to-slate-950/80 p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Get latest updates, business tips, and exclusive promotions delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 mb-6">
            <input type="email" placeholder="Enter your email" className="flex-1 px-6 py-3 rounded-full bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 focus:border-shopora-primary/50 outline-none" />
            <Button variant="primary" size="md">Subscribe</Button>
          </form>
          <p className="text-xs text-slate-500">We'll never share your email. Unsubscribe anytime.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
