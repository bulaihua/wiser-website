import { motion, AnimatePresence } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { ArrowLeft, Mail, ChevronLeft, ChevronRight } from 'lucide-react';
import { getProductById } from '../data/productsData';

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (!product) {
    return (
      <div className="pt-36 text-center">
        <p>Product not found</p>
        <Link to="/" className="btn-primary mt-4 inline-block">Back to Home</Link>
      </div>
    );
  }

  const selectedImage = product.images[selectedIndex];

  const goToPrevious = () => {
    setSelectedIndex((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setSelectedIndex((prev) => (prev === product.images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="pt-36 pb-20">
      <div className="container-custom">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-accent-black transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <p className="text-overline mb-4">{product.name}</p>
          <h1 className="heading-secondary mb-6">{product.title}</h1>
          <p className="text-body text-gray-600 max-w-2xl">
            {product.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-6">
            {product.features.map((feature, i) => (
              <span
                key={i}
                className="text-sm text-gray-600 px-4 py-2 border border-gray-200"
              >
                {feature}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Image Gallery */}
        <div className="mb-16">
          {/* Main Image */}
          <motion.div
            key={selectedIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative aspect-[4/3] bg-gray-100 mb-4 overflow-hidden group"
          >
            <img
              src={selectedImage}
              alt={`${product.title} sample ${selectedIndex + 1}`}
              className="w-full h-full object-cover"
            />

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/90 rounded-full text-sm">
              {selectedIndex + 1} / {product.images.length}
            </div>
          </motion.div>

          {/* Thumbnail Strip */}
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {product.images.map((image, index) => (
              <motion.button
                key={index}
                onClick={() => setSelectedIndex(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden border-2 transition-colors ${
                  selectedIndex === index
                    ? 'border-accent-black'
                    : 'border-gray-200 hover:border-gray-400'
                }`}
              >
                <img
                  src={image}
                  alt={`${product.title} thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.button>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center p-12 bg-accent-warm"
        >
          <h2 className="heading-tertiary mb-4">Interested in this category?</h2>
          <p className="text-gray-600 mb-8">
            Contact us to discuss your requirements and get a customized quote.
          </p>
          <a
            href="/contact"
            className="btn-primary inline-flex items-center gap-2"
          >
            <Mail className="w-4 h-4" />
            Get in Touch
          </a>
        </motion.div>
      </div>
    </div>
  );
}
