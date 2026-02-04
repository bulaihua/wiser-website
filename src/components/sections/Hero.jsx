import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { companyInfo } from '../../data/companyData';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-accent-warm/20"></div>
      <div className="absolute top-20 right-40 w-64 h-64 border border-accent-black/5 rounded-full"></div>
      <div className="absolute bottom-40 right-20 w-32 h-32 border border-accent-black/5 rounded-full"></div>

      <div className="container-custom pt-16 md:pt-24 lg:pt-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="relative z-10">
            {/* Decorative line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '60px' }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="h-px bg-accent-black mb-8"
            ></motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-accent-black leading-[1.1] mb-8"
            >
              Beyond
              <br />
              <span className="italic text-gray-400">Manufacturing.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="font-serif text-xl md:text-2xl text-accent-charcoal mb-8 leading-relaxed"
            >
              We're Your Strategic
              <br />
              <span className="text-gray-400">Growth Partner</span>
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="text-base text-gray-600 max-w-md mb-10 leading-relaxed"
            >
              {companyInfo.description}
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
            >
              <a
                href="/contact"
                className="inline-flex items-center gap-3 bg-accent-black text-white px-8 py-4 font-medium hover:bg-gray-800 transition-all duration-300 rounded-full group"
              >
                Start a Conversation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Stats - Horizontal layout */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="mt-16 pt-8 border-t border-gray-200 flex flex-wrap gap-x-12 gap-y-6"
            >
              {[
                { value: '20', label: 'Years of Excellence' },
                { value: '8M+', label: 'Pieces/Year' },
                { value: '200+', label: 'Global Clients' },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="font-display text-3xl text-accent-black mb-1">
                    {stat.value}
                  </div>
                  <div className="text-overline text-gray-400 tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Single Hero Image (Desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-[4/5]">
              {/* Subtle background color accent - Top right */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute top-0 right-0 w-[40%] h-[50%] bg-accent-warm/30 z-0 rounded-br-3xl"
              ></motion.div>

              {/* Main Image - Knitwear Detail */}
              <motion.img
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                src="/hero-knitwear.jpg"
                alt="Premium knitwear detail"
                className="relative w-full h-full object-cover shadow-xl z-10"
              />

              {/* Overlay label - Top Left */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="absolute top-6 left-6 z-20"
              >
                <span className="text-overline text-xs tracking-widest text-white/90 drop-shadow-md">EST. 2006</span>
              </motion.div>

              {/* Overlay label - Bottom Left - Key Capability */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute bottom-8 left-6 z-20 bg-white/95 backdrop-blur-sm px-5 py-3 shadow-lg"
              >
                <p className="font-serif text-lg text-accent-black">Beyond Manufacturing</p>
                <p className="text-xs text-gray-500 mt-0.5">From concept to delivery</p>
              </motion.div>

              {/* Overlay label - Bottom Right - Stats */}
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="absolute bottom-8 right-6 z-20 text-right"
              >
                <p className="font-display text-3xl text-white drop-shadow-lg">20+</p>
                <p className="text-xs text-white/90 drop-shadow-md">Years Excellence</p>
              </motion.div>

              {/* Decorative corner accent */}
              <motion.div
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-white/60 z-20"
              ></motion.div>
            </div>
          </motion.div>

          {/* Mobile Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="lg:hidden mt-8 relative"
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto">
              <motion.img
                src="/hero-knitwear.jpg"
                alt="Premium knitwear detail"
                className="w-full h-full object-cover shadow-lg rounded-2xl"
              />
              {/* Mobile overlay labels */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="text-overline text-xs text-accent-black/70">EST. 2006</span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-lg shadow-lg">
                <p className="font-serif text-base text-accent-black">Beyond Manufacturing</p>
                <p className="text-xs text-gray-500">From concept to delivery</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-px h-12 bg-gray-300"></div>
      </motion.div>
    </section>
  );
}
