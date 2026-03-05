import { motion } from 'framer-motion';
import { globalFootprint } from '../data/companyData';

export default function AboutGlobal() {
  return (
    <div className="pt-36 pb-20">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-overline mb-4">Our Story</p>
          <h1 className="text-display mb-6">GLOBAL REACH</h1>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="heading-secondary mb-6">Global Reach</h2>
          <p className="text-body text-gray-600 leading-relaxed mb-12 max-w-3xl">
            Our strategic manufacturing locations across China and Southeast Asia enable us to serve
            clients worldwide with efficiency and flexibility.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-gray-200 p-8">
              <h3 className="font-display text-2xl text-accent-black mb-2">China Base</h3>
              <p className="text-gray-500 mb-6">Since 2006</p>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wide">Manufacturing</p>
                  <p className="text-accent-black font-medium">{globalFootprint.china.factories}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wide">Annual Capacity</p>
                  <p className="text-3xl font-display text-accent-black">{globalFootprint.china.capacity}</p>
                </div>
              </div>
            </div>
            <div className="border border-gray-200 p-8">
              <h3 className="font-display text-2xl text-accent-black mb-2">Southeast Asia Base</h3>
              <p className="text-gray-500 mb-6">Since {globalFootprint.southeastAsia.established}</p>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wide">Locations</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {globalFootprint.southeastAsia.locations.map((loc, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-100 text-accent-black text-sm">
                        {loc}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wide">Annual Capacity</p>
                  <p className="text-3xl font-display text-accent-black">{globalFootprint.southeastAsia.capacity}</p>
                  <p className="text-sm text-gray-500 mt-1">{globalFootprint.southeastAsia.certifiedFactories}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-20 text-center p-12 bg-accent-warm"
      >
        <h2 className="heading-tertiary mb-4">Let's Work Together</h2>
        <p className="text-gray-600 mb-8">
          Join the list of prestigious brands that trust Wiser Enterprise.
        </p>
        <a href="/contact" className="btn-primary">Get in Touch</a>
      </motion.div>
    </div>
  );
}
