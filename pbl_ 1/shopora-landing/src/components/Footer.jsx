import { motion } from 'framer-motion';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'About', href: '#about' },
    { label: 'Features', href: '#features' },
    { label: 'Plans', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: '🐦', href: '#', label: 'Twitter' },
    { icon: '💼', href: '#', label: 'LinkedIn' },
    { icon: '📘', href: '#', label: 'Facebook' },
    { icon: '📷', href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="border-t border-white/10 bg-slate-950/95 py-12">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid gap-12 md:grid-cols-4 mb-8">
          {/* Brand */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-shopora-primary to-shopora-accent text-sm font-bold">
                S
              </div>
              <span className="font-bold text-white">Shopora</span>
            </div>
            <p className="text-sm text-slate-400">Empowering local businesses with smart discovery.</p>
          </motion.div>

          {/* Product Links */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <h3 className="font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#features" className="hover:text-white transition">Features</a></li>
              <li><a href="#pricing" className="hover:text-white transition">Pricing</a></li>
              <li><a href="#process" className="hover:text-white transition">How It Works</a></li>
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#about" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <h3 className="font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  title={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-lg hover:bg-shopora-primary/30 transition"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
            <p>© {currentYear} Shopora. Built to support local commerce and smarter discovery.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
