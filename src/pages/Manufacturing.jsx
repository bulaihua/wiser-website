import { motion } from 'framer-motion';
import { Settings, Wrench, Users, Target } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

const equipmentImages = [
  '/images/Equipment/page14_img2.png',
  '/images/Equipment/page14_img4.png',
  '/stoll machine.png',
  '/linking area.jpg',
  '/images/Equipment/page8_img3.png',
  '/images/Equipment/page9_img2.png',
];


export default function Manufacturing() {
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
          <h1 className="heading-secondary mb-6">Manufacturing</h1>
          <p className="text-body text-gray-600">
            Produce smarter, scale faster. With 16 facilities across China and Southeast Asia,
            we deliver consistent quality at scale.
          </p>
        </motion.div>

        {/* Production Capabilities - 工艺应用 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-24"
        >
          {/* Decorative Divider */}
          <div className="flex items-center justify-center mb-10">
            <div className="w-16 h-px bg-accent-black/20"></div>
          </div>

          <div className="text-center mb-12">
            <p className="text-overline text-gray-400 mb-3 tracking-widest">Expertise</p>
            <h2 className="heading-secondary">Techniques</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Make your products stand out. Premium techniques that capture attention and elevate your brand.
            </p>
          </div>

          {/* Capability Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Printing',
                description: 'Digital, screen, and sublimation printing for custom patterns and branding.',
                image: '/Printing.jpg',
              },
              {
                title: 'Embroidery',
                description: 'Precision embroidery with multi-head machines for logos and decorative stitching.',
                image: '/Embroidery.jpg',
              },
              {
                title: 'Hot Fix',
                description: 'Heat-set rhinestones and crystals for premium embellishment effects.',
                image: '/hot fix.jpg',
              },
              {
                title: 'Sequin/Beading',
                description: 'Hand-stitched sequins and beads for dimensional, eye-catching embellishments.',
                image: '/Sequin:Beading.jpg',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
                className="border border-gray-200 rounded-2xl overflow-hidden hover:border-gray-400 transition-all bg-white group"
              >
                {/* Image area */}
                <div className="aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Content */}
                <div className="p-5">
                  <h3 className="font-display text-lg text-accent-black mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Equipment Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-24"
        >
          {/* Decorative Divider */}
          <div className="flex items-center justify-center mb-10">
            <div className="w-16 h-px bg-accent-black/20"></div>
          </div>

          <div className="text-center mb-12">
            <p className="text-overline text-gray-400 mb-3 tracking-widest">Facilities</p>
            <h2 className="heading-secondary">Advanced Equipment</h2>
            <p className="text-gray-600 mt-4">Premium machinery for consistent quality and efficient production</p>
          </div>

          {/* Equipment Info Cards - 先放这里 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            {[
              {
                title: 'Diverse Equipment',
                description: 'Supporting multiple product categories with specialized machinery for knitwear, woven, and dresses.',
              },
              {
                title: 'Production Flexibility',
                description: 'From small batches to large orders across different garment types with consistent quality.',
              },
              {
                title: 'Quality Finishing',
                description: 'Professional equipment ensuring premium results—linking, pressing, and quality control.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
                className="border border-gray-200 p-6 text-center"
              >
                <h3 className="font-display text-lg text-accent-black mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Equipment Gallery - 图片在后 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipmentImages.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                className="group relative aspect-[4/3] overflow-hidden bg-gray-100 border border-gray-200"
              >
                <img
                  src={src}
                  alt={`Equipment ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Production Capacity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-24"
        >
          {/* Decorative Divider */}
          <div className="flex items-center justify-center mb-10">
            <div className="w-16 h-px bg-accent-black/20"></div>
          </div>

          <div className="text-center mb-12">
            <p className="text-overline text-gray-400 mb-3 tracking-widest">Scale</p>
            <h2 className="heading-secondary">Production Capacity</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: '8M+', label: 'Pieces per Year' },
              { value: '16+', label: 'Facilities' },
              { value: '1000+', label: 'Skilled Workers' },
              { value: '500', label: 'Min Order (pcs)' },
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 border border-gray-200 bg-accent-warm">
                <p className="font-display text-3xl text-accent-black mb-1">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* MOQ Note */}
          <div className="max-w-2xl mx-auto mt-8 text-center">
            <p className="text-sm text-gray-500">
              * Flexible MOQ options available for startup brands. Contact us to discuss your specific requirements.
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center p-12 bg-accent-black text-white"
        >
          <h2 className="heading-tertiary mb-4 text-white">Ready to Scale Your Production?</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            From prototype to mass production, we deliver quality at scale. Let's discuss your requirements.
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
    </div>
  );
}
