'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Search, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const slides = [
  {
    id: 1,
    title: 'Nous concretisons votre Rêve Immobilier en Afrique',
    subtitle: 'Découvrez des propriétés d\'exception',
    description: 'Des villas de luxe aux appartements modernes, trouvez la propriété parfaite',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80',
    cta: 'Explorer les Propriétés',
  },
  {
    id: 2,
    title: 'Faites des Investissements Immobiliers Intelligents',
    subtitle: 'Croissance et Opportunités',
    description: 'Investissez dans l\'immobilier africain avec des rendements exceptionnels',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80',
    cta: 'En Savoir Plus',
  },
  {
    id: 3,
    title: 'Expertise et Confiance dans le Marché Immobilier Africain',
    subtitle: 'Votre Partenaire Immobilier',
    description: 'Plus de 10 ans d\'expérience dans le marché immobilier africain',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80',
    cta: 'Nous Contacter',
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isAnimating) {
        setDirection(1);
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }
    }, 6000);

    return () => clearInterval(timer);
  }, [isAnimating]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  const goToSlide = (index: number) => {
    if (index === currentSlide || isAnimating) return;
    setIsAnimating(true);
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 800);
  };

  return (
    <section id="home" className="relative h-[75vh] overflow-hidden mb-20 md:mb-24">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'tween', duration: 0.6, ease: 'easeInOut' },
            opacity: { duration: 0.4 },
          }}
          className="absolute inset-0"
        >
          <div className="relative w-full h-[75vh]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
            >
              <div className="absolute inset-0 bg-linear-to-r from-[#1a4d3e]/90 via-[#1a4d3e]/70 to-transparent" />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl text-white text-center px-4 sm:px-6"
            >
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight px-2"
              >
                {slides[currentSlide].title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg md:text-xl font-semibold text-[#d4af37] mb-6 px-2"
              >
                {slides[currentSlide].subtitle}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-lg md:text-xl mb-10 text-gray-100 leading-relaxed px-2"
              >
                {slides[currentSlide].description}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex justify-center items-center mt-2.5 px-2"
              >
                <Button
                  type="button"
                  className="relative flex bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 md:px-16 py-6 md:py-8 rounded-xl text-base md:text-lg transition-all duration-300 w-full max-w-md items-center justify-center gap-2"
                >
                  <span className="relative z-10">
                    {slides[currentSlide].cta}
                  </span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Search Bar */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-20 md:bottom-24 left-0 right-0 z-20 flex justify-center px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl w-full">
          <div className="bg-white/98 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-6 md:p-8 lg:p-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-end">
              {/* Search Input */}
              <div className="md:col-span-5 px-4">
                
                <div className="relative flex items-center bg-gray-50/80 hover:bg-gray-50 rounded-xl border border-gray-200/60 focus-within:border-[#1a4d3e]/40 focus-within:ring-2 focus-within:ring-[#1a4d3e]/10 transition-all duration-300 pl-4 pr-4 py-3.5">
                  <Search className="text-[#1a4d3e] shrink-0 mr-3" size={20} strokeWidth={2.5} />
                  <input
                    type="text"
                    placeholder="Rechercher une propriété..."
                    className="flex-1 outline-none text-gray-800 placeholder-gray-400 text-base md:text-lg bg-transparent border-0 focus:outline-none h-auto min-w-0 w-full"
                  />
                </div>
              </div>

              {/* Location Select */}
              <div className="md:col-span-4">
                
                <div className="relative flex items-center bg-gray-50/80 hover:bg-gray-50 rounded-xl border border-gray-200/60 focus-within:border-[#1a4d3e]/40 focus-within:ring-2 focus-within:ring-[#1a4d3e]/10 transition-all duration-300 pl-4 pr-4 py-3.5">
                  <MapPin className="text-[#1a4d3e] shrink-0 mr-3" size={20} strokeWidth={2.5} />
                  <select 
                    className="flex-1 outline-none text-gray-800 bg-transparent text-base md:text-lg cursor-pointer appearance-none focus:outline-none border-0 h-auto min-w-0 w-full"
                  >
                    <option value="">Sélectionner Ville</option>
                    <option value="casablanca">Casablanca</option>
                    <option value="dakar">Dakar</option>
                    <option value="abidjan">Abidjan</option>
                    <option value="lagos">Lagos</option>
                  </select>
                </div>
              </div>

              {/* Search Button */}
              <div className="md:col-span-3">
                <Button
                  type="button"
                  className="w-full bg-[#1a4d3e] hover:bg-[#2d7a5f] text-white font-semibold px-4 md:px-6 py-3.5 md:py-4 rounded-xl text-base md:text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] h-auto"
                >
                  <Search className="mr-2 w-5 h-5 shrink-0" />
                  <span className="whitespace-nowrap">Rechercher</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'w-8 bg-[#d4af37]'
                : 'w-2 bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </section>
  );
}

