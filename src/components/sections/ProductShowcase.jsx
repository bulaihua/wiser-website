import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { productCategories } from '../../data/productsData';

export default function ProductShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // 为每个产品分配对应的 id
  const categoryIds = ['top', 'dress', 'knitwear', 'sweater', 'cashmere', 'jacket', 'accessories', 'custom'];

  return (
    <section id="product-showcase" ref={ref} className="py-24 bg-white scroll-mt-32">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-overline mb-4">Our Expertise</p>
          <h2 className="heading-secondary mb-6">Product Showcase</h2>
          <p className="text-body text-gray-600">
            From concept to creation, we deliver exceptional products
            that meet the highest standards of quality and design.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {productCategories.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Link
                to={`/product/${product.id}`}
                className="block border border-gray-200 p-4 md:p-6 hover:border-gray-400 transition-colors h-full group"
              >
                <p className="text-overline text-gray-400 mb-2 text-xs">{product.name}</p>
                <h3 className="font-display text-lg md:text-xl text-accent-black mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {product.features.slice(0, 2).map((feature, i) => (
                    <span
                      key={i}
                      className="text-xs text-gray-500 px-2 py-1 border border-gray-200"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-400 group-hover:text-accent-black transition-colors">
                  <span>View Samples</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
