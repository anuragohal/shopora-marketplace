import { motion } from 'framer-motion';
import { Button } from '../components/Button';
import { StatCard } from '../components/StatCard';

export const HeroSection = () => {
  const stats = [
    { value: '500+', label: 'Local shops onboarded', icon: '🏪' },
    { value: '50K+', label: 'Daily active users', icon: '👥' },
    { value: '98%', label: 'Customer satisfaction', icon: '⭐' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative overflow-hidden pt-20 pb-20 md:pt-32 md:pb-32">
      {/* Animated background elements */}
      <div className="absolute top-0 left-10 w-96 h-96 bg-shopora-primary/5 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-shopora-accent/5 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 rounded-full bg-shopora-primary/10 px-4 py-2 border border-shopora-primary/20"
            >
              <span className="h-2 w-2 rounded-full bg-shopora-accent animate-pulse" />
              <span className="text-sm font-semibold text-shopora-accent">🚀 Launching Now</span>
            </motion.div>

            {/* Headline */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
                Discover Local,{' '}
                <span className="bg-gradient-to-r from-shopora-primary via-shopora-secondary to-shopora-accent bg-clip-text text-transparent">
                  Support Local
                </span>
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
                Shopora connects customers with nearby shops and products while helping local businesses gain visibility, reach, and growth through smart digital discovery.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
              <Button href="#pricing" variant="primary" size="lg">
                Start Free Trial →
              </Button>
              <Button href="#features" variant="secondary" size="lg">
                Explore Features
              </Button>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              variants={itemVariants}
              className="grid gap-4 grid-cols-1 sm:grid-cols-3 pt-8 border-t border-white/10"
            >
              {stats.map((stat, idx) => (
                <StatCard key={stat.label} {...stat} delay={0.1 + idx * 0.1} />
              ))}
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative"
          >
            <div className="rounded-3xl border border-white/15 bg-gradient-to-br from-slate-900/80 to-slate-950/90 p-8 shadow-2xl shadow-shopora-primary/20 overflow-hidden">
              {/* Animated grid background */}
              <div className="absolute inset-0 opacity-20">
                <div className="h-full w-full bg-gradient-to-br from-shopora-primary/10 to-shopora-accent/5" />
              </div>

              {/* Mock-up Content */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="relative space-y-4"
              >
                <div className="rounded-2xl bg-slate-900/80 p-6 border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-slate-500">Live Discovery Feed</p>
                      <h3 className="mt-2 text-xl font-bold text-white">Nearby Shops</h3>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-shopora-accent/20 text-xs font-bold text-shopora-accent">Trending</span>
                  </div>

                  <div className="space-y-3">
                    <div className="rounded-xl bg-slate-950/50 p-4 flex items-center gap-3 hover:bg-slate-950/70 transition cursor-pointer">
                      <span className="text-2xl">🏪</span>
                      <div className="flex-1">
                        <p className="font-semibold text-white">Urban Bloom Cafe</p>
                        <p className="text-xs text-slate-400">2.3 km • Specialty Coffee</p>
                      </div>
                      <span className="text-shopora-accent">⭐ 4.8</span>
                    </div>

                    <div className="rounded-xl bg-slate-950/50 p-4 flex items-center gap-3 hover:bg-slate-950/70 transition cursor-pointer">
                      <span className="text-2xl">🛍️</span>
                      <div className="flex-1">
                        <p className="font-semibold text-white">Fashion Forward</p>
                        <p className="text-xs text-slate-400">1.8 km • Clothing Store</p>
                      </div>
                      <span className="text-shopora-accent">⭐ 4.9</span>
                    </div>

                    <div className="rounded-xl bg-gradient-to-r from-shopora-primary/20 to-shopora-accent/10 p-4 border border-shopora-primary/30 flex items-center gap-3 cursor-pointer">
                      <span className="text-2xl">🎁</span>
                      <div className="flex-1">
                        <p className="font-semibold text-white">Weekend Sale • 30% Off</p>
                        <p className="text-xs text-slate-300">Boosted Promotion</p>
                      </div>
                      <span className="text-shopora-accent font-bold">→</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-slate-950/80 p-4 border border-white/10">
                    <p className="text-xs text-slate-500 uppercase tracking-wider">Growth</p>
                    <p className="mt-2 text-2xl font-bold text-shopora-accent">+42%</p>
                    <p className="text-xs text-slate-400">Shop visits</p>
                  </div>
                  <div className="rounded-xl bg-slate-950/80 p-4 border border-white/10">
                    <p className="text-xs text-slate-500 uppercase tracking-wider">Reach</p>
                    <p className="mt-2 text-2xl font-bold text-shopora-primary">5K+</p>
                    <p className="text-xs text-slate-400">Monthly viewers</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
