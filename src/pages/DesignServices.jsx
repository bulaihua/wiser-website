import { motion } from 'framer-motion';
import { Palette, TrendingUp, Lightbulb, Users } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

export default function DesignServices() {
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
          <h1 className="heading-secondary mb-6">Concept Studio</h1>
          <p className="text-body text-gray-600">
            More than just manufacturing—we are your creative partner in bringing
            fashion concepts to life with expert design guidance.
          </p>
        </motion.div>

        {/* Hero Image/Feature - Remove, using color cards as hero visual */}

        {/* Color Trends Section */}
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

          <div className="text-center mb-10">
            <p className="text-overline text-gray-400 mb-3 tracking-widest">Trend Forecast</p>
            <h2 className="heading-secondary">Seasonal Color Palette</h2>
            <p className="text-gray-600 mt-4">
              Curated trending colors for the upcoming season
            </p>
          </div>

          {/* Color Swatches */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {[
              { name: 'Serenity Blue', hex: '#91A8B0', pantone: 'PANTONE 15-4020' },
              { name: 'Rose Quartz', hex: '#F7CAC9', pantone: 'PANTONE 13-1520' },
              { name: 'Iced Coffee', hex: '#B08968', pantone: 'PANTONE 17-1220' },
              { name: 'Peach Fuzz', hex: '#FFBE98', pantone: 'PANTONE 13-1023' },
              { name: 'Lemon Zest', hex: '#F5E063', pantone: 'PANTONE 14-0848' },
              { name: 'Slate Gray', hex: '#708090', pantone: 'PANTONE 17-4402' },
            ].map((color, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                className="group"
              >
                <div className="w-24 md:w-32">
                  {/* Color swatch */}
                  <div
                    className="aspect-square rounded-2xl shadow-lg mb-3 group-hover:shadow-xl transition-shadow relative overflow-hidden"
                    style={{ backgroundColor: color.hex }}
                  >
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent"></div>
                  </div>
                  {/* Color name */}
                  <p className="text-xs text-gray-500 text-center leading-tight">{color.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {[
            {
              icon: <TrendingUp className="w-8 h-8" />,
              title: 'Trend Analysis',
              description: 'We monitor global fashion trends and provide insights on upcoming styles, colors, and materials that align with your brand identity.',
              image: '/design-moodboard-edit.jpg',
            },
            {
              icon: <Lightbulb className="w-8 h-8" />,
              title: 'Concept Development',
              description: 'From mood boards to technical sketches, we help transform your initial ideas into concrete, production-ready designs.',
              image: '/design-moodboard-edit.jpg',
            },
            {
              icon: <Users className="w-8 h-8" />,
              title: 'Brand Collaboration',
              description: 'We work as an extension of your design team, understanding your aesthetic and ensuring consistency across all collections.',
              image: '/design-moodboard-edit.jpg',
            },
            {
              icon: <Palette className="w-8 h-8" />,
              title: 'Material Recommendations',
              description: 'Expert guidance on fabric, yarn, and trim selections that balance quality, cost, and design vision.',
              image: '/design-moodboard-edit.jpg',
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="border border-gray-200 rounded-2xl overflow-hidden hover:border-gray-400 transition-all bg-white group"
            >
              {/* Image area */}
              <div className="aspect-[4/5] overflow-hidden bg-gray-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-lg text-accent-black mb-2">{service.title}</h3>
                <div className="w-12 h-px bg-accent-black/20 mb-3"></div>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process - The Creative Journey */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <p className="text-overline text-gray-400 mb-3 tracking-widest">Our Process</p>
            <h2 className="heading-secondary">The Creative Journey</h2>
            <p className="text-gray-600 mt-2">
              From initial vision to production-ready designs
            </p>
          </div>

          {/* Horizontal Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                number: '01',
                title: 'Discovery',
                description: 'Understanding your brand, market, and aesthetic vision.',
              },
              {
                number: '02',
                title: 'Research & Trends',
                description: 'Analyzing global trends and forecasting upcoming styles.',
              },
              {
                number: '03',
                title: 'Concept Creation',
                description: 'Mood boards, color stories, and creative direction.',
              },
              {
                number: '04',
                title: 'Design Development',
                description: 'Technical specs and production-ready solutions.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="group"
              >
                <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-accent-black/50 hover:shadow-lg transition-all h-full">
                  <div className="text-2xl font-display text-accent-black/40 mb-3">{item.number}</div>
                  <h3 className="font-display text-base text-accent-black mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
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
          className="text-center p-12 bg-accent-black text-white"
        >
          <h2 className="heading-tertiary mb-4 text-white">Ready to Create Together?</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Let us bring your vision to life with our expert design services.
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
