'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { ContactFormData } from '@/types';
import { MessageSquare, Phone, Send } from 'lucide-react';
import { useState } from 'react';

interface OrderSectionProps {
  dict: any;
}

export function OrderSection({ dict }: OrderSectionProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    service: '',
    comment: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);

    // Reset form
    setFormData({ name: '', phone: '', service: '', comment: '' });
    setIsSubmitting(false);

    // Show success message (you could use a toast here)
    alert('Дякуємо! Ваша заявка надіслана. Ми зв\'яжемося з вами найближчим часом.');
  };

  return (
    <section id="order" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {dict.order.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {dict.order.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="border-none shadow-xl bg-white">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">
                {dict.order.form.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-base font-medium">
                    {dict.order.form.name} *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="mt-2 h-12"
                    placeholder={dict.order.form.namePlaceholder}
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-base font-medium">
                    {dict.order.form.phone} *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="mt-2 h-12"
                    placeholder={dict.order.form.phonePlaceholder}
                  />
                </div>

                <div>
                  <Label htmlFor="service" className="text-base font-medium">
                    {dict.order.form.service} *
                  </Label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) => handleInputChange('service', value)}
                    required
                  >
                    <SelectTrigger className="mt-2 h-12">
                      <SelectValue placeholder={dict.order.form.selectService} />
                    </SelectTrigger>
                    <SelectContent>
                      {[
                        dict.services.general.title,
                        dict.services.maintenance.title,
                        dict.services.afterRepair.title,
                        dict.services.maid.title
                      ].map((service, index) => (
                        <SelectItem key={index} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="comment" className="text-base font-medium">
                    {dict.order.form.comment}
                  </Label>
                  <Textarea
                    id="comment"
                    value={formData.comment}
                    onChange={(e) => handleInputChange('comment', e.target.value)}
                    className="mt-2 min-h-24"
                    placeholder={dict.order.form.commentPlaceholder}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-lg font-medium"
                >
                  <Send className="h-5 w-5 mr-2" />
                  {isSubmitting ? 'Надсилаємо...' : dict.order.form.submit}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Quick Contact & Why Choose Us */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <Card className="border-none shadow-xl bg-white">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  {dict.order.quickContact}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full h-14 border-2 border-purple-500 text-purple-600 hover:bg-purple-50"
                  onClick={() => window.open('viber://chat?number=+380XXXXXXXXX', '_blank')}
                >
                  <MessageSquare className="h-5 w-5 mr-3" />
                  {dict.order.viber}
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="w-full h-14 border-2 border-green-500 text-green-600 hover:bg-green-50"
                  onClick={() => window.open('tel:+380XXXXXXXXX', '_blank')}
                >
                  <Phone className="h-5 w-5 mr-3" />
                  {dict.order.call}
                </Button>
              </CardContent>
            </Card>

            {/* Why Choose Us */}
            <Card className="border-none shadow-xl bg-gradient-to-br from-teal-50 to-cyan-50">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  {dict.order.whyUs.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium">{dict.order.whyUs.family}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium">{dict.order.whyUs.eco}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium">{dict.order.whyUs.guarantee}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                    <span className="text-gray-700 font-medium">{dict.order.whyUs.prices}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}