'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'contact@solutionsafrica.com',
      link: 'mailto:contact@solutionsafrica.com',
      color: 'from-[#1a4d3e] to-[#2d7a5f]',
    },
    {
      icon: Phone,
      title: 'Téléphone',
      content: '+212 6XX XXX XXX',
      link: 'tel:+2126XXXXXXXX',
      color: 'from-[#2d7a5f] to-[#1a4d3e]',
    },
    {
      icon: MapPin,
      title: 'Adresse',
      content: 'Casablanca, Maroc',
      link: '#',
      color: 'from-[#1a4d3e] to-[#2d7a5f]',
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 flex flex-col items-center gap-y-14 bg-transparent">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(26,77,62,0.08),transparent_70%)] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-orange-400 mb-6"
            style={{  marginTop: '50px' }}
          >
            Contactez-Nous
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-300  mx-auto leading-relaxed"
            style={{ marginBottom: '20px', marginTop: '20px' }}
          >
            Nous sommes là pour répondre à toutes vos questions et vous accompagner dans vos projets immobiliers
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 w-full"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative block"
                style={{ marginBottom: '20px', marginTop: '20px' }}
              >
                <div className={`relative bg-linear-to-br ${info.color} p-8 rounded-3xl text-white shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/10 overflow-hidden`}
                style={{ padding: '20px' }}
                >
                  {/* Decorative Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-br from-white/0 via-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" ></div>
                  
                  <div className="relative z-10 items-center flex  space-x-6">
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="shrink-0 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 group-hover:bg-white/20 transition-all duration-300"
                      
                    >
                      <info.icon size={28} className="text-[#d4af37 ]" strokeWidth={2}  />
                    </motion.div>
                    <div className="flex-1" style={{ padding: '10px' }}>
                      <h3 className="font-bold text-xl mb-2 group-hover:text-[#d4af37] transition-colors duration-300">
                        {info.title}
                      </h3>
                      <p className="text-gray-100 text-lg opacity-90">{info.content}</p>
                    </div>
                  </div>
                  
                  {/* Corner Decoration */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-[#d4af37]/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="relative bg-white/5 backdrop-blur-sm p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl w-full overflow-hidden"
            style={{ padding: '20px' }}
          >
            {/* Decorative Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4af37] rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#1a4d3e] rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative z-10 space-y-6">
              <div className="flex gap-3 mb-6 justify-center items-center">
                <div className="p-3 rounded-xl bg-[#d4af37]/20 border border-[#d4af37]/30">
                  <MessageSquare className="text-[#d4af37]" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">Envoyez-nous un message</h3>
              </div>

              <div style={{ padding: '10px' }}>
                <label htmlFor="name" className="block text-lg font-semibold text-gray-200 mb-2">
                  Nom Complet
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] transition-all backdrop-blur-sm"
                  placeholder="Votre nom complet"
                  style={{ padding: '10px' }}
                  required
                />
              </div>

              <div style={{ padding: '10px' }}>
                <label htmlFor="email" className="block text-lg font-semibold text-gray-200 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] transition-all backdrop-blur-sm"
                  placeholder="votre@email.com"
                  style={{ padding: '10px' }}
                  required
                />
              </div>

              <div style={{ padding: '10px' }}>
                <label htmlFor="phone" className="block text-lg font-semibold text-gray-200 mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] transition-all backdrop-blur-sm"
                  placeholder="+212 6XX XXX XXX"
                  style={{ padding: '10px' }}
                  required
                />
              </div>

              <div style={{ padding: '10px' }}>
                <label htmlFor="message" className="block text-lg font-semibold text-gray-200 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] transition-all resize-none backdrop-blur-sm"
                  placeholder="Votre message..."
                  style={{ padding: '10px' }}
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-linear-to-r from-[#1a4d3e] to-[#2d7a5f] hover:from-[#2d7a5f] hover:to-[#1a4d3e] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl group"
                style={{ padding: '10px' }}
              >
                <span>Envoyer le Message</span>
                <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

