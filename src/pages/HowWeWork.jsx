import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function HowWeWork() {
  return (
    <div className="pt-36 pb-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-20"
      >
        <h1 className="heading-secondary mb-6">How We Work</h1>
        <p className="text-body text-gray-600">
          From Idea to Shelf, We Handle Everything
        </p>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Your vision, our expertise. Here's what you get at every stage.
        </p>
      </motion.div>

      {/* Decorative Divider */}
      <div className="flex items-center justify-center mb-10">
        <div className="w-16 h-px bg-accent-black/20"></div>
      </div>

      {/* Process Overview - Customer Outcome Focus */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-20"
      >

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            {
              number: '01',
              title: 'Your Idea',
              subtitle: 'Understood',
              description: 'We listen, analyze, and get your vision right from day one.',
              highlight: 'Expert consultation',
            },
            {
              number: '02',
              title: 'Approved',
              subtitle: 'Sample',
              description: 'Perfect prototype that matches your expectations exactly.',
              highlight: 'In 2 weeks',
            },
            {
              number: '03',
              title: 'Quality',
              subtitle: 'Products',
              description: 'Manufactured with care, inspected at every checkpoint.',
              highlight: 'On schedule',
            },
            {
              number: '04',
              title: 'Ready to',
              subtitle: 'Sell',
              description: 'Delivered to your door, ready for your customers.',
              highlight: 'On time, worldwide',
            },
          ].map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
              className="relative"
            >
              {/* Arrow connector */}
              {index < 3 && (
                <div className="hidden md:block absolute top-1/2 left-full transform -translate-x-1/2 -translate-y-1/2 z-10" style={{ marginLeft: '12px' }}>
                  <div className="w-10 h-10 bg-accent-black rounded-full flex items-center justify-center shadow-sm">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              )}

              <div className="border border-gray-200 p-8 text-center hover:border-gray-400 hover:shadow-md transition-all bg-white">
                <div className="w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <img
                    src="/images/yarn-ball-logo.png"
                    alt="Wiser"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="font-display text-lg text-accent-black mb-1">{step.title}</h3>
                <p className="text-sm font-medium text-accent-black mb-3">{step.subtitle}</p>
                <p className="text-sm text-gray-600 mb-5 leading-relaxed">{step.description}</p>
                <div className="inline-block px-4 py-2 bg-accent-warm rounded-full">
                  <span className="text-xs font-medium text-accent-black">{step.highlight}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center p-12 bg-accent-black text-white"
      >
        <h2 className="heading-tertiary mb-4 text-white">Ready to Start Your Project?</h2>
        <p className="text-gray-300 mb-8 max-w-xl mx-auto">
          Let us discuss your requirements and provide a detailed timeline for your order.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 bg-white text-accent-black px-8 py-4 font-medium hover:bg-gray-100 transition-colors"
        >
          Get a Quote
          <ArrowRight className="w-4 h-4" />
        </a>
      </motion.div>
    </div>
  );
}
