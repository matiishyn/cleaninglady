import { AboutSection } from '@/components/AboutSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { LocationsSection } from '@/components/LocationsSection';
import { OrderSection } from '@/components/OrderSection';
import { PricesSection } from '@/components/PricesSection';
import { ServicesSection } from '@/components/ServicesSection';
import { locales, type Locale } from '@/lib/i18n';
import { getDictionary } from '../dictionaries';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function Home({
  params
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <main className="min-h-screen">
      <Header dict={dict} />
      <HeroSection dict={dict} />
      <AboutSection dict={dict} />
      <ServicesSection dict={dict} />
      <PricesSection dict={dict} />
      <LocationsSection dict={dict} />
      <OrderSection dict={dict} />
      <ContactSection dict={dict} />
      <Footer dict={dict} />
    </main>
  );
}