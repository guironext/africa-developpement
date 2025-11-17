'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, Building2, Info, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');

  useEffect(() => {
    // Client-side only: prevent hydration mismatch
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll(); // Check initial scroll position
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Accueil', href: '#home', icon: Home },
    { name: 'Propriétés', href: '#properties', icon: Building2 },
    { name: 'À Propos', href: '#about', icon: Info },
    { name: 'Contact', href: '#contact', icon: Phone },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/45 backdrop-blur-md shadow-lg'
          : 'bg-transparent/95 backdrop-blur-md'
      }`}
      suppressHydrationWarning
    >
      <div className="w-full mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center w-full justify-between min-h-[96px]">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-12"
          >
            <Link href="#home" className="flex items-center space-x-4">
              <div className="relative w-20 h-20 md:w-24 md:h-28 lg:w-28 lg:h-32 shrink-0">
                <Image
                  src={isScrolled ? "/logo32.png" : "/logo33.png"}
                  alt="Solutions Africa Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className={`text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-[#1a4d3e]' : 'text-white'
              }`}>
                Solutions of Africa Développement
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                className={`font-medium transition-colors flex items-center gap-2 px-2 shrink-0 ${
                  isScrolled
                    ? 'text-[#1a4d3e] hover:text-[#2d7a5f]'
                    : 'text-white hover:text-gray-200'
                }`}
              >
                <item.icon size={18} />
                <span className="text-base lg:text-lg whitespace-nowrap">{item.name}</span>
              </motion.a>
            ))}
            <div className={`flex items-center gap-2 border-l pl-4 ml-2 shrink-0 transition-colors duration-300 ${
              isScrolled ? 'border-[#1a4d3e]/20' : 'border-white/20'
            }`}>
              <motion.button
                onClick={() => setLanguage('fr')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-300 whitespace-nowrap  ${
                  language === 'fr'
                    ? isScrolled
                      ? 'bg-[#1a4d3e] text-white shadow-md p-5'
                      : 'bg-white/20 text-white shadow-md backdrop-blur-sm p-5'
                    : isScrolled
                      ? 'text-[#1a4d3e] hover:bg-[#1a4d3e]/10 p-5'
                      : 'text-white hover:bg-white/10 p-5'
                }`}
              >
                FR
              </motion.button>
              <motion.button
                onClick={() => setLanguage('en')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-1.5 mr-6 lg:mr-8 rounded-md text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                  language === 'en'
                    ? isScrolled
                      ? 'bg-[#1a4d3e] text-white shadow-md p-5'
                      : 'bg-white/20 text-white shadow-md backdrop-blur-sm p-5'
                    : isScrolled
                      ? 'text-[#1a4d3e] hover:bg-[#1a4d3e]/10 p-5'
                      : 'text-white hover:bg-white/10 p-5'
                }`}
              >
                EN
              </motion.button>
              <div className=' pl-4 ml-2 shrink-0'>

              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 transition-colors duration-300 ${
              isScrolled ? 'text-[#1a4d3e]' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-2 text-[#1a4d3e] font-medium hover:text-[#2d7a5f] transition-colors"
                >
                  <item.icon size={20} />
                  <span>{item.name}</span>
                </motion.a>
              ))}
              <div className="flex items-center gap-2 pt-4 border-t border-gray-200 mt-4">
                <motion.button
                  onClick={() => {
                    setLanguage('fr');
                    setIsMobileMenuOpen(false);
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 flex-1 ${
                    language === 'fr'
                      ? 'bg-[#1a4d3e] text-white shadow-md'
                      : 'text-[#1a4d3e] bg-gray-100 hover:bg-[#1a4d3e]/10'
                  }`}
                >
                  Français
                </motion.button>
                <motion.button
                  onClick={() => {
                    setLanguage('en');
                    setIsMobileMenuOpen(false);
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 flex-1 ${
                    language === 'en'
                      ? 'bg-[#1a4d3e] text-white shadow-md'
                      : 'text-[#1a4d3e] bg-gray-100 hover:bg-[#1a4d3e]/10'
                  }`}
                >
                  English
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

