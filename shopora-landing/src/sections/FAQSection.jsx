import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { SectionTitle } from '../components/SectionTitle';

export const FAQSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const faqs = [
    {
      question: 'How does Shopora help my shop get discovered?',
      answer: 'Shopora uses location-based search and smart recommendations to match customers with local shops.',
    },
    {
      question: 'What is included in the free trial?',
      answer: '2 months of premium access including unlimited products, featured placements, and analytics.',
    },
    {
      question: 'Can I upload my existing inventory?',
      answer: 'Yes! You can upload thousands of products via bulk import, CSV files, or individually.',
    },
    {
      question: 'What analytics insights do I get?',
      answer: 'Dashboard shows visitor stats, product popularity, customer behavior, and conversion rates.',
    },
  ];

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute top-40 left-10 w-80 h-80 bg-shopora-primary/5 rounded-full blur-3xl -z-10" />
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <div className="mb-16">
          <SectionTitle badge="FAQ" title="Questions We Hear Often" centered />
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-950/80"
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? -1 : index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between"
              >
                <span className="text-lg font-semibold text-white">{faq.question}</span>
                <motion.span animate={{ rotate: expandedIndex === index ? 180 : 0 }} className="text-shopora-accent">
                  ▼
                </motion.span>
              </button>
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="border-t border-white/10 px-8 py-6 bg-black/20"
                  >
                    <p className="text-slate-300">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
