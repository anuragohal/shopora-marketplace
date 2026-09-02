import { motion } from 'framer-motion';

export const StatCard = ({ value, label, icon = null, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ y: -4 }}
      className="rounded-2xl bg-gradient-to-br from-white/10 to-white/5 p-6 border border-white/15 shadow-xl shadow-black/20 backdrop-blur-sm hover:border-shopora-primary/30 transition"
    >
      {icon && <div className="text-3xl mb-3">{icon}</div>}
      <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-shopora-primary to-shopora-accent bg-clip-text text-transparent">
        {value}
      </p>
      <p className="mt-2 text-sm text-slate-400">{label}</p>
    </motion.div>
  );
};

export default StatCard;
