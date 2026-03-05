import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqCategories = [
  {
    id: 'general',
    title: 'General',
    questions: [
      {
        q: 'What is your minimum order quantity (MOQ)?',
        a: 'Our MOQ varies by product type and complexity. Typically, we start from 100 pieces per style per color. Contact us with your specific requirements for a precise quote.'
      },
      {
        q: 'Do you work with small businesses and startups?',
        a: 'Yes, we welcome businesses of all sizes. While we have MOQ requirements, we can often accommodate smaller orders for new clients with growth potential.'
      },
      {
        q: 'Can you help with product development and design?',
        a: 'Absolutely. Our experienced design team can assist with pattern making, sample development, and refining your designs for manufacturability.'
      }
    ]
  },
  {
    id: 'production',
    title: 'Production',
    questions: [
      {
        q: 'What is your production lead time?',
        a: 'Sample development typically takes 7-14 days. Bulk production is usually 30-45 days depending on order quantity and complexity. Rush orders may be available upon request.'
      },
      {
        q: 'What types of products do you manufacture?',
        a: 'We specialize in knitwear including sweaters, cardigans, dresses, tops, and accessories. Our expertise covers everything from basic styles to complex, fashion-forward pieces.'
      },
      {
        q: 'Can you source materials for us?',
        a: 'Yes, we have established relationships with yarn and fabric suppliers worldwide. We can source materials according to your specifications and budget requirements.'
      },
      {
        q: 'Do you offer eco-friendly and sustainable options?',
        a: 'Yes, we offer organic cotton, recycled fibers, and other sustainable materials. We also hold WRAP certification for responsible production practices.'
      }
    ]
  },
  {
    id: 'quality',
    title: 'Quality & Certification',
    questions: [
      {
        q: 'What quality control measures do you have?',
        a: 'We have QC inspections at every stage of production: incoming materials, in-process checks, and final inspection before shipment. We maintain detailed records for full traceability.'
      },
      {
        q: 'What certifications do you hold?',
        a: 'We are certified by PVH Audit, SGS Audit, and WRAP (Worldwide Responsible Accredited Production). Four of our Southeast Asia factories are PVH-audit certified.'
      },
      {
        q: 'Can you meet specific quality standards for our brand?',
        a: 'Yes, we can adapt our QC procedures to meet your specific quality standards and testing requirements. We work with many major international brands.'
      }
    ]
  },
  {
    id: 'shipping',
    title: 'Shipping & Payment',
    questions: [
      {
        q: 'Do you ship internationally?',
        a: 'Yes, we have extensive experience with international shipping to markets worldwide. We can handle export documentation and logistics coordination.'
      },
      {
        q: 'What are your payment terms?',
        a: 'Our standard terms are typically 30% deposit with order confirmation and 70% before shipment. For established clients, we may offer more flexible terms.'
      },
      {
        q: 'Can you arrange shipping to our warehouse?',
        a: 'Yes, we can arrange shipping to your designated warehouse or location. We work with reliable freight forwarders and can provide competitive shipping rates.'
      }
    ]
  }
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState({});
  const [openCategories, setOpenCategories] = useState({ general: true });

  const toggleItem = (categoryId, index) => {
    setOpenItems(prev => ({
      ...prev,
      [`${categoryId}-${index}`]: !prev[`${categoryId}-${index}`]
    }));
  };

  const toggleCategory = (categoryId) => {
    setOpenCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

  return (
    <div className="pt-36 pb-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h1 className="heading-secondary mb-6">Frequently Asked Questions</h1>
        <p className="text-body text-gray-600">
          Find answers to common questions about our services, production process,
          and working with us.
        </p>
      </motion.div>

      {/* Decorative Divider */}
      <div className="flex items-center justify-center mb-10">
        <div className="w-16 h-px bg-accent-black/20"></div>
      </div>

      {/* FAQ Categories */}
      <div className="max-w-3xl mx-auto mb-20">
        {faqCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            className="mb-8"
          >
            {/* Category Header */}
            <button
              onClick={() => toggleCategory(category.id)}
              className="w-full flex items-center justify-between py-4 border-b border-gray-200"
            >
              <h2 className="font-display text-xl text-accent-black">{category.title}</h2>
              <ChevronDown
                className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                  openCategories[category.id] ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* Questions */}
            <div className={`overflow-hidden transition-all duration-300 ${
              openCategories[category.id] ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="py-6 space-y-4">
                {category.questions.map((item, questionIndex) => {
                  const itemKey = `${category.id}-${questionIndex}`;
                  const isOpen = openItems[itemKey];

                  return (
                    <div
                      key={questionIndex}
                      className="border border-gray-200 rounded-lg overflow-hidden"
                    >
                      <button
                        onClick={() => toggleItem(category.id, questionIndex)}
                        className="w-full flex items-start justify-between gap-4 p-5 text-left hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-medium text-accent-black pr-4">{item.q}</span>
                        <ChevronDown
                          className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 mt-0.5 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ${
                        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="px-5 pb-5 pt-0 text-gray-600 leading-relaxed">
                          {item.a}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Decorative Divider */}
      <div className="flex items-center justify-center mb-10">
        <div className="w-16 h-px bg-accent-black/20"></div>
      </div>

      {/* Still Have Questions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="max-w-2xl mx-auto"
      >
        <div className="text-center p-12 bg-accent-warm">
          <h2 className="heading-tertiary mb-4">Still Have Questions?</h2>
          <p className="text-gray-600 mb-8">
            Can not find the answer you are looking for? Please reach out to our team directly.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent-black text-white px-8 py-4 font-medium hover:bg-accent-charcoal transition-colors"
          >
            Get a Quote
          </a>
        </div>
      </motion.div>
    </div>
  );
}
