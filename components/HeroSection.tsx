'use client';

import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Phone, Clock, MapPin } from 'lucide-react';

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
      className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 flex items-center pt-16"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
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
                className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-lg px-8 py-6"
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

          {/* Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-teal-400 to-cyan-500 rounded-3xl p-8 shadow-2xl">
              <img
                src="https://images.pexels.com/photos/4239120/pexels-photo-4239120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Cleaning service"
                className="w-full h-80 object-cover rounded-2xl"
              />
            </div>
            {/* Floating cards */}
            <div className="absolute -top-4 -left-4 bg-white rounded-xl p-4 shadow-xl">
              <div className="text-2xl font-bold text-teal-600">5+</div>
              <div className="text-sm text-gray-600">років досвіду</div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-xl">
              <div className="text-2xl font-bold text-teal-600">200+</div>
              <div className="text-sm text-gray-600">клієнтів</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}