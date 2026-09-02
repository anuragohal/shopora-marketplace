import { motion } from 'framer-motion';

export const TestimonialCard = ({ quote, author, role, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ y: -4 }}
      className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/8 to-white/3 p-8 shadow-xl shadow-black/20 backdrop-blur-sm hover:border-shopora-accent/30 transition"
    >
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-lg text-shopora-accent">⭐</span>
        ))}
      </div>
      <p className="text-slate-300 leading-relaxed italic">"{quote}"</p>
      <div className="mt-6 pt-6 border-t border-white/10">
        <p className="font-semibold text-white">{author}</p>
        <p className="text-sm text-shopora-accent">{role}</p>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
