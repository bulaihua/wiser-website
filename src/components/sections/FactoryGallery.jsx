import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { MapPin } from 'lucide-react';

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
];

export default function FactoryGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section ref={ref} className="py-24 bg-accent-warm">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-overline mb-4">Inside Our Facilities</p>
          <h2 className="heading-secondary mb-6">Factory Gallery</h2>
          <p className="text-body text-gray-600">
            Take a look inside our state-of-the-art manufacturing facilities
            across China and Southeast Asia.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative aspect-[4/3] overflow-hidden bg-gray-200"
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
              <div className={`absolute bottom-0 left-0 right-0 p-6 transition-transform duration-300 ${
                hoveredIndex === index ? 'translate-y-0' : 'translate-y-4'
              }`}>
                <h3 className="font-display text-xl text-white mb-1">{image.title}</h3>
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>{image.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: '16+', label: 'Facilities' },
            { value: '3', label: 'Countries' },
            { value: '8M+', label: 'Annual Capacity' },
            { value: '4', label: 'PVH Certified' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-display text-4xl md:text-5xl text-accent-black mb-1">
                {stat.value}
              </div>
              <div className="text-overline text-gray-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
