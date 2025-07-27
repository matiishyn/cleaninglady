'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, MessageSquare, Send } from 'lucide-react';
import { ContactFormData } from '@/types';

export function OrderSection() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    service: '',
    comment: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Here you would integrate with EmailJS, Formspree, or your backend
    console.log('Form submitted:', formData);
    
    // Reset form
    setFormData({ name: '', phone: '', service: '', comment: '' });
    setIsSubmitting(false);
    
    // Show success message
    alert('Заявку надіслано! Ми зв\'яжемося з вами найближчим часом.');
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="order" className="py-20 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t.order.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.order.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="border-none shadow-xl bg-white">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">
                Форма замовлення
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-base font-medium">
                    {t.order.form.name} *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="mt-2 h-12"
                    placeholder="Введіть ім'я"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-base font-medium">
                    {t.order.form.phone} *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="mt-2 h-12"
                    placeholder="+38 (0XX) XXX-XX-XX"
                  />
                </div>

                <div>
                  <Label htmlFor="service" className="text-base font-medium">
                    {t.order.form.service} *
                  </Label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) => handleInputChange('service', value)}
                    required
                  >
                    <SelectTrigger className="mt-2 h-12">
                      <SelectValue placeholder="Оберіть послугу" />
                    </SelectTrigger>
                    <SelectContent>
                      {t.order.services.map((service, index) => (
                        <SelectItem key={index} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="comment" className="text-base font-medium">
                    {t.order.form.comment}
                  </Label>
                  <Textarea
                    id="comment"
                    value={formData.comment}
                    onChange={(e) => handleInputChange('comment', e.target.value)}
                    className="mt-2 min-h-24"
                    placeholder="Додаткова інформація..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-lg"
                >
                  <Send className="h-5 w-5 mr-2" />
                  {isSubmitting ? 'Надсилаємо...' : t.order.form.submit}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Quick Contact */}
          <div className="space-y-6">
            <Card className="border-none shadow-xl bg-white">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Швидкий зв'язок
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  size="lg"
                  className="w-full h-14 bg-green-500 hover:bg-green-600 text-lg"
                  onClick={() => window.open('viber://chat?number=%2B380XXXXXXXXX', '_blank')}
                >
                  <MessageSquare className="h-6 w-6 mr-3" />
                  {t.order.form.viber}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full h-14 border-2 border-teal-500 text-teal-600 hover:bg-teal-50 text-lg"
                  onClick={() => window.open('tel:+380XXXXXXXXX', '_blank')}
                >
                  <Phone className="h-6 w-6 mr-3" />
                  {t.order.form.call}
                </Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl bg-gradient-to-br from-teal-500 to-cyan-600 text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Чому обирають нас?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    Сімейний підхід і турбота
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    Екологічні засоби
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    Гарантія якості
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    Доступні ціни
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}