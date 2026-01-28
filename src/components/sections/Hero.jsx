import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { companyInfo } from '../../data/companyData';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-white">
      <div className="container-custom">
        <div className="max-w-4xl">
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-accent-black leading-tight mb-8"
          >
            Crafting excellence
            <br />
            <span className="text-gray-400">in every stitch.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-body max-w-xl mb-12"
          >
            {companyInfo.description}
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="/contact" className="btn-primary">
              Start a Conversation
            </a>
            <a href="/about" className="btn-secondary">
              Learn More
            </a>
            <a href="#product-showcase" className="btn-ghost">
              View Products
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-20 pt-12 border-t border-gray-200 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: '20', label: 'Years' },
              { value: '1000+', label: 'Employees' },
              { value: '$40M+', label: 'Revenue' },
              { value: '500+', label: 'Clients' },
            ].map((stat, index) => (
              <div key={index}>
                <div className="font-display text-4xl md:text-5xl text-accent-black mb-1">
                  {stat.value}
                </div>
                <div className="text-overline text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-px h-12 bg-gray-300"></div>
      </motion.div>
    </section>
  );
}
