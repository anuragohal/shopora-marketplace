import { motion } from 'framer-motion';

export const Button = ({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300';
  
  const variants = {
    primary: 'bg-shopora-primary text-white hover:bg-shopora-secondary hover:shadow-lg hover:shadow-shopora-primary/30',
    secondary: 'border border-white/15 bg-white/5 text-slate-100 hover:bg-white/10 hover:border-white/30',
    accent: 'bg-gradient-to-r from-shopora-primary to-shopora-secondary text-white hover:shadow-lg hover:shadow-shopora-primary/40',
    ghost: 'text-slate-300 hover:text-white',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-8 py-3 text-sm',
    lg: 'px-10 py-4 text-base',
  };

  const Component = href ? 'a' : 'button';

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Component
        href={href}
        onClick={onClick}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </Component>
    </motion.div>
  );
};

export default Button;
