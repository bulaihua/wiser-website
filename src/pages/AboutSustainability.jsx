import { motion } from 'framer-motion';

export default function AboutSustainability() {
  return (
    <div className="pt-36 pb-20">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="heading-secondary mb-6">SUSTAINABILITY</h1>
          <p className="text-body text-gray-600 max-w-2xl mx-auto">
            We are committed to responsible manufacturing practices that respect both people and planet.
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-200 p-6 text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="font-display text-lg text-accent-black mb-2">Eco-Friendly Materials</h3>
              <p className="text-gray-600 text-sm">Organic cotton, recycled fabrics, sustainable sourcing</p>
            </div>
            <div className="border border-gray-200 p-6 text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👷</span>
              </div>
              <h3 className="font-display text-lg text-accent-black mb-2">Fair Labor Practices</h3>
              <p className="text-gray-600 text-sm">Certified workplaces, fair wages, safe conditions</p>
            </div>
            <div className="border border-gray-200 p-6 text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">♻️</span>
              </div>
              <h3 className="font-display text-lg text-accent-black mb-2">Reduced Waste</h3>
              <p className="text-gray-600 text-sm">Water conservation, recycling programs</p>
            </div>
          </div>
        </motion.div>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center my-16">
          <div className="w-16 h-px bg-accent-black/20"></div>
        </div>

        {/* Team & Community Images */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          <div>
            <img src="/images/page11_img4.png" alt="Our Happy Team" className="w-full h-80 object-contain bg-gray-50 rounded-lg mb-4" />
            <h3 className="font-display text-lg text-accent-black mb-2">Happy Work Environment</h3>
            <p className="text-gray-600 text-sm">We foster a positive workplace where every team member feels valued and motivated.</p>
          </div>
          <div>
            <img src="/images/page10_img3.png" alt="Community Volunteering" className="w-full h-80 object-contain bg-gray-50 rounded-lg mb-4" />
            <h3 className="font-display text-lg text-accent-black mb-2">Community Engagement</h3>
            <p className="text-gray-600 text-sm">Our team actively participates in volunteer activities, giving back to the communities we operate in.</p>
          </div>
        </motion.div>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center my-16">
          <div className="w-16 h-px bg-accent-black/20"></div>
        </div>
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
