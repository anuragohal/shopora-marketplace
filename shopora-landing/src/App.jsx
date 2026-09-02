import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Nearby Product Discovery',
    description: 'Find products from local stores within minutes, tailored to your location.',
    icon: '📍',
  },
  {
    title: 'Store Listings',
    description: 'Curated local shop profiles that boost trust and customer visits.',
    icon: '🏬',
  },
  {
    title: 'Product Promotions',
    description: 'Highlight special offers, new arrivals, and featured deals instantly.',
    icon: '✨',
  },
  {
    title: 'Advertisement System',
    description: 'Affordable in-app banners and featured placement for maximum reach.',
    icon: '💡',
  },
  {
    title: 'Analytics Dashboard',
    description: 'Actionable metrics that help businesses optimize visibility and revenue.',
    icon: '📊',
  },
  {
    title: 'Customer Engagement Tools',
    description: 'Collect reviews, respond to demand, and build local loyalty.',
    icon: '💬',
  },
];

const steps = [
  'Businesses register their store and profile.',
  'Upload products, services, and promotions.',
  'Customers discover nearby products instantly.',
  'Shops gain visibility, visits, and sales.',
];

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    highlight: '2-month free trial',
    items: ['Basic listing', 'Local discovery', 'Standard support'],
  },
  {
    name: 'Growth',
    price: '$29/mo',
    highlight: 'Featured promotions',
    items: ['Ad campaigns', 'Smart recommendations', 'Analytics dashboard'],
    featured: true,
  },
  {
    name: 'Premium',
    price: '$59/mo',
    highlight: 'White-glove onboarding',
    items: ['Premium analytics', 'Banner ads', 'Priority visibility'],
  },
];

const testimonials = [
  {
    name: 'Maya Patel',
    role: 'Cafe Owner',
    quote: 'Shopora turned our neighborhood café into a local destination. Customers now find us faster and our weekday footfall has increased by 38%.',
  },
  {
    name: 'Rahul Singh',
    role: 'Retail Boutique',
    quote: 'The visibility tools and promotion placements helped us fill inventory quickly. It feels like a complete digital storefront without the overhead.',
  },
  {
    name: 'Sneha Rao',
    role: 'Grocery Store',
    quote: 'Local customers now discover our fresh stock and seasonal offers directly. The platform is intuitive and reliable.',
  },
];

const faqs = [
  {
    question: 'How does Shopora help local businesses stand out?',
    answer: 'Shopora places local stores in front of nearby customers using discovery, promotions, featured placements, and analytics-backed visibility tools.',
  },
  {
    question: 'Can customers search by location and product?',
    answer: 'Yes. Shoppers can filter by category, nearest distance, and product availability to save time and discover local options fast.',
  },
  {
    question: 'What makes the Growth plan different?',
    answer: 'Growth includes featured campaigns, smart recommendations, and deeper marketing analytics to help your store grow reliably.',
  },
];

