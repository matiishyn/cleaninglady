'use client';

import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ServicesSection } from '@/components/ServicesSection';
import { PricesSection } from '@/components/PricesSection';
import { LocationsSection } from '@/components/LocationsSection';
import { OrderSection } from '@/components/OrderSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PricesSection />
      <LocationsSection />
      <OrderSection />
      <ContactSection />
      <Footer />
    </main>
  );
}