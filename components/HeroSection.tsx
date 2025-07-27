'use client';

import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Clock, MapPin, Phone } from 'lucide-react';

export function HeroSection() {
  const { t } = useLanguage();

  const scrollToOrder = () => {
    const element = document.querySelector('#order');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="h-[585px] mt-16 bg-cover bg-center bg-no-repeat flex items-center pt-16"
      style={{
        backgroundImage: "url('/hero-wide.png')"
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              {t.hero.title}
            </h1>
            <p className="text-xl text-gray-700 mb-4">
              {t.hero.subtitle}
            </p>
            <p className="text-lg text-gray-600 mb-8 italic">
              «{t.hero.description}»
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button
                size="lg"
                onClick={scrollToOrder}
                className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-lg px-8 py-6 shadow-lg"
              >
                <Phone className="h-5 w-5 mr-2" />
                {t.hero.cta}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 border-2 border-teal-500 text-teal-600 hover:bg-teal-50"
              >
                <Clock className="h-5 w-5 mr-2" />
                {t.hero.workTime}
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start text-gray-600">
              <MapPin className="h-5 w-5 mr-2 text-teal-600" />
              <span>Івано-Франківськ, Богородчани, Надвірна</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}