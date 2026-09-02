import { useState } from 'react';
import { motion } from 'framer-motion';

export const Header = ({ isDark, setIsDark }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Who We Are', href: '#about' },
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#process' },
    { label: 'Why Us', href: '#why' },
    { label: 'Plans', href: '#pricing' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-4 sm:px-8">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-shopora-primary to-shopora-accent text-lg font-bold shadow-lg shadow-shopora-primary/30">
              S
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Shopora</p>
              <h1 className="text-sm font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Local Discovery
              </h1>
            </div>
          </motion.div>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item, idx) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="px-4 py-2 text-sm text-slate-300 rounded-lg hover:bg-white/10 hover:text-white transition"
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsDark(!isDark)}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-sm text-slate-300 hover:bg-white/10 hover:border-shopora-primary/50 transition"
              title="Toggle dark mode"
            >
              {isDark ? '☀️' : '🌙'}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-4 pt-4 border-t border-white/10 flex flex-col gap-2"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-2 text-sm text-slate-300 hover:bg-white/10 hover:text-white transition rounded-lg"
              >
                {item.label}
              </a>
            ))}
          </motion.nav>
        )}
      </div>
    </header>
  );
};

export default Header;
