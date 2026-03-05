import { motion } from 'framer-motion';

const milestones = [
  { year: '2006', title: 'Foundation', description: 'Wiser Enterprise Ltd. was established in China.' },
  { year: '2010', title: 'First Major Partnership', description: 'Partnership with Calvin Klein marked our entry into luxury fashion.' },
  { year: '2014', title: 'Southeast Asia Expansion', description: 'Expanded to Vietnam, Bangladesh, and Cambodia.' },
  { year: '2018', title: '1000+ Employees', description: 'Grew our skilled workforce across all locations.' },
  { year: '2020', title: 'PVH Certification', description: 'Achieved PVH audit certification for 4 factories.' },
  { year: '2024', title: '$40M+ Revenue', description: 'Reached $40M+ annual revenue with 8M+ production capacity.' },
];

export default function AboutHistory() {
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
          <h1 className="heading-secondary mb-6">OUR HISTORY</h1>
          <p className="text-body text-gray-600 max-w-2xl mx-auto">
            Two decades of growth, innovation, and excellence in fashion manufacturing.
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-8 pb-8 border-b border-gray-100 last:border-0"
              >
                <div className="flex-shrink-0 w-24">
                  <span className="font-display text-4xl text-gray-300">{milestone.year}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl text-accent-black mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </motion.div>
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
