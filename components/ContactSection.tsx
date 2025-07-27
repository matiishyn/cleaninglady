'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Mail, MessageCircle, Phone, Send } from 'lucide-react';

interface ContactSectionProps {
  dict: any;
}

export function ContactSection({ dict }: ContactSectionProps) {

  const contactInfo = [
    {
      icon: Phone,
      title: dict.contact.phone,
      value: '+38 (XXX) XXX-XX-XX',
      action: () => window.open('tel:+380XXXXXXXXX', '_blank'),
      color: 'text-teal-600'
    },
    {
      icon: Mail,
      title: dict.contact.email,
      value: 'cleaninglady.if@gmail.com',
      action: () => window.open('mailto:cleaninglady.if@gmail.com', '_blank'),
      color: 'text-cyan-600'
    },
    {
      icon: Clock,
      title: dict.contact.schedule,
      value: dict.contact.scheduleTime,
      action: null,
      color: 'text-blue-600'
    }
  ];

  const socialLinks = [
    {
      name: 'Viber',
      icon: MessageCircle,
      color: 'bg-purple-500 hover:bg-purple-600',
      url: 'viber://chat?number=%2B380XXXXXXXXX'
    },
    {
      name: 'Telegram',
      icon: Send,
      color: 'bg-blue-500 hover:bg-blue-600',
      url: 'https://t.me/cleaningladyif'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {dict.contact.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {dict.contact.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((item, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
              onClick={item.action || undefined}
            >
              <CardContent className="text-center p-8">
                <div className={`w-16 h-16 ${item.color.replace('text-', 'bg-').replace('600', '100')} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <item.icon className={`h-8 w-8 ${item.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-lg">
                  {item.value}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            {dict.contact.social}
          </h3>
          <div className="flex justify-center space-x-4">
            {socialLinks.map((social, index) => (
              <Button
                key={index}
                size="lg"
                className={`${social.color} text-white h-14 px-8`}
                onClick={() => window.open(social.url, '_blank')}
              >
                <social.icon className="h-6 w-6 mr-3" />
                {social.name}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}