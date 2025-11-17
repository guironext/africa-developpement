'use client';

import { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import PropertiesSection from './components/PropertiesSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function Home() {
  useEffect(() => {
    // Smooth scroll behavior
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLAnchorElement;
      const href = target.getAttribute('href');
      
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          const offset = 96; // Account for fixed navbar
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      }
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach((anchor) => {
      anchor.addEventListener('click', handleSmoothScroll as EventListener);
    });

    return () => {
      anchors.forEach((anchor) => {
        anchor.removeEventListener('click', handleSmoothScroll as EventListener);
      });
    };
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden relative">
      <Navbar />
      <div className="relative bg-linear-to-b from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(26,77,62,0.2),transparent_70%)]"></div>
        <HeroSlider />
      </div>
      <div style={{ height: '80px' }} className="w-full bg-linear-to-b from-gray-800 to-gray-900"></div>
      <div className="w-full flex flex-col gap-y-20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(26,77,62,0.1),transparent_50%)] pointer-events-none"></div>
        <section id="properties" className="w-full flex flex-col bg-linear-to-b from-gray-900 via-gray-800 to-gray-900 relative z-10 py-8">
        <PropertiesSection />
        </section>
        <section id="services" className="w-full flex flex-col bg-linear-to-b from-gray-900 via-gray-800 to-gray-900 relative z-10 py-8">
        <ServicesSection />
        </section>
        <section id="about" className="w-full flex flex-col bg-linear-to-b from-gray-900 via-gray-800 to-gray-900 relative z-10 py-8">
        <AboutSection />
        </section>
        <section id="contact" className="w-full flex flex-col bg-linear-to-b from-gray-900 via-gray-800 to-gray-900 relative z-10 py-8">
        <ContactSection />
        </section>
        <section id="footer" className="w-full flex flex-col bg-linear-to-b from-gray-900 via-black to-black relative z-10">
        <Footer />
        </section>
      </div>
      
    </main>
  );
}
