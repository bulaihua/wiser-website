import { motion } from 'framer-motion';
import { companyInfo, brands } from '../data/companyData';

export default function About() {
  return (
    <div className="pt-36 pb-20">
      <div className="container-custom">
        {/* Header - WHO WE ARE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-display mb-6">WHO WE ARE</h1>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl"
        >
          <h2 className="heading-secondary mb-6">Wiser Enterprise Ltd.</h2>
          <p className="text-body text-gray-600 leading-relaxed mb-6">
            {companyInfo.description}
          </p>
          <p className="text-body text-gray-600 leading-relaxed mb-6">
            Founded in {companyInfo.established}, we've grown from a small knitwear manufacturer into a comprehensive fashion production powerhouse. Our commitment to quality, innovation, and sustainability has earned us the trust of world-renowned fashion brands.
          </p>
          <p className="text-body text-gray-600 leading-relaxed">
            With manufacturing facilities across China and Southeast Asia, we offer our clients scalable production solutions without compromising on craftsmanship or ethical standards.
          </p>
        </motion.div>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center my-16">
          <div className="w-16 h-px bg-accent-black/20"></div>
        </div>

        {/* Key Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          <div className="text-center">
            <p className="font-display text-4xl text-accent-black mb-2">{companyInfo.established}</p>
            <p className="text-sm text-gray-600">Founded</p>
          </div>
          <div className="text-center">
            <p className="font-display text-4xl text-accent-black mb-2">{companyInfo.employees}</p>
            <p className="text-sm text-gray-600">Employees</p>
          </div>
          <div className="text-center">
            <p className="font-display text-4xl text-accent-black mb-2">{companyInfo.annualProduction}</p>
            <p className="text-sm text-gray-600">Annual Capacity</p>
          </div>
          <div className="text-center">
            <p className="font-display text-4xl text-accent-black mb-2">{companyInfo.annualRevenue}</p>
            <p className="text-sm text-gray-600">Annual Revenue</p>
          </div>
        </motion.div>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center my-16">
          <div className="w-16 h-px bg-accent-black/20"></div>
        </div>

        {/* Trusted By */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-overline text-gray-400 mb-8 tracking-widest">Trusted By</p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {brands.map((brand, index) => (
              <div key={index} className="text-accent-black font-display text-xl">
                {brand.name}
              </div>
            ))}
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
