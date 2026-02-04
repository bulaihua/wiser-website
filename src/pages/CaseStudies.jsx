import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { caseStudies } from '../data/companyData';

export default function CaseStudies() {
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
          <p className="text-overline mb-4">Our Work</p>
          <h1 className="heading-secondary mb-6">Case Studies</h1>
          <p className="text-body text-gray-600">
            Discover how we've helped leading fashion brands achieve their manufacturing goals
            with quality, reliability, and innovation.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="space-y-12 max-w-5xl mx-auto mb-20">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border border-gray-200 rounded-lg overflow-hidden hover:border-gray-400 transition-colors"
            >
              <div className="grid grid-cols-1 lg:grid-cols-5">
                {/* Category Badge */}
                <div className="lg:col-span-1 bg-accent-black p-6 flex flex-col justify-center items-center text-center">
                  <span className="text-white/60 text-sm uppercase tracking-wide mb-2">Category</span>
                  <span className="text-white font-display text-lg">{study.category}</span>
                </div>

                {/* Content */}
                <div className="lg:col-span-4 p-8">
                  <div className="mb-6">
                    <p className="text-overline text-gray-500 mb-2">{study.client}</p>
                    <h3 className="heading-tertiary mb-3">{study.title}</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {study.description}
                    </p>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <h4 className="text-sm uppercase tracking-wide text-gray-500 mb-4">Key Highlights</h4>
                    <ul className="space-y-3">
                      {study.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 bg-accent-black rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-gray-600">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="heading-secondary mb-12 text-center">Our Process</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'We understand your requirements, target market, and quality expectations.',
              },
              {
                step: '02',
                title: 'Design & Development',
                description: 'Our team creates samples and prototypes that meet your exact specifications.',
              },
              {
                step: '03',
                title: 'Production',
                description: 'We manufacture your products with stringent quality control at every stage.',
              },
              {
                step: '04',
                title: 'Delivery',
                description: 'On-time global delivery with full documentation and traceability.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="border border-gray-200 rounded-lg p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="font-display text-4xl text-gray-200">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="font-display text-lg text-accent-black mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 text-center p-12 bg-accent-warm"
        >
          <h2 className="heading-tertiary mb-4">Ready to Start Your Project?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Let's discuss how we can bring your vision to life with our manufacturing expertise.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent-black text-white px-8 py-4 font-medium hover:bg-accent-charcoal transition-colors"
          >
            Start a Conversation
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
