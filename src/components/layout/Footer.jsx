import { Mail, MapPin, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { companyInfo } from '../../data/companyData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-accent-black text-white">
      <div className="container-custom py-6 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo.png"
                alt="Wiser Enterprise Logo"
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md mb-3 text-base">
              Beyond Manufacturing.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium tracking-widest uppercase text-gray-500 mb-3">
              Contact
            </h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {companyInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                <div className="text-gray-400">
                  <p>China: 2 owned + 10 partner factories</p>
                  <p className="mt-1">SE Asia: Vietnam, Bangladesh, Cambodia</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-3 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} Wiser Enterprise Ltd. All rights reserved.
          </p>

          {/* Scroll to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
