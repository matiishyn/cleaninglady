'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

interface PricesSectionProps {
  dict: any;
}

export function PricesSection({ dict }: PricesSectionProps) {

  return (
    <section id="prices" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {dict.prices.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {dict.prices.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {[
            { service: dict.prices.general, price: 'від 80', unit: 'грн/м²' },
            { service: dict.prices.afterRepair, price: 'від 100', unit: 'грн/м²' },
            { service: dict.prices.maintenance, price: 'від 45', unit: 'грн/м²' },
            { service: dict.prices.maid, price: 'від 450', unit: 'грн/год' }
          ].map((item, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-teal-200 hover:-translate-y-1"
            >
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-lg font-bold text-gray-900 mb-2">
                  {item.service}
                </CardTitle>
                <div className="flex items-baseline justify-center">
                  <span className="text-3xl font-bold text-teal-600">
                    {item.price}
                  </span>
                  <span className="text-gray-500 ml-1">
                    {item.unit}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <Badge
                  variant="secondary"
                  className="bg-teal-50 text-teal-700 hover:bg-teal-100"
                >
                  <CheckCircle className="h-3 w-3 mr-1" />
                  {dict.prices.quality}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-8 text-center">
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
            <strong>💡 Важливо:</strong> {dict.prices.note}
          </p>
        </div>
      </div>
    </section>
  );
}