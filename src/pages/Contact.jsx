import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function Contact() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Mail className="w-20 h-20 text-bronze-400 mx-auto mb-6" />
            <h1 className="heading-primary text-white mb-6">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Ready to start your next project? We'd love to hear from you. Send us a message
              and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="heading-secondary mb-8">Contact Information</h2>

                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-navy-50 to-slate-50 rounded-xl p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-navy-700 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-navy-800 mb-2">Email</h3>
                        <a
                          href={`mailto:${companyInfo.email}`}
                          className="text-gray-700 hover:text-navy-700 transition-colors text-lg"
                        >
                          {companyInfo.email}
                        </a>
                        <p className="text-sm text-gray-600 mt-2">
                          We'll respond within 24 hours
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-bronze-50 to-slate-50 rounded-xl p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-bronze-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-navy-800 mb-2">Global Operations</h3>
                        <p className="text-gray-700 leading-relaxed">
                          China Base: 2 owned + 10 partner factories
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-2">
                          Southeast Asia: Vietnam, Bangladesh, Cambodia
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-xl p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-navy-700 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-navy-800 mb-2">Business Hours</h3>
                        <p className="text-gray-700">
                          Monday - Friday: 9:00 AM - 6:00 PM (HKT)
                        </p>
                        <p className="text-gray-700 mt-2">
                          Saturday - Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Why Choose Us */}
                <div className="mt-12">
                  <h3 className="text-xl font-bold text-navy-800 mb-4">Why Work With Us?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-bronze-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span className="text-gray-700">20 years of industry experience</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-bronze-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span className="text-gray-700">Proven track record with luxury brands</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-bronze-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span className="text-gray-700">Certified manufacturing facilities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-bronze-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span className="text-gray-700">Flexible production capabilities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-bronze-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span className="text-gray-700">Dedicated customer support</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-navy-100">
                  <h2 className="heading-secondary mb-6">Send Us a Message</h2>

                  <form
                    action="https://formspree.io/f/YOUR_FORMSPREE_ID"
                    method="POST"
                    className="space-y-6"
                  >
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-navy-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-all"
                        placeholder="John Smith"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-navy-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-all"
                        placeholder="john@company.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-navy-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-all"
                        placeholder="Your Company Ltd."
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-navy-700 mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-all"
                      >
                        <option value="">Select a topic</option>
                        <option value="Manufacturing Inquiry">Manufacturing Inquiry</option>
                        <option value="Product Development">Product Development</option>
                        <option value="Partnership">Partnership Opportunity</option>
                        <option value="Quote Request">Request a Quote</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-navy-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows="6"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-all resize-none"
                        placeholder="Tell us about your project or inquiry..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full btn-primary text-lg py-4"
                    >
                      Send Message
                    </button>

                    <p className="text-sm text-gray-600 text-center">
                      By submitting this form, you agree to our privacy policy.
                    </p>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
