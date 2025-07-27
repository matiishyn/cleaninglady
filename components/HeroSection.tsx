'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, MapPin, Phone } from 'lucide-react';

interface HeroSectionProps {
  dict: any;
}

export function HeroSection({ dict }: HeroSectionProps) {
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
        backgroundImage: "url('/hero-wide.png')",
        textShadow: '1px 1px 3px rgba(255,255,255,0.8)'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          {/* Content */}
          <div className="text-left lg:text-left">
            <h1
              className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
              style={{ textShadow: '2px 2px 4px rgba(255,255,255,0.9)' }}
            >
              {dict.hero.title}
            </h1>
            <p
              className="text-xl text-gray-700 mb-4"
              style={{ textShadow: '1px 1px 3px rgba(255,255,255,0.8)' }}
            >
              {dict.hero.subtitle}
            </p>
            <p
              className="text-lg text-gray-600 mb-8 italic"
              style={{ textShadow: '1px 1px 3px rgba(255,255,255,0.8)' }}
            >
              «{dict.hero.description}»
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button
                size="lg"
                onClick={scrollToOrder}
                className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-lg px-8 py-6 shadow-lg"
              >
                <Phone className="h-5 w-5 mr-2" />
                {dict.hero.orderButton}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 border-2 border-teal-500 text-teal-600 hover:bg-teal-50"
              >
                <Clock className="h-5 w-5 mr-2" />
                {dict.hero.scheduleButton}
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start text-gray-600">
              <MapPin
                className="h-5 w-5 mr-2 text-teal-600"
                style={{ filter: 'drop-shadow(1px 1px 2px rgba(255,255,255,0.8))' }}
              />
              <span style={{ textShadow: '1px 1px 3px rgba(255,255,255,0.8)' }}>
                <Badge className='mr-2' variant="secondary">{dict.hero.location.ivanoFrankivsk}</Badge>
                <Badge className='mr-2' variant="secondary">{dict.hero.location.bohorodchany}</Badge>
                <Badge className='mr-2' variant="secondary">{dict.hero.location.nadvirna}</Badge>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}