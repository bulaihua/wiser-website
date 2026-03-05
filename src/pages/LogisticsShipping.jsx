import { motion } from 'framer-motion';
import { Ship, Plane, Truck, Globe } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

export default function LogisticsShipping() {
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
          <h1 className="heading-secondary mb-6">Logistics & Shipping</h1>
          <p className="text-body text-gray-600">
            Deliver anywhere, worry-free. From factory floor to your door, we handle the complexity
            so you can focus on selling.
          </p>
        </motion.div>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center mb-10">
          <div className="w-16 h-px bg-accent-black/20"></div>
        </div>

        {/* Shipping Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <p className="text-overline text-gray-400 mb-3 tracking-widest">Options</p>
            <h2 className="heading-secondary">Shipping Methods</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <Ship className="w-8 h-8" />,
              title: 'Ocean Freight',
              description: 'Cost-effective shipping for large volumes with reliable transit times to major ports worldwide.',
              features: ['FCL & LCL options', 'Port-to-port delivery', '30-45 days to EU/US', 'Volume discounts'],
            },
            {
              icon: <Plane className="w-8 h-8" />,
              title: 'Air Freight',
              description: 'Express delivery for urgent orders with priority handling and real-time tracking.',
              features: ['3-7 days delivery', 'Door-to-door service', 'Real-time tracking', 'Priority handling'],
            },
            {
              icon: <Truck className="w-8 h-8" />,
              title: 'Ground Transport',
              description: 'Efficient inland transportation connecting factories to ports and final destinations.',
              features: ['Factory to port', 'Last-mile delivery', 'Cross-border trucking', 'Flexible scheduling'],
            },
          ].map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="border border-gray-200 p-8 hover:border-gray-400 transition-colors flex flex-col h-full"
            >
              <div className="w-14 h-14 bg-accent-black rounded-full flex items-center justify-center text-white mx-auto mb-4">
                {method.icon}
              </div>
              <h3 className="font-display text-xl text-accent-black mb-3 text-center">{method.title}</h3>
              <p className="text-gray-600 text-base text-center leading-relaxed mb-4 flex-grow">{method.description}</p>
              <ul className="space-y-2 mt-auto">
                {method.features.map((feature, i) => (
                  <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent-black rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
          </div>
        </motion.div>

        {/* Value-Added Services */}
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
            <p className="text-overline text-gray-400 mb-3 tracking-widest">Beyond</p>
            <h2 className="heading-secondary">Value-Added Services</h2>
            <p className="text-gray-600">Beyond simple shipping</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: 'Warehousing',
                description: 'Short and long-term storage options with inventory management.',
              },
              {
                title: 'Customs Clearance',
                description: 'Expert handling of documentation and regulatory requirements.',
              },
              {
                title: 'Cargo Insurance',
                description: 'Comprehensive coverage for peace of mind during transit.',
              },
              {
                title: 'Shipment Tracking',
                description: 'Real-time visibility of your cargo throughout the journey.',
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.05 }}
                className="text-center p-6 border border-gray-200"
              >
                <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <img
                    src="/images/yarn-ball-logo.png"
                    alt="Wiser"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="font-display text-lg text-accent-black mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto mb-20"
        >
          {/* Decorative Divider */}
          <div className="flex items-center justify-center mb-10">
            <div className="w-16 h-px bg-accent-black/20"></div>
          </div>

          <div className="text-center mb-16">
            <p className="text-overline text-gray-400 mb-3 tracking-widest">Process</p>
            <h2 className="heading-secondary">Shipping Process</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { step: '01', title: 'Ready', desc: 'Goods inspected & packed' },
              { step: '02', title: 'Document', desc: 'Customs paperwork prepared' },
              { step: '03', title: 'Transit', desc: 'Cargo in transport' },
              { step: '04', title: 'Clear', desc: 'Customs clearance' },
              { step: '05', title: 'Deliver', desc: 'Final mile delivery' },
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="w-14 h-14 bg-accent-black rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <span className="text-base font-medium">{item.step}</span>
                </div>
                <h3 className="font-display text-base text-accent-black mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
                {index < 4 && (
                  <div className="hidden md:block absolute top-7 left-[60%] w-[80%] border-t border-dashed border-gray-300"></div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Trade Expertise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-4xl mx-auto mb-20"
        >
          {/* Decorative Divider */}
          <div className="flex items-center justify-center mb-10">
            <div className="w-16 h-px bg-accent-black/20"></div>
          </div>

          <div className="text-center mb-12">
            <p className="text-overline text-gray-400 mb-3 tracking-widest">Expertise</p>
            <h2 className="heading-secondary">Trade Expertise</h2>
            <p className="text-gray-600">Navigating global trade complexities</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Incoterms',
                items: ['FOB', 'CIF', 'DDP', 'EXW'],
                description: 'Flexible trade terms to suit your business model',
              },
              {
                title: 'Certifications',
                items: ['CE', 'FDA', 'OEKO-TEX', 'GOTS'],
                description: 'Documentation for market-specific requirements',
              },
              {
                title: 'Compliance',
                items: ['Customs', 'Quota', 'Tariff', 'Regulations'],
                description: 'Up-to-date knowledge of trade policies',
              },
            ].map((topic, index) => (
              <div key={index} className="border border-gray-200 p-6 text-center">
                <h3 className="font-display text-lg text-accent-black mb-3">{topic.title}</h3>
                <div className="flex flex-wrap justify-center gap-2 mb-3">
                  {topic.items.map((item, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-gray-100 text-accent-black">
                      {item}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-600">{topic.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center p-12 bg-accent-black text-white"
        >
          <h2 className="heading-tertiary mb-4 text-white">Ready to Ship?</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Discuss your logistics requirements and get a customized shipping solution for your orders.
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
