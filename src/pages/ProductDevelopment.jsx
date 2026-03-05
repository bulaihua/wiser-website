import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function ProductDevelopment() {
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
          <h1 className="heading-secondary mb-6">Sourcing & Development</h1>
          <p className="text-body text-gray-600">
            Source smarter, develop faster. With 20 years of expertise and a global sourcing network,
            we handle the complexity—so you can focus on your brand.
          </p>
        </motion.div>

        {/* Section 1: Material Sourcing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-24"
        >
          {/* Decorative Divider */}
          <div className="flex items-center justify-center mb-10">
            <div className="w-16 h-px bg-accent-black/20"></div>
          </div>

          <div className="text-center mb-12">
            <p className="text-overline text-gray-400 mb-3 tracking-widest">Sourcing</p>
            <h2 className="heading-secondary">Material Sourcing</h2>
            <p className="text-gray-600 mt-4">
              Access to premium materials through our global supplier network
            </p>
          </div>

          {/* Material Sourcing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Fabric & Yarn Sourcing',
                description: 'Access to a wide range of materials from basic cottons to luxury cashmeres, with established relationships in China, Italy, and Japan.',
                highlights: ['Premium yarns', 'Sustainable options', 'Competitive pricing', 'Quality assurance'],
                image: '/sourcing-fabric-yarn.jpg',
              },
              {
                title: 'Sustainable Materials',
                description: 'Growing selection of eco-friendly and certified materials including organic cotton, recycled fibers, and low-impact dyes.',
                highlights: ['GOTS certified', 'Recycled polyester', 'Organic linen', 'B-Corp Tencel'],
                image: '/sourcing-sustainable.jpg',
              },
              {
                title: 'Trims & Accessories',
                description: 'Complete sourcing for buttons, zippers, labels, packaging and all the finishing touches that make your product complete.',
                highlights: ['Custom trims', 'Private labeling', 'Packaging solutions', 'Eco-options'],
                image: '/sourcing-trims.jpg',
              },
              {
                title: 'Global Network',
                description: 'Our supplier network spans multiple continents, ensuring reliable sourcing and backup options for critical materials.',
                highlights: ['Multiple regions', 'Backup suppliers', 'Risk management', 'Consistent quality'],
                image: '/sourcing-global.jpg',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="border border-gray-200 rounded-2xl overflow-hidden hover:border-gray-400 transition-all bg-white group"
              >
                {/* Image area */}
                <div className="aspect-[16/9] overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-lg text-accent-black mb-2">{item.title}</h3>
                  <div className="w-12 h-px bg-accent-black/20 mb-3"></div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.highlights.map((highlight, i) => (
                      <span key={i} className="text-xs px-3 py-1 bg-accent-warm/30 text-accent-black">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Section 2: Development Stages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-24"
        >
          {/* Decorative Divider */}
          <div className="flex items-center justify-center mb-10">
            <div className="w-16 h-px bg-accent-black/20"></div>
          </div>

          <div className="text-center mb-12">
            <p className="text-overline text-gray-400 mb-3 tracking-widest">Process</p>
            <h2 className="heading-secondary">Development Stages</h2>

            {/* Transition Text */}
            <div className="max-w-2xl mx-auto mt-6 p-6 bg-accent-warm/10 rounded-xl border border-accent-warm/20">
              <p className="text-sm text-accent-black leading-relaxed">
                <span className="font-medium">Once your materials are selected,</span> our development process begins. You can use our full end-to-end service or choose specific stages—we adapt to your needs.
              </p>
            </div>
          </div>

          {/* Development Stages Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                number: '01',
                title: 'Material Selection',
                description: 'Get the right fabric and trims at the right price—our sourcing expertise ensures quality and cost efficiency.',
                image: '/dev-material-selection.jpg',
              },
              {
                number: '02',
                title: 'Proto Sample',
                description: 'See your design come to life quickly—fast prototyping to validate your concept before full commitment.',
                image: '/dev-sampling.jpg',
              },
              {
                number: '03',
                title: 'Fitting & Adjustment',
                description: 'Eliminate costly mistakes—professional fitting catches issues early, ensuring perfect results.',
                image: '/dev-fitting.jpg',
              },
              {
                number: '04',
                title: 'Ready for Production',
                description: 'Minimize risk, maximize confidence—your approved sample guarantees production meets your expectations.',
                image: '/dev-refinement.jpg',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="border border-gray-200 rounded-2xl overflow-hidden hover:border-gray-400 transition-all bg-white group"
              >
                {/* Image area */}
                <div className="aspect-[16/9] overflow-hidden bg-gray-100 relative">
                  {/* Number overlay */}
                  <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    <span className="text-overline text-xs text-accent-black/70">{item.number}</span>
                  </div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-lg text-accent-black mb-2">{item.title}</h3>
                  <div className="w-12 h-px bg-accent-black/20 mb-3"></div>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Section 3: Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Decorative Divider */}
          <div className="flex items-center justify-center mb-10">
            <div className="w-16 h-px bg-accent-black/20"></div>
          </div>

          <div className="text-center mb-12">
            <p className="text-overline text-gray-400 mb-3 tracking-widest">Timeline</p>
            <h2 className="heading-secondary">Development Timeline</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: 'First Sample', time: '7-10 days', detail: 'Initial prototype based on your specs' },
              { label: 'Fitting & Adjustment', time: '5-7 days', detail: 'Revisions per your feedback' },
              { label: 'Final Sample', time: '7-10 days', detail: 'Production-ready sample' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="text-center p-8 bg-white border border-gray-200 rounded-2xl hover:border-accent-black/30 hover:shadow-lg transition-all"
              >
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">{item.label}</p>
                <p className="font-display text-2xl text-accent-black mb-2">{item.time}</p>
                <p className="text-sm text-gray-600">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 text-center p-12 bg-accent-black text-white"
        >
          <h2 className="heading-tertiary mb-4 text-white">Ready to Develop Your Product?</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Share your ideas with us and let's create something exceptional together.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-accent-black px-8 py-4 font-medium hover:bg-gray-100 transition-colors"
          >
            Start a Project
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
