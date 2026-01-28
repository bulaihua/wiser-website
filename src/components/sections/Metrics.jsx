import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { companyInfo } from '../../data/companyData';

const metrics = [
  {
    value: companyInfo.established,
    label: 'Established',
    description: 'Years of industry excellence'
  },
  {
    value: companyInfo.annualRevenue,
    label: 'Annual Revenue',
    description: 'Supplying top global brands'
  },
  {
    value: companyInfo.annualProduction,
    label: 'Annual Production',
    description: 'Pieces delivered worldwide'
  },
  {
    value: companyInfo.employees,
    label: 'Team Members',
    description: 'Skilled professionals'
  }
];

export default function Metrics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section ref={ref} className="bg-white section-padding">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-gray-50 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-5xl md:text-6xl font-bold text-navy-900 mb-3">
                {metric.value}
              </div>
              <h3 className="text-xl font-semibold text-navy-700 mb-2">
                {metric.label}
              </h3>
              <p className="text-gray-600">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
