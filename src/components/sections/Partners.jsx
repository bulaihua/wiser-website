import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const categories = [
  {
    title: 'Public Companies',
    description: [
      'NYSE-listed fashion groups',
      'European publicly traded houses',
      'Global apparel corporations'
    ]
  },
  {
    title: 'Designer Brands',
    description: [
      'Contemporary fashion labels',
      'Boutique & atelier collections',
      'Independent designer brands'
    ]
  },
  {
    title: 'Major Retail Chains',
    description: [
      'Fortune 500 retailers',
      'Mass market chains',
      'Warehouse & off-price leaders'
    ]
  },
  {
    title: 'Sustainable Brands',
    description: [
      'Certified organic labels',
      'Eco-friendly collections',
      'B Corp certified brands'
    ]
  },
];

export default function Partners() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="container-custom">
        {/* Transition Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          {/* Top decorative line */}
          <div className="w-16 h-px bg-accent-black/20 mx-auto mb-8"></div>

          {/* Transition message */}
          <p className="font-serif text-2xl md:text-3xl text-accent-black mb-3">
            Serving 200+ Fashion Brands
          </p>
          <p className="text-gray-500 text-lg">
            Across 30+ Countries
          </p>

          {/* Bottom decorative line */}
          <div className="w-16 h-px bg-accent-black/20 mx-auto mt-8"></div>
        </motion.div>

        {/* Main Content Area with different background */}
        <div className="bg-accent-warm/20 -mx-4 md:-mx-8 px-4 md:px-8 py-16 rounded-3xl">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <p className="text-overline text-gray-400 mb-4 tracking-widest">Trusted Partners</p>
              <h2 className="heading-secondary mb-6">Trusted by Industry Leaders</h2>
              <p className="text-body text-gray-600">
                Serving diverse categories across the fashion industry, from public companies to emerging designer brands
              </p>
            </motion.div>

        {/* Categories - 2x2 Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-white border border-accent-black/5 rounded-2xl p-10 h-full hover:border-accent-black/10 hover:shadow-md transition-all">
                {/* Yarn Icon */}
                <div className="mb-5 flex justify-center">
                  <img
                    src="/yarn-icon.png"
                    alt=""
                    className="w-16 h-auto opacity-50"
                  />
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-semibold text-accent-black mb-3 text-center tracking-wide">{category.title}</h3>
                <div className="w-16 h-px bg-accent-black/30 mx-auto mb-5"></div>

                {/* Description List */}
                <ul className="space-y-3">
                  {category.description.map((item, i) => (
                    <li key={i} className="text-gray-600 text-sm text-center flex items-center justify-center gap-2">
                      <span className="text-accent-black text-base leading-none">·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

          {/* Bottom Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center"
          >
            <div className="bg-accent-black text-white px-8 py-5 rounded-full md:px-12 md:py-6">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-3xl md:text-4xl font-bold">200+</span>
                  <span className="text-white/70 text-sm md:text-base">Brands</span>
                </div>
                <div className="hidden md:block w-px h-10 bg-white/15"></div>
                <div className="flex items-center gap-2">
                  <span className="text-white/90 text-sm md:text-base font-medium">Guaranteed Delivery</span>
                </div>
                <div className="hidden md:block w-px h-10 bg-white/15"></div>
                <div className="flex items-center gap-2">
                  <span className="text-white/90 text-sm md:text-base font-medium">Long-term Partnerships</span>
                </div>
              </div>
            </div>
          </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
