'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, MapPin } from 'lucide-react';
import { useState } from 'react';

interface LocationsSectionProps {
  dict: any;
}

export function LocationsSection({ dict }: LocationsSectionProps) {
  const [openItems, setOpenItems] = useState<number[]>([0]); // First item open by default

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="locations" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {dict.locations.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {dict.locations.subtitle}
          </p>
        </div>

        <div className="grid gap-6 max-w-4xl mx-auto">
          {[
            {
              name: dict.locations.ifTitle,
              description: dict.locations.ifDescription,
              keywords: ['клінінг Івано-Франківськ', 'прибирання квартир Івано-Франківськ', 'клінінгова компанія Івано-Франківськ']
            },
            {
              name: dict.locations.bohorodchany,
              description: 'Професійні клінінгові послуги в Богородчанах',
              keywords: ['клінінг Богородчани']
            },
            {
              name: dict.locations.nadvirna,
              description: 'Якісне прибирання в Надвірній',
              keywords: ['клінінг Надвірна']
            }
          ].map((location, index) => (
            <Card key={index} className="border-none shadow-lg bg-white">
              <Collapsible
                open={openItems.includes(index)}
                onOpenChange={() => toggleItem(index)}
              >
                <CollapsibleTrigger asChild>
                  <CardHeader className="cursor-pointer hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center">
                          <MapPin className="h-5 w-5 text-white" />
                        </div>
                        <CardTitle className="text-2xl font-bold text-gray-900">
                          {location.name}
                        </CardTitle>
                      </div>
                      <ChevronDown
                        className={`h-6 w-6 transition-transform ${openItems.includes(index) ? 'rotate-180' : ''
                          }`}
                      />
                    </div>
                  </CardHeader>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <CardContent className="pt-0">
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      {location.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {location.keywords.map((keyword, keyIndex) => (
                        <Badge
                          key={keyIndex}
                          variant="secondary"
                          className="bg-teal-50 text-teal-700 hover:bg-teal-100"
                        >
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </CollapsibleContent>
              </Collapsible>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}