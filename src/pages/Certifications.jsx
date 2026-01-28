import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { MapPin, Factory } from 'lucide-react';
import { certifications, globalFootprint } from '../data/companyData';

const galleryImages = [
  {
    src: '/images/factory/factory_image_1.jpg',
    title: 'Production Floor',
    location: 'China Base',
  },
  {
    src: '/images/factory/factory_image_2.png',
    title: 'Quality Control',
    location: 'Vietnam Facility',
  },
  {
    src: '/images/factory/factory_image_3.jpg',
    title: 'Knitting Workshop',
    location: 'China Base',
  },
  {
    src: '/images/factory/factory_image_4.jpg',
    title: 'Sample Room',
    location: 'Bangladesh',
  },
  {
    src: '/images/factory/factory_image_5.jpg',
    title: 'Finishing Area',
    location: 'Cambodia',
  },
  {
    src: '/images/factory/factory_image_6.jpg',
    title: 'Storage Facility',
    location: 'China Base',
  },
  {
    src: '/images/factory/factory_image_7.png',
    title: 'Packaging Area',
    location: 'Vietnam',
  },
  {
    src: '/images/factory/factory_image_8.png',
    title: 'Shipping Department',
    location: 'China Base',
  },
];

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="pt-32 pb-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-20"
      >
        <p className="text-overline mb-4">Our Facilities & Standards</p>
        <h1 className="heading-secondary mb-6">Factories & Certifications</h1>
        <p className="text-body text-gray-600">
          Our state-of-the-art manufacturing facilities across China and Southeast Asia,
          certified to the highest international standards.
        </p>
      </motion.div>

      {/* Factory Gallery */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-20"
      >
        <div className="text-center mb-12">
          <p className="text-overline mb-4">Inside Our Facilities</p>
          <h2 className="heading-tertiary">Factory Gallery</h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative aspect-[4/3] overflow-hidden bg-gray-100"
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
                hoveredIndex === index ? 'opacity-100' : 'opacity-0'
              }`}></div>

              {/* Content */}
              <div className={`absolute bottom-0 left-0 right-0 p-4 transition-transform duration-300 ${
                hoveredIndex === index ? 'translate-y-0' : 'translate-y-4'
              }`}>
                <h3 className="font-display text-lg text-white mb-1">{image.title}</h3>
                <div className="flex items-center gap-2 text-gray-300 text-xs">
                  <MapPin className="w-3 h-3" />
                  <span>{image.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '16+', label: 'Facilities' },
            { value: '3', label: 'Countries' },
            { value: '8M+', label: 'Annual Capacity' },
            { value: '4', label: 'PVH Certified' },
          ].map((stat, index) => (
            <div key={index} className="text-center p-4 border border-gray-200">
              <div className="font-display text-3xl md:text-4xl text-accent-black mb-1">
                {stat.value}
              </div>
              <div className="text-overline text-gray-500 text-xs">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Certifications */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="text-center mb-12">
          <p className="text-overline mb-4">Quality Assurance</p>
          <h2 className="heading-tertiary">Our Certifications</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-gray-200 p-6 hover:border-gray-400 transition-colors text-center"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✓</span>
              </div>
              <h3 className="font-display text-xl text-accent-black mb-3">
                {cert.name}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {cert.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Global Footprint */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mb-20"
      >
        <div className="text-center mb-16">
          <p className="text-overline mb-4">Our Presence</p>
          <h2 className="heading-secondary">Global Footprint</h2>
          <p className="text-body text-gray-600 max-w-2xl mx-auto">
            Strategic manufacturing locations across China and Southeast Asia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* China Base */}
          <div className="border border-gray-200 p-8">
            <h3 className="font-display text-2xl text-accent-black mb-2">China Base</h3>
            <p className="text-gray-500 mb-6">Since 2006</p>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wide">Manufacturing</p>
                <p className="text-accent-black font-medium">{globalFootprint.china.factories}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wide">Annual Capacity</p>
                <p className="text-3xl font-display text-accent-black">{globalFootprint.china.capacity}</p>
              </div>
            </div>
          </div>

          {/* Southeast Asia Base */}
          <div className="border border-gray-200 p-8">
            <h3 className="font-display text-2xl text-accent-black mb-2">Southeast Asia Base</h3>
            <p className="text-gray-500 mb-6">Since {globalFootprint.southeastAsia.established}</p>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wide">Locations</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {globalFootprint.southeastAsia.locations.map((loc, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-100 text-accent-black text-sm">
                      {loc}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wide">Annual Capacity</p>
                <p className="text-3xl font-display text-accent-black">{globalFootprint.southeastAsia.capacity}</p>
                <p className="text-sm text-gray-500 mt-1">{globalFootprint.southeastAsia.certifiedFactories}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-20 text-center p-12 bg-accent-warm"
      >
        <h2 className="heading-tertiary mb-4">Interested in working with us?</h2>
        <p className="text-gray-600 mb-8">
          Contact us to discuss your requirements and learn more about our certifications.
        </p>
        <a href="/contact" className="btn-primary">
          Get in Touch
        </a>
      </motion.div>
    </div>
  );
}
