import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navigation, servicesSubmenu, aboutSubmenu } from '../../data/companyData';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileSubmenus, setMobileSubmenus] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownEnter = (name) => {
    setOpenDropdown(name);
  };

  const handleDropdownLeave = () => {
    setOpenDropdown(null);
  };

  const toggleMobileSubmenu = (name) => {
    setMobileSubmenus(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  const getSubmenu = (name) => {
    if (name === 'Our Services') return servicesSubmenu;
    if (name === 'About Us') return aboutSubmenu;
    return [];
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-24">
          {/* Logo - Transparent, Larger */}
          <a href="/" className="flex-shrink-0">
            <img
              src="/logo.png"
              alt="Wiser Enterprise Logo"
              className="h-14 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center flex-1 justify-center">
            <div className="flex items-center gap-12">
              {navigation.map((item) => (
                item.hasDropdown ? (
                  <div
                    key={item.name}
                    className="relative dropdown-container"
                    onMouseEnter={() => handleDropdownEnter(item.name)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <button
                      className="text-[16px] font-semibold text-gray-700 hover:text-accent-black transition-colors flex items-center gap-1.5"
                    >
                      {item.name}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {openDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 min-w-[200px]"
                        >
                          <div className="bg-white border border-gray-100 rounded-lg shadow-lg overflow-hidden">
                            {getSubmenu(item.name).map((subItem) => (
                              <a
                                key={subItem.name}
                                href={subItem.href}
                                className="block px-5 py-3 text-[15px] text-gray-600 hover:text-accent-black hover:bg-gray-50 transition-colors"
                              >
                                {subItem.name}
                              </a>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-[16px] font-semibold text-gray-700 hover:text-accent-black transition-colors"
                  >
                    {item.name}
                  </a>
                )
              ))}
            </div>
          </div>

          {/* Right Side - CTA */}
          <div className="hidden lg:flex items-center">
            <a
              href="/contact"
              className="text-[15px] font-semibold text-accent-black hover:text-gray-600 transition-colors px-5 py-2 border-2 border-accent-black rounded-full"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6 text-accent-black" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6 text-accent-black" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="container-custom py-6">
              <div className="flex flex-col gap-4">
                {navigation.map((item, index) => (
                  item.hasDropdown ? (
                    <div key={item.name}>
                      <motion.button
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.05 }}
                        onClick={() => toggleMobileSubmenu(item.name)}
                        className="text-lg text-accent-black hover:text-gray-600 transition-colors py-2 flex items-center justify-between w-full"
                      >
                        {item.name}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileSubmenus[item.name] ? 'rotate-180' : ''}`} />
                      </motion.button>
                      <AnimatePresence>
                        {mobileSubmenus[item.name] && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-4 overflow-hidden"
                          >
                            {getSubmenu(item.name).map((subItem, subIndex) => (
                              <motion.a
                                key={subItem.name}
                                href={subItem.href}
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: subIndex * 0.03 }}
                                onClick={() => {
                                  setIsMobileMenuOpen(false);
                                  setMobileSubmenus({});
                                }}
                                className="block text-base text-gray-600 hover:text-accent-black transition-colors py-2"
                              >
                                {subItem.name}
                              </motion.a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-lg text-accent-black hover:text-gray-600 transition-colors py-2"
                    >
                      {item.name}
                    </motion.a>
                  )
                ))}
                <motion.a
                  href="/contact"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: navigation.length * 0.05 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg text-accent-black font-medium py-2 border-t border-gray-100 pt-6"
                >
                  Get in Touch
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
