import { motion } from 'framer-motion';
import { TestimonialCard } from '../components/TestimonialCard';
import { SectionTitle } from '../components/SectionTitle';

export const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: 'Shopora transformed how customers find us. We went from zero visibility to selling out within weeks.',
      author: 'Priya Sharma',
      role: 'Artisan Bakery Owner',
    },
    {
      quote: 'The analytics helped us understand what customers want. We increased sales by 40% using real data.',
      author: 'Vikram Desai',
      role: 'Electronics Store',
    },
    {
      quote: 'Best investment for our boutique. Foot traffic increased and customers recognize us online.',
      author: 'Meera Kapoor',
      role: 'Fashion Boutique',
    },
  ];

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-shopora-secondary/5 rounded-full blur-3xl -z-10" />
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mb-16">
          <SectionTitle badge="Social Proof" title="Loved by Local Businesses" description="Real success stories from shop owners." centered />
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((t, idx) => (
            <TestimonialCard key={t.author} {...t} delay={idx * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
