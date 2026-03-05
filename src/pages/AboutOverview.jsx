import { motion } from 'framer-motion';
import { companyInfo } from '../data/companyData';

export default function AboutOverview() {
  return (
    <div className="pt-36 pb-20">
      <div className="container-custom">
        {/* Hero - WHO WE ARE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="heading-secondary mb-6">WHO WE ARE</h1>
          <p className="text-body text-gray-600 max-w-2xl mx-auto">
            A global fashion group delivering complete solutions from design concept to final delivery.
          </p>
        </motion.div>

        {/* Section 1: Who We Are */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16"
        >
          <div>
            <p className="text-body text-gray-600 leading-relaxed mb-4">
              {companyInfo.description}
            </p>
            <p className="text-body text-gray-600 leading-relaxed mb-4">
              Founded in {companyInfo.established}, we've grown from a small knitwear manufacturer into a comprehensive fashion production powerhouse. Our commitment to quality, innovation, and sustainability has earned us the trust of world-renowned fashion brands.
            </p>
            <p className="text-body text-gray-600 leading-relaxed">
              With manufacturing facilities across China and Southeast Asia, we offer our clients scalable production solutions without compromising on craftsmanship or ethical standards.
            </p>
          </div>

          {/* Key Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-accent-warm p-6 text-center">
              <p className="font-display text-3xl text-accent-black mb-1">{companyInfo.established}</p>
              <p className="text-sm text-gray-600">Founded</p>
            </div>
            <div className="bg-accent-warm p-6 text-center">
              <p className="font-display text-3xl text-accent-black mb-1">{companyInfo.employees}</p>
              <p className="text-sm text-gray-600">Employees</p>
            </div>
            <div className="bg-accent-warm p-6 text-center">
              <p className="font-display text-3xl text-accent-black mb-1">{companyInfo.annualProduction}</p>
              <p className="text-sm text-gray-600">Annual Capacity</p>
            </div>
            <div className="bg-accent-warm p-6 text-center">
              <p className="font-display text-3xl text-accent-black mb-1">{companyInfo.annualRevenue}</p>
              <p className="text-sm text-gray-600">Annual Revenue</p>
            </div>
          </div>
        </motion.div>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center my-16">
          <div className="w-16 h-px bg-accent-black/20"></div>
        </div>

        {/* Section 2: Our Purpose */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="heading-secondary mb-4">Our Purpose</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Why we exist</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent-black rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="font-display text-lg text-accent-black mb-2">Empowering Brands</h3>
              <p className="text-gray-600 text-sm">Helping brands realize their vision with end-to-end solutions from concept to shelf</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent-black rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌍</span>
              </div>
              <h3 className="font-display text-lg text-accent-black mb-2">Sustainable Fashion</h3>
              <p className="text-gray-600 text-sm">Driving sustainable fashion manufacturing with responsibility to environment and society</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent-black rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="font-display text-lg text-accent-black mb-2">Partnership First</h3>
              <p className="text-gray-600 text-sm">Putting partnerships first, growing together with our clients</p>
            </div>
          </div>
        </motion.div>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center my-16">
          <div className="w-16 h-px bg-accent-black/20"></div>
        </div>

        {/* Section 3: Our Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="heading-secondary mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Guiding principles that define us</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex gap-4 p-6 border border-gray-200">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-accent-warm rounded-full flex items-center justify-center">
                  <span className="text-2xl">💎</span>
                </div>
              </div>
              <div>
                <h3 className="font-display text-lg text-accent-black mb-1">Quality</h3>
                <p className="text-gray-600 text-sm">Excellence in every detail, never compromising on craftsmanship</p>
              </div>
            </div>

            <div className="flex gap-4 p-6 border border-gray-200">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-accent-warm rounded-full flex items-center justify-center">
                  <span className="text-2xl">🔬</span>
                </div>
              </div>
              <div>
                <h3 className="font-display text-lg text-accent-black mb-1">Innovation</h3>
                <p className="text-gray-600 text-sm">Continuously innovating, embracing new technologies and methods</p>
              </div>
            </div>

            <div className="flex gap-4 p-6 border border-gray-200">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-accent-warm rounded-full flex items-center justify-center">
                  <span className="text-2xl">🌱</span>
                </div>
              </div>
              <div>
                <h3 className="font-display text-lg text-accent-black mb-1">Sustainability</h3>
                <p className="text-gray-600 text-sm">Environmental responsibility, sustainable production practices</p>
              </div>
            </div>

            <div className="flex gap-4 p-6 border border-gray-200">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-accent-warm rounded-full flex items-center justify-center">
                  <span className="text-2xl">🤝</span>
                </div>
              </div>
              <div>
                <h3 className="font-display text-lg text-accent-black mb-1">Integrity</h3>
                <p className="text-gray-600 text-sm">Honesty and transparency in everything we do</p>
              </div>
            </div>
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
        transition={{ duration: 0.6, delay: 0.4 }}
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
