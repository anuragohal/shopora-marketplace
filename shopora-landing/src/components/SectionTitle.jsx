import { motion } from 'framer-motion';

export const SectionTitle = ({
  badge,
  title,
  description,
  centered = true,
  className = '',
}) => {
  const containerClass = centered ? 'text-center' : '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`space-y-4 ${containerClass} ${className}`}
    >
      {badge && (
        <div className={`inline-flex ${centered ? 'justify-center w-full' : ''}`}>
          <span className="rounded-full bg-shopora-accent/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-shopora-accent">
            {badge}
          </span>
        </div>
      )}
      <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
        {title}
      </h2>
      {description && (
        <p className={`text-lg text-slate-400 ${centered ? 'mx-auto max-w-2xl' : 'max-w-3xl'}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
