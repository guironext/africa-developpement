'use client';

import { motion } from 'framer-motion';
import { Award, Target, Heart, Globe, Sparkles, TrendingUp, Users, MapPin } from 'lucide-react';

const stats = [
  { icon: Award, value: '10+', label: 'Années d\'Expérience', color: 'from-[#1a4d3e] to-[#2d7a5f]' },
  { icon: Target, value: '500+', label: 'Propriétés Vendues', color: 'from-[#2d7a5f] to-[#1a4d3e]' },
  { icon: Heart, value: '1000+', label: 'Clients Satisfaits', color: 'from-[#1a4d3e] to-[#2d7a5f]' },
  { icon: Globe, value: '15+', label: 'Pays Desservis', color: 'from-[#2d7a5f] to-[#1a4d3e]' },
];

const values = [
  {
    icon: Sparkles,
    title: 'Excellence',
    description: 'Nous visons l\'excellence dans chaque transaction et service que nous offrons.',
  },
  {
    icon: TrendingUp,
    title: 'Innovation',
    description: 'Nous adoptons les dernières technologies pour améliorer votre expérience.',
  },
  {
    icon: Users,
    title: 'Confiance',
    description: 'La transparence et l\'intégrité sont au cœur de nos relations clients.',
  },
  {
    icon: MapPin,
    title: 'Engagement',
    description: 'Nous nous engageons à créer de la valeur pour nos communautés africaines.',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 flex flex-col items-center gap-y-14 bg-transparent relative">
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
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-orange-400 mb-6"
            style={{ marginBottom: '50px', marginTop: '50px' }}
          >
            Solutions Of Africa Développement
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-300  mx-auto text-center leading-relaxed"
            style={{ marginBottom: '50px' }}
          >
            Votre partenaire de confiance dans le secteur immobilier africain. Avec plus de 10 ans d&apos;expérience, nous offrons des services professionnels et personnalisés pour répondre à tous vos besoins immobiliers.
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20 justify-items-center">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -12, scale: 1.05 }}
              className="group relative w-full max-w-xs"
              style={{ marginBottom: '50px' }}
            >
              <div className={`relative bg-linear-to-br ${stat.color} p-8 md:p-10 rounded-3xl text-white shadow-xl hover:shadow-2xl transition-all duration-500 h-full border border-white/10 overflow-hidden`} style={{ padding: '20px' }}>
                {/* Decorative Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-br from-white/0 via-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Icon Container */}
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="relative mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 group-hover:bg-white/20 transition-all duration-300"
                >
                  <stat.icon size={32} className="text-[#d4af37] relative z-10" strokeWidth={2} />
                </motion.div>
                
                {/* Content */}
                <div className="relative z-10">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    className="text-5xl md:text-6xl font-bold mb-3 text-white"
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-gray-100 text-base md:text-lg font-medium">{stat.label}</div>
                </div>

                {/* Corner Decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-[#d4af37]/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="relative bg-linear-to-br from-[#1a4d3e] to-[#2d7a5f] rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl overflow-hidden">
            {/* Decorative Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-64 h-64 bg-[#d4af37] rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#d4af37] rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative z-10">
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold mb-6 text-center text-white"
                style={{ padding: '10px' }}
              >
                Notre Mission
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-gray-100 text-center mx-auto "
                style={{ padding: '10px' }}
              >
                Rendre l&apos;accès à la propriété accessible et transparent à travers le continent africain. Nous croyons en un avenir où chaque famille africaine peut réaliser son rêve d&apos;accession à la propriété.
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className=""
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center text-orange-400 mb-12"
          style={{ padding: '50px' }}
          >
            Nos Valeurs
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          style={{ padding: '50px' }}
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 hover:border-[#d4af37]/30 transition-all duration-300 hover:bg-white/10"
                style={{ padding: '20px' }}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[#d4af37]/20 mb-4 group-hover:bg-[#d4af37]/30 transition-colors duration-300"
                >
                  <value.icon size={28} className="text-[#d4af37]" strokeWidth={2} />
                </motion.div>
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-[#d4af37] transition-colors duration-300"
                style={{ padding: '10px' }}
                >
                  {value.title}
                </h4>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed"
                style={{ padding: '10px' }}
                >
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Vision Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative bg-linear-to-br from-[#2d7a5f] to-[#1a4d3e] rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl overflow-hidden">
            {/* Decorative Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4af37] rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#d4af37] rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative z-10">
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold mb-6 text-center text-white"
                style={{ padding: '10px' }}
              >
                Notre Vision
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-gray-100 text-center  mx-auto leading-relaxed"
                style={{ padding: '10px' }}
              >
                Être le leader de l&apos;immobilier en Afrique en offrant des services d&apos;excellence,
                en favorisant le développement durable et en créant de la valeur pour nos clients
                et nos communautés.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

