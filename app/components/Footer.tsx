'use client';

import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  const footerLinks = {
    company: [
      { name: 'À Propos', href: '#about' },
      { name: 'Nos Services', href: '#services' },
      { name: 'Propriétés', href: '#properties' },
      { name: 'Contact', href: '#contact' },
    ],
    legal: [
      { name: 'Politique de Confidentialité', href: '#' },
      { name: 'Conditions d\'Utilisation', href: '#' },
      { name: 'Mentions Légales', href: '#' },
    ],
  };

  return (
    <footer className=" flex flex-col items-center bg-transparent">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#d4af37] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#d4af37] rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <div className="flex flex-col items-center md:items-start justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4 mb-6">
              <div className="relative w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32">
                <Image
                  src="/logo32.png"
                  alt="Solutions Africa Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-bold bg-linear-to-r from-white to-[#d4af37] bg-clip-text text-transparent">
                Solutions of Africa Développement
              </span>
            </div>
            
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center md:text-left"
            style={{ marginBottom: '20px', marginTop: '20px' }}
          >
            <h3 className="font-bold text-xl mb-6 text-[#d4af37]">Entreprise</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[#d4af37] transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-left"
            style={{ marginBottom: '20px', marginTop: '20px' }}
          >
            <h3 className="font-bold text-xl mb-6 text-[#d4af37]">Légal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[#d4af37] transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center md:text-left"
            style={{ marginBottom: '20px', marginTop: '20px' }}
          >
            <h3 className="font-bold text-xl mb-6 text-[#d4af37]">Suivez-Nous</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.15, y: -5, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-white/10 hover:bg-[#d4af37] p-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-[#d4af37]/50"
                  aria-label={social.label}
                >
                  <social.icon size={22} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-white/20 pt-8 text-center"
          
        >
          <p className="text-gray-300 text-sm md:text-base">
            &copy; {currentYear} Solutions Of Africa Développement. Tous droits réservés.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

