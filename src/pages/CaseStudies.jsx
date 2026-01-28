import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Leaf, Gem } from 'lucide-react';
import { caseStudies } from '../data/companyData';

export default function CaseStudies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getIcon = (category) => {
    switch (category) {
      case 'Mass Production':
        return Briefcase;
      case 'Sustainability':
        return Leaf;
      case 'Premium Products':
        return Gem;
      default:
        return Briefcase;
    }
  };

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
            <Briefcase className="w-20 h-20 text-bronze-400 mx-auto mb-6" />
            <h1 className="heading-primary text-white mb-6">
              Client Success Stories
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Discover how we've helped leading fashion brands achieve their manufacturing goals
              with quality, reliability, and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section ref={ref} className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-12">
            {caseStudies.map((study, index) => {
              const Icon = getIcon(study.category);
              return (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-gradient-to-br from-slate-50 to-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-navy-100"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3">
                    {/* Image/Icon Section */}
                    <div className="bg-gradient-to-br from-navy-700 to-navy-800 p-12 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-32 h-32 bg-bronze-400 rounded-full flex items-center justify-center mx-auto mb-6">
                          <Icon className="w-16 h-16 text-white" />
                        </div>
                        <span className="inline-block px-4 py-2 bg-bronze-500 text-white rounded-full text-sm font-medium">
                          {study.category}
                        </span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="lg:col-span-2 p-8 lg:p-12">
                      <div className="mb-6">
                        <h3 className="heading-tertiary mb-3">{study.title}</h3>
                        <p className="text-bronze-600 font-medium mb-4">{study.client}</p>
                        <p className="text-body text-gray-700 leading-relaxed">
                          {study.description}
                        </p>
                      </div>

                      <div className="border-t-2 border-navy-100 pt-6">
                        <h4 className="font-semibold text-navy-800 mb-4">Key Highlights</h4>
                        <ul className="space-y-3">
                          {study.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="w-2 h-2 bg-bronze-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                              <span className="text-gray-700">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="heading-secondary mb-12 text-center">Our Process</h2>

            <div className="space-y-8">
              {[
                {
                  step: '01',
                  title: 'Consultation',
                  description: 'We understand your requirements, target market, and quality expectations.'
                },
                {
                  step: '02',
                  title: 'Design & Development',
                  description: 'Our team creates samples and prototypes that meet your exact specifications.'
                },
                {
                  step: '03',
                  title: 'Production',
                  description: 'We manufacture your products with stringent quality control at every stage.'
                },
                {
                  step: '04',
                  title: 'Delivery',
                  description: 'On-time global delivery with full documentation and traceability.'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-6"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-navy-700 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {item.step}
                  </div>
                  <div className="flex-grow bg-white rounded-xl p-6 shadow-md">
                    <h3 className="text-xl font-bold text-navy-800 mb-2">{item.title}</h3>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-bronze-500 to-bronze-600">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-navy-900 mb-8">
              Let's discuss how we can bring your vision to life with our manufacturing expertise.
            </p>
            <a href="/contact" className="btn-primary text-lg px-10 py-4 inline-block">
              Start a Conversation
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
