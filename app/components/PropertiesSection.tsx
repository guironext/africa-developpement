'use client';

import { motion } from 'framer-motion';
import PropertyCard from './PropertyCard';

const properties = [
  {
    id: 1,
    title: 'Villa Moderne de Luxe',
    location: 'Casablanca, Maroc',
    price: '2,500,000 MAD',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80',
    bedrooms: 4,
    bathrooms: 3,
    area: 350,
    type: 'Villa',
  },
  {
    id: 2,
    title: 'Appartement Élégant',
    location: 'Dakar, Sénégal',
    price: '850,000 XOF',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80',
    bedrooms: 3,
    bathrooms: 2,
    area: 120,
    type: 'Appartement',
  },
  {
    id: 3,
    title: 'Maison Familiale Spacieuse',
    location: 'Abidjan, Côte d\'Ivoire',
    price: '1,200,000 XOF',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    bedrooms: 5,
    bathrooms: 4,
    area: 280,
    type: 'Maison',
  },
  {
    id: 4,
    title: 'Penthouse avec Vue Panoramique',
    location: 'Lagos, Nigeria',
    price: '3,500,000 NGN',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    bedrooms: 3,
    bathrooms: 3,
    area: 200,
    type: 'Penthouse',
  },
  {
    id: 5,
    title: 'Villa Contemporaine',
    location: 'Tunis, Tunisie',
    price: '1,800,000 TND',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
    bedrooms: 4,
    bathrooms: 3,
    area: 320,
    type: 'Villa',
  },
  {
    id: 6,
    title: 'Studio Moderne',
    location: 'Casablanca, Maroc',
    price: '450,000 MAD',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80',
    bedrooms: 1,
    bathrooms: 1,
    area: 45,
    type: 'Studio',
  },
];

const PropertiesSection = () => {
  return (
    <section className="py-24 md:py-32 flex flex-col items-center gap-y-14 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center gap-y-10">
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
          >
            Propriétés en Vedette
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base  text-white max-w-3xl mx-auto leading-relaxed"
          >
            Découvrez notre sélection de propriétés d&apos;exception à travers l&apos;Afrique.
            Chaque bien a été soigneusement sélectionné pour sa qualité et son emplacement privilégié.
          </motion.p>
        </motion.div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 justify-items-center">
          {properties.map((property, index) => (
            <PropertyCard key={property.id} property={property} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16 md:mt-20"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-white font-semibold px-10 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
            style={{ background: 'linear-gradient(to right, #1a4d3e, #2d7a5f)', padding: '8px 16px'  }}
          
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(to right, #2d7a5f, #1a4d3e)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'linear-gradient(to right, #1a4d3e, #2d7a5f)';
            }}
          >
            Voir Toutes les Propriétés
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default PropertiesSection;