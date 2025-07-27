'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Award, Shield, Users } from 'lucide-react';

interface AboutSectionProps {
  dict: any;
}

export function AboutSection({ dict }: AboutSectionProps) {
  const features = [
    {
      icon: Users,
      title: dict.about.experience,
      color: 'text-teal-600'
    },
    {
      icon: Award,
      title: dict.about.clients,
      color: 'text-cyan-600'
    },
    {
      icon: Shield,
      title: dict.about.guarantee,
      color: 'text-blue-600'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {dict.about.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {dict.about.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Family cleaning team"
              className="w-full h-96 object-cover rounded-3xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
          </div>

          {/* Content */}
          <div>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {dict.about.description}
            </p>

            <div className="grid gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="flex items-center p-6">
                    <div className={`p-3 rounded-xl bg-gray-50 mr-4`}>
                      <feature.icon className={`h-6 w-6 ${feature.color}`} />
                    </div>
                    <span className="text-lg font-semibold text-gray-900">
                      {feature.title}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}