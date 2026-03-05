import { motion } from 'framer-motion';
import { Shield, FileCheck } from 'lucide-react';
import { certifications } from '../data/companyData';
import { ArrowRight } from 'lucide-react';

export default function QualityAssurance() {
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
          <h1 className="heading-secondary mb-6">Quality Assurance</h1>
          <p className="text-body text-gray-600">
            Quality you can trust, transparency you can verify. Every product inspected,
            every standard met, every shipment on time.
          </p>
        </motion.div>

        {/* Certifications List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          {/* Decorative Divider */}
          <div className="flex items-center justify-center mb-10">
            <div className="w-16 h-px bg-accent-black/20"></div>
          </div>

          <div className="text-center mb-12">
            <h2 className="heading-secondary">Our Certifications</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="border border-gray-200 p-8 hover:border-gray-400 transition-colors text-center"
              >
                <div className="h-20 flex items-center justify-center mx-auto mb-4">
                  <img
                    src={cert.logo}
                    alt={cert.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <h3 className="font-display text-lg text-accent-black mb-3">{cert.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* QC Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20"
        >
          {/* Decorative Divider */}
          <div className="flex items-center justify-center mb-10">
            <div className="w-16 h-px bg-accent-black/20"></div>
          </div>

          <div className="text-center mb-12">
            <p className="text-overline text-gray-400 mb-3 tracking-widest">Process</p>
            <h2 className="heading-secondary">Quality Control Process</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Trained QC team across our facilities. We catch issues early and
              ensure consistent quality that third-party inspections can't match.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                step: '01',
                title: 'Material Inspection',
                description: 'All incoming materials are inspected for quality, color matching, and specifications.',
              },
              {
                step: '02',
                title: 'In-Process QC',
                description: 'Quality checkpoints at every stage of production for early issue detection.',
              },
              {
                step: '03',
                title: 'Final Inspection',
                description: 'Comprehensive review of finished products against specifications and standards.',
              },
              {
                step: '04',
                title: 'Pre-Shipment Check',
                description: 'Final verification before packing to ensure customer satisfaction.',
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex-shrink-0">
                  <span className="font-display text-4xl text-gray-200">
                    {item.step}
                  </span>
                </div>
                <div className="pb-6 border-l border-gray-200 pl-6 flex-1">
                  <h3 className="font-display text-lg text-accent-black mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Commitment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          {/* Decorative Divider */}
          <div className="flex items-center justify-center mb-10">
            <div className="w-16 h-px bg-accent-black/20"></div>
          </div>

          <div className="text-center mb-12">
            <p className="text-overline text-gray-400 mb-3 tracking-widest">Commitment</p>
            <h2 className="heading-secondary">Our Commitment</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Beyond certifications, we uphold the highest standards in everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            {
              icon: <Shield className="w-8 h-8" />,
              title: 'Compliance Standards',
              description: 'We adhere to international labor and safety standards in all our facilities.',
            },
            {
              icon: <FileCheck className="w-8 h-8" />,
              title: 'Traceability',
              description: 'Full traceability from raw materials to finished goods for complete transparency.',
            },
          ].map((commitment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="flex gap-4 p-6 border border-gray-200"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-accent-black rounded-full flex items-center justify-center text-white">
                  {commitment.icon}
                </div>
              </div>
              <div>
                <h3 className="font-display text-lg text-accent-black mb-2">{commitment.title}</h3>
                <p className="text-gray-600 text-sm">{commitment.description}</p>
              </div>
            </motion.div>
          ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 text-center p-12 bg-accent-black text-white"
        >
          <h2 className="heading-tertiary mb-4 text-white">Quality You Can Trust</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Our certifications and processes speak for our commitment to excellence.
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
