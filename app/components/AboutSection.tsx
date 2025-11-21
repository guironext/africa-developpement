'use client';

import { motion } from 'framer-motion';
import { Award, Target, Heart, Globe, Shield, Lightbulb, Leaf } from 'lucide-react';
import Image from 'next/image';

const stats = [
  { icon: Award, value: '10+', label: 'Années d\'Expérience', color: 'from-[#1a4d3e] to-[#2d7a5f]' },
  { icon: Target, value: '500+', label: 'Propriétés Vendues', color: 'from-[#2d7a5f] to-[#1a4d3e]' },
  { icon: Heart, value: '1000+', label: 'Clients Satisfaits', color: 'from-[#1a4d3e] to-[#2d7a5f]' },
  { icon: Globe, value: '15+', label: 'Pays Desservis', color: 'from-[#2d7a5f] to-[#1a4d3e]' },
];

const values = [
  {
    icon: Shield,
    title: 'Intégrité',
    description: 'Nous croyons en la transparence et l\'honnêteté dans toutes nos transactions.',
  },
  {
    icon: Award,
    title: 'Qualité',
    description: 'Nous nous engageons à offrir des services et des constructions de la plus haute qualité.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Nous restons à l\'affût des nouvelles tendances et technologies pour améliorer nos services.',
  },
  {
    icon: Leaf,
    title: 'Responsabilité sociale',
    description: 'Nous sommes conscients de notre impact sur la communauté et l\'environnement, et nous agissons en conséquence.',
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
            QUI SOMMES NOUS ?
          </motion.h2>
          
          {/* Company Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative w-full  mx-auto mb-8 rounded-2xl overflow-hidden shadow-2xl"
            style={{ height: '400px' }}
          >
            <Image
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80"
              alt="Modern real estate development"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 w-full leading-relaxed grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
            style={{ marginBottom: '50px', marginTop: '50px'}}
          >
            <div className="space-y-4">
              <p style={{ textAlign: 'justify' }}>
                La <strong className="text-orange-400">SCI SAD</strong> est une filiale d&apos;une holding prestigieuse, <strong className="text-orange-400">PLANETE SOLUTION GROUP (PS GROUP)</strong>, reconnue pour son expertise dans le secteur immobilier à travers l&apos;Europe.
              </p>
              <p style={{ textAlign: 'justify' }}>
                Forte d&apos;une expérience solide et de projets réussis dans divers pays, notre structure s&apos;engage à apporter une valeur ajoutée unique à la Côte d&apos;Ivoire. Nous nous positionnons comme un acteur clé, capable d&apos;offrir des solutions innovantes et sur mesure aux besoins des acteurs locaux.
              </p>
            </div>
            <div className="space-y-4">
              <p style={{ textAlign: 'justify' }}>
                Notre approche repose sur une connaissance approfondie du marché ivoirien, couplée à des pratiques éprouvées en matière de constructions, d&apos;achat et de gestion immobilière. Nous croyons fermement que l&apos;innovation est essentielle pour répondre aux défis actuels et futurs du secteur.
              </p>
              <p className="text-orange-400 font-semibold" style={{ textAlign: 'justify' }}>
                C&apos;est pourquoi, nous mettons en œuvre des alternatives créatives et durables.
              </p>
            </div>
          </motion.div>
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

        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
          style={{ marginTop: '50px', marginBottom: '50px'}}
        >
          <div className="relative bg-linear-to-br from-[#1a4d3e] to-[#2d7a5f] rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl overflow-hidden">
            {/* Decorative Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-64 h-64 bg-[#d4af37] rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#d4af37] rounded-full blur-3xl"></div>
            </div>
            
            
          </div>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="relative bg-linear-to-br from-[#2d7a5f] to-[#1a4d3e] rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl overflow-hidden">
            {/* Decorative Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4af37] rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#d4af37] rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden order-2 md:order-1"
              >
                <Image
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
                  alt="Construction and development"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <div className="order-1 md:order-2">
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl md:text-4xl font-bold mb-6 text-white"
                >
                  NOTRE MISSION
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-lg md:text-xl text-gray-100 leading-relaxed"
                >
                  Chez la SCI SAD, notre mission est de transformer vos rêves immobiliers en réalité. Nous nous engageons à offrir des services de haute qualité dans la construction, l&apos;achat, la vente et la location gérance de biens immobiliers. Notre objectif est de contribuer au développement durable et à l&apos;urbanisation harmonieuse de la Côte d&apos;Ivoire.
                </motion.p>
              </div>
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

        {/* Perspectives Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative bg-linear-to-br from-[#1a4d3e] to-[#2d7a5f] rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl overflow-hidden">
            {/* Decorative Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4af37] rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#d4af37] rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center" style={{  paddingLeft: '10px'}}>
              <div>
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl md:text-4xl font-bold mb-6 text-white"
                >
                  PERSPECTIVES
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-lg md:text-xl text-gray-100 leading-relaxed"
                >
                  La Côte d&apos;Ivoire est en pleine croissance et représente un marché immobilier dynamique. Avec l&apos;urbanisation rapide et l&apos;augmentation de la population, les opportunités d&apos;investissements sont nombreuses. Nous sommes déterminés à être à la pointe de cette évolution, en répondant aux besoins croissants en matière de logements, de locaux commerciaux et d&apos;infrastructures industrielles.
                </motion.p>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden"
              >
                <Image
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80"
                  alt="Urban development in Africa"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

