import { motion } from 'framer-motion';
import { Globe, Leaf, Package, Truck } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

export default function SourcingSolutions() {
  return (
    <div className="pt-36 pb-20">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-overline mb-4">Our Services</p>
          <h1 className="heading-secondary mb-6">Sourcing Solutions</h1>
          <p className="text-body text-gray-600">
            Leverage our extensive supplier network and material expertise to find
            the perfect components for your products at competitive prices.
          </p>
        </motion.div>

        {/* Sourcing Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {[
            {
              icon: <Package className="w-8 h-8" />,
              title: 'Fabric & Yarn Sourcing',
              description: 'Access to a wide range of materials from basic cottons to luxury cashmeres, with established relationships in China, Italy, and Japan.',
              highlights: ['Premium yarns', 'Sustainable options', 'Competitive pricing', 'Quality assurance'],
            },
            {
              icon: <Leaf className="w-8 h-8" />,
              title: 'Sustainable Materials',
              description: 'Growing selection of eco-friendly and certified materials including organic cotton, recycled fibers, and low-impact dyes.',
              highlights: ['GOTS certified', 'Recycled polyester', 'Organic linen', 'B-Corp Tencel'],
            },
            {
              icon: <Truck className="w-8 h-8" />,
              title: 'Trims & Accessories',
              description: 'Complete sourcing for buttons, zippers, labels, packaging and all the finishing touches that make your product complete.',
              highlights: ['Custom trims', 'Private labeling', 'Packaging solutions', 'Eco-options'],
            },
            {
              icon: <Globe className="w-8 h-8" />,
              title: 'Global Network',
              description: 'Our supplier network spans multiple continents, ensuring reliable sourcing and backup options for critical materials.',
              highlights: ['Multiple regions', 'Backup suppliers', 'Risk management', 'Consistent quality'],
            },
          ].map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="border border-gray-200 p-8 hover:border-gray-400 transition-colors"
            >
              <div className="w-14 h-14 bg-accent-black rounded-full flex items-center justify-center text-white mb-6">
                {category.icon}
              </div>
              <h3 className="font-display text-xl text-accent-black mb-3">{category.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{category.description}</p>
              <div className="flex flex-wrap gap-2">
                {category.highlights.map((highlight, i) => (
                  <span key={i} className="text-xs px-3 py-1 bg-gray-100 text-accent-black">
                    {highlight}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Material Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="heading-secondary">Material Categories</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              'Cashmere & Luxury Yarns',
              'Organic Cotton',
              'Merino Wool',
              'Synthetic Blends',
              'Recycled Materials',
              'Eco-Friendly Dyes',
              'Trims & Accessories',
              'Custom Packaging',
            ].map((material, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                className="text-center p-4 border border-gray-200 hover:border-gray-400 transition-colors"
              >
                <p className="text-sm text-gray-700">{material}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center mb-12">
            <h2 className="heading-secondary">Why Our Sourcing?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: 'Cost Efficiency',
                description: 'Our purchasing power and supplier relationships mean better pricing for you.',
              },
              {
                title: 'Quality Assurance',
                description: 'Every material is verified for quality and consistency before use.',
              },
              {
                title: 'Sustainable Options',
                description: 'Growing catalog of eco-friendly and certified sustainable materials.',
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-accent-black rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <span className="text-xl">✓</span>
                </div>
                <h3 className="font-display text-lg text-accent-black mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 text-center p-12 bg-accent-black text-white"
        >
          <h2 className="heading-tertiary mb-4 text-white">Need Help Sourcing?</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Tell us what you're looking for and we'll find the perfect materials for your project.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-accent-black px-8 py-4 font-medium hover:bg-gray-100 transition-colors"
          >
            Contact Us
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
