import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const milestones = [
  {
    year: '2006',
    title: 'Foundation',
    description: 'Wiser Enterprise Ltd. was established in China with a vision to deliver premium knitwear manufacturing.',
  },
  {
    year: '2010',
    title: 'First Major Partnership',
    description: 'Secured partnership with Calvin Klein, marking our entry into luxury fashion manufacturing.',
  },
  {
    year: '2014',
    title: 'Southeast Asia Expansion',
    description: 'Expanded operations to Vietnam, Bangladesh, and Cambodia with new manufacturing facilities.',
  },
  {
    year: '2018',
    title: '1000+ Employees',
    description: 'Grew our skilled workforce to over 1000 professionals across all manufacturing locations.',
  },
  {
    year: '2020',
    title: 'PVH Certification',
    description: 'Achieved PVH audit certification for 4 factories, demonstrating our commitment to excellence.',
  },
  {
    year: '2024',
    title: '$40M+ Revenue Milestone',
    description: 'Reached annual revenue of $40M+ with 8M+ pieces production capacity and 500+ satisfied clients.',
  },
];

export default function Timeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-overline mb-4">Our Journey</p>
          <h2 className="heading-secondary mb-6">20 Years of Excellence</h2>
          <p className="text-body text-gray-600">
            From a small knitwear manufacturer to a trusted partner for world-renowned
            fashion brands, our journey has been defined by quality and innovation.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex gap-8 pb-12"
            >
              {/* Year */}
              <div className="flex-shrink-0 w-20 pt-1">
                <span className="font-display text-3xl text-gray-300">
                  {milestone.year}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 border-l border-gray-200 pl-8 pb-8 relative">
                <div className="absolute left-0 top-2 w-2 h-2 bg-accent-black -translate-x-1/2"></div>
                <h3 className="font-display text-xl text-accent-black mb-2">
                  {milestone.title}
                </h3>
                <p className="text-gray-600">
                  {milestone.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 text-center"
        >
          <p className="text-overline mb-6">Be Part of Our Story</p>
          <a
            href="/contact"
            className="btn-primary"
          >
            Start a Partnership
          </a>
        </motion.div>
      </div>
    </section>
  );
}