function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('shopora-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  useEffect(() => {
    const storedTheme = localStorage.getItem('shopora-theme');
    if (storedTheme) {
      setIsDark(storedTheme === 'dark');
    }
  }, []);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(108,99,255,0.22),transparent_28%),linear-gradient(180deg,_#050813_0%,_#111827_48%,_#0b1228_100%)] text-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-5 sm:px-8">
        <header className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-white/10 bg-white/5 px-5 py-4 shadow-glow backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-shopora-primary to-shopora-accent text-xl shadow-xl shadow-shopora-primary/20">
              S
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Shopora</p>
              <h1 className="text-xl font-semibold">Local product discovery</h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsDark(prev => !prev)}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm transition hover:border-shopora-primary/50 hover:bg-white/10"
            >
              {isDark ? 'Light' : 'Dark'} Mode
            </button>
            <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
              <a href="#about" className="transition hover:text-white">Who We Are</a>
              <a href="#features" className="transition hover:text-white">Features</a>
              <a href="#process" className="transition hover:text-white">How It Works</a>
              <a href="#pricing" className="transition hover:text-white">Plans</a>
            </nav>
          </div>
        </header>
      </div>

      <main className="mx-auto max-w-7xl px-6 pb-24 pt-8 sm:px-8">
        <section className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] xl:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-slate-200 shadow-sm shadow-slate-900/20 backdrop-blur-xl">
              <span className="rounded-full bg-shopora-primary px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-white">Launch Offer</span>
              Get 2 months free access to premium discovery tools.
            </div>

            <div className="space-y-6">
              <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                Discover local products faster. Empower every nearby business to thrive.
              </h1>
              <p className="max-w-xl text-lg leading-8 text-slate-300">
                Shopora connects customers with nearby shops, products and promotions through a polished discovery experience built for local businesses and modern communities.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#pricing" className="inline-flex items-center justify-center rounded-full bg-shopora-primary px-8 py-3 text-sm font-semibold text-white transition-all hover:scale-[1.02] hover:bg-shopora-secondary">
                Start free trial
              </a>
              <a href="#about" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-3 text-sm text-slate-100 transition hover:bg-white/10">
                Learn how it works
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { value: '150+', label: 'Local shops onboarded' },
                { value: '32x', label: 'Average visibility uplift' },
                { value: '98%', label: 'Customer discovery success' },
              ].map(stat => (
                <div key={stat.label} className="rounded-3xl bg-white/5 p-5 text-slate-100 shadow-glow backdrop-blur-xl border border-white/10">
                  <p className="text-3xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-950/90 p-6 shadow-glow"
          >
            <div className="absolute inset-x-0 top-0 h-40 bg-hero-glow opacity-80 blur-3xl" />
            <div className="relative grid gap-5">
              <div className="rounded-[2rem] border border-white/10 bg-slate-900/90 p-6 shadow-xl shadow-black/20">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.32em] text-slate-500">Live feed</p>
                    <h2 className="mt-3 text-2xl font-semibold text-white">Browse stores nearby</h2>
                  </div>
                  <span className="rounded-2xl bg-shopora-primary/10 px-3 py-1 text-xs font-semibold text-shopora-primary">Trending</span>
                </div>
                <div className="mt-6 grid gap-4">
                  <div className="space-y-1 rounded-3xl bg-slate-950/80 p-4">
                    <p className="text-sm text-slate-400">Search category</p>
                    <div className="flex items-center gap-3 rounded-2xl bg-slate-900/90 px-4 py-3 text-slate-100">
                      <span>📦</span>
                      <span>Home decor, fashion, electronics nearby...</span>
                    </div>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-3xl bg-slate-950/80 p-4">
                      <p className="text-sm text-slate-400">Featured store</p>
                      <p className="mt-2 font-semibold text-white">Urban Bloom</p>
                      <p className="text-sm text-slate-500">3.8 km • Lifestyle boutique</p>
                    </div>
                    <div className="rounded-3xl bg-slate-950/80 p-4">
                      <p className="text-sm text-slate-400">Top promotion</p>
                      <p className="mt-2 font-semibold text-white">Weekend sale • 25% off</p>
                      <p className="text-sm text-slate-500">Boosted listing with premium placement</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-5 shadow-xl shadow-black/20">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-500">App preview</p>
                  <p className="mt-4 text-lg font-semibold text-white">Smart recommendations</p>
                  <p className="mt-3 text-sm leading-6 text-slate-400">Personalized suggestions based on location, category, and trending local demand.</p>
                </div>
                <div className="rounded-[1.75rem] bg-gradient-to-r from-shopora-secondary/15 to-shopora-primary/10 p-5 text-white shadow-xl shadow-shopora-primary/10">
                  <p className="text-sm uppercase tracking-[0.3em] text-shopora-accent/80">Business growth</p>
                  <p className="mt-4 text-lg font-semibold">+42% store visits</p>
                  <p className="mt-3 text-sm leading-6 text-slate-300">Shops using Shopora report stronger online engagement and repeated customer flow.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="about" className="mt-20 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-glow backdrop-blur-xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-6">
              <p className="inline-flex rounded-full bg-shopora-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-shopora-accent">Who we are</p>
              <h2 className="text-4xl font-semibold text-white">A premium platform built for local businesses and modern shoppers.</h2>
              <p className="max-w-2xl text-slate-300">
                Shopora is a Local Business Product Discovery Platform created to make nearby products easier to find, while helping small shops grow their digital presence with modern storefront tools.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-slate-950/80 p-6">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Mission</p>
                  <p className="mt-3 text-base text-slate-200">Empower local businesses digitally and make nearby discovery smarter, faster, and more accessible.</p>
                </div>
                <div className="rounded-3xl bg-slate-950/80 p-6">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Vision</p>
                  <p className="mt-3 text-base text-slate-200">Create a thriving local commerce ecosystem where customers discover products from shops they trust and love.</p>
                </div>
              </div>
            </div>
            <div className="grid gap-4">
              <div className="rounded-[2rem] border border-shopora-primary/10 bg-slate-950/80 p-7 shadow-xl shadow-shopora-primary/10">
                <h3 className="text-xl font-semibold text-white">Why Shopora exists</h3>
                <p className="mt-4 text-slate-300 leading-7">
                  Many small businesses struggle to reach customers online. Shopora gives local shops a premium digital presence, product showcase, and promotions engine without the complexity of traditional marketplaces.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.75rem] bg-gradient-to-br from-shopora-primary/10 to-slate-950/80 p-6">
                  <p className="text-sm uppercase tracking-[0.3em] text-shopora-primary">Customer-first</p>
                  <p className="mt-3 text-slate-200">Fast search, location-aware discovery, and clear product previews.</p>
                </div>
                <div className="rounded-[1.75rem] bg-gradient-to-br from-shopora-secondary/10 to-slate-950/80 p-6">
                  <p className="text-sm uppercase tracking-[0.3em] text-shopora-secondary">Business-first</p>
                  <p className="mt-3 text-slate-200">Tools for visibility, promotions, analytics, and affordable marketing that local shops need.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="mt-20 space-y-12">
          <div className="space-y-4 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-shopora-accent/80">Core features</p>
            <h2 className="text-4xl font-semibold text-white">Built to connect nearby shoppers with local sellers.</h2>
            <p className="mx-auto max-w-2xl text-slate-400">A feature suite designed for discovery, promotion, analytics, and growth across local businesses.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {features.map(item => (
              <motion.div
                key={item.title}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                className="rounded-[2rem] border border-white/10 bg-slate-950/85 p-8 shadow-xl shadow-black/20"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-shopora-primary/10 text-2xl">
                  {item.icon}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-slate-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="process" className="mt-20 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-glow backdrop-blur-xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.3em] text-shopora-accent/80">How it works</p>
              <h2 className="text-4xl font-semibold text-white">A simple flow for shops, products, and customers.</h2>
              <p className="max-w-xl text-slate-400">Shopora makes it easy for local businesses to onboard, showcase products, and reach customers while shoppers discover nearby options in a single experience.</p>
            </div>
            <div className="grid gap-4">
              {steps.map((step, index) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: index % 2 ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  className="rounded-[1.75rem] border border-white/10 bg-slate-950/85 p-6 shadow-xl shadow-black/15"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-shopora-accent/10 text-xl font-semibold text-shopora-accent">
                    {index + 1}
                  </div>
                  <p className="mt-4 text-lg font-semibold text-white">{step}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-20 grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-xl shadow-black/20">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.3em] text-shopora-accent/80">Why choose Shopora</p>
              <h2 className="text-4xl font-semibold text-white">Local-first, growth-ready, and easy to use.</h2>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { title: 'Supports local economy', desc: 'Keep customers within your community while helping nearby businesses thrive.' },
                { title: 'Easy product discovery', desc: 'Fast search and local filters make it simple to find the exact item nearby.' },
                { title: 'Better visibility for businesses', desc: 'Featured listings and promoted campaigns increase foot traffic and interest.' },
                { title: 'Affordable marketing', desc: 'Flexible plans built for small shops, not enterprise budgets.' },
                { title: 'Smart recommendations', desc: 'Match customers with products using intelligent discovery signals.' },
                { title: 'Trusted local marketplace', desc: 'Designed to feel professional, modern, and reliable for every shop owner.' },
              ].map(card => (
                <div key={card.title} className="rounded-3xl bg-white/5 p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                  <p className="mt-3 text-slate-400">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] bg-gradient-to-br from-shopora-primary/10 to-shopora-secondary/10 p-8 text-slate-100 shadow-xl shadow-shopora-primary/10">
            <h3 className="text-3xl font-semibold text-white">Trusted by neighborhood leaders</h3>
            <p className="mt-4 text-slate-300">Premium trust indicators help customers feel confident when choosing local businesses.</p>
            <div className="mt-8 grid gap-4">
              {['Verified shop owners', 'Customer satisfaction tracking', 'Secure local discovery', 'Flexible ad controls'].map(item => (
                <div key={item} className="rounded-3xl bg-slate-950/70 p-5">
                  <p className="text-sm uppercase tracking-[0.28em] text-shopora-accent/80">Trusted</p>
                  <p className="mt-3 text-lg font-semibold text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="mt-20 space-y-10">
          <div className="space-y-4 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-shopora-accent/80">Revenue model</p>
            <h2 className="text-4xl font-semibold text-white">Flexible plans that scale with your local business.</h2>
            <p className="mx-auto max-w-2xl text-slate-400">Trial, subscription, featured promotions, ad campaigns, and premium analytics all in one platform.</p>
          </div>
          <div className="grid gap-6 xl:grid-cols-3">
            {plans.map(plan => (
              <motion.div
                key={plan.name}
                whileHover={{ y: -8 }}
                className={`rounded-[2rem] border p-8 shadow-xl shadow-black/20 ${plan.featured ? 'border-shopora-primary/30 bg-gradient-to-br from-slate-900/95 to-shopora-primary/10' : 'border-white/10 bg-slate-950/85'}`}
              >
                <p className="text-sm uppercase tracking-[0.3em] text-shopora-accent/80">{plan.name}</p>
                <p className="mt-6 text-5xl font-semibold text-white">{plan.price}</p>
                <p className="mt-3 text-sm text-slate-400">{plan.highlight}</p>
                <ul className="mt-8 space-y-3 text-slate-300">
                  {plan.items.map(item => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 text-shopora-accent">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-10 w-full rounded-full bg-shopora-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-shopora-secondary">
                  Choose {plan.name}
                </button>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mt-20 grid gap-10 xl:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/85 p-8 shadow-xl shadow-black/20">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.3em] text-shopora-accent/80">Testimonials</p>
              <h2 className="text-4xl font-semibold text-white">Local businesses love the visibility boost.</h2>
            </div>
            <div className="mt-8 grid gap-5">
              {testimonials.map(testimonial => (
                <motion.div
                  key={testimonial.name}
                  whileHover={{ y: -4 }}
                  className="rounded-3xl border border-white/10 bg-slate-900/80 p-6"
                >
                  <p className="text-slate-300">“{testimonial.quote}”</p>
                  <div className="mt-5 text-sm text-slate-400">
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p>{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] bg-gradient-to-br from-shopora-secondary/10 to-shopora-primary/10 p-8 text-slate-100 shadow-xl shadow-shopora-primary/10">
            <h3 className="text-3xl font-semibold text-white">Trusted growth metrics</h3>
            <div className="mt-8 grid gap-4">
              {[
                { value: '58%', label: 'More five-star store visits' },
                { value: '4.7/5', label: 'Average customer satisfaction' },
                { value: '3x', label: 'Faster local product discovery' },
              ].map(stat => (
                <div key={stat.label} className="rounded-3xl bg-slate-950/80 p-6">
                  <p className="text-4xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-2 text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-20 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-glow backdrop-blur-xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.3em] text-shopora-accent/80">FAQ</p>
              <h2 className="text-4xl font-semibold text-white">Questions local businesses ask most.</h2>
              <p className="max-w-xl text-slate-400">Everything you need to know before you launch your shop with Shopora.</p>
            </div>
            <div className="space-y-4">
              {faqs.map(item => (
                <div key={item.question} className="rounded-3xl bg-slate-950/80 p-6 border border-white/10">
                  <p className="font-semibold text-white">{item.question}</p>
                  <p className="mt-3 text-slate-400">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-20 rounded-[2rem] bg-gradient-to-br from-shopora-primary/10 via-slate-900/70 to-shopora-accent/10 p-8 text-slate-100 shadow-xl shadow-shopora-primary/10">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-center">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.3em] text-shopora-accent/80">Ready to grow locally?</p>
              <h2 className="text-4xl font-semibold text-white">Join Shopora and start turning nearby customers into loyal shoppers.</h2>
              <p className="max-w-xl text-slate-300">Launch your business profile, upload products, and use smart visibility tools tailored for local commerce.</p>
            </div>
            <form className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-xl shadow-black/20">
              <p className="text-sm uppercase tracking-[0.3em] text-shopora-accent/80">Newsletter</p>
              <p className="mt-3 text-slate-400">Get updates on new promotions, local growth strategies and product discovery trends.</p>
              <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                <input type="email" placeholder="Your business email" className="min-w-0 flex-1 rounded-3xl border border-white/10 bg-slate-900/90 px-5 py-3 text-slate-100 outline-none transition focus:border-shopora-primary/50" />
                <button className="inline-flex items-center justify-center rounded-3xl bg-shopora-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-shopora-secondary">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950/90 py-8 text-slate-400">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
          <p>© 2026 Shopora. Built to support local commerce and smarter discovery.</p>
          <div className="flex flex-wrap gap-4 text-sm text-slate-300">
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#pricing" className="transition hover:text-white">Plans</a>
            <a href="#process" className="transition hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
