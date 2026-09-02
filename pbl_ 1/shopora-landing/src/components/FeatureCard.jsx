import { motion } from 'framer-motion';

export const FeatureCard = ({ icon, title, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ y: -8 }}
      className="group rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-950/80 p-8 shadow-xl shadow-black/20 hover:border-shopora-primary/30 hover:shadow-shopora-primary/20 transition-all duration-300"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-shopora-primary/20 to-shopora-accent/10 text-2xl group-hover:from-shopora-primary/40 transition"
      >
        {icon}
      </motion.div>
      <h3 className="mt-6 text-xl font-bold text-white">{title}</h3>
      <p className="mt-3 leading-6 text-slate-400 group-hover:text-slate-300 transition">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;
