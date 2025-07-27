'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { HardHat, Home, RotateCcw, User } from 'lucide-react';

interface ServicesSectionProps {
  dict: any;
}

export function ServicesSection({ dict }: ServicesSectionProps) {

  const serviceIcons = [Home, RotateCcw, HardHat, User];

  const services = [
    dict.services.general,
    dict.services.maintenance,
    dict.services.afterRepair,
    dict.services.maid
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {dict.services.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {dict.services.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = serviceIcons[index];
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-none bg-white hover:-translate-y-2"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}