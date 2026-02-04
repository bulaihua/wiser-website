import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function Contact() {
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
          <p className="text-overline mb-4">Contact Us</p>
          <h1 className="heading-secondary mb-6">Get in Touch</h1>
          <p className="text-body text-gray-600">
            Ready to start your next project? We'd love to hear from you.
            Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="heading-tertiary mb-8">Contact Information</h2>

            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent-black rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-medium text-accent-black mb-1">Email</h3>
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="text-gray-600 hover:text-accent-black transition-colors"
                  >
                    {companyInfo.email}
                  </a>
                  <p className="text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent-black rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-medium text-accent-black mb-1">Global Operations</h3>
                  <p className="text-gray-600">China: 2 owned + 10 partner factories</p>
                  <p className="text-gray-600 mt-1">Southeast Asia: Vietnam, Bangladesh, Cambodia</p>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="border-t border-gray-200 pt-8">
              <h3 className="font-display text-lg text-accent-black mb-6">Why Work With Us?</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent-black rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-600">20 years of industry experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent-black rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-600">Proven track record with luxury brands</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent-black rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-600">Certified manufacturing facilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent-black rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-600">Flexible production capabilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent-black rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-600">Dedicated customer support</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h2 className="heading-tertiary mb-8">Send Us a Message</h2>

              <form
                action="https://formspree.io/f/xpqrpzel"
                method="POST"
                className="space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-accent-black mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-accent-black transition-colors"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-accent-black mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-accent-black transition-colors"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-accent-black mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-accent-black transition-colors"
                    placeholder="Your Company Ltd."
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-accent-black mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-accent-black transition-colors bg-white"
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
                  <label htmlFor="message" className="block text-sm font-medium text-accent-black mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-accent-black transition-colors resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent-black text-white py-4 font-medium hover:bg-accent-charcoal transition-colors"
                >
                  Send Message
                </button>

                <p className="text-sm text-gray-500 text-center">
                  By submitting this form, you agree to our privacy policy.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
