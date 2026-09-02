import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { SectionTitle } from '../components/SectionTitle';

export const FAQSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const faqs = [
    {
      question: 'How does Shopora help my shop get discovered?',
      answer: 'Shopora uses location-based search, category filtering, and smart recommendations to match customers with local shops. Your shop profile appears in discovery feeds, search results, and featured placements, making it easy for nearby customers to find you.',
    },
    {
      question: 'What\'s included in the free trial?',
      answer: 'All new shops get 2 months of premium access free. This includes unlimited products, featured placements, ad campaigns, advanced analytics, and customer messaging tools. After the trial, you can choose any paid plan or stay on free.',
    },
    {
      question: 'Can I upload my existing inventory?',
      answer: 'Yes! You can upload thousands of products via bulk import, CSV files, or individually. Each product can have multiple photos, descriptions, pricing, and promotions. We make it simple to get your entire catalog on Shopora.',
    },
    {
      question: 'How are customers found and reached?',
      answer: 'Customers search by location, category, or brand. They see your shop in search results, featured lists, and smart recommendation feeds. You can also reach customers directly with promotions, notifications, and personalized offers.',
    },
    {
      question: 'What analytics and insights do I get?',
      answer: 'Our dashboard shows visitor stats, product popularity, customer behavior, conversion rates, and sales trends. Growth plans include advanced metrics and competitor insights. Premium plans add custom reports and dedicated analytics support.',
    },
    {
      question: 'Is there a long-term contract or can I cancel anytime?',
      answer: 'No contracts. You can upgrade, downgrade, or cancel your subscription anytime. We want to support your growth, and we\'re confident you\'ll love using Shopora.',
    },
  ];

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-40 left-10 w-80 h-80 bg-shopora-primary/5 rounded-full blur-3xl -z-10" />

      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <div className="mb-16">
          <SectionTitle
            badge="FAQ"
            title="Questions We Hear Often"
            description="Everything you need to know about Shopora and getting your shop started."
            centered
          />
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-950/80 overflow-hidden hover:border-shopora-accent/30 transition"
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? -1 : index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/5 transition"
              >
                <span className="text-lg font-semibold text-white pr-4">{faq.question}</span>
                <motion.span
                  animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 text-shopora-accent text-xl"
                >
                  ▼
                </motion.span>
              </button>

              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-white/10 px-8 py-6 bg-black/20"
                  >
                    <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 rounded-2xl border border-shopora-primary/30 bg-gradient-to-r from-shopora-primary/10 to-shopora-secondary/10 p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-3">Still have questions?</h3>
          <p className="text-slate-300 mb-6">
            Our support team is here to help you succeed on Shopora.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:support@shopora.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-shopora-primary text-white font-semibold hover:bg-shopora-secondary transition"
            >
              📧 Email Us
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 bg-white/5 text-white font-semibold hover:bg-white/10 transition"
            >
              💬 Chat Support
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
